import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { text, language = 'en', formType, isPaid = false } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    // For free users, limit to first 200 words
    let textToProcess = text;
    if (!isPaid) {
      const words = text.split(' ').slice(0, 200);
      textToProcess = words.join(' ') + '...';
    }

    const prompt = `
      Simplify this USCIS form text to 6th grade reading level.
      Make it clear and helpful for immigrants.
      Keep important legal information but explain it simply.
      
      Original text:
      ${textToProcess}
      
      Provide:
      1. What this section asks for
      2. Why it's needed  
      3. Common mistakes to avoid
      
      Language: ${language === 'en' ? 'English' : language}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.3,
    });

    const simplified = response.choices[0].message.content;

    return NextResponse.json({
      simplified: simplified,
      disclaimer: "This is not legal advice, only a plain-language summary. Always consult with an immigration attorney for legal guidance.",
      isPreview: !isPaid,
      wordCount: textToProcess.split(' ').length
    });

  } catch (error) {
    console.error('Simplification Error:', error);
    return NextResponse.json({ error: 'AI processing failed' }, { status: 500 });
  }
}
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [currentUILanguage, setCurrentUILanguage] = useState('en');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  // Translations object
  const translations: { [key: string]: { [key: string]: string } } = {
    en: {
      'nav-features': 'Features',
      'nav-blog': 'Blog',
      'nav-pricing': 'Pricing',
      'nav-support': 'Support',
      'cta-get-started': 'Get Started',
      'hero-title': 'Immigration Forms Made Simple',
      'hero-subtitle': 'Transform complex USCIS documents into plain-language explanations in multiple languages. No legal jargon, just clear guidance.',
      'tool-title': 'Document Simplifier',
      'tool-subtitle': 'Select a form or upload your own document to get started',
      'form-selector-title': 'Choose a USCIS Form:',
      'form-i130-desc': 'Petition for Alien Relative - Family-based immigration petition',
      'form-i485-desc': 'Application for Permanent Residence (Green Card)',
      'form-i765-desc': 'Application for Employment Authorization Document',
      'form-n400-desc': 'Application for Naturalization (U.S. Citizenship)',
      'form-i864-desc': 'Affidavit of Support Under Section 213A',
      'form-i131-desc': 'Application for Travel Document (Advance Parole/Re-entry Permit)',
      'form-i751-desc': 'Petition to Remove Conditions on Permanent Residence',
      'upload-title': 'Or Upload Your Own Form',
      'upload-subtitle': 'Drag & drop or click to upload PDF files (Max 10MB)',
      'language-selector-title': 'Select Language:',
      'language-note': 'Language automatically matches your interface selection. Click to override if needed.',
      'preview-title': 'Form Preview & Simplification',
      'pricing-title': 'Choose Your Plan',
      'pricing-subtitle': 'Get instant access to simplified immigration forms in multiple languages'

    },
    es: {
      'nav-features': 'Características',
      'nav-blog': 'Blog',
      'nav-pricing': 'Precios',
      'nav-support': 'Soporte',
      'cta-get-started': 'Comenzar',
      'hero-title': 'Formularios de Inmigración Simplificados',
      'hero-subtitle': 'Transforme documentos complejos de USCIS en explicaciones claras en múltiples idiomas. Sin jerga legal, solo orientación clara.',
      'tool-title': 'Simplificador de Documentos',
      'tool-subtitle': 'Selecciona un formulario o sube tu propio documento para comenzar',
      'form-selector-title': 'Elige un Formulario de USCIS:',
      'form-i130-desc': 'Petición para Familiar Extranjero - Petición de inmigración basada en familia',
      'form-i485-desc': 'Solicitud de Residencia Permanente (Tarjeta Verde)',
      'form-i765-desc': 'Solicitud de Documento de Autorización de Empleo',
      'form-n400-desc': 'Solicitud de Naturalización (Ciudadanía Estadounidense)',
      'form-i864-desc': 'Declaración Jurada de Apoyo Bajo la Sección 213A',
      'form-i131-desc': 'Solicitud de Documento de Viaje (Permiso Anticipado/Permiso de Reingreso)',
      'form-i751-desc': 'Petición para Remover Condiciones de Residencia Permanente',
      'upload-title': 'O Sube Tu Propio Formulario',
      'upload-subtitle': 'Arrastra y suelta o haz clic para subir archivos PDF (Máx. 10MB)',
      'language-selector-title': 'Seleccionar Idioma:',
      'language-note': 'El idioma coincide automáticamente con tu selección de interfaz. Haz clic para anular si es necesario.',
      'preview-title': 'Vista Previa y Simplificación del Formulario',
      'pricing-title': 'Elige Tu Plan',
      'pricing-subtitle': 'Obtén acceso instantáneo a formularios de inmigración simplificados en múltiples idiomas'

    }
  };

  const updateUI = () => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (key && translations[currentUILanguage] && translations[currentUILanguage][key]) {
        element.textContent = translations[currentUILanguage][key];
      }
    });
  };

  const changeLanguage = (lang: string) => {
    setCurrentUILanguage(lang);
    setSelectedLanguage(lang);
    setShowLanguageMenu(false);
    
    // Handle RTL for Arabic
    if (lang === 'ar') {
      document.body.classList.add('rtl');
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.body.classList.remove('rtl');
      document.documentElement.setAttribute('dir', 'ltr');
    }
  };

const selectForm = (formType: string) => {
  setSelectedForm(formType);
  // Show preview after selection
  setTimeout(() => {
    const previewSection = document.getElementById('previewSection');
    if (previewSection) {
      previewSection.style.display = 'block';
      previewSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
const callSimplifyAPI = async (formType: string) => {
  try {
    // Sample form text (in production, this would come from uploaded PDF)
    const sampleText = `Form ${formType} Section 1: Provide your full legal name as it appears on your birth certificate or passport. Include your family name, given name, and middle name if applicable. This information must match exactly with supporting documents.`;
    
    const response = await fetch('/api/simplify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: sampleText,
        language: selectedLanguage,
        formType: formType,
        isPaid: false // For testing, set to false to see preview
      }),
    });

    const data = await response.json();
    
    if (data.simplified) {
      // Update the preview section with real AI content
      const previewContent = document.querySelector('.simplified-text');
      if (previewContent) {
        previewContent.innerHTML = `
          <h4>${formType} Section 1 (AI Simplified)</h4>
          ${data.simplified}
        `;
      }
    }
  } catch (error) {
    console.error('API call failed:', error);
  }
};
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      setSelectedForm('custom');
      // Show preview
      setTimeout(() => {
        const previewSection = document.getElementById('previewSection');
        if (previewSection) {
          previewSection.style.display = 'block';
          previewSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  const selectPlan = (planType: string) => {
    const plans: { [key: string]: string } = {
      'trial': 'Free Trial',
      'solo': 'Solo Plan ($59/month)',
      'family': 'Family Plan ($119/month)',
    };
    
    alert(`You selected: ${plans[planType]}\n\nIn the full version, this would redirect to Stripe checkout.`);
    setShowPricing(false);
  };

  useEffect(() => {
    updateUI();
  }, [currentUILanguage]);

  return (
    <>
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <div style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        overflowX: 'hidden',
        margin: 0,
        padding: 0
      }}>
        {/* Header */}
        <header style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <a href="#" style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#4f46e5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                fontSize: '2rem',
                filter: 'drop-shadow(0 2px 4px rgba(79, 70, 229, 0.3))'
              }}>🛃</span> USImmigrationFormsHelp
            </a>
            
            <ul style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              <li><a href="/blog" style={{color: '#374151', textDecoration: 'none'}}>Blog</a></li>
              <li style={{position: 'relative'}}>
                <button 
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#374151',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  🌐 EN
                </button>
                {showLanguageMenu && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    zIndex: 1001,
                    minWidth: '160px'
                  }}>
                    <a href="#" onClick={() => changeLanguage('en')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇺🇸 English</a>
                    <a href="#" onClick={() => changeLanguage('es')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇪🇸 Español</a>
                    <a href="#" onClick={() => changeLanguage('zh')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇨🇳 中文</a>
                    <a href="#" onClick={() => changeLanguage('tl')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇵🇭 Tagalog</a>
                    <a href="#" onClick={() => changeLanguage('vi')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇻🇳 Tiếng Việt</a>
                    <a href="#" onClick={() => changeLanguage('ar')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6'}}>🇸🇦 العربية</a>
                    <a href="#" onClick={() => changeLanguage('hi')} style={{display: 'block', padding: '0.75rem 1rem', color: '#374151', textDecoration: 'none', fontSize: '0.9rem'}}>🇮🇳 हिंदी</a>
                  </div>
                )}
              </li>
            </ul>
            
            <a 
              href="#" 
              onClick={() => setShowPricing(true)}
              data-translate="cta-get-started"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Get Started
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '5rem 0',
          color: 'white',
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}>
          <h1 data-translate="hero-title" style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            Immigration Forms Made Simple
          </h1>
          <p data-translate="hero-subtitle" style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Transform complex USCIS documents into plain-language explanations in multiple languages. No legal jargon, just clear guidance.
          </p>
        </section>

        {/* Main Tool */}
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{
            background: 'white',
            margin: '2rem 0',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
              padding: '2rem',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <h2>
                ✨ <span data-translate="tool-title">Document Simplifier</span>
              </h2>
              <p data-translate="tool-subtitle">Select a form or upload your own document to get started</p>
            </div>
            
            <div style={{padding: '2rem'}}>
              {/* Form Selection */}
              <div style={{marginBottom: '2rem'}}>
                <h3 data-translate="form-selector-title" style={{color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem'}}>Choose a USCIS Form:</h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    {id: 'I-130', desc: 'form-i130-desc', text: 'Petition for Alien Relative - Family-based immigration petition'},
                    {id: 'I-485', desc: 'form-i485-desc', text: 'Application for Permanent Residence (Green Card)'},
                    {id: 'I-765', desc: 'form-i765-desc', text: 'Application for Employment Authorization Document'},
                    {id: 'N-400', desc: 'form-n400-desc', text: 'Application for Naturalization (U.S. Citizenship)'},
                    {id: 'I-864', desc: 'form-i864-desc', text: 'Affidavit of Support Under Section 213A'},
                    {id: 'I-131', desc: 'form-i131-desc', text: 'Application for Travel Document (Advance Parole/Re-entry Permit)'},
                    {id: 'I-751', desc: 'form-i751-desc', text: 'Petition to Remove Conditions on Permanent Residence'}
                  ].map((form) => (
                    <div 
                      key={form.id}
                      onClick={() => selectForm(form.id)}
                      style={{
                        background: selectedForm === form.id ? 'linear-gradient(135deg, #eef2ff, #e0e7ff)' : 'linear-gradient(135deg, #fff, #f8fafc)',
                        border: selectedForm === form.id ? '2px solid #4f46e5' : '2px solid #e5e7eb',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <h4 style={{color: '#1f2937', marginBottom: '0.5rem', fontWeight: '600'}}>{form.id}</h4>
                      <p data-translate={form.desc} style={{color: '#6b7280', fontSize: '0.9rem'}}>{form.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div 
                onClick={() => document.getElementById('fileInput')?.click()}
                style={{
                  border: '2px dashed #d1d5db',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  background: '#fafafa',
                  cursor: 'pointer'
                }}
              >
                <div style={{fontSize: '3rem', color: '#9ca3af', marginBottom: '1rem'}}>☁️</div>
                <h4 data-translate="upload-title">Or Upload Your Own Form</h4>
                <p data-translate="upload-subtitle">Drag & drop or click to upload PDF files (Max 10MB)</p>
                <input 
                  type="file" 
                  id="fileInput" 
                  accept=".pdf" 
                  style={{display: 'none'}} 
                  onChange={handleFileUpload}
                />
              </div>

              {/* Language Selection */}
              <div style={{marginBottom: '2rem'}}>
                <h3 data-translate="language-selector-title">Select Language:</h3>
                <p data-translate="language-note" style={{fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem'}}>
                  Language automatically matches your interface selection. Click to override if needed.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '1rem'
                }}>
                  {[
                    {code: 'en', flag: '🇺🇸', name: 'English'},
                    {code: 'es', flag: '🇪🇸', name: 'Spanish'},
                    {code: 'zh', flag: '🇨🇳', name: 'Chinese'},
                    {code: 'tl', flag: '🇵🇭', name: 'Tagalog'},
                    {code: 'vi', flag: '🇻🇳', name: 'Vietnamese'},
                    {code: 'ar', flag: '🇸🇦', name: 'Arabic'},
                    {code: 'hi', flag: '🇮🇳', name: 'Hindi'}
                  ].map((lang) => (
                    <div 
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      style={{
                        background: selectedLanguage === lang.code ? '#eef2ff' : 'white',
                        border: selectedLanguage === lang.code ? '2px solid #4f46e5' : '2px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        color: selectedLanguage === lang.code ? '#4f46e5' : 'inherit'
                      }}
                    >
                      {lang.flag} {lang.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Section */}
              <div 
                id="previewSection"
                style={{
                  background: '#f9fafb',
                  borderRadius: '12px',
                  padding: '2rem',
                  margin: '2rem 0',
                  borderLeft: '4px solid #4f46e5',
                  display: selectedForm ? 'block' : 'none'
                }}
              >
                <h3 data-translate="preview-title">Form Preview & Simplification</h3>
                
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  margin: '1rem 0',
                  borderLeft: '3px solid #10b981',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h4>Section 1: Basic Information (Simplified)</h4>
                  <p><strong>What this section asks:</strong> Your personal details like name, address, and contact information.</p>
                  <p><strong>Why it's needed:</strong> USCIS needs to verify your identity and know how to contact you.</p>
                  <p><strong>Common mistakes:</strong> Make sure your name matches exactly what's on your passport or birth certificate.</p>
                </div>

                <div style={{
                  background: '#fef3cd',
                  border: '1px solid #f59e0b',
                  borderRadius: '8px',
                  padding: '1rem',
                  margin: '1rem 0',
                  color: '#92400e',
                  fontSize: '0.9rem'
                }}>
                  ⚠️ <strong> Disclaimer:</strong> This is not legal advice, only a plain-language summary. Always consult with an immigration attorney for legal guidance.
                </div>

                <div style={{textAlign: 'center', marginTop: '2rem'}}>
                  <button 
                    onClick={() => setShowPricing(true)}
                    style={{
                      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    🔓 Unlock Full Simplification - $59/month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Modal */}
        {showPricing && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative'
            }}>
              <button 
                onClick={() => setShowPricing(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#9ca3af'
                }}
              >
                ×
              </button>
              <h2 style={{textAlign: 'center', marginBottom: '1rem'}} data-translate="pricing-title">Choose Your Plan</h2>
              <p style={{textAlign: 'center', color: '#6b7280', marginBottom: '2rem'}} data-translate="pricing-subtitle">
                Get instant access to simplified immigration forms in multiple languages
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #fff, #f8fafc)',
                  border: '2px solid #e5e7eb',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3>Trial</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: '700', color: '#4f46e5', margin: '1rem 0'}}>Free</div>
                  <ul style={{listStyle: 'none', textAlign: 'left', margin: '1.5rem 0', padding: 0}}>
                    <li style={{padding: '0.5rem 0'}}>✓ 1 page simplification</li>
                    <li style={{padding: '0.5rem 0'}}>✓ English & Spanish only</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Basic explanations</li>
                  </ul>
                  <button 
                    onClick={() => selectPlan('trial')}
                    style={{
                      background: 'transparent',
                      border: '2px solid #4f46e5',
                      color: '#4f46e5',
                      padding: '0.75rem 2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Start Free Trial
                  </button>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
                  border: '2px solid #4f46e5',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3>Solo</h3>
                  <div style={{fontSize: '2.5rem', fontWeight: '700', color: '#4f46e5'}}>$59<span style={{fontSize: '1rem', fontWeight: '400'}}>/month</span></div>
<p style={{margin: '1rem 0', fontSize: '0.9rem'}}>Unlimited simplifications • Cancel anytime</p>
                  <ul style={{listStyle: 'none', textAlign: 'left', margin: '1.5rem 0', padding: 0}}>
                    <li style={{padding: '0.5rem 0'}}>✓ Unlimited simplifications</li>
                    <li style={{padding: '0.5rem 0'}}>✓ All 7 languages</li>
                    <li style={{padding: '0.5rem 0'}}>✓ PDF/DOCX downloads</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Common mistakes guide</li>
                  </ul>
                  <button 
                    onClick={() => selectPlan('30day')}
                    style={{
                      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Get Started
                  </button>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #fff, #f8fafc)',
                  border: '2px solid #e5e7eb',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3>Family Bundle</h3>
                 <div style={{fontSize: '2.5rem', fontWeight: '700', color: '#4f46e5'}}>$119<span style={{fontSize: '1rem', fontWeight: '400'}}>/month</span></div>
<p style={{margin: '1rem 0', fontSize: '0.9rem'}}>Multiple applicants • Cancel anytime</p>
                  <ul style={{listStyle: 'none', textAlign: 'left', margin: '1.5rem 0', padding: 0}}>
                    <li style={{padding: '0.5rem 0'}}>✓ 90-day access</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Multiple applicants</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Form comparison</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Priority support</li>
                  </ul>
                  <button 
                    onClick={() => selectPlan('family')}
                    style={{
                      background: 'transparent',
                      border: '2px solid #4f46e5',
                      color: '#4f46e5',
                      padding: '0.75rem 2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Choose Family
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Footer */}
      <footer style={{background: 'rgba(255, 255, 255, 0.95)', padding: '2rem', textAlign: 'center', marginTop: '4rem'}}>
        <p style={{fontSize: '0.875rem', color: '#6b7280', maxWidth: '1200px', margin: '0 auto'}}>
          USImmigrationFormsHelp.com is not affiliated with USCIS, DHS, or any government agency. This site provides plain-language explanations for informational purposes only and is not legal advice. <a href="/disclosures" style={{color: '#4f46e5', textDecoration: 'underline'}}>View full disclosure</a>
        </p>
      </footer>
      </div>
    </>
  );
}

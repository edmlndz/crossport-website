// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [language, setLanguage] = useState('es')

  const translations = {
    es: {
      // Navigation
      home: 'Inicio',
      about: 'Sobre Mí',
      apps: 'Nuestras Apps',
      contact: 'Contacto',
      
      // Meta
      title: 'Eduardo Meléndez - CrossPort | Desarrollo de Software',
      description: 'Desarrollador de software con más de 5 años de experiencia. Especialista en JavaScript, Java, PHP, React, Next.js y más.',
      
      // Hero Section
      brandName: 'CrossPort',
      heroSubtitle: 'Startup dedicada al desarrollo de Apps innovadores',
      missionTitle: 'Nuestra Misión',
      missionText1: 'CrossPort es una startup tecnológica enfocada en desarrollar aplicaciones que simplifiquen la vida de las personas y empresas. Creamos apps intuitivas y poderosas que resuelven problemas reales del día a día.',
      missionText2: 'Nuestro enfoque se centra en la innovación, la usabilidad y la escalabilidad, desarrollando productos que marcan la diferencia en el mercado.',
      learnMore: 'Conoce más sobre Eduardo',
      contactUs: 'Contactar',
      
      // Our Focus
      focusTitle: 'Nuestro Enfoque',
      appDevelopment: 'Desarrollo de Apps',
      appDevelopmentDesc: 'Aplicaciones web escalables con modelos de suscripción',
      userExperience: 'Experiencia de Usuario',
      userExperienceDesc: 'Interfaces intuitivas y experiencias excepcionales',
      continuousInnovation: 'Innovación Continua',
      continuousInnovationDesc: 'Siempre explorando nuevas tecnologías y metodologías',
      
      // About Section
      aboutTitle: 'Sobre Mí',
      aboutSubtitle: 'Apasionado por crear soluciones tecnológicas que marquen la diferencia',
      helloIm: 'Hola, soy',
      myName: 'Eduardo Meléndez',
      myRole: 'Desarrollador de Software y Fundador de CrossPort - Creando el futuro de las aplicaciones',
      learnCrossPort: 'Conoce CrossPort',
      
      // Experience
      experienceTitle: 'Mi Experiencia',
      experienceText1: 'Con más de 5 años de experiencia en el desarrollo de software, me he especializado en crear aplicaciones escalables y robustas. Como fundador de CrossPort, combino mi pasión por la tecnología con el espíritu emprendedor para desarrollar productos que realmente marcan la diferencia en la vida de las personas.',
      experienceText2: 'Mi enfoque se centra en escribir código limpio, mantener las mejores prácticas y entregar soluciones que no solo cumplan con los requisitos técnicos, sino que también brinden una excelente experiencia de usuario y generen valor real para el negocio.',
      
      // Specialties
      specialtiesTitle: 'Especialidades',
      fullStackDev: 'Desarrollo Full-Stack',
      scalableApps: 'Aplicaciones Escalables',
      apiMicroservices: 'API REST y Microservicios',
      softwareArchitecture: 'Arquitectura de Software',
      techEntrepreneurship: 'Emprendimiento Tecnológico',
      followGithub: 'Sígueme en GitHub',
      email: 'Email',
      
      // Apps Section
      appsTitle: 'Nuestras Apps',
      appsSubtitle: 'Aplicaciones innovadoras desarrolladas por CrossPort para simplificar la vida de nuestros usuarios',
      upcomingLaunch: '🚀 Próximo Lanzamiento',
      budgieTitle: 'Budgie',
      budgieSubtitle: 'Tu asistente personal para la gestión financiera inteligente',
      budgieDescription: 'Budgie es nuestra primera aplicación diseñada para ayudarte a tomar control total de tus finanzas personales con herramientas inteligentes para gestionar ingresos, gastos y crear presupuestos que realmente funcionen.',
      notifyLaunch: 'Notificarme del Lanzamiento',
      seeMoreDetails: 'Ver Más Detalles',
      incomeManagement: 'Gestión de Ingresos',
      incomeManagementDesc: 'Registra y categoriza todos tus ingresos',
      expenseControl: 'Control de Gastos',
      expenseControlDesc: 'Monitorea en qué gastas tu dinero',
      smartBudgets: 'Presupuestos Inteligentes',
      smartBudgetsDesc: 'Crea presupuestos realistas y alcanzables',
      intuitiveInterface: 'Interfaz Intuitiva',
      intuitiveInterfaceDesc: 'Diseño simple y fácil de usar',
      nextApp: 'Próxima App',
      nextAppDesc: 'Estamos trabajando en nuestra siguiente aplicación revolucionaria',
      inDevelopment: 'En Desarrollo',
      ideasInProcess: 'Ideas en Proceso',
      ideasInProcessDesc: 'Constantemente exploramos nuevas oportunidades para crear valor',
      ideation: 'Ideación',
      
      // Contact Section
      contactTitle: '¡Trabajemos Juntos!',
      contactSubtitle: '¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea',
      contactInfo: 'Información de Contacto',
      github: 'GitHub',
      sendMessage: 'Envíame un Mensaje',
      successMessage: '¡Mensaje enviado exitosamente! Te responderé pronto.',
      errorMessage: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Cuéntame sobre tu proyecto',
      sendButton: 'Enviar Mensaje',
      sendingButton: 'Enviando...',
      
      // Footer
      footerText: '© 2025 Eduardo Meléndez - CrossPort. Todos los derechos reservados.'
    },
    en: {
      // Navigation
      home: 'Home',
      about: 'About Me',
      apps: 'Our Apps',
      contact: 'Contact',
      
      // Meta
      title: 'Eduardo Meléndez - CrossPort | Software Development',
      description: 'Software developer with over 5 years of experience. Specialist in JavaScript, Java, PHP, React, Next.js and more.',
      
      // Hero Section
      brandName: 'CrossPort',
      heroSubtitle: 'Startup dedicated to developing innovative Apps',
      missionTitle: 'Our Mission',
      missionText1: 'CrossPort is a technology startup focused on developing applications that simplify the lives of people and businesses. We create intuitive and powerful apps that solve real day-to-day problems.',
      missionText2: 'Our approach focuses on innovation, usability, and scalability, developing products that make a difference in the market.',
      learnMore: 'Learn more about Eduardo',
      contactUs: 'Contact',
      
      // Our Focus
      focusTitle: 'Our Focus',
      appDevelopment: 'App Development',
      appDevelopmentDesc: 'Scalable web applications with subscription models',
      userExperience: 'User Experience',
      userExperienceDesc: 'Intuitive interfaces and exceptional experiences',
      continuousInnovation: 'Continuous Innovation',
      continuousInnovationDesc: 'Always exploring new technologies and methodologies',
      
      // About Section
      aboutTitle: 'About Me',
      aboutSubtitle: 'Passionate about creating technological solutions that make a difference',
      helloIm: 'Hello, I\'m',
      myName: 'Eduardo Meléndez',
      myRole: 'Software Developer and Founder of CrossPort - Creating the future of applications',
      learnCrossPort: 'Learn about CrossPort',
      
      // Experience
      experienceTitle: 'My Experience',
      experienceText1: 'With over 5 years of experience in software development, I have specialized in creating scalable and robust applications. As founder of CrossPort, I combine my passion for technology with the entrepreneurial spirit to develop products that truly make a difference in people\'s lives.',
      experienceText2: 'My approach focuses on writing clean code, maintaining best practices, and delivering solutions that not only meet technical requirements but also provide an excellent user experience and generate real business value.',
      
      // Specialties
      specialtiesTitle: 'Specialties',
      fullStackDev: 'Full-Stack Development',
      scalableApps: 'Scalable Applications',
      apiMicroservices: 'REST API & Microservices',
      softwareArchitecture: 'Software Architecture',
      techEntrepreneurship: 'Tech Entrepreneurship',
      followGithub: 'Follow me on GitHub',
      email: 'Email',
      
      // Apps Section
      appsTitle: 'Our Apps',
      appsSubtitle: 'Innovative applications developed by CrossPort to simplify our users\' lives',
      upcomingLaunch: '🚀 Upcoming Launch',
      budgieTitle: 'Budgie',
      budgieSubtitle: 'Your personal assistant for intelligent financial management',
      budgieDescription: 'Budgie is our first application designed to help you take total control of your personal finances with intelligent tools to manage income, expenses, and create budgets that actually work.',
      notifyLaunch: 'Notify me of Launch',
      seeMoreDetails: 'See More Details',
      incomeManagement: 'Income Management',
      incomeManagementDesc: 'Record and categorize all your income',
      expenseControl: 'Expense Control',
      expenseControlDesc: 'Monitor what you spend your money on',
      smartBudgets: 'Smart Budgets',
      smartBudgetsDesc: 'Create realistic and achievable budgets',
      intuitiveInterface: 'Intuitive Interface',
      intuitiveInterfaceDesc: 'Simple and easy-to-use design',
      nextApp: 'Next App',
      nextAppDesc: 'We are working on our next revolutionary application',
      inDevelopment: 'In Development',
      ideasInProcess: 'Ideas in Process',
      ideasInProcessDesc: 'We constantly explore new opportunities to create value',
      ideation: 'Ideation',
      
      // Contact Section
      contactTitle: 'Let\'s Work Together!',
      contactSubtitle: 'Have a project in mind? I\'d love to learn more about your idea',
      contactInfo: 'Contact Information',
      github: 'GitHub',
      sendMessage: 'Send me a Message',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
      errorMessage: 'There was an error sending the message. Please try again.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell me about your project',
      sendButton: 'Send Message',
      sendingButton: 'Sending...',
      
      // Footer
      footerText: '© 2025 Eduardo Meléndez - CrossPort. All rights reserved.'
    }
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/myzdvoae', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Cross</span>Port
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.home}</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.about}</a>
              <a href="#saas" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.apps}</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.contact}</a>
              
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 flex items-center justify-center ml-4 hover:scale-110 hover:shadow-lg cursor-pointer"
                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <span className="text-sm font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.home}</a>
                <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.about}</a>
                <a href="#saas" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.apps}</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.contact}</a>
                
                {/* Mobile Language Toggle */}
                <div className="px-3 py-2">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 transition-colors"
                    title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                  >
                    <span>{language === 'es' ? 'Idioma' : 'Language'}</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-sm font-semibold">
                      {language === 'es' ? 'ES' : 'EN'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section - Now with Crossport content */}
        <section id="inicio" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.brandName}
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {t.heroSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t.missionTitle}</h2>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {t.missionText1}
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  {t.missionText2}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href="#sobre-mi" 
                    className="px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
{language === 'es' ? 'Conoce más' : 'Learn more'}
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6">{t.focusTitle}</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.appDevelopment}</h3>
                      <p className="opacity-80 text-sm">{t.appDevelopmentDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.userExperience}</h3>
                      <p className="opacity-80 text-sm">{t.userExperienceDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.continuousInnovation}</h3>
                      <p className="opacity-80 text-sm">{t.continuousInnovationDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About Me & CrossPort Section */}
        <section id="sobre-mi" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  {t.helloIm}
                  <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{t.myName}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  {t.myRole}
                </p>
                
                {/* GitHub and Contact Sections */}
                <div className="space-y-4">
                  <div className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.followGithub}</p>
                      <a href="https://github.com/edmlndz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                        @edmlndz
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.email}</p>
                      <p className="text-gray-600">crossport.dev@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 relative">
                  {/* Placeholder para tu foto - reemplaza con tu imagen real */}
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    EM
                  </div>
                  { //Una vez que tengas tu foto, usa este código:
                  <Image
                    src="/images/prophile.png"
                    alt="Eduardo Meléndez"
                    fill
                    className="rounded-full object-cover shadow-2xl"
                    priority
                  />
                  }
                </div>
              </div>
            </div>

            {/* Experience and Specialties */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.experienceTitle}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.experienceText1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.experienceText2}
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.specialtiesTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t.fullStackDev}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t.scalableApps}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t.apiMicroservices}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t.softwareArchitecture}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{t.techEntrepreneurship}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS Products Section */}
        <section id="saas" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.appsTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.appsSubtitle}
              </p>
            </div>
            
            {/* SaaS Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Budgie - Featured Product */}
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-sm border border-amber-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-amber-500 text-amber-900 rounded-full text-sm font-semibold mb-6">
                      {t.upcomingLaunch}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {t.budgieTitle}
                    </h3>
                    <p className="text-xl text-gray-700 mb-6">
                      {t.budgieSubtitle}
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {t.budgieDescription}
                    </p>
                    {/* Commented temporarily - may be enabled later
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors font-semibold">
                        {t.notifyLaunch}
                      </button>
                      <button className="px-6 py-3 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 rounded-lg transition-colors font-semibold">
                        {t.seeMoreDetails}
                      </button>
                    </div>
                    */}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <div className="text-3xl mb-3">💰</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.incomeManagement}</h4>
                      <p className="text-sm text-gray-600">{t.incomeManagementDesc}</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <div className="text-3xl mb-3">📊</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.expenseControl}</h4>
                      <p className="text-sm text-gray-600">{t.expenseControlDesc}</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <div className="text-3xl mb-3">📈</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.smartBudgets}</h4>
                      <p className="text-sm text-gray-600">{t.smartBudgetsDesc}</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                      <div className="text-3xl mb-3">📱</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.intuitiveInterface}</h4>
                      <p className="text-sm text-gray-600">{t.intuitiveInterfaceDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🔮</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">
                    {t.nextApp}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {t.nextAppDesc}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-full text-sm font-semibold">
                    {t.inDevelopment}
                  </div>
                </div>
              </div>

              {/* Future Products Placeholder */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl text-white">💡</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.ideasInProcess}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t.ideasInProcessDesc}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold">
                    {t.ideation}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.contactTitle}
              </h2>
              <p className="text-xl text-gray-300">
                {t.contactSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contactInfo}</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">crossport.dev@gmail.com</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">{t.sendMessage}</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                    {t.successMessage}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                    {t.errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder={t.namePlaceholder}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder={t.emailPlaceholder}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows="4" 
                      name="message"
                      placeholder={t.messagePlaceholder}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? t.sendingButton : t.sendButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Cross</span>Port
            </span>
          </div>
          <p className="text-gray-400">
            {t.footerText}
          </p>
        </div>
      </footer>
    </>
  )
}
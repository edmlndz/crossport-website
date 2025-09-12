// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const technologies = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Java', color: 'bg-red-600' },
    { name: 'PHP', color: 'bg-purple-600' },
    { name: 'React.js', color: 'bg-blue-500' },
    { name: 'Next.js', color: 'bg-gray-900' },
    { name: 'Angular', color: 'bg-red-500' },
    { name: 'Laravel', color: 'bg-red-700' },
    { name: 'Node.js', color: 'bg-green-600' }
  ]

  return (
    <>
      <Head>
        <title>Eduardo Meléndez - Crossport | Desarrollo de Software</title>
        <meta name="description" content="Desarrollador de software con más de 5 años de experiencia. Especialista en JavaScript, Java, PHP, React, Next.js y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Cross</span>port
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-emerald-600 transition-colors">Sobre Mí</a>
              <a href="#tecnologias" className="text-gray-700 hover:text-emerald-600 transition-colors">Tecnologías</a>
              <a href="#crossport" className="text-gray-700 hover:text-emerald-600 transition-colors">Crossport</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Inicio</a>
                <a href="#sobre-mi" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Sobre Mí</a>
                <a href="#tecnologias" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Tecnologías</a>
                <a href="#crossport" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Crossport</a>
                <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Hola, soy
                  <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Eduardo Meléndez</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Desarrollador de Software y Fundador de <span className="font-semibold text-emerald-600">Crossport</span> - 
                  Creando el futuro de las aplicaciones SaaS
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#crossport" 
                    className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Conoce Crossport
                  </a>
                  <a 
                    href="#contacto" 
                    className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 text-center font-semibold"
                  >
                    Contactar
                  </a>
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
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sobre Mí
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Apasionado por crear soluciones tecnológicas que marquen la diferencia
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mi Experiencia</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Con más de 5 años de experiencia en el desarrollo de software, me he especializado en 
                  crear aplicaciones SaaS escalables y robustas. Como fundador de Crossport, combino mi 
                  pasión por la tecnología con el espíritu emprendedor para desarrollar productos que 
                  realmente marcan la diferencia en la vida de las personas.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, mantener las mejores prácticas y 
                  entregar soluciones que no solo cumplan con los requisitos técnicos, sino que 
                  también brinden una excelente experiencia de usuario y generen valor real para el negocio.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Especialidades</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Desarrollo Full-Stack</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Aplicaciones SaaS Escalables</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">API REST y Microservicios</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Arquitectura de Software</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Emprendimiento Tecnológico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tecnologías
              </h2>
              <p className="text-xl text-gray-600">
                Herramientas y lenguajes que domino para crear soluciones excepcionales
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
                >
                  <div className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>
                    {tech.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crossport Section */}
        <section id="crossport" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Crossport
              </h2>
              <p className="text-xl opacity-90">
                Startup dedicada al desarrollo de SaaS innovadores
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Crossport es una startup tecnológica enfocada en desarrollar soluciones SaaS que 
                  simplifiquen la vida de las personas y empresas. Creamos aplicaciones intuitivas 
                  y poderosas que resuelven problemas reales del día a día.
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  Nuestro enfoque se centra en la innovación, la usabilidad y la escalabilidad, 
                  desarrollando productos que marcan la diferencia en el mercado.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Nuestro Enfoque</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Desarrollo de SaaS</h4>
                      <p className="opacity-80 text-sm">Aplicaciones web escalables con modelos de suscripción</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Experiencia de Usuario</h4>
                      <p className="opacity-80 text-sm">Interfaces intuitivas y experiencias excepcionales</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovación Continua</h4>
                      <p className="opacity-80 text-sm">Siempre explorando nuevas tecnologías y metodologías</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Budgie Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-amber-500 text-amber-900 rounded-full text-sm font-semibold mb-6">
                  🚀 Próximo Lanzamiento
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Budgie
                </h3>
                <p className="text-xl opacity-90">
                  Tu asistente personal para la gestión financiera
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-6">¿Qué es Budgie?</h4>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    Budgie es nuestra primera aplicación SaaS, diseñada para ayudarte a tomar control 
                    total de tus finanzas personales. Con Budgie, podrás gestionar tus ingresos y gastos 
                    de manera inteligente y crear presupuestos mensuales que realmente funcionen.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    La app combina simplicidad con potencia, ofreciendo herramientas avanzadas de 
                    análisis financiero en una interfaz fácil de usar.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold">Características Principales</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl mb-2">💰</div>
                      <h5 className="font-semibold mb-1">Gestión de Ingresos</h5>
                      <p className="text-sm opacity-80">Registra y categoriza todos tus ingresos</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <h5 className="font-semibold mb-1">Control de Gastos</h5>
                      <p className="text-sm opacity-80">Monitorea en qué gastas tu dinero</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl mb-2">📈</div>
                      <h5 className="font-semibold mb-1">Presupuestos Inteligentes</h5>
                      <p className="text-sm opacity-80">Crea presupuestos realistas y alcanzables</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl mb-2">📱</div>
                      <h5 className="font-semibold mb-1">Interfaz Intuitiva</h5>
                      <p className="text-sm opacity-80">Diseño simple y fácil de usar</p>
                    </div>
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
                ¡Trabajemos Juntos!
              </h2>
              <p className="text-xl text-gray-300">
                ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
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
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a href="https://github.com/edmlndz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        @edmlndz
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-3m0-6v-3m0-6v3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Website</p>
                      <p className="text-gray-300">www.crossport.dev</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Tu email"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows="4" 
                      placeholder="Cuéntame sobre tu proyecto"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Enviar Mensaje
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
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Cross</span>port
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Eduardo Meléndez - Crossport. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
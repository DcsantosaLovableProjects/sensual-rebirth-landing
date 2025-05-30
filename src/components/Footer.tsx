
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'TikTok', url: '#', icon: '🎵' },
    { name: 'YouTube', url: '#', icon: '📺' },
    { name: 'Telegram', url: '#', icon: '💬' },
  ];

  const quickLinks = [
    { name: 'Nuestra Historia', url: '#' },
    { name: 'Blog de Bienestar', url: '#' },
    { name: 'Guías Gratuitas', url: '#' },
    { name: 'Testimonios', url: '#' },
    { name: 'Preguntas Frecuentes', url: '#' },
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', url: '#' },
    { name: 'Términos y Condiciones', url: '#' },
    { name: 'Política de Envíos', url: '#' },
    { name: 'Política de Devoluciones', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-playfair text-3xl font-bold mb-4 bg-gradient-to-r from-terracotta-400 to-lavender-400 bg-clip-text text-transparent">
                Sensual Wellness
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Redefiniendo la educación sexual femenina con productos seguros, 
                contenido educativo y una comunidad inclusiva donde tu placer 
                y bienestar son prioridad.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold text-xl mb-4 text-terracotta-400">
                Síguenos en redes sociales
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta-500 to-lavender-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-terracotta-500/20 to-lavender-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <h4 className="font-semibold text-lg mb-3 text-terracotta-300">
                💜 Newsletter exclusivo
              </h4>
              <p className="text-gray-300 mb-4">
                Contenido íntimo, rituales de autocuidado y descuentos especiales.
              </p>
              <button className="bg-gradient-to-r from-terracotta-500 to-lavender-500 hover:from-terracotta-600 hover:to-lavender-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Suscribirme
              </button>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-lavender-400">
              Explora
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-terracotta-300 transition-colors duration-300 hover:underline decoration-2 underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-sunset-400">
              Información
            </h4>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-gray-300">
                  <span className="block font-medium text-white mb-1">Email:</span>
                  hola@sensualwellness.com
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="block font-medium text-white mb-1">WhatsApp:</span>
                  +52 555 123 4567
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="block font-medium text-white mb-1">Horario de atención:</span>
                  Lun - Vie: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-lavender-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Sensual Wellness. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-lg">🔒</span>
                <span className="text-gray-300 text-sm">Compra segura</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-lg">📦</span>
                <span className="text-gray-300 text-sm">Envío discreto</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm italic">
              "Tu bienestar sexual es un acto revolucionario de amor propio."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

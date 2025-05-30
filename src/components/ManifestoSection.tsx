
import React from 'react';

const ManifestoSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-terracotta-100 via-rosegold-100 to-lavender-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-terracotta-600 to-lavender-600 bg-clip-text text-transparent">
              Tu placer es tu poder
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Durante generaciones, se nos enseñó a esconder, minimizar o avergonzarnos 
                de nuestra sexualidad. Pero tu placer no es algo de lo que debas esconderte 
                — es una fuerza poderosa que te conecta contigo misma.
              </p>
              
              <p>
                <strong className="text-terracotta-600">Creemos que explorar tu sensualidad es un acto de rebeldía, de amor propio y de empoderamiento.</strong> 
                Es reclamar lo que siempre fue tuyo: el derecho a conocerte, a disfrutarte, 
                a priorizarte.
              </p>
              
              <p>
                Aquí no hay juicios, no hay reglas imposibles, no hay cuerpos "incorrectos". 
                Solo un espacio seguro donde puedes ser exactamente quien eres, donde tu 
                curiosidad es celebrada y tu bienestar es prioridad.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-8 border-l-4 border-terracotta-400">
                <p className="font-medium text-terracotta-800 italic">
                  "Porque cuando una mujer se empodera en su sexualidad, 
                  no solo se transforma a sí misma — transforma el mundo que la rodea."
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-terracotta-200 via-rosegold-200 to-lavender-200 shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta-400 to-rosegold-400 flex items-center justify-center">
                        <span className="text-white text-xl">🌸</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rosegold-400 to-lavender-400 flex items-center justify-center">
                        <span className="text-white text-xl">✨</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender-400 to-sunset-400 flex items-center justify-center">
                        <span className="text-white text-xl">💜</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunset-400 to-terracotta-400 flex items-center justify-center">
                        <span className="text-white text-xl">🌙</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta-400 to-lavender-400 flex items-center justify-center">
                        <span className="text-white text-xl">🌿</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender-400 to-rosegold-400 flex items-center justify-center">
                        <span className="text-white text-xl">💎</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium text-center">
                      Imagen representando diversidad
                      <br />
                      de cuerpos, edades e identidades
                      <br />
                      en un ambiente de empoderamiento
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating quote elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-48">
                <p className="text-sm font-medium text-terracotta-600 italic">
                  "Mi sexualidad es mía y la celebro"
                </p>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-48">
                <p className="text-sm font-medium text-lavender-600 italic">
                  "Merezco placer y bienestar"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-terracotta-400 to-rosegold-400 flex items-center justify-center">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-terracotta-600">
              Privacidad Garantizada
            </h3>
            <p className="text-gray-700">
              Envíos discretos y compras seguras. Tu intimidad es sagrada para nosotras.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-lavender-400 to-sunset-400 flex items-center justify-center">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-lavender-600">
              Educación Positiva
            </h3>
            <p className="text-gray-700">
              Contenido educativo basado en ciencia y experiencias reales de nuestra comunidad.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sunset-400 to-terracotta-400 flex items-center justify-center">
              <span className="text-white text-2xl">💖</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3 text-sunset-600">
              Comunidad Inclusiva
            </h3>
            <p className="text-gray-700">
              Un espacio seguro para todas las mujeres y disidencias sexuales, sin excepciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;

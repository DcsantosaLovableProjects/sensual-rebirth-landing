
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María Elena, 34",
      quote: "Por primera vez en mi vida, me siento completamente cómoda con mi sexualidad. Esta comunidad me enseñó que mi placer importa.",
      avatar: "🌸",
      color: "from-terracotta-400 to-rosegold-400"
    },
    {
      id: 2,
      name: "Ana Sofía, 28",
      quote: "Después de años sintiéndome desconectada de mi cuerpo, encontré aquí las herramientas para reconectarme conmigo misma.",
      avatar: "✨",
      color: "from-lavender-400 to-sunset-400"
    },
    {
      id: 3,
      name: "Carmen, 41",
      quote: "Como madre, pensé que mi sexualidad había quedado en el pasado. Me equivoqué. Nunca es tarde para priorizarte.",
      avatar: "💜",
      color: "from-rosegold-400 to-lavender-400"
    },
    {
      id: 4,
      name: "Valeria, 25",
      quote: "Crecí con tanto tabú alrededor del sexo. Aquí aprendí que la curiosidad y el autocuidado van de la mano.",
      avatar: "🌙",
      color: "from-sunset-400 to-terracotta-400"
    },
    {
      id: 5,
      name: "Isabella, 37",
      quote: "Los productos no solo son hermosos, sino que vienen con educación real. Me siento empoderada en cada compra.",
      avatar: "🌿",
      color: "from-terracotta-400 to-lavender-400"
    },
    {
      id: 6,
      name: "Lucía, 30",
      quote: "Finalmente un espacio donde puedo ser yo misma sin juicios. Mi partner y yo hemos crecido mucho juntas gracias a esto.",
      avatar: "💎",
      color: "from-lavender-400 to-rosegold-400"
    }
  ];

  const powerfulPhrases = [
    "Mi cuerpo, mis reglas",
    "El placer es mi derecho",
    "Mi sexualidad me pertenece",
    "Soy libre de explorar",
    "Merezco sentirme plena",
    "Mi bienestar es prioridad"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-lavender-50 via-white to-rosegold-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-lavender-600 bg-clip-text text-transparent">
            Voces de nuestra comunidad
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estas son las historias reales de mujeres que decidieron priorizar su bienestar 
            sexual y transformaron su relación consigo mismas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mr-4`}>
                    <span className="text-white text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed italic relative">
                  <span className="text-4xl text-terracotta-300 absolute -top-2 -left-2">"</span>
                  <p className="relative z-10 pl-4">{testimonial.quote}</p>
                  <span className="text-4xl text-terracotta-300 absolute -bottom-4 -right-2">"</span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-terracotta-100 via-rosegold-100 to-lavender-100 rounded-3xl p-12 animate-scale-in">
          <h3 className="font-playfair text-3xl font-bold text-center mb-8 text-gray-800">
            Afirmaciones de empoderamiento
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerfulPhrases.map((phrase, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-gradient-to-br from-terracotta-400 to-lavender-400 flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                <p className="font-medium text-gray-800 text-lg">
                  {phrase}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium italic text-lg">
              Repite estas frases hasta que las creas. Tu empoderamiento sexual empieza contigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-signup');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta-100/80 via-rosegold-100/70 to-lavender-100/60 backdrop-blur-sm" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-terracotta-200 to-rosegold-200 opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-lavender-200 to-sunset-200 opacity-40 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-rosegold-300 to-terracotta-300 opacity-25 animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-terracotta-600 via-rosegold-600 to-lavender-600 bg-clip-text text-transparent">
              Redescubre
            </span>
            <br />
            <span className="text-gray-800">tu placer,</span>
            <br />
            <span className="bg-gradient-to-r from-lavender-600 via-sunset-600 to-terracotta-600 bg-clip-text text-transparent">
              abraza tu poder
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Tu sensualidad es un camino hacia la confianza y el amor propio. 
            Únete a una comunidad segura e inclusiva donde explorar tu bienestar sexual 
            es un acto de empoderamiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToNewsletter}
              className="bg-gradient-to-r from-terracotta-500 to-rosegold-500 hover:from-terracotta-600 hover:to-rosegold-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quiero reconectar con mi placer
            </Button>
            
            <button className="text-terracotta-600 hover:text-terracotta-700 font-medium text-lg underline decoration-2 underline-offset-4 transition-colors duration-300">
              Conoce nuestra historia
            </button>
          </div>
        </div>
        
        {/* Hero image placeholder */}
        <div className="mt-16 animate-scale-in">
          <div className="relative max-w-2xl mx-auto">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-terracotta-200 via-rosegold-200 to-lavender-200 shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-terracotta-400 to-rosegold-400 flex items-center justify-center">
                    <span className="text-white text-2xl">✨</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Imagen inclusiva y sensual
                    <br />
                    (diversidad de cuerpos y identidades)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-lavender-300 to-sunset-300 opacity-60 animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-rosegold-300 to-terracotta-300 opacity-50 animate-bounce delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

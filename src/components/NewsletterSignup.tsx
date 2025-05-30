
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data submitted:', formData);
    
    toast({
      title: "¡Bienvenida a nuestra comunidad! 💜",
      description: "Te has suscrito exitosamente. Pronto recibirás contenido exclusivo sobre bienestar sexual.",
    });
    
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="newsletter-signup" className="py-20 px-6 bg-gradient-to-r from-lavender-100 via-rosegold-100 to-terracotta-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-lavender-600 bg-clip-text text-transparent">
            Únete a nuestra comunidad
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Recibe contenido exclusivo, tips de bienestar sexual, rituales de autocuidado 
            y acceso anticipado a nuestros productos especiales.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Tu nombre *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="¿Cómo te gusta que te llamen?"
                  required
                  className="border-2 border-terracotta-200 focus:border-terracotta-400 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+52 123 456 7890"
                  className="border-2 border-terracotta-200 focus:border-terracotta-400 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                className="border-2 border-terracotta-200 focus:border-terracotta-400 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-500"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-lavender-500 to-terracotta-500 hover:from-lavender-600 hover:to-terracotta-600 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? 'Suscribiéndote...' : 'Quiero formar parte 💜'}
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              Al suscribirte, aceptas recibir emails sobre bienestar sexual y productos. 
              Tu privacidad es sagrada - nunca compartiremos tu información.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

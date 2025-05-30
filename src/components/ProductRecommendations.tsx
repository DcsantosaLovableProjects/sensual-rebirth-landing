
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      name: "Kit de Inicio Sensual",
      description: "Todo lo que necesitas para comenzar tu viaje: aceite de masaje, vela aromática y guía de rituales.",
      price: "$89",
      image: "🌸",
      benefits: ["Aceite de coco orgánico", "Vela de soja natural", "Guía digital exclusiva"]
    },
    {
      id: 2,
      name: "Aceite Íntimo de Lavanda",
      description: "Aceite premium con ingredientes naturales para momentos de conexión contigo misma.",
      price: "$45",
      image: "🌿",
      benefits: ["100% natural", "pH balanceado", "Aroma relajante"]
    },
    {
      id: 3,
      name: "Set de Lencería Empoderada",
      description: "Diseños inclusivos que celebran todos los cuerpos, creados para hacerte sentir poderosa.",
      price: "$120",
      image: "✨",
      benefits: ["Tallas XS-4XL", "Materiales sostenibles", "Diseño inclusivo"]
    },
    {
      id: 4,
      name: "Ritual de Luna Nueva",
      description: "Kit ceremonial para conectar con tu feminidad: cristales, té herbal y práticas guiadas.",
      price: "$67",
      image: "🌙",
      benefits: ["Cristales seleccionados", "Té herbal relajante", "Guía de rituales"]
    },
    {
      id: 5,
      name: "Vibrador de Autoconocimiento",
      description: "Diseñado por mujeres para mujeres, con enfoque en la exploración segura y placentera.",
      price: "$156",
      image: "💎",
      benefits: ["Silicona médica", "Múltiples intensidades", "Diseño ergonómico"]
    }
  ];

  const handleShopifyRedirect = (productName: string) => {
    console.log(`Redirecting to Shopify for product: ${productName}`);
    // Here you would redirect to your Shopify store
    // window.open('https://your-shopify-store.com/products/product-slug', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-rosegold-50 to-lavender-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-lavender-600 bg-clip-text text-transparent">
            Productos que transforman
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada producto ha sido cuidadosamente seleccionado para acompañarte en tu viaje 
            hacia el autoconocimiento y el placer consciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-terracotta-100 via-rosegold-100 to-lavender-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl font-semibold text-gray-800 group-hover:text-terracotta-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-terracotta-600">
                      {product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-terracotta-400 to-rosegold-400 mr-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleShopifyRedirect(product.name)}
                    className="w-full bg-gradient-to-r from-terracotta-500 to-rosegold-500 hover:from-terracotta-600 hover:to-rosegold-600 text-white rounded-full py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    Descúbrelo en la tienda
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => console.log('Redirect to full catalog')}
            className="bg-gradient-to-r from-lavender-500 to-sunset-500 hover:from-lavender-600 hover:to-sunset-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver todo el catálogo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;

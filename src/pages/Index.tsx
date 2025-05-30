
import React from 'react';
import HeroSection from '@/components/HeroSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import ProductRecommendations from '@/components/ProductRecommendations';
import ManifestoSection from '@/components/ManifestoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rosegold-50 via-terracotta-50 to-lavender-50">
      <HeroSection />
      <NewsletterSignup />
      <ProductRecommendations />
      <ManifestoSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;

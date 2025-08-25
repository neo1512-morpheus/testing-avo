import React, { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Leaf, Zap, Brain, Droplets } from 'lucide-react';

const HealthBenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in monounsaturated fats that support cardiovascular health and reduce bad cholesterol",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "High in Antioxidants",
      description: "Packed with vitamins E and C to boost immunity and fight free radicals",
      color: "text-blue-500"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Organic, vegan-friendly ingredients with no artificial preservatives or additives",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Sustained Energy",
      description: "Healthy fats provide long-lasting energy without sugar crashes",
      color: "text-yellow-500"
    },
    {
      icon: Brain,
      title: "Brain Boost",
      description: "Omega-3 fatty acids support cognitive function and mental clarity",
      color: "text-purple-500"
    },
    {
      icon: Droplets,
      title: "Nutrient Dense",
      description: "Over 20 vitamins and minerals in every serving, including potassium and folate",
      color: "text-cyan-500"
    }
  ];

  const openOrderModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Why Choose <span className="text-forest-400">Avocado?</span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Discover the incredible health benefits of nature's perfect superfood. Every dish is packed with nutrients your body craves.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-95 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`${benefit.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-12 h-12" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-forest-500 to-forest-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Ready to Fuel Your Body with Goodness?
            </h3>
            <p 
              className="text-lg text-forest-100 mb-8 max-w-2xl mx-auto"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Join thousands of health-conscious customers who've made the switch to delicious, nutritious avocado meals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openOrderModal}
                className="bg-white text-forest-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Start Eating Healthy Today
              </button>
              
              <div className="flex items-center space-x-2 text-forest-100">
                <span className="text-sm">✓ Free delivery over ₹299</span>
                <span className="text-sm">✓ Made fresh daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
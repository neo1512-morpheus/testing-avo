import React, { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Leaf, Zap, Brain, Droplets } from 'lucide-react';
import { openOrderModal } from '../lib/utils';

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

  // Using the global openOrderModal function from utils

  return (
    <section 
      ref={sectionRef}
      className={`py-8 md:py-12 w-full compact-section transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Why Choose <span className="text-forest-400">Avocado?</span>
          </h2>
          <p 
            className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Discover the incredible health benefits of nature's perfect superfood. Every dish is packed with nutrients your body craves.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 compact-grid-gap">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-95 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`${benefit.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-forest-500 to-forest-600 rounded-2xl p-4 md:p-6 shadow-2xl">
            <h3 
              className="text-xl md:text-2xl font-bold text-white mb-3"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Ready to Fuel Your Body with Goodness?
            </h3>
            <p 
              className="text-base text-forest-100 mb-6 max-w-xl mx-auto"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Join thousands of health-conscious customers who've made the switch to delicious, nutritious avocado meals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={openOrderModal}
                className="bg-white text-forest-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base"
              >
                Start Eating Healthy Today
              </button>
              
              <div className="flex items-center space-x-2 text-forest-100 text-sm">
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
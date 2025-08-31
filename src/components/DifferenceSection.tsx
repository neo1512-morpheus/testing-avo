import React, { useEffect, useRef } from 'react';
import { Heart, Leaf, Bike } from 'lucide-react';

const DifferenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title first
            const title = entry.target.querySelector('.difference-title');
            if (title) {
              title.classList.add('animate-fade-in-up');
            }
            
            // Then animate items with staggered delay
            const items = entry.target.querySelectorAll('.difference-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up');
              }, 300 + (index * 100));
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom Avocado Icon Component
  const AvocadoIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 6 6 12 6 12s6-6 6-12c0-3.5-2.5-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5s2.5 1.1 2.5 2.5S13.4 10.5 12 10.5z"/>
    </svg>
  );

  const features = [
    {
      icon: <AvocadoIcon />,
      title: "Avocado Obsessed",
      description: "We're not just a restaurant; we're avocado specialists. We live and breathe this incredible superfood to bring you the most creative and delicious dishes."
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Peak Freshness Guaranteed",
      description: "We source high-quality, fresh produce to ensure every single bite is bursting with flavour, nutrients, and goodness."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Crafted for Wellness",
      description: "Our menu is designed to fuel your body and delight your taste buds. Enjoy food that's rich in healthy fats, fiber, and protein."
    },
    {
      icon: <Bike className="w-12 h-12" />,
      title: "Convenience is Key",
      description: "Your fresh fix is just a click away. Get your meal your way with our easy Dine-in, Takeaway, and lightning-fast Swiggy & Zomato delivery options."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 w-full compact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="difference-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            The <span className="text-forest-400">Avocado Table</span> Difference
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 compact-grid-gap">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="difference-item opacity-0 text-center bg-white bg-opacity-95 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-104 hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] md:hover:scale-104 md:hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]"
            >
              <div className="text-forest-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
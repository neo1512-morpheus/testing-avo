import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each text element sequentially
            const elements = entry.target.querySelectorAll('.animate-text');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-fade-in-up');
              }, index * 200);
            });

            // Animate logo after text
            const logo = entry.target.querySelector('.logo-container');
            if (logo) {
              setTimeout(() => {
                logo.classList.add('animate-logo-reveal');
              }, elements.length * 200 + 300);
            }
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-us-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Logo */}
          <div className="logo-wrapper flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="logo-container opacity-0 transform scale-95 transition-all duration-700 hover:transform hover:scale-100 hover:-translate-y-2 hover:shadow-2xl rounded-2xl p-4 border border-gray-300 shadow-lg bg-white bg-opacity-10 backdrop-blur-sm">
              <img 
                src="https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLyHPPTxLMDIAT2lF91Zb3n4vp6BJteiEVSX"
                alt="The Avocado Table Logo"
                className="w-64 md:w-80 lg:w-96 h-auto"
                style={{ clipPath: 'inset(2px 0 0 0)' }}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-wrapper text-center lg:text-left order-1 lg:order-2 text-white">
            <h2 
              className="animate-text opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Born from a <span className="text-forest-400">Passion</span> for <span className="text-forest-400">Freshness</span>
            </h2>
            
            <p 
              className="animate-text opacity-0 text-lg md:text-xl mb-6 leading-relaxed"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              At The Avocado Table, we believe healthy food should be exciting.
            </p>

            <div className="space-y-4 mb-6">
              <div 
                className="animate-text opacity-0 flex items-center justify-center lg:justify-start text-lg md:text-xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                <span className="text-2xl mr-3">🥑</span>
                <span>It should be vibrant.</span>
              </div>
              
              <div 
                className="animate-text opacity-0 flex items-center justify-center lg:justify-start text-lg md:text-xl"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                <span className="text-2xl mr-3">✨</span>
                <span>It should make you feel good.</span>
              </div>
            </div>
            
            <p 
              className="animate-text opacity-0 text-lg md:text-xl leading-relaxed"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Every dish is a celebration of flavour, crafted to give you a burst of clean energy and pure, delicious satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
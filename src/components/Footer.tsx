import React from 'react';
import { MapPin, Clock, Instagram, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        background: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Column 1: About Us / Brand */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <img 
                src="https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLyHPPTxLMDIAT2lF91Zb3n4vp6BJteiEVSX"
                alt="The Avocado Table Logo"
                className="w-32 h-auto"
              />
            </div>
            
            <p 
              className="text-gray-200 text-center md:text-left leading-relaxed text-sm"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Freshly crafted, avocado-centric dishes made with passion. Your daily dose of delicious wellness.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-3">
              <a 
                href="https://www.instagram.com/_the_avocado_table/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              
              <a 
                href="https://www.swiggy.com/city/rajkot/the-avocado-table-race-course-rest1073568"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent p-2 rounded-full hover:bg-orange-500 hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300 shadow-lg border border-orange-500 border-opacity-50 hover:border-opacity-100 flex items-center justify-center"
              >
                <img 
                  src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
                  alt="Swiggy Logo" 
                  className="w-4 h-4"
                />
              </a>
              
              <a 
                href="https://www.zomato.com/rajkot/the-avocado-table-1-race-course/order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent p-2 rounded-full hover:bg-red-500 hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300 shadow-lg border border-red-500 border-opacity-50 hover:border-opacity-100 flex items-center justify-center"
              >
                <img 
                  src="https://cdn.brandfetch.io/idEql8nEWn/w/800/h/800/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B" 
                  alt="Zomato Logo" 
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 
              className="text-lg font-semibold text-white text-center md:text-left"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Quick Links
            </h3>
            
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero-section')}
                  className="text-gray-200 hover:text-forest-400 transition-colors duration-300 block w-full text-center md:text-left text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about-section')}
                  className="text-gray-200 hover:text-forest-400 transition-colors duration-300 block w-full text-center md:text-left text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu-section')}
                  className="text-gray-200 hover:text-forest-400 transition-colors duration-300 block w-full text-center md:text-left text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="text-gray-200 hover:text-forest-400 transition-colors duration-300 block w-full text-center md:text-left text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Find Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Offerings */}
          <div className="space-y-4">
            <h3 
              className="text-lg font-semibold text-white text-center md:text-left"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Our Offerings
            </h3>
            
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Leaf className="w-3 h-3 text-forest-400 flex-shrink-0" />
                <span 
                  className="text-gray-200 text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Avocado Salads
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Leaf className="w-3 h-3 text-forest-400 flex-shrink-0" />
                <span 
                  className="text-gray-200 text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Artisanal Toasts
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Leaf className="w-3 h-3 text-forest-400 flex-shrink-0" />
                <span 
                  className="text-gray-200 text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Fresh Smoothies
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Leaf className="w-3 h-3 text-forest-400 flex-shrink-0" />
                <span 
                  className="text-gray-200 text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Guacamole & Nachos
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Leaf className="w-3 h-3 text-forest-400 flex-shrink-0" />
                <span 
                  className="text-gray-200 text-sm"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  Pesto Pasta
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Find Us */}
          <div className="space-y-4">
            <h3 
              className="text-lg font-semibold text-white text-center md:text-left"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Find Us
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-forest-400 mt-1 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <h4 
                    className="text-white font-medium mb-1 text-sm"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    Address
                  </h4>
                  <p 
                    className="text-gray-200 text-xs leading-relaxed"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    RAVIKIRAN, Rameshwar Chowk, Airport Main Rd, behind rameshwar Mandir, Shubash Nagar, Rajkot, Gujarat 360007
                  </p>
                </div>
              </div>
              
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <Clock className="w-4 h-4 text-forest-400 mt-1 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <h4 
                    className="text-white font-medium mb-1 text-sm"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    Hours
                  </h4>
                  <div 
                    className="text-gray-200 text-xs"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    <p>Mon-Sun: 9AM-3PM & 8PM-2AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div 
        style={{
          background: 'transparent',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p 
            className="text-center text-gray-300 text-xs"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            © 2025 The Avocado Table. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
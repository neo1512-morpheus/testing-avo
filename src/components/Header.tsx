import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { imageUrls } from '../lib/imageUtils';
import { openOrderModal } from '../lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Using the global openOrderModal function from utils

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'rgba(17, 24, 39, 0.65)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              style={{ 
                filter: isScrolled ? 'none' : 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.9))'
              }}
            >
              <img 
                src={imageUrls.logo}
                alt="The Avocado Table"
                className="h-10 w-auto lg:h-12"
              />
            </button>
          </div>

          {/* Mobile Navigation Buttons - NEW */}
          <nav className="mobile-nav-buttons lg:hidden flex-grow mx-4">
            <button 
              onClick={() => scrollToSection('menu-section')}
              className="hover:text-forest-400"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="hover:text-forest-400"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews-section')}
              className="hover:text-forest-400"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="hover:text-forest-400"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('menu-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ 
                textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.9)',
                fontWeight: '600'
              }}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ 
                textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.9)',
                fontWeight: '600'
              }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ 
                textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.9)',
                fontWeight: '600'
              }}
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ 
                textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.9)',
                fontWeight: '600'
              }}
            >
              Contact
            </button>
          </nav>

          {/* Order Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={openOrderModal}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>ORDER NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-forest-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 bg-opacity-80 backdrop-blur-lg" style={{ border: 'none', boxShadow: 'none' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('menu-section')}
                className="block w-full text-left px-3 py-2 text-white hover:text-forest-400 font-medium transition-colors duration-200"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about-section')}
                className="block w-full text-left px-3 py-2 text-white hover:text-forest-400 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('reviews-section')}
                className="block w-full text-left px-3 py-2 text-white hover:text-forest-400 font-medium transition-colors duration-200"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="block w-full text-left px-3 py-2 text-white hover:text-forest-400 font-medium transition-colors duration-200"
              >
                Contact
              </button>
              
              {/* Mobile Order Button */}
              <div className="px-3 py-2 mt-2" style={{ border: 'none', boxShadow: 'none' }}>
                <button
                  onClick={openOrderModal}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-4 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
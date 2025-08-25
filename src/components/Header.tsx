import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Truck, MapPin } from 'lucide-react';
import { imageUrls } from '../lib/imageUtils';

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

  const openOrderModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
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
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-white hover:text-forest-400 font-medium transition-colors duration-200"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Contact
            </button>
          </nav>

          {/* Service Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Delivery Info */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-forest-400">
                <Truck className="w-4 h-4" />
                <span 
                  className="font-medium"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  30 mins delivery
                </span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span 
                  className="font-medium"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
                >
                  Serving Rajkot
                </span>
              </div>
            </div>

            {/* Order Button */}
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
          <div className="lg:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md border-t border-gray-700">
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
              
              {/* Mobile Service Info */}
              <div className="px-3 py-2 border-t border-gray-700 mt-2">
                <div className="flex items-center justify-between text-sm mb-2">
                  <div className="flex items-center space-x-1 text-forest-400">
                    <Truck className="w-4 h-4" />
                    <span className="font-medium">30 mins delivery</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">Serving Rajkot</span>
                  </div>
                </div>
                
                {/* Mobile Order Button */}
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
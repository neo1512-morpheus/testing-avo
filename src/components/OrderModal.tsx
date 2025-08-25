import React from 'react';
import { X } from 'lucide-react';

const OrderModal: React.FC = () => {
  const closeModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  return (
    <div 
      id="order-modal"
      className="fixed inset-0 bg-black bg-opacity-60 hidden items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div 
        className="max-w-lg w-full shadow-2xl transform scale-95 hover:scale-100 transition-transform duration-300"
        style={{
          background: 'rgba(20, 20, 20, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              Your Fresh Meal Awaits
            </h3>
            <button 
              onClick={closeModal}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <p 
            className="text-gray-300 mb-8 text-center text-lg"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Choose your preferred delivery partner below.
          </p>
          
          <div className="space-y-4">
            {/* Swiggy Button */}
            <a 
              href="https://www.swiggy.com/city/rajkot/the-avocado-table-race-course-rest1073568"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 w-full text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-103"
              style={{
                background: 'rgba(10, 10, 10, 0.5)',
                border: '2px solid #FC8019',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FC8019';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(252, 128, 25, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={closeModal}
            >
              <img 
                src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
                alt="Swiggy Logo" 
                className="w-6 h-6"
              />
              <span className="text-lg">Order on Swiggy</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </a>
            
            {/* Zomato Button */}
            <a 
              href="https://www.zomato.com/rajkot/the-avocado-table-1-race-course/order"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 w-full text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-103"
              style={{
                background: 'rgba(10, 10, 10, 0.5)',
                border: '2px solid #EF4F5F',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EF4F5F';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(239, 79, 95, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 10, 10, 0.5)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={closeModal}
            >
              <img 
                src="https://cdn.brandfetch.io/idEql8nEWn/w/800/h/800/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B" 
                alt="Zomato Logo" 
                className="w-6 h-6"
              />
              <span className="text-lg">Order on Zomato</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p 
              className="text-gray-400 text-sm"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
            >
              Fresh ingredients • Made to order • Fast delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
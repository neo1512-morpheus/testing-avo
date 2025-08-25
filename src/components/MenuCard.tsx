import React from 'react';
import OptimizedImage from './ui/OptimizedImage';
import { openOrderModal } from '../lib/utils';

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, description, className = '' }) => {
  // Using the global openOrderModal function from utils

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full ${className}`}>
      <div className="aspect-w-16 aspect-h-12 overflow-hidden flex-shrink-0">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          loading="lazy"
          placeholder={
            <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          }
          errorPlaceholder={
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-2xl mb-2">🍽️</div>
                <div className="text-sm">Image unavailable</div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Health badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            Heart Healthy
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            High Protein
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
            Vegan
          </span>
        </div>
        
        <button 
          onClick={openOrderModal}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-auto transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Order This Fresh
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
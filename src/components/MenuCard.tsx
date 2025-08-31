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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full compact-card ${className}`}>
      <div className="overflow-hidden flex-shrink-0">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full menu-card-image"
          loading="lazy"
          placeholder={
            <div className="w-full menu-card-image bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-sm">Loading...</div>
            </div>
          }
          errorPlaceholder={
            <div className="w-full menu-card-image bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-xl mb-1">🍽️</div>
                <div className="text-xs">Image unavailable</div>
              </div>
            </div>
          }
        />
      </div>
      
      <div className="px-3 pt-3 pb-3 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Health badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
            Heart Healthy
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
            High Protein
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">
            Vegan
          </span>
        </div>
        
        <button 
          onClick={openOrderModal}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 mt-auto transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
        >
          Order This Fresh
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
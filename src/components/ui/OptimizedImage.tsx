import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  placeholder?: React.ReactNode;
  errorPlaceholder?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  loading = 'lazy',
  width,
  height,
  placeholder,
  errorPlaceholder
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const defaultPlaceholder = (
    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading...</div>
    </div>
  );

  const defaultErrorPlaceholder = (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500 text-center">
        <div className="text-xl mb-1">🖼️</div>
        <div className="text-xs">Image unavailable</div>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 z-10">
          {placeholder || defaultPlaceholder}
        </div>
      )}
      
      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 z-10">
          {errorPlaceholder || defaultErrorPlaceholder}
        </div>
      )}
      
      <img 
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default OptimizedImage;


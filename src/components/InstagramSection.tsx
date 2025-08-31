import React, { useState, useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';
import { getInstagramImage } from '../lib/imageUtils';

const InstagramSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [imageLoadStates, setImageLoadStates] = useState<Map<number, boolean>>(new Map());
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStates(prev => new Map(prev.set(index, true)));
  };

  // Curated gallery images from the restaurant's best dishes
  const instagramPosts = [
    {
      src: getInstagramImage(0),
      alt: "Artisanal Avocado Toast",
      fallback: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop"
    },
    {
      src: getInstagramImage(1),
      alt: "Ultimate Avocado Sandwich",
      fallback: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=400&h=400&fit=crop"
    },
    {
      src: getInstagramImage(2),
      alt: "Fresh Guacamole & Nachos",
      fallback: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop"
    },
    {
      src: getInstagramImage(3),
      alt: "Nourish Bowl Salad",
      fallback: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
    },
    {
      src: getInstagramImage(4),
      alt: "Chilled Avocado Pesto Pasta",
      fallback: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop"
    },
    {
      src: getInstagramImage(5),
      alt: "Energizer Avocado Smoothie",
      fallback: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-10 md:py-16 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Follow the Freshness: <span className="text-forest-400">#TheAvocadoTable</span>
          </h2>
          
          <a 
            href="https://www.instagram.com/_the_avocado_table/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-base text-forest-400 hover:text-forest-300 font-medium transition-colors duration-300"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            <Instagram className="w-5 h-5 mr-2" />
            @_the_avocado_table
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="instagram-gallery-image aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 block relative"
            >
              {/* Loading skeleton */}
              {!imageLoadStates.get(index) && !imageErrors.has(index) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Loading...</div>
                </div>
              )}
              
              {/* Error fallback */}
              {imageErrors.has(index) && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-xl mb-1">📸</div>
                    <div className="text-xs">Image unavailable</div>
                  </div>
                </div>
              )}
              
              <img 
                src={imageErrors.has(index) ? post.fallback : post.src}
                alt={post.alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoadStates.get(index) ? 'opacity-100' : 'opacity-0'
                }`}
                onError={() => handleImageError(index)}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="https://www.instagram.com/_the_avocado_table/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 text-sm"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
import React, { useEffect, useRef } from 'react';
import MenuCard from './MenuCard';
import { getMenuItemImage } from '../lib/imageUtils';

const MenuSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // First animate the title
            const title = entry.target.querySelector('.menu-title');
            if (title) {
              title.classList.add('animate-fade-in-up');
            }
            
            // Then animate cards with staggered delay
            const cards = entry.target.querySelectorAll('.menu-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
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

  const menuItems = [
    {
      imageIndex: 0, // Use image index instead of direct URL
      title: "The Ultimate Avocado Sandwich",
      description: "Imagine sinking your teeth into soft brown bread, embracing a velvety blend of avocado, garlic, and green chilli. Layered with tangy hummus and a refreshing crunch of cool cucumber, tomato, and crisp lettuce. This isn't just a sandwich; it's a feel-good experience in every single bite.",
      popular: true
    },
    {
      imageIndex: 1, // Use image index instead of direct URL
      title: "Artisanal Avocado Toast",
      description: "A masterpiece of texture and taste. We start with crunchy, artisanal sourdough, smother it in our signature creamy avocado and zesty pesto, and top it with sun-kissed cherry tomatoes and a nutty super-seed crunch. It's bold, it's fresh, it's a whole vibe.",
      popular: true
    },
    {
      imageIndex: 2, // Use image index instead of direct URL
      title: "Freshly-Made Guacamole & Nachos",
      description: "The ultimate dipping experience, crafted fresh the moment you order. Dive into our rich, creamy guacamole made from perfectly ripe avocados, tomato, onion, and a hint of zesty lemon. Served with perfectly crisp, golden nachos. Your perfect anytime snack awaits."
    },
    {
      imageIndex: 3, // Use image index instead of direct URL
      title: "The Nourish Bowl Salad",
      description: "Your perfect bowl of wellness. A vibrant symphony of creamy avocado, power-packed chickpeas, sweet corn, and garden-fresh spinach, lettuce, cucumber, and tomato. We toss it all with a dollop of hummus for a wholesome, refreshing, and deeply nourishing flavour journey."
    },
    {
      imageIndex: 4, // Use image index instead of direct URL
      title: "Chilled Avocado Pesto Pasta",
      description: "A refreshing twist on a classic. Hearty whole wheat pasta is tossed in a luxurious, creamy pesto made from fresh avocado, basil, and garlic, then topped with sweet cherry tomatoes and a satisfying crunch of pumpkin seeds. Served chilled to preserve every note of pure, fresh flavour."
    },
    {
      imageIndex: 5, // Use image index instead of direct URL
      title: "The Energizer Avocado Smoothie",
      description: "Energy in a glass. A rich, revitalizing blend of ripe avocado, sweet banana, and golden honey, swirled with milk. We elevate it with a textural mix of crunchy granola, tangy dried berries, and cashews for a smoothie that truly nourishes and satisfies."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="menu-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Explore Our <span className="text-forest-400">Signature Creations</span>
          </h2>
        </div>
        
        <div className="menu-grid-container">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 transform rotate-12">
                  MOST POPULAR
                </div>
              )}
              <MenuCard
                image={getMenuItemImage(item.imageIndex)}
                title={item.title}
                description={item.description}
                className="menu-card opacity-0"
              />
            </div>
          ))}
        </div>
        
        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p 
            className="text-orange-400 font-bold text-lg mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            🔥 Only 50 orders available daily - Order now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
import React, { useEffect, useRef } from 'react';
import { OrderNowButton } from './ui/order-now-button';
import { Leaf, Heart } from 'lucide-react';
import { openOrderModal } from '../lib/utils';

const HeroSection: React.FC = () => {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  // Using the global openOrderModal function from utils

  // Particle animation effect
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        fadeSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.y -= particle.speedY;
        particle.opacity -= particle.fadeSpeed;

        // Reset particle when it goes off screen or fades out
        if (particle.y < -10 || particle.opacity <= 0) {
          particle.y = canvas.height + Math.random() * 100;
          particle.x = Math.random() * canvas.width;
          particle.opacity = Math.random() * 0.5 + 0.2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
      <section 
    id="hero-section" 
    className="relative h-screen flex items-center justify-center w-full"
  >
      {/* Animated Particles Background */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Floating Info Cards - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        {/* Left Card - Always Fresh */}
        <div 
          className="floating-card-left absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2"
          style={{
            background: 'rgba(10, 10, 10, 0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.2)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Leaf className="w-6 h-6 text-forest-400" />
            <h3 
              className="text-white font-bold text-lg"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              ALWAYS FRESH
            </h3>
          </div>
          <p 
            className="text-gray-300 text-sm max-w-48"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Made-to-order with locally sourced ingredients.
          </p>
        </div>

        {/* Right Card - Nutrient Packed */}
        <div 
          className="floating-card-right absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2"
          style={{
            background: 'rgba(10, 10, 10, 0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.2)',
            animation: 'float 6s ease-in-out infinite 3s'
          }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Heart className="w-6 h-6 text-forest-400" />
            <h3 
              className="text-white font-bold text-lg"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              NUTRIENT-PACKED
            </h3>
          </div>
          <p 
            className="text-gray-300 text-sm max-w-48"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Rich in healthy fats, vitamins, and clean energy.
          </p>
        </div>
      </div>

      {/* Main Content - Mobile and Desktop */}
      <div 
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto w-full hero-content-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          paddingTop: '0.5rem' /* pull content further up */
        }}
      >
        
        {/* Mobile Info Cards - Separated with floating animations */}
        <div className="lg:hidden info-cards-container">
          {/* First Card - Always Fresh */}
          <div className="info-card">
            <Leaf className="w-5 h-5 text-forest-400 flex-shrink-0" />
            <span 
              className="text-white font-semibold text-sm"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              ALWAYS FRESH
            </span>
          </div>
          
          {/* Second Card - Nutrient Packed */}
          <div className="info-card">
            <Heart className="w-5 h-5 text-forest-400 flex-shrink-0" />
            <span 
              className="text-white font-semibold text-sm"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              NUTRIENT-PACKED
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="main-headline-container">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
            <span 
              className="block"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              YOUR DAILY DOSE OF
            </span>
            <span 
              className="block neon-text"
              style={{
                color: '#34D399',
                textShadow: `
                  0 0 4px #34D399,
                  0 0 8px #34D399,
                  0 0 15px rgba(16, 185, 129, 0.7),
                  2px 2px 4px rgba(0, 0, 0, 0.8)
                `,
                animation: 'neon-pulse 2s ease-in-out infinite alternate'
              }}
            >
              AVOCADO
            </span>
            <span 
              className="block"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              PERFECTION
            </span>
          </h1>
        </div>
        
        {/* Sub-headline */}
        <div className="sub-headline-paragraph">
          <p 
            className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-fade-in-up opacity-0" 
            style={{ 
              animationDelay: '0.3s', 
              animationFillMode: 'forwards',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)',
              lineHeight: '1.6'
            }}
          >
            Experience our <span className="text-forest-400 font-medium">vibrant menu</span> of healthy dishes, all centered around the <span className="text-forest-400 font-medium">superfood you love</span>.
          </p>
          <div 
            className="flex flex-wrap justify-center items-center gap-4 mt-6 animate-fade-in-up opacity-0"
            style={{ 
              animationDelay: '0.5s', 
              animationFillMode: 'forwards'
            }}
          >
            {/* Trust Badge 1: Made Fresh Daily */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: 'rgba(20, 20, 20, 0.7)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                boxShadow: '0 0 15px rgba(52, 211, 153, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span className="text-forest-400">✓</span>
              <span>Made Fresh Daily</span>
            </div>
            
            {/* Trust Badge 2: Limited Quantities */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: 'rgba(20, 20, 20, 0.7)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                boxShadow: '0 0 15px rgba(52, 211, 153, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span className="text-forest-400">⚡</span>
              <span>Limited Quantities</span>
            </div>
            
            {/* Trust Badge 3: On Swiggy & Zomato */}
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: 'rgba(20, 20, 20, 0.7)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                boxShadow: '0 0 15px rgba(52, 211, 153, 0.2)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span className="text-forest-400">🛵</span>
              <span>On Swiggy & Zomato</span>
            </div>
          </div>
          <p 
            className="text-orange-400 font-bold text-base mt-6 animate-fade-in-up opacity-0"
            style={{ 
              animationDelay: '0.7s', 
              animationFillMode: 'forwards',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            ⏰ Order within 2 hours for today's fresh batch!
          </p>
        </div>
        
        {/* Order Now Button */}
        <div 
          className="order-now-button-wrapper animate-fade-in-up opacity-0 mt-4"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <OrderNowButton 
            onClick={openOrderModal}
            className="shadow-2xl text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition-all duration-300"
            shimmerColor="#4ade80"
            background="#1F2937"
          >
            <span className="whitespace-pre-wrap text-center font-bold tracking-tight text-white uppercase">
              Get Fresh Meals Delivered
            </span>
          </OrderNowButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
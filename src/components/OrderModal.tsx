import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const OrderModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    console.log('OrderModal mounted');
    
    // Create a global function to show the modal
    (window as any).showOrderModal = () => {
      console.log('showOrderModal called - setting isVisible to true');
      setIsVisible(true);
      setIsClosing(false);
      // Reset animation state and trigger entrance
      setAnimateIn(false);
      setTimeout(() => setAnimateIn(true), 50);
    };

    // Create a global function to hide the modal
    (window as any).hideOrderModal = () => {
      console.log('hideOrderModal called - setting isVisible to false');
      setIsVisible(false);
    };

    return () => {
      console.log('OrderModal unmounting');
      delete (window as any).showOrderModal;
      delete (window as any).hideOrderModal;
    };
  }, []);

  useEffect(() => {
    console.log('Modal visibility changed:', isVisible);
  }, [isVisible]);

  const closeModal = () => {
    console.log('closeModal called');
    if (isClosing) return; // Prevent multiple close calls
    setIsClosing(true);
    setAnimateIn(false);
  };

  // Handle transition end - only remove from DOM after animation completes
  const handleTransitionEnd = () => {
    if (isClosing) {
      console.log('Exit animation completed, removing from DOM');
      setIsVisible(false);
      setIsClosing(false);
      setAnimateIn(false);
    }
  };

  console.log('OrderModal render - isVisible:', isVisible);

  if (!isVisible) {
    console.log('Modal not visible, returning null');
    return null;
  }

  console.log('Modal IS visible, rendering modal content');

  const modal = (
    <div 
      role="dialog"
      aria-modal="true"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        opacity: animateIn ? 1 : 0,
        transition: 'opacity 200ms ease-out'
      }}
      onClick={closeModal}
    >
      <div 
        style={{
          background: 'rgba(20, 20, 20, 0.6)',
          backdropFilter: 'blur(15px)',
          color: 'white',
          padding: '48px 40px',
          borderRadius: '24px',
          maxWidth: '520px',
          width: '100%',
          minHeight: '480px',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          boxShadow: '0 0 30px rgba(52, 211, 153, 0.15)',
          transform: animateIn ? 'scale(1)' : 'scale(0.95)',
          opacity: animateIn ? 1 : 0,
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Glassmorphism shine effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header with close button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div style={{ flex: 1 }}>
              {/* Animated headline with shine effect */}
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: 800, 
                margin: 0,
                marginBottom: '12px',
                color: 'white',
                textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                lineHeight: '1.2'
              }}>
                Your Delicious <span style={{ color: '#34D399' }}>Dose</span> is a Click Away
              </h2>
              
              {/* Sub-headline */}
              <p style={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '18px', 
                margin: 0,
                fontWeight: 400,
                textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                lineHeight: '1.4'
              }}>
                Just one more step. Choose your favorite way to get our avocado goodness.
              </p>
            </div>
            
            {/* Close button */}
            <button 
              onClick={closeModal}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease-in-out',
                backdropFilter: 'blur(8px)',
                marginLeft: '20px'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              ✕
            </button>
          </div>
          
          {/* Delivery buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            {/* Swiggy Button */}
            <a 
              href="https://www.swiggy.com/city/rajkot/the-avocado-table-race-course-rest1073568"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              onMouseEnter={() => setHoveredButton('swiggy')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: hoveredButton === 'swiggy' 
                  ? 'linear-gradient(135deg, rgba(252, 128, 25, 0.2) 0%, rgba(252, 128, 25, 0.1) 100%)'
                  : 'rgba(40, 40, 40, 0.7)',
                color: 'white',
                padding: '20px 24px',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 700,
                border: '2px solid #FC8019',
                boxShadow: hoveredButton === 'swiggy' 
                  ? '0 0 30px rgba(252, 128, 25, 0.8)' 
                  : '0 0 15px rgba(252, 128, 25, 0.4)',
                transform: hoveredButton === 'swiggy' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Swiggy Logo */}
              <img 
                src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg" 
                alt="Swiggy" 
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  objectFit: 'contain', 
                  minWidth: '24px',
                  maxWidth: '24px',
                  maxHeight: '24px',
                  flexShrink: 0
                }}
              />
              <span style={{ 
                flex: 1,
                textAlign: 'center',
                fontWeight: 700
              }}>
                Order on Swiggy
              </span>
            </a>
            
            {/* Zomato Button */}
            <a 
              href="https://www.zomato.com/rajkot/the-avocado-table-1-race-course/order"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              onMouseEnter={() => setHoveredButton('zomato')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: hoveredButton === 'zomato' 
                  ? 'linear-gradient(135deg, rgba(239, 79, 95, 0.2) 0%, rgba(239, 79, 95, 0.1) 100%)'
                  : 'rgba(40, 40, 40, 0.7)',
                color: 'white',
                padding: '20px 24px',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 700,
                border: '2px solid #EF4F5F',
                boxShadow: hoveredButton === 'zomato' 
                  ? '0 0 30px rgba(239, 79, 95, 0.8)' 
                  : '0 0 15px rgba(239, 79, 95, 0.4)',
                transform: hoveredButton === 'zomato' ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Zomato Logo */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/960px-Zomato_logo.png?20210726145438" 
                alt="Zomato" 
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  objectFit: 'contain', 
                  minWidth: '24px',
                  maxWidth: '24px',
                  maxHeight: '24px',
                  flexShrink: 0
                }}
              />
              <span style={{ 
                flex: 1,
                textAlign: 'center',
                fontWeight: 700
              }}>
                Order on Zomato
              </span>
            </a>
          </div>

          {/* Interactive hover text */}
          <div style={{ 
            minHeight: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            {hoveredButton && (
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '15px',
                margin: 0,
                fontStyle: 'italic',
                opacity: hoveredButton ? 1 : 0,
                transform: hoveredButton ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 200ms ease-out',
                textAlign: 'center'
              }}>
                {hoveredButton === 'swiggy' && "Fast, reliable delivery right to your door."}
                {hoveredButton === 'zomato' && "Track your fresh meal every step of the way."}
              </p>
            )}
          </div>

          {/* Footer info */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: '13px',
              margin: 0,
              fontWeight: 400
            }}>
              Fresh ingredients • Made to order • Fast delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (typeof document !== 'undefined' && document.body)
    ? createPortal(modal, document.body)
    : null;
};

export default OrderModal;
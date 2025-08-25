import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import DifferenceSection from './components/DifferenceSection';
import HealthBenefitsSection from './components/HealthBenefitsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import PerformanceMonitor from './components/ui/PerformanceMonitor';
import { imageUrls } from './lib/imageUtils';

function App() {
  useEffect(() => {
    // Preload critical images from the reliable image utility system
    const criticalImages = [
      imageUrls.logo,
      imageUrls.menuItems[0],
      imageUrls.menuItems[1],
      imageUrls.backgrounds[0]
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Preload your reliable background image
    const bgImg = new Image();
    bgImg.src = imageUrls.backgrounds[0];
    
    // Modal is now managed via React state, no DOM manipulation needed
  }, []);

  return (
    <div className="font-poppins min-h-screen relative main-background-container">

      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection />
      </div>

      {/* Reviews Section */}
      <div id="reviews-section" className="content-section">
        <ReviewsSection />
      </div>

      {/* All other sections */}
      <div id="about-section" className="content-section">
        <AboutSection />
      </div>
      <div id="menu-section" className="content-section">
        <MenuSection />
      </div>
      <div className="content-section">
        <DifferenceSection />
      </div>
      <div className="content-section">
        <HealthBenefitsSection />
      </div>
      <div className="content-section">
        <InstagramSection />
      </div>
      <div id="contact-section" className="content-section">
        <ContactSection />
      </div>
      <div className="content-section">
        <Footer />
      </div>
      
      <OrderModal />
      
      {/* Performance Monitor - Enable by setting enabled={true} for debugging */}
      <PerformanceMonitor enabled={false} />
    </div>
  );
}

export default App;
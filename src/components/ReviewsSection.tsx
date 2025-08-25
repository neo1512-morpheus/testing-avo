import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, Award, TrendingUp } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const reviews = [
    {
      rating: 4.8,
      text: "Just tried the Avocado Sandwich and Pasta Salad... I'm honestly impressed! Refreshing, filling, doesn't feel heavy. Bread stayed crisp even after delivery!",
      author: "Priya S.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=250&h=250&auto=format&fit=crop&faces=1"
    },
    {
      rating: 4.9,
      text: "This is the best freaking Avocado toast in the whole wide city. No fancy restaurant can beat the taste!",
      author: "Rahul M.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 4.7,
      text: "Wow. This is so delicious. Every bite was delicious! Like Salad, Sandwich... 😋😋💖",
      author: "Sneha P.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 4.6,
      text: "Exotic, very healthy and very tasty all avocado dishes 🥪🤤",
      author: "Amit K.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 4.8,
      text: "Tried their avocado wrap for lunch today and it was super fresh and filling. Didn't feel oily at all!",
      author: "Kavya R.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 4.9,
      text: "Ordered the pasta salad and smoothie. Packaging was neat, nothing spilled. Delivery was fast too.",
      author: "Rohan J.",
      location: "Rajkot",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Star, value: "4.8★", label: "Average Rating" },
    { icon: TrendingUp, value: "500+", label: "Reviews" },
    { icon: Award, value: "Featured", label: "Swiggy & Zomato" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            What Our <span className="text-forest-400">Customers Say</span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            Join thousands of satisfied customers who love our fresh, healthy avocado dishes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-forest-400 mx-auto mb-3" />
              <div 
                className="text-2xl md:text-3xl font-bold text-white mb-1"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm text-gray-300"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-95 rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-forest-500 hover:bg-forest-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-forest-500 hover:bg-forest-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Review Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(reviews[currentReview].rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
                "{reviews[currentReview].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-forest-200"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-lg">
                    {reviews[currentReview].author}
                  </div>
                  <div className="text-gray-600">
                    {reviews[currentReview].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-forest-400 scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
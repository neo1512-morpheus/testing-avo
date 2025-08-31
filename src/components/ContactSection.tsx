import React, { useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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

  return (
    <section ref={sectionRef} className="py-10 md:py-16 w-full opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Visit Us or <span className="text-forest-400">Get It Delivered</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-64 lg:h-full min-h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.891674377235!2d70.7835636!3d22.302971000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9000dca0cdd%3A0x50361e75457818be!2sThe%20Avacado%20Table!5e1!3m2!1sen!2sin!4v1751353038905!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Avocado Table Location"
              />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-forest-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">
                    RAVIKIRAN, Rameshwar Chowk, Airport Main Rd, behind rameshwar Mandir, Shubash Nagar, Rajkot, Gujarat 360007
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 mb-6">
                <Clock className="w-5 h-5 text-forest-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours</h3>
                  <div className="text-gray-600 text-sm">
                    <p className="mb-1">Monday - Sunday</p>
                    <p className="mb-1">Morning: 9:00 AM – 3:00 PM</p>
                    <p>Evening: 8:00 PM – 2:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <a 
                href="https://www.swiggy.com/city/rajkot/the-avocado-table-race-course-rest1073568"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Order on Swiggy
              </a>
              
              <a 
                href="https://www.zomato.com/rajkot/the-avocado-table-1-race-course/order"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Order on Zomato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
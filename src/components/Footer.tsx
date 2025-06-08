import React from 'react';
import { GraduationCap, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LearnHub
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming lives through education. We democratize learning by providing free, 
              high-quality educational resources and opportunities to learners worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>Learnhubcommunity2025@gmail.com</span>
              </div>
              <button
                onClick={handleWhatsAppJoin}
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Join WhatsApp Community</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Free Education</li>
              <li>Free Courses</li>
              <li>Free Internships</li>
              <li>Free Webinars</li>
              <li>Free Bootcamps</li>
              <li>Community Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2025 LearnHub. All rights reserved.</p>
              <p className="mt-1">
                Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for learners worldwide
              </p>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>
                <span className="text-yellow-400">Note:</span> Not from Official - Community Initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
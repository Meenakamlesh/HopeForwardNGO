import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">HopeForward NGO</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating sustainable positive change in communities worldwide through education, healthcare, and development initiatives.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActiveSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveSection('volunteer')} className="text-gray-300 hover:text-white transition-colors">Volunteer</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">info@hopeforward.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+91 9374374923</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">S.N Dube Road Dahisar,Mumbai 68</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 HopeForward NGO. All rights reserved. Making a difference, one community at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TechCore</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for high-performance computer hardware and components. 
              Building the future of computing, one component at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Products
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Processors
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Graphics Cards
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Memory & Storage
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Motherboards
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Gaming Systems
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@techcore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TechCore Hardware Solutions. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
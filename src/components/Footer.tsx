import React from 'react';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">RealEstate Pro</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect property. We make real estate dreams come true.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Property Sales</li>
              <li className="text-gray-300">Property Rentals</li>
              <li className="text-gray-300">Property Management</li>
              <li className="text-gray-300">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@realestatepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 RealEstate Pro. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
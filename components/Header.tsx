
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flag } from 'lucide-react';
import { ORG_NAME, NAVIGATION_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const currentHash = window.location.hash || '#/';
    return currentHash === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="bg-red-600 h-1"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-blue-800 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Flag className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-blue-800 leading-tight">
                  {ORG_NAME}
                </h1>
                <p className="text-xs text-red-600 font-medium uppercase tracking-wider">
                  ৩৩নং ওয়ার্ড মোহাম্মাদপুর থানা, ঢাকা মহানগর উত্তর
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-semibold ${
                  isActive(link.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

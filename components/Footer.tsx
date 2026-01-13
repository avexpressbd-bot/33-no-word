
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Twitter } from 'lucide-react';
import { ORG_NAME, ORG_LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-red-500 pl-3">{ORG_NAME}</h2>
            <p className="text-blue-200 leading-relaxed">
              আমরা ৩৩নং ওয়ার্ডবাসীর সেবায় নিয়োজিত একনিষ্ঠ কর্মীদল। সামাজিক উন্নয়ন ও গণতান্ত্রিক অধিকার প্রতিষ্ঠাই আমাদের মূল লক্ষ্য।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400">যোগাযোগের ঠিকানা</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 shrink-0" />
                <span className="text-blue-100">{ORG_LOCATION}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 shrink-0" />
                <span className="text-blue-100">০১৮৭৩০৬১১৫৯</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 shrink-0" />
                <span className="text-blue-100">contact@33ward-svd.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Action */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400">যুক্ত থাকুন</h3>
            <p className="text-blue-200 text-sm">আমাদের সর্বশেষ আপডেট পেতে ইমেইল সাবস্ক্রাইব করুন।</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="ইমেইল এড্রেস" 
                className="bg-blue-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-blue-300"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors font-bold">
                যুক্ত হন
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} {ORG_NAME} | সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { ORG_LOCATION } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-blue-800 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">যোগাযোগ করুন</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-blue-100">যেকোনো প্রয়োজন বা পরামর্শের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">অফিস ঠিকানা</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-800">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">অবস্থান</h4>
                    <p className="text-gray-600">{ORG_LOCATION}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg text-red-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">ফোন করুন</h4>
                    <p className="text-gray-600">০১৮৭৩০৬১১৫৯</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-800">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">ইমেইল</h4>
                    <p className="text-gray-600">info@33ward-svd.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg text-red-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">অফিস সময়</h4>
                    <p className="text-gray-600">প্রতিদিন বিকেল ৪টা থেকে রাত ১০টা পর্যন্ত</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl h-64 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.60424842716!2d90.3541484860731!3d23.75094732168538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf397e06a337%3A0xc354b35e5d3298c0!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715421255421!5m2!1sen!2sbd" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-50">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">আমাদের মেসেজ পাঠান</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">আপনার নাম</label>
                  <input 
                    required
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="নাম লিখুন" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">আপনার ইমেইল</label>
                  <input 
                    required
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="ইমেইল লিখুন" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">বিষয়</label>
                <input 
                  required
                  type="text" 
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  placeholder="বিষয় লিখুন" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">বার্তা</label>
                <textarea 
                  required
                  rows={5} 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="আপনার বার্তা এখানে লিখুন..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                বার্তা পাঠান <Send className="h-5 w-5" />
              </button>
              
              {submitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-xl border border-green-200 text-center animate-in zoom-in duration-300">
                  আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;

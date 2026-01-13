
import React from 'react';
import { ArrowRight, Users, Heart, ShieldCheck, PlayCircle } from 'lucide-react';
import NewsTicker from '../components/NewsTicker';
import { ORG_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <NewsTicker />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40 z-10"></div>
        <img 
          src="https://picsum.photos/seed/politics/1920/1080" 
          alt="Political Rally" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-red-500 font-bold text-lg mb-4 tracking-wider uppercase border-l-4 border-red-500 pl-3">
              স্বেচ্ছাসেবক দল - ৩৩নং ওয়ার্ড
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              জনগণের সেবায়, <br /><span className="text-red-500">আপসহীন</span> আমরা।
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 font-medium leading-relaxed">
              মোহাম্মাদপুরের ৩৩নং ওয়ার্ডবাসীর অধিকার রক্ষা এবং সামাজিক উন্নয়নে আমরা দৃঢ় প্রতিজ্ঞ। আমাদের সাথে যুক্ত হয়ে গড়ি আগামীর সুন্দর বাংলাদেশ।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
                যুক্ত হন <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                বিস্তারিত জানুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Icons Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-600 p-3 rounded-lg text-white">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-900">৫০০+</h4>
              <p className="text-gray-600 font-medium">সক্রিয় সদস্য</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-red-50 rounded-xl">
            <div className="bg-red-600 p-3 rounded-lg text-white">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-red-900">৫০+</h4>
              <p className="text-gray-600 font-medium">সামাজিক কর্মসূচি</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-600 p-3 rounded-lg text-white">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-900">২৪/৭</h4>
              <p className="text-gray-600 font-medium">নিরাপত্তা ও সহযোগিতা</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 -z-10 rounded-lg opacity-20"></div>
              <img 
                src="https://picsum.photos/seed/leader/800/1000" 
                alt="Leader" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900">মোঃ আবু তাহের</h3>
                <p className="text-red-600 font-semibold">আহব্বায়ক, ৩৩নং ওয়ার্ড স্বেচ্ছাসেবক দল</p>
              </div>
            </div>
            <div>
              <h2 className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
                নেতৃত্বের বার্তা: ৩৩নং ওয়ার্ড হোক <span className="text-red-600">আদর্শ ও শান্তিপূর্ণ</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  সম্মানিত ৩৩নং ওয়ার্ডবাসী, আসসালামু আলাইকুম। ৩৩নং ওয়ার্ড স্বেচ্ছাসেবক দল সর্বদা আপনাদের সুখে-দুঃখে পাশে থাকতে বদ্ধপরিকর। আমাদের লক্ষ্য কেবল রাজনীতি নয়, বরং মানবতার সেবা। 
                </p>
                <p>
                  আমরা বিশ্বাস করি, যুব সমাজই পারে একটি সমৃদ্ধ সমাজ গঠন করতে। তাই আমরা মোহাম্মাদপুরের এই ওয়ার্ডকে মাদকমুক্ত, সন্ত্রাসমুক্ত এবং পরিচ্ছন্ন এলাকা হিসেবে গড়ে তুলতে নিরলস কাজ করে যাচ্ছি।
                </p>
                <p className="font-semibold text-blue-800 italic">
                  "আসুন, আমরা ঐক্যবদ্ধ হয়ে ৩৩নং ওয়ার্ডকে একটি সুখী ও সমৃদ্ধ এলাকা হিসেবে গড়ে তুলি।"
                </p>
              </div>
              <div className="mt-10">
                <a href="#/committee" className="inline-flex items-center text-blue-800 font-bold hover:text-red-600 transition-colors gap-2 text-lg">
                  আমাদের পূর্ণাঙ্গ কমিটি দেখুন <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Video Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">সাম্প্রতিক কর্মকাণ্ডের ভিডিও</h2>
          <div className="relative group max-w-4xl mx-auto cursor-pointer">
            <img 
              src="https://picsum.photos/seed/rally-video/1200/675" 
              alt="Video Thumbnail" 
              className="rounded-2xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 text-white p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                <PlayCircle className="h-16 w-16" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold">বিশাল জনসভা - মোহাম্মাদপুর টাউন হল মাঠ</h3>
              <p className="text-blue-200 mt-2">তারিখ: ১২ নভেম্বর, ২০২৪</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

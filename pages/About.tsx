
import React from 'react';
import { Target, History, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <section className="bg-blue-800 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">আমাদের সম্পর্কে</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-blue-100">৩৩নং ওয়ার্ড স্বেচ্ছাসেবক দলের ইতিহাস, আদর্শ ও লক্ষ্য।</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
                <History className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">আমাদের ইতিহাস</h3>
              <p className="text-gray-600 leading-relaxed">
                ৩৩নং ওয়ার্ড স্বেচ্ছাসেবক দল প্রতিষ্ঠার শুরু থেকেই মোহাম্মাদপুরের মানুষের অধিকার আদায়ের আন্দোলনে অগ্রণী ভূমিকা পালন করে আসছে। ত্যাগের মহিমায় উদ্ভাসিত আমাদের কর্মীরা প্রতিটি গণতান্ত্রিক সংগ্রামে নিজেদের উৎসর্গ করেছেন।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-4 rounded-full w-fit mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">আমাদের লক্ষ্য</h3>
              <p className="text-gray-600 leading-relaxed">
                আমাদের মূল লক্ষ্য হলো একটি বৈষম্যহীন সমাজ গঠন করা যেখানে প্রতিটি মানুষের নাগরিক অধিকার সুনিশ্চিত হবে। ৩৩নং ওয়ার্ডকে একটি মডেল ওয়ার্ড হিসেবে গড়ে তোলাই আমাদের প্রধান উদ্দেশ্য।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
                <Heart className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">সামাজিক দায়বদ্ধতা</h3>
              <p className="text-gray-600 leading-relaxed">
                রাজনীতির ঊর্ধ্বে উঠে আর্তমানবতার সেবায় আমরা সব সময় নিয়োজিত। করোনাকালীন সহায়তা থেকে শুরু করে বন্যা কবলিতদের পাশে দাঁড়ানো—প্রতিটি দুর্যোগে আমরা ছিলাম সম্মুখ সারিতে।
              </p>
            </div>

          </div>

          <div className="mt-20 bg-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center text-white">
                <h2 className="text-3xl font-bold mb-6">কেন আমাদের সাথে যুক্ত হবেন?</h2>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    নেতৃত্ব বিকাশের সুযোগ
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    সামাজিক উন্নয়ন মূলক কাজ করার প্লাটফর্ম
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    গণতান্ত্রিক অধিকার আদায়ের লড়াইয়ে অংশগ্রহণ
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    দেশপ্রেমিক একদল কর্মীর সাথে ভ্রাতৃত্বের বন্ধন
                  </li>
                </ul>
              </div>
              <div className="h-64 md:h-auto">
                <img src="https://picsum.photos/seed/about-banner/1000/1000" alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

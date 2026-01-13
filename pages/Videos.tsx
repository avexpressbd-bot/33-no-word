
import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  { id: 1, title: 'বিশাল জনসভা ও কর্মীদের দিকনির্দেশনা', thumb: 'https://picsum.photos/seed/v1/800/450' },
  { id: 2, title: 'নির্বাচনী প্রচারণার কিছু মুহূর্ত', thumb: 'https://picsum.photos/seed/v2/800/450' },
  { id: 3, title: 'ওয়ার্ড কার্যালয় উদ্বোধন অনুষ্ঠান', thumb: 'https://picsum.photos/seed/v3/800/450' },
  { id: 4, title: 'জাতীয় দিবসের কুচকাওয়াজ', thumb: 'https://picsum.photos/seed/v4/800/450' },
];

const Videos: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-red-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">ভিডিও আর্কাইভ</h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          <p className="mt-6 text-xl text-red-100">সংগ্রাম ও সাফল্যের জীবন্ত মুহূর্তগুলো।</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((vid) => (
            <div key={vid.id} className="group">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={vid.thumb} 
                  alt={vid.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-100 group-hover:bg-blue-900/10 transition-colors">
                  <div className="bg-red-600 p-4 rounded-full text-white shadow-2xl group-hover:scale-125 transition-transform">
                    <Play className="h-10 w-10 fill-current" />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-blue-900 group-hover:text-red-600 transition-colors">
                {vid.title}
              </h3>
              <p className="text-gray-500 mt-1">আপলোড করা হয়েছে: ২ মাস আগে</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-blue-50 rounded-3xl text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            নিয়মিত আমাদের কর্মকাণ্ড এবং গুরুত্বপূর্ণ ভাষণগুলো দেখতে আমাদের ইউটিউব চ্যানেলের সাথে যুক্ত থাকুন।
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
          >
            ইউটিউব চ্যানেলে যান
          </a>
        </div>
      </section>
    </div>
  );
};

export default Videos;


import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { id: 1, url: 'https://picsum.photos/seed/g1/800/600', title: 'বিশাল জনসভা ২০২৪' },
  { id: 2, url: 'https://picsum.photos/seed/g2/800/600', title: 'শীতার্তদের সহায়তা' },
  { id: 3, url: 'https://picsum.photos/seed/g3/800/600', title: 'রক্তদান কর্মসূচি' },
  { id: 4, url: 'https://picsum.photos/seed/g4/800/600', title: 'ওয়ার্ড কমিটির মিটিং' },
  { id: 5, url: 'https://picsum.photos/seed/g5/800/600', title: 'পরিচ্ছন্নতা অভিযান' },
  { id: 6, url: 'https://picsum.photos/seed/g6/800/600', title: 'ইফতার মাহফিল' },
  { id: 7, url: 'https://picsum.photos/seed/g7/800/600', title: 'মে দিবস র‍্যালি' },
  { id: 8, url: 'https://picsum.photos/seed/g8/800/600', title: 'শহীদ দিবস শ্রদ্ধাঞ্জলি' },
  { id: 9, url: 'https://picsum.photos/seed/g9/800/600', title: 'কর্মীদের সাথে শুভেচ্ছা বিনিময়' },
];

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-blue-800 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">ফটো গ্যালারি</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="mt-6 text-xl text-blue-100">আমাদের কর্মকাণ্ডের কিছু খণ্ডচিত্র।</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all hover:shadow-2xl"
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors">
            <X className="h-10 w-10" />
          </button>
          <img src={selectedImg} alt="Enlarged" className="max-w-full max-h-full rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default Gallery;

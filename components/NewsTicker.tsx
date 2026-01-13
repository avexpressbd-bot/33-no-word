
import React from 'react';
import { Megaphone } from 'lucide-react';

const NewsTicker: React.FC = () => {
  const news = [
    "আগামী শুক্রবার ৩৩নং ওয়ার্ডে বিশাল সমাবেশ অনুষ্ঠিত হবে।",
    "শীতার্তদের মাঝে শীতবস্ত্র বিতরণ কর্মসূচি সফলভাবে সম্পন্ন হয়েছে।",
    "মোহাম্মাদপুর থানা স্বেচ্ছাসেবক দলের নতুন কমিটি ঘোষণা।",
    "রক্তদান কর্মসূচি সফল করতে ওয়ার্ডবাসীর সহযোগিতা কামনা করছি।"
  ];

  return (
    <div className="bg-blue-800 text-white overflow-hidden py-2 relative flex items-center">
      <div className="bg-red-600 px-4 py-1 font-bold z-10 flex items-center gap-2 whitespace-nowrap shadow-lg">
        <Megaphone className="h-4 w-4" />
        সর্বশেষ খবর:
      </div>
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {news.map((item, idx) => (
          <span key={idx} className="mx-8 font-medium">
            {item} •
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {news.map((item, idx) => (
          <span key={`dup-${idx}`} className="mx-8 font-medium">
            {item} •
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;

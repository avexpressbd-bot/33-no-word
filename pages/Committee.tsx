
import React from 'react';
import { Phone, User } from 'lucide-react';
import { Member } from '../types';

const members: Member[] = [
  { id: 1, name: "মোঃ আবু তাহের", designation: "আহব্বায়ক", phone: "০১৯৯৯৯৬৬০৪৪", imageUrl: "https://picsum.photos/seed/abu-taher-portrait/400/400" },
  { id: 2, name: "মোঃ জুম্মান বেপারি", designation: "যুগ্ন-আহব্বায়ক", phone: "০১৮৭৩০৬১১৫৯", imageUrl: "https://picsum.photos/seed/jumman-bepari/400/400" },
  { id: 3, name: "মোঃ সাইফুল ইসলাম খলিফা", designation: "যুগ্ন-আহব্বায়ক", phone: "০১৮৭৩০৬১১৫৯", imageUrl: "https://picsum.photos/seed/saiful-khalifa/400/400" },
  { id: 4, name: "মোঃ জাহিদুল ইসলাম কালু", designation: "যুগ্ন-আহব্বায়ক", phone: "০১৮৭৩০৬১১৫৯", imageUrl: "https://picsum.photos/seed/zahidul-kalu/400/400" },
  { id: 5, name: "মোঃ মমিনুর রহমান", designation: "যুগ্ন-আহব্বায়ক", phone: "০১৮৭৩০৬১১৫৯", imageUrl: "https://picsum.photos/seed/mominur-rahman/400/400" },
  { id: 6, name: "মোঃ মতিন", designation: "সদস্য", phone: "০১৮৭৩০৬১১৫৯", imageUrl: "https://picsum.photos/seed/matin-member/400/400" },
];

const Committee: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-red-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">কমিটি মেম্বারবৃন্দ</h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          <p className="mt-6 text-xl text-red-100">৩৩নং ওয়ার্ড স্বেচ্ছাসেবক দলের সংগ্রামী নেতৃত্ব।</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-white text-sm italic font-medium">"দেশ ও দশের সেবায় সর্বদা নিয়োজিত।"</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{member.designation}</p>
                <div className="w-full h-px bg-gray-100 mb-4"></div>
                <a 
                  href={`tel:${member.phone}`} 
                  className="flex items-center justify-center gap-2 text-blue-800 font-bold bg-blue-50 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all"
                >
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;

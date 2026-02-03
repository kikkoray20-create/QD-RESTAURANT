
import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const categories = ['ALL', 'PIZZA', 'MOMOS', 'STARTERS', 'MAINS', 'DESSERTS'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => {
        if (activeCategory === 'MAINS') return item.category.toUpperCase() === 'MAIN COURSE';
        return item.category.toUpperCase() === activeCategory;
      });

  return (
    <section className="py-32 bg-[#FDFDFD] text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h4 className="text-[#FFB300] font-black tracking-widest text-xs uppercase mb-4">THE CURATED COLLECTION</h4>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">OUR SIGNATURE <br/> DISHES</h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-xl scale-105' 
                    : 'bg-white text-gray-400 hover:text-black hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 animate-reveal border border-gray-50 flex flex-col h-full"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative h-[300px] overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {item.isBestseller && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#FFB300] text-black text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      BESTSELLER
                    </span>
                  </div>
                )}
                
                <div className="absolute bottom-6 right-6">
                  <div className="bg-black text-white text-sm font-black px-5 py-3 rounded-2xl shadow-2xl">
                    {item.price}
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 shrink-0">
                  <span className="text-[10px] font-black text-[#FFB300] tracking-widest uppercase">{item.category}</span>
                  <div className="h-px bg-gray-100 flex-grow"></div>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#FFB300] transition-colors leading-tight shrink-0">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 line-clamp-2 flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto flex justify-center">
                  <a 
                    href={RESTAURANT_INFO.swiggyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[220px] border-2 border-black text-black py-4 rounded-2xl font-black text-xs tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group/btn"
                  >
                    ADD TO ORDER
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

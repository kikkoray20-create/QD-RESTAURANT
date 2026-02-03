
import React, { useEffect, useState } from 'react';
import { fetchRestaurantLatestInfo } from '../services/gemini';
import { RESTAURANT_INFO } from '../constants';

const MapSection: React.FC = () => {
  const [latestInfo, setLatestInfo] = useState<{text: string; chunks: any[]} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInfo = async () => {
      setLoading(true);
      const data = await fetchRestaurantLatestInfo();
      if (data) {
        setLatestInfo({ text: data.text, chunks: data.groundingChunks });
      }
      setLoading(false);
    };
    loadInfo();
  }, []);

  // Using specific coordinates for the map dot
  const lat = 28.695183;
  const lng = 77.204251;
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal order-2 lg:order-1 active w-full lg:sticky lg:top-32">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] relative border-[12px] border-white/5 transition-all duration-1000">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`QD Restaurant Location - ${RESTAURANT_INFO.address}`}
              ></iframe>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2 active">
            <h4 className="text-[#FFB300] font-black tracking-widest text-xs uppercase mb-6">VISIT THE LEGEND</h4>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.9]">FIND YOUR <br/> SPACE</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB300] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-black text-white text-lg tracking-tight mb-2 uppercase">ADDRESS</h4>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm max-w-sm">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB300] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="w-full">
                  <h4 className="font-black text-white text-lg tracking-tight mb-4 uppercase">HOURS</h4>
                  <div className="space-y-2 max-w-xs">
                    {RESTAURANT_INFO.detailedHours.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="font-bold text-gray-400">{item.day}</span>
                        <span className="font-medium text-gray-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                <h4 className="text-[#FFB300] font-black text-[10px] tracking-widest uppercase mb-4 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB300] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB300]"></span>
                  </span>
                  LIVE STATUS
                </h4>
                {loading ? (
                  <div className="space-y-3">
                    <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm leading-relaxed font-medium">
                    <p className="mb-6">{latestInfo?.text || "QD's is ready to serve you North Campus's favorite flavors!"}</p>
                    {latestInfo?.chunks?.map((chunk, idx) => chunk.maps && (
                      <a 
                        key={idx} 
                        href={chunk.maps.uri} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-white font-black text-[10px] tracking-widest border-b-2 border-[#FFB300] pb-1 hover:text-[#FFB300] transition-colors"
                      >
                        DIRECTIONS ON GOOGLE MAPS →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;

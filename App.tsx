
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import MapSection from './components/MapSection';
import { MENU_ITEMS, REVIEWS, RESTAURANT_INFO } from './constants';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <FeaturedSection />
      <ReviewsSection />
      <MapSection />
    </div>
  );
};

const MenuPage: React.FC = () => (
  <div className="bg-[#F9F9F9]">
    <div className="h-28 bg-black"></div>
    <MenuSection />
  </div>
);

const AboutPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white pt-32">
      {/* Hero / Legacy Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h4 className="text-[#FFB300] font-black tracking-widest uppercase text-xs mb-8 reveal active">SINCE 2008</h4>
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter reveal active delay-1 leading-[0.9] uppercase">OUR <br/> LEGACY</h2>
          <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light reveal active delay-2">
            <p>
              Located in Hudson Lane, GTB Nagar, North Campus, QD's started with a simple goal: to redefine premium dining for the students of Delhi.
            </p>
            <p className="text-white font-bold italic text-2xl md:text-4xl tracking-tight py-10 uppercase border-y border-white/5 my-10 leading-tight">
              "Innovation in every bite, <br/> memories in every visit."
            </p>
            <p>
              Famous for our Tandoori Momos, we've spent over a decade crafting fusion flavors that celebrate the vibrant energy of North Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Offerings Section */}
      <section className="py-24 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Column 1: Core Services & Dining */}
            <div className="reveal">
              <h3 className="text-2xl font-black tracking-tighter mb-10 text-[#FFB300] uppercase">SERVICE & DINING</h3>
              <ul className="space-y-6">
                {[
                  { title: "Service Options", items: ["Kerbside pickup", "No-contact delivery", "Takeaway", "Dine-in"] },
                  { title: "Dining Options", items: ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Table service"] },
                  { title: "Popular For", items: ["Solo dining", "Quick bites", "Small plates"] }
                ].map((group, i) => (
                  <li key={i}>
                    <h4 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-3">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <span key={j} className="text-xs font-bold bg-white/10 px-4 py-2 rounded-full">{item}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Atmosphere & Crowd */}
            <div className="reveal delay-1">
              <h3 className="text-2xl font-black tracking-tighter mb-10 text-[#FFB300] uppercase">THE EXPERIENCE</h3>
              <ul className="space-y-6">
                {[
                  { title: "Atmosphere", items: ["Casual", "Cozy", "Trendy", "Upmarket"] },
                  { title: "Crowd", items: ["Family friendly", "Groups", "University students", "Tourists", "LGBTQ+ friendly"] },
                  { title: "Highlights", items: ["Great coffee", "Great dessert", "Alcohol & Cocktails"] }
                ].map((group, i) => (
                  <li key={i}>
                    <h4 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-3">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <span key={j} className="text-xs font-bold border border-white/20 px-4 py-2 rounded-full">{item}</span>
                      ))}
                    </div>
                  </li>
                ))}
                <li>
                  <h4 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-3">CHILDREN</h4>
                  <p className="text-sm font-bold text-white">Good for kids / Family Oriented</p>
                </li>
              </ul>
            </div>

            {/* Column 3: Planning & Payments */}
            <div className="reveal delay-2">
              <h3 className="text-2xl font-black tracking-tighter mb-10 text-[#FFB300] uppercase">PRACTICALITIES</h3>
              <ul className="space-y-6">
                {[
                  { title: "Planning", items: ["Accepts reservations", "Brunch reservations recommended", "Dinner reservations recommended"] },
                  { title: "Payments", items: ["Google Pay", "Credit/Debit Cards", "NFC mobile payments"] },
                  { title: "Offerings", items: ["Vegetarian options", "All you can eat", "Small plates"] }
                ].map((group, i) => (
                  <li key={i}>
                    <h4 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-3">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <span key={j} className="text-xs font-bold bg-[#FFB300] text-black px-4 py-2 rounded-full">{item}</span>
                      ))}
                    </div>
                  </li>
                ))}
                <li>
                  <h4 className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-3">AMENITIES</h4>
                  <p className="text-sm font-bold text-white">Restroom Available</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            {[
              { label: 'YEARS', val: '12+' },
              { label: 'FANS', val: '500K+' },
              { label: 'RATING', val: '4.1' },
              { label: 'DELHI', val: '100%' }
            ].map((stat, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#FFB300]/30 transition-all duration-700 text-center">
                <div className="text-4xl font-black text-[#FFB300] tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black tracking-[0.2em] text-gray-500 mt-3 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2000&q=100", // Moment 1: Replaced with highly visible fresh food shot 4K
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=100", // Moment 2: Replaced with high-contrast fine dining food shot 4K
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=100", // Artisan Fusion Pizza
    "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=2000&q=100", // Crispy Honey Chilli Potato
    "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=2000&q=100", // Platter Presentation
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=2000&q=100", // Moment 6: Vibrant Refreshing Drink
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=2000&q=100", // Moment 7: Decadent Sizzling Dessert
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=2000&q=100", // Moment 8: Signature Pizza Detail 4K
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=2000&q=100", // Moment 9: Sizzling Fusion Skewers 4K
    "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=2000&q=100", // Moment 10: Deep Fried Fusion Snacks 4K
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=100", // Chef's Special Main Course
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=100", // Vibrant Food Spread
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0A0A0A] pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-24 reveal">
          <h4 className="text-[#FFB300] font-black tracking-[0.4em] uppercase text-xs mb-4">MOMENTS AT QD'S</h4>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">THE VIBE</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((src, i) => (
            <div 
              key={i} 
              className="aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-crosshair reveal shadow-2xl border border-white/5 relative"
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <img 
                src={src} 
                alt={`QD's Moments ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase border-b-2 border-[#FFB300] inline-block w-fit pb-1">QD'S ORIGINAL</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal">
          <p className="text-gray-500 font-medium tracking-widest text-xs uppercase mb-10">FOLLOW US ON INSTAGRAM FOR MORE</p>
          <a 
            href={RESTAURANT_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-[10px] tracking-[0.3em] hover:bg-[#FFB300] hover:text-black hover:border-transparent transition-all"
          >
            JOIN THE COMMUNITY
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="bg-[#0A0A0A] pt-32 min-h-screen">
    <MapSection />
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-20 tracking-tighter reveal active uppercase leading-none">CONTACT</h2>
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-20 backdrop-blur-xl reveal active delay-1 max-w-4xl mx-auto">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input type="text" className="w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-[#FFB300] outline-none transition-all font-black text-xl placeholder:text-white/20" placeholder="YOUR NAME" />
              </div>
              <div className="relative">
                <input type="email" className="w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-[#FFB300] outline-none transition-all font-black text-xl placeholder:text-white/20" placeholder="YOUR EMAIL" />
              </div>
            </div>
            <textarea rows={4} className="w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-[#FFB300] outline-none transition-all font-black text-xl placeholder:text-white/20" placeholder="MESSAGE"></textarea>
            <button className="w-full bg-[#FFB300] text-black font-black py-6 rounded-2xl tracking-[0.3em] text-[10px] hover:bg-white transition-all shadow-2xl">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

const FeaturedSection: React.FC = () => (
  <section className="py-32 bg-[#0A0A0A] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 reveal">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 md:mb-0 uppercase leading-none">THE LEGENDS</h2>
        <Link to="/menu" className="text-[#FFB300] font-black tracking-[0.3em] text-[10px] hover:underline uppercase border-b border-[#FFB300] pb-1">View Full Menu →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MENU_ITEMS.filter(item => item.isBestseller).map((item, idx) => (
          <div key={item.id} className="group reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
            <div className="h-[500px] rounded-[3.5rem] overflow-hidden relative shadow-2xl border border-white/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[10px] font-black text-[#FFB300] tracking-widest uppercase mb-3 block">{item.category}</span>
                <h3 className="text-4xl font-black text-white tracking-tighter leading-none mb-8">{item.name}</h3>
                <Link to="/menu" className="inline-block bg-[#FFB300] text-black text-[10px] font-black tracking-[0.3em] px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl">
                  DETAILS
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewsSection: React.FC = () => (
  <section className="py-32 bg-[#0A0A0A] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-24 reveal">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase">FEEDBACK</h2>
        <div className="flex justify-center items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-[#FFB300]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((review, idx) => (
          <div key={review.id} className="reveal bg-white/[0.03] p-12 rounded-[3rem] border border-white/5 hover:border-[#FFB300]/20 transition-all duration-700 shadow-xl" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <p className="text-gray-400 text-lg leading-relaxed italic mb-12">"{review.text}"</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#FFB300] rounded-full flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(255,179,0,0.3)]">
                {review.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-black text-white text-base tracking-tight uppercase leading-none">{review.author}</h4>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest mt-2 uppercase">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative font-sans selection:bg-[#FFB300] selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        
        <div className="fixed bottom-8 right-8 lg:hidden z-[100] animate-bounce">
          <a href={RESTAURANT_INFO.swiggyLink} className="w-16 h-16 bg-[#FFB300] rounded-full flex items-center justify-center text-black shadow-[0_20px_40px_rgba(255,179,0,0.4)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;

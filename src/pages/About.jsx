import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Happy Families', value: '10,000+' },
    { label: 'Remedies Sold', value: '50,000+' },
    { label: 'Village Partners', value: '25+' },
    { label: 'Years of Heritage', value: '50+' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Traditional Hand-pounding", desc: "Our powders are dried naturally under sun exposure and milled slowly to preserve vital active compounds.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1000&auto=format&fit=crop&q=80" },
    { title: "Direct Farm Sourcing", desc: "Sourcing kasthuri manjal roots and native grains directly from Tamil Nadu organic farm cooperatives.", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1000&auto=format&fit=crop&q=80" },
    { title: "Small-Batch Packing", desc: "We bundle mixtures immediately after grinding to ensure raw botanical aromas are fully locked.", image: "https://images.unsplash.com/photo-1505576399279-0d754e0e4e8e?w=1000&auto=format&fit=crop&q=80" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-32 pb-24 bg-[#f9fbf9] min-h-screen font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Our Heritage</span>
          <h1 className="text-3xl sm:text-5xl font-light font-display text-emerald-955 mt-1">About Grandmas Care</h1>
          <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
          <p className="text-emerald-955/50 text-xs sm:text-sm mt-4 font-medium leading-relaxed">Preserving authentic Tamil herbal wellness. 100% raw, chemical-free wellness recipes blended with grandmothers care since 2020.</p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-light font-display text-emerald-955 leading-[1.1]">Rooted in Tamil Nadu's Heritage</h2>
            <p className="text-xs sm:text-sm text-emerald-955/60 leading-relaxed font-semibold">
              Grandmas Care was established to package authentic home wellness powders. In a market flooded with chemically formulated cosmetic substitutes, we choose to protect raw, traditional herbal remedies.
            </p>
            <p className="text-xs sm:text-sm text-emerald-955/60 leading-relaxed font-semibold">
              We work closely with rural agricultural farmers and women cooperatives in Tamil villages. By sourcing raw ingredients directly, we ensure fair compensation for our makers and pure, therapeutic quality for our families.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-emerald-500/5">
              {['100% Raw Ingredients', 'Zero Processing Fillers', 'Empowering Village Co-ops'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-650 flex items-center justify-center font-black text-[9px]">✓</div>
                  <span className="text-[10px] text-emerald-950 font-bold uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Slideshow Panel */}
          <div className="glass-panel p-4 rounded-[32px] relative overflow-hidden group shadow-[0_15px_40px_rgba(11,34,22,0.02)] h-[380px] border border-emerald-500/5 bg-white">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})`, filter: 'brightness(0.35) contrast(1.05)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10 text-left">
                  <span className="text-[8px] text-emerald-400 font-extrabold uppercase tracking-widest">Our Operations</span>
                  <h4 className="text-white font-medium text-lg sm:text-xl mt-1 leading-snug font-display">{slides[currentSlide].title}</h4>
                  <p className="text-emerald-100/70 text-xs sm:text-sm mt-1.5 leading-relaxed font-semibold">{slides[currentSlide].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center shadow-sm border border-emerald-500/5 hover:bg-white duration-300">
              <span className="text-3xl sm:text-4xl font-normal text-emerald-800 font-display">{stat.value}</span>
              <span className="text-emerald-500 text-[9px] uppercase font-bold tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="premium-card p-8 rounded-[32px] relative overflow-hidden bg-white shadow-[0_12px_30px_rgba(11,34,22,0.02)]">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl" />
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl flex-shrink-0">🌿</div>
              <div className="space-y-2.5">
                <h3 className="text-emerald-955 font-normal text-lg font-display leading-none">Our Mission</h3>
                <p className="text-emerald-955/50 text-xs sm:text-sm leading-relaxed font-semibold">
                  To protect standard traditional home care formulations and make them accessible globally. We focus on ethical, small-batch sourcing that supports native farming and healthy living.
                </p>
              </div>
            </div>
          </div>

          <div className="premium-card p-8 rounded-[32px] relative overflow-hidden bg-white shadow-[0_12px_30px_rgba(11,34,22,0.02)]">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl" />
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl flex-shrink-0">👁️</div>
              <div className="space-y-2.5">
                <h3 className="text-emerald-955 font-normal text-lg font-display leading-none">Our Vision</h3>
                <p className="text-emerald-955/50 text-xs sm:text-sm leading-relaxed font-semibold">
                  To establish Grandmas Care as a global benchmark for raw botanical wellness. We aim to revive natural beauty rituals by preserving the raw healing energy of South Indian herbs.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

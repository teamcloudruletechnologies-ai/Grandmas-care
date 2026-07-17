import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Products Sold', value: '50,000+' },
    { label: 'Village Partners', value: '25+' },
    { label: 'Years of Tradition', value: '50+' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Our Herbal Workshop", desc: "Where traditional Tamil herbal powders are prepared using time-honored methods.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1000&auto=format&fit=crop&q=80" },
    { title: "Organic Farm Partners", desc: "Directly sourced from organic farms and village co-operatives across Tamil Nadu.", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1000&auto=format&fit=crop&q=80" },
    { title: "Quality Packaging", desc: "Fresh packing facility ensuring product purity and long shelf life.", image: "https://images.unsplash.com/photo-1505576399279-0d754e0e4e8e?w=1000&auto=format&fit=crop&q=80" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-28 pb-20 bg-[#f0fdf4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs">Our Story</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2 mb-4">About Tamila Natural</h1>
          <p className="text-emerald-700/60 text-sm">Preserving traditional Tamil herbal wisdom and bringing it to modern homes. 100% natural, chemical-free wellness products since 2020.</p>
        </div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-emerald-900">Rooted in Tamil Nadu's Herbal Heritage</h2>
            <p className="text-emerald-700/70 text-sm leading-relaxed">
              Tamila Natural was born from a deep passion for traditional Tamil herbal remedies. We noticed that authentic herbal products were becoming harder to find in a market flooded with chemical-laden alternatives.
            </p>
            <p className="text-emerald-700/70 text-sm leading-relaxed">
              Today, we partner with 25+ village artisans and organic farmers across Tamil Nadu to bring you the purest herbal powders, health mixes, and wellness products — prepared the way our grandmothers intended.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-emerald-100">
              {['100% Chemical Free', 'Traditional Recipes', 'Farm Fresh'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</div>
                  <span className="text-xs text-emerald-800 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-4 rounded-3xl relative overflow-hidden group shadow-xl h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})`, filter: 'brightness(0.5)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                  <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Our Facility</span>
                  <h4 className="text-white font-bold text-lg mt-1">{slides[currentSlide].title}</h4>
                  <p className="text-emerald-100/80 text-xs mt-1">{slides[currentSlide].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute right-6 top-6 z-20 flex gap-2">
              {slides.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition ${currentSlide === idx ? 'bg-emerald-400 w-4' : 'bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:border-emerald-300 transition">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 font-display">{stat.value}</span>
              <span className="text-emerald-500 text-[10px] sm:text-xs uppercase font-bold tracking-wider mt-2">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl" />
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">🌿</div>
              <div className="space-y-2">
                <h3 className="text-emerald-900 font-bold text-lg font-display">Our Mission</h3>
                <p className="text-emerald-600/70 text-xs leading-relaxed">
                  To make traditional Tamil herbal remedies accessible to every household. We are committed to preserving village recipes, supporting local farmers, and delivering 100% natural wellness products.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl" />
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">👁️</div>
              <div className="space-y-2">
                <h3 className="text-emerald-900 font-bold text-lg font-display">Our Vision</h3>
                <p className="text-emerald-600/70 text-xs leading-relaxed">
                  To become India's most trusted herbal wellness brand, known for authentic Tamil traditional remedies, transparent sourcing, and the highest quality natural ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

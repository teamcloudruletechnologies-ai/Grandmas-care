import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
  { name: 'Priya Ramanathan', role: 'Homemaker', rating: 5, comment: 'The Nalangu Maavu is truly therapeutic! The raw aroma of fresh herbs is incredible, and it leaves my skin feeling beautifully clean and smooth.' },
  { name: 'Anitha Selvam', role: 'Yoga Instructor', rating: 5, comment: 'I have substituted processed breakfast cereals with their Millet Mix. Clean, wholesome energy that lasts through my intense yoga classes.' },
  { name: 'Kavitha Murugan', role: 'Wellness Blogger', rating: 5, comment: 'Their Kerala Ayurvedic Hair Oil is a staple now. Visible reduction in hair breakage in under three weeks. Standard artisanal quality!' },
  { name: 'Meena Devi', role: 'Chef', rating: 5, comment: 'Very clean formulation and authentic taste. The stone-ground quality makes a huge difference in texture and effectiveness.' },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveIdx((prev) => (prev + 1) % reviews.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 border-b border-emerald-500/5 relative z-10 bg-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Testimonials</span>
        <h2 className="text-3xl sm:text-5xl font-light font-display text-emerald-950 mt-1 mb-16">Customer Love</h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-1 text-amber-500">
                {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                  <FiStar key={i} className="text-base fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xl sm:text-3xl text-emerald-900 leading-relaxed font-light italic max-w-3xl mx-auto font-display">
                "{reviews[activeIdx].comment}"
              </p>
              <div className="flex items-center justify-center gap-3 pt-5">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shadow-sm border border-emerald-600">
                  {reviews[activeIdx].name[0]}
                </div>
                <div className="text-left">
                  <h5 className="text-emerald-950 font-bold text-xs leading-none uppercase tracking-wider">{reviews[activeIdx].name}</h5>
                  <span className="text-emerald-500 text-[10px] font-bold mt-1.5 block uppercase tracking-widest">{reviews[activeIdx].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2.5 mt-10">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIdx === idx ? 'bg-emerald-600 w-8' : 'bg-emerald-200/60 w-1.5'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

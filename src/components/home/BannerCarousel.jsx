import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import banner1 from '../../assets/Banner/Kadalai Maavu Banner.png';
import banner2 from '../../assets/Banner/Kasthuri Manjal Banner.png';
import banner3 from '../../assets/Banner/Nalangu Maavu Banner.png';
import banner4 from '../../assets/Banner/Payatha Maavu Banner.png';
import banner5 from '../../assets/Banner/Pink Facepack Banner.png';

const bannerImages = [banner1, banner2, banner3, banner4, banner5];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % bannerImages.length);

  // Preload all banner images immediately on mount to prevent network delay or blank image flashes
  useEffect(() => {
    bannerImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full z-10 pt-[72px] md:pt-[90px] bg-white">
      <div className="relative w-full aspect-[1200/687] overflow-hidden bg-emerald-50/20">
        {bannerImages.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Banner ${idx + 1}`}
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            fetchpriority={idx === 0 ? 'high' : 'auto'}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover ${
              idx === current ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/25 hover:bg-black/45 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-2.5 transition-all duration-200 hover:scale-110 border border-white/20"
          aria-label="Previous banner"
        >
          <FiChevronLeft size={18} className="sm:hidden" />
          <FiChevronLeft size={22} className="hidden sm:block" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/25 hover:bg-black/45 backdrop-blur-sm text-white rounded-full p-1.5 sm:p-2.5 transition-all duration-200 hover:scale-110 border border-white/20"
          aria-label="Next banner"
        >
          <FiChevronRight size={18} className="sm:hidden" />
          <FiChevronRight size={22} className="hidden sm:block" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 sm:w-6 h-2 sm:h-2.5 bg-white'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

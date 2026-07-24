import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import herbsImg from '../../assets/ayurvedic_herbs.jpg';
import kitchenImg from '../../assets/rustic_kitchen.jpg';
import familyImg from '../../assets/hero_lifestyle.jpg';
import grandmaImg from '../../assets/grandmother_story.jpg';

export default function InstagramJourney() {
  return (
    <section className="py-24 bg-[#F8F5EE] relative z-10 border-b border-[#0A4D2E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0A4D2E] font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs">
            Follow Our Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-display text-[#1B2B1F]">
            Follow Our Journey
          </h2>
          <div className="h-[1.5px] w-12 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-sm text-[#1F2937]/60 mt-4 leading-relaxed font-medium">
            Experience our journey through nature, wellness, tradition, and handcrafted living.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#0A4D2E]/5 cursor-pointer"
          >
            <img src={herbsImg} alt="Fresh herbs" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-[#0A4D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#0A4D2E]/5 cursor-pointer lg:mt-8"
          >
            <img src={kitchenImg} alt="Traditional village kitchen" className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-[#0A4D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#0A4D2E]/5 cursor-pointer"
          >
            <img src={familyImg} alt="Happy family lifestyle" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-[#0A4D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#0A4D2E]/5 cursor-pointer lg:mt-8"
          >
            <img src={grandmaImg} alt="Ayurveda preparation" className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-[#0A4D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* Instagram CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/grandmascare?igsh=bWduMjVqZnl1dWt4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0A4D2E] hover:bg-[#0F7A43] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <FaInstagram className="text-sm text-[#D4AF37]" />
            <span>Follow @grandmascare</span>
            <span className="text-[12px]">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

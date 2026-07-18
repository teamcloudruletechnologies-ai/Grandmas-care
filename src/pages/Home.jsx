import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import { herbalProducts } from '../data/herbalProducts';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { addToCart } = useInquiry();
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const heroSlides = [
    {
      title: 'Traditional Skincare Powders',
      subtitle: 'Nalangu Maavu & Kasthuri Manjal',
      description: 'Hand-milled botanicals ground carefully according to village wellness traditions. Formulated for glowing, clear, and chemical-free skin.',
      badge: 'Traditional Wisdom',
      image: herbalProducts.find(p => p.id === 'herbal-bath-powder')?.image,
      productId: 'herbal-bath-powder'
    },
    {
      title: 'Artisanal Health Drink Mixes',
      subtitle: 'Stone-Ground Multi-Millet Blends',
      description: 'Power your mornings with pure sprouted millets. Packed with vital iron, calcium, and dietary fiber for whole family wellness.',
      badge: 'Pure Nutrition',
      image: herbalProducts.find(p => p.id === 'millet-health-mix')?.image,
      productId: 'millet-health-mix'
    },
    {
      title: 'Botanical Hair Pack Treatments',
      subtitle: 'Cold-Pressed Herbal Hair Remedies',
      description: 'Strengthen follicles and reduce hair fall with cold-pressed oils infused with 21 active roots and fresh hibiscus extracts.',
      badge: 'Root Therapy',
      image: herbalProducts.find(p => p.id === 'kerela-ayurvedic-hair-oil')?.image,
      productId: 'kerela-ayurvedic-hair-oil'
    }
  ];

  const reviews = [
    { name: 'Priya Ramanathan', role: 'Homemaker', rating: 5, comment: 'The Nalangu Maavu is truly therapeutic! The raw aroma of fresh herbs is incredible, and it leaves my skin feeling beautifully clean and smooth.' },
    { name: 'Anitha Selvam', role: 'Yoga Instructor', rating: 5, comment: 'I have substituted processed breakfast cereals with their Millet Mix. Clean, wholesome energy that lasts through my intense yoga classes.' },
    { name: 'Kavitha Murugan', role: 'Wellness Blogger', rating: 5, comment: 'Their Kerala Ayurvedic Hair Oil is a staple now. Visible reduction in hair breakage in under three weeks. Standard artisanal quality!' },
    { name: 'Meena Devi', role: 'Chef', rating: 5, comment: 'Very clean formulation and authentic taste. The stone-ground quality makes a huge difference in texture and effectiveness.' }
  ];

  const featuredProducts = herbalProducts.slice(0, 6);

  useEffect(() => {
    const heroInterval = setInterval(() => setCurrentHeroIdx((prev) => (prev + 1) % heroSlides.length), 7000);
    const reviewInterval = setInterval(() => setActiveReviewIdx((prev) => (prev + 1) % reviews.length), 6000);
    return () => { clearInterval(heroInterval); clearInterval(reviewInterval); };
  }, [heroSlides.length, reviews.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f9fbf9] selection:bg-emerald-600 selection:text-white">
      
      {/* Ambient background decoration */}
      <div className="glow-blob w-[600px] h-[600px] -top-40 -left-40 bg-emerald-100/30 animate-pulse-slow" />
      <div className="glow-blob w-[700px] h-[700px] top-[25vh] -right-40 bg-teal-50/20 animate-pulse-slow" style={{ animationDelay: '3.5s' }} />
      <div className="glow-blob w-[600px] h-[600px] bottom-10 left-1/4 bg-emerald-55/10 animate-pulse-slow" style={{ animationDelay: '5.5s' }} />

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex items-center pt-28 pb-16 border-b border-emerald-500/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left relative z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/5 text-emerald-800 border border-emerald-500/10 text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    {heroSlides[currentHeroIdx].badge}
                  </span>
                  
                  <h1 className="text-4xl sm:text-6.5xl lg:text-7xl font-light font-display tracking-wide text-emerald-950 leading-[1.08]">
                    {heroSlides[currentHeroIdx].title}
                    <span className="text-gradient block font-normal mt-3.5 italic">
                      {heroSlides[currentHeroIdx].subtitle}
                    </span>
                  </h1>
                  
                  <p className="text-xs sm:text-sm text-emerald-950/50 leading-relaxed max-w-lg font-medium">
                    {heroSlides[currentHeroIdx].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-5">
                    <Link 
                      to={`/product/${heroSlides[currentHeroIdx].productId}`} 
                      className="bg-emerald-850 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] px-9 py-4.5 rounded-xl transition-all shadow-md shadow-emerald-950/10 hover:-translate-y-0.5 text-center active:translate-y-0 cursor-pointer"
                    >
                      Discover Remedy
                    </Link>
                    <a 
                      href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%20Grandmas%20Care%2C%20I%2527m%20interested%20in%20your%20traditional%20remedies%21" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="glass-panel text-emerald-900 border-emerald-500/10 hover:border-emerald-500/20 font-bold text-[10px] uppercase tracking-[0.2em] px-9 py-4.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer bg-white/40"
                    >
                      <FaWhatsapp className="text-emerald-500 text-base" />
                      <span>WhatsApp Order</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Display Column */}
            <div className="lg:col-span-5 flex justify-center relative z-10 mt-8 lg:mt-0">
              <div className="absolute w-[380px] h-[380px] border border-dashed border-emerald-500/10 rounded-full animate-spin-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="relative group cursor-pointer"
                >
                  <Link to={`/product/${heroSlides[currentHeroIdx].productId}`}>
                    <img 
                      src={heroSlides[currentHeroIdx].image} 
                      alt={heroSlides[currentHeroIdx].title} 
                      className="w-[280px] sm:w-[330px] h-[370px] sm:h-[430px] object-contain bg-white p-6 rounded-[32px] shadow-[0_24px_60px_rgba(11,34,22,0.06)] border border-emerald-500/10 group-hover:scale-[1.01] transition-all duration-500" 
                    />
                  </Link>
                  
                  {/* Floating Trust Indicator */}
                  <div className="absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_15px_35px_rgba(11,34,22,0.03)] border border-emerald-500/5 max-w-xs text-left">
                    <div className="flex items-center gap-1.5 text-amber-600 mb-1.5">
                      <FiStar className="fill-amber-600 text-xs" />
                      <span className="text-[9px] font-bold tracking-[0.15em] uppercase">4.9 Star Trust</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 font-bold uppercase tracking-wider">Loved by 10,000+ Families</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BADGES SECTION */}
      <section className="py-14 border-b border-emerald-500/5 relative z-10 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🌿', label: '100% Chemical Free', desc: 'Preservative-free grinding' },
              { icon: '🌾', label: 'Direct Organic Sourcing', desc: 'From Tamil Nadu co-ops' },
              { icon: '👵', label: 'Artisanal Recipes', desc: 'Formulated by home guides' },
              { icon: '📦', label: 'India-Wide Shipping', desc: 'Securely sealed freshness' }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all hover:bg-white duration-300">
                <span className="text-3xl mb-3.5">{item.icon}</span>
                <span className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] mb-1.5">{item.label}</span>
                <span className="text-[10px] text-emerald-600/70 font-semibold">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {/* PRODUCT CATALOG COLLECTION */}
      <section className="py-28 border-b border-[#0A4D2E]/5 relative z-10 bg-[#FAF8F3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <div className="text-left">
              <span className="text-[#0A4D2E] font-extrabold uppercase tracking-[0.25em] text-[10px]">Ancient Wellness Collection</span>
              <h2 className="text-3xl sm:text-5xl font-light font-display text-[#1F2937] mt-1">Holistic Remedies</h2>
              <div className="h-[1.5px] w-14 bg-[#D4AF37] mt-4" />
              <p className="text-xs sm:text-sm text-[#1F2937]/60 mt-4 leading-relaxed font-medium max-w-2xl">
                Curated Ayurvedic essentials crafted from traditional ingredients and timeless herbal wisdom.
              </p>
            </div>
            <Link to="/shop" className="text-[#0A4D2E] hover:text-[#0F7A43] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-1.5 mt-6 sm:mt-0 transition duration-300 group">
              <span>View All Remedies</span>
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 border-b border-emerald-500/5 relative z-10 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Grandmas Promise</span>
            <h2 className="text-3xl sm:text-5xl font-light font-display text-emerald-950 mt-1">Sourced from Nature</h2>
            <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
            <p className="text-emerald-950/50 text-xs sm:text-sm mt-4 font-medium leading-relaxed">We package organic Tamil heritage remedies directly from clean rural micro-farms without any additive compromises.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '100% Raw Herbs', desc: 'Zero artificial elements, synthetic chemicals or ground fillers. Just pure botanical elements.', icon: '🌿' },
              { title: 'Artisanal Recipes', desc: 'Standard home formulation rules handed down in villages over generations.', icon: '📜' },
              { title: 'Fair Partnerships', desc: 'Providing fair wages directly to our farming partners and village women cooperatives.', icon: '🤝' },
              { title: 'Air-Tight Freshness', desc: 'Carefully sealed in ecological jars to ensure that pure herbal aromas remain intact.', icon: '📦' }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:bg-white duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/5 flex items-center justify-center mb-6 group-hover:scale-102 transition-all duration-300 text-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-emerald-955 font-bold text-base mb-2 font-display">{item.title}</h3>
                <p className="text-emerald-955/50 text-xs leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 border-b border-emerald-500/5 relative z-10 bg-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-light font-display text-emerald-950 mt-1 mb-16">Customer Love</h2>

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeReviewIdx} 
                initial={{ opacity: 0, scale: 0.98, y: 15 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.98, y: -15 }} 
                transition={{ duration: 0.45 }} 
                className="space-y-6"
              >
                <div className="flex justify-center gap-1 text-amber-500">
                  {[...Array(reviews[activeReviewIdx].rating)].map((_, i) => (
                    <FiStar key={i} className="text-base fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xl sm:text-3xl text-emerald-900 leading-relaxed font-light italic max-w-3xl mx-auto font-display">
                  "{reviews[activeReviewIdx].comment}"
                </p>
                <div className="flex items-center justify-center gap-3 pt-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shadow-sm border border-emerald-600">
                    {reviews[activeReviewIdx].name[0]}
                  </div>
                  <div className="text-left">
                    <h5 className="text-emerald-950 font-bold text-xs leading-none uppercase tracking-wider">{reviews[activeReviewIdx].name}</h5>
                    <span className="text-emerald-500 text-[10px] font-bold mt-1.5 block uppercase tracking-widest">{reviews[activeReviewIdx].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2.5 mt-10">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveReviewIdx(idx)} 
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeReviewIdx === idx ? 'bg-emerald-600 w-8' : 'bg-emerald-200/60 w-1.5'}`} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#006536] p-8 sm:p-16 rounded-[36px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.02] to-transparent -z-10" />
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <span className="text-emerald-300 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center md:justify-start gap-2.5">
                <span className="w-2.5 h-2.5 bg-emerald-450 rounded-full animate-ping" /> Wholesale &amp; Bulk Orders
              </span>
              <h3 className="text-2xl sm:text-4xl font-light font-display text-white leading-tight">Artisanal Partnerships</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-semibold">
                Interested in stocking Grandmas Care organic remedies at your boutique or wellness center? We offer tailored shipping pricing models.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
              <Link to="/contact" className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4.5 rounded-xl text-center transition shadow-md hover:-translate-y-0.5">
                Contact Us
              </Link>
              <a 
                href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%2C%20I%20am%20interested%20in%20bulk%20ordering%20Grandmas%20Care%20products%21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4.5 rounded-xl text-center transition flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp Bulk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import { herbalProducts } from '../data/herbalProducts';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const { addToCart } = useInquiry();
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const heroSlides = [
    {
      title: 'Herbal Bath Powders',
      subtitle: 'Nalangu Maavu & Kasthuri Manjal',
      description: 'Traditional Tamil herbal powders for glowing skin. 100% natural, chemical-free, made from time-honored village recipes.',
      badge: 'Best Seller',
      image: herbalProducts.find(p => p.id === 'herbal-bath-powder')?.image,
      productId: 'herbal-bath-powder'
    },
    {
      title: 'Millet Health Mixes',
      subtitle: 'Kambu, Ragi & Multi-Millet Blends',
      description: 'Power your mornings with nutrient-rich millet health drinks. Packed with iron, calcium, and fiber for all ages.',
      badge: 'Superfood',
      image: herbalProducts.find(p => p.id === 'millet-health-mix')?.image,
      productId: 'millet-health-mix'
    },
    {
      title: 'Ayurvedic Hair Care',
      subtitle: 'Kerala Hair Oil & Ayurglow Pack',
      description: 'Authentic Ayurvedic hair treatments with 21+ herbs. Strengthens roots, reduces hair fall, promotes natural growth.',
      badge: 'Ayurvedic',
      image: herbalProducts.find(p => p.id === 'kerela-ayurvedic-hair-oil')?.image,
      productId: 'kerela-ayurvedic-hair-oil'
    }
  ];

  const reviews = [
    { name: 'Priya Ramanathan', role: 'Homemaker', rating: 5, comment: 'The Nalangu Maavu is amazing! My skin feels so soft and glowing after just one week of use. Pure village quality — no chemicals at all.' },
    { name: 'Anitha Selvam', role: 'Yoga Instructor', rating: 5, comment: 'I use the Millet Health Mix every morning. It gives me energy throughout my yoga sessions. My whole family loves it!' },
    { name: 'Kavitha Murugan', role: 'Wellness Blogger', rating: 5, comment: 'The Kerala Ayurvedic Hair Oil transformed my hair. Reduced hair fall significantly within 2 weeks. Best herbal product I have ever used.' },
    { name: 'Meena Devi', role: 'Chef', rating: 4, comment: 'The Kambu Maavu and ABC Malt are kitchen staples now. Great quality, fresh packing, and authentic taste. Highly recommended!' }
  ];

  const featuredProducts = herbalProducts.slice(0, 6);

  useEffect(() => {
    const heroInterval = setInterval(() => setCurrentHeroIdx((prev) => (prev + 1) % heroSlides.length), 6000);
    const reviewInterval = setInterval(() => setActiveReviewIdx((prev) => (prev + 1) % reviews.length), 5000);
    return () => { clearInterval(heroInterval); clearInterval(reviewInterval); };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0fdf4]">

      <div className="glow-blob w-[400px] h-[400px] -top-20 -left-20 animate-pulse-slow" style={{ background: 'rgba(16,185,129,0.08)' }} />
      <div className="glow-blob w-[500px] h-[500px] top-[40vh] -right-40 animate-pulse-slow" style={{ background: 'rgba(34,197,94,0.06)', animationDelay: '2s' }} />
      <div className="glow-blob w-[600px] h-[600px] bottom-10 left-1/4 animate-pulse-slow" style={{ background: 'rgba(16,185,129,0.04)', animationDelay: '4s' }} />

      {/* HERO */}
      <section className="relative h-[85vh] sm:h-[90vh] flex items-center overflow-hidden border-b border-emerald-100 z-10">
        <AnimatePresence mode="wait">
          <motion.div key={currentHeroIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full">
            <motion.div initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 6 }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroSlides[currentHeroIdx].image})`, filter: 'brightness(0.25) contrast(1.1) blur(1px)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0fdf4] via-[#f0fdf4]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f0fdf4] via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-6 lg:col-span-7 text-left">
                  <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full inline-block">
                    {heroSlides[currentHeroIdx].badge}
                  </span>
                  <h1 className="text-4xl sm:text-7xl font-black font-display tracking-tight text-emerald-900 leading-tight">
                    {heroSlides[currentHeroIdx].title}
                    <span className="text-gradient block font-black">{heroSlides[currentHeroIdx].subtitle}</span>
                  </h1>
                  <p className="text-sm sm:text-base text-emerald-700/70 leading-relaxed max-w-xl">{heroSlides[currentHeroIdx].description}</p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to={`/product/${heroSlides[currentHeroIdx].productId}`} className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.03] text-center">
                      View Product
                    </Link>
                    <a href="https://api.whatsapp.com/send?phone=+919876543210&text=Hi%2C%20I%20want%20to%20order%20herbal%20products" target="_blank" rel="noopener noreferrer" className="glass-panel text-emerald-700 hover:border-emerald-400 font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.03]">
                      <FaWhatsapp className="text-emerald-500 text-xl" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:col-span-5 lg:flex justify-center relative">
                  <div className="absolute w-[350px] h-[350px] border border-dashed border-emerald-300/40 rounded-full -z-10 animate-spin-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <Link to={`/product/${heroSlides[currentHeroIdx].productId}`}>
                    <img src={heroSlides[currentHeroIdx].image} alt={heroSlides[currentHeroIdx].title} className="w-[320px] h-[400px] object-cover rounded-3xl drop-shadow-[0_25px_60px_rgba(16,185,129,0.2)] animate-float cursor-pointer hover:scale-[1.02] transition-transform duration-300" />
                  </Link>
                  <div className="absolute bottom-6 -left-6 glass-panel p-5 rounded-2xl max-w-xs shadow-2xl border border-emerald-100">
                    <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                      <FiStar className="fill-amber-500" />
                      <span className="text-[11px] font-black">4.8 Average Rating</span>
                    </div>
                    <p className="text-xs text-emerald-800 font-black">Trusted by 1000+ happy customers</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentHeroIdx(idx)} className={`h-2 rounded-full transition-all duration-500 ${currentHeroIdx === idx ? 'bg-emerald-500 w-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-emerald-200 w-2.5'}`} />
          ))}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 border-b border-emerald-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '100%', label: 'Chemical Free' },
              { icon: '🌿', label: 'Farm Fresh' },
              { icon: '👵', label: 'Traditional Recipe' },
              { icon: '📦', label: 'Pan India Delivery' }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-300 transition">
                <span className="text-3xl mb-3">{item.icon}</span>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 border-b border-emerald-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <div>
              <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Our Products</span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2">Featured Collection</h2>
            </div>
            <Link to="/shop" className="text-emerald-600 hover:text-emerald-700 font-extrabold text-sm flex items-center gap-1 mt-4 sm:mt-0 transition group">
              <span>View All Products</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <motion.div key={p.id} whileHover={{ y: -8 }} className="glass-panel rounded-3xl overflow-hidden hover:border-emerald-300 flex flex-col justify-between h-[470px] group relative shimmer-effect">
                <div className="relative p-6 flex justify-center bg-emerald-50/50 border-b border-emerald-100/60 h-[220px] items-center overflow-hidden">
                  <div className="absolute w-24 h-24 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-colors" />
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md z-10 tracking-widest shadow-md">{p.tag}</span>
                  <img src={p.image} alt={p.name} className="max-h-[160px] object-contain group-hover:scale-105 transition-transform duration-500 z-10" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-emerald-500 text-[10px] font-bold tracking-wider mb-1 uppercase">
                      <span>{p.tamilName}</span>
                      <span className="flex items-center text-amber-500 gap-0.5">
                        <FiStar className="fill-amber-500" /><strong>{p.rating}</strong>
                      </span>
                    </div>
                    <h3 className="text-base font-black text-emerald-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{p.name}</h3>
                    <div className="flex gap-2.5 mt-3">
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">{p.weight}</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">{p.category}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between mb-4 border-t border-emerald-100 pt-4">
                      <span className="text-2xl font-black text-emerald-700">₹{p.price}</span>
                      {p.originalPrice && <span className="text-xs text-emerald-400 line-through">₹{p.originalPrice}</span>}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/product/${p.id}`} className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold text-xs py-3 rounded-xl border border-emerald-200 text-center transition">Details</Link>
                      <button onClick={() => addToCart(p)} className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs py-3 rounded-xl transition-all hover:shadow-md hover:shadow-emerald-500/20">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 border-b border-emerald-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Our Promise</span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2 mb-4">Why Tamila Natural?</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-4" />
            <p className="text-emerald-700/60 text-sm">We bring you the finest traditional Tamil herbal products, directly sourced from village artisans and organic farms.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '100% Natural', desc: 'No chemicals, preservatives, or artificial additives. Pure ingredients from nature.', icon: '🌿' },
              { title: 'Traditional Recipes', desc: 'Time-honored Tamil village recipes passed down through generations.', icon: '👵' },
              { title: 'Farm Fresh', desc: 'Directly sourced from organic farms and village co-operatives.', icon: '🌾' },
              { title: 'Pan India Delivery', desc: 'Free shipping across India. Fresh packing with secure delivery.', icon: '📦' }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover:border-emerald-300 transition duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-emerald-900 font-black text-lg mb-3">{item.title}</h3>
                <p className="text-emerald-600/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-b border-emerald-100 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Customer Love</span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2 mb-12">What People Say</h2>

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={activeReviewIdx} initial={{ opacity: 0, scale: 0.96, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -15 }} transition={{ duration: 0.5 }} className="space-y-6">
                <div className="flex justify-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className={`text-xl ${i < Math.floor(reviews[activeReviewIdx].rating) ? 'fill-amber-500' : 'text-emerald-200'}`} />)}
                </div>
                <p className="text-lg sm:text-2xl text-emerald-800 leading-relaxed font-semibold italic max-w-3xl mx-auto font-display">"{reviews[activeReviewIdx].comment}"</p>
                <div className="flex items-center justify-center gap-3.5 pt-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-lg border-2 border-emerald-300">
                    {reviews[activeReviewIdx].name[0]}
                  </div>
                  <div className="text-left">
                    <h5 className="text-emerald-900 font-black text-sm leading-none">{reviews[activeReviewIdx].name}</h5>
                    <span className="text-emerald-500 text-xs mt-1 block">{reviews[activeReviewIdx].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button key={idx} onClick={() => setActiveReviewIdx(idx)} className={`h-2 rounded-full transition-all duration-300 ${activeReviewIdx === idx ? 'bg-emerald-500 w-8 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-emerald-200 w-2'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 p-8 sm:p-14 rounded-[36px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-600/20">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.05] to-transparent -z-10" />
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <span className="text-emerald-200 font-extrabold uppercase tracking-widest text-xs flex items-center justify-center md:justify-start gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" /> Free delivery across India
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-display text-white leading-tight">Bulk Orders &amp; Wholesale Pricing Available</h3>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                Looking to buy herbal products in bulk? We offer special wholesale pricing for resellers, organic stores, and wellness centers.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="bg-white hover:bg-emerald-50 text-emerald-700 font-black px-8 py-4 rounded-xl text-center transition shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                Contact Us
              </Link>
              <a href="https://api.whatsapp.com/send?phone=+919876543210&text=Hi%2C%20I%20am%20interested%20in%20bulk%20ordering" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl text-center transition flex items-center justify-center gap-2 hover:scale-[1.02]">
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp for Bulk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

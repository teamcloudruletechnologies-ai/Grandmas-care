import { useState } from 'react';
import { FiCheck, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const wellnessServices = [
  { title: 'Apothecary Skin Consultation', desc: 'Personalized botanical skincare guides based on your doshas. We identify matching herbal baths, rose face packs, and organic turmeric routines.', icon: '🧴', duration: '15 min', price: 'Complimentary' },
  { title: 'Ayurvedic Scalp Therapy Guidance', desc: 'Expert consultation for organic hair care routines. Match matching 21-herbal oil therapies to restore natural density and thickness.', icon: '💆', duration: '20 min', price: 'Complimentary' },
  { title: 'Traditional Grain Nutrition Plan', desc: 'Wholesome sprouted millet diet guides for sustainable energy, metabolism regulation, and body conditioning.', icon: '🥗', duration: '30 min', price: '₹199' },
  { title: 'Reseller & Boutique Collaboration', desc: 'Specialized pricing, custom packaging guides, and organic batch sourcing for premium boutiques and spa centers.', icon: '📦', duration: '30 min', price: 'Complimentary' },
  { title: 'Traditional Remedy Guidance', desc: 'Learn time-tested family home remedies using raw ground herbal powders for everyday wellness and immunity.', icon: '🌿', duration: '20 min', price: 'Complimentary' },
  { title: 'Fresh Artisanal Blend Mashing', desc: 'Order customized fresh herbal blends milled specifically to your health goals. Dried and ground freshly in micro-batches.', icon: '⚗️', duration: '48 hrs', price: 'From ₹299' }
];

const healthTips = [
  { title: 'Morning Ritual', tip: 'Awaken your digestive system with warm water and a cup of warm ABC Malt or sprouted multi-millet mix.', icon: '🌅' },
  { title: 'Dermal Care', tip: 'Exfoliate gently using Nalangu Maavu twice a week to remove dead skin cells and reveal natural brightness.', icon: '✨' },
  { title: 'Hair Therapy', tip: 'Gently massage Kerala Hair Oil into follicles overnight before a cold herbal wash to lock in moisture.', icon: '💆' },
  { title: 'Metabolism Balance', tip: 'Include flax-infused Slim & Fit Mix in your daily diet alongside moderate walks for organic body conditioning.', icon: '⚖' },
  { title: 'Bone Strength', tip: 'Kambu (Pearl Millet) porridge is naturally rich in calcium and phosphorus, supporting skeletal density.', icon: '🦴' },
  { title: 'Immunity Shield', tip: 'Apple, Beetroot, and Carrot extracts in ABC Malt deliver raw essential vitamins to support natural defenses.', icon: '🛡️' }
];

export default function Services() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Skin Consultation', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', service: 'Skin Consultation', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="relative pt-32 pb-24 bg-[#f9fbf9] min-h-screen overflow-hidden">
      {/* Decorative blobs */}
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] bottom-10 -right-40 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Wellness Hub</span>
          <h1 className="text-3xl sm:text-5xl font-light font-display text-emerald-955 mt-1">Apothecary &amp; Wellness Guidance</h1>
          <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
          <p className="text-emerald-955/50 text-xs sm:text-sm mt-4 font-medium leading-relaxed">Book complimentary home consultations, personalized recipes, and traditional wellness advice.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {wellnessServices.map((s, i) => (
            <motion.div 
              whileHover={{ y: -5 }} 
              key={i} 
              className="premium-card rounded-[28px] overflow-hidden shadow-[0_12px_30px_rgba(11,34,22,0.02)] flex flex-col justify-between hover:shadow-[0_24px_45px_rgba(16,185,129,0.08)] transition-all duration-350 bg-white"
            >
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-2xl shadow-sm">{s.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium text-emerald-955 leading-snug font-display">{s.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-955/50 leading-relaxed font-semibold">{s.desc}</p>
              </div>
              <div className="p-6 sm:p-8 pt-0 border-t border-emerald-500/5 mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-emerald-700 font-extrabold"><FiClock className="text-emerald-500 text-base" />{s.duration}</span>
                <span className="text-emerald-650 font-extrabold bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-500/5 shadow-sm">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Health Tips */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Daily Wellness</span>
            <h2 className="text-3xl sm:text-5xl font-light font-display text-emerald-955 mt-1">Apothecary Tips &amp; Home Remedies</h2>
            <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthTips.map((t, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl hover:border-emerald-350 transition-all duration-300 group hover:bg-white">
                <span className="text-3xl mb-3 block group-hover:scale-102 transition-transform duration-300">{t.icon}</span>
                <h3 className="text-emerald-950 font-extrabold text-base mb-2 font-display">{t.title}</h3>
                <p className="text-xs text-emerald-955/50 leading-relaxed font-semibold">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-emerald-500/5 shadow-[0_15px_40px_rgba(11,34,22,0.02)] bg-white">
            <div className="border-b border-emerald-500/5 pb-5 mb-6">
              <h2 className="text-xl font-normal font-display text-emerald-955 leading-none">Book a Consultation</h2>
              <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mt-2">Submit details to connect with our coordinator.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        placeholder="Your name" 
                        className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-emerald-950 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-emerald-950 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Wellness Service</label>
                    <select 
                      value={formData.service} 
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                      className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-bold text-emerald-950 focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                    >
                      {wellnessServices.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Message (Optional)</label>
                    <textarea 
                      rows="3" 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      placeholder="Share details of skin/hair concerns or wellness goals..." 
                      className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 text-xs font-semibold text-emerald-950 placeholder:text-emerald-950/30 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300 resize-none" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl transition duration-300 shadow-sm hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FiSend /> <span>Request Consultation</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16 space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mx-auto animate-bounce">✓</div>
                  <h3 className="text-lg font-medium text-emerald-955 font-display uppercase tracking-wider">Requested Successfully</h3>
                  <p className="text-xs text-emerald-955/50 max-w-xs mx-auto font-semibold leading-relaxed">Our coordinator will connect with you via phone or WhatsApp within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp Direct */}
          <div className="space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-emerald-500/5 shadow-[0_15px_40px_rgba(11,34,22,0.02)]">
              <h2 className="text-xl font-normal font-display text-emerald-955 mb-3 leading-none">Instant WhatsApp Connect</h2>
              <p className="text-xs sm:text-sm text-emerald-955/50 mb-6 leading-relaxed font-semibold">Have immediate questions or need support choosing products? Click below to chat directly with our coordinator.</p>
              <a 
                href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%20Grandmas%20Care%2C%20I%20need%20herbal%20product%20consultation%20and%20support%21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4.5 rounded-xl text-center transition shadow-sm cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-lg" />
                  <span>Start Live Chat</span>
                </div>
              </a>
            </div>

            <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-emerald-500/5 shadow-[0_15px_40px_rgba(11,34,22,0.02)] bg-white/50">
              <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-[0.18em] mb-5">Our promise</h3>
              <ul className="space-y-4">
                {[
                  'Personalized advice matching traditional Siddha rules',
                  'Fresh custom blend options matched to health goals',
                  'Complimentary shipping details for bulk requirements',
                  'Continuous support updates tracked via WhatsApp'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-xs text-emerald-900/60 font-semibold leading-relaxed">
                    <FiCheck className="text-emerald-500 mt-1 flex-shrink-0 text-base" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

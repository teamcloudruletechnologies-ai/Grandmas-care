import { useState } from 'react';
import { FiCheck, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const wellnessServices = [
  { title: 'Skin Consultation', desc: 'Get personalized herbal skincare advice based on your skin type. We recommend the right bath powders, face packs, and turmeric blends.', icon: '🧴', duration: '15 min', price: 'Free' },
  { title: 'Hair Care Guidance', desc: 'Expert Ayurvedic hair care consultation. Find the right oil, hair pack, and routine for healthy, strong hair.', icon: '💆', duration: '20 min', price: 'Free' },
  { title: 'Diet & Nutrition Plan', desc: 'Customized millet-based diet plans for weight management, diabetes control, and overall wellness.', icon: '🥗', duration: '30 min', price: '₹199' },
  { title: 'Bulk Order Consultation', desc: 'Special pricing and product guidance for resellers, organic stores, wellness centers, and corporate gifting.', icon: '📦', duration: '30 min', price: 'Free' },
  { title: 'Traditional Remedy Guide', desc: 'Learn time-tested Tamil home remedies using our herbal powders for common ailments like cold, cough, and skin issues.', icon: '🌿', duration: '20 min', price: 'Free' },
  { title: 'Custom Herbal Blends', desc: 'Get custom-mixed herbal powders tailored to your specific health needs. Made fresh to order.', icon: '⚗️', duration: '48 hrs', price: 'Starting ₹299' }
];

const healthTips = [
  { title: 'Morning Routine', tip: 'Start your day with a glass of warm water mixed with ABC Malt or Millet Health Mix for sustained energy.', icon: '🌅' },
  { title: 'Skin Care', tip: 'Use Nalangu Maavu as a body scrub 2-3 times a week for naturally glowing, clear skin without chemicals.', icon: '✨' },
  { title: 'Hair Care', tip: 'Massage Kerala Ayurvedic Hair Oil into scalp twice a week. Leave overnight for best results.', icon: '💆' },
  { title: 'Weight Management', tip: 'Replace one meal with Slim & Fit Weightloss Mix combined with regular exercise for effective results.', icon: '⚖️' },
  { title: 'Joint Health', tip: 'Kambu (Pearl Millet) porridge is rich in calcium and helps strengthen bones and joints naturally.', icon: '🦴' },
  { title: 'Immunity Boost', tip: 'ABC Malt is packed with vitamins from Apple, Beetroot, and Carrot. Perfect daily immunity drink for all ages.', icon: '🛡️' }
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
    <div className="relative pt-28 pb-20 bg-[#f0fdf4] min-h-screen overflow-hidden">
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] bottom-10 -right-40 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Wellness Hub</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2 mb-4">Health &amp; Wellness Guide</h1>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-emerald-700/60 text-sm">Free consultations, personalized wellness plans, and expert guidance on traditional Tamil herbal remedies.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {wellnessServices.map((s, i) => (
            <motion.div whileHover={{ y: -8 }} key={i} className="glass-panel rounded-3xl overflow-hidden shadow-lg flex flex-col border border-emerald-100 hover:border-emerald-300 transition-all">
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-2xl">{s.icon}</div>
                  <h3 className="text-lg font-black text-emerald-900 leading-tight">{s.title}</h3>
                </div>
                <p className="text-xs text-emerald-600/70 leading-relaxed">{s.desc}</p>
              </div>
              <div className="p-6 pt-0 border-t border-emerald-100/50 mt-4 flex items-center justify-between text-xs font-black">
                <span className="flex items-center gap-1.5 text-emerald-700"><FiClock className="text-emerald-500" />{s.duration}</span>
                <span className="text-emerald-600 font-bold">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Health Tips */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Daily Wellness</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-emerald-900 mt-2">Health Tips &amp; Home Remedies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthTips.map((t, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl hover:border-emerald-300 transition group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{t.icon}</span>
                <h3 className="text-emerald-900 font-black text-base mb-2">{t.title}</h3>
                <p className="text-xs text-emerald-600/70 leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 sm:p-10 rounded-[32px] space-y-6 shadow-xl border border-emerald-100">
            <div className="border-b border-emerald-100 pb-5">
              <h2 className="text-xl font-black font-display text-emerald-900">Book a Consultation</h2>
              <p className="text-xs text-emerald-500 mt-1">Fill in details and our wellness expert will contact you.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Your Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 transition" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Phone</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 transition" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Service</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 cursor-pointer font-bold">
                      {wellnessServices.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Message (Optional)</label>
                    <textarea rows="3" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your health concern or query..." className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 transition resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl transition shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
                    <FiSend /> Book Consultation
                  </button>
                </motion.form>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-12 space-y-6">
                  <FiCheck className="text-6xl text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-xl font-black text-emerald-900 font-display">Consultation Booked!</h3>
                  <p className="text-xs text-emerald-600/70 max-w-sm mx-auto">Our wellness expert will contact you within 24 hours. Thank you!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right side - WhatsApp Quick Contact */}
          <div className="space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-[32px] shadow-xl border border-emerald-100">
              <h2 className="text-xl font-black font-display text-emerald-900 mb-4">Quick WhatsApp Connect</h2>
              <p className="text-xs text-emerald-600/70 mb-6 leading-relaxed">Have an urgent health query? Chat with our wellness expert directly on WhatsApp for instant advice.</p>
              <a href="https://api.whatsapp.com/send?phone=+919876543210&text=Hi%2C%20I%20need%20wellness%20guidance%20from%20Tamila%20Natural" target="_blank" rel="noopener noreferrer" className="block bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-xl text-center transition shadow-lg shadow-emerald-500/20">
                <div className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  <span>Chat on WhatsApp</span>
                </div>
              </a>
            </div>

            <div className="glass-panel p-8 rounded-[32px] shadow-xl border border-emerald-100">
              <h3 className="text-lg font-black text-emerald-900 mb-4">Our Promise</h3>
              <ul className="space-y-4">
                {['Personalized herbal product recommendations', 'Traditional Tamil home remedies', 'No side effects — 100% natural guidance', 'Follow-up support via WhatsApp'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-emerald-700">
                    <FiCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
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

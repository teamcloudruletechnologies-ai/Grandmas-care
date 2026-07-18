import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Product Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Product Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#f9fbf9] min-h-screen font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Reach Out</span>
          <h1 className="text-3xl sm:text-5xl font-light font-display text-emerald-955 mt-1">Contact Grandmas Care</h1>
          <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
          <p className="text-emerald-955/50 text-xs sm:text-sm mt-4 font-medium leading-relaxed">Have questions about our remedies, bulk shipping inquiries, or wellness bookings? Connect with our coordinators.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* LEFT COLUMN - INFO */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: <FiPhone />, label: 'Call Us', value: '+91 80150 80361', href: 'tel:+918015080361' },
                { icon: <FiMail />, label: 'Email Us', value: 'info@grandmascare.in', href: 'mailto:info@grandmascare.in' },
                { icon: <FiClock />, label: 'Apothecary Hours', value: '8:00 AM - 09:00 PM\n(Monday - Sunday)', href: null },
                { icon: <FaWhatsapp />, label: 'WhatsApp Live', value: 'Chat with our coordinator', href: 'https://api.whatsapp.com/send?phone=+918015080361&text=Hi%20Grandmas%20Care%21' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl flex gap-4 border border-emerald-500/5 hover:bg-white duration-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-600 text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.18em]">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block text-xs sm:text-sm font-bold text-emerald-950 mt-1.5 hover:text-emerald-600 transition whitespace-pre-line leading-snug">{item.value}</a>
                    ) : (
                      <p className="text-xs sm:text-sm text-emerald-950 mt-1.5 font-bold whitespace-pre-line leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 rounded-2xl flex gap-4 border border-emerald-500/5 hover:bg-white duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-600 text-lg flex-shrink-0"><FiMapPin /></div>
              <div>
                <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.18em]">Store Address</span>
                <p className="text-xs sm:text-sm text-emerald-955 mt-1.5 leading-relaxed font-bold">123, Anna Salai, Mount Road, Chennai, Tamil Nadu - 600002</p>
              </div>
            </div>

            <div className="premium-card p-1.5 rounded-3xl overflow-hidden aspect-video relative border border-emerald-500/5 shadow-[0_15px_30px_rgba(11,34,22,0.02)] bg-white">
              <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2844883446973!2d80.26188447590858!3d13.081121087244589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266170d10b7cd%3A0xa1969a531627878d!2sMount%20Road%20Post%20Office!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="w-full h-full border-0 rounded-2xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-[32px] border border-emerald-500/5 shadow-[0_15px_40px_rgba(11,34,22,0.02)] bg-white">
            <div className="border-b border-emerald-500/5 pb-5 mb-6">
              <h2 className="text-xl font-normal font-display text-emerald-955 leading-none">Send a Message</h2>
              <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mt-2">We reply to all inquiries within 12 hours.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        placeholder="you@example.com" 
                        className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-emerald-950 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-semibold text-emerald-950 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Subject</label>
                    <select 
                      value={formData.subject} 
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })} 
                      className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs font-bold text-emerald-950 focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                    >
                      <option>Product Inquiry</option>
                      <option>Bulk / Wholesale Order</option>
                      <option>Wellness Consultation</option>
                      <option>Shipping & Delivery</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Message</label>
                    <textarea 
                      rows="5" 
                      required 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      placeholder="Write your message details..." 
                      className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 text-xs font-semibold text-emerald-950 placeholder:text-emerald-950/30 focus:outline-none focus:border-emerald-500 focus:bg-white transition duration-300 resize-none" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-sm hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                  >
                    <FiSend /><span>Send Message</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16 space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mx-auto animate-bounce">✓</div>
                  <div>
                    <h3 className="text-xl font-medium text-emerald-955 font-display uppercase tracking-wider leading-none">Message Sent!</h3>
                    <p className="text-xs text-emerald-955/50 mt-3 max-w-xs mx-auto font-semibold leading-relaxed">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}

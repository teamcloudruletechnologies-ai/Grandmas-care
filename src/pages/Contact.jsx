import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
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
    <div className="pt-28 pb-20 bg-[#f0fdf4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs">Reach Out</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-2 mb-4">Contact Tamila Natural</h1>
          <p className="text-emerald-700/60 text-sm">Have questions about our herbal products, bulk orders, or wellness consultations? We are here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <FiPhone />, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <FiMail />, label: 'Email Us', value: 'info@tamilanatural.com', href: 'mailto:info@tamilanatural.com' },
                { icon: <FiClock />, label: 'Store Hours', value: '8:00 AM - 09:00 PM\n(All 7 days)', href: null },
                { icon: <FaWhatsapp />, label: 'WhatsApp', value: 'Chat Live Now', href: 'https://api.whatsapp.com/send?phone=+919876543210&text=Hi%20Tamila%20Natural!' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block text-sm font-bold text-emerald-900 mt-1 hover:text-emerald-600 transition whitespace-pre-line">{item.value}</a>
                    ) : (
                      <p className="text-xs text-emerald-900 mt-1 font-semibold whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 rounded-2xl flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 text-lg flex-shrink-0"><FiMapPin /></div>
              <div>
                <span className="text-[10px] text-emerald-500 font-bold uppercase">Address</span>
                <p className="text-xs text-emerald-900 mt-1 leading-relaxed font-semibold">123, Anna Salai, Mount Road, Chennai, Tamil Nadu - 600002</p>
              </div>
            </div>

            <div className="glass-panel p-2 rounded-3xl overflow-hidden aspect-video relative border border-emerald-100 shadow-lg">
              <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2844883446973!2d80.26188447590858!3d13.081121087244589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266170d10b7cd%3A0xa1969a531627878d!2sMount%20Road%20Post%20Office!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="w-full h-full border-0 rounded-2xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="border-b border-emerald-100 pb-4 mb-6">
              <h2 className="text-xl font-bold font-display text-emerald-900">Send Message</h2>
              <p className="text-xs text-emerald-500 mt-1">We respond within 12 hours.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Your Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Phone (Optional)</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 cursor-pointer">
                      <option>Product Inquiry</option>
                      <option>Bulk / Wholesale Order</option>
                      <option>Wellness Consultation</option>
                      <option>Shipping & Delivery</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Message</label>
                    <textarea rows="5" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Write your message..." className="w-full bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 shadow-lg shadow-emerald-500/20">
                    <FiSend /><span>Send Message</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-12 space-y-6">
                  <FiCheckCircle className="text-6xl text-emerald-500 mx-auto" />
                  <div>
                    <h3 className="text-lg font-bold text-emerald-900 font-display">Message Sent!</h3>
                    <p className="text-xs text-emerald-600/70 mt-2 max-w-xs mx-auto">Thank you for contacting Tamila Natural. We will get back to you shortly.</p>
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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-emerald-900 border-t border-emerald-800 pt-16 pb-8 text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <span className="text-xl font-black font-display tracking-tight text-white flex items-center mb-4">
              TAMILLA<span className="text-emerald-300 ml-1">NATURAL</span>
            </span>
            <p className="text-sm text-emerald-300/70 mb-6 leading-relaxed">
              100% natural, traditional Tamil herbal powders, health mixes, organic flours, and wellness products. No chemicals, no preservatives.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition border border-emerald-700 hover:border-emerald-400">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition border border-emerald-700 hover:border-emerald-400">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition border border-emerald-700 hover:border-emerald-400">
                <FaTwitter />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+919876543210" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition border border-emerald-700 hover:border-emerald-400">
                <FaWhatsapp className="text-emerald-300 text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-display text-sm tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-emerald-300 transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-300 transition">Shop Products</Link></li>
              <li><Link to="/services" className="hover:text-emerald-300 transition">Wellness Guide</Link></li>
              <li><Link to="/about" className="hover:text-emerald-300 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-300 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display text-sm tracking-widest uppercase mb-4">Store Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FiMapPin className="text-emerald-300 text-lg flex-shrink-0" />
                <span className="text-emerald-300/70 leading-snug">123, Anna Salai, Mount Road, Chennai, Tamil Nadu - 600002</span>
              </li>
              <li className="flex gap-3 items-center">
                <FiPhone className="text-emerald-300 text-lg" />
                <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <FiMail className="text-emerald-300 text-lg" />
                <a href="mailto:info@tamilanatural.com" className="hover:text-white transition">info@tamilanatural.com</a>
              </li>
              <li className="border-t border-emerald-800 pt-3 text-xs text-emerald-400">
                <strong>Hours:</strong> Mon - Sun: 8:00 AM - 09:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display text-sm tracking-widest uppercase mb-4">Subscribe</h4>
            <p className="text-xs text-emerald-300/60 mb-4 leading-relaxed">
              Stay updated with new herbal arrivals, seasonal health tips, and exclusive discount offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full bg-emerald-800/50 border border-emerald-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-emerald-400 transition" />
                <button type="submit" className="absolute right-2 top-1.5 p-2 bg-emerald-400 text-emerald-900 hover:bg-emerald-300 rounded-lg transition" title="Subscribe">
                  <FiSend className="text-sm" />
                </button>
              </div>
              {subscribed && <span className="text-xs text-emerald-300 font-semibold animate-pulse mt-1">Thank you for subscribing!</span>}
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400">
          <p>&copy; {new Date().getFullYear()} Tamila Natural. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

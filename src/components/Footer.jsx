import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import logoImg from '../assets/logo.jpg';

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

  const quickLinks1 = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '#' }
  ];

  const quickLinks2 = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Shipping Policy', path: '#' },
    { name: 'Returns', path: '#' },
    { name: 'Customer Support', path: '#' }
  ];

  return (
    <footer className="bg-[#0A4D2E] text-white font-body relative overflow-hidden border-t border-white/5 pt-20 pb-12">
      
      {/* Subtle organic light overlay */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px] -bottom-60 -left-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Left Column: Brand, Tagline & Socials */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3.5 group">
              <img 
                src={logoImg} 
                alt="Grandmas Care Logo" 
                className="w-11 h-11 object-cover rounded-full border border-white/20 shadow-sm" 
              />
              <span className="font-logo font-semibold text-[24px] sm:text-[30px] md:text-[34px] tracking-[1.2px] leading-[1.1] text-white flex items-center whitespace-nowrap">
                GRANDMAS<span className="text-[#D4AF37] ml-1.5">CARE</span>
              </span>
            </div>
            <p className="text-xs text-white/70 italic font-medium leading-relaxed">
              "Crafting Wellness Through Tradition."
            </p>
            
            {/* Social Icons with Luxury Styling */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <FaInstagram />, url: 'https://www.instagram.com/grandmascare?igsh=bWduMjVqZnl1dWt4' },
                { icon: <FaFacebookF />, url: 'https://facebook.com' },
                { icon: <FaWhatsapp />, url: 'https://api.whatsapp.com/send?phone=+918015080361' },
                { icon: <FiMail />, url: 'mailto:info@grandmascare.in' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#0A4D2E] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-[#D4AF37] font-semibold text-[10px] uppercase tracking-[0.24em] mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3.5 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-bold text-white/75">
                {quickLinks1.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="hover:text-[#D4AF37] transition duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3.5 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-bold text-white/75">
                {quickLinks2.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="hover:text-[#D4AF37] transition duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="lg:col-span-4 text-left space-y-5">
            <div>
              <h4 className="text-white font-medium font-display text-sm tracking-wider mb-2">
                Join Our Wellness Community
              </h4>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Subscribe to receive traditional health guides, remedy tips, and organic updates.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-4 pr-12 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition duration-300 font-semibold" 
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 w-9.5 h-9.5 bg-[#D4AF37] hover:bg-white text-[#0A4D2E] hover:text-[#0A4D2E] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95" 
                  title="Subscribe"
                >
                  <FiSend className="text-xs" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-[#D4AF37] font-bold animate-pulse">
                  🌿 Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar with Thin Gold Divider */}
        <div className="border-t border-[#D4AF37]/35 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 font-medium">
          <p>© 2026 Grandmas Care</p>
          <p className="mt-2 sm:mt-0 font-medium italic text-white/60">
            Made with Nature & Tradition
          </p>
        </div>

      </div>
    </footer>
  );
}

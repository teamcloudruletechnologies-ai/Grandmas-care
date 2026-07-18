import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartItems, setIsCartOpen } = useInquiry();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Wellness', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0A4D2E]/95 to-[#0F7A43]/95 backdrop-blur-[12px] h-[72px] md:h-[90px] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] flex items-center transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 w-full">
        <div className="flex items-center justify-between">

          {/* Luxury Branding (Cormorant Garamond, Gold Accent, Mobile-Optimized) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3.5 group">
            <img 
              src={logoImg} 
              alt="Grandmas Care Logo" 
              className="w-8 h-8 sm:w-11 sm:h-11 object-cover rounded-full border border-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold font-display tracking-[0.04em] sm:tracking-[0.08em] text-white flex items-center leading-none whitespace-nowrap">
              GRANDMAS<span className="text-[#D4AF37] font-extrabold ml-1 sm:ml-1.5">CARE</span>
            </span>
          </Link>

          {/* Desktop Nav Links (Inter/DM Sans Sans-Serif Font, gap-12 (48px)) */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-medium font-body uppercase tracking-[0.15em] transition-all duration-300 relative py-1.5 hover:text-[#D4AF37] ${isActive(link.path) ? 'text-white' : 'text-white/80'}`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)]" 
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }} 
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions (Glassmorphism WhatsApp & Gold Cart Badge) */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%20Grandmas%20Care%2C%20I%20have%2520an%2520inquiry%21"
              target="_blank" rel="noopener noreferrer"
              className="text-[10px] font-semibold uppercase tracking-[0.16em] bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-all duration-300 rounded-full px-6 py-3 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-950/10 active:scale-95 cursor-pointer"
            >
              <FaWhatsapp className="text-emerald-400 group-hover:text-white text-sm" />
              <span>WhatsApp</span>
            </a>
            
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <FiShoppingCart className="text-base" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-emerald-950 font-extrabold text-[8px] w-5 h-5 rounded-full flex items-center justify-center border border-[#0A4D2E] shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions (Cart & Hamburger Menu) */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative p-2.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full text-white transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              <FiShoppingCart className="text-sm" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-emerald-950 font-extrabold text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#0A4D2E] shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:bg-white/10 rounded-full transition flex items-center justify-center cursor-pointer"
            >
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="absolute top-[72px] md:top-[90px] left-0 w-full md:hidden bg-gradient-to-b from-[#0A4D2E] to-[#0F7A43] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-4 pb-8 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-xs font-bold font-body uppercase tracking-[0.15em] py-3.5 px-4 rounded-xl transition ${isActive(link.path) ? 'bg-white/10 text-[#D4AF37] font-extrabold shadow-inner' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 px-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%20Grandmas%20Care%2C%20I%2520have%2520an%2520inquiry%21" 
                  target="_blank" rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md shadow-emerald-950/10"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

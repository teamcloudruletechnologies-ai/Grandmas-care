import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">

          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black font-display tracking-tight text-emerald-800 group-hover:scale-105 transition-transform flex items-center">
              TAMILLA<span className="text-emerald-500 ml-1">NATURAL</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition relative py-1 ${isActive(link.path) ? 'text-emerald-600' : 'text-emerald-800/60 hover:text-emerald-800'}`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div layoutId="activeIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=+919876543210&text=Hi%20Tamila%20Natural%2C%20I%20have%20an%20inquiry%21"
              target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-white flex items-center gap-1.5 transition border border-emerald-200 rounded-full px-4 py-2 hover:bg-emerald-500 hover:border-emerald-500"
            >
              <FaWhatsapp className="text-emerald-500 group-hover:text-white text-sm" />
              <span>WhatsApp</span>
            </a>
            <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-600 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition">
              <FiShoppingCart className="text-lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-600 hover:text-white hover:bg-emerald-500 transition">
              <FiShoppingCart className="text-lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 text-emerald-600 hover:text-emerald-800 rounded-lg hover:bg-emerald-50 transition">
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-emerald-100 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={`text-base font-semibold py-3 px-4 rounded-xl transition ${isActive(link.path) ? 'bg-emerald-50 text-emerald-600 font-bold' : 'text-emerald-700/60 hover:text-emerald-800 hover:bg-emerald-50'}`}>
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-emerald-100 flex flex-col gap-3 px-4">
                <a href="https://api.whatsapp.com/send?phone=+919876543210&text=Hi%20Tamila%20Natural%2C%20I%20have%20an%20inquiry%21" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition">
                  <FaWhatsapp className="text-xl" />
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

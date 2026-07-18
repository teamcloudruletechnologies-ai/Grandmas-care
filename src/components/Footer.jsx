import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
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

  return (
    <footer className="bg-[#006536] border-t border-white/10 pt-24 pb-12 text-white font-body relative overflow-hidden">
      
      {/* Subtle organic light overlay */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px] -bottom-60 -left-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Left Column: Brand */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Grandmas Care Logo" className="w-11 h-11 object-cover rounded-full border border-white/20 shadow-sm" />
              <div className="flex flex-col items-start">
                <span className="text-xl font-light font-display tracking-[0.12em] text-white flex items-center leading-none">
                  GRANDMAS<span className="text-emerald-300 font-medium ml-1.5">CARE</span>
                </span>
                <span className="text-[7px] font-bold tracking-[0.25em] uppercase text-emerald-300 block mt-2.5 leading-none">
                  Botanical Apothecary
                </span>
              </div>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed font-semibold">
              100% natural, traditional Tamil herbal wellness remedies. Blended carefully under sun exposure and prepared in micro-batches with grandmother's love.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, url: 'https://facebook.com' },
                { icon: <FaInstagram />, url: 'https://instagram.com' },
                { icon: <FaTwitter />, url: 'https://twitter.com' },
                { icon: <FaWhatsapp />, url: 'https://api.whatsapp.com/send?phone=+918015080361' }
              ].map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#006536] flex items-center justify-center transition border border-white/10 hover:border-white hover:-translate-y-0.5 duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column 1: Links */}
          <div className="text-left">
            <h4 className="text-white font-medium font-display text-xs uppercase tracking-[0.24em] mb-7 flex items-center gap-2.5">
              <span className="w-4.5 h-[1.5px] bg-amber-400 inline-block" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-4 text-[10px] tracking-[0.16em] uppercase font-bold text-white/85">
              <li><Link to="/" className="hover:text-amber-300 transition duration-300">Home</Link></li>
              <li><Link to="/shop" className="hover:text-amber-300 transition duration-300">Catalog</Link></li>
              <li><Link to="/services" className="hover:text-amber-300 transition duration-300">Wellness</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition duration-300">Heritage</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Middle Column 2: Address */}
          <div className="text-left">
            <h4 className="text-white font-medium font-display text-xs uppercase tracking-[0.24em] mb-7 flex items-center gap-2.5">
              <span className="w-4.5 h-[1.5px] bg-emerald-400 inline-block" />
              <span>Store Details</span>
            </h4>
            <ul className="space-y-4.5 text-[13px] font-semibold text-white/90">
              <li className="flex gap-3.5 items-start">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 flex-shrink-0 mt-0.5 shadow-sm">
                  <FiMapPin className="text-sm" />
                </div>
                <span className="leading-relaxed font-semibold">123, Anna Salai, Mount Road, Chennai, Tamil Nadu - 600002</span>
              </li>
              <li className="flex gap-3.5 items-center">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 flex-shrink-0 shadow-sm">
                  <FiPhone className="text-sm" />
                </div>
                <a href="tel:+918015080361" className="hover:text-amber-300 transition duration-300 font-semibold">+91 80150 80361</a>
              </li>
              <li className="flex gap-3.5 items-center">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 flex-shrink-0 shadow-sm">
                  <FiMail className="text-sm" />
                </div>
                <a href="mailto:info@grandmascare.in" className="hover:text-amber-300 transition duration-300 font-semibold font-display tracking-wide">info@grandmascare.in</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Newsletter */}
          <div className="text-left">
            <h4 className="text-white font-medium font-display text-xs uppercase tracking-[0.24em] mb-7 flex items-center gap-2.5">
              <span className="w-4.5 h-[1.5px] bg-amber-400 inline-block" />
              <span>Newsletter</span>
            </h4>
            <p className="text-[13px] text-white/80 mb-5 leading-relaxed font-semibold">
              Subscribe to receive traditional health guides, remedy tips, and organic stock updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-4 pr-12 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition duration-300 shadow-sm font-semibold" 
                />
                <button type="submit" className="absolute right-1.5 top-1.5 p-2 bg-emerald-600 text-white hover:bg-emerald-500 rounded-lg transition duration-300 cursor-pointer" title="Subscribe">
                  <FiSend className="text-xs" />
                </button>
              </div>
              {subscribed && <span className="text-[11px] text-emerald-300 font-bold animate-pulse mt-1 font-semibold">🌿 Subscribed successfully!</span>}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 font-semibold">
          <p>&copy; {new Date().getFullYear()} Grandmas Care. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 font-bold tracking-[0.16em] uppercase text-[9px] text-white/70">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

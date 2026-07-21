import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="py-24 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#006536] p-8 sm:p-16 rounded-[36px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.02] to-transparent -z-10" />
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <span className="text-emerald-300 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" /> Wholesale &amp; Bulk Orders
            </span>
            <h3 className="text-2xl sm:text-4xl font-light font-display text-white leading-tight">Artisanal Partnerships</h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-semibold">
              Interested in stocking Grandmas Care organic remedies at your boutique or wellness center? We offer tailored shipping pricing models.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
            <Link to="/contact" className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-xl text-center transition shadow-md hover:-translate-y-0.5">
              Contact Us
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=+918015080361&text=Hi%2C%20I%20am%20interested%20in%20bulk%20ordering%20Grandmas%20Care%20products%21"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-xl text-center transition flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp Bulk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

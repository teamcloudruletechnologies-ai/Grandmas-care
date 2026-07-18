import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { herbalProducts } from '../data/herbalProducts';
import { useInquiry } from '../context/InquiryContext';
import { FiArrowLeft, FiStar, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useInquiry();

  const product = useMemo(() => herbalProducts.find(p => p.id === productId), [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-[#f9fbf9] flex flex-col items-center justify-center font-body">
        <h2 className="text-2xl font-light text-emerald-950 mb-2 font-display">Remedy Not Found</h2>
        <p className="text-emerald-955/50 text-xs sm:text-sm mb-6">The remedy you are looking for might be out of stock.</p>
        <Link to="/shop" className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] px-7 py-4.5 rounded-xl shadow-sm transition">Return to Catalog</Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const msg = `Hi Grandmas Care! I want to order:\n\n*${product.name}* (${product.tamilName})\nWeight: ${product.weight}\nPrice: ₹${product.price}\n\nPlease confirm availability. Thanks!`;
    window.open(`https://api.whatsapp.com/send?phone=+918015080361&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-[#f9fbf9] min-h-screen relative overflow-hidden font-body">
      {/* Background decorations */}
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] bottom-10 -right-40 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-700 hover:text-emerald-950 mb-8 uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer"
        >
          <FiArrowLeft /><span>Back to Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Image Showcase */}
          <div className="premium-card p-8 rounded-[32px] flex items-center justify-center bg-white border border-emerald-500/5 shadow-[0_12px_40px_rgba(11,34,22,0.02)] relative overflow-hidden min-h-[380px] lg:min-h-[480px]">
            <div className="absolute w-[260px] h-[260px] bg-emerald-500/5 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <motion.img 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4 }} 
              src={product.image} 
              alt={product.name} 
              className="max-h-[350px] lg:max-h-[420px] object-contain rounded-2xl z-10 transition-transform duration-550 hover:scale-[1.01]" 
            />
          </div>

          {/* Right Column: Information details */}
          <div className="space-y-7">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="bg-emerald-500/5 text-emerald-800 border border-emerald-500/10 text-[8px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-lg">{product.category}</span>
                {product.tag && <span className="bg-amber-500 text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-lg shadow-sm">{product.tag}</span>}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-light font-display text-emerald-955 leading-[1.1]">{product.name}</h1>
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-[0.25em] mt-2">{product.tamilName}</p>
              
              <div className="flex items-center gap-2 mt-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-emerald-250'}`} />)}
                </div>
                <span className="text-xs text-emerald-955/50 font-semibold"><strong>{product.rating}</strong> ({product.reviewsCount} orders)</span>
              </div>
            </div>

            {/* Pricing details */}
            <div className="border-y border-emerald-500/5 py-5 flex items-baseline gap-4">
              <span className="text-3xl font-normal text-emerald-950 font-display">₹{product.price}</span>
              {product.originalPrice && <span className="text-lg text-emerald-950/30 line-through font-bold">₹{product.originalPrice}</span>}
              <span className="text-emerald-700 text-[9px] font-bold bg-emerald-50 border border-emerald-500/10 px-3.5 py-1.5 rounded-lg uppercase tracking-[0.18em] ml-3">In Stock</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-emerald-955/65 leading-relaxed font-semibold">{product.description}</p>

            {/* Benefits */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em]">Key Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-800 bg-white border border-emerald-500/10 px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">
                    <FiCheck className="text-emerald-500 text-sm" />{b}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-emerald-955 uppercase tracking-[0.2em]">Ingredients</h4>
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-[0.15em] leading-relaxed">{product.ingredients.join(' • ')}</p>
            </div>

            {/* Weight */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em]">Net Weight</h4>
              <span className="inline-block text-[11px] text-emerald-955 font-bold uppercase tracking-wider bg-white border border-emerald-500/10 px-4 py-2.5 rounded-xl shadow-sm">{product.weight}</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5 border-t border-emerald-500/5">
              <button 
                onClick={handleWhatsApp} 
                className="flex-grow bg-emerald-850 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition shadow-sm hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <FaWhatsapp className="text-lg" />
                <span>Order via WhatsApp</span>
              </button>
              <button 
                onClick={() => addToCart(product)} 
                className="glass-panel text-emerald-900 border-emerald-500/10 hover:border-emerald-500/20 font-bold text-[10px] uppercase tracking-[0.2em] py-4.5 px-6 rounded-xl transition flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer bg-white/40"
              >
                Add to Cart
              </button>
            </div>

            {/* Guarantee metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-500/5 text-center">
              {['100% Organic', 'Zero Toxins', 'Artisanal Milled'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/5 flex items-center justify-center text-emerald-600 text-sm mb-1.5">✓</div>
                  <span className="text-[8px] text-emerald-950 font-bold uppercase tracking-[0.18em]">{label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

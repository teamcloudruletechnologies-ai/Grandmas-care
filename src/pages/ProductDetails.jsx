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
      <div className="pt-32 pb-20 text-center min-h-screen bg-[#f0fdf4] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-emerald-900 mb-2 font-display">Product Not Found</h2>
        <p className="text-emerald-600/60 text-sm mb-6">The product you are looking for might be sold out.</p>
        <Link to="/shop" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl transition">Return to Shop</Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const msg = `Hi Tamila Natural! I want to order:\n\n*${product.name}* (${product.tamilName})\nWeight: ${product.weight}\nPrice: ₹${product.price}\n\nPlease confirm availability. Thanks!`;
    window.open(`https://api.whatsapp.com/send?phone=+919876543210&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#f0fdf4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-800 mb-8 transition">
          <FiArrowLeft /><span>Back to Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="glass-panel p-8 rounded-3xl flex items-center justify-center bg-emerald-50/50 border border-emerald-100 shadow-xl relative overflow-hidden group min-h-[400px] lg:min-h-[500px]">
            <div className="absolute w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} src={product.image} alt={product.name} className="max-h-[350px] lg:max-h-[450px] object-contain group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">{product.category}</span>
                {product.tag && <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded border border-emerald-200">{product.tag}</span>}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-900 leading-tight">{product.name}</h1>
              <p className="text-sm text-emerald-500 mt-1 font-bold">{product.tamilName}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-emerald-200'}`} />)}
                </div>
                <span className="text-xs text-emerald-600"><strong>{product.rating}</strong> ({product.reviewsCount} orders)</span>
              </div>
            </div>

            <div className="border-y border-emerald-100 py-4 flex items-baseline gap-4">
              <span className="text-3xl font-black text-emerald-700">₹{product.price}</span>
              {product.originalPrice && <span className="text-lg text-emerald-400 line-through font-semibold">₹{product.originalPrice}</span>}
              <span className="text-emerald-600 text-xs font-bold bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded ml-2">In Stock</span>
            </div>

            <p className="text-sm text-emerald-700/80 leading-relaxed">{product.description}</p>

            {/* Benefits */}
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">Key Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((b, i) => (
                  <span key={i} className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                    <FiCheck className="text-emerald-500" />{b}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">Ingredients</h4>
              <p className="text-xs text-emerald-600 leading-relaxed">{product.ingredients.join(' • ')}</p>
            </div>

            {/* Weight */}
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">Weight</h4>
              <span className="text-sm text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl">{product.weight}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-emerald-100">
              <button onClick={handleWhatsApp} className="flex-grow bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-500/20">
                <FaWhatsapp className="text-xl" />Order via WhatsApp
              </button>
              <button onClick={() => addToCart(product)} className="glass-panel border-emerald-200 text-emerald-700 hover:border-emerald-400 font-semibold py-4 px-6 rounded-xl transition flex items-center justify-center gap-2">
                Add to Cart
              </button>
            </div>

            {/* Assurances */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-100 text-center">
              {['100% Natural', 'Chemical Free', 'Fast Delivery'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <FiCheck className="text-emerald-500 text-xl mb-1.5" />
                  <span className="text-[10px] text-emerald-500 font-bold uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

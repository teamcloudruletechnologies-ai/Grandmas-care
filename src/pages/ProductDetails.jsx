import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { herbalProducts } from '../data/herbalProducts';
import { useInquiry } from '../context/InquiryContext';
import { FiArrowLeft, FiCheck, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useInquiry();

  const product = useMemo(() => herbalProducts.find(p => p.id === productId), [productId]);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-36 pb-24 text-center min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center font-body">
        <h2 className="text-2xl font-light text-[#0A4D2E] mb-2 font-display">Remedy Not Found</h2>
        <p className="text-[#1F2937]/50 text-xs mb-6">The requested botanical remedy is unavailable.</p>
        <Link to="/shop" className="bg-[#0A4D2E] text-white font-bold text-[10px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition">
          Return to Shop
        </Link>
      </div>
    );
  }

  const activeVariant = product.variants ? product.variants[selectedVariantIndex] : null;
  const currentPrice = activeVariant ? activeVariant.price : product.price;
  const currentOriginalPrice = activeVariant ? activeVariant.originalPrice : product.originalPrice;
  const currentWeight = activeVariant ? activeVariant.weight : product.weight;

  const handleAddToCart = () => {
    if (activeVariant) {
      addToCart({
        ...product,
        id: `${product.id}-${activeVariant.weight}`,
        price: activeVariant.price,
        originalPrice: activeVariant.originalPrice,
        weight: activeVariant.weight,
      });
    } else {
      addToCart(product);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi Grandmas Care! I want to buy:\n\n*${product.name}* (${product.tamilName})\nWeight: ${currentWeight}\nPrice: ₹${currentPrice}\n\nPlease confirm availability. Thanks!`;
    window.open(`https://api.whatsapp.com/send?phone=+918015080361&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF9F5] min-h-screen font-body text-[#1F2937]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-[10px] font-bold text-[#0A4D2E]/70 hover:text-[#0A4D2E] uppercase tracking-[0.2em] mb-8 transition cursor-pointer"
        >
          <FiArrowLeft className="text-xs" />
          <span>Back to Catalog</span>
        </button>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Clean Floating Product Image */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#0A4D2E]/5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-center justify-center min-h-[380px] sm:min-h-[460px] relative">
              <motion.img 
                key={product.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={product.image} 
                alt={product.name} 
                className="max-h-[320px] sm:max-h-[380px] w-auto object-contain drop-shadow-md" 
              />
            </div>
          </div>

          {/* RIGHT: Minimalist Product Info */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A84C]">
                  {product.category}
                </span>
                <span className="text-[#1F2937]/20">•</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0A4D2E]/60">
                  {product.tamilName}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-light font-display text-[#0A4D2E] leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price Line (Professional Clean Font) */}
            <div className="flex items-baseline gap-3 pt-2 border-t border-[#0A4D2E]/5 font-body">
              <span className="text-3xl font-bold text-[#0A4D2E]">₹{currentPrice}</span>
              {currentOriginalPrice && (
                <span className="text-base text-[#1F2937]/35 line-through font-semibold">₹{currentOriginalPrice}</span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-500/10 px-2.5 py-1 rounded-md ml-2">
                In Stock
              </span>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#1F2937]/65 leading-relaxed">
              {product.description}
            </p>

            {/* Net Weight Selection (Minimal Pills) */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F2937]/50 block">
                Net Weight
              </span>
              {product.variants ? (
                <div className="flex gap-2">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.weight}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer ${
                        selectedVariantIndex === idx
                          ? 'bg-[#0A4D2E] text-white shadow-sm'
                          : 'bg-white text-[#1F2937]/70 border border-[#0A4D2E]/10 hover:border-[#0A4D2E]/30'
                      }`}
                    >
                      {v.weight} — ₹{v.price}
                    </button>
                  ))}
                </div>
              ) : (
                <span className="inline-block text-xs font-bold text-[#0A4D2E] bg-white border border-[#0A4D2E]/10 px-4 py-2 rounded-xl">
                  {product.weight}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={handleAddToCart} 
                className="bg-[#0A4D2E] hover:bg-[#0F7A43] text-white font-bold text-[10px] uppercase tracking-[0.18em] py-4 px-6 rounded-xl flex-1 flex items-center justify-center gap-2 transition shadow-sm active:scale-98 cursor-pointer"
              >
                <FiShoppingBag className="text-sm" />
                <span>Add to Cart</span>
              </button>

              <button 
                onClick={handleWhatsApp} 
                className="border border-[#0A4D2E] text-[#0A4D2E] hover:bg-[#0A4D2E]/5 font-bold text-[10px] uppercase tracking-[0.18em] py-4 px-6 rounded-xl flex-1 flex items-center justify-center gap-2 transition active:scale-98 cursor-pointer"
              >
                <FaWhatsapp className="text-base text-emerald-600" />
                <span>Buy</span>
              </button>
            </div>

            {/* Key Benefits Minimal Bullet Grid */}
            <div className="pt-6 border-t border-[#0A4D2E]/10 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A4D2E] block">
                Key Benefits & Ingredients
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#1F2937]/80">
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FiCheck className="text-[#C9A84C] flex-shrink-0 text-xs" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#1F2937]/50 italic pt-1">
                Ingredients: {product.ingredients.join(', ')}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

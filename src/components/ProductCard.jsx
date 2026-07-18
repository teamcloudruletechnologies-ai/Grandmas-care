import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const benefitStatements = {
  'herbal-bath-powder': 'Traditional herbal bath powder for naturally radiant skin.',
  'wild-turmeric-powder': 'Pure wild turmeric for fading blemishes and evening skin tone.',
  'gram-flour': 'Stone-ground organic gram flour for gentle skin and hair cleansing.',
  'green-gram-flour': 'Nourishing green gram wash for sensitive skin nourishment.',
  'pink-face-pack': 'Rose and clay blend for deep pore tightening and glow.',
  'ayurglow-hair-pack': 'Nourishing herbal hair pack to strengthen roots and prevent fall.',
  'kerela-ayurvedic-hair-oil': 'Traditional ayurvedic infusion for healthy hair growth.',
  'slim-fit-weightloss': 'Ayurvedic herbal blend supporting active metabolism.',
  'kambu-maavu': 'Nutrient-rich pearl millet flour for authentic traditional cooking.',
  'black-rice-kanji': 'Heritage black rice porridge mix rich in antioxidants.',
  'millet-health-mix': 'Classic multi-millet porridge for whole-family vitality.',
  'abc-malt': 'Premium apple, beetroot, and carrot vitalising drink.',
};

const premiumBadges = {
  'herbal-bath-powder': '✦ Heritage Bestseller',
  'wild-turmeric-powder': '✦ Ayurvedic Essential',
  'gram-flour': '✦ Traditional Formula',
  'green-gram-flour': '✦ Handcrafted Wellness',
  'pink-face-pack': '✦ Signature Collection',
  'ayurglow-hair-pack': '✦ Customer Favorite',
  'kerela-ayurvedic-hair-oil': '✦ Heritage Bestseller',
  'slim-fit-weightloss': '✦ Ayurvedic Essential',
  'kambu-maavu': '✦ Traditional Formula',
  'black-rice-kanji': '✦ Signature Collection',
  'millet-health-mix': '✦ Handcrafted Wellness',
  'abc-malt': '✦ Customer Favorite',
};

export default function ProductCard({ product, addToCart }) {
  const benefit = benefitStatements[product.id] || 'Crafted from nature for holistic herbal well-being.';
  const badge = premiumBadges[product.id] || '✦ Traditional Formula';

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[24px] overflow-hidden flex flex-col justify-between h-[510px] group relative shadow-[0_12px_40px_rgba(10,77,46,0.03)] hover:shadow-[0_20px_50px_rgba(10,77,46,0.08)] bg-[#FAF8F3] border border-[#0A4D2E]/5 transition-all duration-500"
    >
      {/* Product Image Container (60-70% product scale) */}
      <div className="relative w-full h-[240px] overflow-hidden bg-[#FAF8F3] p-4 flex items-center justify-center border-b border-[#0A4D2E]/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-[70%] h-[70%] object-contain rounded-2xl group-hover:scale-106 transition-transform duration-700 ease-out" 
        />
        
        {/* Luxury Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#0A4D2E] text-[#D4AF37] text-[8px] font-bold uppercase tracking-[0.16em] px-3.5 py-2 rounded-full shadow-sm flex items-center gap-1">
            {badge}
          </span>
        </div>

        {/* Discount badge overlay if applicable */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-[#D4AF37] text-[#0A4D2E] text-[8px] font-black px-2.5 py-1.5 rounded-lg shadow-sm uppercase tracking-wider">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Product Info Content */}
      <div className="p-6 flex-grow flex flex-col justify-between text-left">
        <div className="space-y-2">
          {/* Tagline & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] leading-none">
              Ancient Ayurvedic Formula
            </span>
            <span className="flex items-center text-amber-500 gap-0.5 leading-none">
              <FiStar className="fill-amber-500 text-xs" />
              <span className="text-[#1F2937] text-[11px] font-bold ml-0.5">{product.rating}</span>
            </span>
          </div>

          {/* Product Name & Tamil Name */}
          <div>
            <h3 className="text-lg font-medium text-[#1F2937] leading-tight font-display group-hover:text-[#0A4D2E] transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-[10px] text-emerald-800/60 font-bold uppercase tracking-wider mt-1">{product.tamilName}</p>
          </div>

          {/* Short description */}
          <p className="text-xs text-[#1F2937]/70 font-medium leading-relaxed line-clamp-2">
            {benefit}
          </p>
        </div>

        {/* Pricing and Actions */}
        <div className="mt-4 pt-4 border-t border-[#0A4D2E]/5">
          <div className="flex items-baseline justify-between mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#1F2937]">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-[#1F2937]/30 line-through font-semibold">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-[10px] font-bold text-[#1F2937]/50 bg-[#0A4D2E]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">{product.weight}</span>
          </div>

          <div className="flex gap-3">
            <Link 
              to={`/product/${product.id}`} 
              className="border border-[#0A4D2E] text-[#0A4D2E] hover:bg-[#0A4D2E]/5 font-bold text-[9px] uppercase tracking-[0.16em] py-3 rounded-full text-center transition duration-300 flex-1"
            >
              Explore Product
            </Link>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-[#0A4D2E] hover:bg-[#0F7A43] text-white font-bold text-[9px] uppercase tracking-[0.16em] py-3 rounded-full transition-all duration-300 shadow-sm active:scale-98 cursor-pointer flex-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

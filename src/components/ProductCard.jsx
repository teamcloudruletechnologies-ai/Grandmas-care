import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const benefitStatements = {
  'herbal-bath-powder': "Traditional Tamil herbal bath powder specially formulated for women.",
  'wild-turmeric-powder': 'Pure wild turmeric for fading blemishes and evening skin tone.',
  'gram-flour': 'Stone-ground organic gram flour for gentle skin and hair cleansing.',
  'green-gram-flour': 'Nourishing green gram wash for sensitive skin nourishment.',
  'pink-face-pack': 'Rose and clay blend for deep pore tightening and glow.',
  'multani-mitti-face-pack': 'Pure Fuller\'s Earth face pack for oil control and clearing pores.',
  'kerela-ayurvedic-hair-oil': 'Traditional ayurvedic infusion for healthy hair growth.',
  'ayurglow-hair-pack': 'Nourishing herbal hair pack to strengthen roots and prevent fall.',
  'slim-fit-weightloss': 'Ayurvedic herbal blend supporting active metabolism.',
  'kambu-maavu': 'Nutrient-rich pearl millet flour for authentic traditional cooking.',
  'black-rice-kanji': 'Heritage black rice porridge mix rich in antioxidants.',
  'millet-health-mix': 'Classic multi-millet porridge for whole-family vitality.',
  'abc-malt': 'Premium apple, beetroot, and carrot vitalising drink.',
  'chettinad-kulambu-chilli-powder': 'Authentic hand-roasted Chettinad kulambu chilli powder.',
};

export default function ProductCard({ product, addToCart }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const activeVariant = product.variants ? product.variants[selectedVariantIndex] : null;
  const currentPrice = activeVariant ? activeVariant.price : product.price;
  const currentOriginalPrice = activeVariant ? activeVariant.originalPrice : product.originalPrice;
  const currentWeight = activeVariant ? activeVariant.weight : product.weight;

  const benefit = benefitStatements[product.id] || 'Crafted from nature for holistic herbal well-being.';

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

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[24px] overflow-hidden flex flex-col justify-between h-[490px] group relative shadow-[0_12px_40px_rgba(10,77,46,0.03)] hover:shadow-[0_20px_50px_rgba(10,77,46,0.08)] bg-[#FAF8F3] border border-[#0A4D2E]/5 transition-all duration-500 text-left"
    >
      {/* Product Image Container */}
      <div className="relative w-full h-[230px] overflow-hidden bg-[#FAF8F3] border-b border-[#0A4D2E]/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />

        {/* Discount badge overlay if applicable */}
        {currentOriginalPrice && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-[#D4AF37] text-[#0A4D2E] text-[8px] font-black px-2.5 py-1.5 rounded-lg shadow-sm uppercase tracking-wider">
              {Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Product Info Content */}
      <div className="p-6 flex-grow flex flex-col justify-between text-left">
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] leading-none">
              {product.category}
            </span>
          </div>

          {/* Product Name & Tamil Name */}
          <div>
            <h3 className="text-lg font-medium text-[#1F2937] leading-tight font-display group-hover:text-[#0A4D2E] transition-colors duration-300 line-clamp-1">
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
          {/* Variants selection if available */}
          {product.variants ? (
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-[#1F2937]">₹{currentPrice}</span>
                {currentOriginalPrice && (
                  <span className="text-xs text-[#1F2937]/30 line-through font-semibold">₹{currentOriginalPrice}</span>
                )}
              </div>
              <div className="flex gap-1">
                {product.variants.map((v, idx) => (
                  <button
                    key={v.weight}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wider transition ${
                      selectedVariantIndex === idx
                        ? 'bg-[#0A4D2E] text-white'
                        : 'bg-[#0A4D2E]/10 text-[#0A4D2E] hover:bg-[#0A4D2E]/20'
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-[#1F2937]">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-[#1F2937]/30 line-through font-semibold">₹{product.originalPrice}</span>
                )}
              </div>
              <span className="text-[10px] font-bold text-[#1F2937]/50 bg-[#0A4D2E]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">{product.weight}</span>
            </div>
          )}

          <div className="flex gap-3">
            <Link 
              to={`/product/${product.id}`} 
              className="border border-[#0A4D2E] text-[#0A4D2E] hover:bg-[#0A4D2E]/5 font-bold text-[9px] uppercase tracking-[0.16em] py-3 rounded-full text-center transition duration-300 flex-1"
            >
              Explore Product
            </Link>
            <button 
              onClick={handleAddToCart} 
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

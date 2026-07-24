import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInquiry } from '../../context/InquiryContext';
import { herbalProducts } from '../../data/herbalProducts';

function ProductShowcaseCard({ product, addToCart, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center group"
    >
      {/* Product Image Card */}
      <Link
        to={`/product/${product.id}`}
        className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#F5F0E8] to-[#EAE4D6] overflow-hidden flex items-center justify-center relative border border-[#0A4D2E]/6 shadow-[0_4px_24px_rgba(10,77,46,0.05)] group-hover:shadow-[0_12px_40px_rgba(10,77,46,0.10)] transition-all duration-500"
      >
        {/* Soft glow behind product */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 rounded-full bg-white/60 blur-2xl" />
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-[72%] h-[72%] object-contain drop-shadow-lg group-hover:scale-[1.07] transition-transform duration-600 ease-out"
        />
      </Link>

      {/* Product Info */}
      <div className="mt-4 text-center px-1 space-y-1">
        <p className="text-[10px] text-[#0A4D2E]/60 font-bold uppercase tracking-[0.22em]">
          {product.tamilName !== product.name ? product.tamilName : ''}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base font-medium text-[#1B2B1F] font-display leading-snug group-hover:text-[#0A4D2E] transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-[#1F2937]/45 font-semibold">₹{product.price}</p>
      </div>

      {/* Add to Cart — always visible on mobile, hover-reveal on desktop */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-[#0A4D2E] text-white text-[9px] font-bold uppercase tracking-[0.18em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const { addToCart } = useInquiry();
  const featuredProducts = herbalProducts.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 relative z-10 bg-gradient-to-b from-[#FDFAF4] to-[#F7F2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-[#C9A84C] font-black uppercase tracking-[0.3em] text-[9px]">
            Grandmas Care
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-display text-[#1B2B1F] mt-2">
            Our Organic Products
          </h2>
          <div className="h-[1.5px] w-10 bg-[#C9A84C] mx-auto mt-4" />
          <p className="text-sm text-[#1F2937]/50 mt-4 font-medium leading-relaxed max-w-md mx-auto">
            Handcrafted with traditional Ayurvedic wisdom. Pure, natural, and made with love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductShowcaseCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-[#0A4D2E]/30 hover:border-[#0A4D2E] text-[#0A4D2E] text-[10px] font-bold uppercase tracking-[0.22em] px-9 py-3.5 rounded-full transition-all duration-300 hover:bg-[#0A4D2E] hover:text-white"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { herbalProducts, herbalCategories } from '../data/herbalProducts';
import { useInquiry } from '../context/InquiryContext';
import { Link } from 'react-router-dom';
import { FiSearch, FiStar, FiSliders } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Shop() {
  const { addToCart } = useInquiry();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...herbalProducts];
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.tamilName.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (sortBy === 'PriceLowHigh') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'PriceHighLow') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="relative pt-28 pb-20 min-h-screen bg-[#f0fdf4] overflow-hidden">
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] bottom-10 -right-40 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center lg:text-left">
          <span className="text-emerald-500 font-extrabold uppercase tracking-wider text-xs">Natural Store</span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-emerald-900 mt-1">All Products</h1>
          <div className="h-1 w-20 bg-emerald-500 mt-3 mb-4 mx-auto lg:mx-0 rounded-full" />
          <p className="text-emerald-700/60 text-xs sm:text-sm">Browse our complete collection of herbal powders, health mixes, organic flours, and wellness products.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <div className="hidden lg:block space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-emerald-900 font-extrabold text-xs uppercase tracking-widest mb-4">Search Products</h3>
              <div className="relative">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Nalangu maavu, Kambu..." className="w-full bg-emerald-50/60 border border-emerald-200/80 rounded-xl py-3 pl-4 pr-10 text-xs text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-500 transition" />
                <FiSearch className="absolute right-3.5 top-3.5 text-emerald-400" />
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-emerald-900 font-extrabold text-xs uppercase tracking-widest mb-4">Categories</h3>
              <div className="flex flex-col gap-2">
                {herbalCategories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-black transition-all ${selectedCategory === cat ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'text-emerald-700 hover:text-emerald-900 border border-transparent hover:bg-emerald-50'}`}>
                    {cat === 'All' ? 'All Products' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setShowFiltersMobile(!showFiltersMobile)} className="lg:hidden flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl text-xs font-bold hover:text-emerald-900">
                  <FiSliders /><span>Filters</span>
                </button>
                <span className="hidden sm:inline text-xs text-emerald-600 font-bold">Showing {filteredProducts.length} items</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-xs text-emerald-500 font-bold">Sort By</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-emerald-50/60 border border-emerald-200 rounded-xl px-3 py-2.5 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500 transition cursor-pointer font-bold">
                  <option value="Featured">Featured</option>
                  <option value="PriceLowHigh">Price: Low to High</option>
                  <option value="PriceHighLow">Price: High to Low</option>
                  <option value="Rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFiltersMobile && (
                <>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setShowFiltersMobile(false)} className="fixed inset-0 bg-black z-40 lg:hidden" />
                  <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="fixed left-0 top-0 bottom-0 w-80 bg-white border-r border-emerald-200 p-6 z-50 overflow-y-auto lg:hidden flex flex-col justify-between shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                        <h3 className="text-emerald-900 font-black text-base font-display">Filters</h3>
                        <button onClick={() => setShowFiltersMobile(false)} className="text-emerald-500 hover:text-emerald-700 text-xl">✕</button>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Search</label>
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search products..." className="w-full bg-emerald-50 border border-emerald-200 rounded-xl py-3 px-4 text-xs text-emerald-900 focus:outline-none focus:border-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Categories</label>
                        <div className="grid grid-cols-2 gap-2">
                          {herbalCategories.map((cat) => (
                            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition ${selectedCategory === cat ? 'bg-emerald-500 text-white font-bold' : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'}`}>
                              {cat === 'All' ? 'All' : cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setShowFiltersMobile(false)} className="w-full bg-emerald-500 text-white font-black py-4 rounded-xl mt-6 text-sm hover:bg-emerald-600 transition">Apply Filters</button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-20 glass-panel rounded-3xl">
                    <p className="text-emerald-600 text-sm mb-4">No products match your search.</p>
                    <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-600 transition">Reset Filters</button>
                  </motion.div>
                ) : (
                  filteredProducts.map((p) => (
                    <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} key={p.id} className="glass-panel rounded-3xl overflow-hidden hover:border-emerald-300 flex flex-col justify-between h-[480px] relative group shimmer-effect">
                      <div className="absolute top-4 left-4 z-10 flex flex-row items-center gap-1.5 flex-wrap" style={{ display: 'flex', gap: '6px', flexDirection: 'row', alignItems: 'center' }}>
                        {p.tag && <span className="bg-emerald-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded tracking-wider shadow-md">{p.tag}</span>}
                        <span className="bg-white border border-emerald-200 text-emerald-700 text-[9px] font-bold uppercase px-2.5 py-1 rounded">{p.category}</span>
                      </div>
                      {p.originalPrice && <div className="absolute top-4 right-4 z-10"><span className="bg-red-500 text-white text-[9px] font-black px-2 py-1 rounded shadow">{Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF</span></div>}

                      <div className="relative p-6 flex justify-center bg-emerald-50/50 border-b border-emerald-100/60 h-[210px] items-center overflow-hidden">
                        <div className="absolute w-20 h-20 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-colors" />
                        <img src={p.image} alt={p.name} className="max-h-[150px] object-contain group-hover:scale-105 transition-transform duration-500 z-10" />
                      </div>

                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-emerald-500 text-[10px] mb-1 font-bold uppercase tracking-wider">
                            <span>{p.tamilName}</span>
                            <span className="flex items-center text-amber-500 gap-0.5"><FiStar className="fill-amber-500 text-xs" /><strong>{p.rating}</strong></span>
                          </div>
                          <h3 className="text-base font-black text-emerald-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{p.name}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg font-bold">{p.weight}</span>
                            <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg font-bold">{p.reviewsCount} orders</span>
                          </div>
                          <p className="text-xs text-emerald-600/70 line-clamp-2 leading-relaxed mt-2">{p.description}</p>
                        </div>
                        <div>
                          <div className="flex items-baseline justify-between mb-4 border-t border-emerald-100 pt-4">
                            <span className="text-2xl font-black text-emerald-700">₹{p.price}</span>
                            {p.originalPrice && <span className="text-xs text-emerald-400 line-through">₹{p.originalPrice}</span>}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <Link to={`/product/${p.id}`} className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-center font-extrabold text-xs py-3 rounded-xl transition-all">Details</Link>
                            <button onClick={() => addToCart(p)} className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs py-3 rounded-xl transition-all hover:shadow-md hover:shadow-emerald-500/20">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

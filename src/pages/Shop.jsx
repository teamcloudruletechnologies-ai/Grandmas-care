import { useState, useMemo } from 'react';
import { herbalProducts, herbalCategories } from '../data/herbalProducts';
import { useInquiry } from '../context/InquiryContext';
import { Link } from 'react-router-dom';
import { FiSearch, FiSliders, FiChevronDown, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'Featured' },
  { label: 'Price: Low to High', value: 'PriceLowHigh' },
  { label: 'Price: High to Low', value: 'PriceHighLow' },
  { label: 'Top Rated', value: 'Rating' },
];

export default function Shop() {
  const { addToCart } = useInquiry();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...herbalProducts];
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.tamilName.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (sortBy === 'PriceLowHigh') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'PriceHighLow') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label || 'Featured';

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#f9fbf9] overflow-hidden">
      {/* Decorative blobs */}
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-blob bg-emerald-500/5 w-[500px] h-[500px] bottom-10 -right-40 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        
        {/* Page Title */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Artisanal Catalog</span>
          <h1 className="text-3xl sm:text-5xl font-light font-display text-emerald-950 mt-1">Our Natural Remedies</h1>
          <div className="h-[1px] w-12 bg-emerald-600/35 mt-3.5 mb-4 mx-auto lg:mx-0" />
          <p className="text-emerald-955/50 text-xs sm:text-sm max-w-xl font-medium leading-relaxed">Browse our carefully curated apothecary. 100% chemical-free herbal bath powders, traditional mixes, and cold-pressed wellness oils.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR FILTERS (Large Screen) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Search Panel */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/5">
              <h3 className="text-emerald-950 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Search Catalog</h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder="Nalangu maavu, Kambu..." 
                  className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-3 pl-4 pr-10 text-xs font-semibold text-emerald-950 placeholder:text-emerald-955/35 focus:outline-none focus:border-emerald-500 transition duration-300" 
                />
                <FiSearch className="absolute right-3.5 top-3.5 text-emerald-500/60" />
              </div>
            </div>

            {/* Category Filter Panel */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/5">
              <h3 className="text-emerald-950 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Categories</h3>
              <div className="flex flex-col gap-2">
                {herbalCategories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)} 
                    className={`w-full text-left py-3 px-4 rounded-xl text-[10px] uppercase tracking-[0.18em] font-bold transition-all duration-300 cursor-pointer ${selectedCategory === cat ? 'bg-emerald-800 text-white shadow-sm' : 'text-emerald-950/70 hover:text-emerald-950 hover:bg-emerald-50'}`}
                  >
                    {cat === 'All' ? 'All Remedies' : cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* PRODUCTS COLUMN */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="glass-panel p-4.5 rounded-2xl border border-emerald-500/5 flex items-center justify-between gap-4 relative z-30">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowFiltersMobile(!showFiltersMobile)} 
                  className="lg:hidden flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 text-emerald-800 px-4.5 py-3 rounded-xl text-xs font-bold hover:text-emerald-950 transition duration-300"
                >
                  <FiSliders /><span>Filters</span>
                </button>
                <span className="hidden sm:inline text-xs text-emerald-800/60 font-bold">Showing {filteredProducts.length} remedies</span>
              </div>

              {/* Luxury Custom Sort Dropdown */}
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs text-emerald-850/40 font-bold uppercase tracking-[0.18em]">Sort By:</span>
                <div className="relative z-40">
                  <button
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2.5 bg-white border border-[#0A4D2E]/15 hover:border-[#0A4D2E]/40 text-[#0A4D2E] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <span>{currentSortLabel}</span>
                    <FiChevronDown className={`text-xs text-[#0A4D2E] transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isSortOpen && (
                      <>
                        {/* Backdrop overlay */}
                        <div 
                          onClick={() => setIsSortOpen(false)} 
                          className="fixed inset-0 z-40 cursor-default" 
                        />
                        
                        {/* Custom Animated Dropdown Menu */}
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#0A4D2E]/15 rounded-2xl shadow-2xl z-50 py-2 overflow-hidden"
                        >
                          {sortOptions.map((option) => {
                            const isSelected = sortBy === option.value;
                            return (
                              <button
                                key={option.value}
                                onClick={() => {
                                  setSortBy(option.value);
                                  setIsSortOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#0A4D2E] text-white font-bold' 
                                    : 'text-[#1F2937]/80 hover:bg-[#0A4D2E]/5 hover:text-[#0A4D2E] font-medium'
                                }`}
                              >
                                <span>{option.label}</span>
                                {isSelected && <FiCheck className="text-xs text-white" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            <AnimatePresence>
              {showFiltersMobile && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 0.4 }} 
                    exit={{ opacity: 0 }} 
                    onClick={() => setShowFiltersMobile(false)} 
                    className="fixed inset-0 bg-emerald-955/20 z-50 backdrop-blur-sm lg:hidden" 
                  />
                  <motion.div 
                    initial={{ x: '-100%' }} 
                    animate={{ x: 0 }} 
                    exit={{ x: '-100%' }} 
                    className="fixed left-0 top-0 bottom-0 w-80 bg-white border-r border-emerald-500/10 p-6 z-50 overflow-y-auto lg:hidden flex flex-col justify-between shadow-2xl"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-emerald-500/5 pb-4">
                        <div>
                          <h3 className="text-emerald-955 font-normal text-lg font-display">Filters</h3>
                          <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider">Grandmas Care</p>
                        </div>
                        <button onClick={() => setShowFiltersMobile(false)} className="text-emerald-500 hover:text-emerald-700 text-lg">✕</button>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Search</label>
                        <input 
                          type="text" 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)} 
                          placeholder="Search remedies..." 
                          className="w-full bg-emerald-50 border border-emerald-500/10 rounded-xl py-3.5 px-4 text-xs text-emerald-950 placeholder:text-emerald-955/30 focus:outline-none focus:border-emerald-500" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.18em]">Categories</label>
                        <div className="grid grid-cols-1 gap-2">
                          {herbalCategories.map((cat) => (
                            <button 
                              key={cat} 
                              onClick={() => setSelectedCategory(cat)} 
                              className={`py-3 px-4 rounded-xl text-[10px] text-left uppercase tracking-wider font-extrabold transition-all duration-300 ${selectedCategory === cat ? 'bg-emerald-800 text-white' : 'bg-emerald-50/50 text-emerald-750 border border-emerald-500/5'}`}
                            >
                              {cat === 'All' ? 'All Remedies' : cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowFiltersMobile(false)} 
                      className="w-full bg-emerald-800 text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4.5 rounded-xl mt-8 hover:bg-emerald-900 transition shadow-sm"
                    >
                      Apply Filters
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="col-span-full text-center py-24 glass-panel rounded-3xl border border-emerald-500/5 flex flex-col items-center"
                  >
                    <span className="text-3xl mb-3.5">🔍</span>
                    <p className="text-emerald-950/50 text-xs sm:text-sm font-semibold mb-4">No remedies found matching your search criteria.</p>
                    <button 
                      onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} 
                      className="bg-emerald-800 text-white px-6 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-900 transition shadow-sm"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                ) : (
                  filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
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

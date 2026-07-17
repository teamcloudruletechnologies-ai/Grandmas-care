import { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function InquiryCart() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, clearCart, sendWhatsAppInquiry } = useInquiry();
  const [customNote, setCustomNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppInquiry(customNote);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black z-50 cursor-pointer" />

          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white border-l border-emerald-100 p-6 z-50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <FiMessageCircle className="text-xl text-emerald-500" />
                  <h3 className="text-xl font-bold font-display text-emerald-900">Cart</h3>
                  <span className="bg-emerald-500 text-white font-bold text-xs px-2 py-0.5 rounded-full">{cartItems.length}</span>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-emerald-400 hover:text-emerald-700 rounded-full hover:bg-emerald-50 transition">
                  <FiX className="text-xl" />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto pr-1 no-scrollbar flex flex-col gap-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 text-emerald-400">
                    <p className="mb-4">Your cart is empty.</p>
                    <Link to="/shop" onClick={() => setIsCartOpen(false)} className="inline-block bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium text-sm px-5 py-2.5 rounded-lg border border-emerald-200 transition">Browse Products</Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div layout key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 20 }} className="flex gap-4 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 relative group">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-emerald-50 border border-emerald-100 flex-shrink-0" />
                      <div className="flex-grow min-w-0">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">{item.tamilName || item.category || 'Herbal'}</span>
                        <h4 className="text-sm font-semibold text-emerald-900 truncate">{item.name}</h4>
                        <p className="text-xs text-emerald-600/70 mt-1">{item.weight || ''} {item.weight ? '|' : ''} ₹{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="absolute right-3 top-3 p-1.5 text-emerald-400 hover:text-red-500 rounded-lg hover:bg-emerald-50 transition opacity-0 group-hover:opacity-100 focus:opacity-100" title="Remove">
                        <FiTrash2 className="text-sm" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-emerald-100 pt-6 mt-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wider">Add a note (Optional)</label>
                    <textarea rows="3" value={customNote} onChange={(e) => setCustomNote(e.target.value)} placeholder="Any special requests, quantity needs, or delivery instructions..." className="w-full bg-emerald-50/60 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900 focus:outline-none focus:border-emerald-500 transition resize-none" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-emerald-500 mb-2">
                    <span>Items: {cartItems.length}</span>
                    <button type="button" onClick={clearCart} className="text-emerald-400 hover:text-red-500 transition flex items-center gap-1"><FiTrash2 /> Clear Cart</button>
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]">
                    <FaWhatsapp className="text-xl" /><span>Send Order via WhatsApp</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

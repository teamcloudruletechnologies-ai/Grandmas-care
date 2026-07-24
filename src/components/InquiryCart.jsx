import { useInquiry } from '../context/InquiryContext';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function InquiryCart() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, clearCart, sendWhatsAppInquiry } = useInquiry();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppInquiry();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.4 }} 
            exit={{ opacity: 0 }} 
            onClick={closeCart} 
            className="fixed inset-0 bg-[#022c22]/15 z-50 backdrop-blur-[3px] cursor-pointer" 
          />

          {/* Drawer Panel */}
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', damping: 28, stiffness: 220 }} 
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[460px] bg-[#f9fbf9] border-l border-emerald-500/10 p-6 sm:p-8 z-50 shadow-[0_0_60px_rgba(2,44,34,0.06)] flex flex-col justify-between font-body"
          >
            <div className="flex-grow flex flex-col min-h-0">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-emerald-500/5 pb-5 mb-6">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl text-emerald-700 shadow-sm">
                    <FiMessageCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal font-display text-emerald-955 tracking-wide leading-none">Your Cart</h3>
                  </div>
                  <span className="bg-emerald-800 text-white font-bold text-[9px] px-2.5 py-1 rounded-full ml-1.5 shadow-sm">{cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}</span>
                </div>
                <button 
                  onClick={closeCart} 
                  className="p-2.5 text-emerald-950/40 hover:text-emerald-950 rounded-xl hover:bg-emerald-500/5 border border-transparent hover:border-emerald-500/10 transition cursor-pointer"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto pr-1 no-scrollbar flex flex-col gap-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-24 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/5 border border-emerald-500/5 flex items-center justify-center text-emerald-500/40 text-2xl mb-4 shadow-sm">🛒</div>
                    <p className="text-xs font-bold text-emerald-955/40 mb-6 uppercase tracking-wider">Your cart is currently empty</p>
                    <Link 
                      to="/shop" 
                      onClick={closeCart} 
                      className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] px-7 py-4.5 rounded-xl shadow-sm hover:-translate-y-0.5 transition duration-300 cursor-pointer"
                    >
                      Browse Remedies
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    const itemQty = item.quantity || 1;
                    return (
                      <motion.div 
                        layout 
                        key={item.id} 
                        initial={{ opacity: 0, y: 12 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, x: 20 }} 
                        className="flex gap-4 p-4 bg-white hover:bg-white/70 rounded-2xl border border-emerald-500/5 relative group transition-colors duration-300 shadow-sm"
                      >
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-xl bg-white border border-emerald-500/5 flex-shrink-0 p-1 shadow-sm" />
                        
                        <div className="flex-grow min-w-0 pr-8 text-left">
                          <span className="text-[9px] uppercase font-bold tracking-[0.16em] text-emerald-600/70">{item.tamilName || item.category}</span>
                          <h4 className="text-sm font-medium text-emerald-955 truncate leading-snug font-display mt-0.5">{item.name}</h4>
                          
                          {/* Unit display */}
                          <p className="text-[10px] text-emerald-950/40 font-medium mt-0.5">{item.weight || ''}</p>
                          
                          {/* Quantity Selector (+ -) */}
                          <div className="flex items-center border border-emerald-500/10 rounded-lg p-0.5 mt-2 bg-emerald-50/20 w-max shadow-sm">
                            <button 
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)} 
                              className="w-6 h-6 flex items-center justify-center text-xs font-bold text-emerald-850 hover:text-emerald-955 hover:bg-white rounded-md transition cursor-pointer"
                            >
                              −
                            </button>
                            <span className="text-[11px] font-bold text-emerald-955 px-2.5 min-w-6 text-center">{itemQty}</span>
                            <button 
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)} 
                              className="w-6 h-6 flex items-center justify-center text-xs font-bold text-emerald-850 hover:text-emerald-955 hover:bg-white rounded-md transition cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price Details */}
                        <div className="flex flex-col items-end justify-between flex-shrink-0">
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="p-2 text-emerald-955/35 hover:text-red-500 hover:bg-red-50/50 border border-transparent hover:border-red-500/10 rounded-xl transition duration-300 cursor-pointer" 
                            title="Remove Item"
                          >
                            <FiTrash2 className="text-sm" />
                          </button>
                          <div className="text-right">
                            <p className="text-sm font-bold text-emerald-955">₹{item.price * itemQty}</p>
                            {itemQty > 1 && (
                              <p className="text-[9px] text-emerald-955/40 font-medium">₹{item.price} each</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Bottom Actions Form */}
            {cartItems.length > 0 && (
              <div className="border-t border-emerald-500/5 pt-6 mt-6 flex-shrink-0 text-left">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Subtotal display */}
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-955 mb-2">
                    <span className="uppercase tracking-wider text-[10px] text-emerald-900/60 font-semibold">Subtotal:</span>
                    <span className="text-xl font-bold text-emerald-955 font-body">₹{subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-bold text-emerald-955/50 mb-1">
                    <span>Total items: {cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}</span>
                    <button 
                      type="button" 
                      onClick={clearCart} 
                      className="text-emerald-955/40 hover:text-red-500 transition duration-300 flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider text-[9px]"
                    >
                      <FiTrash2 className="text-sm" /> Clear Cart
                    </button>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#007a44] hover:bg-[#006536] text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/10 active:scale-98 cursor-pointer"
                  >
                    <FaWhatsapp className="text-base" /><span>Checkout via WhatsApp</span>
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

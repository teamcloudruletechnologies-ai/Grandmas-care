import { createContext, useContext, useState, useEffect } from 'react';

const InquiryContext = createContext();

export const useInquiry = () => useContext(InquiryContext);

export const InquiryProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('tamila_natural_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tamila_natural_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((i) => i.id === item.id);
      if (exists) {
        return prevItems.map((i) => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId, amount) => {
    setCartItems((prevItems) => 
      prevItems.map((i) => {
        if (i.id === itemId) {
          const newQty = (i.quantity || 1) + amount;
          return newQty > 0 ? { ...i, quantity: newQty } : i;
        }
        return i;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const sendWhatsAppInquiry = () => {
    const phoneNumber = "+918015080361";
    if (cartItems.length === 0) return;

    let message = `Hi Grandmas Care! I would like to order the following products:\n\n`;
    let subtotal = 0;

    cartItems.forEach((item, index) => {
      const qty = item.quantity || 1;
      const totalItemPrice = item.price * qty;
      subtotal += totalItemPrice;
      
      message += `${index + 1}. *${item.name}* (${item.tamilName || item.category})\n`;
      message += `   - Quantity: ${qty}\n`;
      message += `   - Weight: ${item.weight || 'N/A'}\n`;
      message += `   - Price: ₹${item.price} each (Total: ₹${totalItemPrice})\n\n`;
    });

    message += `*Total Order Value: ₹${subtotal}*\n\n`;
    message += `Please confirm availability and delivery details. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    window.open(url, '_blank');
  };

  return (
    <InquiryContext.Provider value={{ cartItems, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart, clearCart, sendWhatsAppInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
};

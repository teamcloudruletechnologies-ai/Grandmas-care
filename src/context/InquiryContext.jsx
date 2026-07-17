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
      if (exists) return prevItems;
      return [...prevItems, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const sendWhatsAppInquiry = (customMsg = "") => {
    const phoneNumber = "+919876543210";
    if (cartItems.length === 0 && !customMsg) return;

    let message = `Hi Tamila Natural! I would like to order the following products:\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.tamilName || item.category})\n`;
      message += `   - Weight: ${item.weight || 'N/A'}\n`;
      message += `   - Price: ₹${item.price}\n\n`;
    });

    if (customMsg) {
      message += `Note: ${customMsg}\n\n`;
    }

    message += `Please confirm availability and delivery details. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    window.open(url, '_blank');
  };

  return (
    <InquiryContext.Provider value={{ cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart, clearCart, sendWhatsAppInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
};

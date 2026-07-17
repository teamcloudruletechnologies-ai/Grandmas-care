import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InquiryProvider } from './context/InquiryContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InquiryCart from './components/InquiryCart';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <InquiryProvider>
      <Router>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-[#f0fdf4] text-[#1a2e1a] selection:bg-emerald-400 selection:text-white relative">
          <div className="fixed inset-0 grid-bg-animation pointer-events-none" style={{ zIndex: 0 }} />

          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <InquiryCart />
          <Footer />
        </div>
      </Router>
    </InquiryProvider>
  );
}

import BannerCarousel from '../components/home/BannerCarousel';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import InstagramJourney from '../components/home/InstagramJourney';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f9fbf9] selection:bg-emerald-600 selection:text-white">

      {/* Ambient background blobs */}
      <div className="glow-blob w-[600px] h-[600px] -top-40 -left-40 bg-emerald-100/30 animate-pulse-slow" />
      <div className="glow-blob w-[700px] h-[700px] top-[25vh] -right-40 bg-teal-50/20 animate-pulse-slow" style={{ animationDelay: '3.5s' }} />
      <div className="glow-blob w-[600px] h-[600px] bottom-10 left-1/4 bg-emerald-50/10 animate-pulse-slow" style={{ animationDelay: '5.5s' }} />

      <BannerCarousel />
      <FeaturedProducts />
      <WhyChooseUs />
      <InstagramJourney />

    </div>
  );
}

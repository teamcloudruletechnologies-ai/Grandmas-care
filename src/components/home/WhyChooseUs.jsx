import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import { FiBookOpen, FiShield, FiHeart } from 'react-icons/fi';
import grandmotherStoryImg from '../../assets/grandmother_story.jpg';

export default function WhyChooseUs() {
  const features = [
    {
      title: '100% Natural Ingredients',
      desc: 'Sourced directly from organic farms and zero artificial fillers.',
      icon: <FaLeaf className="text-base text-[#D4AF37]" />,
    },
    {
      title: 'Traditional Ayurvedic Recipes',
      desc: 'Formulations inspired by timeless recipes passed down generations.',
      icon: <FiBookOpen className="text-lg text-[#D4AF37]" />,
    },
    {
      title: 'No Artificial Chemicals',
      desc: 'Pure herbal remedies free from toxins, sulphates, and parabens.',
      icon: <FiShield className="text-lg text-[#D4AF37]" />,
    },
    {
      title: 'Handcrafted with Care',
      desc: 'Made in small artisanal batches to preserve organic potency.',
      icon: <FiHeart className="text-lg text-[#D4AF37]" />,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F3] relative z-10 overflow-hidden border-b border-[#0A4D2E]/5 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Premium Lifestyle Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-[#0A4D2E]/5 rounded-[32px] translate-x-4 translate-y-4 -z-10" />
            <img 
              src={grandmotherStoryImg} 
              alt="Traditional grandmother preparing herbal ingredients" 
              className="w-full aspect-[4/5] object-cover rounded-[32px] shadow-[0_12px_40px_rgba(10,77,46,0.06)] border border-[#0A4D2E]/10"
            />
          </motion.div>

          {/* Right Side: Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 text-left space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs">
                Grandmas Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-light font-display text-[#1B2B1F] leading-tight">
                Why Grandmas Care
              </h2>
              <div className="h-[1.5px] w-14 bg-[#D4AF37]" />
            </div>

            <p className="text-[#1F2937]/75 font-body font-medium text-sm sm:text-base leading-relaxed">
              For generations, our grandmothers trusted nature before chemicals. 
              Every product is inspired by traditional recipes, handcrafted using carefully selected natural ingredients to bring authentic wellness into modern lifestyles.
            </p>

            {/* Four Premium Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="p-5.5 rounded-2xl bg-white border border-[#0A4D2E]/8 shadow-[0_4px_20px_rgba(10,77,46,0.03)] backdrop-blur-md flex items-start gap-4 text-left group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#0A4D2E] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-[#1F2937]/60 font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function WhyChooseUs() {
  const features = [
    { title: '100% Raw Herbs', desc: 'Zero artificial elements, synthetic chemicals or ground fillers. Just pure botanical elements.', icon: '🌿' },
    { title: 'Artisanal Recipes', desc: 'Standard home formulation rules handed down in villages over generations.', icon: '📜' },
    { title: 'Fair Partnerships', desc: 'Providing fair wages directly to our farming partners and village women cooperatives.', icon: '🤝' },
    { title: 'Air-Tight Freshness', desc: 'Carefully sealed in ecological jars to ensure that pure herbal aromas remain intact.', icon: '📦' },
  ];

  return (
    <section className="py-28 border-b border-emerald-500/5 relative z-10 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-[10px]">Grandmas Promise</span>
          <h2 className="text-3xl sm:text-5xl font-light font-display text-emerald-950 mt-1">Sourced from Nature</h2>
          <div className="h-[1px] w-12 bg-emerald-600/35 mx-auto mt-3.5" />
          <p className="text-emerald-950/50 text-xs sm:text-sm mt-4 font-medium leading-relaxed">
            We package organic Tamil heritage remedies directly from clean rural micro-farms without any additive compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:bg-white duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 text-2xl shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-emerald-955 font-bold text-base mb-2 font-display">{item.title}</h3>
              <p className="text-emerald-955/50 text-xs leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

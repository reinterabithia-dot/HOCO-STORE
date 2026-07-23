import { Zap, Shield, Sliders, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const cards = [
    {
      title: 'FAST PROCESS',
      description: 'Proses cepat dan efisien.',
      subText: 'Setiap order diproses langsung setelah pembayaran dikonfirmasi, memastikan Anda tidak kehilangan waktu bermain.',
      icon: Zap,
      color: 'text-sky-400 border-sky-400/25 bg-sky-400/10',
      badge: '01'
    },
    {
      title: 'PROFESSIONAL TEAM',
      description: 'Dikerjakan oleh tim berpengalaman.',
      subText: 'Tim joki kami terdiri dari jagoan-jagoan Extraction Shooter bersertifikat dengan jam terbang ribuan jam.',
      icon: Shield,
      color: 'text-blue-400 border-blue-400/25 bg-blue-400/10',
      badge: '02'
    },
    {
      title: 'FLEXIBLE SERVICE',
      description: 'Pilih layanan sesuai kebutuhan.',
      subText: 'Butuh joki Mandor, menambah pundi-pundi Koen, atau menaikkan Storage Value? Kami sediakan pilihan terbaik.',
      icon: Sliders,
      color: 'text-cyan-300 border-cyan-300/25 bg-cyan-300/10',
      badge: '03'
    },
    {
      title: 'FAST RESPONSE',
      description: 'Admin siap membantu proses order.',
      subText: 'Tim dukungan admin responsif yang siap mengawal akun Anda, menjawab pertanyaan, dan mengirim progress harian.',
      icon: Headphones,
      color: 'text-emerald-400 border-emerald-400/25 bg-emerald-400/10',
      badge: '04'
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-dark-black/95 relative overflow-hidden">
      {/* Background Decal */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            CORE ADVANTAGES
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400">HOCO STORE?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bento-card p-6 flex flex-col justify-between"
              id={`why-card-${card.title.toLowerCase().replace(' ', '-')}`}
            >
              {/* Corner accent decal */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-16 h-0.5 bg-slate-800 group-hover:bg-sky-400/50 transition-colors rotate-45 transform origin-top-right"></div>
              </div>

              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.color.split(' ')[1]} ${card.color.split(' ')[2]}`}>
                    <card.icon className={`w-6 h-6 ${card.color.split(' ')[0]}`} />
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-500 group-hover:text-sky-400 transition-colors">
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wider mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-slate-200 font-semibold text-sm leading-snug mb-3">
                  {card.description}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {card.subText}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 absolute bottom-0 left-6 group-hover:w-[calc(100%-48px)] transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

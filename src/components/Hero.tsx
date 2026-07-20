import { Play, ArrowDown, Target, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data';

interface HeroProps {
  onScrollToOrder: () => void;
  onScrollToServices: () => void;
}

export default function Hero({ onScrollToOrder, onScrollToServices }: HeroProps) {
  const stats = [
    { value: '1.000+', label: 'Order Selesai', icon: ShieldCheck, color: 'text-emerald-400' },
    { value: '3', label: 'Tim Profesional', icon: Target, color: 'text-brand-red-light' },
    { value: 'Fast', label: 'Response', icon: Zap, color: 'text-brand-orange-light' },
    { value: 'Trusted', label: 'Service', icon: Award, color: 'text-amber-400' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-dark-black"
    >
      {/* Immersive Dark Background with generated tactical banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/tactical_banner_1784522762272.jpg"
          alt="Tactical Shooter Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Cinematic gradient overlays to blend text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-black via-brand-dark-black/75 to-brand-dark-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-black via-transparent to-brand-dark-black/35"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050506_90%)]"></div>

        {/* Tactical scanning grids lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%]"></div>
      </div>

      {/* Decorative Top/Side Corner Borders (Military Aesthetic) */}
      <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2 border-zinc-800 pointer-events-none hidden md:block"></div>
      <div className="absolute top-24 right-6 w-12 h-12 border-t-2 border-r-2 border-zinc-800 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-zinc-800 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-zinc-800 pointer-events-none hidden md:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-950/90 border border-brand-red-light/30 text-brand-red-light font-mono text-xs font-bold uppercase tracking-widest mb-6 glow-red"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red-light animate-ping"></span>
              LIVE BOOST SERVICE
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7.5xl leading-none text-white tracking-tight uppercase"
            >
              YOUR RAID.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light via-brand-orange-light to-amber-500 font-display">
                OUR GRIND.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base sm:text-lg lg:text-xl mt-6 max-w-xl font-sans font-light leading-relaxed"
            >
              {BRAND_INFO.description}
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-10 w-full sm:w-auto"
            >
              <button
                onClick={onScrollToOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-display font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-red-light hover:to-brand-orange-light rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer glow-red shadow-lg shadow-brand-red/20 group"
              >
                ORDER SEKARANG
                <Play className="w-4 h-4 ml-2 fill-current animate-pulse text-white" />
              </button>

              <button
                onClick={onScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-display font-bold text-sm uppercase tracking-widest text-zinc-300 hover:text-white bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-300 cursor-pointer"
              >
                LIHAT LAYANAN
                <ArrowDown className="w-4 h-4 ml-2 animate-bounce text-zinc-400 group-hover:text-white" />
              </button>
            </motion.div>
          </div>

          {/* Large Interactive Visual / Accent Decal */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-80 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md flex items-center justify-center overflow-hidden"
            >
              {/* Spinning compass radar HUD effect */}
              <div className="absolute inset-4 rounded-full border border-dashed border-zinc-800/50 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-10 rounded-full border border-brand-red/10 animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute inset-20 rounded-full border border-brand-orange/20 animate-[spin_20s_linear_infinite]"></div>

              {/* Animated scanning radar line */}
              <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-brand-red-light to-transparent origin-left rotate-45 animate-[spin_4s_linear_infinite]"></div>

              {/* Central Military Reticle */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-brand-red-light/40 flex items-center justify-center text-brand-red-light shadow-lg">
                  <Target className="w-8 h-8 animate-pulse" />
                </div>
                <div className="text-center mt-4">
                  <div className="font-display font-extrabold text-white text-lg tracking-wider uppercase">
                    SYSTEM STATUS
                  </div>
                  <div className="text-emerald-400 font-mono text-xs font-semibold tracking-widest mt-1">
                    ● ACTIVE RAPID RAIDS
                  </div>
                </div>
              </div>

              {/* HUD corner lines */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-brand-orange-light"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-brand-orange-light"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-brand-orange-light"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand-orange-light"></div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row Container */}
        <div className="mt-20 border-t border-zinc-900 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-900/80 p-5 rounded-xl hover:border-zinc-800 transition-all duration-300 text-center flex flex-col items-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-brand-orange-light/40 transition-all duration-300"></div>
                <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

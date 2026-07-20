import { Gamepad2, Hash, Users, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { STEPS } from '../data';

export default function HowToOrder() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-brand-red-light" />;
      case 'Hash':
        return <Hash className="w-6 h-6 text-brand-orange-light" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'Send':
        return <Send className="w-6 h-6 text-emerald-400" />;
      default:
        return <Gamepad2 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="cara-order" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            EASY 4-STEP PROCEDURE
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            CARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-orange-light">ORDER</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-3 max-w-lg mx-auto font-light">
            Alur praktis yang dirancang khusus untuk memesan joki tanpa ribet dan dijamin aman.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-orange mx-auto mt-4"></div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Desktop timeline connecting linear bar */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-brand-red/10 via-zinc-800 to-brand-orange/10 transform -translate-y-1/2 z-0 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bento-card p-6 sm:p-8 relative group"
                  id={`step-card-${step.num}`}
                >
                  {/* Glowing hover state light */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Top Header of card: Number Badge */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="font-display font-black text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-900 group-hover:from-brand-red-light/20 group-hover:to-brand-orange-light/20 transition-all duration-300">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-850 rounded-xl flex items-center justify-center shadow-inner group-hover:border-zinc-700 transition-colors">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-lg text-white tracking-widest uppercase mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Corner indicator decal */}
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-brand-orange-light transition-colors"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

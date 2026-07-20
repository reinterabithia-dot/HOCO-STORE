import { ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceId } from '../types';

interface ServicesProps {
  onSelectService: (id: ServiceId) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  // Utility to format currency
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="layanan" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange-light/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red-light/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            EXCLUSIVE PACKAGES
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            PILIH <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-orange-light">LAYANANMU</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-3 max-w-lg mx-auto font-light">
            Solusi raid instan dan aman untuk menaikkan peringkat, stok Koen, dan progress akun game Arena Breakout Anda.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-brand-orange mx-auto mt-5"></div>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const isMandor = service.id === 'mandor';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between bento-card transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                  isMandor
                    ? 'border-brand-red-light/40 shadow-xl shadow-brand-red-light/5 bg-gradient-to-b from-brand-card to-[#151111]'
                    : ''
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Badge if available */}
                {service.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest text-white bg-gradient-to-r from-brand-red-light to-brand-orange-light shadow-md shadow-brand-red/30 glow-red animate-pulse">
                    🔥 {service.badge}
                  </span>
                )}

                {/* Card Top */}
                <div className="p-8 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-black text-2xl tracking-widest text-white uppercase">
                      {service.name}
                    </h3>
                    {isMandor && (
                      <div className="flex items-center gap-1 text-[11px] text-brand-orange-light font-mono font-bold bg-brand-orange/5 px-2.5 py-1 rounded border border-brand-orange/20">
                        <Tag className="w-3.5 h-3.5" />
                        MIN. 3M
                      </div>
                    )}
                  </div>

                  <p className="text-zinc-400 text-sm font-light min-h-[48px] leading-relaxed mb-6 border-b border-zinc-900/80 pb-4">
                    {service.description}
                  </p>

                  {/* Price Section */}
                  <div className="mb-6 flex flex-col justify-center bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-2xl min-h-[96px]">
                    {isMandor && service.promoPrice ? (
                      <div>
                        {/* Strikethrough normal price */}
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <span className="line-through">{formatIDR(service.normalPrice)}</span>
                          <span className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">
                            Normal / M
                          </span>
                        </div>
                        {/* Promo price */}
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-3xl font-display font-black text-brand-red-light">
                            {formatIDR(service.promoPrice)}
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">/ M</span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                          Harga Joki
                        </div>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-3xl font-display font-black text-white">
                            {formatIDR(service.pricePerUnit)}
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">/ M</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-3 mt-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                        <ShieldCheck className="w-4.5 h-4.5 text-brand-orange-light shrink-0 mt-0.5" />
                        <span className="font-light leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom / Action Button */}
                <div className="p-8 pt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full py-3.5 rounded-xl font-display font-extrabold uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      isMandor
                        ? 'bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-red-light hover:to-brand-orange-light text-white glow-red shadow-lg'
                        : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-850 hover:border-zinc-700'
                    }`}
                  >
                    {service.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

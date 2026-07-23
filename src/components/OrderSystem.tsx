import { useState, useEffect } from 'react';
import { Star, ShieldAlert, CheckCircle2, MessageSquare, Info, ShieldCheck, Gamepad2, Coins, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, TEAMS, WHATSAPP_NUMBER } from '../data';
import { ServiceId, TeamId } from '../types';

interface OrderSystemProps {
  selectedServiceId: ServiceId;
  onSelectServiceId: (id: ServiceId) => void;
  onAddToast: (message: string, type: 'success' | 'info' | 'warning') => void;
}

export default function OrderSystem({
  selectedServiceId,
  onSelectServiceId,
  onAddToast
}: OrderSystemProps) {
  const [quantity, setQuantity] = useState<number>(5); // default starting at 5 to showcase promo price immediately
  const [selectedTeamId, setSelectedTeamId] = useState<TeamId | null>('tim1'); // default selection for premium feel
  const [isHoveredSubmit, setIsHoveredSubmit] = useState(false);

  // Read current service details based on state
  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Dynamic values calculation
  let pricePerM = currentService.normalPrice;
  let isPromoApplied = false;

  if (currentService.id === 'mandor') {
    if (quantity >= 3) {
      pricePerM = currentService.promoPrice || 11000;
      isPromoApplied = true;
    } else {
      pricePerM = currentService.normalPrice;
    }
  } else {
    pricePerM = currentService.pricePerUnit;
  }

  const totalPrice = quantity * pricePerM;

  // Track state adjustments
  useEffect(() => {
    onAddToast(`Layanan terpilih: ${currentService.name}`, 'info');
  }, [selectedServiceId]);

  // Handle promo alert changes
  useEffect(() => {
    if (selectedServiceId === 'mandor') {
      if (quantity >= 3) {
        onAddToast('Promo Joki Mandor Aktif! Hemat s/d Rp4.000 / M', 'success');
      }
    }
  }, [quantity, selectedServiceId]);

  // Format currency helper
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  const handleSelectTeam = (teamId: TeamId) => {
    const team = TEAMS.find((t) => t.id === teamId);
    if (team) {
      setSelectedTeamId(teamId);
      onAddToast(`Tim terpilih: ${team.name} (${team.specialization})`, 'success');
    }
  };

  // Build the WhatsApp formatted message
  const handleProceedToWhatsApp = () => {
    if (!selectedServiceId || !quantity || !selectedTeamId) return;

    const team = TEAMS.find((t) => t.id === selectedTeamId);
    const serviceName = currentService.name;

    const message = `Halo Admin HOCO STORE 👋

Saya ingin melakukan order jasa joki Arena Breakout.

Detail Order:
Layanan: ${serviceName}
Jumlah: ${quantity}M
Tim pilihan: ${team?.name || ''}
Estimasi harga: ${formatIDR(totalPrice)}

Mohon informasi selanjutnya untuk proses order.

Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(waUrl, '_blank');
    onAddToast('Mengalihkan Anda ke WhatsApp Admin...', 'success');
  };

  const isFormComplete = selectedServiceId && quantity > 0 && selectedTeamId;

  // Icon mapping for services tabs
  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'mandor':
        return <Gamepad2 className="w-5 h-5 text-sky-400" />;
      case 'koen':
        return <Coins className="w-5 h-5 text-blue-400" />;
      case 'value':
        return <Landmark className="w-5 h-5 text-cyan-400" />;
      default:
        return <Gamepad2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="kalkulator" className="py-24 bg-brand-dark bg-grid relative overflow-hidden">
      {/* Decorative center ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-sky-400 font-mono text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            BENTO BOOKING ENGINE
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            SISTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400">PEMESANAN</span>
          </h2>
          <p className="text-slate-300 font-sans text-sm mt-3 max-w-lg mx-auto font-light">
            Hitung harga secara otomatis dan pilih regu andalan Anda langsung dari bento dashboard interaktif kami.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cohesive Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Service Selection (col-span-5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-pulse shadow-sm shadow-sky-400"></span>
                <h3 className="font-display text-lg tracking-widest font-bold uppercase text-white">
                  PILIH LAYANAN JOKI
                </h3>
              </div>

              <div className="space-y-4">
                {SERVICES.map((s) => {
                  const isActive = s.id === selectedServiceId;
                  const isMandor = s.id === 'mandor';
                  return (
                    <button
                      key={s.id}
                      onClick={() => onSelectServiceId(s.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-blue-500/10 border-sky-400 text-white shadow-md glow-blue'
                          : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      id={`bento-service-${s.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}>
                          {getServiceIcon(s.id)}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm tracking-widest uppercase">
                            {s.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-mono tracking-wider">
                            {s.id === 'mandor' ? 'PROMO MIN. 3M' : 'METODE SECURE EXTRACT'}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        {isMandor ? (
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] text-slate-400 line-through leading-none">
                              {formatIDR(15000)}/M
                            </span>
                            <span className="text-sm font-bold text-sky-400 leading-none mt-1">
                              {formatIDR(11000)}/M
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm font-bold text-white">
                            {formatIDR(20000)}/M
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tim kami menjamin zero rollback pada pengerjaan akun</span>
            </div>
          </div>

          {/* Card 2: Team Selection (col-span-7) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-sm shadow-blue-500"></span>
                <h3 className="font-display text-lg tracking-widest font-bold uppercase text-white">
                  PILIH TIM PENGERJAAN
                </h3>
              </div>

              {/* Grid of Team Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TEAMS.map((team) => {
                  const isSelected = selectedTeamId === team.id;
                  return (
                    <button
                      key={team.id}
                      onClick={() => handleSelectTeam(team.id)}
                      className={`relative p-4 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-500/10 border-sky-400 selected-team'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                      id={`bento-team-${team.id}`}
                    >
                      {/* Top badges */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <span className="text-[9px] font-mono font-extrabold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded uppercase leading-none border border-emerald-400/20">
                          {team.status}
                        </span>

                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-sky-400" />
                        )}
                      </div>

                      <div className="mb-2">
                        <h4 className="font-display font-black text-base text-white tracking-widest uppercase">
                          {team.name}
                        </h4>
                        <p className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-1">
                          {team.specialization}
                        </p>
                        
                        <div className="flex items-center gap-0.5 mb-2">
                          {[...Array(team.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <p className="text-slate-400 text-[11px] leading-relaxed font-light line-clamp-2">
                          {team.description}
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-2 mt-2 w-full flex items-center justify-between text-[9px] font-mono text-slate-400 uppercase">
                        <span>SLOTS:</span>
                        <span className="text-slate-200 font-bold">{team.activeOrders}/5</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>SISTEM PILIH REGALIA AKTIF</span>
              <span className="text-amber-300">RATING TIM: 5.0 ★★★★★</span>
            </div>
          </div>

          {/* Card 3: Pricing Calculator (col-span-5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between border-t-2 border-blue-500/30">
            <div>
              <h3 className="font-display text-lg tracking-widest font-bold uppercase text-white mb-6">
                KALKULATOR HARGA
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-slate-400 font-mono font-bold uppercase block mb-2 tracking-widest">
                    MASUKKAN JUMLAH M (KOEN / VALUE)
                  </label>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors cursor-pointer text-xl font-bold"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setQuantity(isNaN(val) || val < 1 ? 1 : val);
                      }}
                      className="flex-1 h-12 bg-white/5 text-center font-display font-black text-2xl text-white rounded-lg border border-white/10 focus:border-sky-400 focus:outline-none transition-colors"
                    />

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors cursor-pointer text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Promo helper bubble */}
                {selectedServiceId === 'mandor' && (
                  <div className="transition-all duration-300">
                    {quantity < 3 ? (
                      <div className="text-[11px] p-3 bg-sky-950/40 text-sky-300 rounded border border-sky-800/40 flex items-start gap-2">
                        <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                        <span>Promo berlaku minimal order 3M. Harga normal: Rp 15.000/M. Tambah {3 - quantity}M lagi untuk mengaktifkan diskon.</span>
                      </div>
                    ) : (
                      <div className="text-[11px] p-3 bg-blue-950/40 text-sky-200 rounded border border-blue-600/40 flex items-start gap-2 animate-pulse">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                        <span>✓ Promo Aktif: Order 3M+ harga menjadi Rp 11.000/M</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">ESTIMATED PRICE:</span>
              <span className="text-3xl font-display font-bold text-white accent-glow">
                {formatIDR(totalPrice)}
              </span>
            </div>
          </div>

          {/* Card 4: Order Summary & Checkout (col-span-7) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/40 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              
              {/* Summary details */}
              <div className="md:border-r border-white/5 md:pr-8">
                <h3 className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4 font-mono">ORDER SUMMARY</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-slate-400 font-light">Layanan</span>
                    <span className="text-white font-semibold font-display tracking-wide uppercase">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-slate-400 font-light">Quantity</span>
                    <span className="text-white font-mono font-bold">{quantity} M</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-slate-400 font-light">Unit Price</span>
                    <span className="text-white font-mono">{formatIDR(pricePerM)}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-slate-400 font-light">Selected Team</span>
                    <span className="text-sky-400 font-bold font-mono">
                      {selectedTeamId ? TEAMS.find(t => t.id === selectedTeamId)?.name : 'None'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout actions */}
              <div className="flex flex-col justify-center gap-3">
                <button
                  disabled={!isFormComplete}
                  onClick={handleProceedToWhatsApp}
                  onMouseEnter={() => setIsHoveredSubmit(true)}
                  onMouseLeave={() => setIsHoveredSubmit(false)}
                  className={`w-full py-4 btn-gradient rounded-lg font-bold text-sm uppercase tracking-[0.2em] shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 text-white ${
                    isFormComplete ? 'opacity-100 shadow-blue-600/20' : 'opacity-40 cursor-not-allowed'
                  }`}
                  id="bento-checkout-btn"
                >
                  Lanjut ke WhatsApp
                  <MessageSquare className={`w-4 h-4 text-white ${isHoveredSubmit ? 'animate-bounce' : ''}`} />
                </button>
                <p className="text-[10px] text-center text-slate-400 italic">
                  {!isFormComplete 
                    ? "Lengkapi detail pesanan & pilih tim terlebih dahulu."
                    : "Pastikan semua detail sudah benar sebelum klik tombol di atas."
                  }
                </p>
              </div>

            </div>

            <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span>EST. PROCESSING TIME: 1-4 HOURS</span>
              <span className="text-emerald-400 font-bold">100% SECURE ACCOUNT GUARANTEE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

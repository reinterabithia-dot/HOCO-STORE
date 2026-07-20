import { useState, useEffect } from 'react';
import { Target, Swords, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import OrderSystem from './components/OrderSystem';
import HowToOrder from './components/HowToOrder';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { ServiceId, ToastMessage } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('mandor');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated game boot sequence on first render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      addToast('HOCO STORE: Jasa Joki Arena Breakout Siap Diorder!', 'success');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectService = (id: ServiceId) => {
    setSelectedServiceId(id);
    
    // Smooth scroll to order/calculator section
    const orderSection = document.getElementById('kalkulator');
    if (orderSection) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = orderSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark-black text-zinc-100 overflow-x-hidden font-sans">
      {/* Immersive Game Client HUD Boot-up Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 bg-brand-dark-black z-50 flex flex-col items-center justify-center p-6"
            id="preloader-overlay"
          >
            {/* Spinning radar grid */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-red-light/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-brand-orange-light/10 animate-[spin_5s_linear_infinite_reverse]"></div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-16 h-16 rounded-xl bg-zinc-950 border border-brand-red/30 flex items-center justify-center text-brand-red-light shadow-xl glow-red-strong"
              >
                <Swords className="w-8 h-8" />
              </motion.div>
            </div>

            {/* Custom status logs terminal mimicking actual extraction launcher */}
            <div className="mt-8 text-center max-w-xs">
              <h1 className="font-display font-black text-2xl tracking-widest text-white uppercase">
                HOCO <span className="text-brand-red-light font-display">STORE</span>
              </h1>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-orange-light" />
                <span>ESTABLISHING SECURE COMMS...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!isLoading && (
        <div id="main-content-layout">
          {/* Header/Sticky Navbar */}
          <Navbar onScrollToOrder={() => handleScrollToSection('kalkulator')} />

          {/* Hero Section */}
          <Hero
            onScrollToOrder={() => handleScrollToSection('kalkulator')}
            onScrollToServices={() => handleScrollToSection('layanan')}
          />

          {/* Why HOCO Store Section */}
          <WhyUs />

          {/* Services Grid Section */}
          <Services onSelectService={handleSelectService} />

          {/* Step Instructions Section */}
          <HowToOrder />

          {/* Dynamic Order & Calculator Section */}
          <OrderSystem
            selectedServiceId={selectedServiceId}
            onSelectServiceId={setSelectedServiceId}
            onAddToast={addToast}
          />

          {/* FAQs Accordion Section */}
          <FaqSection />

          {/* Footer block */}
          <Footer />

          {/* Micro-interaction toasts overlay */}
          <Toast toasts={toasts} onRemove={removeToast} />
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark-black/95 relative overflow-hidden">
      {/* Visual glowing decors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            HAVE ANY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400">QUESTIONS?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bento-card transition-all duration-300 ${
                  isOpen ? 'border-sky-400/50 shadow-lg shadow-blue-500/10 bg-gradient-to-r from-slate-900/90 to-blue-950/30' : ''
                }`}
                id={`faq-item-${index}`}
              >
                {/* Accordion Trigger button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-slate-900/40 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isOpen ? 'text-sky-400' : 'text-slate-500'
                    }`} />
                    <span className="font-display font-bold text-base sm:text-lg text-white tracking-wide uppercase">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                    isOpen ? 'border-sky-400 text-sky-400 bg-sky-500/10' : 'border-slate-800 text-slate-500'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Slide Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-800/80">
                        <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

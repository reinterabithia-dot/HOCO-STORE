import { CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export default function Toast({ toasts, onRemove }: ToastProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          let bgColor = 'bg-zinc-900 border-zinc-800 text-zinc-100';
          let Icon = Info;
          let iconColor = 'text-sky-400';

          if (toast.type === 'success') {
            bgColor = 'bg-stone-950 border-emerald-500/30 text-stone-100';
            Icon = CheckCircle;
            iconColor = 'text-emerald-400';
          } else if (toast.type === 'warning') {
            bgColor = 'bg-stone-950 border-orange-500/30 text-stone-100';
            Icon = AlertTriangle;
            iconColor = 'text-orange-400';
          }

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              className={`flex items-start gap-3 p-4 rounded-xl border ${bgColor} shadow-2xl pointer-events-auto backdrop-blur-md`}
            >
              <div className="mt-0.5">
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className="flex-1 text-sm font-medium pr-2">
                {toast.message}
              </div>
              <button
                onClick={() => onRemove(toast.id)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors p-0.5 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

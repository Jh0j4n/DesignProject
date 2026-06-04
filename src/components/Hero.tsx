import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-emerald-200/80 text-sm font-semibold mb-8 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Más de 20 años de experiencia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-emerald-200 leading-[1.1] mb-8"
          >
            Encuentra tu próxima propiedad de <span className="underline decoration-emerald-400/40 decoration-4 underline-offset-8">forma fácil</span> y segura
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-200/60 mb-12 font-medium max-w-xl leading-relaxed"
          >
            Simplificamos tu búsqueda inmobiliaria con asesoría experta y el portal más confiable del país.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button 
              onClick={onExplore}
              className="group bg-white text-primary-dark px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Explorar propiedades
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContact}
              className="bg-white/10 backdrop-blur-xl text-emerald-200 border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-dark transition-all flex items-center justify-center"
            >
              Hablar con un asesor
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-5 rounded-3xl overflow-hidden max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="flex flex-col px-5 py-3 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer" role="button" tabIndex={0}>
              <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1.5">¿Qué buscas?</label>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Tipo de inmueble</span>
                <ChevronDown className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            
            <div className="flex flex-col px-5 py-3 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer" role="button" tabIndex={0}>
              <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1.5">¿En dónde?</label>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Todas las ciudades</span>
                <ChevronDown className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            <div className="flex flex-col px-5 py-3 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer" role="button" tabIndex={0}>
              <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1.5">Tu presupuesto</label>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Rango de precio</span>
                <ChevronDown className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            <div className="flex items-stretch">
              <button 
                onClick={onExplore}
                className="w-full bg-white text-primary-dark hover:bg-emerald-50 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all py-5"
              >
                <Search className="w-5 h-5" />
                <span>Buscar ahora</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

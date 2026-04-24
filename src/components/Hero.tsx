import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
          alt="Propiedad de lujo Inmobiliaria Díaz"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-sm font-semibold mb-8 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-success"></span>
            Más de 20 años de experiencia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8"
          >
            Encuentra tu próxima propiedad de <span className="text-secondary underline decoration-primary decoration-4 underline-offset-8">forma fácil</span> y segura
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-xl leading-relaxed"
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
              className="group bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/25"
            >
              Explorar propiedades
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContact}
              className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              Hablar con un asesor
            </button>
          </motion.div>
        </div>

        {/* Filter Bar - Oriented to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-white p-3 md:p-5 rounded-3xl shadow-2xl overflow-hidden max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col px-5 py-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-gray-100 md:border-none">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">¿Qué buscas?</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">Tipo de inmueble</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
            </div>
            
            <div className="flex flex-col px-5 py-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-gray-100 md:border-none">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">¿En dónde?</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">Todas las ciudades</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex flex-col px-5 py-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-gray-100 md:border-none">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Tu presupuesto</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">Rango de precio</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex items-stretch">
              <button 
                onClick={onExplore}
                className="w-full bg-primary hover:bg-primary-dark text-white rounded-2xl flex items-center justify-center gap-3 font-bold transition-all py-5 shadow-lg shadow-primary/20"
              >
                <Search className="w-5 h-5 text-white" />
                <span>Buscar ahora</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

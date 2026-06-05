import { ChevronLeft, ChevronRight, Bed, Bath, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { PROPERTIES } from './FeaturedGrid';

interface HeroSliderProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function HeroSlider({ onExplore, onContact }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const featured = PROPERTIES.filter(p => [1, 2, 3, 4, 6, 12].includes(p.id));
  const total = featured.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[100vh] min-h-[650px] md:min-h-[700px] overflow-hidden bg-primary-dark">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={featured[current].image}
            alt={featured[current].title}
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all" aria-label="Anterior">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all" aria-label="Siguiente">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featured.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`} aria-label={`Ir a slide ${i + 1}`} />
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <motion.div
            key={`info-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary px-3 py-1 rounded text-white text-[10px] font-bold uppercase tracking-widest mb-4">
              Destacado
            </span>
            <h1 className="text-3xl md:text-6xl font-display font-extrabold text-white leading-[1.1] mb-3">
              {featured[current].title}
            </h1>
            <p className="text-sm md:text-lg text-white/80 font-medium mb-1 md:mb-2">{featured[current].location}</p>
            <p className="text-2xl md:text-4xl font-display font-extrabold text-yellow-300 mb-4 md:mb-6">
              {featured[current].price}
            </p>
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              {featured[current].beds > 0 && (
                <div className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                  <Bed className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base font-semibold">{featured[current].beds} Hab</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                <Bath className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-semibold">{featured[current].baths} Baños</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                <Square className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-semibold">{featured[current].sqft} m²</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button onClick={onExplore} className="bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-xl">
                Ver detalle
              </button>
              <button onClick={onContact} className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-gray-900 transition-all">
                Contactar asesor
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

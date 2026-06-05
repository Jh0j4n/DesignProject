import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onContact: () => void;
}

export default function CTABanner({ onContact }: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 md:mb-6 leading-tight">
              ¿Listo para encontrar tu hogar ideal?
            </h2>
            <p className="text-sm md:text-lg text-white/70 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Nuestro equipo de asesores expertos está listo para acompañarte en cada paso del proceso. Sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={onContact}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl group"
              >
                Hablar con una asesora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Explorar propiedades
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const PARTNERS = [
  "MetroCuadrado", "fincaraíz", "Protecsa", "El Libertador", "suramericana", "Simi"
];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-12">Aliados Estratégicos</h3>
        
        <div className="flex flex-wrap items-center justify-between gap-12 opacity-50 grayscale">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, grayscale: 0, opacity: 1 }}
              className="text-2xl font-display font-bold text-gray-400 cursor-pointer"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

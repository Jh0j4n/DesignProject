import { motion } from 'motion/react';

const PARTNERS = [
  { name: "MetroCuadrado", color: "from-emerald-600 to-primary" },
  { name: "fincaraíz", color: "from-amber-600 to-primary" },
  { name: "Protecsa", color: "from-blue-600 to-primary" },
  { name: "El Libertador", color: "from-rose-600 to-primary" },
  { name: "suramericana", color: "from-violet-600 to-primary" },
  { name: "Simi", color: "from-sky-600 to-primary" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Confían en nosotros
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">Aliados Estratégicos</h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 group-hover:border-primary/20 group-hover:shadow-md transition-all">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {partner.name.charAt(0)}
                </div>
                <span className="text-base font-bold text-gray-700 group-hover:text-primary transition-colors tracking-tight">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

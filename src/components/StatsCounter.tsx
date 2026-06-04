import { motion } from 'motion/react';
import { Building2, Users, Award, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Building2, value: '320+', label: 'Propiedades comercializadas' },
  { icon: Users, value: '280+', label: 'Clientes satisfechos' },
  { icon: Award, value: '22', label: 'Años de experiencia' },
  { icon: ShieldCheck, value: '100%', label: 'Títulos validados' },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

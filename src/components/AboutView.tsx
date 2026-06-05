import { motion } from 'motion/react';
import { Shield, Heart, Target, Eye } from 'lucide-react';

const team = [
  { name: 'Miguel Angel Ceballos Yate', role: 'Desarrollador Full Stack', initials: 'MC' },
  { name: 'William Alexander Franco Otero', role: 'Desarrollador Front-End', initials: 'WF' },
  { name: 'Jhojan Stiven Castaño Jejen', role: 'Diseñador UX / UI', initials: 'JC' },
  { name: 'David Santiago Velasco Triana', role: 'Analista de Accesibilidad', initials: 'DV' },
];

const values = [
  { icon: Shield, title: 'Transparencia', desc: 'Cada operación respaldada por estudios de títulos rigurosos.' },
  { icon: Heart, title: 'Compromiso', desc: 'Acompañamos a nuestros clientes mucho después de la firma.' },
  { icon: Target, title: 'Precisión', desc: 'Análisis de mercado detallado para cada propiedad.' },
  { icon: Eye, title: 'Visión', desc: 'Anticipamos tendencias para ofrecer las mejores oportunidades.' },
];

export default function AboutView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20"
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">
              Nuestra Historia
            </span>
            <h1 className="text-3xl md:text-6xl font-display font-extrabold mb-4 md:mb-6 leading-tight max-w-3xl">
              Más de 22 años construyendo confianza en el mercado inmobiliario colombiano
            </h1>
            <p className="text-sm md:text-lg text-emerald-200 max-w-2xl leading-relaxed">
              Desde 2004, en Inmobiliaria Díaz Ltda. nos dedicamos a conectar personas con el hogar de sus sueños,
              respaldando cada transacción con rigor legal y calidez humana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-16 text-center">Nuestra Trayectoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { year: '2004', title: 'Fundación', desc: 'Apertura de la primera oficina en Bogotá con 3 asesores.' },
              { year: '2010', title: 'Expansión', desc: 'Apertura de sedes en Medellín y Cali. 50 propiedades vendidas.' },
              { year: '2018', title: 'Digitalización', desc: 'Lanzamiento del portal web. Catálogo digital de propiedades.' },
              { year: '2026', title: 'Innovación', desc: 'Rediseño completo con accesibilidad WCAG 2.2 AA y UX Writing.' },
            ].map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-black text-primary mb-3">{m.year}</div>
                <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">Principios que guían cada decisión y cada relación con nuestros clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Conoce a nuestro equipo</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">Profesionales apasionados por ayudarte a encontrar el hogar que mereces.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 bg-gray-50 p-6 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-xl shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

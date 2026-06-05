import { motion } from 'motion/react';
import { Search, DollarSign, FileText, HandshakeIcon, ArrowRight, ShieldCheck, Home, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Compra de propiedades',
    desc: 'Te acompañamos en la búsqueda de tu hogar ideal con estudios de títulos, negociación y asesoría legal completa.',
    features: ['Búsqueda personalizada', 'Estudio de títulos', 'Negociación asistida', 'Acompañamiento en firma'],
  },
  {
    icon: DollarSign,
    title: 'Venta de inmuebles',
    desc: 'Maximizamos el valor de tu propiedad con estrategias de marketing digital, valuation y gestión de visitas.',
    features: ['Valoración sin costo', 'Fotografía profesional', 'Publicación en portales', 'Marketing digital'],
  },
  {
    icon: FileText,
    title: 'Asesoría legal',
    desc: 'Protegemos tu inversión con revisiones jurídicas exhaustivas y acompañamiento notarial en cada transacción.',
    features: ['Revisión de documentos', 'Estudio de títulos', 'Acompañamiento notarial', 'Certificaciones'],
  },
  {
    icon: TrendingUp,
    title: 'Arriendo de propiedades',
    desc: 'Gestionamos el arriendo de tu inmueble con contratos seguros, verificación de inquilinos y administración.',
    features: ['Contratos claros', 'Verificación de ingresos', 'Administración mensual', 'Gestión de mantenimiento'],
  },
];

const whyUs = [
  { icon: ShieldCheck, title: 'Seguridad jurídica', desc: 'Cada operación pasa por nuestro departamento legal.' },
  { icon: HandshakeIcon, title: 'Acompañamiento total', desc: 'Estamos contigo antes, durante y después de la firma.' },
  { icon: Home, title: 'Portfolio exclusivo', desc: 'Propiedades seleccionadas y validadas por nuestro equipo.' },
];

export default function ServicesView({ onContact }: { onContact: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20"
    >
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">
              Servicios
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight max-w-3xl">
              Soluciones integrales para tu patrimonio inmobiliario
            </h1>
            <p className="text-lg text-emerald-200 max-w-2xl leading-relaxed">
              Ya sea que quieras comprar, vender, arrendar o recibir asesoría legal, nuestro equipo multidisciplinario está listo para ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-success"></div>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-extrabold mb-16">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{w.title}</h3>
                  <p className="text-emerald-200/80">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={onContact}
            className="mt-16 inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all group"
          >
            Solicitar asesoría personalizada <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}

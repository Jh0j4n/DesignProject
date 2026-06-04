import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BlogPreviewProps {
  onContact: () => void;
}

const articles = [
  {
    title: 'Guía completa para comprar vivienda en Colombia',
    excerpt: 'Todo lo que necesitas saber: estudio de títulos, crédito hipotecario, impuestos y pasos legales para firmar la escritura.',
    date: '15 May 2026',
    readTime: '8 min',
    gradient: 'from-emerald-500 to-primary',
  },
  {
    title: 'Los mejores barrios para invertir en Bogotá 2026',
    excerpt: 'Análisis de plusvalía, conectividad y calidad de vida en las zonas más prometedoras de la capital colombiana.',
    date: '2 Jun 2026',
    readTime: '6 min',
    gradient: 'from-blue-500 to-primary',
  },
  {
    title: 'Cómo aumentar el valor de tu propiedad antes de vender',
    excerpt: 'Mejoras estratégicas con alto retorno de inversión: cocina, baños, fachada y eficiencia energética.',
    date: '20 May 2026',
    readTime: '5 min',
    gradient: 'from-amber-500 to-primary',
  },
];

export default function BlogPreview({ onContact }: BlogPreviewProps) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-block bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              Blog Inmobiliario
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">
              Consejos y novedades
            </h2>
          </div>
          <button
            onClick={onContact}
            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className={`h-48 rounded-[2rem] bg-gradient-to-br ${a.gradient} mb-6 flex items-center justify-center`}>
                <div className="text-white/30 text-6xl font-display font-black">{i + 1}</div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                <span>{a.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{a.readTime} de lectura</span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                {a.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

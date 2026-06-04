import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Guía completa para comprar vivienda en Colombia',
    excerpt: 'Todo lo que necesitas saber: estudio de títulos, crédito hipotecario, impuestos y pasos legales para firmar la escritura.',
    content: 'Comprar vivienda en Colombia es uno de los pasos más importantes en la vida de cualquier persona. Sin embargo, el proceso puede ser abrumador si no se conoce a fondo. En esta guía te explicamos paso a paso cada etapa: desde la preaprobación del crédito hasta la firma de la escritura pública. Incluye consejos sobre el estudio de títulos, la negociación del precio, los impuestos asociados (registro, avalúo, notaría) y cómo elegir el crédito hipotecario que mejor se adapte a tu presupuesto.',
    date: '15 May 2026',
    readTime: '8 min',
    author: 'Paula Restrepo',
    category: 'Compra',
    gradient: 'from-emerald-500 to-primary',
  },
  {
    id: 2,
    title: 'Los mejores barrios para invertir en Bogotá 2026',
    excerpt: 'Análisis de plusvalía, conectividad y calidad de vida en las zonas más prometedoras de la capital colombiana.',
    content: 'Bogotá sigue siendo el mercado inmobiliario más dinámico del país. En este análisis detallado revisamos los barrios con mayor proyección de plusvalía para 2026: Chapinero Alto, Usaquén, Teusaquillo y Fontibón. Comparamos precios por metro cuadrado, acceso a transporte público, oferta de servicios y calidad de vida. Además, incluimos recomendaciones para inversores primerizos y experimentados.',
    date: '2 Jun 2026',
    readTime: '6 min',
    author: 'Carlos Martínez',
    category: 'Inversión',
    gradient: 'from-blue-500 to-primary',
  },
  {
    id: 3,
    title: 'Cómo aumentar el valor de tu propiedad antes de vender',
    excerpt: 'Mejoras estratégicas con alto retorno de inversión: cocina, baños, fachada y eficiencia energética.',
    content: 'Vender una propiedad no se trata solo de poner un precio y esperar. Pequeñas mejoras estratégicas pueden aumentar significativamente el valor percibido y acelerar la venta. En este artículo compartimos las renovaciones con mayor retorno de inversión: modernización de cocina y baños, mejora de la fachada, instalación de pisos de madera, y eficiencia energética. Basado en datos del mercado colombiano 2025-2026.',
    date: '20 May 2026',
    readTime: '5 min',
    author: 'Jorge Lozano',
    category: 'Venta',
    gradient: 'from-amber-500 to-primary',
  },
  {
    id: 4,
    title: 'Crédito hipotecario vs. arriendo: ¿qué conviene más?',
    excerpt: 'Análisis financiero comparativo entre comprar con crédito hipotecario y arrendar en las principales ciudades.',
    content: 'La decisión entre comprar y arrendar depende de múltiples factores: estabilidad laboral, capacidad de ahorro, planes a futuro y condiciones del mercado. Analizamos escenarios en Bogotá, Medellín y Cali con ejemplos numéricos reales. Incluye calculadora de punto de equilibrio y recomendaciones según tu perfil financiero.',
    date: '10 Jun 2026',
    readTime: '7 min',
    author: 'Anita Max Wynn',
    category: 'Finanzas',
    gradient: 'from-violet-500 to-primary',
  },
  {
    id: 5,
    title: 'Guía legal: todo sobre la promesa de compraventa',
    excerpt: 'Lo que debes saber antes de firmar: cláusulas esenciales, arras, penalidades y derechos del comprador.',
    content: 'La promesa de compraventa es el documento más importante antes de la escrituración. Muchos compradores firman sin conocer sus derechos y obligaciones. Esta guía explica cada cláusula, qué son las arras, cómo funcionan las penalidades por incumplimiento, y cuáles son tus derechos como comprador ante cualquier eventualidad.',
    date: '25 May 2026',
    readTime: '9 min',
    author: 'Paula Restrepo',
    category: 'Legal',
    gradient: 'from-rose-500 to-primary',
  },
  {
    id: 6,
    title: 'Propiedades en Medellín: el mercado que no deja de crecer',
    excerpt: 'Por qué el Valle de Aburrá sigue siendo el destino preferido para inversión inmobiliaria en Colombia.',
    content: 'Medellín continúa atrayendo inversión nacional e internacional. Analizamos las cifras del mercado en 2026: precios por zona, proyección de plusvalía, nuevos desarrollos y el impacto del metro de la 80 en el mercado inmobiliario. Incluye entrevistas con desarrolladores y agentes locales.',
    date: '8 Jun 2026',
    readTime: '6 min',
    author: 'Felipe Sánchez',
    category: 'Mercado',
    gradient: 'from-cyan-500 to-primary',
  },
];

export default function BlogView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20"
    >
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">
              Blog Inmobiliario
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
              Consejos, guías y novedades del mercado
            </h1>
            <p className="text-lg text-emerald-200 leading-relaxed">
              Artículos escritos por nuestro equipo de expertos para ayudarte a tomar las mejores decisiones inmobiliarias.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`h-52 bg-gradient-to-br ${a.gradient} relative overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {a.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-8xl font-display font-black">{a.id}</div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {a.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {a.readTime}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {a.author}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{a.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

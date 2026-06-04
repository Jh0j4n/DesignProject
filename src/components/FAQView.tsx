import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    q: '¿Qué documentos necesito para comprar una propiedad en Colombia?',
    a: 'Necesitas cédula de ciudadanía (o pasaporte si eres extranjero), certificado de tradición y libertad del inmueble, paz y salvo de impuestos prediales, y carta de aprobación del crédito hipotecario si aplica. Nosotros te guiamos en todo el proceso.',
  },
  {
    q: '¿Cuánto tiempo toma el proceso de compra?',
    a: 'En promedio, el proceso toma de 30 a 60 días desde la firma de la promesa de compraventa hasta la escrituración. Esto puede variar según el tipo de crédito y la complejidad del estudio de títulos.',
  },
  {
    q: '¿Qué incluye el estudio de títulos?',
    a: 'Nuestro estudio de títulos revisa antecedentes registrales, embargos, hipotecas, servidumbres, fideicomisos y cualquier limitación al dominio. Garantizamos que la propiedad esté libre de todo gravamen antes de la compra.',
  },
  {
    q: '¿Trabajan con crédito hipotecario?',
    a: 'Sí, tenemos alianzas con los principales bancos del país (Bancolombia, Davivienda, BBVA, Scotiabank) y te ayudamos a comparar tasas y condiciones para obtener el mejor crédito hipotecario.',
  },
  {
    q: '¿Qué costos adicionales tiene comprar vivienda?',
    a: 'Los principales costos adicionales son: impuesto de registro (1-2% del valor), honorarios notariales, avalúo del inmueble, estudio de crédito y seguros obligatorios. Te damos un desglose detallado antes de la compra.',
  },
  {
    q: '¿Cómo sé si una propiedad tiene un buen precio?',
    a: 'Realizamos un análisis comparativo de mercado (ACM) que revisa precios de propiedades similares en la misma zona, plusvalía proyectada, estado de conservación y tendencias del barrio.',
  },
  {
    q: '¿Ofrecen visitas virtuales?',
    a: 'Sí, ofrecemos visitas virtuales en 360° para la mayoría de nuestras propiedades. También coordinamos visitas presenciales con todas las medidas de seguridad y comodidad para ti.',
  },
  {
    q: '¿Qué pasa si la propiedad tiene problemas legales?',
    a: 'Si durante el estudio de títulos encontramos alguna irregularidad, te informamos de inmediato y te sugerimos no proceder con la compra hasta que el vendedor resuelva la situación. Nuestra prioridad es tu seguridad jurídica.',
  },
];

const categories = [
  { label: 'Todas', active: true },
  { label: 'Compra', active: false },
  { label: 'Legal', active: false },
  { label: 'Financiero', active: false },
  { label: 'Servicios', active: false },
];

export default function FAQView() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              FAQ
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
              Preguntas frecuentes
            </h1>
            <p className="text-lg text-emerald-200 leading-relaxed">
              Todo lo que necesitas saber sobre nuestros servicios, el proceso de compra y la documentación legal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Busca tu pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-5 pl-14 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all text-lg"
            />
          </div>

          {/* FAQ Items */}
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-lg">No encontramos resultados para tu búsqueda.</p>
          )}

          <div className="space-y-4">
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-bold text-gray-900 text-lg leading-tight">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-5 pb-5 text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

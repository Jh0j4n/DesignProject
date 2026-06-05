import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mauricio Gómez',
    role: 'Comprador de vivienda',
    text: 'Sencillamente impecable. Me guiaron paso a paso y sentí que mi inversión estaba en las mejores manos. El estudio de títulos me dio una tranquilidad absoluta.',
    rating: 5,
  },
  {
    name: 'Carolina Reyes',
    role: 'Inversora',
    text: 'Compré dos propiedades de inversión con ellos y ambas han superado mis expectativas de rentabilidad. Su conocimiento del mercado colombiano es excepcional.',
    rating: 5,
  },
  {
    name: 'Andrés Morales',
    role: 'Vendedor',
    text: 'Vendí mi apartamento en menos de 3 semanas. El equipo de marketing digital que usaron para promocionar mi propiedad marcó toda la diferencia.',
    rating: 5,
  },
  {
    name: 'Luisa Fernanda Torres',
    role: 'Familia compradora',
    text: 'Encontrar casa para mi familia era abrumador hasta que llegamos a Díaz. Entendieron exactamente lo que buscábamos y nos mostraron opciones perfectas.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            La satisfacción de quienes han confiado en nosotros es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-50">
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 font-medium">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

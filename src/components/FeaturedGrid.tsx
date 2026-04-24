import PropertyCard, { PropertyData } from './PropertyCard';
import { motion } from 'motion/react';

export const PROPERTIES: PropertyData[] = [
  {
    id: 1,
    title: "Villa Mediterránea con Vista al Mar",
    price: "$1.000.000",
    location: "S. Marta, Pozos Colorados",
    beds: 5,
    baths: 3,
    sqft: 180,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Espectacular villa de diseño moderno con amplios ventanales y acceso privado controlado. Cuenta con acabados de mármol y sistema de hogar inteligente."
  },
  {
    id: 2,
    title: "Apartamento Penthouse Luxury",
    price: "$375.000",
    location: "Bogotá, El Chicó",
    beds: 3,
    baths: 3,
    sqft: 120,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    description: "Vistas panorámicas de la ciudad en el corazón financiero. Terraza privada y acabados industriales elegantes."
  },
  {
    id: 3,
    title: "Casa Bauhaus Estilo Contemporáneo",
    price: "$320.000",
    location: "Medellín, Poblado",
    beds: 3,
    baths: 2,
    sqft: 110,
    image: "https://images.unsplash.com/photo-1600607687940-477a2939e853?auto=format&fit=crop&q=80&w=800",
    description: "Diseño minimalista enfocado en la funcionalidad y la luz natural. Ubicación envidiable cerca de centros gastronómicos."
  },
  {
    id: 4,
    title: "Residencia Campestre de Ensueño",
    price: "$300.000",
    location: "Cali, Pance",
    beds: 3,
    baths: 3,
    sqft: 180,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    description: "Amplitud y naturaleza se combinan en esta residencia a las afueras de la urbe. Clima ideal y espacios de recreación únicos."
  }
];

interface FeaturedGridProps {
  onViewDetails: (id: number) => void;
}

export default function FeaturedGrid({ onViewDetails }: FeaturedGridProps) {
  return (
    <section className="py-28 bg-gray-50/50" id="property-list">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              Selección Exclusiva
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 leading-tight"
            >
              Descubre nuestras Propiedades Destacadas
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-500 hover:border-primary hover:text-primary transition-all">
              Filtrar por ciudad
            </button>
            <button className="px-6 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-500 hover:border-primary hover:text-primary transition-all">
              Mayor precio
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PropertyCard {...property} onViewDetails={onViewDetails} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={() => onViewDetails(PROPERTIES[0].id)}
            className="inline-flex items-center gap-3 text-primary font-display font-black text-xl hover:translate-x-2 transition-transform"
          >
            Ver catálogo completo <span className="w-12 h-[2px] bg-primary"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

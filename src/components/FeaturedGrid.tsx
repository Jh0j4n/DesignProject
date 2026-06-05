import PropertyCard, { PropertyData } from './PropertyCard';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const PROPERTIES: PropertyData[] = [
  {
    id: 1,
    title: "Villa Mediterránea con Vista al Mar",
    price: "$1.000.000",
    location: "S. Marta, Pozos Colorados",
    beds: 5, baths: 3, sqft: 180,
    image: "/images/photo-1512917774080-9991f1c4c750.avif",
    gradient: "from-emerald-600 to-teal-800",
    description: "Espectacular villa de diseño moderno con amplios ventanales y acceso privado controlado.",
    features: ["Piscina infinita", "Cocina equipada", "Parqueadero privado", "Vista panorámica", "Gimnasio", "Zona BBQ", "Hogar inteligente", "Acabados de mármol"]
  },
  {
    id: 2,
    title: "Apartamento Penthouse Luxury",
    price: "$375.000",
    location: "Bogotá, El Chicó",
    beds: 3, baths: 3, sqft: 120,
    image: "/images/photo-1600596542815-ffad4c1539a9.avif",
    gradient: "from-blue-600 to-indigo-900",
    description: "Vistas panorámicas de la ciudad en el corazón financiero.",
    features: ["Terraza privada", "Vista 360°", "Parqueadero", "Seguridad 24/7"]
  },
  {
    id: 3,
    title: "Casa Bauhaus Estilo Contemporáneo",
    price: "$320.000",
    location: "Medellín, Poblado",
    beds: 3, baths: 2, sqft: 110,
    image: "/images/7.avif",
    gradient: "from-amber-600 to-orange-900",
    description: "Diseño minimalista enfocado en la funcionalidad y la luz natural.",
    features: ["Diseño minimalista", "Luz natural", "Jardín interior", "Parqueadero"]
  },
  {
    id: 4,
    title: "Residencia Campestre de Ensueño",
    price: "$300.000",
    location: "Cali, Pance",
    beds: 3, baths: 3, sqft: 180,
    image: "/images/photo-1600210492486-724fe5c67fb0.avif",
    gradient: "from-rose-500 to-pink-900",
    description: "Amplitud y naturaleza se combinan en esta residencia a las afueras de la urbe.",
    features: ["Piscina", "Zona de juegos", "Chimenea", "Huerta orgánica"]
  },
  {
    id: 5,
    title: "Loft Industrial en el Centro Histórico",
    price: "$180.000",
    location: "Bogotá, La Candelaria",
    beds: 2, baths: 1, sqft: 80,
    image: "/images/photo-1600596542815-ffad4c1539a9.avif",
    gradient: "from-violet-600 to-purple-900",
    description: "Loft de estilo industrial con techos altos y ladrillo visto.",
    features: ["Techos altos 4m", "Ladrillo visto", "Balcón", "Cerca de museos"]
  },
  {
    id: 6,
    title: "Casa Colonial Restaurada",
    price: "$450.000",
    location: "Cartagena, Getsemaní",
    beds: 4, baths: 3, sqft: 200,
    image: "/images/photo-1512917774080-9991f1c4c750.avif",
    gradient: "from-cyan-600 to-blue-900",
    description: "Hermosa casa colonial del siglo XVIII completamente restaurada.",
    features: ["Patio colonial", "Fuente de agua", "Azotea con vista", "Pisos de barro"]
  },
  {
    id: 7,
    title: "Apartaestudio Amoblado",
    price: "$95.000",
    location: "Bogotá, Chapinero",
    beds: 1, baths: 1, sqft: 45,
    image: "/images/7.avif",
    gradient: "from-lime-500 to-green-800",
    description: "Moderno apartaestudio completamente amoblado.",
    features: ["Amoblado", "Cocina integral", "Lavandería", "Seguridad"]
  },
  {
    id: 8,
    title: "Casa Familiar con Jardín",
    price: "$220.000",
    location: "Medellín, Envigado",
    beds: 4, baths: 2, sqft: 150,
    image: "/images/photo-1600210492486-724fe5c67fb0.avif",
    gradient: "from-red-500 to-rose-900",
    description: "Amplia casa con jardín frontal y trasero.",
    features: ["Jardín amplio", "Zona de juegos", "Cerca de colegios", "Parqueadero"]
  },
  {
    id: 9,
    title: "Oficina Ejecutiva Premium",
    price: "$250.000",
    location: "Bogotá, Cedritos",
    beds: 0, baths: 2, sqft: 90,
    image: "/images/photo-1512917774080-9991f1c4c750.avif",
    gradient: "from-teal-500 to-emerald-900",
    description: "Oficina ejecutiva en el norte de Bogotá.",
    features: ["Sala de juntas", "Recepción", "3 oficinas", "Parqueadero visitantes"]
  },
  {
    id: 10,
    title: "Cabaña de Montaña con Chimenea",
    price: "$160.000",
    location: "Santander, Barichara",
    beds: 3, baths: 2, sqft: 100,
    image: "/images/photo-1600596542815-ffad4c1539a9.avif",
    gradient: "from-sky-500 to-indigo-800",
    description: "Encantadora cabaña de montaña con vista al cañón del Chicamocha.",
    features: ["Chimenea de leña", "Terraza con hamacas", "Vista al cañón", "Cocina campestre"]
  },
  {
    id: 11,
    title: "Local Comercial Esquina",
    price: "$190.000",
    location: "Bogotá, Galerías",
    beds: 0, baths: 1, sqft: 65,
    image: "/images/7.avif",
    gradient: "from-fuchsia-500 to-purple-800",
    description: "Local comercial en esquina con alta afluencia peatonal.",
    features: ["Vitrina amplia", "Baño público", "Bodega", "Alto tráfico"]
  },
  {
    id: 12,
    title: "Casa de Playa Frente al Mar",
    price: "$550.000",
    location: "Tolú, Costa Caribe",
    beds: 5, baths: 4, sqft: 250,
    image: "/images/photo-1600210492486-724fe5c67fb0.avif",
    gradient: "from-yellow-500 to-amber-900",
    description: "Espectacular casa frente al mar con acceso directo a la playa.",
    features: ["Acceso directo a playa", "Piscina infinita", "Palapa", "Muelle privado"]
  }
];

interface FeaturedGridProps {
  onViewDetails: (id: number) => void;
  onViewAll?: () => void;
}

export default function FeaturedGrid({ onViewDetails, onViewAll }: FeaturedGridProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50/50" id="property-list">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 leading-tight"
            >
              Propiedades Destacadas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mt-2"
            >
              {PROPERTIES.length} inmuebles disponibles
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={onViewAll}
            className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <PropertyCard {...property} onViewDetails={onViewDetails} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

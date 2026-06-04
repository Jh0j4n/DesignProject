import PropertyCard, { PropertyData } from './PropertyCard';
import { motion } from 'motion/react';

const PLACEHOLDER_COLORS = [
  "from-emerald-600 to-teal-800", "from-blue-600 to-indigo-900",
  "from-amber-600 to-orange-900", "from-rose-500 to-pink-900",
  "from-violet-600 to-purple-900", "from-cyan-600 to-blue-900",
  "from-lime-500 to-green-800", "from-red-500 to-rose-900",
  "from-teal-500 to-emerald-900", "from-sky-500 to-indigo-800",
  "from-fuchsia-500 to-purple-800", "from-yellow-500 to-amber-900",
];

const IMG = (n: number) => {
  const images = [
    "/images/photo-1512917774080-9991f1c4c750.avif",
    "/images/photo-1600596542815-ffad4c1539a9.avif",
    "/images/7.avif",
    "/images/photo-1600210492486-724fe5c67fb0.avif",
  ];
  return { src: images[n % images.length], gradient: PLACEHOLDER_COLORS[n % PLACEHOLDER_COLORS.length] };
};

const PROPERTIES_DATA: (PropertyData & { gradient: string })[] = [
  {
    id: 1,
    title: "Villa Mediterránea con Vista al Mar",
    price: "$1.000.000",
    location: "S. Marta, Pozos Colorados",
    beds: 5, baths: 3, sqft: 180,
    image: IMG(0).src, gradient: IMG(0).gradient,
    description: "Espectacular villa de diseño moderno con amplios ventanales y acceso privado controlado. Cuenta con acabados de mármol y sistema de hogar inteligente.",
    features: ["Piscina infinita", "Cocina equipada", "Parqueadero privado", "Vista panorámica", "Gimnasio", "Zona BBQ", "Hogar inteligente", "Acabados de mármol"]
  },
  {
    id: 2,
    title: "Apartamento Penthouse Luxury",
    price: "$375.000",
    location: "Bogotá, El Chicó",
    beds: 3, baths: 3, sqft: 120,
    image: IMG(1).src, gradient: IMG(1).gradient,
    description: "Vistas panorámicas de la ciudad en el corazón financiero. Terraza privada y acabados industriales elegantes.",
    features: ["Terraza privada", "Vista 360°", "Parqueadero", "Seguridad 24/7", "Gimnasio", "Lobby ejecutivo"]
  },
  {
    id: 3,
    title: "Casa Bauhaus Estilo Contemporáneo",
    price: "$320.000",
    location: "Medellín, Poblado",
    beds: 3, baths: 2, sqft: 110,
    image: IMG(2).src, gradient: IMG(2).gradient,
    description: "Diseño minimalista enfocado en la funcionalidad y la luz natural. Ubicación envidiable cerca de centros gastronómicos.",
    features: ["Diseño minimalista", "Luz natural", "Jardín interior", "Parqueadero", "Cerca de gastrobares", "Acabados de lujo"]
  },
  {
    id: 4,
    title: "Residencia Campestre de Ensueño",
    price: "$300.000",
    location: "Cali, Pance",
    beds: 3, baths: 3, sqft: 180,
    image: IMG(3).src, gradient: IMG(3).gradient,
    description: "Amplitud y naturaleza se combinan en esta residencia a las afueras de la urbe. Clima ideal y espacios de recreación únicos.",
    features: ["Piscina", "Zona de juegos", "Chimenea", "Huerta orgánica", "Parqueadero 2 autos", "Vista a la montaña"]
  },
  {
    id: 5,
    title: "Loft Industrial en el Centro Histórico",
    price: "$180.000",
    location: "Bogotá, La Candelaria",
    beds: 2, baths: 1, sqft: 80,
    image: IMG(1).src, gradient: IMG(1).gradient,
    description: "Loft de estilo industrial con techos altos y ladrillo visto. Ideal para profesionales jóvenes que buscan vivir en el corazón cultural de la ciudad.",
    features: ["Techos altos 4m", "Ladrillo visto", "Balcón", "Cerca de museos", "Transporte público", "Zona gastronómica"]
  },
  {
    id: 6,
    title: "Casa Colonial Restaurada",
    price: "$450.000",
    location: "Cartagena, Getsemaní",
    beds: 4, baths: 3, sqft: 200,
    image: IMG(0).src, gradient: IMG(0).gradient,
    description: "Hermosa casa colonial del siglo XVIII completamente restaurada. Patio interior, fuente de agua y azotea con vista al mar Caribe.",
    features: ["Patio colonial", "Fuente de agua", "Azotea con vista", "Cocina restaurada", "Habitación principal con balcón", "Pisos de barro"]
  },
  {
    id: 7,
    title: "Apartaestudio Amoblado",
    price: "$95.000",
    location: "Bogotá, Chapinero",
    beds: 1, baths: 1, sqft: 45,
    image: IMG(2).src, gradient: IMG(2).gradient,
    description: "Moderno apartaestudio completamente amoblado. Perfecto para estudiantes o jóvenes profesionales que buscan independencia.",
    features: ["Amoblado", "Cocina integral", "Lavandería", "Seguridad", "Wifi incluido", "Área de trabajo"]
  },
  {
    id: 8,
    title: "Casa Familiar con Jardín",
    price: "$220.000",
    location: "Medellín, Envigado",
    beds: 4, baths: 2, sqft: 150,
    image: IMG(3).src, gradient: IMG(3).gradient,
    description: "Amplia casa con jardín frontal y trasero. Perfecta para familias con niños. Cerca de colegios y centros comerciales.",
    features: ["Jardín amplio", "Zona de juegos", "Cerca de colegios", "Parqueadero 2 autos", "Cuarto de servicio", "Chimenea"]
  },
  {
    id: 9,
    title: "Oficina Ejecutiva Premium",
    price: "$250.000",
    location: "Bogotá, Cedritos",
    beds: 0, baths: 2, sqft: 90,
    image: IMG(0).src, gradient: IMG(0).gradient,
    description: "Oficina ejecutiva en el norte de Bogotá. Sala de juntas, recepción y tres oficinas privadas. Ideal para empresas en crecimiento.",
    features: ["Sala de juntas", "Recepción", "3 oficinas", "Parqueadero visitantes", "Cafetería", "Seguridad 24h"]
  },
  {
    id: 10,
    title: "Cabaña de Montaña con Chimenea",
    price: "$160.000",
    location: "Santander, Barichara",
    beds: 3, baths: 2, sqft: 100,
    image: IMG(1).src, gradient: IMG(1).gradient,
    description: "Encantadora cabaña de montaña con vista al cañón del Chicamocha. Chimenea de leña, terraza con hamacas y entorno natural.",
    features: ["Chimenea de leña", "Terraza con hamacas", "Vista al cañón", "Cocina campestre", "Senderos ecológicos", "Horno de leña"]
  },
  {
    id: 11,
    title: "Local Comercial Esquina",
    price: "$190.000",
    location: "Bogotá, Galerías",
    beds: 0, baths: 1, sqft: 65,
    image: IMG(2).src, gradient: IMG(2).gradient,
    description: "Local comercial en esquina con alta afluencia peatonal y vehicular. Ideal para restaurante, tienda o servicios.",
    features: ["Vitrina amplia", "Baño público", "Bodega", "Aire acondicionado", "Alto tráfico", "Zona de descarga"]
  },
  {
    id: 12,
    title: "Casa de Playa Frente al Mar",
    price: "$550.000",
    location: "Tolú, Costa Caribe",
    beds: 5, baths: 4, sqft: 250,
    image: IMG(3).src, gradient: IMG(3).gradient,
    description: "Espectacular casa frente al mar con acceso directo a la playa. Piscina infinita, terraza con palapa y hamacas.",
    features: ["Acceso directo a playa", "Piscina infinita", "Palapa", "Muelle privado", "Cuarto de huéspedes", "Área de fogata"]
  }
];

export const PROPERTIES: PropertyData[] = PROPERTIES_DATA;

interface FeaturedGridProps {
  onViewDetails: (id: number) => void;
  onViewAll?: () => void;
}

export default function FeaturedGrid({ onViewDetails, onViewAll }: FeaturedGridProps) {
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
            onClick={onViewAll || (() => onViewDetails(PROPERTIES[0].id))}
            className="inline-flex items-center gap-3 text-primary font-display font-black text-xl hover:translate-x-2 transition-transform"
          >
            Ver catálogo completo <span className="w-12 h-[2px] bg-primary"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

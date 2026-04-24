import { ArrowLeft, Share2, Heart, Bed, Bath, Square, MapPin, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyData } from './PropertyCard';
import ContactForm from './ContactForm';

interface PropertyDetailProps {
  property: PropertyData;
  onBack: () => void;
}

export default function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-primary font-bold group transition-colors"
          >
            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            Volver a buscar propiedades
          </button>
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-white hover:shadow-md transition-all text-gray-600">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-white hover:shadow-md transition-all text-gray-600 hover:text-error">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery Preview */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-12 group relative aspect-[16/9]">
              <img 
                src={property.image} 
                className="w-full h-full object-cover"
                alt={property.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Title & Stats */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  Exclusividad Registrada
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 text-sm font-bold">
                  <MapPin className="w-4 h-4 text-primary" />
                  {property.location}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
                {property.title}
              </h1>
              <p className="text-3xl font-display font-black text-primary mb-12">{property.price}</p>

              {/* Main Attributes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
                  <Bed className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Habitaciones</span>
                  <span className="text-xl font-display font-bold">{property.beds}</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
                  <Bath className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Baños completos</span>
                  <span className="text-xl font-display font-bold">{property.baths}</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
                  <Square className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Área total</span>
                  <span className="text-xl font-display font-bold">{property.sqft} m²</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Seguridad</span>
                  <span className="text-xl font-display font-bold">24/7</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <h3 className="text-2xl font-display font-bold mb-4">Sobre esta propiedad</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description || "Esta residencia representa la máxima expresión del confort y diseño contemporáneo. Ubicada en una de las zonas más privilegiadas, ofrece espacios amplios, iluminación natural excepcional y acabados de alta gama en cada rincón. Ideal para quienes buscan un estilo de vida sofisticado y tranquilo."}
                </p>
              </div>

              {/* Features List */}
              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-2xl font-display font-bold mb-8">Características principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  {(property.features || ["Piscina infinita", "Cocina equipada", "Parqueadero privado", "Vista panorámica", "Gimnasio", "Zona BBQ"]).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Oriented to Action */}
          <div className="lg:sticky lg:top-32 h-fit">
            <ContactForm propertyName={property.title} />
            
            <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <img src="https://i.pravatar.cc/150?u=diaz" alt="Asesor" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ricardo Díaz</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Asesor Senior</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4 italic">
                "Mi compromiso es ayudarte a encontrar el hogar que sueñas con total seguridad legal."
              </p>
              <div className="bg-white p-3 rounded-2xl flex items-center justify-between text-sm font-bold text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                <span>WhatsApp Directo</span>
                <Check className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

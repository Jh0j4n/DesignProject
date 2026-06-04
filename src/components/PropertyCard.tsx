import { Bed, Bath, Square, Heart, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useRef, useEffect } from 'react';

export interface PropertyData {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description?: string;
  features?: string[];
  gradient?: string;
}

interface PropertyCardProps extends PropertyData {
  onViewDetails: (id: number) => void;
}

export default function PropertyCard({ id, title, price, location, beds, baths, sqft, image, gradient, onViewDetails }: PropertyCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImgReady = useCallback((img: HTMLImageElement) => {
    img.style.opacity = '1';
    img.style.display = 'block';
    containerRef.current?.classList.remove('img-skeleton');
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) {
      handleImgReady(imgRef.current);
    }
  }, [handleImgReady]);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Media Header */}
      <div ref={containerRef} className="relative aspect-[4/3] overflow-hidden bg-gray-100 img-skeleton">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient || 'from-gray-300 to-gray-400'}`}></div>
        <img
          ref={imgRef}
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-0 relative z-10"
          referrerPolicy="no-referrer"
          onLoad={(e) => handleImgReady(e.target as HTMLImageElement)}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            containerRef.current?.classList.remove('img-skeleton');
          }}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Exclusivo
          </span>
        </div>
        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white hover:bg-white hover:text-error transition-all hover:scale-110">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs font-semibold uppercase tracking-tight">{location}</span>
          </div>
        </div>
        
        <p className="text-2xl font-display font-extrabold text-gray-900 mb-6">{price}</p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3 py-4 border-t border-gray-50 mb-6 mt-auto">
          <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50">
            <Bed className="w-4 h-4 text-primary mb-1" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Hab</span>
            <span className="text-xs font-bold font-display">{beds}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50">
            <Bath className="w-4 h-4 text-primary mb-1" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Baños</span>
            <span className="text-xs font-bold font-display">{baths}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50">
            <Square className="w-4 h-4 text-primary mb-1" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Área</span>
            <span className="text-xs font-bold font-display">{sqft} m²</span>
          </div>
        </div>

        <button 
          onClick={() => onViewDetails(id)}
          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm tracking-wide border-2 border-transparent hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          Ver detalles de la propiedad
        </button>
      </div>
    </motion.div>
  );
}

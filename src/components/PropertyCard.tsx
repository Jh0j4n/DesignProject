import { Bed, Bath, Square, Heart, MapPin, ArrowRight } from 'lucide-react';
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
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image header */}
      <div ref={containerRef} className="relative aspect-[4/3] overflow-hidden bg-gray-100 img-skeleton">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient || 'from-gray-300 to-gray-400'}`} />
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
        {/* Price overlay */}
        <div className="absolute top-3 left-3 bg-primary text-white font-display font-bold text-sm px-3 py-1.5 rounded-lg shadow-lg z-20">
          {price}
        </div>
        <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg text-white hover:bg-white hover:text-error transition-all hover:scale-110 z-20">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-display font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-[11px] font-semibold">{location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3 border-t border-gray-50 mt-auto">
          {beds > 0 && (
            <div className="flex items-center gap-1.5 text-gray-500">
              <Bed className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">{beds}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-gray-500">
            <Bath className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold">{baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Square className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold">{sqft} m²</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(id)}
          className="w-full bg-gray-900 hover:bg-primary text-white py-3 rounded-lg font-bold text-xs tracking-wide transition-all active:scale-95 flex items-center justify-center gap-2 mt-3"
        >
          Ver detalle <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

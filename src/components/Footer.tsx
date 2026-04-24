import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, QrCode } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Contacto info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>contacto@inmobiliariadiaz.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Calle 100 #7-33, Bogotá</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+57 (601) 345 6789</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Links rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Explorar propiedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compra</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compra, arrienda o vende</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Featured Mini */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Propiedades destacada</h4>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1600607687940-477a2939e853?auto=format&fit=crop&q=80&w=400" 
                  alt="Property" 
                  className="w-full h-32 object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm font-semibold text-gray-200">Casa Moderna en El Poblado</p>
              <p className="text-xs text-gray-500">3 hab / 2 baños / 110 m2</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center">
            <div className="bg-white p-3 rounded-xl mb-4">
              <QrCode size={120} className="text-gray-900" />
            </div>
            <p className="text-xs text-center text-gray-400 leading-relaxed">
              Escanea para llevar tu búsqueda en el móvil
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">Copyright © {new Date().getFullYear()} Inmobiliaria Díaz</p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Políticas de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

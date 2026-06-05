import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, QrCode, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-display font-bold">Inmobiliaria Díaz Ltda.</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empresa líder en el sector inmobiliario colombiano con más de 22 años de experiencia ofreciendo soluciones en compra, venta y arriendo de inmuebles.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter/X">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-5">Enlaces rápidos</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Información General</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Productos y Servicios</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Requisitos y Documentos</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Listado de Inmuebles</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contáctenos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-5">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p>6012216809</p>
                  <p>3138686649</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>contacto@inmobiliariadiaz.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center">
            <div className="bg-white p-2 rounded-xl mb-3">
              <QrCode size={100} className="text-gray-900" />
            </div>
            <p className="text-[11px] text-center text-gray-400 leading-relaxed">
              Escanea para visitar nuestro sitio desde tu móvil
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Inmobiliaria Díaz Ltda. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Políticas de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

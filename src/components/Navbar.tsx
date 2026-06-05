import { Home, Phone, Menu, X, LogIn, CreditCard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

type View = 'home' | 'list' | 'contact' | 'about' | 'services' | 'faq' | 'blog' | 'tools';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: string;
}

const navItems: { view: View; label: string }[] = [
  { view: 'home', label: 'Inicio' },
  { view: 'list', label: 'Listado de Inmuebles' },
  { view: 'services', label: 'Productos y Servicios' },
  { view: 'about', label: 'Información General' },
  { view: 'faq', label: 'Requisitos y Documentos' },
  { view: 'contact', label: 'Contáctenos' },
];

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const isHomeTransparent = !isScrolled && currentView === 'home';
  const textColor = isHomeTransparent ? 'text-white' : 'text-gray-700';

  const activeStyle = (view: string) => {
    const isActive = currentView === view;
    const activeText = isHomeTransparent ? 'text-white' : 'text-gray-900';
    const activeBorder = isHomeTransparent ? 'border-white' : 'border-gray-900';
    const base = `transition-all text-xs tracking-wide px-3 py-2 border-b-2`;
    if (isActive) {
      return `${base} ${activeText} font-bold ${activeBorder}`;
    }
    return `${base} ${textColor} font-medium border-transparent hover:border-gray-300`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar: phones + login */}
      <div className="hidden md:flex bg-black/80 backdrop-blur-sm text-white/80 text-[11px] font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex items-center justify-between py-1.5">
          <div className="flex items-center gap-6">
            <a href="tel:+5712216809" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> 6012216809
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+573138686649" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> 3138686649
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <LogIn className="w-3 h-3" /> Ingresar
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <CreditCard className="w-3 h-3" /> Pagos en línea
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className={`transition-all duration-300 ${isHomeTransparent ? 'bg-black/15 backdrop-blur-sm' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group py-3"
            onClick={() => handleNavClick('home')}
          >
            <div className={`p-2 rounded-xl group-hover:scale-105 transition-transform ${isHomeTransparent ? 'bg-white/20' : 'bg-primary'}`}>
              <Home className={`w-6 h-6 ${isHomeTransparent ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-xl ${isHomeTransparent ? 'text-white' : 'text-gray-900'}`}>Inmobiliaria Díaz</span>
              <span className={`font-display text-[10px] font-semibold tracking-widest uppercase ${isHomeTransparent ? 'text-white/60' : 'text-gray-400'}`}>Ltda.</span>
            </div>
          </div>

          <div className={`hidden md:flex items-stretch gap-1 ${textColor}`}>
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={activeStyle(item.view)}
              >
                {item.label}
                {(item.view === 'home' || item.view === 'list') && (
                  <ChevronDown className="w-3 h-3 inline ml-0.5 opacity-50" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg bg-gray-100/10 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} /> : <Menu className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4"
          >
            {/* Mobile phones */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <a href="tel:+5712216809" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary">
                <Phone className="w-4 h-4" /> 6012216809
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:+573138686649" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary">
                <Phone className="w-4 h-4" /> 3138686649
              </a>
            </div>
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left py-3 text-lg font-semibold border-b border-gray-50 ${currentView === item.view ? 'text-primary' : 'text-gray-800'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-4 pt-2">
              <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                <LogIn className="w-4 h-4" /> Ingresar
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                <CreditCard className="w-4 h-4" /> Pagos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

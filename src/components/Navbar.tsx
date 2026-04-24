import { Home, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'list' | 'contact') => void;
  currentView: string;
}

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

  const handleNavClick = (view: 'home' | 'list' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Home className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-xl ${!isScrolled && currentView === 'home' ? 'md:text-white' : 'text-gray-900'}`}>Inmobiliaria Díaz</span>
            <span className={`font-display text-xs font-semibold tracking-widest uppercase ${!isScrolled && currentView === 'home' ? 'md:text-white/60' : 'text-gray-400'}`}>Ltda.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-10 ${!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-700'}`}>
          <button 
            onClick={() => handleNavClick('list')}
            className={`font-medium transition-all hover:text-primary-light ${currentView === 'list' ? 'text-primary border-b-2 border-primary' : ''}`}
          >
            Explorar propiedades
          </button>
          <button 
            onClick={() => handleNavClick('list')}
            className="font-medium transition-all hover:text-primary-light"
          >
            Compra, arrienda o vende
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`flex items-center gap-2 font-medium transition-all hover:text-primary-light ${currentView === 'contact' ? 'text-primary' : ''}`}
          >
            <Phone className="w-4 h-4" />
            Hablar con un asesor
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-lg bg-gray-100/10 backdrop-blur-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} /> : <Menu className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-6"
          >
            <button onClick={() => handleNavClick('list')} className="text-left py-2 text-lg font-semibold text-gray-800 border-b border-gray-50">Explorar propiedades</button>
            <button onClick={() => handleNavClick('list')} className="text-left py-2 text-lg font-semibold text-gray-800 border-b border-gray-50">Compra, arrienda o vende</button>
            <button onClick={() => handleNavClick('contact')} className="flex items-center gap-3 bg-primary text-white p-4 rounded-xl font-bold justify-center">
              <Phone className="w-5 h-5" />
              Hablar con un asesor
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

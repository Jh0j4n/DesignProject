import { Home, Phone, Menu, X, Building2, Users, HelpCircle, BookOpen, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

type View = 'home' | 'list' | 'contact' | 'about' | 'services' | 'faq' | 'blog' | 'tools';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: string;
}

const navItems: { view: View; label: string; icon?: typeof Home }[] = [
  { view: 'home', label: 'Inicio' },
  { view: 'list', label: 'Propiedades', icon: Building2 },
  { view: 'services', label: 'Servicios' },
  { view: 'about', label: 'Nosotros', icon: Users },
  { view: 'blog', label: 'Blog', icon: BookOpen },
  { view: 'faq', label: 'FAQ', icon: HelpCircle },
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

  const textColor = !isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-700';
  const activeStyle = (view: string) =>
    currentView === view ? 'text-primary font-bold' : `${textColor} font-medium`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-sm py-3' : 'bg-black/15 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Home className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-xl ${!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'}`}>Inmobiliaria Díaz</span>
            <span className={`font-display text-[10px] font-semibold tracking-widest uppercase ${!isScrolled && currentView === 'home' ? 'text-white/60' : 'text-gray-400'}`}>Ltda.</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
          {navItems.slice(1).map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`${activeStyle(item.view)} transition-all hover:text-primary-light text-sm tracking-wide`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" />
            Contacto
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-gray-100/10 backdrop-blur-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} /> : <Menu className={!isScrolled && currentView === 'home' ? 'text-white' : 'text-gray-900'} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left py-3 text-lg font-semibold border-b border-gray-50 ${currentView === item.view ? 'text-primary' : 'text-gray-800'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-3 bg-primary text-white p-4 rounded-xl font-bold justify-center mt-2"
            >
              <Phone className="w-5 h-5" />
              Contactar ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

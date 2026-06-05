import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import PropertyFilters from './components/PropertyFilters';
import FeaturedGrid, { PROPERTIES } from './components/FeaturedGrid';
import PropertyDetail from './components/PropertyDetail';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';
import Footer from './components/Footer';
import StatsCounter from './components/StatsCounter';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import FAQView from './components/FAQView';
import BlogView from './components/BlogView';
import ToolsView from './components/ToolsView';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import React from 'react';

type View = 'home' | 'list' | 'detail' | 'contact' | 'about' | 'services' | 'faq' | 'blog' | 'tools';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const mainRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [currentView, selectedPropertyId]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedPropertyId(null);
  };

  const handleViewDetails = (id: number) => {
    setSelectedPropertyId(id);
    setCurrentView('detail');
  };

  const selectedProperty = PROPERTIES.find(p => p.id === selectedPropertyId);

  const renderHome = () => (
    <>
      <HeroSlider
        onExplore={() => handleNavigate('list')}
        onContact={() => handleNavigate('contact')}
      />
      <PropertyFilters onSearch={() => handleNavigate('list')} />
      <FeaturedGrid onViewDetails={handleViewDetails} onViewAll={() => handleNavigate('list')} />
      <Partners />
      <StatsCounter />
      <Testimonials />
      <CTABanner onContact={() => handleNavigate('contact')} />
    </>
  );

  return (
    <div className="relative min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main ref={mainRef} tabIndex={-1} id="main-content" className="flex-grow outline-none">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {renderHome()}
            </motion.div>
          )}

          {currentView === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pt-24"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <header className="mb-12">
                  <span className="inline-block bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                    Catálogo {PROPERTIES.length} propiedades
                  </span>
                  <h1 className="text-5xl md:text-6xl font-display font-extrabold text-gray-900 mb-4 tracking-tighter">Nuestras Propiedades</h1>
                  <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
                    Explora nuestra selección exclusiva de inmuebles residenciales, comerciales y de inversión, todos validados legalmente para tu tranquilidad.
                  </p>
                </header>
                <PropertyFilters onSearch={() => {}} noOffset />
                <FeaturedGrid onViewDetails={handleViewDetails} onViewAll={() => handleNavigate('list')} />
              </div>
            </motion.div>
          )}

          {currentView === 'detail' && selectedProperty && (
            <PropertyDetail
              property={selectedProperty}
              onBack={() => setCurrentView('list')}
            />
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="pt-40 pb-24 px-6"
            >
              <div className="max-w-3xl mx-auto">
                <ContactForm />
              </div>
            </motion.div>
          )}

          {currentView === 'about' && <AboutView />}
          {currentView === 'services' && <ServicesView onContact={() => handleNavigate('contact')} />}
          {currentView === 'faq' && <FAQView />}
          {currentView === 'blog' && <BlogView />}
          {currentView === 'tools' && <ToolsView />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}


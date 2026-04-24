import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid, { PROPERTIES } from './components/FeaturedGrid';
import PropertyDetail from './components/PropertyDetail';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

type View = 'home' | 'list' | 'detail' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero 
                onExplore={() => handleNavigate('list')} 
                onContact={() => handleNavigate('contact')}
              />
              <Partners />
              <FeaturedGrid onViewDetails={handleViewDetails} />
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
              <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
                <header className="mb-12">
                  <h1 className="text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tighter">Nuestras Propiedades</h1>
                  <p className="text-xl text-gray-500 font-medium max-w-2xl">
                    Explora nuestra selección exclusiva de inmuebles validados legalmente para tu tranquilidad.
                  </p>
                </header>
                <div className="grid grid-cols-1 gap-12">
                  <FeaturedGrid onViewDetails={handleViewDetails} />
                </div>
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
        </AnimatePresence>
      </main>

      {/* Trust Section */}
      {currentView === 'home' && (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">¿Por qué confiar en Inmobiliaria Díaz Ltda.?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight">Seguridad Legal Total</h4>
                    <p className="text-white/70 font-medium">Todas nuestras propiedades pasan por un riguroso estudio de títulos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight">Acompañamiento Experto</h4>
                    <p className="text-white/70 font-medium">Te guiamos en cada firma, desde la promesa hasta la escritura.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/10">
                <p className="text-2xl font-medium leading-relaxed italic mb-8">
                  "Sencillamente impecable. Me guiaron paso a paso y sentí que mi inversión estaba en las mejores manos."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-400"></div>
                  <div>
                    <h5 className="font-bold text-lg">Mauricio Gómez</h5>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Cliente Satisfecho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
  );
}


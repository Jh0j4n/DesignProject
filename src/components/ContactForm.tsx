import { Send, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

interface ContactFormProps {
  propertyName?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ propertyName, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: propertyName ? `Hola, me interesa la propiedad: ${propertyName}.` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Por favor, completa tu nombre antes de continuar.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Este número de contacto es necesario para que podamos llamarte.";
    } else if (!/^\+?[\d\s-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Este número no parece correcto. Verifica la información por favor.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Necesitamos tu correo para enviarte la información detallada.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo ingresado no es válido. Revísalo e inténtalo nuevamente.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  if (isDone) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-success/20 text-center flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">¡Tu solicitud fue enviada!</h3>
        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
          Una persona asesora revisará tu interés y se pondrá en contacto contigo pronto para brindarte toda la información que necesitas.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all"
        >
          Volver al inicio <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
      <div className="mb-8">
        <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Hablemos hoy</h3>
        <p className="text-gray-500 font-medium leading-relaxed">
          Usa este formulario para conectar con nuestro equipo. Te responderemos lo antes posible con soluciones claras.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1.5 focus-within:text-primary transition-colors">
          <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-widest px-1">Tu nombre completo</label>
          <input
            id="form-name"
            type="text"
            placeholder="Ej: Juan Pérez"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full p-4 bg-gray-50/50 rounded-2xl border-2 transition-all outline-none ${errors.name ? 'border-error/30 focus:border-error' : 'border-transparent focus:border-primary focus:bg-white'}`}
          />
          {errors.name && (
            <motion.p id="name-error" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} role="alert" className="text-xs font-bold text-error mt-1.5 flex items-center gap-1">
              <Info className="w-3 h-3" /> {errors.name}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-widest px-1">Número de contacto</label>
            <input
              id="form-phone"
              type="tel"
              placeholder="+57 300 000 0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full p-4 bg-gray-50/50 rounded-2xl border-2 transition-all outline-none ${errors.phone ? 'border-error/30 focus:border-error' : 'border-transparent focus:border-primary focus:bg-white'}`}
            />
            {errors.phone && (
              <motion.p id="phone-error" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} role="alert" className="text-xs font-bold text-error mt-1.5 flex items-center gap-1">
                <Info className="w-3 h-3" /> {errors.phone}
              </motion.p>
            )}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-widest px-1">Correo electrónico</label>
            <input
              id="form-email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full p-4 bg-gray-50/50 rounded-2xl border-2 transition-all outline-none ${errors.email ? 'border-error/30 focus:border-error' : 'border-transparent focus:border-primary focus:bg-white'}`}
            />
            {errors.email && (
              <motion.p id="email-error" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} role="alert" className="text-xs font-bold text-error mt-1.5 flex items-center gap-1">
                <Info className="w-3 h-3" /> {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest px-1">¿En qué podemos ayudarte?</label>
          <textarea
            rows={4}
            placeholder="Escribe aquí tus dudas o detalles sobre la propiedad que te interesa..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full p-4 bg-gray-50/50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none resize-none`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/20 group"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Contactar a una asesora ahora mismo</span>
            </>
          )}
        </button>
        
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Al enviar aceptas ser contactado por nuestro equipo comercial
        </p>
      </form>
    </div>
  );
}

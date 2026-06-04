import { motion } from 'motion/react';
import { useState } from 'react';
import { Calculator, TrendingUp, FileText, ArrowRight, RefreshCw } from 'lucide-react';

function MortgageCalculator() {
  const [amount, setAmount] = useState('300000000');
  const [rate, setRate] = useState('10.5');
  const [years, setYears] = useState('20');
  const [result, setResult] = useState<{ monthly: number; total: number; interest: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (p > 0 && r > 0 && n > 0) {
      const monthly = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = monthly * n;
      setResult({
        monthly: Math.round(monthly),
        total: Math.round(total),
        interest: Math.round(total - p),
      });
    }
  };

  const formatCurrency = (n: number) =>
    '$ ' + n.toLocaleString('es-CO');

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-md border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900">Calculadora de Crédito Hipotecario</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Valor del inmueble (COP)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Tasa de interés anual (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Plazo (años)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group"
      >
        <RefreshCw className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        Calcular cuota mensual
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-primary/5 p-5 rounded-2xl text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Cuota mensual</div>
            <div className="text-2xl font-display font-extrabold text-gray-900">{formatCurrency(result.monthly)}</div>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Total a pagar</div>
            <div className="text-2xl font-display font-extrabold text-gray-900">{formatCurrency(result.total)}</div>
          </div>
          <div className="bg-amber-50 p-5 rounded-2xl text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">Total intereses</div>
            <div className="text-2xl font-display font-extrabold text-amber-700">{formatCurrency(result.interest)}</div>
          </div>
        </motion.div>
      )}

      <p className="mt-6 text-[10px] text-gray-400 font-medium text-center">
        * Cálculo estimado con tasa fija. Consulta a tu banco para una cotización exacta.
      </p>
    </div>
  );
}

function ValuationTool() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-md border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900">Herramienta de Avalúo</h3>
      </div>
      <p className="text-gray-500 leading-relaxed mb-6">
        ¿No sabes cuánto vale tu propiedad? Nuestro equipo de analistas de mercado realiza una valoración
        personalizada sin costo y sin compromiso. Recibe un informe detallado en 48 horas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Tipo de inmueble</label>
          <select className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold text-gray-700">
            <option>Apartamento</option>
            <option>Casa</option>
            <option>Local comercial</option>
            <option>Oficina</option>
            <option>Terreno</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Ciudad</label>
          <select className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold text-gray-700">
            <option>Bogotá</option>
            <option>Medellín</option>
            <option>Cali</option>
            <option>Cartagena</option>
            <option>Barranquilla</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Área (m²)</label>
          <input type="number" placeholder="Ej: 80" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold" />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Estrato</label>
          <select className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-bold text-gray-700">
            <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
          </select>
        </div>
      </div>
      <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group">
        Solicitar avalúo gratis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default function ToolsView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20"
    >
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">
              Herramientas
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
              Calcula, cotiza y decide con confianza
            </h1>
            <p className="text-lg text-emerald-200 leading-relaxed">
              Usa nuestras herramientas gratuitas para tomar decisiones informadas sobre tu próximo paso inmobiliario.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MortgageCalculator />
            <ValuationTool />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full text-primary text-sm font-bold mb-8">
            <FileText className="w-5 h-5" />
            Descarga nuestra guía gratuita
          </div>
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">¿Primera vivienda?</h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto mb-8">
            Descarga nuestra guía paso a paso con todo lo que necesitas saber para comprar tu primer inmueble en Colombia.
          </p>
          <button className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all group">
            Descargar guía gratuita <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </motion.div>
  );
}

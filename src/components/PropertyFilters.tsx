import { Search, ChevronDown } from 'lucide-react';

interface PropertyFiltersProps {
  onSearch: () => void;
  noOffset?: boolean;
}

export default function PropertyFilters({ onSearch, noOffset }: PropertyFiltersProps) {
  return (
    <div className={`relative ${noOffset ? '' : '-mt-10'} z-20 max-w-7xl mx-auto px-6 md:px-8 mb-10`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 md:p-3 flex flex-wrap items-end gap-2">
        <div className="flex-1 min-w-[140px]">
          <label className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block mb-1 ml-1">Tipo</label>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-sm font-semibold text-gray-700">Todos los tipos</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block mb-1 ml-1">Ubicación</label>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-sm font-semibold text-gray-700">Todas las ciudades</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block mb-1 ml-1">Precio</label>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-sm font-semibold text-gray-700">Cualquier precio</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block mb-1 ml-1">Dormitorios</label>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-sm font-semibold text-gray-700">Cualquier</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <button onClick={onSearch} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 min-w-[120px]">
          <Search className="w-4 h-4" />
          Buscar
        </button>
      </div>
    </div>
  );
}

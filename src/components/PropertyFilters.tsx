import { Search, ChevronDown } from 'lucide-react';

export interface FiltersState {
  type: string;
  location: string;
  priceRange: string;
  bedrooms: string;
}

interface PropertyFiltersProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  onSearch: () => void;
  noOffset?: boolean;
}

const TYPES = ['Todos los tipos', 'Casa', 'Apartamento', 'Oficina', 'Local', 'Loft'];
const LOCATIONS = ['Todas las ciudades', 'Bogotá', 'Medellín', 'Cali', 'Cartagena', 'Santa Marta', 'Santander', 'Tolú'];
const PRICES = ['Cualquier precio', 'Hasta $200.000', '$200.000 – $400.000', 'Más de $400.000'];
const PRICE_VALS = ['', '0-200', '200-400', '400-999999'];
const BEDS = ['Cualquier', '0', '1', '2', '3', '4', '5+'];
const BEDS_VALS = ['', '0', '1', '2', '3', '4', '5'];

function Selector({ label, id, value, onChange, options, values }: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  options: string[]; values: string[];
}) {
  const display = options[values.indexOf(value)] || options[0];
  return (
    <div className="flex-1 min-w-[130px] relative">
      <label className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block mb-1 ml-1" htmlFor={id}>{label}</label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full bg-gray-50 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-700 cursor-pointer border-0 appearance-none absolute inset-0 opacity-0 z-10"
        >
          {options.map((o, i) => <option key={o} value={values[i]}>{o}</option>)}
        </select>
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 pointer-events-none">
          <span className="text-sm font-semibold text-gray-700">{display}</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default function PropertyFilters({ filters, onChange, onSearch, noOffset }: PropertyFiltersProps) {
  const upd = (key: keyof FiltersState, val: string) => onChange({ ...filters, [key]: val });

  return (
    <div className={`relative ${noOffset ? '' : '-mt-10'} z-20 max-w-7xl mx-auto px-6 md:px-8 mb-10`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 md:p-3 flex flex-wrap items-end gap-2">
        <Selector label="Tipo" id="filter-type" value={filters.type} onChange={v => upd('type', v)}
          options={TYPES} values={TYPES.map(t => t === 'Todos los tipos' ? '' : t)} />
        <Selector label="Ubicación" id="filter-location" value={filters.location} onChange={v => upd('location', v)}
          options={LOCATIONS} values={LOCATIONS.map(l => l === 'Todas las ciudades' ? '' : l)} />
        <Selector label="Precio" id="filter-price" value={filters.priceRange} onChange={v => upd('priceRange', v)}
          options={PRICES} values={PRICE_VALS} />
        <Selector label="Dormitorios" id="filter-beds" value={filters.bedrooms} onChange={v => upd('bedrooms', v)}
          options={BEDS} values={BEDS_VALS} />
        <button onClick={onSearch} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 min-w-[100px]">
          <Search className="w-4 h-4" />
          Buscar
        </button>
      </div>
    </div>
  );
}

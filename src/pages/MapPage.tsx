import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { locations, typeColors, typeLabels } from '@/data/locations';

const rosneftStations = [
  { id: 'r1', name: 'АЗС Роснефть', address: 'г. Краснодар, ул. Ставропольская, 222', lat: 45.02, lng: 38.97, services: ['Кафе', 'Парковка', 'Wi-Fi', 'Санузел'] },
  { id: 'r2', name: 'АЗС Роснефть', address: 'г. Новороссийск, ш. Анапское, 1', lat: 44.72, lng: 37.76, services: ['Кафе', 'Парковка', 'Санузел'] },
  { id: 'r3', name: 'АЗС Роснефть', address: 'г. Туапсе, ул. Сочинская, 43', lat: 44.10, lng: 39.07, services: ['Кафе', 'Парковка', 'Магазин', 'Санузел'] },
  { id: 'r4', name: 'АЗС Роснефть', address: 'г. Сочи, ш. Курортное, 98', lat: 43.59, lng: 39.73, services: ['Кафе', 'Парковка', 'Wi-Fi', 'Санузел'] },
];

export default function MapPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'literary' | 'cinema' | 'museum'>('all');
  const [showStations, setShowStations] = useState(true);

  const filtered = filter === 'all' ? locations : locations.filter(l => l.type === filter);
  const selectedLoc = selected ? locations.find(l => l.id === selected) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-deep to-ocean-mid pt-20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
            🗺️ Интерактивный маршрут
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Маршрут «Море искусства»
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            847 км культурного путешествия по Черноморскому побережью
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(['all', 'literary', 'cinema', 'museum'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-white text-ocean-deep shadow-lg'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {f === 'all' ? '🌊 Все локации' : f === 'literary' ? '📖 Литература' : f === 'cinema' ? '🎬 Кино' : '🏛️ Музеи'}
            </button>
          ))}
          <button
            onClick={() => setShowStations(!showStations)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              showStations ? 'bg-red-500 text-white' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            ⛽ АЗС Роснефть
          </button>
        </div>

        {/* Map SVG */}
        <div className="glass-card-dark rounded-3xl p-4 mb-8 overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-sea-900 to-ocean-deep">
              {/* Decorative SVG map */}
              <svg viewBox="0 0 900 506" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a2540" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Sea background */}
                <rect width="900" height="506" fill="url(#seaGrad)" />

                {/* Decorative sea waves */}
                <ellipse cx="450" cy="380" rx="500" ry="200" fill="rgba(14,165,233,0.08)" />
                <ellipse cx="450" cy="420" rx="500" ry="160" fill="rgba(14,165,233,0.06)" />

                {/* Land shape (Krasnodar region simplified) */}
                <path d="M50,80 L200,60 L350,50 L500,70 L600,90 L700,80 L800,100 L850,140 L820,200 L780,240 L750,280 L700,300 L650,320 L600,340 L550,360 L500,370 L450,360 L400,350 L350,340 L300,360 L250,380 L200,370 L150,340 L100,300 L70,260 L50,200 Z"
                  fill="rgba(34, 120, 80, 0.2)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Route line */}
                <polyline
                  points="120,180 180,170 240,190 280,200 320,185 360,220 400,250 430,270 460,280 500,290 530,300 560,295 580,320 600,340"
                  className="route-line"
                  strokeDasharray="8,4"
                />

                {/* Location points */}
                {filtered.map((loc, i) => {
                  const x = 80 + (i / 11) * 760;
                  const y = 150 + Math.sin(i * 0.8) * 80 + (i > 6 ? 60 : 0);
                  return (
                    <g key={loc.id} onClick={() => setSelected(selected === loc.id ? null : loc.id)} style={{ cursor: 'pointer' }}>
                      <circle cx={x} cy={y} r={selected === loc.id ? 18 : 14} fill={
                        loc.type === 'cinema' ? '#a855f7' : loc.type === 'literary' ? '#f59e0b' : '#14b8a6'
                      } filter="url(#glow)" opacity={0.9} />
                      <circle cx={x} cy={y} r={selected === loc.id ? 10 : 7} fill="white" />
                      <text x={x} y={y + 28} textAnchor="middle" fill="white" fontSize="9" fontFamily="Golos Text" fontWeight="600">
                        {i + 1}
                      </text>
                      {selected === loc.id && (
                        <rect x={x - 70} y={y - 50} width="140" height="30" rx="6" fill="rgba(10,37,64,0.9)" />
                      )}
                      {selected === loc.id && (
                        <text x={x} y={y - 30} textAnchor="middle" fill="white" fontSize="8" fontFamily="Golos Text">
                          {loc.name.length > 20 ? loc.name.slice(0, 20) + '…' : loc.name}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* AZS stations */}
                {showStations && rosneftStations.map((s, i) => {
                  const x = 150 + i * 200;
                  const y = 380;
                  return (
                    <g key={s.id}>
                      <circle cx={x} cy={y} r={10} fill="#ef4444" opacity={0.85} />
                      <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="10">⛽</text>
                    </g>
                  );
                })}

                {/* Legend */}
                <g>
                  <rect x="20" y="440" width="250" height="56" rx="8" fill="rgba(10,37,64,0.85)" />
                  <circle cx="40" cy="455" r="6" fill="#f59e0b" />
                  <text x="52" y="459" fill="white" fontSize="10" fontFamily="Golos Text">Литература</text>
                  <circle cx="40" cy="473" r="6" fill="#a855f7" />
                  <text x="52" y="477" fill="white" fontSize="10" fontFamily="Golos Text">Кино</text>
                  <circle cx="130" cy="455" r="6" fill="#14b8a6" />
                  <text x="142" y="459" fill="white" fontSize="10" fontFamily="Golos Text">Музей</text>
                  <circle cx="130" cy="473" r="6" fill="#ef4444" />
                  <text x="142" y="477" fill="white" fontSize="10" fontFamily="Golos Text">АЗС Роснефть</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Selected location info */}
        {selectedLoc && (
          <div className="glass-card-dark rounded-2xl p-6 mb-8 border border-white/10 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={selectedLoc.image} alt={selectedLoc.name} className="w-full md:w-48 h-36 object-cover rounded-xl flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[selectedLoc.type]}`}>
                    {typeLabels[selectedLoc.type]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-300">
                    +{selectedLoc.points} баллов
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{selectedLoc.name}</h3>
                <div className="text-sea-300 text-sm mb-3">{selectedLoc.city}</div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{selectedLoc.description}</p>
                <div className="flex gap-3">
                  <Link to={`/location/${selectedLoc.id}`} className="btn-primary px-5 py-2 text-sm">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </Link>
                  <button onClick={() => setSelected(null)} className="px-5 py-2 rounded-xl text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 transition-colors">
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Locations list */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((loc, i) => (
            <div
              key={loc.id}
              className={`glass-card-dark rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                selected === loc.id ? 'border-sea-400 shadow-lg shadow-sea-500/20' : 'border-white/10 hover:border-white/30'
              }`}
              onClick={() => setSelected(selected === loc.id ? null : loc.id)}
            >
              <div className="flex gap-4 p-4">
                <div className="relative flex-shrink-0">
                  <img src={loc.image} alt={loc.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full sea-gradient flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[loc.type]}`}>
                      {typeLabels[loc.type]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-tight mb-1 line-clamp-2">{loc.name}</h3>
                  <div className="text-sea-300 text-xs mb-2">{loc.city}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 text-xs font-medium">+{loc.points} баллов</span>
                    <span className="text-white/40 text-xs">{loc.tasks.length} заданий</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AZS Stations */}
        {showStations && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
              ⛽ Партнёрские АЗС Роснефть
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rosneftStations.map((s) => (
                <div key={s.id} className="glass-card-dark rounded-2xl p-5 border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-2xl flex-shrink-0">⛽</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{s.name}</h3>
                      <p className="text-white/50 text-sm mb-3">{s.address}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.services.map(srv => (
                          <span key={srv} className="px-2 py-1 rounded-lg bg-white/10 text-white/70 text-xs">{srv}</span>
                        ))}
                      </div>
                      <div className="mt-3 text-yellow-400 text-xs font-medium">+50 баллов за посещение через бот</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

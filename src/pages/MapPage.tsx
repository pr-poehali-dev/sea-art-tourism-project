import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { locations, typeColors, typeLabels } from '@/data/locations';

const rosneftStations = [
  { id: 'r1', name: 'АЗС Роснефть', address: 'Краснодар, ул. Ставропольская, 222', services: ['☕ Кафе', '🅿️ Парковка', '📶 Wi-Fi', '🚻 Санузел'] },
  { id: 'r2', name: 'АЗС Роснефть', address: 'Новороссийск, ш. Анапское, 1', services: ['☕ Кафе', '🅿️ Парковка', '🚻 Санузел'] },
  { id: 'r3', name: 'АЗС Роснефть', address: 'Туапсе, ул. Сочинская, 43', services: ['☕ Кафе', '🅿️ Парковка', '🛒 Магазин', '🚻 Санузел'] },
  { id: 'r4', name: 'АЗС Роснефть', address: 'Сочи, ш. Курортное, 98', services: ['☕ Кафе', '🅿️ Парковка', '📶 Wi-Fi', '🚻 Санузел'] },
];

export default function MapPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'literary' | 'cinema' | 'museum'>('all');
  const [showStations, setShowStations] = useState(true);

  const filtered = filter === 'all' ? locations : locations.filter(l => l.type === filter);
  const selectedLoc = selected ? locations.find(l => l.id === selected) : null;

  const typeEmoji: Record<string, string> = { literary: '📖', cinema: '🎬', museum: '🏛️', nature: '🌿' };

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ background: 'linear-gradient(180deg, #003B7A 0%, #0057B7 60%, #E0F5FF 100%)', fontFamily: 'Nunito, sans-serif' }}>
        {/* Header */}
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              🗺️ Интерактивный маршрут
            </div>
            <h1 className="font-black text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Маршрут «Море искусства»
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              847 км культурного путешествия по Черноморскому побережью
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(['all', 'literary', 'cinema', 'museum'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-200"
                style={filter === f ? {
                  background: 'white',
                  color: '#003B7A',
                  boxShadow: '0 4px 16px rgba(255,255,255,0.3)',
                } : {
                  background: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {f === 'all' ? '🌊 Все локации' : f === 'literary' ? '📖 Литература' : f === 'cinema' ? '🎬 Кино' : '🏛️ Музеи'}
              </button>
            ))}
            <button
              onClick={() => setShowStations(!showStations)}
              className="px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-200"
              style={showStations ? {
                background: '#CC0000',
                color: 'white',
                boxShadow: '0 4px 16px rgba(204,0,0,0.4)',
              } : {
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              ⛽ АЗС Роснефть
            </button>
          </div>

          {/* SVG Map */}
          <div
            className="rounded-3xl overflow-hidden mb-8"
            style={{ background: 'rgba(0,30,80,0.5)', border: '1px solid rgba(0,153,255,0.3)', backdropFilter: 'blur(10px)' }}
          >
            <div className="relative w-full" style={{ paddingBottom: '50%' }}>
              <div className="absolute inset-0">
                <svg viewBox="0 0 900 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#001a3d" />
                      <stop offset="100%" stopColor="#003B7A" />
                    </linearGradient>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0099FF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <rect width="900" height="450" fill="url(#bgGrad)" />

                  {/* Sea */}
                  <ellipse cx="450" cy="380" rx="520" ry="180" fill="rgba(0,153,255,0.08)" />
                  <ellipse cx="450" cy="400" rx="500" ry="140" fill="rgba(0,212,255,0.05)" />

                  {/* Land area */}
                  <path d="M30,70 L180,50 L340,45 L500,65 L640,60 L780,75 L870,110 L850,180 L820,230 L780,270 L740,295 L680,315 L620,330 L560,345 L500,355 L440,345 L380,335 L320,355 L270,370 L210,360 L160,330 L110,295 L70,255 L40,200 Z"
                    fill="rgba(0,120,60,0.15)" stroke="rgba(0,153,255,0.2)" strokeWidth="1" />

                  {/* Sea label */}
                  <text x="450" y="410" textAnchor="middle" fill="rgba(0,153,255,0.4)" fontSize="14" fontFamily="Russo One, sans-serif" letterSpacing="4">
                    ЧЁРНОЕ МОРЕ
                  </text>

                  {/* Route line */}
                  <polyline
                    points="100,170 175,158 225,182 265,195 310,178 355,215 395,240 430,260 465,272 500,283 530,292 562,287 590,312 615,330 650,340"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    fill="none"
                    filter="url(#glow)"
                    opacity="0.8"
                  />

                  {/* Location points */}
                  {filtered.map((loc, i) => {
                    const x = 80 + (i / 11) * 760;
                    const y = 150 + Math.sin(i * 0.75) * 70 + (i > 7 ? 50 : 0);
                    const isSelected = selected === loc.id;
                    const dotColor = loc.type === 'cinema' ? '#A855F7' : loc.type === 'literary' ? '#F59E0B' : '#14B8A6';

                    return (
                      <g key={loc.id} onClick={() => setSelected(isSelected ? null : loc.id)} style={{ cursor: 'pointer' }}>
                        {isSelected && (
                          <circle cx={x} cy={y} r={28} fill={dotColor} opacity={0.2} />
                        )}
                        <circle cx={x} cy={y} r={isSelected ? 18 : 14} fill={dotColor} filter="url(#glow)" opacity={0.95} />
                        <circle cx={x} cy={y} r={isSelected ? 10 : 7} fill="white" />
                        <text x={x} y={y + (isSelected ? 33 : 28)} textAnchor="middle" fill="white" fontSize="10" fontFamily="Nunito, sans-serif" fontWeight="700">
                          {i + 1}
                        </text>
                        {isSelected && (
                          <>
                            <rect x={x - 75} y={y - 56} width="150" height="32" rx="8" fill="rgba(0,30,80,0.95)" stroke={dotColor} strokeWidth="1" />
                            <text x={x} y={y - 36} textAnchor="middle" fill="white" fontSize="8.5" fontFamily="Nunito, sans-serif" fontWeight="700">
                              {loc.name.length > 22 ? loc.name.slice(0, 22) + '…' : loc.name}
                            </text>
                          </>
                        )}
                      </g>
                    );
                  })}

                  {/* AZS stations */}
                  {showStations && rosneftStations.map((s, i) => {
                    const x = 130 + i * 200;
                    const y = 390;
                    return (
                      <g key={s.id}>
                        <circle cx={x} cy={y} r={11} fill="#CC0000" opacity={0.9} filter="url(#softGlow)" />
                        <text x={x} y={y + 4} textAnchor="middle" fontSize="12">⛽</text>
                      </g>
                    );
                  })}

                  {/* Legend */}
                  <rect x="15" y="400" width="260" height="44" rx="10" fill="rgba(0,20,60,0.92)" stroke="rgba(0,153,255,0.3)" strokeWidth="1" />
                  <circle cx="35" cy="415" r="6" fill="#F59E0B" /><text x="47" y="419" fill="white" fontSize="10" fontFamily="Nunito, sans-serif" fontWeight="700">Литература</text>
                  <circle cx="35" cy="432" r="6" fill="#A855F7" /><text x="47" y="436" fill="white" fontSize="10" fontFamily="Nunito, sans-serif" fontWeight="700">Кино</text>
                  <circle cx="145" cy="415" r="6" fill="#14B8A6" /><text x="157" y="419" fill="white" fontSize="10" fontFamily="Nunito, sans-serif" fontWeight="700">Музей</text>
                  <circle cx="145" cy="432" r="6" fill="#CC0000" /><text x="157" y="436" fill="white" fontSize="10" fontFamily="Nunito, sans-serif" fontWeight="700">АЗС Роснефть</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Selected location */}
          {selectedLoc && (
            <div
              className="rounded-2xl p-6 mb-8 animate-fade-in opacity-0"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid rgba(0,153,255,0.3)',
                boxShadow: '0 8px 32px rgba(0,153,255,0.2)',
                animationFillMode: 'forwards',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img src={selectedLoc.image} alt={selectedLoc.name} className="w-full md:w-52 h-36 object-cover rounded-2xl flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-black ${typeColors[selectedLoc.type]}`}>
                      {typeEmoji[selectedLoc.type]} {typeLabels[selectedLoc.type]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-black" style={{ background: '#FFF3C0', color: '#B45309' }}>
                      +{selectedLoc.points} баллов
                    </span>
                  </div>
                  <div className="text-xs font-black mb-1" style={{ color: '#0099FF' }}>📍 {selectedLoc.city}</div>
                  <h3 className="font-black text-xl mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{selectedLoc.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-4">{selectedLoc.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link to={`/location/${selectedLoc.id}`} className="btn-game py-2 px-5 text-sm">
                      <Icon name="MapPin" size={15} />
                      Подробнее
                    </Link>
                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-xl text-sm font-black transition-all hover:bg-gray-100" style={{ color: '#6b7280' }}>
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Location cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
            {filtered.map((loc, i) => (
              <div
                key={loc.id}
                className="location-card"
                onClick={() => setSelected(loc.id)}
                style={{
                  background: selected === loc.id ? 'white' : 'rgba(255,255,255,0.95)',
                  border: selected === loc.id ? '2px solid #0099FF' : '2px solid rgba(0,153,255,0.15)',
                  boxShadow: selected === loc.id ? '0 8px 32px rgba(0,153,255,0.25)' : '0 2px 12px rgba(0,153,255,0.08)',
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,30,80,0.8) 100%)' }} />
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', boxShadow: '0 4px 12px rgba(0,153,255,0.5)' }}
                  >
                    {i + 1}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-black ${typeColors[loc.type]}`}>
                      {typeEmoji[loc.type]} {typeLabels[loc.type]}
                    </span>
                    <span className="text-xs font-black" style={{ color: '#FFD700' }}>+{loc.points}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-black mb-1" style={{ color: '#0099FF' }}>{loc.city}</div>
                  <div className="font-black text-sm mb-1" style={{ color: '#003B7A' }}>{loc.name}</div>
                  <div className="text-xs font-semibold text-gray-400 mb-3 line-clamp-2">{loc.description}</div>
                  <Link
                    to={`/location/${loc.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-black transition-all hover:gap-2"
                    style={{ color: '#0099FF' }}
                  >
                    Подробнее <Icon name="ArrowRight" size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AZS Section */}
        {showStations && (
          <div style={{ background: 'white' }} className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="font-black text-2xl text-center mb-6" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                ⛽ АЗС Роснефть на маршруте
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {rosneftStations.map((s) => (
                  <div key={s.id} className="game-card p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⛽</span>
                      <div>
                        <div className="font-black text-sm" style={{ color: '#003B7A' }}>АЗС Роснефть</div>
                        <div className="text-xs font-semibold text-gray-400">{s.address}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.services.map((svc, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-lg text-xs font-black text-white" style={{ background: '#CC0000' }}>{svc}</span>
                      ))}
                    </div>
                    <div className="p-2 rounded-lg text-xs font-black text-center" style={{ background: '#E0F5FF', color: '#0099FF' }}>
                      +50 баллов за фото
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

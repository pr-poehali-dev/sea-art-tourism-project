import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { locations, typeColors, typeLabels } from '@/data/locations';

const rosneftStations = [
  { id: 'r1', city: 'Краснодар', address: 'ул. Кубанская Набережная, 47/1' },
  { id: 'r2', city: 'Краснодар', address: 'ул. Лизы Чайкиной, 32' },
  { id: 'r3', city: 'Краснодар', address: 'ул. Дзержинского, 197' },
  { id: 'r4', city: 'Краснодар', address: 'ул. Уральская, 214/2' },
  { id: 'r5', city: 'Краснодар', address: 'ул. Академика Лукьяненко, 6' },
  { id: 'r6', city: 'Краснодар', address: 'ул. Котовского, 76/1' },
  { id: 'r7', city: 'Краснодар', address: 'ул. Московская, 89' },
  { id: 'r8', city: 'Краснодар', address: 'ул. Селезнёва, 197/5' },
  { id: 'r9', city: 'Краснодар', address: 'ул. Вишняковой, 146' },
  { id: 'r10', city: 'Краснодар', address: 'ул. Захарова, 5' },
  { id: 'r11', city: 'Краснодар', address: 'ул. Дежнёва, 40/2' },
  { id: 'r12', city: 'Краснодар', address: 'Ростовское шоссе, 26' },
  { id: 'r13', city: 'Краснодар', address: 'Ростовское шоссе, 25' },
  { id: 'r14', city: 'Краснодар', address: 'ул. Дзержинского, 108' },
  { id: 'r15', city: 'Краснодар', address: 'ул. Дзержинского, 237' },
  { id: 'r16', city: 'Краснодар', address: 'ул. Бородинская, 160' },
  { id: 'r17', city: 'Краснодар', address: 'ул. Крупской, 159' },
  { id: 'r18', city: 'Краснодар', address: 'Ейское шоссе, 1 (ст. Новотитаровская)' },
  { id: 'r19', city: 'Краснодар', address: 'Трасса Краснодар — Кропоткин, 1 км, 1/2' },
  { id: 'r20', city: 'Славянск-на-Кубани', address: 'ул. Красная, 141' },
  { id: 'r21', city: 'Славянск-на-Кубани', address: 'Артиллерийский проезд, 1' },
  { id: 'r22', city: 'Славянск-на-Кубани', address: 'Маевское шоссе, 25' },
  { id: 'r23', city: 'Тамань', address: 'ул. Победы, 26' },
  { id: 'r24', city: 'Новороссийск', address: 'Мысхакское шоссе, 53Б' },
  { id: 'r25', city: 'Новороссийск', address: 'проспект Дзержинского, 188Б' },
  { id: 'r26', city: 'Новороссийск', address: 'улица Ленина, 7А' },
  { id: 'r27', city: 'Геленджик', address: 'ул. Туристическая, 2' },
  { id: 'r28', city: 'Геленджик', address: 'проезд Строителей, 1Б' },
  { id: 'r29', city: 'Кабардинка', address: 'Трасса М-4 (у съезда на с. Кабардинка)' },
  { id: 'r30', city: 'Туапсе', address: 'ул. Бондаренко, 14А' },
  { id: 'r31', city: 'Туапсе', address: 'ул. Говорова, 60' },
  { id: 'r32', city: 'Туапсе', address: 'ул. Сочинская, 260а' },
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
              751 км культурного путешествия по Черноморскому побережью
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

          {/* Real Map Image */}
          <div
            className="rounded-3xl overflow-hidden mb-8"
            style={{ border: '2px solid rgba(0,153,255,0.3)', boxShadow: '0 8px 40px rgba(0,153,255,0.2)' }}
          >
            <img
              src="https://cdn.poehali.dev/projects/b8cf2513-eaab-4def-8611-9f1e17d9f569/bucket/2b89276d-2657-42a1-a488-8b1d4917f252.jpg"
              alt="Карта маршрута «Море искусства» с АЗС Роснефть"
              className="w-full h-auto block"
            />
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
              <h2 className="font-black text-2xl text-center mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                ⛽ АЗС «Роснефть» на маршруте
              </h2>
              <p className="text-center text-sm font-semibold text-gray-400 mb-8">
                32 станции · Скидка 5% по QR-коду из Telegram-бота
              </p>
              {(() => {
                const cities = Array.from(new Set(rosneftStations.map(s => s.city)));
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {cities.map(city => {
                      const cityStations = rosneftStations.filter(s => s.city === city);
                      return (
                        <div key={city} className="game-card p-4">
                          <div
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-black text-white mb-3"
                            style={{ background: '#CC0000' }}
                          >
                            📍 {city} ({cityStations.length})
                          </div>
                          <ul className="space-y-1.5">
                            {cityStations.map(s => (
                              <li key={s.id} className="flex items-start gap-2 text-xs font-semibold text-gray-600">
                                <span className="text-red-400 flex-shrink-0">⛽</span>
                                {s.address}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
              <div
                className="mt-6 p-4 rounded-2xl text-center max-w-lg mx-auto"
                style={{ background: '#E0F5FF', border: '2px solid rgba(0,153,255,0.2)' }}
              >
                <div className="font-black text-sm mb-1" style={{ color: '#003B7A' }}>
                  Как получить скидку на топливо
                </div>
                <p className="text-xs font-semibold text-gray-500 mb-3">
                  Откройте Telegram-бот → нажмите «Получить QR-код» → покажите кассиру на АЗС
                </p>
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-black text-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                >
                  ✈️ Открыть Telegram-бот
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
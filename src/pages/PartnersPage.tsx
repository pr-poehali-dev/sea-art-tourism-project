import Layout from '@/components/Layout';

const mainPartners = [
  { name: 'Роснефть', emoji: '⛽', desc: 'Официальный топливный партнёр. АЗС на всём маршруте — отдых, кафе, парковки и дополнительные баллы для участников.', color: '#CC0000', badge: 'Главный партнёр' },
  { name: 'Министерство культуры КК', emoji: '🏛️', desc: 'Поддержка культурных объектов маршрута, содействие в организации экскурсий и льготных условиях посещения.', color: '#003B7A', badge: 'Официальный партнёр' },
  { name: 'Олимпийский парк', emoji: '🏅', desc: 'Уникальная площадка в Сириусе — Олимпийский парк открыт для участников маршрута с особыми условиями.', color: '#0099FF', badge: 'Партнёр' },
  { name: 'Роза Хутор', emoji: '🎿', desc: 'Горнолыжный курорт Красной Поляны — одна из ключевых точек маршрута для кино-туристов.', color: '#10B981', badge: 'Партнёр' },
  { name: 'Дендрарий Сочи', emoji: '🌿', desc: 'Место съёмок фильма «Чебурашка» — сочинский дендрарий встречает участников проекта.', color: '#059669', badge: 'Партнёр' },
  { name: 'Администрация КК', emoji: '🏢', desc: 'Поддержка на уровне региональной администрации, помощь в организации событий и продвижении маршрута.', color: '#7C3AED', badge: 'Партнёр' },
];

const stations = [
  { address: 'Краснодар, ул. Ставропольская, 222', services: ['☕ Кафе', '🅿️ Парковка', '📶 Wi-Fi', '🚻 Санузел'], coords: '45.02° N, 38.97° E' },
  { address: 'Новороссийск, ш. Анапское, 1', services: ['☕ Кафе', '🅿️ Парковка', '🚻 Санузел'], coords: '44.72° N, 37.76° E' },
  { address: 'Туапсе, ул. Сочинская, 43', services: ['☕ Кафе', '🅿️ Парковка', '🛒 Магазин', '🚻 Санузел'], coords: '44.10° N, 39.07° E' },
  { address: 'Сочи, ш. Курортное, 98', services: ['☕ Кафе', '🅿️ Парковка', '📶 Wi-Fi', '🚻 Санузел'], coords: '43.59° N, 39.73° E' },
];

export default function PartnersPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              🤝 Партнёры
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Наши партнёры
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Вместе мы делаем путешествие особенным
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Main partners */}
          <h2 className="font-black text-2xl mb-6 text-center" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
            🌟 Официальные партнёры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {mainPartners.map((p) => (
              <div key={p.name} className="game-card p-6 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 px-3 py-1 text-xs font-black text-white rounded-bl-xl"
                  style={{ background: p.color }}
                >
                  {p.badge}
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{ background: `${p.color}20`, border: `2px solid ${p.color}40` }}
                >
                  {p.emoji}
                </div>
                <h3 className="font-black text-lg mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{p.name}</h3>
                <p className="text-sm font-semibold text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Rosneft stations */}
          <div
            className="rounded-3xl overflow-hidden mb-10"
            style={{ background: 'linear-gradient(135deg, #CC000015, #FF000010)', border: '2px solid #CC000030' }}
          >
            <div
              className="p-6 text-white flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg, #CC0000, #FF4444)' }}
            >
              <span className="text-4xl">⛽</span>
              <div>
                <h2 className="font-black text-2xl" style={{ fontFamily: 'Russo One, sans-serif' }}>АЗС Роснефть на маршруте</h2>
                <p className="font-semibold opacity-90">Точки отдыха, кафе и дополнительные баллы</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stations.map((s, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white" style={{ border: '2px solid rgba(204,0,0,0.15)' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl flex-shrink-0">⛽</span>
                      <div>
                        <div className="font-black text-sm" style={{ color: '#003B7A' }}>АЗС Роснефть</div>
                        <div className="text-xs font-semibold text-gray-500">{s.address}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {s.services.map((svc, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-lg text-xs font-bold text-white" style={{ background: '#CC0000' }}>{svc}</span>
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-gray-400">{s.coords}</div>
                    <div
                      className="mt-3 p-2 rounded-xl text-center text-xs font-black"
                      style={{ background: 'rgba(0,153,255,0.1)', color: '#0099FF' }}
                    >
                      🎯 +50 баллов за фото через бот
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Become partner CTA */}
          <div
            className="rounded-3xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)' }}
          >
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="font-black text-2xl text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Стать партнёром
            </h2>
            <p className="font-semibold mb-6 max-w-lg mx-auto" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Ваш бизнес на маршруте? Предлагаем взаимовыгодное партнёрство — тысячи семей проедут мимо вашей точки!
            </p>
            <a href="/contacts" className="btn-game inline-flex">✉️ Связаться с нами</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

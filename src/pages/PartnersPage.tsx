import Layout from '@/components/Layout';

const mainPartners = [
  {
    name: 'Роснефть',
    emoji: '⛽',
    desc: 'Официальный топливный партнёр маршрута. АЗС на всём пути — отдых, кафе, парковки. Скидка 5% на топливо для участников по QR-коду из бота.',
    color: '#CC0000',
    badge: 'Главный партнёр',
    link: '#',
  },
  {
    name: 'Сбер',
    emoji: '💚',
    desc: 'Подписка СберПрайм на 60 дней — главный приз маршрута. Скидки в СберМаркете, Самокате и привилегии в Сбербанке.',
    color: '#21A038',
    badge: 'Призовой партнёр',
    link: '#',
  },
  {
    name: 'ВКонтакте',
    emoji: '🔵',
    desc: 'Подписка VK Музыка на 1 месяц в числе призов. Официальный партнёр по цифровым сервисам маршрута.',
    color: '#0077FF',
    badge: 'Партнёр',
    link: 'https://vk.ru/club239535650',
  },
  {
    name: 'ЮгРас',
    emoji: '🏗️',
    desc: 'Партнёр по развитию туристической инфраструктуры Краснодарского края.',
    color: '#F59E0B',
    badge: 'Партнёр',
    link: '#',
  },
  {
    name: 'КВП-Атлант',
    emoji: '🏢',
    desc: 'Партнёр маршрута по организационной и логистической поддержке проекта.',
    color: '#6366F1',
    badge: 'Партнёр',
    link: '#',
  },
  {
    name: 'КВП-Элит',
    emoji: '⭐',
    desc: 'Партнёр по сервисному обеспечению и поддержке участников в пути.',
    color: '#0099FF',
    badge: 'Партнёр',
    link: '#',
  },
];

const allStations = [
  { city: 'Краснодар', addresses: [
    'ул. Кубанская Набережная, 47/1',
    'ул. Лизы Чайкиной, 32',
    'ул. Дзержинского, 197',
    'ул. Уральская, 214/2',
    'ул. Академика Лукьяненко, 6',
    'ул. Котовского, 76/1',
    'ул. Московская, 89',
    'ул. Селезнёва, 197/5',
    'ул. Вишняковой, 146',
    'ул. Захарова, 5',
    'ул. Дежнёва, 40/2',
    'Ростовское шоссе, 26',
    'Ростовское шоссе, 25',
    'ул. Дзержинского, 108',
    'ул. Дзержинского, 237',
    'ул. Бородинская, 160',
    'ул. Крупской, 159',
    'Ейское шоссе, 1 (ст. Новотитаровская)',
    'Трасса Краснодар — Кропоткин, 1 км, 1/2',
  ]},
  { city: 'Славянск-на-Кубани', addresses: [
    'ул. Красная, 141',
    'Артиллерийский проезд, 1',
    'Маевское шоссе, 25',
  ]},
  { city: 'Тамань', addresses: [
    'ул. Победы, 26',
  ]},
  { city: 'Новороссийск', addresses: [
    'Мысхакское шоссе, 53Б',
    'проспект Дзержинского, 188Б',
    'улица Ленина, 7А',
  ]},
  { city: 'Геленджик', addresses: [
    'ул. Туристическая, 2',
    'проезд Строителей, 1Б',
  ]},
  { city: 'Кабардинка', addresses: [
    'Трасса М-4 (у съезда на с. Кабардинка)',
  ]},
  { city: 'Туапсе', addresses: [
    'ул. Бондаренко, 14А',
    'ул. Говорова, 60',
    'ул. Сочинская, 260а',
  ]},
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
              Вместе делаем путешествие особенным
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Partners grid */}
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
                <p className="text-sm font-semibold text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                {p.link !== '#' && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-black"
                    style={{ color: p.color }}
                  >
                    Перейти →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* AZS Rosneft full list */}
          <div
            className="rounded-3xl overflow-hidden mb-10"
            style={{ border: '2px solid rgba(204,0,0,0.2)' }}
          >
            <div
              className="p-6 text-white flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg, #CC0000, #FF4444)' }}
            >
              <span className="text-4xl">⛽</span>
              <div>
                <div className="font-black text-xl" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  АЗС «Роснефть» на маршруте
                </div>
                <div className="font-semibold opacity-90">Скидка 5% на топливо по QR-коду из Telegram-бота</div>
              </div>
            </div>
            <div className="p-6" style={{ background: 'rgba(204,0,0,0.03)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allStations.map((group) => (
                  <div key={group.city}>
                    <div
                      className="font-black text-sm mb-3 px-3 py-1 rounded-lg inline-block text-white"
                      style={{ background: '#CC0000' }}
                    >
                      📍 {group.city}
                    </div>
                    <ul className="space-y-1.5">
                      {group.addresses.map((addr, i) => (
                        <li key={i} className="text-xs font-semibold text-gray-600 flex items-start gap-2">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">⛽</span>
                          {addr}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-2xl text-center"
                style={{ background: 'rgba(204,0,0,0.08)', border: '1px dashed rgba(204,0,0,0.3)' }}
              >
                <div className="font-black text-sm mb-2" style={{ color: '#CC0000' }}>
                  Как получить скидку 5%:
                </div>
                <p className="text-xs font-semibold text-gray-600 mb-3">
                  Нажмите «Получить QR-код» в боте → покажите кассиру → получите скидку на топливо
                </p>
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-black text-sm text-white"
                  style={{ background: '#29B5E8' }}
                >
                  ✈️ Получить QR-код в боте
                </a>
              </div>
            </div>
          </div>

          {/* Become partner */}
          <div
            className="rounded-3xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)' }}
          >
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="font-black text-2xl text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Стать партнёром
            </h2>
            <p className="font-semibold mb-6 max-w-lg mx-auto" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Ваш бизнес на маршруте? Тысячи семей со всей России проедут через Краснодарский край. Предлагаем взаимовыгодное партнёрство.
            </p>
            <a href="/contacts" className="btn-game inline-flex">✉️ Обсудить партнёрство</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

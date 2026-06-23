import { useState } from 'react';
import Layout from '@/components/Layout';

const prizes = [
  {
    id: 1,
    emoji: '🏅',
    title: 'Диплом участника',
    desc: 'Именной диплом автотуриста «Море искусства» — официальное подтверждение прохождения маршрута',
    points: 15,
    category: 'Документы',
    popular: false,
    partner: null,
  },
  {
    id: 2,
    emoji: '⛽',
    title: 'Брендированная продукция Роснефть',
    desc: 'Мерч от официального партнёра маршрута — значок, кружка или наклейки с символикой Роснефть и «Море искусства»',
    points: 35,
    category: 'Мерч',
    popular: true,
    partner: 'Роснефть',
  },
  {
    id: 3,
    emoji: '🎵',
    title: 'VK Музыка на 1 месяц',
    desc: 'Подписка на VK Музыку — миллионы треков без рекламы, офлайн-режим и эксклюзивный контент',
    points: 40,
    category: 'Подписки',
    popular: true,
    partner: 'ВКонтакте',
  },
  {
    id: 4,
    emoji: '💚',
    title: 'СберПрайм на 60 дней',
    desc: 'Подписка СберПрайм на 2 месяца — скидки в СберМаркете, Самокате, привилегии в банке и многое другое',
    points: 50,
    category: 'Подписки',
    popular: true,
    partner: 'Сбер',
  },
];

const categories = ['Все', 'Документы', 'Мерч', 'Подписки'];

const partnerColors: Record<string, string> = {
  'Роснефть': '#CC0000',
  'ВКонтакте': '#0077FF',
  'Сбер': '#21A038',
};

export default function ShopPage() {
  const [category, setCategory] = useState('Все');
  const [showModal, setShowModal] = useState<typeof prizes[0] | null>(null);
  const userPoints = 15;

  const filtered = category === 'Все' ? prizes : prizes.filter(p => p.category === category);

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              🎁 Магазин призов
            </div>
            <h1
              className="text-4xl md:text-5xl font-black text-white mb-3"
              style={{ fontFamily: 'Russo One, sans-serif' }}
            >
              Обмен баллов на призы
            </h1>
            <p className="font-semibold text-lg mb-6" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Выполняйте задания на маршруте, копите баллы и обменивайте на ценные призы
            </p>

            {/* Механика */}
            <div
              className="max-w-2xl mx-auto rounded-2xl p-5 text-left"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(16px)' }}
            >
              <div className="font-black text-white mb-3">📋 Как это работает:</div>
              <ul className="space-y-2 text-sm font-semibold" style={{ color: 'rgba(200,235,255,0.9)' }}>
                <li>✅ Сканируйте QR-код на каждой точке маршрута — активируется задание</li>
                <li>📸 Выполняйте задание (фото, поиск, задание) — получаете от 3 до 15 баллов</li>
                <li>🏆 Максимум за весь маршрут — <strong className="text-white">50 баллов</strong></li>
                <li>🎁 Обменивайте баллы на призы самостоятельно в этом каталоге</li>
              </ul>
            </div>

            {/* My points */}
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', boxShadow: '0 4px 20px rgba(255,165,0,0.4)' }}
            >
              <span className="text-2xl">⭐</span>
              <span className="font-black text-xl" style={{ color: '#003B7A' }}>Ваши баллы: {userPoints} / 50</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-5 py-2 rounded-xl text-sm font-black transition-all duration-200 hover:scale-105"
                style={category === cat ? {
                  background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(0,153,255,0.35)',
                } : {
                  background: 'white',
                  color: '#003B7A',
                  border: '2px solid rgba(0,153,255,0.2)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Prizes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filtered.map((prize) => {
              const canAfford = userPoints >= prize.points;
              const pColor = prize.partner ? partnerColors[prize.partner] : '#0099FF';
              return (
                <div key={prize.id} className="prize-card relative flex flex-col">
                  {prize.popular && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-black text-white z-10"
                      style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF4444)' }}
                    >
                      🔥 Популярное
                    </div>
                  )}
                  <div
                    className="h-44 flex items-center justify-center text-7xl"
                    style={{ background: `linear-gradient(135deg, ${pColor}20, ${pColor}08)` }}
                  >
                    {prize.emoji}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    {prize.partner && (
                      <div
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-black text-white mb-2 self-start"
                        style={{ background: pColor }}
                      >
                        Партнёр: {prize.partner}
                      </div>
                    )}
                    <div className="text-xs font-black mb-1" style={{ color: '#0099FF' }}>{prize.category}</div>
                    <div className="font-black text-base mb-2" style={{ color: '#003B7A' }}>{prize.title}</div>
                    <div className="text-sm text-gray-500 font-semibold mb-4 flex-1">{prize.desc}</div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs font-black mb-1" style={{ color: '#003B7A' }}>
                        <span>Стоимость: {prize.points} баллов</span>
                        <span>{Math.min(userPoints, prize.points)} / {prize.points}</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: '#E0F5FF' }}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(100, (userPoints / prize.points) * 100)}%`,
                            background: canAfford ? 'linear-gradient(90deg, #0099FF, #00D4FF)' : 'linear-gradient(90deg, #FFA500, #FFD700)',
                          }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setShowModal(prize)}
                      className="w-full py-3 rounded-xl text-sm font-black transition-all duration-200"
                      style={canAfford ? {
                        background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(0,153,255,0.3)',
                      } : {
                        background: '#f3f4f6',
                        color: '#9ca3af',
                        cursor: 'not-allowed',
                      }}
                      disabled={!canAfford}
                    >
                      {canAfford ? '🎁 Получить приз' : `🔒 Не хватает ${prize.points - userPoints} баллов`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rosneft discount block */}
          <div
            className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden"
            style={{ border: '2px solid rgba(204,0,0,0.2)' }}
          >
            <div
              className="p-6 text-white flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg, #CC0000, #FF4444)' }}
            >
              <span className="text-4xl">⛽</span>
              <div>
                <div className="font-black text-xl" style={{ fontFamily: 'Russo One, sans-serif' }}>Скидка 5% на АЗС «Роснефть»</div>
                <div className="font-semibold opacity-90">Дополнительный бонус для участников маршрута</div>
              </div>
            </div>
            <div className="p-6" style={{ background: 'rgba(204,0,0,0.04)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="font-black mb-2" style={{ color: '#003B7A' }}>Как получить скидку:</div>
                  <ol className="space-y-1 text-sm font-semibold text-gray-600">
                    <li>1. Нажмите кнопку «Получить QR-код» в боте</li>
                    <li>2. Бот пришлёт персональный QR-код</li>
                    <li>3. Покажите кассиру на АЗС Роснефть</li>
                    <li>4. Получите 5% скидку на топливо</li>
                  </ol>
                </div>
                <div
                  className="rounded-2xl p-4 text-center"
                  style={{ background: 'rgba(204,0,0,0.08)', border: '1px dashed rgba(204,0,0,0.3)' }}
                >
                  <div className="text-5xl mb-2">📱</div>
                  <div className="font-black text-sm mb-2" style={{ color: '#CC0000' }}>QR-код — в Telegram-боте</div>
                  <a
                    href="https://t.me/more_iskusstva_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm text-white"
                    style={{ background: '#29B5E8' }}
                  >
                    ✈️ Открыть бот
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,30,80,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowModal(null)}
          >
            <div
              className="max-w-md w-full rounded-3xl p-8 text-center"
              style={{ background: 'white', boxShadow: '0 20px 60px rgba(0,153,255,0.3)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-7xl mb-4">{showModal.emoji}</div>
              <div className="text-xs font-black mb-2" style={{ color: '#0099FF' }}>{showModal.category}</div>
              <h2 className="text-xl font-black mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{showModal.title}</h2>
              <p className="text-sm text-gray-500 font-semibold mb-4">{showModal.desc}</p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)' }}
              >
                <span className="text-xl">⭐</span>
                <span className="font-black" style={{ color: '#003B7A' }}>{showModal.points} баллов</span>
              </div>
              <div
                className="p-4 rounded-2xl text-left mb-4"
                style={{ background: '#f8fafc', border: '2px solid rgba(0,153,255,0.15)' }}
              >
                <p className="text-sm font-semibold text-gray-500">
                  Для получения приза отправьте запрос через Telegram-бот или свяжитесь с нами по email. Приз будет вручён или доставлен в течение 5 рабочих дней.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-game w-full justify-center"
                  style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                >
                  ✈️ Заказать через Telegram-бот
                </a>
                <button
                  onClick={() => setShowModal(null)}
                  className="px-4 py-3 rounded-xl font-black text-sm transition-all hover:bg-gray-100"
                  style={{ color: '#6b7280' }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

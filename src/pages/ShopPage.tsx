import { useState } from 'react';
import Layout from '@/components/Layout';

const prizes = [
  { id: 1, emoji: '📌', title: 'Значок «Море искусства»', desc: 'Металлический значок с логотипом проекта', points: 5, category: 'Значки', popular: true },
  { id: 2, emoji: '🎒', title: 'Набор наклеек', desc: '10 виниловых наклеек с героями маршрута', points: 10, category: 'Наклейки', popular: true },
  { id: 3, emoji: '🃏', title: 'Открытка «Черноморье»', desc: 'Авторская открытка с видами маршрута', points: 5, category: 'Открытки', popular: false },
  { id: 4, emoji: '☕', title: 'Кружка путешественника', desc: 'Фарфоровая кружка с картой маршрута', points: 20, category: 'Сувениры', popular: false },
  { id: 5, emoji: '👕', title: 'Футболка «Исследователь»', desc: 'Хлопковая футболка с символикой проекта', points: 30, category: 'Одежда', popular: false },
  { id: 6, emoji: '🧳', title: 'Рюкзак путешественника', desc: 'Вместительный рюкзак с принтом маршрута', points: 40, category: 'Сувениры', popular: false },
  { id: 7, emoji: '📜', title: 'Сертификат участника', desc: 'Именной сертификат прохождения маршрута', points: 15, category: 'Сертификаты', popular: true },
  { id: 8, emoji: '🏆', title: 'Диплом «Мастер маршрута»', desc: 'Эксклюзивный диплом за полное прохождение', points: 50, category: 'Сертификаты', popular: false },
  { id: 9, emoji: '📸', title: 'Фотокнига маршрута', desc: 'Авторская фотокнига с видами Черноморья', points: 45, category: 'Сувениры', popular: false },
  { id: 10, emoji: '🎭', title: 'Набор «Киногерой»', desc: 'Хлопушка + значок + наклейки', points: 20, category: 'Наборы', popular: true },
  { id: 11, emoji: '📖', title: 'Набор «Книголюб»', desc: 'Закладки + блокнот + ручка', points: 15, category: 'Наборы', popular: false },
  { id: 12, emoji: '🌟', title: 'VIP-набор', desc: 'Все сувениры + экскурсия в подарок', points: 50, category: 'Эксклюзив', popular: false },
];

const categories = ['Все', 'Значки', 'Наклейки', 'Открытки', 'Сертификаты', 'Наборы', 'Сувениры', 'Одежда', 'Эксклюзив'];

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
              Тратьте заработанные баллы на уникальные сувениры и подарки
            </p>
            {/* My points */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', boxShadow: '0 4px 20px rgba(255,165,0,0.4)' }}
            >
              <span className="text-2xl">⭐</span>
              <span className="font-black text-xl" style={{ color: '#003B7A' }}>Ваши баллы: {userPoints}</span>
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
                className="px-4 py-2 rounded-xl text-sm font-black transition-all duration-200 hover:scale-105"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((prize) => {
              const canAfford = userPoints >= prize.points;
              return (
                <div key={prize.id} className="prize-card relative">
                  {prize.popular && (
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-black text-white z-10"
                      style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF4444)' }}
                    >
                      🔥 Хит
                    </div>
                  )}
                  <div
                    className="h-36 flex items-center justify-center text-6xl"
                    style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)' }}
                  >
                    {prize.emoji}
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-black mb-1" style={{ color: '#0099FF' }}>{prize.category}</div>
                    <div className="font-black text-sm mb-1" style={{ color: '#003B7A' }}>{prize.title}</div>
                    <div className="text-xs text-gray-400 font-semibold mb-3">{prize.desc}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-lg">⭐</span>
                        <span className="font-black" style={{ color: '#003B7A' }}>{prize.points}</span>
                      </div>
                      <button
                        onClick={() => setShowModal(prize)}
                        className="px-3 py-1.5 rounded-xl text-xs font-black transition-all duration-200 hover:scale-105"
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
                        {canAfford ? '🎁 Получить' : '🔒 Мало баллов'}
                      </button>
                    </div>
                    {!canAfford && (
                      <div className="mt-2 text-xs font-semibold text-center" style={{ color: '#FF4444' }}>
                        Не хватает {prize.points - userPoints} баллов
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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
              <div className="flex flex-col gap-3">
                <div
                  className="p-4 rounded-2xl text-left"
                  style={{ background: '#f8fafc', border: '2px solid rgba(0,153,255,0.15)' }}
                >
                  <p className="text-sm font-semibold text-gray-500">
                    Для получения приза отправьте запрос через наш Telegram-бот или свяжитесь с нами по email. Приз будет доставлен или вручён на одной из точек маршрута.
                  </p>
                </div>
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-game w-full justify-center"
                  style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                >
                  ✈️ Заказать через Telegram
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
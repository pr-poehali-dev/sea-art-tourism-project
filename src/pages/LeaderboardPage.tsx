import { useState } from 'react';
import Layout from '@/components/Layout';

const leadersPersonal = [
  { rank: 1, name: 'Алексей Морозов', city: 'Сочи', points: 48, locations: 10, achievements: 5, avatar: '🧔' },
  { rank: 2, name: 'Анна Соколова', city: 'Новороссийск', points: 45, locations: 9, achievements: 4, avatar: '👩' },
  { rank: 3, name: 'Иван Козлов', city: 'Геленджик', points: 40, locations: 8, achievements: 3, avatar: '👦' },
  { rank: 4, name: 'Мария Орлова', city: 'Сочи', points: 35, locations: 7, achievements: 2, avatar: '👩‍💼' },
  { rank: 5, name: 'Дмитрий Попов', city: 'Туапсе', points: 30, locations: 6, achievements: 2, avatar: '🧑' },
  { rank: 6, name: 'Елена Власова', city: 'Анапа', points: 25, locations: 5, achievements: 2, avatar: '👩‍🦱' },
  { rank: 7, name: 'Павел Крылов', city: 'Краснодар', points: 20, locations: 4, achievements: 1, avatar: '👨' },
];

const leadersFamily = [
  { rank: 1, name: 'Семья Петровых', city: 'Москва', points: 50, locations: 10, achievements: 6, avatar: '👨‍👩‍👧‍👦' },
  { rank: 2, name: 'Семья Новиковых', city: 'Ростов-на-Дону', points: 45, locations: 9, achievements: 5, avatar: '👨‍👩‍👦‍👦' },
  { rank: 3, name: 'Семья Лебедевых', city: 'Анапа', points: 40, locations: 8, achievements: 4, avatar: '👨‍👩‍👧' },
  { rank: 4, name: 'Семья Волковых', city: 'Туапсе', points: 35, locations: 7, achievements: 3, avatar: '👨‍👩‍👧‍👦' },
  { rank: 5, name: 'Семья Смирновых (Вы)', city: 'Краснодар', points: 15, locations: 3, achievements: 2, avatar: '👨‍👩‍👦', isMe: true },
];

const periodOptions = ['Всё время', 'Этот месяц', 'Эта неделя'];
const categoryOptions = ['Личный', 'Семейный'];

export default function LeaderboardPage() {
  const [period, setPeriod] = useState('Всё время');
  const [categoryFilter, setCategoryFilter] = useState('Личный');

  const leaders = categoryFilter === 'Семейный' ? leadersFamily : leadersPersonal;
  const top3 = leaders.slice(0, 3);
  const rest = leaders.filter(l => l.rank > 3);

  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32'];
  const medalEmojis = ['🥇', '🥈', '🥉'];

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
              🏆 Таблица лидеров
            </div>
            <h1
              className="text-4xl md:text-5xl font-black text-white mb-3"
              style={{ fontFamily: 'Russo One, sans-serif' }}
            >
              Рейтинг участников
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Кто собрал больше всех баллов в путешествии?
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <div className="flex gap-2 p-1 rounded-2xl" style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,153,255,0.1)' }}>
              {periodOptions.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className="px-4 py-2 rounded-xl text-sm font-black transition-all"
                  style={period === p ? {
                    background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0,153,255,0.3)',
                  } : { color: '#6b7280' }}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex gap-2 p-1 rounded-2xl" style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,153,255,0.1)' }}>
              {categoryOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoryFilter(c)}
                  className="px-4 py-2 rounded-xl text-sm font-black transition-all"
                  style={categoryFilter === c ? {
                    background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0,153,255,0.3)',
                  } : { color: '#6b7280' }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Podium top 3 */}
          <div className="flex items-end justify-center gap-4 mb-12">
            {[top3[1], top3[0], top3[2]].map((leader, podiumIdx) => {
              const isFirst = leader.rank === 1;
              const heights = ['h-32', 'h-44', 'h-28'];
              const realIdx = [1, 0, 2][podiumIdx];
              return (
                <div key={leader.rank} className="flex flex-col items-center" style={{ width: isFirst ? '160px' : '130px' }}>
                  <div className="text-5xl mb-2">{leader.avatar}</div>
                  <div className="font-black text-center text-sm mb-1" style={{ color: '#003B7A', maxWidth: '120px' }}>{leader.name}</div>
                  <div className="text-xs text-gray-400 font-semibold mb-1">{leader.city}</div>
                  <div className="font-black text-lg" style={{ color: medalColors[realIdx] }}>{leader.points}</div>
                  <div className="text-xs text-gray-400 font-semibold mb-2">баллов</div>
                  <div
                    className={`w-full ${heights[podiumIdx]} rounded-t-2xl flex items-start justify-center pt-3`}
                    style={{ background: `linear-gradient(180deg, ${medalColors[realIdx]}40, ${medalColors[realIdx]}20)`, border: `2px solid ${medalColors[realIdx]}60` }}
                  >
                    <span className="text-3xl">{medalEmojis[realIdx]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full list */}
          <div className="max-w-3xl mx-auto space-y-3">
            {rest.map((leader) => (
              <div
                key={leader.rank}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200"
                style={leader.isMe ? {
                  background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)',
                  border: '2px solid #0099FF',
                  boxShadow: '0 4px 20px rgba(0,153,255,0.2)',
                } : {
                  background: 'white',
                  border: '2px solid rgba(0,153,255,0.1)',
                  boxShadow: '0 2px 12px rgba(0,153,255,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={leader.isMe ? {
                    background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                    color: 'white',
                  } : {
                    background: '#f3f4f6',
                    color: '#6b7280',
                  }}
                >
                  #{leader.rank}
                </div>
                <div className="text-3xl">{leader.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-black text-sm truncate"
                    style={{ color: leader.isMe ? '#003B7A' : '#1e293b' }}
                  >
                    {leader.name}
                    {leader.isMe && (
                      <span
                        className="ml-2 px-2 py-0.5 rounded-full text-xs font-black text-white"
                        style={{ background: '#0099FF' }}
                      >
                        Вы
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">{leader.city}</div>
                </div>
                <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-gray-400">
                  <div className="text-center">
                    <div className="font-black text-sm" style={{ color: '#003B7A' }}>{leader.locations}</div>
                    <div>локаций</div>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-sm" style={{ color: '#003B7A' }}>{leader.achievements}</div>
                    <div>наград</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-black text-lg" style={{ color: '#FFD700', fontFamily: 'Russo One, sans-serif' }}>{leader.points}</div>
                  <div className="text-xs text-gray-400 font-semibold">баллов</div>
                </div>
              </div>
            ))}
          </div>

          {/* My position */}
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)', color: 'white' }}
            >
              <div className="font-black text-lg mb-1" style={{ fontFamily: 'Russo One, sans-serif' }}>
                Ваш рейтинг: #5 · 15 баллов из 50
              </div>
              <p className="font-semibold text-sm mb-4" style={{ color: 'rgba(200,235,255,0.8)' }}>
                Выполните ещё 7 заданий, чтобы набрать максимум!
              </p>
              <a href="/map" className="btn-game inline-flex">
                🗺️ Продолжить маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
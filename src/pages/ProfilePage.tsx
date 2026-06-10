import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const achievements = [
  { emoji: '🌱', title: 'Начинающий путешественник', desc: 'Зарегистрировался в проекте', unlocked: true },
  { emoji: '🔍', title: 'Исследователь Кубани', desc: 'Посетил 3 локации', unlocked: true },
  { emoji: '📚', title: 'Любитель литературы', desc: 'Посетил все литературные места', unlocked: false },
  { emoji: '🎬', title: 'Любитель кино', desc: 'Посетил все места съёмок', unlocked: false },
  { emoji: '🏖️', title: 'Покоритель побережья', desc: 'Прошёл 6 точек маршрута', unlocked: false },
  { emoji: '👨‍👩‍👧', title: 'Семейный герой', desc: 'Выполнил 5 семейных заданий', unlocked: false },
  { emoji: '⭐', title: 'Мастер маршрута', desc: 'Прошёл весь маршрут', unlocked: false },
];

const visitedLocations = [
  { id: 1, name: 'Литературный музей Кубани', city: 'Краснодар', points: 225, date: '15 июня 2024' },
  { id: 2, name: 'Историко-краеведческий музей', city: 'Славянск-на-Кубани', points: 235, date: '16 июня 2024' },
  { id: 3, name: 'Дом-музей Лермонтова', city: 'Тамань', points: 370, date: '17 июня 2024' },
];

const taskHistory = [
  { task: 'Посещение музея', location: 'Лит. музей Кубани', points: 100, status: 'done', date: '15.06' },
  { task: 'Семейное фото', location: 'Лит. музей Кубани', points: 50, status: 'done', date: '15.06' },
  { task: 'Викторина о кубанской литературе', location: 'Лит. музей Кубани', points: 75, status: 'done', date: '15.06' },
  { task: 'Посещение музея', location: 'Историко-краев. музей', points: 100, status: 'done', date: '16.06' },
  { task: 'Найди артефакт', location: 'Историко-краев. музей', points: 75, status: 'done', date: '16.06' },
  { task: 'Посещение музея', location: 'Дом-музей Лермонтова', points: 120, status: 'pending', date: '—' },
];

const LEVEL_THRESHOLDS = [0, 500, 1200, 2500, 5000];
const LEVEL_NAMES = ['Новичок', 'Путешественник', 'Исследователь', 'Знаток', 'Мастер'];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'locations' | 'tasks' | 'achievements'>('overview');

  const totalPoints = 830;
  const level = LEVEL_THRESHOLDS.findIndex((t, i) => totalPoints < (LEVEL_THRESHOLDS[i + 1] ?? Infinity));
  const levelProgress = ((totalPoints - LEVEL_THRESHOLDS[level]) / ((LEVEL_THRESHOLDS[level + 1] ?? 5000) - LEVEL_THRESHOLDS[level])) * 100;

  const tabs = [
    { id: 'overview', label: 'Обзор', icon: 'LayoutDashboard' },
    { id: 'locations', label: 'Локации', icon: 'Map' },
    { id: 'tasks', label: 'Задания', icon: 'CheckSquare' },
    { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
  ] as const;

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ background: 'linear-gradient(180deg, #E0F5FF 0%, #f0f9ff 100%)' }}>

        {/* Hero Card */}
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="pb-20 pt-10">
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto rounded-3xl p-8"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center text-5xl"
                    style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', boxShadow: '0 8px 32px rgba(0,153,255,0.5)' }}
                  >
                    👨‍👩‍👦
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', boxShadow: '0 4px 12px rgba(255,165,0,0.5)' }}
                  >
                    {level + 1}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="text-xs font-bold mb-1" style={{ color: '#7DDFFF' }}>ПУТЕШЕСТВЕННИК</div>
                  <h1
                    className="text-3xl font-black text-white mb-1"
                    style={{ fontFamily: 'Russo One, sans-serif' }}
                  >
                    Семья Смирновых
                  </h1>
                  <div className="font-semibold mb-4" style={{ color: 'rgba(200,235,255,0.8)' }}>Краснодар · Участник с июня 2024</div>

                  {/* Level bar */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-black text-white">{LEVEL_NAMES[level]}</span>
                      <span className="text-sm font-black" style={{ color: '#7DDFFF' }}>{totalPoints} / {LEVEL_THRESHOLDS[level + 1] ?? 5000} XP</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
                      <div className="xp-bar h-full" style={{ width: `${levelProgress}%` }} />
                    </div>
                    <div className="text-xs font-semibold mt-1" style={{ color: 'rgba(160,220,255,0.7)' }}>
                      До уровня «{LEVEL_NAMES[level + 1]}»: {(LEVEL_THRESHOLDS[level + 1] ?? 5000) - totalPoints} XP
                    </div>
                  </div>
                </div>

                {/* Points badge */}
                <div className="text-center flex-shrink-0">
                  <div
                    className="w-32 h-32 rounded-3xl flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', boxShadow: '0 8px 32px rgba(255,165,0,0.4)' }}
                  >
                    <div className="text-4xl font-black" style={{ fontFamily: 'Russo One, sans-serif', color: '#003B7A' }}>
                      {totalPoints}
                    </div>
                    <div className="text-xs font-black" style={{ color: '#003B7A' }}>БАЛЛОВ</div>
                  </div>
                  <Link to="/shop" className="mt-3 btn-gold text-sm py-2 px-4">
                    🎁 В магазин
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container mx-auto px-4 -mt-10 mb-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Локаций', value: '3 / 12', icon: '📍' },
              { label: 'Заданий', value: '5', icon: '✅' },
              { label: 'Достижений', value: '2 / 7', icon: '🏅' },
              { label: 'Место в топе', value: '#47', icon: '🏆' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: 'white', boxShadow: '0 4px 24px rgba(0,153,255,0.12)', border: '2px solid rgba(0,153,255,0.1)' }}
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xl font-black" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{s.value}</div>
                <div className="text-xs font-bold text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 p-1 rounded-2xl" style={{ background: 'white', boxShadow: '0 4px 16px rgba(0,153,255,0.1)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-black text-sm whitespace-nowrap transition-all duration-200 flex-1 justify-center"
                  style={activeTab === tab.id ? {
                    background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(0,153,255,0.35)',
                  } : { color: '#6b7280' }}
                >
                  <Icon name={tab.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                {/* Progress */}
                <div className="game-card p-6">
                  <h3 className="font-black text-lg mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>📍 Прогресс маршрута</h3>
                  <div className="flex justify-between text-sm font-bold mb-2" style={{ color: '#0057B7' }}>
                    <span>Пройдено 3 из 12 точек</span>
                    <span>25%</span>
                  </div>
                  <div className="h-4 rounded-full overflow-hidden mb-4" style={{ background: '#E0F5FF' }}>
                    <div className="xp-bar h-full" style={{ width: '25%' }} />
                  </div>
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-8 rounded-lg flex items-center justify-center text-xs font-black"
                        style={i < 3 ? { background: 'linear-gradient(135deg, #0099FF, #00D4FF)', color: 'white' } : { background: '#E0F5FF', color: '#94a3b8' }}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bots */}
                <div className="game-card p-6">
                  <h3 className="font-black text-lg mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>🤖 Отправить задание</h3>
                  <p className="text-sm text-gray-500 font-semibold mb-4">Отправь фото выполненного задания через бот для начисления баллов</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://t.me/more_iskusstva_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                    >
                      <span className="text-xl">✈️</span>
                      <div>
                        <div className="text-sm">Отправить в Telegram-бот</div>
                        <div className="text-xs opacity-80">@more_iskusstva_bot</div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}
                    >
                      <span className="text-xl">💬</span>
                      <div>
                        <div className="text-sm">Отправить в VK-бот</div>
                        <div className="text-xs opacity-80">@more_iskusstva</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="game-card p-6 md:col-span-2">
                  <h3 className="font-black text-lg mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>📋 Последние задания</h3>
                  <div className="space-y-3">
                    {taskHistory.slice(0, 4).map((t, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#f8fafc' }}>
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                          style={t.status === 'done' ? { background: 'linear-gradient(135deg, #0099FF, #00D4FF)', color: 'white' } : { background: '#FEF3C7', color: '#D97706' }}
                        >
                          {t.status === 'done' ? '✓' : '⏳'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-black text-sm truncate" style={{ color: '#003B7A' }}>{t.task}</div>
                          <div className="text-xs text-gray-400 font-semibold">{t.location}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-black text-sm" style={{ color: '#0099FF' }}>+{t.points}</div>
                          <div className="text-xs text-gray-400">{t.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Locations */}
            {activeTab === 'locations' && (
              <div className="space-y-4 pb-12">
                {visitedLocations.map((loc) => (
                  <Link key={loc.id} to={`/location/${loc.id}`}>
                    <div className="game-card p-5 flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)' }}
                      >
                        {loc.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-black" style={{ color: '#003B7A' }}>{loc.name}</div>
                        <div className="text-sm text-gray-400 font-semibold">{loc.city} · {loc.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-black" style={{ color: '#FFD700' }}>+{loc.points}</div>
                        <div className="text-xs text-gray-400 font-semibold">баллов</div>
                      </div>
                    </div>
                  </Link>
                ))}
                <div
                  className="p-5 rounded-2xl text-center border-2 border-dashed"
                  style={{ borderColor: 'rgba(0,153,255,0.3)', color: '#94a3b8' }}
                >
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-bold text-sm">Ещё 9 локаций ждут тебя!</div>
                  <Link to="/map" className="inline-block mt-3 btn-game py-2 px-5 text-sm">Смотреть маршрут</Link>
                </div>
              </div>
            )}

            {/* Tab: Tasks */}
            {activeTab === 'tasks' && (
              <div className="space-y-3 pb-12">
                {taskHistory.map((t, i) => (
                  <div key={i} className="game-card p-4 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                      style={t.status === 'done' ? { background: 'linear-gradient(135deg, #0099FF, #00D4FF)', color: 'white' } : { background: '#FEF3C7', color: '#D97706' }}
                    >
                      {t.status === 'done' ? '✓' : '⏳'}
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-sm" style={{ color: '#003B7A' }}>{t.task}</div>
                      <div className="text-xs text-gray-400 font-semibold">{t.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black" style={{ color: t.status === 'done' ? '#0099FF' : '#D97706' }}>
                        {t.status === 'done' ? `+${t.points}` : 'Ожидание'}
                      </div>
                      <div className="text-xs text-gray-400">{t.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Achievements */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
                {achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200"
                    style={ach.unlocked ? {
                      background: 'white',
                      border: '2px solid rgba(0,153,255,0.3)',
                      boxShadow: '0 4px 20px rgba(0,153,255,0.12)',
                    } : {
                      background: '#f9fafb',
                      border: '2px solid #e5e7eb',
                      opacity: 0.6,
                      filter: 'grayscale(0.5)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={ach.unlocked ? { background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)' } : { background: '#f3f4f6' }}
                    >
                      {ach.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-sm" style={{ color: ach.unlocked ? '#003B7A' : '#6b7280' }}>{ach.title}</div>
                      <div className="text-xs text-gray-400 font-semibold mt-1">{ach.desc}</div>
                      {ach.unlocked && (
                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-black text-white" style={{ background: '#0099FF' }}>
                          ✓ Получено
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

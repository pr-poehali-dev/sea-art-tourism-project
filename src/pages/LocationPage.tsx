import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { locations, typeColors, typeLabels, taskTypeLabels } from '@/data/locations';

const TG_BOT = 'https://t.me/more_iskusstva_bot';
const VK_BOT = 'https://vk.me/more_iskusstva';

export default function LocationPage() {
  const { id } = useParams();
  const loc = locations.find(l => l.id === Number(id));

  if (!loc) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)' }}>
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🌊</div>
            <h1 className="font-black text-3xl mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>Локация не найдена</h1>
            <Link to="/map" className="btn-game">← Вернуться к маршруту</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const locIdx = locations.findIndex(l => l.id === loc.id);
  const prev = locations[locIdx - 1];
  const next = locations[locIdx + 1];

  return (
    <Layout>
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,30,80,0.3) 0%, rgba(0,30,80,0.85) 100%)' }} />
          <div className="absolute inset-0 flex items-end pb-8 pt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Link to="/map" className="flex items-center gap-1.5 font-bold transition-colors hover:opacity-80" style={{ color: 'rgba(180,220,255,0.9)' }}>
                  <Icon name="ArrowLeft" size={16} /> Маршрут
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
                <span className={`px-3 py-1 rounded-full text-xs font-black ${typeColors[loc.type]}`}>
                  {typeLabels[loc.type]}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black" style={{ background: 'rgba(255,215,0,0.25)', color: '#FFD700' }}>
                  +{loc.points} баллов
                </span>
              </div>
              <div className="text-sm font-bold mb-1" style={{ color: '#7DDFFF' }}>📍 Точка #{locIdx + 1} · {loc.city}</div>
              <h1 className="font-black text-3xl md:text-5xl text-white" style={{ fontFamily: 'Russo One, sans-serif' }}>{loc.name}</h1>
              {loc.film && <div className="text-sm font-semibold mt-2" style={{ color: 'rgba(200,235,255,0.7)' }}>🎬 {loc.film}</div>}
              {loc.author && <div className="text-sm font-semibold mt-1" style={{ color: 'rgba(200,235,255,0.7)' }}>✍️ {loc.author}</div>}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="game-card p-6">
                <h2 className="font-black text-xl mb-3" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>📖 О локации</h2>
                <p className="text-gray-500 font-semibold leading-relaxed">{loc.fullDescription}</p>
              </div>

              {/* Facts */}
              <div>
                <h2 className="font-black text-xl mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>💡 Интересные факты</h2>
                <div className="space-y-3">
                  {loc.facts.map((fact, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start rounded-2xl p-4"
                      style={{ background: '#f0f9ff', border: '2px solid rgba(0,153,255,0.15)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)' }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-gray-600 font-semibold text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              <div>
                <h2 className="font-black text-xl mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>🎯 Задания</h2>
                <div className="space-y-4">
                  {loc.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-2xl p-5 transition-all duration-200"
                      style={{ background: 'white', border: '2px solid rgba(0,153,255,0.15)', boxShadow: '0 2px 12px rgba(0,153,255,0.06)' }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-black px-2 py-1 rounded-lg text-white" style={{ background: '#0099FF' }}>
                          {taskTypeLabels[task.type]}
                        </span>
                        <span className="text-xs font-black px-2 py-1 rounded-lg" style={{ background: '#FFF3C0', color: '#B45309' }}>
                          +{task.points} баллов
                        </span>
                      </div>
                      <h3 className="font-black mb-1" style={{ color: '#003B7A' }}>{task.title}</h3>
                      <p className="text-sm font-semibold text-gray-500 mb-4">{task.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <a
                          href={TG_BOT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-black text-sm text-white transition-all hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                        >
                          ✈️ Отправить в Telegram-бот
                        </a>
                        <a
                          href={VK_BOT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-black text-sm text-white transition-all hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}
                        >
                          💬 Отправить в VK-бот
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 p-4 rounded-xl text-sm font-semibold"
                  style={{ background: '#E0F5FF', color: '#0057B7', border: '2px solid rgba(0,153,255,0.2)' }}
                >
                  <strong>Как подтвердить:</strong> отправьте фото или видео через бот, выберите локацию и задание, оставьте комментарий. После проверки баллы начислятся автоматически.
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tips */}
              <div className="game-card p-6">
                <h3 className="font-black text-lg mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                  👨‍👩‍👧 Советы для семей
                </h3>
                <ul className="space-y-3">
                  {loc.tips.map((tip, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm font-semibold text-gray-600">
                      <span className="font-black flex-shrink-0 mt-0.5" style={{ color: '#0099FF' }}>✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Points summary */}
              <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)' }}>
                <h3 className="font-black mb-4" style={{ fontFamily: 'Russo One, sans-serif' }}>⭐ Баллы за локацию</h3>
                <div className="space-y-2 mb-4">
                  {loc.tasks.map((task) => (
                    <div key={task.id} className="flex justify-between text-sm font-semibold">
                      <span className="truncate mr-2" style={{ color: 'rgba(200,235,255,0.8)' }}>{task.title}</span>
                      <span className="font-black flex-shrink-0" style={{ color: '#FFD700' }}>+{task.points}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-black pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <span>Итого</span>
                  <span className="text-xl" style={{ color: '#FFD700' }}>+{loc.points}</span>
                </div>
              </div>

              {/* Bot links */}
              <div className="game-card p-5">
                <h3 className="font-black mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>🤖 Отправить задание</h3>
                <div className="space-y-3">
                  <a href={TG_BOT} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                  >
                    <span className="text-xl">✈️</span>
                    <div>
                      <div className="text-sm">Telegram-бот</div>
                      <div className="text-xs opacity-80">@more_iskusstva_bot</div>
                    </div>
                    <Icon name="ExternalLink" size={14} className="ml-auto opacity-70" />
                  </a>
                  <a href={VK_BOT} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}
                  >
                    <span className="text-xl">💬</span>
                    <div>
                      <div className="text-sm">VK-бот</div>
                      <div className="text-xs opacity-80">@more_iskusstva</div>
                    </div>
                    <Icon name="ExternalLink" size={14} className="ml-auto opacity-70" />
                  </a>
                </div>
              </div>

              {/* Route navigation */}
              <div className="game-card p-5">
                <h3 className="font-black mb-3 text-sm" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>Навигация по маршруту</h3>
                <div className="space-y-2">
                  {prev && (
                    <Link to={`/location/${prev.id}`}
                      className="flex items-center gap-2 p-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                      style={{ background: '#f0f9ff', color: '#003B7A' }}
                    >
                      <Icon name="ArrowLeft" size={14} />
                      <span className="truncate">#{locIdx} {prev.name}</span>
                    </Link>
                  )}
                  {next && (
                    <Link to={`/location/${next.id}`}
                      className="flex items-center gap-2 p-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 justify-between"
                      style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)' }}
                    >
                      <span className="truncate">#{locIdx + 2} {next.name}</span>
                      <Icon name="ArrowRight" size={14} className="flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

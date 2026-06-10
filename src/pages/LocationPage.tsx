import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { locations, typeColors, typeLabels, taskTypeLabels } from '@/data/locations';

const TG_BOT = 'https://t.me/more_iskusstva_bot';
const VK_BOT = 'https://vk.me/more_iskusstva';

export default function LocationPage() {
  const { id } = useParams();
  const loc = locations.find(l => l.id === Number(id));

  if (!loc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ocean-deep">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🌊</div>
          <h1 className="font-display text-3xl mb-4">Локация не найдена</h1>
          <Link to="/map" className="btn-primary">← Вернуться к маршруту</Link>
        </div>
      </div>
    );
  }

  const locIdx = locations.findIndex(l => l.id === loc.id);
  const prev = locations[locIdx - 1];
  const next = locations[locIdx + 1];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end container mx-auto px-4 pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Link to="/map" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors">
                <Icon name="ArrowLeft" size={16} /> Маршрут
              </Link>
              <span className="text-white/40">·</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[loc.type]}`}>
                {typeLabels[loc.type]}
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-medium">
                +{loc.points} баллов
              </span>
            </div>
            <div className="text-sea-300 text-sm mb-1">📍 Точка #{locIdx + 1} · {loc.city}</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{loc.name}</h1>
            {loc.film && <div className="text-white/60 text-sm mt-2">🎬 {loc.film}</div>}
            {loc.author && <div className="text-white/60 text-sm mt-2">✍️ {loc.author}</div>}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-gradient-to-br from-sea-50 to-white rounded-2xl p-6 border border-sea-100">
              <h2 className="font-display text-2xl font-bold text-ocean-deep mb-4">О локации</h2>
              <p className="text-gray-600 leading-relaxed">{loc.fullDescription}</p>
            </section>

            {/* Facts */}
            <section>
              <h2 className="font-display text-2xl font-bold text-ocean-deep mb-4">Интересные факты</h2>
              <div className="space-y-3">
                {loc.facts.map((fact, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white border border-sea-100 rounded-xl p-4 hover:border-sea-300 transition-colors">
                    <div className="w-8 h-8 rounded-full sea-gradient flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tasks */}
            <section>
              <h2 className="font-display text-2xl font-bold text-ocean-deep mb-4">Задания</h2>
              <div className="space-y-4">
                {loc.tasks.map((task) => (
                  <div key={task.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-gray-500">{taskTypeLabels[task.type]}</span>
                          <span className="px-3 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">+{task.points} баллов</span>
                        </div>
                        <h3 className="font-semibold text-ocean-deep mb-1">{task.title}</h3>
                        <p className="text-gray-500 text-sm">{task.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-2">
                      <a
                        href={TG_BOT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
                      >
                        ✈️ Отправить в Telegram-бот
                      </a>
                      <a
                        href={VK_BOT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
                      >
                        💬 Отправить в VK-бот
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-600 leading-relaxed">
                <strong>Как подтвердить задание:</strong> отправьте фото или видео в Telegram/VK бот, выберите локацию и задание, оставьте комментарий. После проверки администратором баллы начислятся автоматически.
              </div>
            </section>
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-gradient-to-br from-teal-50 to-sea-50 rounded-2xl p-6 border border-teal-100">
              <h3 className="font-semibold text-ocean-deep mb-4 flex items-center gap-2">
                <span>💡</span> Советы для семей
              </h3>
              <ul className="space-y-3">
                {loc.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-gray-600">
                    <Icon name="Check" size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Points summary */}
            <div className="sea-gradient rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4">Баллы за локацию</h3>
              <div className="space-y-2 mb-4">
                {loc.tasks.map((task) => (
                  <div key={task.id} className="flex justify-between text-sm">
                    <span className="text-white/80 truncate mr-2">{task.title}</span>
                    <span className="font-bold text-yellow-300 flex-shrink-0">+{task.points}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/20 pt-3 flex justify-between font-bold">
                <span>Итого</span>
                <span className="text-yellow-300 text-xl">+{loc.points}</span>
              </div>
            </div>

            {/* Bot links */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-ocean-deep mb-4">Отправить задания</h3>
              <div className="space-y-3">
                <a href={TG_BOT} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="text-2xl">✈️</div>
                  <div>
                    <div className="font-medium text-ocean-deep text-sm">Telegram-бот</div>
                    <div className="text-gray-400 text-xs">@more_iskusstva_bot</div>
                  </div>
                  <Icon name="ExternalLink" size={14} className="ml-auto text-gray-400" />
                </a>
                <a href={VK_BOT} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-medium text-ocean-deep text-sm">VK-бот</div>
                    <div className="text-gray-400 text-xs">vk.me/more_iskusstva</div>
                  </div>
                  <Icon name="ExternalLink" size={14} className="ml-auto text-gray-400" />
                </a>
              </div>
            </div>

            {/* Navigation between locations */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-ocean-deep mb-4">Маршрут</h3>
              <div className="space-y-2">
                {prev && (
                  <Link to={`/location/${prev.id}`} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-500 hover:text-ocean-deep">
                    <Icon name="ChevronLeft" size={16} />
                    <span className="line-clamp-1">← {prev.name}</span>
                  </Link>
                )}
                {next && (
                  <Link to={`/location/${next.id}`} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-500 hover:text-ocean-deep">
                    <span className="line-clamp-1">{next.name} →</span>
                    <Icon name="ChevronRight" size={16} className="ml-auto" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

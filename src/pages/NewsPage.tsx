import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const news = [
  { id: 1, date: '1 июня 2026', tag: '🎉 Старт', title: 'Маршрут «Море искусства» открыт для участников!', excerpt: 'Официальный старт семейного культурного маршрута по Краснодарскому краю. 12 точек, 10 заданий, 50 баллов максимум и ценные призы от партнёров. Регистрируйтесь и отправляйтесь в путь!', img: '🌊' },
  { id: 2, date: '28 мая 2026', tag: '🤝 Партнёрство', title: 'Роснефть — официальный топливный партнёр маршрута', excerpt: 'АЗС Роснефть на всём протяжении маршрута — удобные точки отдыха, кафе, парковки. Участники получают скидку 5% на топливо по QR-коду из Telegram-бота.', img: '⛽' },
  { id: 3, date: '20 мая 2026', tag: '💚 Партнёрство', title: 'Сбер и ВКонтакте присоединились к проекту', excerpt: 'Теперь среди призов — подписка СберПрайм на 60 дней и VK Музыка на месяц. Набирайте баллы на маршруте и выбирайте подарок от ведущих компаний России.', img: '🎁' },
  { id: 4, date: '15 мая 2026', tag: '🎬 Кино', title: 'Скала Киселёва: история знаменитой сцены «Бриллиантовой руки»', excerpt: 'Высота 46 метров, 1968 год, режиссёр Леонид Гайдай — рассказываем, как снималась культовая сцена рыбалки и почему именно Туапсе стал площадкой для легендарного фильма.', img: '🎬' },
  { id: 5, date: '10 мая 2026', tag: '📖 Литература', title: 'Лермонтов в Тамани: реальная история за повестью', excerpt: 'В 1837 году молодой офицер оказался в Тамани проездом на Кавказ. Что именно происходило в том домике у берега — рассказываем по архивным материалам Дома-музея.', img: '📖' },
  { id: 6, date: '5 мая 2026', tag: '🤖 Технологии', title: 'Запущен Telegram-бот @more_iskusstva_bot', excerpt: 'Через бот можно подтверждать задания, получать QR-коды на скидку в Роснефть, связываться с оператором и следить за своим счётом баллов в любой момент.', img: '🤖' },
];

export default function NewsPage() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              📰 Новости
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Последние события
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Следите за новостями проекта и не пропускайте бонусы
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Featured */}
          <div
            className="rounded-3xl overflow-hidden mb-10"
            style={{ background: 'linear-gradient(135deg, #E0F5FF, white)', border: '2px solid rgba(0,153,255,0.2)', boxShadow: '0 8px 32px rgba(0,153,255,0.12)' }}
          >
            <div className="flex flex-col md:flex-row">
              <div
                className="w-full md:w-64 h-48 md:h-auto flex items-center justify-center text-8xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #003B7A, #0099FF)' }}
              >
                {featured.img}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: '#0099FF' }}>{featured.tag}</span>
                  <span className="text-sm text-gray-400 font-semibold">{featured.date}</span>
                </div>
                <h2 className="font-black text-2xl mb-3" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{featured.title}</h2>
                <p className="text-gray-500 font-semibold leading-relaxed mb-4">{featured.excerpt}</p>
                <Link to={`/news/${featured.id}`} className="btn-game inline-flex py-2 px-5 text-sm">Читать полностью →</Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`}>
                <div className="game-card overflow-hidden h-full">
                  <div
                    className="h-36 flex items-center justify-center text-6xl"
                    style={{ background: 'linear-gradient(135deg, #003B7A, #0099FF)' }}
                  >
                    {item.img}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-xs font-black text-white" style={{ background: '#0099FF' }}>{item.tag}</span>
                      <span className="text-xs text-gray-400 font-semibold">{item.date}</span>
                    </div>
                    <h3 className="font-black text-sm mb-2" style={{ color: '#003B7A' }}>{item.title}</h3>
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const news = [
  { id: 1, date: '10 июня 2024', tag: '🎉 Новость', title: 'Маршрут «Море искусства» открыт для участников!', excerpt: 'Мы рады объявить об официальном старте семейного культурного маршрута по Краснодарскому краю. Регистрируйтесь и получайте первые баллы!', img: '🌊' },
  { id: 2, date: '5 июня 2024', tag: '🤝 Партнёрство', title: 'Роснефть стала официальным партнёром маршрута', excerpt: 'АЗС Роснефть на всём протяжении маршрута станут удобными точками отдыха для путешественников. За каждое посещение — дополнительные баллы!', img: '⛽' },
  { id: 3, date: '1 июня 2024', tag: '🏆 Событие', title: 'Первые 500 участников получат бонусные баллы', excerpt: 'Первые 500 зарегистрировавшихся участников получат стартовый бонус 100 баллов. Не пропустите возможность!', img: '🎁' },
  { id: 4, date: '25 мая 2024', tag: '🎬 Кино', title: 'Новый квест на скале Киселёва в Туапсе', excerpt: 'В честь юбилея «Бриллиантовой руки» мы создали специальный квест с призами для семей, которые доберутся до легендарной скалы.', img: '🎬' },
  { id: 5, date: '20 мая 2024', tag: '📖 Литература', title: 'День рождения Лермонтова — двойные баллы!', excerpt: '15 октября в день рождения поэта за посещение Дома-музея в Тамани начисляются двойные баллы. Планируйте поездку!', img: '📖' },
  { id: 6, date: '15 мая 2024', tag: '🤖 Боты', title: 'Запущен официальный Telegram-бот проекта', excerpt: 'Теперь подтверждать задания и получать баллы можно прямо через @more_iskusstva_bot. Подпишитесь и будьте в курсе событий!', img: '🤖' },
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

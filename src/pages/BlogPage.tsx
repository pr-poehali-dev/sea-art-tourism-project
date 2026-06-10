import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, tag: '🎬 Кино', date: '8 июня 2024', readTime: '5 мин', title: '«Бриллиантовая рука»: как снималась легендарная сцена на скале Киселёва', excerpt: 'Скала Киселёва в Туапсе стала одним из самых узнаваемых мест в советском кино. Рассказываем историю создания знаменитой сцены и почему режиссёр выбрал именно это место.', emoji: '🎬', color: '#8B5CF6' },
  { id: 2, tag: '📖 Литература', date: '5 июня 2024', readTime: '7 мин', title: 'Лермонтов в Тамани: глава «Тамань» и реальные события 1837 года', excerpt: 'Когда молодой офицер Михаил Лермонтов оказался в Тамани, он и не подозревал, что этот маленький городок вдохновит его на создание одного из самых загадочных произведений русской литературы.', emoji: '📖', color: '#0099FF' },
  { id: 3, tag: '🎬 Кино', date: '3 июня 2024', readTime: '4 мин', title: 'Где снимали «Чебурашку»: Дендрарий Сочи на большом экране', excerpt: 'Знаменитый сочинский Дендрарий стал площадкой для съёмок одного из самых кассовых российских фильмов. Узнайте, какие сцены снимали именно здесь.', emoji: '🐿️', color: '#10B981' },
  { id: 4, tag: '📖 Литература', date: '1 июня 2024', readTime: '6 мин', title: 'Короленко и Джанхот: как море вдохновляло великого писателя', excerpt: 'Владимир Короленко называл Джанхот «уголком рая». Именно здесь, глядя на Черное море, он создавал произведения, ставшие классикой русской литературы.', emoji: '✍️', color: '#F59E0B' },
  { id: 5, tag: '🏛️ История', date: '28 мая 2024', readTime: '8 мин', title: 'Казачество Кубани: история, которую хранят музеи Славянска', excerpt: 'Историко-краеведческий музей Славянска-на-Кубани — это настоящая сокровищница казачьей истории. Рассказываем о самых удивительных экспонатах.', emoji: '⚔️', color: '#EF4444' },
  { id: 6, tag: '🎬 Кино', date: '25 мая 2024', readTime: '5 мин', title: '«Кухня. Война за отель»: Красная Поляна как голливудский курорт', excerpt: 'Горнолыжный курорт Красной Поляны стал площадкой для съёмок популярного сериала. Как выглядят реальные места съёмок и чем они отличаются от экрана?', emoji: '🎿', color: '#0057B7' },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              ✍️ Блог
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Кино и литература Черноморья
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Истории о местах, людях и произведениях нашего маршрута
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Featured */}
          <div className="game-card overflow-hidden mb-10">
            <div className="flex flex-col md:flex-row">
              <div
                className="w-full md:w-72 h-56 md:h-auto flex items-center justify-center text-9xl flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${featured.color}33, ${featured.color}11)`, borderRight: `4px solid ${featured.color}40` }}
              >
                {featured.emoji}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: featured.color }}>{featured.tag}</span>
                  <span className="text-sm text-gray-400 font-semibold">{featured.date}</span>
                  <span className="text-sm text-gray-400 font-semibold">⏱ {featured.readTime}</span>
                </div>
                <h2 className="font-black text-2xl mb-3" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{featured.title}</h2>
                <p className="text-gray-500 font-semibold leading-relaxed mb-4">{featured.excerpt}</p>
                <Link to={`/blog/${featured.id}`} className="btn-game inline-flex py-2 px-5 text-sm">Читать статью →</Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <div className="game-card overflow-hidden h-full flex flex-col">
                  <div
                    className="h-40 flex items-center justify-center text-7xl"
                    style={{ background: `linear-gradient(135deg, ${post.color}33, ${post.color}11)` }}
                  >
                    {post.emoji}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-xs font-black text-white" style={{ background: post.color }}>{post.tag}</span>
                      <span className="text-xs text-gray-400 font-semibold">⏱ {post.readTime}</span>
                    </div>
                    <h3 className="font-black text-sm mb-2 flex-1" style={{ color: '#003B7A' }}>{post.title}</h3>
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="text-xs text-gray-400 font-semibold">{post.date}</div>
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

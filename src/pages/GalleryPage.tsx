import { useState } from 'react';
import Layout from '@/components/Layout';

const categories = ['Все', 'Участники', 'Природа', 'Кино', 'Литература'];

const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', title: 'Горные вершины Красной Поляны', city: 'Красная Поляна', category: 'Природа', likes: 198 },
  { id: 2, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', title: 'Черноморское побережье', city: 'Туапсе', category: 'Природа', likes: 256 },
  { id: 3, image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80', title: 'Сочинский Дендрарий', city: 'Сочи', category: 'Кино', likes: 312 },
  { id: 4, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', title: 'Закат над морем', city: 'Джанхот', category: 'Природа', likes: 143 },
  { id: 5, image: 'https://images.unsplash.com/photo-1611095970423-3f76e5f12ae5?w=800&q=80', title: 'Олимпийский парк вечером', city: 'Сириус', category: 'Кино', likes: 287 },
  { id: 6, image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80', title: 'Горнолыжный курорт Роза Хутор', city: 'Красная Поляна', category: 'Кино', likes: 174 },
  { id: 7, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80', title: 'Вид на море с холма', city: 'Тамань', category: 'Литература', likes: 221 },
  { id: 8, image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80', title: 'Старинный особняк', city: 'Краснодар', category: 'Литература', likes: 97 },
  { id: 9, image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', title: 'Сказочный лес Кабардинки', city: 'Кабардинка', category: 'Кино', likes: 189 },
  { id: 10, image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80', title: 'Музейная экспозиция', city: 'Туапсе', category: 'Литература', likes: 68 },
  { id: 11, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80', title: 'Казачий зал музея', city: 'Славянск-на-Кубани', category: 'Литература', likes: 112 },
  { id: 12, image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800&q=80', title: 'Библиотечный зал', city: 'Краснодар', category: 'Литература', likes: 84 },
  { id: 13, image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80', title: 'Кипарисовая аллея', city: 'Джанхот', category: 'Природа', likes: 231 },
  { id: 14, image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', title: 'Семья у берега моря', city: 'Новороссийск', category: 'Участники', likes: 345 },
  { id: 15, image: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=800&q=80', title: 'Путешественники в горах', city: 'Красная Поляна', category: 'Участники', likes: 276 },
  { id: 16, image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80', title: 'Счастливая семья в пути', city: 'Краснодар', category: 'Участники', likes: 198 },
  { id: 17, image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80', title: 'Дорога вдоль моря', city: 'Туапсе', category: 'Природа', likes: 267 },
  { id: 18, image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=800&q=80', title: 'Дети на природе', city: 'Сочи', category: 'Участники', likes: 312 },
];

export default function GalleryPage() {
  const [category, setCategory] = useState('Все');
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  const filtered = category === 'Все' ? galleryItems : galleryItems.filter(g => g.category === category);

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              🖼️ Галерея
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Фотогалерея маршрута
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Красоты Черноморья и моменты путешественников
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                onClick={() => setLightbox(item)}
                style={{ border: '2px solid rgba(0,153,255,0.1)' }}
              >
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-auto block" loading="lazy" />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,30,80,0.85) 100%)' }}
                  >
                    <div className="text-white font-black text-xs">{item.title}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-semibold" style={{ color: '#7DDFFF' }}>{item.city}</span>
                      <span className="text-xs font-black" style={{ color: '#FFD700' }}>❤️ {item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,20,60,0.95)', backdropFilter: 'blur(10px)' }}
            onClick={() => setLightbox(null)}
          >
            <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-2xl mb-4" />
              <div className="text-center">
                <div className="font-black text-white text-xl mb-1" style={{ fontFamily: 'Russo One, sans-serif' }}>{lightbox.title}</div>
                <div className="font-semibold" style={{ color: '#7DDFFF' }}>{lightbox.city}</div>
                <button onClick={() => setLightbox(null)} className="mt-4 btn-game py-2 px-6 text-sm">Закрыть</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

import { useState } from 'react';
import Layout from '@/components/Layout';
import { locations } from '@/data/locations';

const categories = ['Все', 'Локации', 'Участники', 'Природа', 'Кино', 'Литература'];

const galleryItems = [
  ...locations.map((loc, i) => ({
    id: i + 1,
    image: loc.image,
    title: loc.name,
    city: loc.city,
    category: loc.type === 'cinema' ? 'Кино' : loc.type === 'literary' ? 'Литература' : 'Локации',
    likes: Math.floor(Math.random() * 200) + 50,
  })),
  { id: 20, image: locations[0].image, title: 'Семья у Дома Лермонтова', city: 'Тамань', category: 'Участники', likes: 87 },
  { id: 21, image: locations[1].image, title: 'Рассвет над Черноморьем', city: 'Джанхот', category: 'Природа', likes: 143 },
  { id: 22, image: locations[2].image, title: 'Скала Киселёва — фото', city: 'Туапсе', category: 'Кино', likes: 256 },
  { id: 23, image: locations[3].image, title: 'Дети у Дендрария', city: 'Сочи', category: 'Участники', likes: 112 },
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

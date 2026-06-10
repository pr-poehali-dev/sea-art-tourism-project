import { useEffect, useRef, useState } from 'react';

const reviews = [
  { name: 'Семья Ивановых', city: 'Краснодар', text: 'Объехали весь маршрут за две недели! Дети в восторге — особенно понравилась скала из «Бриллиантовой руки». Лучшее семейное путешествие!', rating: 5, avatar: '👨‍👩‍👦' },
  { name: 'Мария К.', city: 'Москва', text: 'Дом Лермонтова в Тамани — потрясающее место. Никогда не думала, что литература может быть такой живой. Вернёмся обязательно!', rating: 5, avatar: '👩‍💼' },
  { name: 'Класс 7Б, СОШ №12', city: 'Ростов-на-Дону', text: 'Ездили со школой. Все дети набрали баллы и обменяли их на призы. Квесты — это гениально! Учителя довольны не меньше детей.', rating: 5, avatar: '🎓' },
];

const partners = ['Роснефть', 'Министерство культуры КК', 'Краснодарский край', 'Олимпийский парк', 'Роза Хутор', 'Дендрарий Сочи'];

function AnimatedSection({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} style={style}>
      {children}
    </div>
  );
}

interface ReviewsSectionProps {
  activeReview: number;
  setActiveReview: (i: number) => void;
}

export default function ReviewsSection({ activeReview, setActiveReview }: ReviewsSectionProps) {
  return (
    <>
      {/* ═══ REVIEWS ═══ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              ⭐ Отзывы участников
            </div>
            <h2
              className="font-black text-white"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Они уже путешествуют!
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-8 text-center transition-all duration-500"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(16px)' }}
            >
              <div className="text-6xl mb-4">{reviews[activeReview].avatar}</div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: reviews[activeReview].rating }).map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: '#FFD700' }}>⭐</span>
                ))}
              </div>
              <p className="text-lg font-semibold leading-relaxed mb-6" style={{ color: 'rgba(200,235,255,0.95)' }}>
                «{reviews[activeReview].text}»
              </p>
              <div className="font-black text-white">{reviews[activeReview].name}</div>
              <div className="text-sm font-semibold" style={{ color: '#7DDFFF' }}>{reviews[activeReview].city}</div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeReview ? '32px' : '10px',
                    height: '10px',
                    background: i === activeReview ? '#00D4FF' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTS CTA ═══ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)', border: '2px solid rgba(0,153,255,0.2)' }}
            >
              <div className="text-5xl mb-4">🤖</div>
              <h2
                className="font-black mb-3"
                style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#003B7A' }}
              >
                Подтверждай задания через бот
              </h2>
              <p className="text-gray-500 font-semibold max-w-lg mx-auto mb-8">
                Отправляй фото и видео прямо в Telegram или VK бот — без лишних приложений. Администратор проверит и начислит баллы!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-game"
                  style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                >
                  ✈️ Telegram-бот
                </a>
                <a
                  href="https://vk.com/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-game"
                  style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}
                >
                  💬 VK-бот
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="py-16" style={{ background: '#f8fafc' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <div className="section-tag">🤝 Партнёры</div>
            <h2
              className="font-black"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#003B7A' }}
            >
              Вместе создаём маршрут
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p}
                className="px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: 'white', border: '2px solid rgba(0,153,255,0.15)', color: '#003B7A', boxShadow: '0 4px 16px rgba(0,153,255,0.08)' }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

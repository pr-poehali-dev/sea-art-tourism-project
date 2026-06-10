import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { locations } from '@/data/locations';

const stats = [
  { value: '2 500+', label: 'Участников', icon: '👨‍👩‍👧‍👦' },
  { value: '12', label: 'Локаций', icon: '📍' },
  { value: '847 км', label: 'Маршрут', icon: '🚗' },
  { value: '150+', label: 'Заданий', icon: '🏆' },
];

const advantages = [
  { icon: '🎬', title: 'Кино и литература', desc: 'Побывайте на местах съёмок любимых фильмов и в домах великих писателей', color: '#0099FF' },
  { icon: '🎮', title: 'Игровая система', desc: 'Зарабатывайте баллы, выполняйте задания и обменивайте на крутые призы', color: '#00D4FF' },
  { icon: '👨‍👩‍👧', title: 'Для всей семьи', desc: 'Маршрут разработан специально для семей с детьми любого возраста', color: '#0057B7' },
  { icon: '🗺️', title: 'Готовый маршрут', desc: '12 уникальных точек, связанных оптимальным автомобильным маршрутом', color: '#00AAFF' },
  { icon: '⛽', title: 'Партнёр Роснефть', desc: 'АЗС Роснефть на всём маршруте — отдых, кафе и дополнительные баллы', color: '#FF4444' },
  { icon: '🤖', title: 'Telegram и VK бот', desc: 'Подтверждайте задания через удобных ботов — никаких лишних приложений', color: '#29B5E8' },
];

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

export default function Index() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveReview(p => (p + 1) % reviews.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
    <div className="overflow-x-hidden" style={{ fontFamily: 'Nunito, sans-serif' }}>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/b8cf2513-eaab-4def-8611-9f1e17d9f569/files/c6e61d4f-b47b-4bcc-933b-b298a901c637.jpg)` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,30,80,0.88) 0%, rgba(0,60,140,0.65) 50%, rgba(0,20,60,0.92) 100%)' }} />

        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${30 + i * 20}px`,
              height: `${30 + i * 20}px`,
              left: `${8 + i * 12}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        {/* Floating emojis */}
        {['📖', '🎬', '🌊', '⭐', '🎭', '🏛️', '🎯', '🏆'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-float pointer-events-none select-none"
            style={{
              left: `${6 + i * 12}%`,
              top: `${15 + (i % 4) * 18}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3.5 + i * 0.4}s`,
              opacity: 0.25,
            }}
          >
            {emoji}
          </div>
        ))}

        {/* Film strip top */}
        <div className="absolute top-0 left-0 right-0 film-strip h-10 flex items-center overflow-hidden z-10">
          <div className="flex gap-0 animate-film-scroll whitespace-nowrap opacity-50">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="text-white/50 text-xs px-5 select-none tracking-widest">● МОРЕ ИСКУССТВА ●</span>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white pt-24 pb-16 z-10">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6"
              style={{ background: 'rgba(0,153,255,0.25)', border: '1px solid rgba(0,212,255,0.4)', backdropFilter: 'blur(10px)' }}
            >
              <span>🌊</span>
              <span style={{ color: '#7DDFFF' }}>Краснодарский край · 12 локаций · 847 км</span>
            </div>
          </div>

          <h1
            className="font-black mb-4 leading-none animate-fade-in opacity-0"
            style={{
              fontFamily: 'Russo One, sans-serif',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              animationDelay: '0.4s',
              animationFillMode: 'forwards',
              textShadow: '0 0 60px rgba(0,153,255,0.4)',
            }}
          >
            МОРЕ<br />
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #0099FF, #5B8FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ИСКУССТВА
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-semibold animate-fade-in opacity-0"
            style={{ color: 'rgba(200,235,255,0.9)', animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Путешествие по следам кино и литературы<br />
            <span style={{ color: '#7DDFFF' }}>Черноморского побережья</span>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/map" className="btn-game text-lg">
              <Icon name="Map" size={20} />
              🚀 Начать путешествие
            </Link>
            <Link to="/profile" className="btn-outline-game text-lg">
              <Icon name="User" size={20} />
              Личный кабинет
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-black text-white" style={{ fontFamily: 'Russo One, sans-serif' }}>{s.value}</div>
                <div className="text-sm font-semibold" style={{ color: '#7DDFFF' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-wave z-10">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="section-tag">🎯 О проекте</div>
            <h2
              className="font-black mb-4"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#003B7A' }}
            >
              Культура в дороге —<br />
              <span style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                живые впечатления
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              «Море искусства» — это не просто маршрут. Это семейное приключение по местам, где рождались великие книги и снимались любимые фильмы. От Краснодара до Красной Поляны — 12 точек, сотни открытий, баллы и призы!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <AnimatedSection key={adv.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="game-card p-6 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${adv.color}20`, border: `2px solid ${adv.color}40` }}
                  >
                    {adv.icon}
                  </div>
                  <h3 className="font-black text-lg mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{adv.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROUTE PREVIEW ═══ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #003B7A 0%, #0057B7 60%, #0099FF 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              🗺️ Маршрут
            </div>
            <h2
              className="font-black text-white mb-3"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              12 уникальных точек
            </h2>
            <p className="font-semibold" style={{ color: 'rgba(160,220,255,0.9)' }}>
              От Краснодара до Красной Поляны — каждая остановка это история
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {locations.slice(0, 6).map((loc, i) => (
              <AnimatedSection key={loc.id} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Link to={`/location/${loc.id}`} className="block">
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,30,80,0.8) 100%)' }} />
                      <div
                        className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white"
                        style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', boxShadow: '0 4px 12px rgba(0,153,255,0.5)' }}
                      >
                        {i + 1}
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background: 'rgba(0,153,255,0.7)' }}>
                          {loc.city}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="font-black text-white text-sm mb-1" style={{ fontFamily: 'Russo One, sans-serif' }}>{loc.name}</div>
                      <div className="text-xs font-semibold" style={{ color: 'rgba(160,220,255,0.8)' }}>{loc.description}</div>
                      <div className="flex items-center gap-1 mt-3">
                        <span className="text-xs font-black" style={{ color: '#FFD700' }}>+{loc.points} баллов</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Link to="/map" className="btn-game inline-flex">
              <Icon name="Map" size={18} />
              Смотреть весь маршрут
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="section-tag">🎮 Как это работает</div>
            <h2
              className="font-black mb-3"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#003B7A' }}
            >
              Путешествуй и побеждай!
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '📝', title: 'Регистрируйся', desc: 'Создай профиль путешественника и получи стартовые бонусы' },
              { step: '02', icon: '🗺️', title: 'Едь по маршруту', desc: 'Посещай 12 культурных точек от Краснодара до Красной Поляны' },
              { step: '03', icon: '📱', title: 'Выполняй задания', desc: 'Квесты, викторины, фото — отправляй через Telegram или VK бот' },
              { step: '04', icon: '🏆', title: 'Получай призы', desc: 'Обменивай баллы на значки, сувениры и эксклюзивные подарки' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="text-center relative">
                  {i < 3 && (
                    <div
                      className="hidden md:block absolute top-10 left-full w-full h-0.5 z-0"
                      style={{ background: 'linear-gradient(90deg, #0099FF, #00D4FF)', opacity: 0.3 }}
                    />
                  )}
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 relative z-10"
                    style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)', border: '2px solid rgba(0,153,255,0.3)', boxShadow: '0 8px 24px rgba(0,153,255,0.15)' }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="text-xs font-black mb-2 tracking-widest"
                    style={{ color: '#0099FF' }}
                  >
                    ШАГ {item.step}
                  </div>
                  <h3 className="font-black text-lg mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS PREVIEW ═══ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="section-tag">🏅 Достижения</div>
            <h2
              className="font-black mb-3"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#003B7A' }}
            >
              Коллекционируй награды
            </h2>
            <p className="text-gray-500 font-semibold max-w-xl mx-auto">
              7 уникальных достижений за исследование культурного наследия Черноморья
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center">
            {[
              { emoji: '🌱', title: 'Начинающий путешественник', locked: false },
              { emoji: '🔍', title: 'Исследователь Кубани', locked: false },
              { emoji: '📚', title: 'Любитель литературы', locked: true },
              { emoji: '🎬', title: 'Любитель кино', locked: true },
              { emoji: '🏖️', title: 'Покоритель побережья', locked: true },
              { emoji: '👨‍👩‍👧', title: 'Семейный герой', locked: true },
              { emoji: '⭐', title: 'Мастер маршрута', locked: true },
            ].map((ach, i) => (
              <AnimatedSection key={ach.title} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className={`achievement-badge ${ach.locked ? 'locked' : 'unlocked'} text-center`}>
                  <div className="text-4xl">{ach.emoji}</div>
                  <div className="text-xs font-bold text-center leading-tight" style={{ color: ach.locked ? '#9ca3af' : '#003B7A' }}>
                    {ach.title}
                  </div>
                  {!ach.locked && (
                    <div
                      className="text-xs font-black px-2 py-0.5 rounded-full"
                      style={{ background: '#0099FF', color: 'white' }}
                    >
                      ✓ Получено
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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

      {/* ═══ FINAL CTA ═══ */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001a3d, #003B7A, #0057B7)' }}
      >
        {/* Glowing orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: '#0099FF', filter: 'blur(80px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: '#00D4FF', filter: 'blur(80px)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-5xl mb-6">🚀</div>
            <h2
              className="font-black text-white mb-4"
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              ГОТОВ К ПРИКЛЮЧЕНИЮ?
            </h2>
            <p className="text-xl font-semibold mb-10" style={{ color: 'rgba(160,220,255,0.9)' }}>
              Зарегистрируйся, набери баллы и получи эксклюзивные призы!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/map" className="btn-game text-xl px-10 py-5" style={{ fontSize: '1.1rem' }}>
                🗺️ Начать путешествие
              </Link>
              <Link to="/shop" className="btn-outline-game text-xl px-10 py-5" style={{ fontSize: '1.1rem' }}>
                🎁 Магазин призов
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
    </Layout>
  );
}
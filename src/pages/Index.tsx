import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { locations } from '@/data/locations';

const stats = [
  { value: '2 500+', label: 'Участников', icon: '👨‍👩‍👧‍👦' },
  { value: '12', label: 'Локаций', icon: '📍' },
  { value: '847 км', label: 'Маршрут', icon: '🚗' },
  { value: '150+', label: 'Заданий', icon: '🏆' },
];

const reviews = [
  {
    name: 'Семья Ивановых',
    city: 'Краснодар',
    text: 'Объехали весь маршрут за две недели! Дети в восторге — особенно понравилась скала из «Бриллиантовой руки». Это лучшее семейное путешествие за последние годы.',
    rating: 5,
    avatar: '👨‍👩‍👦',
  },
  {
    name: 'Мария К.',
    city: 'Москва',
    text: 'Дом Лермонтова в Тамани — потрясающее место. Никогда не думала, что литература может быть такой живой. Вернёмся обязательно!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Класс 7Б, СОШ №12',
    city: 'Ростов-на-Дону',
    text: 'Ездили со школой. Все дети набрали баллы и обменяли их на призы. Квесты и викторины — это гениально! Учителя довольны не меньше детей.',
    rating: 5,
    avatar: '🎓',
  },
];

const advantages = [
  { icon: '🎬', title: 'Кино и литература', desc: 'Побывайте на местах съёмок любимых фильмов и в домах великих писателей' },
  { icon: '🎮', title: 'Игровая система', desc: 'Зарабатывайте баллы, выполняйте задания и обменивайте на призы' },
  { icon: '👨‍👩‍👧', title: 'Для всей семьи', desc: 'Маршрут разработан специально для семей с детьми любого возраста' },
  { icon: '🗺️', title: 'Готовый маршрут', desc: '12 уникальных точек, связанных оптимальным автомобильным маршрутом' },
  { icon: '⛽', title: 'Партнёр Роснефть', desc: 'АЗС Роснефть на всём маршруте — отдых, кафе и дополнительные баллы' },
  { icon: '🤖', title: 'Telegram и VK бот', desc: 'Подтверждайте задания через удобные боты — никаких лишних приложений' },
];

const partners = ['Роснефть', 'Министерство культуры КК', 'Краснодарский край', 'Олимпийский парк', 'Роза Хутор', 'Дендрарий Сочи'];

function AnimatedSection({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/b8cf2513-eaab-4def-8611-9f1e17d9f569/files/c6e61d4f-b47b-4bcc-933b-b298a901c637.jpg)` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['📖', '🎬', '🌊', '⭐', '🎭', '🏛️'].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Film strip top */}
        <div className="absolute top-0 left-0 right-0 film-strip h-10 flex items-center overflow-hidden">
          <div className="flex gap-0 animate-film-scroll whitespace-nowrap opacity-60">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="text-white/40 text-xs px-6 select-none tracking-widest">● МОРЕ ИСКУССТВА ●</span>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white pt-20">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-sm mb-6">
              <span>🌊</span>
              <span>Краснодарский край · 12 локаций · 847 км</span>
            </div>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Море<br />
            <span className="text-gradient-sea">искусства</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Путешествие по следам кино и литературы<br />
            Черноморского побережья
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/map" className="btn-primary text-lg px-8 py-4">
              <Icon name="Map" size={20} />
              Начать путешествие
            </Link>
            <Link to="/profile" className="btn-secondary text-lg px-8 py-4">
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
              <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-wave">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sea-100 text-sea-700 text-sm font-medium mb-4">
              🎯 О проекте
            </div>
            <h2 className="section-title text-ocean-deep mb-4">
              Культура в дороге —<br />
              <span className="text-gradient-sea">живые впечатления</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              «Море искусства» — это не просто маршрут. Это семейное приключение по местам, где рождались великие книги и снимались любимые фильмы. От Краснодара до Красной Поляны — 12 точек, сотни открытий.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <AnimatedSection key={adv.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="bg-gradient-to-br from-white to-sea-50 border border-sea-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-sea-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{adv.icon}</div>
                  <h3 className="font-semibold text-ocean-deep text-lg mb-2">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE PREVIEW */}
      <section className="py-24 bg-gradient-to-br from-ocean-deep via-ocean-mid to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-sea-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-400 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
              📍 Маршрут
            </div>
            <h2 className="section-title text-white mb-4">12 уникальных точек</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">От литературных музеев до мест съёмок — каждая остановка открывает новую страницу истории</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.id} style={{ transitionDelay: `${i * 0.07}s` }}>
                <Link to={`/location/${loc.id}`}>
                  <div className="location-card glass-card rounded-2xl overflow-hidden group">
                    <div className="relative h-36 overflow-hidden">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                          #{i + 1}
                        </span>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          loc.type === 'cinema' ? 'bg-purple-500/80 text-white' :
                          loc.type === 'literary' ? 'bg-amber-500/80 text-white' :
                          'bg-teal-500/80 text-white'
                        }`}>
                          {loc.type === 'cinema' ? '🎬 Кино' : loc.type === 'literary' ? '📖 Лит.' : '🏛️ Музей'}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-yellow-400/90 text-ocean-deep text-xs font-bold">
                        +{loc.points} б.
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sea-300 text-xs font-medium mb-1">{loc.city}</div>
                      <h3 className="text-white font-semibold text-sm leading-tight mb-2 line-clamp-2">{loc.name}</h3>
                      {loc.film && <div className="text-white/50 text-xs truncate">🎬 {loc.film}</div>}
                      {loc.author && <div className="text-white/50 text-xs truncate">✍️ {loc.author}</div>}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/map" className="btn-primary text-base px-8 py-3">
              <Icon name="Map" size={18} />
              Открыть интерактивную карту
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sea-100 text-sea-700 text-sm font-medium mb-4">
              🎮 Как это работает
            </div>
            <h2 className="section-title text-ocean-deep mb-4">Три простых шага</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', icon: '📝', title: 'Зарегистрируйтесь', desc: 'Создайте профиль путешественника и начните отслеживать свой прогресс' },
              { step: '02', icon: '🗺️', title: 'Посещайте локации', desc: 'Объезжайте точки маршрута, выполняйте задания и зарабатывайте баллы' },
              { step: '03', icon: '🎁', title: 'Получайте призы', desc: 'Обменивайте баллы на значки, сувениры и эксклюзивные подарки проекта' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-2xl sea-gradient flex items-center justify-center text-3xl shadow-xl shadow-sea-200">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 text-ocean-deep text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-ocean-deep text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-gradient-to-br from-sea-50 to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sea-100 text-sea-700 text-sm font-medium mb-4">
              ⭐ Отзывы
            </div>
            <h2 className="section-title text-ocean-deep">Что говорят путешественники</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-sea-100 hover:shadow-md transition-shadow">
                  <div className="flex mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">«{r.text}»</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sea-100 flex items-center justify-center text-xl">
                      {r.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-ocean-deep text-sm">{r.name}</div>
                      <div className="text-gray-400 text-xs">{r.city}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <div className="text-gray-400 text-sm font-medium tracking-widest uppercase">Партнёры проекта</div>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div key={p} className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium hover:border-sea-200 hover:text-sea-600 transition-colors cursor-pointer">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sea-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal-300 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection>
            <div className="text-6xl mb-6">🚗</div>
            <h2 className="section-title text-white mb-4">Готовы к путешествию?</h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
              Зарегистрируйтесь и получите доступ ко всем заданиям, баллам и призам маршрута
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-ocean-deep bg-white hover:bg-sea-50 transition-colors shadow-lg text-lg">
                <Icon name="UserPlus" size={20} />
                Начать бесплатно
              </Link>
              <Link to="/map" className="btn-secondary text-lg px-8 py-4">
                <Icon name="Map" size={20} />
                Смотреть маршрут
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

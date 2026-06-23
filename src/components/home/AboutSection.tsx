import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { locations } from '@/data/locations';

const advantages = [
  { icon: '🎬', title: 'Кино и литература', desc: 'Побывайте на местах съёмок любимых фильмов и в домах великих писателей', color: '#0099FF' },
  { icon: '🎮', title: 'Игровая система', desc: 'Зарабатывайте баллы, выполняйте задания и обменивайте на крутые призы', color: '#00D4FF' },
  { icon: '👨‍👩‍👧', title: 'Для всей семьи', desc: 'Маршрут разработан специально для семей с детьми любого возраста', color: '#0057B7' },
  { icon: '🗺️', title: 'Готовый маршрут', desc: '12 уникальных точек, связанных оптимальным автомобильным маршрутом', color: '#00AAFF' },
  { icon: '⛽', title: 'Партнёр Роснефть', desc: 'АЗС Роснефть на всём маршруте — отдых, кафе и дополнительные баллы', color: '#FF4444' },
  { icon: '🤖', title: 'Telegram и VK бот', desc: 'Подтверждайте задания через удобных ботов — никаких лишних приложений', color: '#29B5E8' },
];

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

export default function AboutSection() {
  return (
    <>
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
              Откройте «Море искусства» — маршрут, где каждая остановка становится новым открытием. 12 точек от Краснодара до Красной Поляны, захватывающие истории, любимые фильмы, великие книги, баллы за прохождение и приятные призы для всей семьи.
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
    </>
  );
}
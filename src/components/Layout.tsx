import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', label: 'Главная', icon: 'Home' },
  { path: '/map', label: 'Маршрут', icon: 'Map' },
  { path: '/profile', label: 'Профиль', icon: 'User' },
  { path: '/shop', label: 'Магазин', icon: 'ShoppingBag' },
  { path: '/leaderboard', label: 'Рейтинг', icon: 'Trophy' },
  { path: '/news', label: 'Новости', icon: 'Newspaper' },
  { path: '/gallery', label: 'Галерея', icon: 'Images' },
  { path: '/blog', label: 'Блог', icon: 'BookOpen' },
  { path: '/family', label: 'Для семей', icon: 'Heart' },
  { path: '/faq', label: 'FAQ', icon: 'CircleHelp' },
  { path: '/partners', label: 'Партнёры', icon: 'Handshake' },
  { path: '/contacts', label: 'Контакты', icon: 'Mail' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'shadow-xl'
            : 'bg-transparent'
        }`}
        style={scrolled || !isHome ? {
          background: 'linear-gradient(135deg, #003B7A 0%, #0057B7 100%)',
          backdropFilter: 'blur(20px)',
        } : {}}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)' }}
              >
                <span className="text-2xl">🌊</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-black text-lg leading-tight tracking-wide" style={{ fontFamily: 'Russo One, sans-serif' }}>
                  МОРЕ ИСКУССТВА
                </div>
                <div className="text-xs font-semibold" style={{ color: '#7DD3FF' }}>
                  Культурный маршрут Черноморья
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/15'
                  }`}
                  style={location.pathname === item.path ? {
                    background: 'rgba(0, 212, 255, 0.25)',
                    color: '#00D4FF',
                  } : {}}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="px-3 py-2 rounded-xl text-sm font-bold text-white/75 hover:text-white hover:bg-white/15 transition-all flex items-center gap-1">
                  Ещё <Icon name="ChevronDown" size={14} />
                </button>
                <div
                  className="absolute top-full right-0 mt-2 w-48 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)', border: '1px solid rgba(0,153,255,0.3)' }}
                >
                  {navItems.slice(7).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Icon name={item.icon as any} size={15} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black text-white transition-all duration-200 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)' }}
              >
                🚀 Регистрация
              </Link>
              <Link
                to="/profile"
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black text-white transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', boxShadow: '0 4px 16px rgba(0,153,255,0.4)' }}
              >
                <Icon name="User" size={16} />
                Войти
              </Link>
              <button
                className="xl:hidden p-2.5 rounded-xl text-white hover:bg-white/15 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="xl:hidden border-t"
            style={{
              background: 'linear-gradient(135deg, #002a5e, #003B7A)',
              borderColor: 'rgba(0,153,255,0.2)',
            }}
          >
            <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                  style={location.pathname === item.path ? { background: 'rgba(0,153,255,0.3)', color: '#00D4FF' } : {}}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{ background: 'linear-gradient(135deg, #001a3d 0%, #003B7A 100%)' }} className="text-white">
        <div className="film-strip h-8 flex items-center overflow-hidden">
          <div className="flex gap-0 animate-film-scroll whitespace-nowrap">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="text-white/20 text-xs px-4 select-none">🎬 МОРЕ ИСКУССТВА 🌊</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)' }}
                >
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <div className="font-black text-xl" style={{ fontFamily: 'Russo One, sans-serif' }}>МОРЕ ИСКУССТВА</div>
                  <div className="text-sm font-semibold" style={{ color: '#7DD3FF' }}>Путешествие по следам кино и литературы</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                Откройте «Море искусства» — маршрут, где каждая остановка становится новым открытием. 12 точек, захватывающие истории, любимые фильмы, великие книги, баллы и призы для всей семьи.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:scale-110"
                  style={{ background: 'rgba(0,153,255,0.2)', border: '1px solid rgba(0,153,255,0.3)' }}
                  title="Telegram-бот"
                >
                  ✈️
                </a>
                <a
                  href="https://vk.ru/club239535650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:scale-110"
                  style={{ background: 'rgba(0,153,255,0.2)', border: '1px solid rgba(0,153,255,0.3)' }}
                  title="ВКонтакте"
                >
                  💬
                </a>
              </div>
            </div>

            <div>
              <div className="font-black text-white mb-4 tracking-wide">Навигация</div>
              <ul className="space-y-2">
                {navItems.slice(0, 6).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/60 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2"
                      style={{ color: undefined }}
                    >
                      <span style={{ color: '#0099FF' }}>→</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-black text-white mb-4 tracking-wide">Поддержка</div>
              <ul className="space-y-2">
                {navItems.slice(6).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/60 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2"
                    >
                      <span style={{ color: '#0099FF' }}>→</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-2xl" style={{ background: 'rgba(0,153,255,0.15)', border: '1px solid rgba(0,153,255,0.3)' }}>
                <div className="text-xs font-black text-white/80 mb-1">🤖 Telegram-бот</div>
                <a href="https://t.me/more_iskusstva_bot" target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: '#00D4FF' }}>@more_iskusstva_bot</a>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(0,153,255,0.2)' }}
          >
            <div className="text-white/40 text-sm font-semibold">© Июнь 2026 Море искусства. Все права защищены.</div>
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-xs font-semibold">Партнёр маршрута:</span>
              <span className="px-3 py-1 rounded-lg text-xs font-black text-white" style={{ background: '#c00' }}>⛽ Роснефть</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
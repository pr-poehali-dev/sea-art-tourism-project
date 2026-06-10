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
    <div className="min-h-screen flex flex-col font-body">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-ocean-deep/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl sea-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-xl">🌊</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-white text-lg leading-tight">Море искусства</div>
                <div className="text-sea-300 text-xs">Маршрут по Черноморью</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-sea-600/40 text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1">
                  Ещё <Icon name="ChevronDown" size={14} />
                </button>
                <div className="absolute top-full right-0 mt-1 w-44 bg-ocean-deep border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                  {navItems.slice(7).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Icon name={item.icon as any} size={14} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white sea-gradient hover:opacity-90 transition-opacity shadow-lg"
              >
                <Icon name="User" size={16} />
                Мой профиль
              </Link>
              <button
                className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden bg-ocean-deep/98 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-sea-600/40 text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
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
      <footer className="bg-ocean-deep text-white">
        {/* Film strip decoration */}
        <div className="film-strip h-8 flex items-center overflow-hidden">
          <div className="flex gap-0 animate-film-scroll whitespace-nowrap">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="text-white/20 text-xs px-4 select-none">🎬 МОРЕ ИСКУССТВА</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl sea-gradient flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl">Море искусства</div>
                  <div className="text-sea-300 text-sm">Путешествие по следам кино и литературы</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Автомобильный маршрут по Краснодарскому краю для семей, школьников и всех, кто любит культуру и приключения.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-lg">✈️</a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-lg">💬</a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-lg">📘</a>
              </div>
            </div>

            <div>
              <div className="font-semibold text-white mb-4">Навигация</div>
              <ul className="space-y-2">
                {navItems.slice(0, 6).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-white/60 hover:text-sea-300 text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-semibold text-white mb-4">Поддержка</div>
              <ul className="space-y-2">
                {navItems.slice(6).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-white/60 hover:text-sea-300 text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm">© 2024 Море искусства. Все права защищены.</div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs">При поддержке Роснефть</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs">Краснодарский край</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

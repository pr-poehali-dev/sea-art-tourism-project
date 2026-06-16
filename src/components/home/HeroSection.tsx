import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '2 500+', label: 'Участников', icon: '👨‍👩‍👧‍👦' },
  { value: '12', label: 'Локаций', icon: '📍' },
  { value: '751 км', label: 'Маршрут', icon: '🚗' },
  { value: '150+', label: 'Заданий', icon: '🏆' },
];

export default function HeroSection() {
  return (
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
            <span style={{ color: '#7DDFFF' }}>Краснодарский край · 12 локаций · 751 км</span>
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
  );
}
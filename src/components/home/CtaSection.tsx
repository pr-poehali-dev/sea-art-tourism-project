import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default function CtaSection() {
  return (
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
  );
}

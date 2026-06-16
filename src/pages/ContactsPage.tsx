import { useState } from 'react';
import Layout from '@/components/Layout';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contacts = [
    { emoji: '✉️', label: 'Email', value: 'more_iskusstva@bk.ru', link: 'mailto:more_iskusstva@bk.ru' },
    { emoji: '✈️', label: 'Telegram-бот', value: '@more_iskusstva_bot', link: 'https://t.me/more_iskusstva_bot' },
    { emoji: '💬', label: 'ВКонтакте', value: 'vk.ru/club239535650', link: 'https://vk.ru/club239535650' },
    { emoji: '📞', label: 'Телефон', value: '+7 (918) 090-08-39', link: 'tel:+79180900839' },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              📬 Контакты
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Свяжитесь с нами
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Ответим на ваши вопросы в течение 24 часов
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left: contacts + bots */}
            <div className="space-y-6">
              <div>
                <h2 className="font-black text-xl mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                  📞 Контактная информация
                </h2>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer">
                      <div className="game-card p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)' }}
                        >
                          {c.emoji}
                        </div>
                        <div>
                          <div className="text-xs font-black text-gray-400">{c.label}</div>
                          <div className="font-black" style={{ color: '#0099FF' }}>{c.value}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)', border: '2px solid rgba(0,153,255,0.2)' }}
              >
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-black text-lg mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                  Боты для заданий
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">
                  Для отправки фото и подтверждения заданий используйте официальные боты проекта
                </p>
                <div className="flex flex-col gap-2">
                  <a href="https://t.me/more_iskusstva_bot" target="_blank" rel="noopener noreferrer" className="btn-game py-2.5 justify-center text-sm" style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}>
                    ✈️ Telegram-бот @more_iskusstva_bot
                  </a>
                  <a href="https://vk.ru/club239535650" target="_blank" rel="noopener noreferrer" className="btn-game py-2.5 justify-center text-sm" style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}>
                    💬 ВКонтакте сообщество
                  </a>
                </div>
              </div>

              <div className="game-card p-5">
                <div className="font-black text-sm mb-1" style={{ color: '#003B7A' }}>🕐 Часы работы поддержки</div>
                <div className="text-sm font-semibold text-gray-500">Пн–Пт: 9:00 – 18:00 (МСК)</div>
                <div className="text-sm font-semibold text-gray-500">Сб–Вс: 10:00 – 16:00 (МСК)</div>
              </div>
            </div>

            {/* Right: feedback form */}
            <div>
              <h2 className="font-black text-xl mb-4" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                💌 Обратная связь
              </h2>
              {sent ? (
                <div
                  className="rounded-3xl p-10 text-center"
                  style={{ background: 'linear-gradient(135deg, #E0F5FF, white)', border: '2px solid rgba(0,153,255,0.3)' }}
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-black text-xl mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>Сообщение отправлено!</h3>
                  <p className="text-sm font-semibold text-gray-500">Мы ответим в течение 24 часов.</p>
                  <button onClick={() => setSent(false)} className="mt-5 btn-game py-2 px-6 text-sm">Отправить ещё</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="game-card p-6 space-y-4">
                  {[
                    { name: 'name', placeholder: 'Ваше имя', label: '👤 Имя' },
                    { name: 'email', placeholder: 'Email', label: '✉️ Email', type: 'email' },
                    { name: 'subject', placeholder: 'Тема обращения', label: '📌 Тема' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>{field.label}</label>
                      <input
                        type={field.type ?? 'text'}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all duration-200"
                        style={{
                          border: '2px solid rgba(0,153,255,0.2)',
                          background: '#f8fafc',
                          color: '#003B7A',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#0099FF')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(0,153,255,0.2)')}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>💬 Сообщение</label>
                    <textarea
                      placeholder="Ваше сообщение..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all duration-200 resize-none"
                      style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                      onFocus={(e) => (e.target.style.borderColor = '#0099FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(0,153,255,0.2)')}
                    />
                  </div>
                  <button type="submit" className="btn-game w-full justify-center">
                    ✉️ Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
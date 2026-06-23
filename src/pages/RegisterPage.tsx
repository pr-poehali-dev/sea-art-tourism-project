import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

type AccountType = 'personal' | 'family' | null;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    password: '',
    passwordConfirm: '',
    // family fields
    familyName: '',
    adultsCount: '2',
    childrenCount: '1',
    childrenAges: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Введите имя';
    if (!form.email.trim()) newErrors.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Некорректный email';
    if (!form.password) newErrors.password = 'Введите пароль';
    else if (form.password.length < 6) newErrors.password = 'Минимум 6 символов';
    if (form.password !== form.passwordConfirm) newErrors.passwordConfirm = 'Пароли не совпадают';
    if (accountType === 'family' && !form.familyName.trim()) newErrors.familyName = 'Введите название семьи';
    if (!form.agreeTerms) newErrors.agreeTerms = 'Необходимо согласие';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) setStep(3);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif', background: 'linear-gradient(180deg, #E0F5FF 0%, #f0f9ff 100%)' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-14">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              🚀 Регистрация
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Начать путешествие
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Создайте аккаунт и получите доступ к маршруту, заданиям и призам
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 max-w-2xl">

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300"
                  style={step >= s ? {
                    background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(0,153,255,0.4)',
                  } : {
                    background: '#E0F5FF',
                    color: '#94a3b8',
                  }}
                >
                  {step > s ? '✓' : s}
                </div>
                {s < 3 && (
                  <div
                    className="w-12 h-1 rounded-full transition-all duration-300"
                    style={{ background: step > s ? '#0099FF' : '#E0F5FF' }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Choose type */}
          {step === 1 && (
            <div>
              <h2 className="font-black text-2xl text-center mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                Кто вы?
              </h2>
              <p className="text-center text-gray-400 font-semibold mb-8">
                Выберите тип участника — это влияет на рейтинг и задания
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {/* Personal */}
                <button
                  onClick={() => setAccountType('personal')}
                  className="text-left p-6 rounded-3xl transition-all duration-200 hover:scale-105"
                  style={accountType === 'personal' ? {
                    background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)',
                    border: '3px solid #0099FF',
                    boxShadow: '0 8px 30px rgba(0,153,255,0.25)',
                  } : {
                    background: 'white',
                    border: '2px solid rgba(0,153,255,0.15)',
                    boxShadow: '0 4px 16px rgba(0,153,255,0.08)',
                  }}
                >
                  <div className="text-5xl mb-3">🧔</div>
                  <div className="font-black text-xl mb-1" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                    Личный участник
                  </div>
                  <div className="text-sm font-semibold text-gray-500">
                    Один человек путешествует по маршруту самостоятельно. Участвует в личном рейтинге.
                  </div>
                  {accountType === 'personal' && (
                    <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: '#0099FF' }}>
                      ✓ Выбрано
                    </div>
                  )}
                </button>

                {/* Family */}
                <button
                  onClick={() => setAccountType('family')}
                  className="text-left p-6 rounded-3xl transition-all duration-200 hover:scale-105"
                  style={accountType === 'family' ? {
                    background: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
                    border: '3px solid #F59E0B',
                    boxShadow: '0 8px 30px rgba(245,158,11,0.2)',
                  } : {
                    background: 'white',
                    border: '2px solid rgba(0,153,255,0.15)',
                    boxShadow: '0 4px 16px rgba(0,153,255,0.08)',
                  }}
                >
                  <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                  <div className="font-black text-xl mb-1" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                    Семья
                  </div>
                  <div className="text-sm font-semibold text-gray-500">
                    Путешествие всей семьёй с детьми. Участвует в семейном рейтинге и получает задания для детей.
                  </div>
                  {accountType === 'family' && (
                    <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: '#F59E0B' }}>
                      ✓ Выбрано
                    </div>
                  )}
                </button>
              </div>

              {/* Bots block */}
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: 'linear-gradient(135deg, #E0F5FF, #C0EAFF)', border: '2px solid rgba(0,153,255,0.2)' }}
              >
                <div className="font-black mb-2" style={{ color: '#003B7A' }}>💬 Уже есть аккаунт в боте?</div>
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  Вы можете войти или подтверждать задания напрямую через Telegram или ВКонтакте без регистрации на сайте.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="https://t.me/more_iskusstva_bot" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                  >
                    ✈️ Telegram-бот
                  </a>
                  <a href="https://vk.ru/club239535650" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #0057B7, #0099FF)' }}
                  >
                    💬 ВКонтакте
                  </a>
                </div>
              </div>

              <button
                onClick={() => { if (accountType) setStep(2); }}
                className="w-full py-4 rounded-2xl font-black text-lg text-white transition-all duration-200"
                style={accountType ? {
                  background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                  boxShadow: '0 6px 24px rgba(0,153,255,0.4)',
                } : {
                  background: '#e5e7eb',
                  color: '#9ca3af',
                  cursor: 'not-allowed',
                }}
                disabled={!accountType}
              >
                Продолжить →
              </button>
            </div>
          )}

          {/* Step 2: Fill form */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <h2 className="font-black text-2xl text-center mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                {accountType === 'family' ? '👨‍👩‍👧‍👦 Данные семьи' : '🧔 Личные данные'}
              </h2>
              <p className="text-center text-gray-400 font-semibold mb-8">
                {accountType === 'family' ? 'Заполните информацию о вашей семье' : 'Заполните личные данные для аккаунта'}
              </p>

              <div className="game-card p-6 space-y-4">
                {/* Family name (only for family) */}
                {accountType === 'family' && (
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>👨‍👩‍👧‍👦 Название семьи *</label>
                    <input
                      type="text"
                      placeholder="Например: Семья Ивановых"
                      value={form.familyName}
                      onChange={e => handleChange('familyName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                      style={{ border: `2px solid ${errors.familyName ? '#ef4444' : 'rgba(0,153,255,0.2)'}`, background: '#f8fafc', color: '#003B7A' }}
                      onFocus={e => (e.target.style.borderColor = '#0099FF')}
                      onBlur={e => (e.target.style.borderColor = errors.familyName ? '#ef4444' : 'rgba(0,153,255,0.2)')}
                    />
                    {errors.familyName && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.familyName}</p>}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>👤 {accountType === 'family' ? 'Имя ответственного' : 'Имя и фамилия'} *</label>
                  <input
                    type="text"
                    placeholder={accountType === 'family' ? 'Иван Иванов' : 'Имя и фамилия'}
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                    style={{ border: `2px solid ${errors.name ? '#ef4444' : 'rgba(0,153,255,0.2)'}`, background: '#f8fafc', color: '#003B7A' }}
                    onFocus={e => (e.target.style.borderColor = '#0099FF')}
                    onBlur={e => (e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(0,153,255,0.2)')}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>✉️ Email *</label>
                  <input
                    type="email"
                    placeholder="email@example.ru"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                    style={{ border: `2px solid ${errors.email ? '#ef4444' : 'rgba(0,153,255,0.2)'}`, background: '#f8fafc', color: '#003B7A' }}
                    onFocus={e => (e.target.style.borderColor = '#0099FF')}
                    onBlur={e => (e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(0,153,255,0.2)')}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>}
                </div>

                {/* Phone + City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>📞 Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                      style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                      onFocus={e => (e.target.style.borderColor = '#0099FF')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,153,255,0.2)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>🏙️ Город</label>
                    <input
                      type="text"
                      placeholder="Откуда вы?"
                      value={form.city}
                      onChange={e => handleChange('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                      style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                      onFocus={e => (e.target.style.borderColor = '#0099FF')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,153,255,0.2)')}
                    />
                  </div>
                </div>

                {/* Family composition */}
                {accountType === 'family' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>👫 Взрослых</label>
                      <select
                        value={form.adultsCount}
                        onChange={e => handleChange('adultsCount', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                        style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                      >
                        {['1','2','3','4'].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>👶 Детей</label>
                      <select
                        value={form.childrenCount}
                        onChange={e => handleChange('childrenCount', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                        style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                      >
                        {['0','1','2','3','4','5'].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>🎂 Возраст детей</label>
                      <input
                        type="text"
                        placeholder="3, 7, 12"
                        value={form.childrenAges}
                        onChange={e => handleChange('childrenAges', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                        style={{ border: '2px solid rgba(0,153,255,0.2)', background: '#f8fafc', color: '#003B7A' }}
                        onFocus={e => (e.target.style.borderColor = '#0099FF')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(0,153,255,0.2)')}
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>🔒 Пароль *</label>
                    <input
                      type="password"
                      placeholder="Минимум 6 символов"
                      value={form.password}
                      onChange={e => handleChange('password', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                      style={{ border: `2px solid ${errors.password ? '#ef4444' : 'rgba(0,153,255,0.2)'}`, background: '#f8fafc', color: '#003B7A' }}
                      onFocus={e => (e.target.style.borderColor = '#0099FF')}
                      onBlur={e => (e.target.style.borderColor = errors.password ? '#ef4444' : 'rgba(0,153,255,0.2)')}
                    />
                    {errors.password && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-black mb-1" style={{ color: '#003B7A' }}>🔒 Повторите пароль *</label>
                    <input
                      type="password"
                      placeholder="Повторите пароль"
                      value={form.passwordConfirm}
                      onChange={e => handleChange('passwordConfirm', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none"
                      style={{ border: `2px solid ${errors.passwordConfirm ? '#ef4444' : 'rgba(0,153,255,0.2)'}`, background: '#f8fafc', color: '#003B7A' }}
                      onFocus={e => (e.target.style.borderColor = '#0099FF')}
                      onBlur={e => (e.target.style.borderColor = errors.passwordConfirm ? '#ef4444' : 'rgba(0,153,255,0.2)')}
                    />
                    {errors.passwordConfirm && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.passwordConfirm}</p>}
                  </div>
                </div>

                {/* Agreement */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agreeTerms}
                      onChange={e => handleChange('agreeTerms', e.target.checked)}
                      className="mt-1 flex-shrink-0"
                    />
                    <span className="text-sm font-semibold text-gray-500">
                      Я соглашаюсь с{' '}
                      <span style={{ color: '#0099FF' }}>условиями использования</span>
                      {' '}и{' '}
                      <span style={{ color: '#0099FF' }}>политикой конфиденциальности</span>
                      {' '}проекта «Море искусства»
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.agreeTerms}</p>}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-2xl font-black text-sm transition-all hover:bg-gray-100"
                  style={{ color: '#6b7280', border: '2px solid #e5e7eb', background: 'white' }}
                >
                  ← Назад
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-2xl font-black text-lg text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #0099FF, #00D4FF)', boxShadow: '0 6px 24px rgba(0,153,255,0.4)' }}
                >
                  Зарегистрироваться 🚀
                </button>
              </div>

              <p className="text-center text-sm font-semibold text-gray-400 mt-4">
                Уже есть аккаунт?{' '}
                <Link to="/profile" style={{ color: '#0099FF' }}>Войти</Link>
              </p>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div
              className="rounded-3xl p-10 text-center"
              style={{ background: 'white', border: '2px solid rgba(0,153,255,0.2)', boxShadow: '0 8px 40px rgba(0,153,255,0.15)' }}
            >
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="font-black text-2xl mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
                Добро пожаловать!
              </h2>
              <p className="text-gray-500 font-semibold mb-2">
                {accountType === 'family'
                  ? `Аккаунт «${form.familyName || 'Семья'}» успешно создан`
                  : `Аккаунт «${form.name}» успешно создан`
                }
              </p>
              <p className="text-sm text-gray-400 font-semibold mb-6">
                Письмо с подтверждением отправлено на {form.email}
              </p>

              {/* Next steps */}
              <div
                className="rounded-2xl p-5 mb-6 text-left"
                style={{ background: '#f0f9ff', border: '2px solid rgba(0,153,255,0.15)' }}
              >
                <div className="font-black text-sm mb-3" style={{ color: '#003B7A' }}>Следующие шаги:</div>
                <ul className="space-y-2 text-sm font-semibold text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="font-black" style={{ color: '#0099FF' }}>1.</span>
                    Подпишитесь на Telegram-бот @more_iskusstva_bot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black" style={{ color: '#0099FF' }}>2.</span>
                    Изучите маршрут и запланируйте поездку
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black" style={{ color: '#0099FF' }}>3.</span>
                    На каждой точке сканируйте QR-код и выполняйте задание
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-black" style={{ color: '#0099FF' }}>4.</span>
                    Копите баллы и обменивайте на призы в магазине
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://t.me/more_iskusstva_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-game justify-center"
                  style={{ background: 'linear-gradient(135deg, #29B5E8, #00D4FF)' }}
                >
                  ✈️ Подключить Telegram-бот
                </a>
                <Link
                  to="/map"
                  className="btn-game justify-center"
                  style={{ background: 'linear-gradient(135deg, #0099FF, #0057B7)' }}
                >
                  <Icon name="Map" size={18} />
                  Смотреть маршрут
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

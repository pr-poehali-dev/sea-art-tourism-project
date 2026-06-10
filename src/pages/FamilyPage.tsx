import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const tips = [
  { emoji: '🕐', title: 'Планирование поездки', items: ['Закладывайте минимум 3–4 дня на маршрут', 'Начинайте рано утром — меньше трафика и жары', 'Бронируйте отели заранее, особенно летом', 'Сохраните офлайн-карты на телефон'] },
  { emoji: '🎒', title: 'Что взять с собой', items: ['Солнцезащитный крем и головные уборы', 'Запас воды и перекусов для детей', 'Игры и книги для дороги', 'Повербанк и зарядные кабели'] },
  { emoji: '🍽️', title: 'Питание в пути', items: ['АЗС Роснефть — кафе на всём маршруте', 'В Тамани попробуйте свежую рыбу', 'В Сочи не пропустите хачапури', 'В Краснодаре — рынок «Сенной»'] },
  { emoji: '👶', title: 'С маленькими детьми', items: ['Кабардинка — идеальное место для малышей', 'Дом Бабы Яги восхитит детей любого возраста', 'Делайте остановки каждые 2 часа', 'Дендрарий в Сочи — для прогулок с колясками'] },
];

const ageGroups = [
  { age: '3–6 лет', emoji: '🧸', color: '#FF9F43', tasks: ['Семейное фото у каждой точки', 'Найти и нарисовать сказочный объект', 'Поиграть в квест в Доме Бабы Яги', 'Покормить животных в Дендрарии'] },
  { age: '7–12 лет', emoji: '🎮', color: '#0099FF', tasks: ['Викторины по литературе и кино', 'Квесты с поиском предметов', 'Сфотографировать интересный объект', 'Узнать 3 интересных факта в каждом музее'] },
  { age: '13–17 лет', emoji: '📱', color: '#8B5CF6', tasks: ['Все викторины и мини-квесты', 'Творческие задания — эссе, рисунки', 'Снять видеоблог о путешествии', 'Набрать максимум баллов в рейтинге'] },
];

const faq = [
  { q: 'Сколько времени займёт весь маршрут?', a: 'Полный маршрут — минимум 5–7 дней. Можно разбить на несколько поездок или выбрать отдельные точки по интересу.' },
  { q: 'Подходит ли маршрут для детей-инвалидов?', a: 'Большинство музеев имеют пандусы и доступную среду. Рекомендуем уточнять условия перед посещением.' },
  { q: 'Можно ли проехать маршрут зимой?', a: 'Да! Зимой меньше туристов, музеи работают. Красная Поляна зимой особенно живописна для горнолыжников.' },
  { q: 'Есть ли скидки для школьных групп?', a: 'Свяжитесь с нами через раздел «Контакты» — мы поможем организовать групповую поездку с льготными условиями.' },
];

export default function FamilyPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              👨‍👩‍👧 Для семей
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Советы для семейного путешествия
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Всё, что нужно знать, чтобы поездка прошла идеально
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Tips grid */}
          <div className="mb-14">
            <h2 className="font-black text-2xl mb-6 text-center" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
              💡 Практические советы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip) => (
                <div key={tip.title} className="game-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{tip.emoji}</div>
                    <h3 className="font-black text-lg" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>{tip.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-semibold text-gray-600">
                        <span className="mt-0.5 flex-shrink-0 font-black" style={{ color: '#0099FF' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Age groups */}
          <div className="mb-14">
            <h2 className="font-black text-2xl mb-6 text-center" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
              🎯 Задания по возрасту
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ageGroups.map((group) => (
                <div key={group.age} className="game-card p-6 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3"
                    style={{ background: `${group.color}20`, border: `2px solid ${group.color}40` }}
                  >
                    {group.emoji}
                  </div>
                  <div
                    className="font-black text-xl mb-1"
                    style={{ color: group.color, fontFamily: 'Russo One, sans-serif' }}
                  >
                    {group.age}
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-4">Рекомендуемые задания</div>
                  <ul className="text-left space-y-2">
                    {group.tasks.map((task, i) => (
                      <li key={i} className="text-xs font-semibold text-gray-600 flex items-start gap-2">
                        <span style={{ color: group.color }} className="font-black flex-shrink-0">→</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="font-black text-2xl mb-6 text-center" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>
              ❓ Частые вопросы
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="game-card p-5">
                  <div className="font-black mb-2" style={{ color: '#003B7A' }}>Q: {item.q}</div>
                  <div className="text-sm font-semibold text-gray-500 leading-relaxed">A: {item.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div
              className="inline-block p-8 rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7)', color: 'white' }}
            >
              <div className="text-4xl mb-3">🚀</div>
              <h2 className="font-black text-xl mb-2" style={{ fontFamily: 'Russo One, sans-serif' }}>Готовы к семейному приключению?</h2>
              <p className="font-semibold mb-5" style={{ color: 'rgba(200,235,255,0.9)' }}>
                Начните с маршрута и зарабатывайте баллы вместе!
              </p>
              <Link to="/map" className="btn-game">🗺️ Начать маршрут</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useState } from 'react';
import Layout from '@/components/Layout';

const faqs = [
  { category: '🗺️ Маршрут', q: 'Что такое «Море искусства»?', a: 'Это автомобильный маршрут по Краснодарскому краю из 12 уникальных точек, посвящённых литературе и кинематографу. От Краснодара до Красной Поляны — 751 км культурных открытий.' },
  { category: '🗺️ Маршрут', q: 'Сколько времени займёт весь маршрут?', a: 'Рекомендуем закладывать 5–7 дней на полное прохождение. Можно выбрать отдельные точки — каждая посещается самостоятельно.' },
  { category: '🗺️ Маршрут', q: 'Нужна ли предварительная запись в музеи?', a: 'Большинство музеев принимают посетителей без записи. Для групп от 10 человек рекомендуем звонить заранее.' },
  { category: '🎮 Игровая система', q: 'Как получить баллы?', a: 'Посещайте локации, выполняйте задания (квесты, викторины, фото) и отправляйте подтверждения через Telegram или VK бот. После проверки администратором баллы начисляются автоматически.' },
  { category: '🎮 Игровая система', q: 'Как долго проверяются задания?', a: 'Обычно в течение 24–48 часов. В выходные дни возможна задержка до 72 часов.' },
  { category: '🎮 Игровая система', q: 'Могут ли несколько человек играть в одной команде?', a: 'Да! Семьи и школьные классы могут регистрироваться как команда. Баллы суммируются, а в рейтинге есть отдельные категории для семей и школ.' },
  { category: '🤖 Боты', q: 'Как работает Telegram-бот?', a: 'Зарегистрируйтесь, найдите @more_iskusstva_bot, выберите локацию, задание и отправьте фото или видео подтверждение. Бот поможет на каждом шаге.' },
  { category: '🤖 Боты', q: 'Что делать, если бот не отвечает?', a: 'Свяжитесь с нами через раздел «Контакты» или напишите на email more_iskusstva@bk.ru.' },
  { category: '🎁 Призы', q: 'Как обменять баллы на призы?', a: 'В разделе «Магазин» выберите приз, нажмите «Получить» и отправьте заявку через Telegram-бот или email. Приз будет доставлен или вручён на точке маршрута.' },
  { category: '🎁 Призы', q: 'Можно ли передать баллы другому участнику?', a: 'Нет, баллы привязаны к аккаунту и не могут быть переданы.' },
  { category: '⛽ Роснефть', q: 'Как получить баллы на АЗС Роснефть?', a: 'Посетите партнёрскую АЗС на маршруте, сфотографируйтесь и отправьте фото через Telegram-бот, указав адрес заправки.' },
  { category: '⛽ Роснефть', q: 'На каких АЗС начисляются баллы?', a: 'На всех АЗС Роснефть, расположенных на маршруте от Краснодара до Красной Поляны. Список есть в разделе «Партнёры».' },
];

const categories = Array.from(new Set(faqs.map(f => f.category)));

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState('Все');

  const filtered = cat === 'Все' ? faqs : faqs.filter(f => f.category === cat);

  return (
    <Layout>
      <div className="min-h-screen pt-20" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <div style={{ background: 'linear-gradient(135deg, #003B7A, #0057B7, #0099FF)' }} className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 text-white" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              ❓ FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: 'Russo One, sans-serif' }}>
              Часто задаваемые вопросы
            </h1>
            <p className="font-semibold text-lg" style={{ color: 'rgba(200,235,255,0.9)' }}>
              Ответы на самые популярные вопросы о проекте
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['Все', ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-4 py-2 rounded-xl text-sm font-black transition-all duration-200"
                style={cat === c ? {
                  background: 'linear-gradient(135deg, #0099FF, #00D4FF)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0,153,255,0.3)',
                } : {
                  background: 'white',
                  color: '#003B7A',
                  border: '2px solid rgba(0,153,255,0.2)',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: 'white',
                  border: open === i ? '2px solid #0099FF' : '2px solid rgba(0,153,255,0.1)',
                  boxShadow: open === i ? '0 4px 24px rgba(0,153,255,0.18)' : '0 2px 8px rgba(0,153,255,0.06)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div>
                    <div className="text-xs font-black mb-1" style={{ color: '#0099FF' }}>{item.category}</div>
                    <div className="font-black text-sm" style={{ color: '#003B7A' }}>{item.q}</div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 text-white text-sm font-black"
                    style={{
                      background: open === i ? 'linear-gradient(135deg, #0099FF, #00D4FF)' : '#E0F5FF',
                      color: open === i ? 'white' : '#0099FF',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </div>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <div
                      className="h-px mb-4"
                      style={{ background: 'rgba(0,153,255,0.15)' }}
                    />
                    <p className="text-sm font-semibold text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="game-card p-8 inline-block max-w-lg w-full">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-black text-lg mb-2" style={{ color: '#003B7A', fontFamily: 'Russo One, sans-serif' }}>Не нашли ответ?</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">Напишите нам — ответим в течение 24 часов!</p>
              <a href="/contacts" className="btn-game inline-flex py-2 px-6 text-sm">✉️ Написать нам</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
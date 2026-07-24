import { botUrl } from './links'

export type ProductPageKey = 'ai-analiz-matchey' | 'puls-rynka' | 'telegram-bot-analiz-matchey'

type ProductSection = {
  title: string
  paragraphs: string[]
  list?: string[]
}

type ProductPageContent = {
  index: string
  eyebrow: string
  title: string
  accent: string
  lead: string
  highlights: string[]
  sections: ProductSection[]
  questions: Array<[string, string]>
}

const pages: Record<ProductPageKey, ProductPageContent> = {
  'ai-analiz-matchey': {
    index: '01',
    eyebrow: 'AI-анализ матчей',
    title: 'Понятный разбор матча',
    accent: 'вместо набора разрозненных данных',
    lead: 'Plus AI собирает доступный контекст спортивного или киберспортивного события и формирует последовательный информационно-аналитический отчёт прямо в Telegram.',
    highlights: ['Контекст события', 'Форма и динамика', 'Линия и коэффициенты', 'Риски', 'Итоговое AI-мнение'],
    sections: [
      {
        title: 'Что входит в AI-анализ матча',
        paragraphs: [
          'Пользователь выбирает интересующее событие и отправляет его в Telegram-бот Plus AI. Сервис структурирует доступную информацию и показывает не только отдельный показатель, а общую картину матча.',
          'Разбор построен по понятной логике: сначала контекст события, затем форма участников, движение линии, ключевые факторы и риски. В конце пользователь получает итоговое AI-мнение с объяснением, какие обстоятельства повлияли на вывод.',
        ],
        list: [
          'роль матча в турнире и формат события',
          'текущая форма команд, игроков или участников',
          'изменение коэффициентов и рыночной динамики',
          'составы, карты, стиль игры и другие доступные факторы',
          'риски, способные изменить картину перед началом события',
        ],
      },
      {
        title: 'Для спорта и киберспорта',
        paragraphs: [
          'Подход к анализу зависит от дисциплины. Для спортивных событий важны турнирный контекст, календарь, составы и игровая динамика. Для киберспорта дополнительно учитываются карты, формат серии, последние матчи и особенности дисциплины.',
          'Plus AI не подменяет данные красивой визуализацией. Задача сервиса — сделать доступный контекст читаемым и помочь быстрее понять, какие факторы действительно заслуживают внимания.',
        ],
      },
      {
        title: 'Что означает AI-мнение',
        paragraphs: [
          'AI-мнение — это аналитический вывод системы на основании доступной информации. Оно сопровождается контекстом и рисками, поэтому пользователь видит не только итоговую формулировку, но и логику разбора.',
          'Материал не является гарантией исхода или финансовой рекомендацией. Составы, рыночные данные и условия события могут меняться, а любые решения пользователь принимает самостоятельно.',
        ],
      },
    ],
    questions: [
      ['Как отправить матч на анализ?', 'Открой Telegram-бот Plus AI и отправь выбранное событие в доступном боту формате. Дальнейшие шаги бот покажет в диалоге.'],
      ['Какие виды событий поддерживаются?', 'Plus AI работает со спортивными и киберспортивными событиями. Доступность конкретной дисциплины зависит от данных, доступных сервису.'],
      ['Это готовый прогноз?', 'Нет. Это информационно-аналитический разбор с контекстом, факторами риска и итоговым AI-мнением.'],
    ],
  },
  'puls-rynka': {
    index: '02',
    eyebrow: 'Пульс рынка',
    title: 'Крупные рыночные движения',
    accent: 'в одной спокойной ленте',
    lead: '«Пульс рынка» показывает заметные движения по спортивным и киберспортивным событиям и отправляет уведомления прямо в Telegram.',
    highlights: ['Sport + Cybersport', 'Live и prematch', 'Single и express', 'Фильтр коэффициента', 'Telegram-уведомления'],
    sections: [
      {
        title: 'Что показывает Пульс рынка',
        paragraphs: [
          'В каждой карточке сразу видны основные параметры события: вид спорта или дисциплина, зафиксированный объём, коэффициент, этап события и тип. Полные сведения открываются внутри Telegram-бота.',
          'Лента помогает заметить изменение рыночной активности и не переключаться между несколькими экранами. Это информационный мониторинг, а не рекомендация к действию.',
        ],
        list: [
          'вид спорта или киберспортивная дисциплина',
          'зафиксированный объём рыночного движения',
          'коэффициент на момент формирования уведомления',
          'live или prematch',
          'single или express',
        ],
      },
      {
        title: 'Фильтры вместо информационного шума',
        paragraphs: [
          'Пользователь может сфокусироваться на нужных дисциплинах, этапе события и диапазоне коэффициентов. Уведомления приходят в Telegram, поэтому для просмотра не нужен отдельный личный кабинет.',
          'Данные могут меняться после отправки карточки. Plus AI показывает только зафиксированное сервисом движение по доступным источникам и не гарантирует полноту внешних данных.',
        ],
      },
      {
        title: 'Семь дней доступа для подписчиков',
        paragraphs: [
          'Подписчики официального канала Plus AI могут активировать семь дней доступа к «Пульсу рынка». Сначала нужно подписаться на канал, затем открыть Telegram-бот и запустить активацию. Бот проверит подписку и покажет доступные функции.',
          'Актуальные условия доступа всегда отображаются внутри официального бота Plus AI.',
        ],
      },
    ],
    questions: [
      ['Пульс рынка показывает матч полностью?', 'На сайте отображается демонстрация интерфейса. Полные параметры карточки доступны внутри Telegram-бота.'],
      ['Как получить семь дней бесплатно?', 'Подпишись на официальный канал Plus AI и активируй доступ в Telegram-боте. Бот автоматически проверит подписку.'],
      ['Уведомление является рекомендацией?', 'Нет. Оно фиксирует доступное сервису рыночное движение и носит информационный характер.'],
    ],
  },
  'telegram-bot-analiz-matchey': {
    index: '03',
    eyebrow: 'Telegram-native',
    title: 'Аналитика матчей',
    accent: 'в привычном Telegram-чате',
    lead: 'AI-анализ матчей и «Пульс рынка» работают в одном Telegram-боте: без отдельного кабинета, сложной навигации и лишних экранов.',
    highlights: ['Один Telegram-бот', 'Разбор в чате', 'Уведомления', 'Sport + Cybersport', 'Удобно с телефона'],
    sections: [
      {
        title: 'Как работает Telegram-бот Plus AI',
        paragraphs: [
          'Пользователь открывает официального бота, выбирает нужную функцию и отправляет интересующее событие. Plus AI собирает доступный контекст и возвращает структурированный разбор в тот же диалог.',
          'Если включён «Пульс рынка», уведомления о заметных движениях также появляются в Telegram. Анализ события и рыночная информация остаются рядом, поэтому к ним удобно возвращаться с телефона.',
        ],
        list: [
          'отправка выбранного события в диалог с ботом',
          'последовательный AI-анализ матча',
          'контекст, линия и ключевые риски в одном сообщении',
          'уведомления «Пульса рынка»',
          'быстрый переход между двумя инструментами',
        ],
      },
      {
        title: 'Без отдельного личного кабинета',
        paragraphs: [
          'Plus AI не требует осваивать ещё один интерфейс. Команды, ответы и уведомления находятся в Telegram, а управление функциями выполняется через понятные кнопки бота.',
          'Такой формат подходит для короткой проверки события перед матчем и для более подробного чтения аналитического отчёта.',
        ],
      },
      {
        title: 'Официальный доступ',
        paragraphs: [
          'Используй только официальный Telegram-бот @plus_ai_robot. Внутри него отображаются актуальные функции, условия доступа и поддержка сервиса.',
          'Plus AI является информационно-аналитическим сервисом, не принимает ставки и не гарантирует результаты событий.',
        ],
      },
    ],
    questions: [
      ['Нужно устанавливать отдельное приложение?', 'Нет. Для работы достаточно приложения Telegram и официального бота Plus AI.'],
      ['Где находятся AI-анализ и Пульс рынка?', 'Оба инструмента доступны в одном боте и управляются через его меню.'],
      ['Как связаться с поддержкой?', 'Напиши через официальный Telegram-бот Plus AI — это основной канал поддержки сервиса.'],
    ],
  },
}

const relatedPages: Array<[ProductPageKey, string]> = [
  ['ai-analiz-matchey', 'AI-анализ матчей'],
  ['puls-rynka', 'Пульс рынка'],
  ['telegram-bot-analiz-matchey', 'Telegram-бот'],
]

function ProductLogo() {
  return <a className="product-logo" href="/" aria-label="Plus AI — главная"><img src="/logo-plus-ai.png" alt="Plus AI" /></a>
}

export function ProductPage({ type }: { type: ProductPageKey }) {
  const page = pages[type]

  return (
    <div className="product-page">
      <header className="product-header">
        <div className="container product-header__inner">
          <ProductLogo />
          <nav aria-label="Разделы Plus AI">
            {relatedPages.map(([key, label]) => <a className={key === type ? 'is-active' : ''} href={`/${key}/`} key={key}>{label}</a>)}
          </nav>
          <a className="product-header__cta" href={botUrl(`site_seo_${type}_header`)} target="_blank" rel="noreferrer">Открыть бота <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main>
        <section className="product-hero">
          <div className="product-hero__glow" aria-hidden="true" />
          <div className="container">
            <span className="product-index">{page.index} / {page.eyebrow}</span>
            <h1>{page.title}<br /><span>{page.accent}</span></h1>
            <p>{page.lead}</p>
            <div className="product-hero__actions">
              <a className="product-primary" href={botUrl(`site_seo_${type}_hero`)} target="_blank" rel="noreferrer">Открыть Plus AI в Telegram <span aria-hidden="true">→</span></a>
              <a className="product-secondary" href="/">Посмотреть интерфейс</a>
            </div>
            <ul className="product-highlights">{page.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="product-content">
          <div className="container product-content__layout">
            <article>
              {page.sections.map((section, index) => (
                <section className="product-copy-section" key={section.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
                  </div>
                </section>
              ))}
            </article>

            <aside className="product-aside">
              <span>Plus AI</span>
              <h2>Два инструмента.<br />Один Telegram-бот.</h2>
              <p>AI-анализ объясняет контекст и риски. «Пульс рынка» показывает заметные рыночные движения.</p>
              <a href={botUrl(`site_seo_${type}_aside`)} target="_blank" rel="noreferrer">Перейти в @plus_ai_robot <span aria-hidden="true">→</span></a>
            </aside>
          </div>
        </section>

        <section className="product-faq">
          <div className="container">
            <span className="product-index">FAQ / Коротко о главном</span>
            <h2>Вопросы о сервисе</h2>
            <div className="product-faq__grid">
              {page.questions.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
            </div>
          </div>
        </section>

        <section className="product-final">
          <div className="container product-final__card">
            <ProductLogo />
            <h2>Открой Plus AI<br /><span>в Telegram</span></h2>
            <p>AI-анализ матчей и «Пульс рынка» — в одном информационно-аналитическом сервисе.</p>
            <a className="product-primary" href={botUrl(`site_seo_${type}_final`)} target="_blank" rel="noreferrer">Перейти в Telegram-бот <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className="product-footer">
        <div className="container">
          <div><ProductLogo /><p>Plus AI (Плюс АИ) — информационно-аналитический Telegram-сервис для Sport + Cybersport.</p></div>
          <nav aria-label="Продукты Plus AI">{relatedPages.map(([key, label]) => <a href={`/${key}/`} key={key}>{label}</a>)}</nav>
          <nav aria-label="Документы Plus AI"><a href="/terms/">Соглашение</a><a href="/privacy/">Конфиденциальность</a><a href="/disclaimer/">Дисклеймер</a></nav>
          <span>© 2026 Plus AI · 18+</span>
        </div>
      </footer>
    </div>
  )
}

export function isProductPageKey(value: string | undefined): value is ProductPageKey {
  return value === 'ai-analiz-matchey' || value === 'puls-rynka' || value === 'telegram-bot-analiz-matchey'
}

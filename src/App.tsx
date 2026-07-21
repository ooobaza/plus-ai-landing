import { useEffect, useRef, useState } from 'react'
import { botUrl } from './links'

const REPORT_URL = 'https://t.me/plusovoy_ai/13'

type IconName = 'arrow' | 'check' | 'chevron' | 'eye' | 'pulse' | 'scan' | 'telegram' | 'trend'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    pulse: <path d="M3 12h4l2.2-6 4 12 2.1-6H21"/>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M16 4h3a1 1 0 0 1 1 1v3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/><path d="M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/></>,
    telegram: <><path d="m21 4-3.2 16-6-4.2-3.3 2.7.6-5.2L19 5.8 7 12.3 2.4 10.8 21 4Z"/><path d="m9.1 13.3 2.7 2.5"/></>,
    trend: <><path d="M4 17.5 9.2 12l4 3.2L20 7.5"/><path d="M15.5 7.5H20V12"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const marketFeed = [
  { sport: 'CS2', amount: '$41,000', odds: '1.95', phase: 'Prematch', type: 'Single', mark: 'CS' },
  { sport: 'Football', amount: '$105,000', odds: '2.10', phase: 'Live', type: 'Single', mark: 'FB' },
  { sport: 'Tennis', amount: '$17,200', odds: '1.72', phase: 'Prematch', type: 'Express', mark: 'TN' },
  { sport: 'Dota 2', amount: '$28,500', odds: '1.88', phase: 'Live', type: 'Single', mark: 'D2' },
  { sport: 'Basketball', amount: '$34,750', odds: '2.35', phase: 'Prematch', type: 'Single', mark: 'BK' },
  { sport: 'Hockey', amount: '$22,400', odds: '1.64', phase: 'Live', type: 'Express', mark: 'HK' },
]

function TelegramButton({ children, source, className = '' }: { children: React.ReactNode; source: string; className?: string }) {
  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 4
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 3
    event.currentTarget.style.setProperty('--magnet-x', `${x}px`)
    event.currentTarget.style.setProperty('--magnet-y', `${y}px`)
  }

  const resetMagnet = (event: React.PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty('--magnet-x', '0px')
    event.currentTarget.style.setProperty('--magnet-y', '0px')
  }

  return (
    <a className={`button ${className}`} href={botUrl(source)} target="_blank" rel="noreferrer" onPointerMove={handlePointerMove} onPointerLeave={resetMagnet}>
      <Icon name="telegram" size={17} /><span>{children}</span><Icon name="arrow" size={16} />
    </a>
  )
}

function AnimatedMetric({ value, decimals, suffix = '' }: { value: number; decimals: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setCurrent(value); return }

    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()
      const duration = 1350
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(value * eased)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.45 })

    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])

  const formatted = current.toLocaleString('ru-RU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return <span ref={ref} className="animated-metric" aria-label={`${value.toLocaleString('ru-RU')} ${suffix}`}>{formatted}{suffix}</span>
}

function LogoGlyph({ size = 30 }: { size?: number }) {
  return (
    <img className="logo-glyph" src="./logo-plus-ai.png" width={Math.round(size * 1.95)} height={size} alt="" aria-hidden="true" />
  )
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Plus AI — на главную">
      <LogoGlyph size={40} />
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav" aria-label="Основная навигация">
          <a href="#analysis">AI-анализ</a><a href="#market">Пульс рынка</a><a href="#telegram">Telegram</a>
        </nav>
        <a className="header-cta" href={botUrl('site_header')} target="_blank" rel="noreferrer">Открыть бота <Icon name="arrow" size={15} /></a>
      </div>
    </header>
  )
}

function TelegramPhone() {
  return (
    <div className="hero-phone-stage" aria-label="Демонстрация Telegram-бота Plus AI">
      <div className="hero-phone-backplate" aria-hidden="true" />
      <div className="hero-phone">
        <div className="hero-phone__status"><span>09:41</span><div><i /><i /><i /></div></div>
        <header className="hero-phone__header"><button aria-label="Назад">‹</button><div className="hero-phone__avatar">+AI</div><div><strong>Plus AI</strong><span>бот</span></div><b>•••</b></header>
        <div className="hero-phone__chat">
          <div className="hero-phone__day">ДЕМО ИНТЕРФЕЙСА</div>

          <article className="hero-phone-message hero-phone-message--pulse">
            <div className="hero-phone-message__head"><span><Icon name="pulse" size={15} /></span><div><strong>Пульс рынка</strong><small>Крупное движение замечено</small></div><time>09:41</time></div>
            <div className="hero-phone-market"><div><span>Football · Prematch</span><strong>$105,000</strong></div><div><span>Коэффициент</span><strong>2.10</strong></div></div>
            <div className="hero-phone-tags"><span>Single</span><span>Детали в боте</span></div>
          </article>

          <article className="hero-phone-message hero-phone-message--analysis">
            <div className="hero-phone-message__head"><span>✦</span><div><strong>AI-анализ матча</strong><small>Контекст события собран</small></div><time>09:42</time></div>
            <p><b>AI-мнение:</b> одна сторона выглядит интереснее по текущей форме. Ключевой риск — нестабильность последних игр.</p>
            <div className="hero-phone-factors"><span>Контекст</span><span>Форма</span><span>Риски</span></div>
          </article>

          <article className="hero-phone-message hero-phone-message--chart">
            <div className="hero-phone-chart__head"><div><Icon name="pulse" size={14} /><strong>Движение коэффициента</strong></div><span>1.64 <i>→</i> 3.42</span></div>
            <svg viewBox="0 0 300 58" preserveAspectRatio="none" role="img" aria-label="Демо-график движения коэффициента"><path className="hero-phone-chart__grid" d="M0 14H300M0 29H300M0 44H300"/><path className="hero-phone-chart__line" pathLength="1" d="M0 48 C34 46 52 35 82 38 S127 51 158 31 S210 27 238 18 S276 20 300 7"/><circle cx="300" cy="7" r="3" /></svg>
          </article>
        </div>
        <div className="hero-phone__actions"><button><Icon name="scan" size={14} />Разобрать матч</button><button><Icon name="pulse" size={14} />Пульс рынка</button><a href={botUrl('site_telegram_mockup')} target="_blank" rel="noreferrer"><Icon name="telegram" size={14} />Открыть бота</a></div>
        <div className="hero-phone__input"><span>＋</span><p>Сообщение</p><span>◉</span></div>
      </div>
    </div>
  )
}

function HeroConsole() {
  const factors = ['Контекст', 'Форма', 'Линия', 'Риски']
  const pulseItems = [
    marketFeed[0],
    { ...marketFeed[1], amount: '$105,000' },
    { ...marketFeed[3], amount: '$28,500' },
  ]

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <div className="hero-product" aria-label="Демонстрационный интерфейс Plus AI" onPointerMove={handlePointerMove}>
      <div className="hero-product__header">
        <div className="hero-product__brand"><LogoGlyph size={25} /></div>
        <div className="hero-product__tabs" aria-label="Инструменты Plus AI"><span className="is-active">AI-анализ</span><span>Пульс рынка</span></div>
        <span className="hero-product__demo">DEMO</span>
      </div>

      <div className="hero-product__body">
        <section className="analysis-preview">
          <div className="analysis-preview__status"><span><i /> Событие распознано</span></div>
          <h3>Матч готов к разбору</h3>
          <p>Plus AI собрал контекст события, форму участников, движение линии и ключевые риски.</p>

          <div className="analysis-factors">
            {factors.map((factor, index) => (
              <div className="analysis-factor" style={{ '--factor-delay': `${index * 0.65}s` } as React.CSSProperties} key={factor}>
                <i><Icon name="check" size={12} /></i><strong>{factor}</strong>
              </div>
            ))}
          </div>

          <div className="analysis-chart">
            <div className="analysis-chart__head"><span>Динамика коэффициента</span><strong>1.64 <i>→</i> 3.42</strong></div>
            <svg viewBox="0 0 420 92" preserveAspectRatio="none" role="img" aria-label="Демонстрационный график движения линии">
              <defs><linearGradient id="heroChartArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4ad7ba" stopOpacity=".2"/><stop offset="1" stopColor="#4ad7ba" stopOpacity="0"/></linearGradient></defs>
              <path className="analysis-chart__grid" d="M0 22H420M0 46H420M0 70H420" />
              <path className="analysis-chart__area" d="M0 74C38 68 58 76 91 60s56-4 84-12 50-28 82-17 52 21 82 4 55-9 81-24V92H0Z" />
              <path className="analysis-chart__line" pathLength="1" d="M0 74C38 68 58 76 91 60s56-4 84-12 50-28 82-17 52 21 82 4 55-9 81-24" />
              <circle className="analysis-chart__dot" cx="420" cy="11" r="4" />
            </svg>
          </div>

          <div className="analysis-opinion">
            <div className="analysis-opinion__title"><span>✦</span><strong>AI-мнение</strong></div>
            <p>Картина матча собрана: линия заметно изменилась. Ключевые факторы и риски доступны в полном разборе.</p>
          </div>
        </section>

        <aside className="pulse-preview-panel">
          <div className="pulse-preview-panel__head"><div><Icon name="pulse" size={17} /><strong>Пульс рынка</strong></div></div>
          <p>Крупные движения с уведомлением в Telegram</p>
          <div className="pulse-preview-panel__list">
            {pulseItems.map((item, index) => (
              <article className="pulse-event" style={{ '--pulse-delay': `${index * 3.2}s` } as React.CSSProperties} key={item.sport}>
                <div><span>{item.sport}</span><small>{item.phase} · {item.type}</small></div>
                <strong>{item.amount}</strong>
                <b>{item.odds}</b>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb--one" aria-hidden="true" /><div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1><span>AI-анализ матчей</span><span className="hero-title-accent">и Пульс рынка</span><small>в Telegram</small></h1>
          <p className="hero-lead hero-value"><span>Пульс показывает движение рынка.</span><strong>AI-разбор объясняет контекст и риски.</strong></p>
          <div className="hero-actions"><TelegramButton source="site_hero_trial">Получить 7 дней бесплатно</TelegramButton><a className="text-link" href="#market">Смотреть интерфейс <Icon name="chevron" size={15} /></a></div>
          <div className="hero-trial-note"><span><Icon name="pulse" size={14} /></span><strong>Пульс рынка · 7 дней</strong><small>для подписчиков @plusovoy_ai</small></div>
        </div>
        <div className="hero-visual"><HeroConsole /></div>
      </div>
    </section>
  )
}

const marketCurves = [
  'M0 26 C22 24 30 15 52 18 S82 30 106 18 S140 13 170 8',
  'M0 29 C20 25 38 30 58 21 S87 9 110 15 S142 22 170 7',
  'M0 20 C18 25 36 13 56 16 S87 28 111 20 S145 12 170 15',
]

function MarketCard({ item, ghost = false, index = 0 }: { item: typeof marketFeed[number]; ghost?: boolean; index?: number }) {
  return (
    <article className="market-card" aria-hidden={ghost || undefined}>
      <div className="market-card__top"><div className="market-identity"><div className="market-symbol">{item.mark}</div><div><span>SPORT</span><strong>{item.sport}</strong></div></div><div className="market-card__tags"><span className={item.phase === 'Live' ? 'tag tag--live' : 'tag'}>{item.phase === 'Live' && <i />}{item.phase}</span><span className="tag">{item.type}</span></div></div>
      <div className="market-card__data"><div className="market-value"><span>ОБЪЁМ</span><strong>{item.amount}</strong></div><div className="market-spark" aria-hidden="true"><svg viewBox="0 0 170 36" preserveAspectRatio="none"><path d={marketCurves[index % marketCurves.length]} /></svg><span>movement</span></div><div className="market-value market-value--odds"><span>КОЭФФИЦИЕНТ</span><strong>{item.odds}</strong></div></div>
      <div className="market-card__meta"><span>Матч · турнир · исход</span><strong>Детали события скрыты</strong></div>
    </article>
  )
}

function MarketPulse() {
  return (
    <section className="section market-section reveal" id="market"><div className="container market-layout">
      <div className="market-copy"><span className="section-index">01 / ПУЛЬС РЫНКА</span><h2>Крупные движения<br />на рынке</h2><p>В ленте сразу видны спорт, объём, коэффициент и этап события. Матч и полные детали открываются в боте.</p></div>
      <div className="market-terminal"><div className="terminal-header"><div><span className="live-dot" /> ПУЛЬС РЫНКА</div><span className="terminal-counter">DEMO</span></div><div className="feed-window"><div className="feed-track"><div className="feed-set">{marketFeed.map((item, index) => <MarketCard item={item} index={index} key={item.sport} />)}</div><div className="feed-set" aria-hidden="true">{marketFeed.map((item, index) => <MarketCard item={item} index={index} ghost key={`copy-${item.sport}`} />)}</div></div><div className="feed-fade feed-fade--top" /><div className="feed-fade feed-fade--bottom" /></div><div className="terminal-footer"><span>Пример интерфейса</span><span>Полные детали — в Telegram</span></div></div>
    </div></section>
  )
}

function AnalysisSection() {
  const details = [
    ['01', 'Контекст', 'Решающая стадия турнира. Команды подходят к матчу с разной динамикой и стилем игры.', 'eye'],
    ['02', 'Форма', 'Франция стабильнее по контролю темпа и качеству моментов. Англия опасна в быстрых переходах.', 'scan'],
    ['03', 'Линия', 'Коэффициент сместился с 1.91 до 1.78. Рынок усиливает сторону Франции.', 'pulse'],
    ['04', 'Риски', 'Составы, поздние замены и стандарты могут изменить общую картину матча.', 'check'],
  ]
  return (
    <section className="section analysis-section reveal" id="analysis"><div className="container">
      <div className="section-heading section-heading--center"><span className="section-index">02 / AI-АНАЛИЗ МАТЧА</span><h2><span>Разбор,</span> который можно<br />{' '}прочитать по делу</h2><p>Не декоративный дашборд, а последовательный отчет: контекст, форма, линия, риски и итоговое AI-мнение.</p></div>
      <article className="analysis-report">
        <header className="report-header"><div className="report-brand"><LogoGlyph size={23} /><strong>Plus AI</strong><small>Analysis Report</small></div><span className="demo-view">DEMO VIEW</span></header>
        <div className="report-meta"><div><span>МАТЧ</span><strong>Франция — Англия</strong></div><div><span>ТУРНИР</span><strong>International Series</strong></div><div><span>ВРЕМЯ</span><strong>Сегодня · 19:30 UTC</strong></div><div><span>ТИП</span><strong>Футбол</strong></div></div>
        <div className="report-body">
          <div className="report-sections">
            {details.map(([num, title, text, icon], index) => <section className="report-section" style={{ '--step': index } as React.CSSProperties} key={title}><span>{num}</span><i className="report-section__icon"><Icon name={icon as IconName} size={19} /></i><div><h3>{title}</h3><p>{text}</p></div></section>)}
            <div className="market-proof analysis-proof" aria-label="Опубликованная статистика AI-анализов Plus AI"><div className="market-proof__head"><span>ОПУБЛИКОВАННАЯ ОТЧЁТНОСТЬ AI-АНАЛИЗОВ</span><a href={REPORT_URL} target="_blank" rel="noreferrer">Открыть отчёт <Icon name="arrow" size={14} /></a></div><div className="market-proof__metrics"><div><strong><AnimatedMetric value={72.3} decimals={1} suffix="%" /></strong><span>положительных исходов</span></div><div><strong><AnimatedMetric value={2.33} decimals={2} /></strong><span>средний коэффициент</span></div></div><p>Данные опубликованной выборки. Прошлые результаты не гарантируют будущие.</p></div>
          </div>
          <aside className="report-sidebar">
            <div className="report-movement"><div className="report-card-title"><span><Icon name="trend" size={19} /></span><strong>Движение линии</strong></div><div className="report-movement__value">1.91 <i>→</i> <b>1.78</b></div><p>Рынок усиливает сторону Франции</p><div className="report-chart"><svg viewBox="0 0 300 104" preserveAspectRatio="none" aria-label="Демонстрационный график движения линии"><path className="report-chart__grid" d="M8 18H292M8 52H292M8 86H292"/><path className="report-chart__area" d="M8 18 C34 21 49 20 70 34 S108 39 133 48 S170 55 196 66 S234 67 260 82 S280 87 292 91V104H8Z"/><path className="report-chart__line" pathLength="1" d="M8 18 C34 21 49 20 70 34 S108 39 133 48 S170 55 196 66 S234 67 260 82 S280 87 292 91"/><circle cx="292" cy="91" r="4"/></svg><div><span>1.95</span><span>1.85</span><span>1.75</span></div></div><div className="report-chart__time"><span>3 дня назад</span><span>сейчас</span></div></div>
            <div className="report-opinion"><div><span>✦</span><strong>AI-МНЕНИЕ</strong></div><p>По доступному контексту Франция выглядит стабильнее, но ключевой риск — быстрые переходы Англии и стандарты.</p><small>Информационный анализ, не финансовый совет</small></div>
          </aside>
        </div>
      </article>
    </div></section>
  )
}

function TelegramSection() {
  const benefits = [
    ['Разбор в чате', 'Контекст, риски и AI-мнение в одном сообщении.'],
    ['Пульс без лишних экранов', 'Уведомления приходят прямо в привычный диалог.'],
    ['Один бот', 'AI-анализ матчей и Пульс рынка всегда рядом.'],
  ]
  return (
    <section className="section telegram-section reveal" id="telegram"><div className="container telegram-layout">
      <div className="telegram-copy"><span className="section-index">03 / TELEGRAM-NATIVE</span><h2>Весь продукт —<br />прямо в Telegram</h2><p>Не нужно открывать отдельный кабинет и разбираться в сложной навигации. Матч, контекст и рыночные движения остаются в одном чате Plus AI.</p><ul>{benefits.map(([title, text]) => <li key={title}><span><Icon name="check" size={14} /></span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ul></div>
      <div className="chat-stage chat-stage--phone"><TelegramPhone /></div>
    </div></section>
  )
}

function FinalCta() {
  return (
    <section className="section final-section reveal"><div className="container final-card"><LogoGlyph size={38} /><h2>Открой Plus AI<br /><span>в Telegram</span></h2><p>Получай AI-анализ матчей и уведомления Пульса рынка<br />в одном понятном Telegram-боте.</p><TelegramButton source="site_final" className="final-button">Перейти в @plus_ai_robot</TelegramButton></div></section>
  )
}

const faqItems = [
  {
    question: 'Чем Plus AI отличается от обычного парсера?',
    answer: 'Парсер показывает, что произошло на рынке. Plus AI связывает движение с контекстом матча: формой участников, линией, рисками и итоговым AI-мнением.',
  },
  {
    question: 'Как работает AI-анализ матча?',
    answer: 'Ты выбираешь событие в Telegram-боте. Plus AI собирает доступный контекст, форму, движение линии и ключевые риски, а затем формирует последовательный информационный разбор.',
  },
  {
    question: 'Что показывает «Пульс рынка»?',
    answer: 'В уведомлении сразу видны вид спорта, объём, коэффициент, этап события и тип движения. Матч, турнир, исход и полная карточка открываются внутри бота.',
  },
  {
    question: 'Как получить 7 дней бесплатно?',
    answer: 'Подпишись на канал Plus AI и открой официального бота. При активации бот проверит подписку и предоставит семь дней доступа к «Пульсу рынка».',
    action: true,
  },
  {
    question: 'Что произойдёт после пробного периода?',
    answer: 'Доступ не продлевается незаметно. Актуальные варианты продолжения и условия показываются внутри Telegram-бота до активации.',
  },
  {
    question: 'Plus AI гарантирует результат события?',
    answer: 'Нет. Plus AI — информационно-аналитический сервис, а AI-мнение не является гарантией результата или финансовой рекомендацией. Решения пользователь принимает самостоятельно.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section faq-section reveal" id="faq">
      <div className="faq-glow" aria-hidden="true" />
      <div className="container faq-layout">
        <div className="faq-copy">
          <span className="section-index">04 / ВОПРОСЫ</span>
          <h2>Коротко<br /><span>о главном</span></h2>
          <p>Без сложных терминов и скрытых условий — только то, что важно перед первым запуском.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.question}</strong>
                  <i aria-hidden="true"><span /><span /></i>
                </button>
                <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                  <div><p>{item.answer}</p>{item.action && <a href={botUrl('site_faq_trial')} target="_blank" rel="noreferrer">Открыть бота <Icon name="arrow" size={14} /></a>}</div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div className="footer-main">
          <section className="footer-brand" aria-label="О сервисе Plus AI">
            <Logo />
            <p className="footer-brand__lead">Информационно-аналитический Telegram-сервис для разбора спортивных и киберспортивных событий</p>
            <p className="footer-brand__note">AI-анализ матчей и «Пульс рынка» в одном боте</p>
            <a className="footer-action" href={botUrl('site_footer')} target="_blank" rel="noreferrer"><Icon name="telegram" size={16} />Открыть Telegram-бота<Icon name="arrow" size={15} /></a>
          </section>

          <nav className="footer-column" aria-label="Разделы сервиса">
            <h2>Сервис</h2>
            <a href="#analysis">AI-анализ матчей</a>
            <a href="#market">Пульс рынка</a>
            <a href="#market">Демо интерфейса</a>
            <a href="#telegram">Telegram-бот</a>
            <a href="#faq">Вопросы и ответы</a>
          </nav>

          <nav className="footer-column" aria-label="Юридические документы">
            <h2>Документы</h2>
            <a href="./terms/">Пользовательское соглашение</a>
            <a href="./privacy/">Политика конфиденциальности</a>
            <a href="./disclaimer/">Дисклеймер</a>
          </nav>

          <section className="footer-column footer-support" aria-label="Поддержка">
            <h2>Поддержка</h2>
            <p>По вопросам доступа, оплаты и работы сервиса обращайтесь через официальный Telegram-бот</p>
            <a className="footer-support__link" href={botUrl('site_support')} target="_blank" rel="noreferrer">Написать в поддержку<Icon name="arrow" size={14} /></a>
            <p className="footer-operator">Оператор сервиса: <strong>Plus AI</strong></p>
          </section>
        </div>

        <div className="footer-disclaimer">
          <span aria-hidden="true">i</span>
          <p>Plus AI — информационно-аналитический сервис. Мы не являемся букмекерской конторой, не принимаем ставки, не организуем азартные игры, не гарантируем исходы событий и не даём финансовых рекомендаций. Любые решения пользователь принимает самостоятельно.</p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Plus AI. Все права защищены.</span>
          <div><span>Информационно-аналитический сервис</span><strong>18+</strong></div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) { document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible')); return }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <><a className="skip-link" href="#main">Перейти к содержимому</a><Header /><main id="main"><Hero /><MarketPulse /><AnalysisSection /><TelegramSection /><FaqSection /><FinalCta /></main><Footer /></>
}

export default App

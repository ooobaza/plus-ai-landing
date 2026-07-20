import { useEffect } from 'react'

const TELEGRAM_URL = 'https://t.me/plus_ai_robot'

type IconName = 'arrow' | 'check' | 'chevron' | 'eye' | 'pulse' | 'scan' | 'telegram'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    pulse: <path d="M3 12h4l2.2-6 4 12 2.1-6H21"/>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M16 4h3a1 1 0 0 1 1 1v3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/><path d="M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/></>,
    telegram: <><path d="m21 4-3.2 16-6-4.2-3.3 2.7.6-5.2L19 5.8 7 12.3 2.4 10.8 21 4Z"/><path d="m9.1 13.3 2.7 2.5"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const marketFeed = [
  { sport: 'CS2', amount: '$41,000', odds: '1.95', phase: 'Prematch', type: 'Single', mark: 'CS' },
  { sport: 'Football', amount: '$28,500', odds: '2.10', phase: 'Live', type: 'Single', mark: 'FB' },
  { sport: 'Tennis', amount: '$17,200', odds: '1.72', phase: 'Prematch', type: 'Express', mark: 'TN' },
  { sport: 'Dota 2', amount: '$63,000', odds: '1.88', phase: 'Live', type: 'Single', mark: 'D2' },
  { sport: 'Basketball', amount: '$34,750', odds: '2.35', phase: 'Prematch', type: 'Single', mark: 'BK' },
  { sport: 'Hockey', amount: '$22,400', odds: '1.64', phase: 'Live', type: 'Express', mark: 'HK' },
]

const toolCards = [
  {
    kind: 'analysis', number: '01', eyebrow: 'Матч в фокусе', title: 'AI-анализ матча',
    text: 'Контекст, форма, линия, риски и итоговое AI-мнение — в одном последовательном разборе.',
    points: ['Контекст события', 'Форма и динамика', 'Линия и коэффициенты', 'Риск-факторы'],
  },
  {
    kind: 'pulse', number: '02', eyebrow: 'Движение рынка', title: 'Пульс рынка',
    text: 'Крупные рыночные движения по заданным фильтрам с доставкой уведомлений прямо в Telegram.',
    points: ['Объём от $10,000', 'Sport + Cybersport', 'Live или prematch', 'Single или express'],
  },
]

function TelegramButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`button ${className}`} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
      <Icon name="telegram" size={17} /><span>{children}</span><Icon name="arrow" size={16} />
    </a>
  )
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Plus AI — на главную">
      <span className="logo__plus">+</span><span className="logo__letters">AI</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav" aria-label="Основная навигация">
          <a href="#features">Возможности</a><a href="#market">Пульс рынка</a><a href="#how">Как работает</a><a href="#telegram">Telegram</a>
        </nav>
        <a className="header-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Открыть бота <Icon name="arrow" size={15} /></a>
      </div>
    </header>
  )
}

function HeroConsole() {
  return (
    <div className="product-window" aria-label="Демонстрационный интерфейс Plus AI">
      <div className="product-window__bar">
        <div className="product-brand"><span>+</span><strong>Plus AI</strong><small>Матч-центр</small></div>
        <span className="demo-view">DEMO VIEW</span>
      </div>
      <div className="product-window__body">
        <div className="product-analysis">
          <div className="product-section-head"><span>AI-анализ матча</span><small>Обновлено 12:49</small></div>
          <div className="product-match">
            <div className="product-match__mark">CS</div>
            <div><small>CS2 · PREMATCH</small><h3>Demo match</h3></div>
            <span className="match-time">19:30 UTC</span>
          </div>
          <div className="product-meta-grid">
            <div><span>MATCH</span><strong>Demo match</strong></div>
            <div><span>TOURNAMENT</span><strong>Championship Series</strong></div>
            <div><span>TIME</span><strong>Сегодня · 19:30</strong></div>
            <div><span>SPORT</span><strong>CS2</strong></div>
          </div>
          <div className="movement-row">
            <div><span>MARKET MOVEMENT</span><strong>1.84 <i>→</i> 1.91</strong></div>
            <div className="movement-line" aria-hidden="true"><i /><i /><i /></div>
            <small>+3.8%</small>
          </div>
          <div className="risk-notes">
            <span>RISK NOTES</span>
            <ul><li>Возможное изменение состава</li><li>Высокий разброс по последним картам</li></ul>
          </div>
          <div className="product-opinion"><span>AI-МНЕНИЕ</span><p>Одна сторона выглядит стабильнее по текущему контексту. Ключевой риск — динамика линии перед началом события.</p></div>
        </div>
        <aside className="product-pulse">
          <div className="product-section-head"><span>Пульс рынка</span><small>DEMO DATA</small></div>
          <div className="product-pulse__list">
            {marketFeed.slice(0, 3).map((item) => (
              <div className="pulse-preview" key={item.sport}>
                <div className="pulse-preview__top"><span>{item.mark}</span><strong>{item.sport}</strong><small>{item.phase}</small></div>
                <div className="pulse-preview__values"><div><span>AMOUNT</span><strong>{item.amount}</strong></div><div><span>ODDS</span><strong>{item.odds}</strong></div></div>
                <div className="pulse-preview__foot"><span>{item.type}</span><small>Match details hidden in demo</small></div>
              </div>
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
          <div className="eyebrow"><span className="eyebrow-dot" /> TELEGRAM-NATIVE ANALYTICS</div>
          <h1><span>AI-анализ матчей</span><span className="hero-title-accent">и Пульс рынка</span><small>в Telegram</small></h1>
          <p className="hero-lead">Разбирай матчи, смотри контекст, риски и крупные рыночные движения в одном Telegram-боте</p>
          <div className="hero-actions"><TelegramButton>Открыть Plus AI</TelegramButton><a className="text-link" href="#features">Посмотреть возможности <Icon name="chevron" size={15} /></a></div>
          <p className="hero-meta">Sport + Cybersport <i /> AI-мнение по матчу <i /> Market Pulse alerts <i /> Telegram-native</p>
        </div>
        <div className="hero-visual"><HeroConsole /></div>
      </div>
    </section>
  )
}

function ToolPreview({ kind }: { kind: string }) {
  if (kind === 'analysis') {
    return (
      <div className="tool-preview tool-preview--analysis">
        <div className="tool-preview__head"><span>DEMO REPORT</span><small>CS2 · 19:30</small></div>
        <div className="tool-analysis-row"><span>01</span><strong>Контекст</strong><small>Решающая стадия турнира</small></div>
        <div className="tool-analysis-row"><span>02</span><strong>Форма</strong><small>Стабильность последних карт</small></div>
        <div className="tool-analysis-row"><span>03</span><strong>Риски</strong><small>Состав · динамика линии</small></div>
      </div>
    )
  }
  return (
    <div className="tool-preview tool-preview--pulse">
      <div className="tool-filters"><span>CS2</span><span>LIVE</span><span>1.50–2.50</span></div>
      {marketFeed.slice(0, 2).map((item) => <div className="tool-movement" key={item.sport}><span>{item.mark}</span><strong>{item.sport}</strong><b>{item.amount}</b><small>{item.odds}</small></div>)}
    </div>
  )
}

function Tools() {
  return (
    <section className="section tools-section reveal" id="features"><div className="container">
      <div className="section-heading section-heading--split"><div><span className="section-index">01 / ВОЗМОЖНОСТИ</span><h2>Два инструмента.<br />Один рабочий контекст.</h2></div><p>Матч и рынок не существуют отдельно. Plus AI собирает оба слоя в одном понятном Telegram-инструменте.</p></div>
      <div className="tool-grid">{toolCards.map((tool) => <article className={`tool-card tool-card--${tool.kind}`} key={tool.title}>
        <div className="tool-card__top"><span>{tool.number}</span><span className="card-eyebrow">{tool.eyebrow}</span></div>
        <div className="tool-card__body"><h3>{tool.title}</h3><p>{tool.text}</p><ul>{tool.points.map((point) => <li key={point}><Icon name="check" size={14} />{point}</li>)}</ul></div>
        <ToolPreview kind={tool.kind} />
      </article>)}</div>
    </div></section>
  )
}

function MarketCard({ item, ghost = false }: { item: typeof marketFeed[number]; ghost?: boolean }) {
  return (
    <article className="market-card" aria-hidden={ghost || undefined}>
      <div className="market-card__main"><div className="market-symbol">{item.mark}</div><div className="market-title"><span>SPORT</span><strong>{item.sport}</strong></div><div className="market-value"><span>AMOUNT</span><strong>{item.amount}</strong></div><div className="market-value"><span>ODDS</span><strong>{item.odds}</strong></div></div>
      <div className="market-card__meta"><span className={item.phase === 'Live' ? 'tag tag--live' : 'tag'}>{item.phase === 'Live' && <i />}{item.phase}</span><span className="tag">{item.type}</span><div className="market-hidden"><span>MATCH / TOURNAMENT</span><strong>Hidden in demo</strong></div></div>
    </article>
  )
}

function MarketPulse() {
  return (
    <section className="section market-section reveal" id="market"><div className="container market-layout">
      <div className="market-copy"><span className="section-index">02 / ПУЛЬС РЫНКА</span><h2>Замечай движение.<br /><span>Сохраняй контекст.</span></h2><p>Структурированная лента крупных рыночных движений. Фильтры помогают оставить только нужные виды спорта, этап события и диапазон коэффициентов.</p><div className="filter-row" aria-label="Доступные фильтры"><span>SPORT</span><span>LIVE</span><span>PREMATCH</span><span>ODDS</span></div><div className="interface-note"><Icon name="eye" size={16} /><span>Пример интерфейса. Полная карточка открывается в Telegram-боте</span></div></div>
      <div className="market-terminal"><div className="terminal-header"><div><span className="live-dot" /> MARKET PULSE · DEMO VIEW</div><span className="terminal-counter">INTERFACE PREVIEW</span></div><div className="feed-window"><div className="feed-track"><div className="feed-set">{marketFeed.map((item) => <MarketCard item={item} key={item.sport} />)}</div><div className="feed-set" aria-hidden="true">{marketFeed.map((item) => <MarketCard item={item} ghost key={`copy-${item.sport}`} />)}</div></div><div className="feed-fade feed-fade--top" /><div className="feed-fade feed-fade--bottom" /></div><div className="terminal-footer"><span>DEMO DATA · NOT A LIVE FEED</span><span>FULL DETAILS IN TELEGRAM</span></div></div>
    </div></section>
  )
}

function AnalysisSection() {
  const details = [
    ['01', 'Контекст', 'Решающая стадия турнира. Условия события отличаются от последней очной встречи.'],
    ['02', 'Форма', 'Одна сторона стабильнее на последних картах, у второй выше разброс результатов.'],
    ['03', 'Линия', 'Диапазон изменился с 1.84 до 1.91. Перед событием важна повторная проверка.'],
    ['04', 'Риски', 'Изменение состава и нестабильность последних игр могут поменять общую картину.'],
  ]
  return (
    <section className="section analysis-section reveal" id="analysis"><div className="container">
      <div className="section-heading section-heading--center"><span className="section-index">03 / AI-АНАЛИЗ МАТЧА</span><h2>Разбор, который можно<br />прочитать по делу</h2><p>Не декоративный дашборд, а последовательный отчёт: данные события, ключевые факторы, риск-заметки и итоговое AI-мнение.</p></div>
      <article className="analysis-report">
        <header className="report-header"><div className="report-brand"><span>+</span><strong>Plus AI</strong><small>Analysis report</small></div><div><span className="report-id">REPORT / 00418</span><span className="demo-view">DEMO VIEW</span></div></header>
        <div className="report-meta"><div><span>MATCH</span><strong>Demo match</strong></div><div><span>TOURNAMENT</span><strong>Championship Series</strong></div><div><span>TIME</span><strong>Сегодня · 19:30 UTC</strong></div><div><span>SPORT</span><strong>CS2</strong></div></div>
        <div className="report-body"><div className="report-sections">{details.map(([num, title, text], index) => <section className="report-section" style={{ '--step': index } as React.CSSProperties} key={title}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></section>)}</div><aside className="report-sidebar"><div className="report-movement"><span>MARKET MOVEMENT</span><strong>1.84 <i>→</i> 1.91</strong><small>Изменение линии в demo view</small></div><div className="report-opinion"><span>AI-МНЕНИЕ</span><p>По доступному контексту одна сторона выглядит стабильнее, но ключевой риск — динамика линии и возможное изменение состава.</p><small>Информационно-аналитический разбор</small></div></aside></div>
      </article>
    </div></section>
  )
}

function HowItWorks() {
  const steps = [
    { number: '01', title: 'Открываешь событие', text: 'Выбираешь матч или переходишь к уведомлению Пульса рынка.', icon: 'eye' as IconName },
    { number: '02', title: 'Plus AI собирает контекст', text: 'Система структурирует форму, линию, факторы и риски.', icon: 'scan' as IconName },
    { number: '03', title: 'Получаешь разбор в Telegram', text: 'AI-мнение и рыночные уведомления остаются в одном чате.', icon: 'telegram' as IconName },
  ]
  return (
    <section className="section flow-section reveal" id="how"><div className="container"><div className="section-heading section-heading--split"><div><span className="section-index">04 / КАК ЭТО РАБОТАЕТ</span><h2>От события<br />к ясной картине</h2></div><p>Три коротких шага — без отдельного кабинета, сложной навигации и переключения между сервисами.</p></div><div className="flow-grid"><div className="flow-line" aria-hidden="true"><span /></div>{steps.map((step, index) => <article className="flow-card" style={{ '--step': index } as React.CSSProperties} key={step.number}><div className="flow-card__top"><span>{step.number}</span><div><Icon name={step.icon} size={20} /></div></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
  )
}

function TelegramSection() {
  const benefits = ['Без отдельного кабинета', 'Уведомления сразу в чате', 'Удобно смотреть с телефона', 'Один бот для двух инструментов']
  return (
    <section className="section telegram-section reveal" id="telegram"><div className="container telegram-layout">
      <div className="telegram-copy"><span className="section-index">05 / TELEGRAM-NATIVE</span><h2>Аналитика там,<br />где ты уже на связи</h2><p>Plus AI не требует осваивать ещё один кабинет. Разборы матчей и уведомления Пульса рынка приходят прямо в Telegram.</p><ul>{benefits.map((benefit) => <li key={benefit}><span><Icon name="check" size={14} /></span>{benefit}</li>)}</ul></div>
      <div className="chat-stage"><div className="telegram-chat">
        <div className="chat-header"><button aria-label="Назад">‹</button><div className="chat-avatar">+</div><div><strong>Plus AI</strong><span>бот</span></div><button aria-label="Меню">•••</button></div>
        <div className="chat-body"><div className="chat-date">Сегодня</div>
          <article className="chat-bubble"><div className="chat-label"><Icon name="pulse" size={14} /> Market Pulse · demo</div><div className="chat-title"><strong>CS2</strong><span>$41,000</span></div><div className="chat-data"><div><span>Amount</span><strong>$41,000</strong></div><div><span>Odds</span><strong>1.95</strong></div><div><span>Stage</span><strong>Prematch</strong></div><div><span>Type</span><strong>Single</strong></div></div><p className="chat-note">Match and tournament hidden in demo view</p><time>12:48</time></article>
          <article className="chat-bubble"><div className="chat-label">✦ AI-мнение по матчу</div><h3>Demo match · CS2</h3><p>По текущему контексту одна сторона выглядит стабильнее. Перед событием важно учитывать движение линии.</p><div className="chat-risk"><span>Риск</span> Возможное изменение состава</div><time>12:49</time></article>
        </div>
        <div className="chat-input"><span>＋</span><p>Сообщение</p><span>◉</span></div>
      </div></div>
    </div></section>
  )
}

function FinalCta() {
  return (
    <section className="section final-section reveal"><div className="container final-card"><div className="final-brand"><span>+</span><strong>Plus AI</strong><small>Telegram analytics</small></div><span className="section-index">НАЧАТЬ РАБОТУ</span><h2>Открой Plus AI<br /><span>в Telegram</span></h2><p>AI-анализ матчей и Пульс рынка — в одном боте</p><TelegramButton className="final-button">Перейти в @plus_ai_robot</TelegramButton><small className="final-note">Telegram-native · Sport + Cybersport</small></div></section>
  )
}

function Footer() {
  return (
    <footer className="footer"><div className="container">
      <div className="footer-main"><div className="footer-brand"><Logo /><p>Информационный Telegram-сервис для анализа матчей и наблюдения за рыночными движениями.</p></div><div className="footer-column"><span>ПРОДУКТ</span><a href="#analysis">AI-анализ матчей</a><a href="#market">Пульс рынка</a></div><div className="footer-column"><span>СЕРВИС</span><p>Информационный сервис</p><p>Demo interface</p></div><div className="footer-column"><span>TELEGRAM</span><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">@plus_ai_robot</a><p>No financial guarantees</p></div></div>
      <div className="footer-legal"><p>Plus AI предоставляет информационно-аналитические материалы и демонстрационные интерфейсные примеры. Сервис не является букмекерской конторой, не принимает ставки, не гарантирует результат событий и не даёт финансовых рекомендаций. Любые решения пользователь принимает самостоятельно.</p><div><span>© 2026 Plus AI</span><span>18+</span></div></div>
    </div></footer>
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

  return <><a className="skip-link" href="#main">Перейти к содержимому</a><Header /><main id="main"><Hero /><Tools /><MarketPulse /><AnalysisSection /><HowItWorks /><TelegramSection /><FinalCta /></main><Footer /></>
}

export default App

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
  { sport: 'Football', amount: '$105,000', odds: '2.10', phase: 'Live', type: 'Single', mark: 'FB' },
  { sport: 'Tennis', amount: '$17,200', odds: '1.72', phase: 'Prematch', type: 'Express', mark: 'TN' },
  { sport: 'Dota 2', amount: '$28,500', odds: '1.88', phase: 'Live', type: 'Single', mark: 'D2' },
  { sport: 'Basketball', amount: '$34,750', odds: '2.35', phase: 'Prematch', type: 'Single', mark: 'BK' },
  { sport: 'Hockey', amount: '$22,400', odds: '1.64', phase: 'Live', type: 'Express', mark: 'HK' },
]

function TelegramButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`button ${className}`} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
      <Icon name="telegram" size={17} /><span>{children}</span><Icon name="arrow" size={16} />
    </a>
  )
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
        <a className="header-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Открыть бота <Icon name="arrow" size={15} /></a>
      </div>
    </header>
  )
}

function HeroTelegramPhone() {
  return (
    <div className="hero-phone-stage" aria-label="Демонстрация Telegram-бота Plus AI">
      <div className="hero-phone-backplate" aria-hidden="true" />
      <div className="hero-phone">
        <div className="hero-phone__status"><span>09:41</span><div><i /><i /><i /></div></div>
        <header className="hero-phone__header"><button aria-label="Назад">‹</button><div className="hero-phone__avatar">+AI</div><div><strong>Plus AI</strong><span>бот</span></div><b>•••</b></header>
        <div className="hero-phone__chat">
          <div className="hero-phone__day">DEMO INTERFACE</div>

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
        <div className="hero-phone__actions"><button><Icon name="scan" size={14} />Разобрать матч</button><button><Icon name="pulse" size={14} />Пульс рынка</button><a href={TELEGRAM_URL} target="_blank" rel="noreferrer"><Icon name="telegram" size={14} />Открыть бота</a></div>
        <div className="hero-phone__input"><span>＋</span><p>Сообщение</p><span>◉</span></div>
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
          <p className="hero-lead">AI-разбор матчей и Пульс рынка — прямо в Telegram.</p>
          <div className="hero-actions"><TelegramButton>Открыть Plus AI</TelegramButton><a className="text-link" href="#market">Смотреть интерфейс <Icon name="chevron" size={15} /></a></div>
        </div>
        <div className="hero-visual"><HeroTelegramPhone /></div>
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
      <div className="market-copy"><span className="section-index">01 / ПУЛЬС РЫНКА</span><h2>Крупные движения.<br /><span>Только нужный контекст.</span></h2><p>Пульс рынка собирает заметные изменения в спокойную ленту: вид спорта, объём, коэффициент и этап события видны сразу. Полные детали открываются в Telegram.</p><div className="filter-row" aria-label="Доступные фильтры"><span>SPORT + CYBERSPORT</span><span>LIVE / PREMATCH</span><span>SINGLE / EXPRESS</span><span>ODDS</span></div><div className="interface-note"><Icon name="eye" size={16} /><span>Демонстрационный интерфейс. Без статистики результатов и обещаний.</span></div></div>
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
      <div className="section-heading section-heading--center"><span className="section-index">02 / AI-АНАЛИЗ МАТЧА</span><h2><span>Разбор,</span> который можно<br />прочитать по делу</h2><p>Не декоративный дашборд, а последовательный отчет: контекст, форма, линия, риски и итоговое AI-мнение.</p></div>
      <article className="analysis-report">
        <header className="report-header"><div className="report-brand"><LogoGlyph size={23} /><strong>Plus AI</strong><small>Analysis Report</small></div><span className="demo-view">DEMO VIEW</span></header>
        <div className="report-meta"><div><span>МАТЧ</span><strong>Франция — Англия</strong></div><div><span>ТУРНИР</span><strong>International Series</strong></div><div><span>ВРЕМЯ</span><strong>Сегодня · 19:30 UTC</strong></div><div><span>ТИП</span><strong>Футбол</strong></div></div>
        <div className="report-body">
          <div className="report-sections">{details.map(([num, title, text, icon], index) => <section className="report-section" style={{ '--step': index } as React.CSSProperties} key={title}><span>{num}</span><i className="report-section__icon"><Icon name={icon as IconName} size={19} /></i><div><h3>{title}</h3><p>{text}</p></div></section>)}</div>
          <aside className="report-sidebar">
            <div className="report-movement"><div className="report-card-title"><Icon name="pulse" size={17} /><strong>Движение линии</strong></div><div className="report-movement__value">1.91 <i>→</i> <b>1.78</b></div><p>Рынок усиливает сторону Франции</p><div className="report-chart"><svg viewBox="0 0 260 92" preserveAspectRatio="none" aria-label="Демонстрационный график движения линии"><path className="report-chart__grid" d="M0 18H260M0 46H260M0 74H260"/><path className="report-chart__area" d="M0 16 C32 20 48 17 70 30 S108 37 132 43 S170 48 196 60 S230 63 260 78V92H0Z"/><path className="report-chart__line" pathLength="1" d="M0 16 C32 20 48 17 70 30 S108 37 132 43 S170 48 196 60 S230 63 260 78"/><circle cx="260" cy="78" r="4"/></svg><div><span>1.95</span><span>1.85</span><span>1.75</span></div></div><div className="report-chart__time"><span>3 дня назад</span><span>сейчас</span></div></div>
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
    <section className="section final-section reveal"><div className="container final-card"><LogoGlyph size={38} /><h2>Открой Plus AI<br /><span>в Telegram</span></h2><p>Получай AI-анализ матчей и уведомления Пульса рынка<br />в одном понятном Telegram-боте.</p><TelegramButton className="final-button">Перейти в @plus_ai_robot</TelegramButton></div></section>
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

  return <><a className="skip-link" href="#main">Перейти к содержимому</a><Header /><main id="main"><Hero /><MarketPulse /><AnalysisSection /><TelegramSection /><FinalCta /></main><Footer /></>
}

export default App

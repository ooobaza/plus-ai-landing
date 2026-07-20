import { useEffect } from 'react'

const TELEGRAM_URL = 'https://t.me/plus_ai_robot'

type IconName =
  | 'arrow'
  | 'bolt'
  | 'check'
  | 'chevron'
  | 'eye'
  | 'lock'
  | 'pulse'
  | 'risk'
  | 'scan'
  | 'telegram'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    pulse: <path d="M3 12h4l2.2-6 4 12 2.1-6H21"/>,
    risk: <><path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4"/><path d="M12 16h.01"/></>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M16 4h3a1 1 0 0 1 1 1v3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/><path d="M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/></>,
    telegram: <><path d="m21 4-3.2 16-6-4.2-3.3 2.7.6-5.2L19 5.8 7 12.3 2.4 10.8 21 4Z"/><path d="m9.1 13.3 2.7 2.5"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const analysisFactors = [
  { label: 'Контекст', value: 'Плей-офф · решающая карта', tone: 'cyan' },
  { label: 'Форма', value: 'Динамика последних встреч', tone: 'emerald' },
  { label: 'Линия', value: 'Изменение 1.84 → 1.91', tone: 'violet' },
  { label: 'Риски', value: 'Нестабильность состава', tone: 'neutral' },
]

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
    number: '01',
    eyebrow: 'Матч в фокусе',
    title: 'AI-анализ матча',
    text: 'Контекст, форма, линия, риски и итоговое AI-мнение в одном разборе',
    points: ['Контекст события', 'Форма и динамика', 'Линия и коэффициенты', 'Риски', 'AI-мнение'],
    icon: 'scan' as IconName,
  },
  {
    number: '02',
    eyebrow: 'Движение рынка',
    title: 'Пульс рынка',
    text: 'Крупные рыночные движения и уведомления по заданным фильтрам прямо в Telegram',
    points: ['Объем от $10,000', 'Sport / Cybersport', 'Live или prematch', 'Single или express', 'Фильтр по коэффициенту'],
    icon: 'pulse' as IconName,
  },
]

function TelegramButton({ children, secondary = false, className = '' }: { children: React.ReactNode; secondary?: boolean; className?: string }) {
  return (
    <a className={`button ${secondary ? 'button--secondary' : ''} ${className}`} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
      {!secondary && <Icon name="telegram" size={17} />}
      <span>{children}</span>
      <Icon name="arrow" size={16} />
    </a>
  )
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Plus AI — на главную">
      <span className="logo__plus">+</span><span>AI</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav" aria-label="Основная навигация">
          <a href="#features">Возможности</a>
          <a href="#market">Пульс рынка</a>
          <a href="#how">Как работает</a>
          <a href="#telegram">Telegram</a>
        </nav>
        <a className="header-cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          Открыть бота <Icon name="arrow" size={15} />
        </a>
      </div>
    </header>
  )
}

function SignalGraph() {
  return (
    <svg className="signal-graph" viewBox="0 0 540 110" preserveAspectRatio="none" role="img" aria-label="Демонстрационный график изменения линии">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#4ad7ba" stopOpacity=".08" />
          <stop offset=".55" stopColor="#4ad7ba" />
          <stop offset="1" stopColor="#60d9ed" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4ad7ba" stopOpacity=".2" />
          <stop offset="1" stopColor="#4ad7ba" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="graph-grid">
        <path d="M0 25H540M0 55H540M0 85H540" />
        <path d="M90 0V110M180 0V110M270 0V110M360 0V110M450 0V110" />
      </g>
      <path className="graph-area" d="M0 93C45 91 52 81 90 84s62-25 101-19 61 15 94 2 57-39 96-34 63 26 94 6 42-27 65-31v102H0Z" />
      <path className="graph-line" pathLength="1" d="M0 93C45 91 52 81 90 84s62-25 101-19 61 15 94 2 57-39 96-34 63 26 94 6 42-27 65-31" />
      <circle className="graph-dot" cx="540" cy="8" r="4" />
    </svg>
  )
}

function HeroConsole() {
  const previewItems = marketFeed.slice(0, 3)
  return (
    <div className="hero-console" aria-label="Пример интерфейса Plus AI">
      <div className="console-chrome">
        <div className="console-brand"><span className="console-brand__mark">+</span> Plus AI</div>
        <div className="console-status"><span /> SYSTEM ONLINE</div>
        <span className="console-demo">INTERFACE PREVIEW</span>
      </div>
      <div className="console-grid">
        <div className="analysis-panel">
          <div className="panel-topline">
            <span className="micro-label"><Icon name="scan" size={14} /> AI-анализ</span>
            <span className="demo-pill">DEMO</span>
          </div>
          <div className="match-row">
            <div className="game-mark">CS</div>
            <div>
              <span className="match-kicker">CYBERSPORT · PREMATCH</span>
              <h3>Demo match <span>/</span> скрыто</h3>
            </div>
          </div>
          <div className="factor-grid">
            {analysisFactors.map((item, index) => (
              <div className={`factor factor--${item.tone}`} style={{ '--delay': `${index * 0.45}s` } as React.CSSProperties} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="ai-summary">
            <div className="summary-head"><span className="summary-spark">✦</span> AI-мнение</div>
            <p>Контекст указывает на преимущество одной стороны, однако движение линии повышает значимость ключевого риска.</p>
          </div>
          <SignalGraph />
        </div>
        <div className="hero-feed">
          <div className="feed-heading">
            <div><span className="live-dot" /> Пульс рынка</div>
            <span>LIVE FEED</span>
          </div>
          <div className="hero-feed-list">
            {previewItems.map((item, index) => (
              <div className="hero-feed-item" style={{ '--item': index } as React.CSSProperties} key={item.sport}>
                <div className="feed-mark">{item.mark}</div>
                <div className="feed-copy"><strong>{item.sport}</strong><span>{item.phase} · {item.type}</span></div>
                <div className="feed-values"><strong>{item.amount}</strong><span>{item.odds}</span></div>
              </div>
            ))}
          </div>
          <div className="locked-note"><Icon name="lock" size={14} /><span>Полные детали доступны в боте</span></div>
          <div className="data-rail" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="console-glow" aria-hidden="true" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> ЗАКРЫТЫЙ TELEGRAM-ИНСТРУМЕНТ</div>
          <h1>AI-анализ матчей <span className="headline-muted">и Пульс рынка</span> в Telegram</h1>
          <p className="hero-lead">Разбирай матчи, смотри контекст, риски и крупные рыночные движения в одном аналитическом боте</p>
          <div className="hero-actions">
            <TelegramButton>Открыть Plus AI</TelegramButton>
            <a className="text-link" href="#features">Как это устроено <Icon name="chevron" size={15} /></a>
          </div>
          <p className="hero-meta">Sport + Cybersport <i /> AI-мнение <i /> Рыночные движения <i /> Telegram-уведомления</p>
        </div>
        <div className="hero-visual">
          <div className="visual-caption visual-caption--top"><span>DATA SIGNAL</span><b>02.418</b></div>
          <HeroConsole />
          <div className="visual-caption visual-caption--bottom"><span>ANALYTICS LAYER</span><b>ACTIVE</b></div>
        </div>
      </div>
      <div className="hero-index container" aria-hidden="true"><span>PLUS AI / 001</span><div /><span>SCROLL TO EXPLORE</span></div>
    </section>
  )
}

function Tools() {
  return (
    <section className="section tools-section reveal" id="features">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><span className="section-index">01 / ВОЗМОЖНОСТИ</span><h2>Два инструмента.<br />Один ясный контекст.</h2></div>
          <p>Вместо разрозненных экранов — единая точка входа для анализа события и наблюдения за движениями рынка.</p>
        </div>
        <div className="tool-grid">
          {toolCards.map((tool) => (
            <article className="tool-card" key={tool.title}>
              <div className="tool-card__top"><span>{tool.number}</span><div className="tool-icon"><Icon name={tool.icon} size={22} /></div></div>
              <div className="tool-card__body">
                <span className="card-eyebrow">{tool.eyebrow}</span>
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <ul>
                  {tool.points.map((point) => <li key={point}><Icon name="check" size={15} />{point}</li>)}
                </ul>
              </div>
              <div className="tool-card__signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketCard({ item, ghost = false }: { item: typeof marketFeed[number]; ghost?: boolean }) {
  return (
    <article className="market-card" aria-hidden={ghost || undefined}>
      <div className="market-card__main">
        <div className="market-symbol">{item.mark}</div>
        <div className="market-title"><span>SPORT</span><strong>{item.sport}</strong></div>
        <div className="market-value"><span>AMOUNT</span><strong>{item.amount}</strong></div>
        <div className="market-value"><span>ODDS</span><strong>{item.odds}</strong></div>
      </div>
      <div className="market-card__meta">
        <span className={item.phase === 'Live' ? 'tag tag--live' : 'tag'}>{item.phase === 'Live' && <i />}{item.phase}</span>
        <span className="tag">{item.type}</span>
        <div className="locked-data"><span className="blur-line blur-line--wide" /><span className="blur-line" /><Icon name="lock" size={13} /></div>
      </div>
    </article>
  )
}

function MarketPulse() {
  return (
    <section className="section market-section reveal" id="market">
      <div className="container market-layout">
        <div className="market-copy">
          <span className="section-index">02 / ПУЛЬС РЫНКА</span>
          <h2>Замечай движение.<br /><span>Не теряй контекст.</span></h2>
          <p>Пульс рынка показывает крупные движения в спокойной, структурированной ленте. Настраивай фильтры и получай уведомления прямо в Telegram.</p>
          <div className="filter-row" aria-label="Доступные фильтры">
            <span>SPORT</span><span>LIVE</span><span>PREMATCH</span><span>ODDS</span>
          </div>
          <div className="interface-note"><Icon name="eye" size={16} /><span>Пример интерфейса. Полная карточка открывается в Telegram-боте</span></div>
        </div>
        <div className="market-terminal">
          <div className="terminal-header">
            <div><span className="live-dot" /> MARKET PULSE</div>
            <span className="terminal-counter">AUTO / 21 SEC</span>
          </div>
          <div className="feed-window">
            <div className="feed-track">
              <div className="feed-set">{marketFeed.map((item) => <MarketCard item={item} key={item.sport} />)}</div>
              <div className="feed-set" aria-hidden="true">{marketFeed.map((item) => <MarketCard item={item} ghost key={`copy-${item.sport}`} />)}</div>
            </div>
            <div className="feed-fade feed-fade--top" /><div className="feed-fade feed-fade--bottom" />
          </div>
          <div className="terminal-footer"><span>DEMO / INTERFACE PREVIEW</span><div className="terminal-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div><span>ENCRYPTED VIEW</span></div>
        </div>
      </div>
    </section>
  )
}

function AnalysisSection() {
  const details = [
    ['01', 'Контекст', 'Решающая стадия турнира. Участники встречались недавно, но условия события изменились.'],
    ['02', 'Форма', 'У одной стороны стабильнее последние отрезки, у другой — выше разброс по картам.'],
    ['03', 'Линия', 'Коэффициент сместился с 1.84 до 1.91. Динамика требует внимания к обновлениям состава.'],
    ['04', 'Риски', 'Нестабильность последних игр и возможное изменение линии до начала события.'],
  ]
  return (
    <section className="section analysis-section reveal" id="analysis">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="section-index">03 / AI-АНАЛИЗ МАТЧА</span>
          <h2>Информационный разбор<br />без лишнего шума</h2>
          <p>Структура помогает быстро понять событие: что важно сейчас, где находится риск и как меняется общая картина.</p>
        </div>
        <div className="analysis-workspace">
          <div className="workspace-rail" aria-hidden="true"><span>+AI</span><i /><i /><i /><i /></div>
          <div className="workspace-main">
            <div className="workspace-header">
              <div><span className="micro-label">DEMO MATCH / СКРЫТО</span><h3>Аналитика матча</h3></div>
              <div className="workspace-sport"><span>SPORT</span><strong>CYBERSPORT · CS2</strong></div>
            </div>
            <div className="analysis-detail-grid">
              {details.map(([num, title, text], index) => (
                <div className="analysis-detail" style={{ '--step': index } as React.CSSProperties} key={title}>
                  <span className="detail-number">{num}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                  <span className="detail-state"><i /> ANALYZED</span>
                </div>
              ))}
            </div>
            <div className="opinion-panel" style={{ '--step': 4 } as React.CSSProperties}>
              <div className="opinion-title"><span>✦</span><div><small>ИТОГ</small><strong>AI-мнение</strong></div></div>
              <p>По доступному контексту одна сторона выглядит интереснее, но ключевой риск — нестабильность последних игр и возможное изменение линии.</p>
              <span className="opinion-tag">Информационный разбор</span>
            </div>
          </div>
          <aside className="workspace-side">
            <span className="micro-label">SIGNAL MAP</span>
            <div className="radar" aria-hidden="true"><i /><i /><i /><i /><span /></div>
            <div className="side-stat"><span>ФАКТОРОВ</span><strong>04</strong></div>
            <div className="side-stat"><span>СТАТУС</span><strong className="status-ready">ГОТОВО</strong></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { number: '01', title: 'Открываешь событие', text: 'Выбираешь матч или переходишь к уведомлению Пульса рынка.', icon: 'eye' as IconName },
    { number: '02', title: 'Plus AI собирает контекст', text: 'Система структурирует форму, линию, факторы и риски.', icon: 'scan' as IconName },
    { number: '03', title: 'Получаешь разбор в Telegram', text: 'AI-мнение и рыночные сигналы остаются в одном удобном чате.', icon: 'telegram' as IconName },
  ]
  return (
    <section className="section flow-section reveal" id="how">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><span className="section-index">04 / КАК ЭТО РАБОТАЕТ</span><h2>От события<br />к ясной картине</h2></div>
          <p>Три коротких шага — без отдельного кабинета, сложной навигации и переключения между сервисами.</p>
        </div>
        <div className="flow-grid">
          <div className="flow-line" aria-hidden="true"><span /></div>
          {steps.map((step, index) => (
            <article className="flow-card" style={{ '--step': index } as React.CSSProperties} key={step.number}>
              <div className="flow-card__top"><span>{step.number}</span><div><Icon name={step.icon} size={20} /></div></div>
              <h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TelegramSection() {
  const benefits = ['Без отдельного кабинета', 'Уведомления сразу в чате', 'Удобно смотреть с телефона', 'Один бот для двух инструментов']
  return (
    <section className="section telegram-section reveal" id="telegram">
      <div className="container telegram-layout">
        <div className="telegram-copy">
          <span className="section-index">05 / TELEGRAM NATIVE</span>
          <h2>Аналитика там,<br />где ты уже на связи</h2>
          <p>Plus AI не требует осваивать ещё один кабинет. Нужный контекст и новые уведомления приходят прямо в Telegram.</p>
          <ul>{benefits.map((benefit) => <li key={benefit}><span><Icon name="check" size={14} /></span>{benefit}</li>)}</ul>
        </div>
        <div className="phone-stage">
          <div className="phone-orbit phone-orbit--one" aria-hidden="true" /><div className="phone-orbit phone-orbit--two" aria-hidden="true" />
          <div className="phone-card">
            <div className="phone-header"><div className="phone-avatar">+</div><div><strong>Plus AI</strong><span><i /> bot · online</span></div><span className="phone-menu">•••</span></div>
            <div className="phone-date">Сегодня</div>
            <div className="message message--bot">
              <span className="message-label"><Icon name="pulse" size={14} /> ПУЛЬС РЫНКА · DEMO</span>
              <div className="message-title"><strong>CS2</strong><span>$41,000</span></div>
              <div className="message-tags"><span>Prematch</span><span>Single</span><span>1.95</span></div>
              <div className="message-locked"><Icon name="lock" size={13} /><span>Детали доступны в полной карточке</span></div>
              <time>12:48</time>
            </div>
            <div className="message message--bot message--analysis">
              <span className="message-label">✦ AI-МНЕНИЕ</span>
              <p>Контекст обновлён. Ключевой фактор — динамика линии перед началом события.</p>
              <time>12:49</time>
            </div>
            <div className="phone-input"><span>Сообщение</span><div><Icon name="arrow" size={15} /></div></div>
          </div>
          <span className="phone-caption phone-caption--left">INSTANT ACCESS</span><span className="phone-caption phone-caption--right">ONE CHAT / TWO TOOLS</span>
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section final-section reveal">
      <div className="container final-card">
        <div className="final-grid" aria-hidden="true" />
        <span className="section-index">06 / PLUS AI</span>
        <h2>Открой Plus AI<br /><span>в Telegram</span></h2>
        <p>AI-анализ матчей и Пульс рынка — в одном боте</p>
        <TelegramButton className="final-button">Перейти в @plus_ai_robot</TelegramButton>
        <div className="final-status"><span><i /> TELEGRAM BOT</span><span>SPORT + CYBERSPORT</span><span>18+</span></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="disclaimer">
          <div className="disclaimer-mark"><Icon name="risk" size={18} /></div>
          <div><strong>Информационный сервис · 18+</strong><p>Plus AI предоставляет информационно-аналитические материалы и демонстрационные интерфейсные примеры. Сервис не является букмекерской конторой, не принимает ставки, не гарантирует результат событий и не дает финансовых рекомендаций. Любые решения пользователь принимает самостоятельно.</p></div>
        </div>
        <div className="footer-row"><Logo /><span>© {new Date().getFullYear()} Plus AI</span><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">@plus_ai_robot <Icon name="arrow" size={14} /></a></div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.13 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержимому</a>
      <Header />
      <main id="main"><Hero /><Tools /><MarketPulse /><AnalysisSection /><HowItWorks /><TelegramSection /><FinalCta /></main>
      <Footer />
    </>
  )
}

export default App

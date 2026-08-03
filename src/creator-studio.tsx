import { useCallback, useEffect, useRef, useState } from 'react'

const STUDIO_PASSWORD_HASH = '41f580b0b08a4558fdc2f57cc072b48513af22e86ccbca245a20a7a976bdfb70'
const STUDIO_SESSION_KEY = 'plus-ai-analyz-access'
const BOT_URL = 'https://t.me/plus_ai_robot?start=ad_SITE'

const analysisSteps = [
  ['01', 'Распознавание события'],
  ['02', 'Контекст и формат матча'],
  ['03', 'Форма участников'],
  ['04', 'Движение линии'],
  ['05', 'Факторы риска'],
  ['06', 'Формирование AI-мнения'],
]

const factorCards = [
  ['Контекст', 'Событие и турнир сопоставлены', 24],
  ['Форма', 'Последние игровые паттерны найдены', 40],
  ['Линия', 'Динамика рынка зафиксирована', 56],
  ['Составы', 'Доступные изменения учтены', 70],
  ['Риски', 'Ключевые сценарии сформированы', 84],
  ['AI-мнение', 'Итоговая модель подготовлена', 96],
]

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

function StudioLogo() {
  return <div className="studio-logo"><img src="/logo-plus-ai.png" alt="Plus AI" /><span>MATCH INTELLIGENCE</span></div>
}

function AccessGate({ onAccess }: { onAccess: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    setChecking(true)
    setError('')
    try {
      if (await sha256(password.trim()) !== STUDIO_PASSWORD_HASH) {
        setError('Неверный пароль. Проверь раскладку и попробуй ещё раз.')
        return
      }
      sessionStorage.setItem(STUDIO_SESSION_KEY, 'allowed')
      onAccess()
    } catch {
      setError('Браузер не поддерживает безопасную проверку пароля.')
    } finally {
      setChecking(false)
    }
  }

  return (
    <main className="studio-gate">
      <div className="studio-gate__ambient" aria-hidden="true" />
      <section className="studio-gate__card">
        <StudioLogo />
        <span className="studio-kicker"><i /> ЗАКРЫТЫЙ ИНТЕРФЕЙС</span>
        <h1>AI-анализ<br /><em>матча</em></h1>
        <p>Закрытый демонстрационный интерфейс Plus AI. Для продолжения введи общий пароль.</p>
        <form onSubmit={submit}>
          <label htmlFor="studio-password">Общий пароль</label>
          <div className="studio-gate__field">
            <input id="studio-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" placeholder="Введите пароль" autoFocus />
            <button type="submit" disabled={!password.trim() || checking}>{checking ? 'Проверяем…' : 'Открыть анализ'} <span aria-hidden="true">→</span></button>
          </div>
          {error && <div className="studio-gate__error" role="alert">{error}</div>}
        </form>
        <small>Доступ предоставляется участникам команды Plus AI.</small>
      </section>
    </main>
  )
}

function UploadPanel({ image, onFile }: { image: string | null; onFile: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [pasteHint, setPasteHint] = useState('')

  function acceptFiles(files: FileList | null) {
    const file = files?.[0]
    if (file?.type.startsWith('image/')) onFile(file)
  }

  async function pasteFromClipboard() {
    try {
      const items = await navigator.clipboard.read()
      for (const item of items) {
        const imageType = item.types.find((type) => type.startsWith('image/'))
        if (!imageType) continue
        const blob = await item.getType(imageType)
        onFile(new File([blob], 'match-from-clipboard.png', { type: imageType }))
        setPasteHint('Изображение вставлено')
        return
      }
      setPasteHint('В буфере нет изображения')
    } catch {
      setPasteHint('Нажми Ctrl+V, чтобы вставить изображение')
    }
  }

  return (
    <section className={`studio-upload-panel${image ? ' is-loaded' : ''}`}>
      <button
        className={`studio-dropzone${image ? ' studio-dropzone--loaded' : ''}`}
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => { event.preventDefault(); acceptFiles(event.dataTransfer.files) }}
      >
        {image ? <img src={image} alt="Загруженный скриншот матча" /> : <><span className="studio-upload-icon" aria-hidden="true">＋</span><strong>Загрузить скрин матча</strong><small>PNG, JPG или WEBP · анализ начнётся автоматически</small></>}
        {image && <span className="studio-dropzone__change">Заменить скрин</span>}
      </button>
      <input ref={inputRef} className="studio-file-input" type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => acceptFiles(event.target.files)} />
      <div className="studio-paste-row">
        <button type="button" onClick={pasteFromClipboard}><span aria-hidden="true">⌘</span> Вставить из буфера</button>
        <small>{pasteHint || 'Можно также нажать Ctrl+V в любом месте страницы'}</small>
      </div>
    </section>
  )
}

function AnalysisStage({ image, progress, status, format }: { image: string | null; progress: number; status: 'idle' | 'processing' | 'done'; format: 'wide' | 'portrait' }) {
  const activeStep = Math.min(analysisSteps.length - 1, Math.floor(progress / (100 / analysisSteps.length)))
  const done = status === 'done'
  const pixelCount = 96

  return (
    <section className={`studio-analysis studio-analysis--${format} studio-analysis--${status}`} aria-live="polite">
      <div className="studio-analysis__noise" aria-hidden="true" />
      <header className="studio-analysis__header">
        <StudioLogo />
        <div className="studio-analysis__mode"><i /> AI MATCH ANALYSIS</div>
        <span>DEMO INTERFACE</span>
      </header>

      <div className="studio-analysis__body">
        <div className="studio-source-card">
          <div className="studio-source-card__image">
            {image ? <img src={image} alt="Источник для демонстрационного анализа" /> : <div className="studio-source-card__empty"><span>＋</span><p>Добавь изображение матча</p></div>}
            {image && <div className="studio-source-card__corners" aria-hidden="true"><i /><i /><i /><i /></div>}
            {status === 'processing' && <>
              <div className="studio-source-card__pixel-reconstruction" aria-hidden="true">
                <div className="studio-source-card__pixel-grid">
                  {Array.from({ length: pixelCount }, (_, index) => (
                    <i className={index < Math.round((progress / 100) * pixelCount) ? 'is-resolved' : ''} key={index} />
                  ))}
                </div>
                <div className="studio-source-card__pixel-scan" style={{ top: `${Math.min(96, Math.max(3, progress))}%` }} />
                <div className="studio-source-card__pixel-status">
                  <span>PIXEL RECONSTRUCTION</span>
                  <strong>{String(progress).padStart(2, '0')}%</strong>
                </div>
                <div className="studio-source-card__pixel-stage">
                  <i />
                  <div><span>AI-АНАЛИЗ ИЗОБРАЖЕНИЯ</span><strong>{analysisSteps[activeStep][1]}</strong></div>
                </div>
              </div>
            </>}
          </div>
          <div className="studio-source-card__meta"><span>ИСТОЧНИК</span><strong>{image ? 'Изображение получено' : 'Ожидание изображения'}</strong><i>{status === 'processing' ? 'Распознаём событие…' : done ? 'Событие распознано' : 'Готово к загрузке'}</i></div>
        </div>

        <div className="studio-analysis__content">
          <div className="studio-analysis__headline">
            <span><i /> {status === 'idle' ? 'СИСТЕМА ГОТОВА' : done ? 'ИТОГОВЫЙ ВЫВОД СФОРМИРОВАН' : 'ИДЁТ ГЛУБОКИЙ AI-АНАЛИЗ'}</span>
            <h2>{status === 'idle' ? 'Загрузи матч и запусти разбор' : done ? 'Сторона с преимуществом найдена' : analysisSteps[activeStep][1]}</h2>
            <p>{done ? 'Модель завершила разбор и выделила наиболее сильную сторону по совокупности факторов. Итоговый выбор и аргументы уже готовы.' : 'Последовательно сопоставляем контекст, форму, линию и ключевые риски.'}</p>
          </div>

          <div className="studio-progress">
            <div><span>ANALYSIS PROGRESS</span><strong>{progress}%</strong></div>
            <div className="studio-progress__track"><i style={{ width: `${progress}%` }} /></div>
          </div>

          <div className="studio-telemetry" aria-label="Этапы обработки">
            <span><i /> Событие <strong>{progress >= 18 ? 'распознано' : 'поиск'}</strong></span>
            <span><i /> Источники <strong>{progress >= 46 ? 'сопоставлены' : 'проверка'}</strong></span>
            <span><i /> Модель <strong>{progress >= 78 ? 'сформирована' : 'расчёт'}</strong></span>
          </div>

          <div className="studio-factor-grid">
            {factorCards.map(([title, text, threshold], index) => {
              const available = progress >= Number(threshold)
              return <article className={available ? 'is-ready' : ''} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{available ? text : status === 'idle' ? 'Ожидает запуска' : 'Обработка данных…'}</p></div><i aria-hidden="true">{available ? '✓' : '·'}</i></article>
            })}
          </div>

          <div className={`studio-market-card${progress >= 56 ? ' is-active' : ''}${done ? ' is-ready' : ''}`}>
            <div className="studio-market-card__head"><span>Динамика линии</span><strong>{done ? 'Движение зафиксировано' : 'Сканирование данных'}</strong></div>
            <div className="studio-market-chart" aria-hidden="true">
              <svg viewBox="0 0 800 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="studio-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#58e1c4" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#58e1c4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="studio-market-chart__area" d="M0 93 C70 91 98 78 148 76 C211 72 234 49 296 56 C350 63 382 83 440 76 C504 68 526 43 590 46 C654 49 696 33 750 36 C774 37 790 27 800 19 L800 120 L0 120 Z" />
                <path className="studio-market-chart__line" d="M0 93 C70 91 98 78 148 76 C211 72 234 49 296 56 C350 63 382 83 440 76 C504 68 526 43 590 46 C654 49 696 33 750 36 C774 37 790 27 800 19" />
                <circle className="studio-market-chart__point" cx="800" cy="19" r="6" />
              </svg>
            </div>
            <div className="studio-market-card__axis"><span>РАНЕЕ</span><span>ДИНАМИКА</span><span>СЕЙЧАС</span></div>
          </div>

          <div className={`studio-locked-result${done ? ' is-visible' : ''}`}>
            <div className="studio-locked-result__icon" aria-hidden="true">✦</div>
            <div className="studio-locked-result__copy">
              <span>КЛЮЧЕВОЙ ВЫВОД СФОРМИРОВАН</span>
              <strong>Итоговая сторона определена</strong>
              <p>AI-мнение, аргументы и ключевой риск уже собраны. Открой полный анализ в Telegram.</p>
            </div>
            <div className="studio-locked-result__badge">ВЫВОД ГОТОВ</div>
          </div>
        </div>
      </div>

      <footer className="studio-analysis__footer">
        <span>Демо-интерфейс · итоговый вывод доступен в боте</span>
        <div className="studio-analysis__footer-action">
          <a href={BOT_URL} target="_blank" rel="noreferrer"><strong>Открыть найденный результат</strong><small>Выбранная сторона, аргументы и риски — в Plus AI</small><i aria-hidden="true">→</i></a>
        </div>
      </footer>
    </section>
  )
}

export function CreatorStudioPage() {
  const [allowed, setAllowed] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle')
  const [progress, setProgress] = useState(0)
  const [format, setFormat] = useState<'wide' | 'portrait'>('wide')

  useEffect(() => {
    setAllowed(sessionStorage.getItem(STUDIO_SESSION_KEY) === 'allowed')
    if (window.matchMedia('(max-width: 640px)').matches) setFormat('portrait')
  }, [])

  useEffect(() => {
    if (status !== 'processing') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + (reducedMotion ? 20 : 1))
        if (next === 100) {
          window.clearInterval(interval)
          window.setTimeout(() => setStatus('done'), reducedMotion ? 50 : 350)
        }
        return next
      })
    }, reducedMotion ? 30 : 46)
    return () => window.clearInterval(interval)
  }, [status])

  useEffect(() => () => { if (image) URL.revokeObjectURL(image) }, [image])

  const loadFile = useCallback((file: File) => {
    if (image) URL.revokeObjectURL(image)
    setImage(URL.createObjectURL(file))
    setProgress(1)
    setStatus('processing')
  }, [image])

  useEffect(() => {
    function handlePaste(event: ClipboardEvent) {
      const file = Array.from(event.clipboardData?.files ?? []).find((item) => item.type.startsWith('image/'))
      if (file) loadFile(file)
    }
    window.addEventListener('paste', handlePaste)
    return () => window.removeEventListener('paste', handlePaste)
  }, [loadFile])

  if (!allowed) return <AccessGate onAccess={() => setAllowed(true)} />

  return (
    <div className="studio-page">
      <header className="studio-header">
        <StudioLogo />
        <div className="studio-header__status"><i /><span>{status === 'processing' ? `AI-анализ · ${progress}%` : status === 'done' ? 'Разбор сформирован' : 'Система готова'}</span></div>
      </header>

      <main className={`studio-analyzer${image ? ' has-image' : ''}`}>
        {!image && <section className="studio-entry">
          <div className="studio-entry__intro">
            <span className="studio-kicker"><i /> PLUS AI · MATCH INTELLIGENCE</span>
            <h1>Загрузи матч.<br /><em>Запусти AI-анализ.</em></h1>
            <p>Добавь скрин события — система распознает структуру матча и последовательно покажет этапы аналитического разбора.</p>
          </div>
          <UploadPanel image={image} onFile={loadFile} />
          <p className="studio-privacy-note"><i>✓</i> Изображение обрабатывается только в браузере и никуда не загружается.</p>
        </section>}

        {image && <div className={`studio-preview studio-preview--${format}`}>
          <AnalysisStage image={image} progress={progress} status={status} format={format} />
        </div>}
      </main>
    </div>
  )
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

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
            {status !== 'idle' && <><div className="studio-source-card__scan" aria-hidden="true" /><div className="studio-source-card__corners" aria-hidden="true"><i /><i /><i /><i /></div></>}
          </div>
          <div className="studio-source-card__meta"><span>ИСТОЧНИК</span><strong>{image ? 'Изображение получено' : 'Ожидание изображения'}</strong><i>{status === 'processing' ? 'Распознаём событие…' : done ? 'Событие распознано' : 'Готово к загрузке'}</i></div>
        </div>

        <div className="studio-analysis__content">
          <div className="studio-analysis__headline">
            <span><i /> {status === 'idle' ? 'СИСТЕМА ГОТОВА' : done ? 'РАЗБОР СФОРМИРОВАН' : 'ИДЁТ AI-АНАЛИЗ'}</span>
            <h2>{status === 'idle' ? 'Загрузи матч и запусти разбор' : done ? 'Ключевые факторы найдены' : analysisSteps[activeStep][1]}</h2>
            <p>{done ? 'Plus AI собрал доступный контекст, рыночную динамику и факторы риска.' : 'Последовательно сопоставляем доступные данные и структуру события.'}</p>
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

          <div className="studio-market-card">
            <div className="studio-market-card__head"><span>Динамика линии</span><strong>{done ? 'Сигнал обнаружен' : 'Сканирование'}</strong></div>
            <div className="studio-market-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><b /></div>
            <div className="studio-market-card__axis"><span>СТАРТ</span><span>ДВИЖЕНИЕ</span><span>СЕЙЧАС</span></div>
          </div>

          <div className={`studio-locked-result${done ? ' is-visible' : ''}`}>
            <div className="studio-locked-result__top"><span>✦ AI-МНЕНИЕ</span><b>ПОЛНЫЙ РАЗБОР</b></div>
            <div className="studio-locked-result__blur" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="studio-locked-result__cover"><span>＋AI</span><strong>Детали и итоговое AI-мнение скрыты</strong><p>Открой полный анализ матча в Telegram-боте Plus AI</p></div>
          </div>
        </div>
      </div>

      <footer className="studio-analysis__footer">
        <span>Интерфейсная демонстрация · реальные выводы формируются в боте</span>
        <a href={BOT_URL} target="_blank" rel="noreferrer">Открыть полный анализ <i aria-hidden="true">→</i></a>
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

  const statusLabel = useMemo(() => status === 'idle' ? 'Ожидание запуска' : status === 'processing' ? 'Анализ выполняется' : 'Разбор готов', [status])

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

  function startAnalysis() {
    if (!image || status === 'processing') return
    setProgress(1)
    setStatus('processing')
  }

  function resetAnalysis() {
    setProgress(0)
    setStatus('idle')
  }

  function logout() {
    sessionStorage.removeItem(STUDIO_SESSION_KEY)
    setAllowed(false)
  }

  if (!allowed) return <AccessGate onAccess={() => setAllowed(true)} />

  return (
    <div className="studio-page">
      <header className="studio-header">
        <StudioLogo />
        <div className="studio-header__status"><i /><span>{statusLabel}</span></div>
        <button type="button" onClick={logout}>Закрыть доступ</button>
      </header>

      <main className={`studio-analyzer${image ? ' has-image' : ''}`}>
        <section className={`studio-entry${image ? ' is-compact' : ''}`}>
          {!image && <div className="studio-entry__intro">
            <span className="studio-kicker"><i /> PLUS AI · MATCH INTELLIGENCE</span>
            <h1>Загрузи матч.<br /><em>Запусти AI-анализ.</em></h1>
            <p>Добавь скрин события — система распознает структуру матча и последовательно покажет этапы аналитического разбора.</p>
          </div>}
          <UploadPanel image={image} onFile={loadFile} />
          {image && <div className="studio-commandbar">
            <div>
              <span className="studio-commandbar__eyebrow">ИЗОБРАЖЕНИЕ ПОЛУЧЕНО</span>
              <strong>{status === 'processing' ? `AI-анализ выполняется · ${progress}%` : status === 'done' ? 'Разбор сформирован' : 'Готово к запуску'}</strong>
            </div>
            <div className="studio-format-switch" role="group" aria-label="Формат сцены">
              <button className={format === 'wide' ? 'is-active' : ''} type="button" onClick={() => setFormat('wide')}><i>16:9</i><span>Desktop</span></button>
              <button className={format === 'portrait' ? 'is-active' : ''} type="button" onClick={() => setFormat('portrait')}><i>9:16</i><span>Mobile</span></button>
            </div>
            <div className="studio-control-actions">
              <button className="studio-start" type="button" disabled={!image || status === 'processing'} onClick={startAnalysis}>{status === 'done' ? 'Повторить анализ' : status === 'processing' ? `Анализ ${progress}%` : 'Запустить анализ'} <span aria-hidden="true">→</span></button>
              {status !== 'idle' && <button className="studio-reset" type="button" onClick={resetAnalysis}>Сбросить</button>}
            </div>
          </div>}
          {!image && <p className="studio-privacy-note"><i>✓</i> Изображение обрабатывается только в браузере и никуда не загружается.</p>}
        </section>

        {!image && <section className="studio-entry-steps" aria-label="Как работает анализ">
          <article><span>01</span><strong>Добавь скрин</strong><p>Загрузка файла или вставка изображения из буфера.</p></article>
          <article><span>02</span><strong>Дождись анализа</strong><p>Система последовательно покажет обработку ключевых факторов.</p></article>
          <article><span>03</span><strong>Открой результат</strong><p>Полные детали и AI-мнение доступны в Telegram-боте.</p></article>
        </section>}

        {image && <div className={`studio-preview studio-preview--${format}`}>
          <div className="studio-preview__bar"><span>PREVIEW · {format === 'wide' ? '16:9' : '9:16'}</span><i>REC SAFE</i></div>
          <AnalysisStage image={image} progress={progress} status={status} format={format} />
        </div>}
      </main>
    </div>
  )
}

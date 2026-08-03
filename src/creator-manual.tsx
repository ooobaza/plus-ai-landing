type CreatorManualKind = 'fixed' | 'partner'

const MANAGER_URL = 'https://t.me/plus_maks'
const SITE_URL = 'https://plus-ai.site'
const BOT_URL = 'https://t.me/plus_ai_robot'

const fixedManualNavigation = [
  ['start', 'Перед началом'],
  ['terms', 'Условия работы'],
  ['workflow', 'Как проходит работа'],
  ['content', 'Какой контент подходит'],
  ['integration', 'Интеграция Plus AI'],
  ['banners', 'Баннеры'],
  ['voice', 'Озвучка'],
  ['placement', 'Размещение баннера'],
  ['chroma', 'Как убрать хромакей'],
  ['publishing', 'Публикация и отчет'],
  ['rules', 'Что запрещено'],
  ['checklist', 'Чек-лист'],
] as const

const partnerManualNavigation = [
  ['start', 'Перед началом'],
  ['terms', 'Условия партнерства'],
  ['attribution', 'Персональная ссылка'],
  ['content', 'Форматы продвижения'],
  ['materials', 'Материалы по желанию'],
  ['publishing', 'Передача результата'],
  ['rules', 'Минимальные правила'],
  ['checklist', 'Чек-лист'],
] as const

const banners = [
  { id: '01', file: '/creator-assets/banners/banner-01.mp4', drive: 'https://drive.google.com/file/d/1QGiGe2BlCtD41ZqFDGQCxmolKx7Fs-zk/view?usp=sharing', voice: 'Озвучка необязательна', tone: 'optional', format: 'wide' },
  { id: '02', file: '/creator-assets/banners/banner-02.mp4', drive: 'https://drive.google.com/file/d/1qM6kdWV5Qy_hXdp3qRH7_Nete1Fvrd3Q/view?usp=sharing', voice: 'Озвучка обязательна', tone: 'required', format: 'wide' },
  { id: '03', file: '/creator-assets/banners/banner-03.mp4', drive: 'https://drive.google.com/file/d/1Fl69uQE6yNybF2R8IkO73uGHDcaLIa9F/view?usp=sharing', voice: 'Озвучка обязательна', tone: 'required', format: 'wide' },
  { id: '04', file: '/creator-assets/banners/banner-04.mp4', drive: 'https://drive.google.com/file/d/1WnOhx4xcr47of-et-xK6a4V7cNaeHEWa/view?usp=sharing', voice: 'Озвучка обязательна', tone: 'required', format: 'wide' },
  { id: '05', file: '/creator-assets/banners/banner-05.mp4', drive: 'https://drive.google.com/file/d/1e_rrb6XzyIudlCSmeBVqfdQ3P-bmnliF/view?usp=sharing', voice: 'Можно использовать без озвучки', tone: 'optional', format: 'vertical' },
  { id: '06', file: '/creator-assets/banners/banner-06.mp4', drive: 'https://drive.google.com/file/d/1NHfNFnQBxGftzKEi7SC_gXcbKMMhJhjb/view?usp=sharing', voice: 'Можно использовать без озвучки', tone: 'optional', format: 'vertical' },
] as const

const voiceovers = [
  {
    id: '01',
    file: '/creator-assets/audio/voice-01.mp3',
    drive: 'https://drive.google.com/file/d/1VRMDxWuppFZhr-9JlhzHhEpQOz2dcXdf/view?usp=sharing',
    text: 'PLUS AI - Разбери матч и заметь крупную ставку. ссылка в профиле',
  },
  {
    id: '02',
    file: '/creator-assets/audio/voice-02.mp3',
    drive: 'https://drive.google.com/file/d/1jIQZPYwM3FKWYtCagvquUjdS5jMleSJ3/view?usp=sharing',
    text: 'PLUS AI - ссылки на экране и в профиле',
  },
] as const

const contentFormats = [
  'Нарезки футбольных матчей, CS2, Dota 2 и других дисциплин',
  'Реакции стримеров на выигранные или проигранные события',
  'Яркие моменты матчей, турниров и трансляций',
  'Объясняющие ролики об аналитике матчей и движении линии',
  'Динамичные ролики на темы спорта, киберспорта и гемблинга',
]

const prohibitedRules = [
  ['Накрутка', 'Запрещены боты, покупные просмотры, биржи заданий, клик-фермы, мотивированный и любой другой искусственный трафик.'],
  ['Подмена статистики', 'Запрещено редактировать скриншоты, скрывать источники трафика, подменять ссылки, аккаунты, показатели или предоставлять неполные сведения при дополнительной проверке.'],
  ['Ложные обещания', 'Нельзя обещать гарантированный результат, доход, точный исход события или выдавать Plus AI за букмекерскую контору.'],
  ['Скрытая интеграция', 'Нельзя уменьшать баннер до нечитаемого размера, обрезать ссылку или прятать интеграцию за интерфейсом приложения.'],
  ['Один шаблон на всю ленту', 'Не используйте один и тот же фрагмент во всех роликах. Чередуйте записи, игры, реакции, подачу и монтаж.'],
  ['Чужой контент без права использования', 'Креатор самостоятельно проверяет, что может публиковать выбранные фрагменты и не нарушает правила площадки и права третьих лиц.'],
  ['Самовольное изменение бренда', 'Не перекрашивайте логотип, не растягивайте баннер и не меняйте ссылку внутри готового материала.'],
  ['Несогласованное продвижение', 'Платное продвижение, закупку трафика и нестандартные источники просмотров сначала согласуйте с менеджером.'],
  ['Закрытие или удаление', 'Нельзя закрывать профиль, удалять или скрывать принятый к расчету ролик в течение 30 календарных дней после фиксации просмотров.'],
]

const partnerRules = [
  ['Манипуляции с целевыми действиями', 'Запрещены фейковые регистрации, самостоятельные оплаты по своей ссылке, мотивированный трафик и любые способы искусственно создать результат.'],
  ['Чужая персональная ссылка', 'Используйте только индивидуальную ссылку, которую вам выдал личный менеджер Plus AI.'],
  ['Ложные обещания', 'Не обещайте гарантированный результат, доход или точный исход события от имени Plus AI.'],
  ['Нарушение правил площадки', 'Формат продвижения выбираете вы, но он должен соответствовать правилам площадки и не нарушать права третьих лиц.'],
]

function ManualLogo() {
  return <div className="manual-logo"><img src="/logo-plus-ai.png" alt="Plus AI" /><span>CREATOR DOCS</span></div>
}

function ManagerLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return <a className={className ?? 'manual-manager-link'} href={MANAGER_URL} target="_blank" rel="noreferrer">{children}</a>
}

function managerLinkedText(text: string) {
  return text.split(/(менеджер(?:ом|у|а)?)/gi).map((part, index) =>
    /^менеджер/i.test(part) ? <ManagerLink key={`${part}-${index}`}>{part}</ManagerLink> : part,
  )
}

function ManualNavigation({ kind }: { kind: CreatorManualKind }) {
  const navigation = kind === 'fixed' ? fixedManualNavigation : partnerManualNavigation
  return (
    <>
      <aside className="manual-sidebar" aria-label="Навигация по мануалу">
        <div className="manual-sidebar__label">Содержание</div>
        <nav>{navigation.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
        <div className="manual-sidebar__support"><span>Нужна помощь?</span><a href={MANAGER_URL} target="_blank" rel="noreferrer">Написать менеджеру ↗</a></div>
      </aside>
      <details className="manual-mobile-nav">
        <summary>Содержание мануала <span>↓</span></summary>
        <nav>{navigation.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
        <small>{kind === 'fixed' ? 'Фиксированная оплата за просмотры' : 'Индивидуальное партнерство'}</small>
      </details>
    </>
  )
}

function ManualSection({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="manual-section" id={id}><span className="manual-eyebrow">{eyebrow}</span><h2>{title}</h2>{children}</section>
}

type FullscreenVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void
  webkitRequestFullscreen?: () => Promise<void> | void
}

function openVideoFullscreen(event: React.MouseEvent<HTMLButtonElement>) {
  const video = event.currentTarget.closest('.manual-video-disclosure')?.querySelector<FullscreenVideo>('video')
  if (!video) return

  if (video.requestFullscreen) void video.requestFullscreen()
  else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen()
  else if (video.webkitRequestFullscreen) void video.webkitRequestFullscreen()
}

function BannerLibrary({ strict }: { strict: boolean }) {
  return (
    <div className="manual-banner-grid">
      {banners.map((banner) => (
        <article className={`manual-banner-card manual-banner-card--${banner.format}`} key={banner.id}>
          {banner.format === 'vertical' ? (
            <details
              className="manual-video-disclosure"
              onToggle={(event) => {
                if (!event.currentTarget.open) event.currentTarget.querySelector<HTMLVideoElement>('video')?.pause()
              }}
            >
              <summary>
                <span className="manual-video-disclosure__copy">
                  <small>Вариант {banner.id} · видео</small>
                  <strong><i>Посмотреть баннер в движении</i><em>Видео открыто</em></strong>
                </span>
                <b className="manual-video-disclosure__cta"><span aria-hidden="true">▶</span><i>Смотреть видео</i><em>Свернуть</em><span className="manual-video-disclosure__arrow" aria-hidden="true">↓</span></b>
              </summary>
              <div className="manual-banner-card__preview">
                <video
                  controls
                  playsInline
                  preload="none"
                  onPlay={(event) => {
                    document.querySelectorAll<HTMLVideoElement>('.manual-banner-card video').forEach((video) => {
                      if (video !== event.currentTarget) video.pause()
                    })
                  }}
                  aria-label={`Предпросмотр баннера ${banner.id}`}
                >
                  <source src={banner.file} type="video/mp4" />
                </video>
                <button className="manual-video-fullscreen" type="button" onClick={openVideoFullscreen} aria-label={`Открыть баннер ${banner.id} на весь экран`}>
                  <span aria-hidden="true">⛶</span> На весь экран
                </button>
              </div>
            </details>
          ) : (
            <div className="manual-banner-card__preview">
              <video
                controls
                playsInline
                preload="metadata"
                onPlay={(event) => {
                  document.querySelectorAll<HTMLVideoElement>('.manual-banner-card video').forEach((video) => {
                    if (video !== event.currentTarget) video.pause()
                  })
                }}
                aria-label={`Предпросмотр баннера ${banner.id}`}
              >
                <source src={banner.file} type="video/mp4" />
              </video>
              <span>Нажмите Play для предпросмотра</span>
            </div>
          )}
          <div className="manual-banner-card__body">
            <div><span>Вариант {banner.id}</span><strong className={`manual-voice-tag manual-voice-tag--${strict ? banner.tone : 'optional'}`}>{strict ? banner.voice : 'Можно адаптировать под свой формат'}</strong></div>
            <a href={banner.drive} target="_blank" rel="noreferrer">Скачать с Google Drive <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
    </div>
  )
}

function VoiceoverLibrary() {
  return (
    <div className="manual-audio-grid">
      {voiceovers.map((voiceover) => (
        <article className="manual-audio-card" key={voiceover.id}>
          <div className="manual-audio-card__head"><span>Вариант озвучки {voiceover.id}</span><b>MP3</b></div>
          <audio controls preload="metadata" aria-label={`Прослушать вариант озвучки ${voiceover.id}`}>
            <source src={voiceover.file} type="audio/mpeg" />
          </audio>
          <div className="manual-audio-card__script"><small>Текст озвучки</small><p>{voiceover.text}</p></div>
          <a href={voiceover.drive} target="_blank" rel="noreferrer">Скачать с Google Drive <span aria-hidden="true">↗</span></a>
        </article>
      ))}
    </div>
  )
}

function FixedTerms() {
  return (
    <>
      <div className="manual-rate-tiers" aria-label="Ставки за подтверждённые просмотры">
        <article className="manual-rate-tier">
          <div className="manual-rate-tier__head"><span>СТАВКА 01</span><b>БЕЗ ПРЯМОЙ БЕТТИНГ-ИНТЕГРАЦИИ</b></div>
          <div className="manual-rate-tier__value"><strong>$0.10</strong><span>за 1 000<br />просмотров</span></div>
          <p>Для роликов о футболе, CS2 или Dota 2 без прямой рекламы гемблинга: матчи, игровые моменты, реакции и тематические нарезки.</p>
          <small>Примеры контента за $0.10 будут добавлены позже.</small>
        </article>
        <article className="manual-rate-tier manual-rate-tier--accent">
          <div className="manual-rate-tier__head"><span>СТАВКА 02</span><b>С БЕТТИНГ-ИНТЕГРАЦИЕЙ</b></div>
          <div className="manual-rate-tier__value"><strong>$0.20</strong><span>за 1 000<br />просмотров</span></div>
          <p>Для роликов, где беттинг заметно встроен в сюжет: стример поставил деньги на матч и следит за исходом, показан бот или сайт Plus AI либо используется другой согласованный беттинг-формат.</p>
          <small>Примеры контента за $0.20 будут добавлены позже.</small>
        </article>
      </div>
      <p className="manual-note">Расчёт выполняется пропорционально количеству подтверждённых просмотров. Например: 1 500 просмотров = $0.15 по ставке $0.10 или $0.30 по ставке $0.20. Категорию ролика лучше подтвердить с менеджером до публикации.</p>
      <div className="manual-metric-grid">
        <article><span>Минимум</span><strong>1 000</strong><p>просмотров для отправки ролика на расчёт</p></article>
        <article><span>Лимит</span><strong>1 000 000</strong><p>просмотров на один ролик, максимальная выплата — $100 или $200 в зависимости от категории</p></article>
        <article><span>Фиксация</span><strong>1 раз</strong><p>в момент, когда креатор отправил ролик менеджеру</p></article>
        <article><span>Проверка</span><strong>до 48 ч</strong><p>обычно быстрее; дополнительная проверка может потребовать больше времени</p></article>
      </div>
      <div className="manual-callout manual-callout--important"><strong>До первой публикации</strong><p>Согласуйте с <ManagerLink>менеджером</ManagerLink> аккаунт, площадку, отчетный период, момент фиксации просмотров и порядок выплаты. Не начинайте публикации, пока условия не подтверждены.</p></div>
      <ul className="manual-list">
        <li>На данный момент принимаются ролики только из Instagram. TikTok и YouTube Shorts могут быть добавлены позже.</li>
        <li>Профиль должен быть открытым. Новые аккаунты допускаются.</li>
        <li>В описании аккаунта должна постоянно находиться кликабельная ссылка на <a href={SITE_URL} target="_blank" rel="noreferrer">plus-ai.site</a> или на <a href={BOT_URL} target="_blank" rel="noreferrer">Telegram-бот Plus AI</a>.</li>
        <li>Каждый ролик публикуется с заметной нативной интеграцией Plus AI.</li>
        <li>В зачет принимаются только органические просмотры без накрутки и платного трафика, если иное заранее не согласовано.</li>
        <li>Целевой считается аудитория, которой потенциально интересен Telegram-бот Plus AI и аналитика спортивных или киберспортивных событий.</li>
        <li>Платное продвижение допустимо только после предварительного согласования с <ManagerLink>менеджером</ManagerLink>.</li>
      </ul>
    </>
  )
}

function FixedWorkflow() {
  return (
    <>
      <ol className="manual-steps manual-steps--cards">
        <li><span>01</span><div><strong>Согласуйте первые 2–3 ролика</strong><p>Это нужно, чтобы подтвердить тему, баннер, размещение и подачу. Не публикуйте первые материалы до одобрения менеджера.</p></div></li>
        <li><span>02</span><div><strong>Продолжайте по одобренной механике</strong><p>После стартовой проверки не нужно согласовывать каждый похожий ролик. Новую идею или заметно изменённый формат сначала покажите менеджеру.</p></div></li>
        <li><span>03</span><div><strong>Отправьте опубликованный ролик</strong><p>Менеджер фиксирует количество просмотров в момент получения ссылки. Последующий рост этого ролика отдельно не оплачивается.</p></div></li>
        <li><span>04</span><div><strong>Дождитесь проверки</strong><p>Стандартная проверка занимает не более 48 часов и обычно проходит быстрее. Ссылка и скриншоты должны быть читаемыми и актуальными.</p></div></li>
      </ol>
      <div className="manual-callout manual-callout--important"><strong>Дополнительная проверка</strong><p>Если статистика выглядит аномально или есть признаки накрутки, подмены данных либо другой недобросовестной схемы, Plus AI вправе приостановить расчёт и запросить запись экрана, расширенную аналитику аккаунта или другие подтверждения. Срок стандартной проверки в таком случае возобновляется после получения всех материалов.</p></div>
      <div className="manual-payout-card">
        <div><span>График</span><strong>2 раза в месяц</strong><p>Для VIP-креаторов можно согласовать индивидуальный график.</p></div>
        <div><span>Способы</span><strong>Криптовалюта или рубли</strong><p>Криптовалюта — согласованный актив и сеть. Рубли — карта, СБП или другой согласованный способ.</p></div>
        <div><span>Комиссия</span><strong>2–4% для рублей</strong><p>Точный размер комиссии и рублёвый эквивалент менеджер сообщает при расчёте выплаты.</p></div>
      </div>
      <p className="manual-note">Ролик можно отправить на расчёт в любое время после достижения 1 000 просмотров. После принятия к расчёту публикация и профиль должны оставаться открытыми не менее 30 календарных дней.</p>
    </>
  )
}

function PartnerTerms() {
  return (
    <>
      <div className="manual-rate-card manual-rate-card--partner"><span>Модель</span><strong>Индивидуально</strong><p>условия, процент или оплата за результат фиксируются с <ManagerLink>менеджером</ManagerLink> до старта</p></div>
      <div className="manual-callout manual-callout--important"><strong>Главное правило ссылки</strong><p>Используйте только свою персональную ссылку. Ее выдает <ManagerLink>личный менеджер Plus AI</ManagerLink> после согласования условий.</p></div>
      <ol className="manual-steps">
        <li><span>01</span><div><strong>Свяжитесь с личным менеджером</strong><p>Обсудите площадку, формат продвижения и индивидуальные условия с <ManagerLink>@plus_maks</ManagerLink>.</p></div></li>
        <li><span>02</span><div><strong>Получите персональную ссылку</strong><p>Менеджер подготовит и отправит ссылку, закрепленную за вашим партнерством.</p></div></li>
        <li><span>03</span><div><strong>Используйте ее во всех размещениях</strong><p>Добавляйте одну и ту же персональную ссылку в профиль, описание и согласованные интеграции.</p></div></li>
      </ol>
      <p className="manual-note">Не заменяйте выданную менеджером персональную ссылку общей ссылкой на сайт или бота: иначе переход и результат могут не привязаться к вашему партнерству.</p>
    </>
  )
}

function PartnerAttribution() {
  return (
    <>
      <p className="manual-lead">Оплачиваемое целевое действие, ставка или процент, способ учёта, график и метод выплаты фиксируются в переписке с личным менеджером до начала размещений.</p>
      <div className="manual-requirements">
        <article><span>01</span><h3>Одна персональная ссылка</h3><p>Используйте только адрес, который выдал менеджер. Общая ссылка на сайт или бот не заменяет персональную.</p></article>
        <article><span>02</span><h3>Проверка перед запуском</h3><p>Откройте ссылку сами и убедитесь, что она ведёт в Plus AI. При ошибке сразу напишите менеджеру.</p></article>
        <article><span>03</span><h3>Согласованный результат</h3><p>Учитывается только действие, определённое в ваших индивидуальных условиях и корректно привязанное к персональной ссылке.</p></article>
      </div>
      <div className="manual-callout"><strong>До старта зафиксируйте письменно</strong><p>Целевое действие, размер вознаграждения, допустимые источники трафика, порядок проверки, период отчётности, график и способ выплаты. Если условий нет в переписке с менеджером, не начинайте продвижение.</p></div>
    </>
  )
}

function PartnerMaterials() {
  return (
    <>
      <p className="manual-lead">В партнёрской модели готовые материалы не являются обязательным шаблоном. Их можно запросить, чтобы быстрее собрать интеграцию, или сделать собственный креатив.</p>
      <div className="manual-content-grid">
        <div><span>01</span><p>Готовые баннеры Plus AI для вертикальных роликов</p></div>
        <div><span>02</span><p>Озвучки и варианты короткого CTA</p></div>
        <div><span>03</span><p>Safe-zone схема для Reels и подсказки по монтажу</p></div>
        <div><span>04</span><p>Идеи, фактура и сценарные заходы под вашу площадку</p></div>
      </div>
      <div className="manual-support-card"><div><span>Нужны исходники?</span><h3>Запросите подходящий пакет материалов</h3><p>Менеджер подберёт баннеры, озвучку и идеи под ваш формат. Использовать весь набор необязательно.</p></div><ManagerLink className="manual-support-card__button">Получить материалы ↗</ManagerLink></div>
    </>
  )
}

function ChromaGuide() {
  return (
    <div className="manual-details-stack">
      <div className="manual-callout"><strong>Главный принцип</strong><p>Основное видео размещается на нижней дорожке, баннер Plus AI — на дорожке выше. Пипеткой выбирайте фон конкретного баннера: зеленый <code>#00FF00</code> или красный <code>#FF0000</code>. Удаляется только однотонный фон баннера. Не повышайте интенсивность хромакея сразу до максимума — можно повредить детали логотипа и графики.</p></div>
      <details open><summary>CapCut Desktop <span>+</span></summary><ol><li>Создайте проект 1080×1920 в формате 9:16.</li><li>Основной ролик положите на нижнюю дорожку, MP4-баннер — на дорожку выше.</li><li>Выберите баннер и откройте <code>Video → Remove BG → Chroma Key</code>.</li><li>Пипеткой выберите чистый цвет фона: зеленый или красный — в зависимости от баннера.</li><li>Плавно увеличивайте Strength/Intensity, пока фон не исчезнет.</li><li>Проверьте начало, середину и конец: логотип, ссылка и цветные линии должны остаться четкими.</li></ol></details>
      <details><summary>Adobe Premiere Pro <span>+</span></summary><ol><li>Создайте вертикальную sequence 1080×1920.</li><li>Поместите основной ролик на V1, баннер — на V2.</li><li>Примените <code>Video Effects → Keying → Ultra Key</code>.</li><li>В Effect Controls выберите пипетку Key Color и укажите зеленый или красный фон выбранного баннера.</li><li>При необходимости аккуратно настройте Matte Cleanup и Spill Suppression.</li><li>Разместите баннер через Motion → Position/Scale, не меняя пропорции.</li></ol></details>
      <details><summary>DaVinci Resolve <span>+</span></summary><ol><li>Основной ролик разместите на Video 1, баннер — на Video 2.</li><li>На странице Color выберите баннер и пипеткой укажите его зеленый или красный фон в Qualifier.</li><li>Инвертируйте выделение и добавьте Alpha Output.</li><li>Matte Finesse используйте только для очистки края и цветного ореола.</li><li>Для точной настройки в Fusion используйте Delta Keyer между MediaIn и MediaOut.</li></ol></details>
      <details><summary>Если результат выглядит плохо <span>+</span></summary><ul><li>Зеленая или красная кайма: слегка увеличьте Spill Suppression и проверьте темные и светлые кадры.</li><li>Исчезают детали баннера: уменьшите Strength и снова выберите чистый участок фона пипеткой.</li><li>Мерцают края: смягчите matte/edge и смотрите результат в движении.</li><li>Баннер размыт: используйте исходный MP4 и не растягивайте его выше исходного размера.</li></ul></details>
    </div>
  )
}

export function CreatorManualPage({ kind }: { kind: CreatorManualKind }) {
  const fixed = kind === 'fixed'
  return (
    <div className="manual-page">
      <header className="manual-header"><ManualLogo /><div><span>Внутренний мануал</span><b>{fixed ? 'Фикс · $0.10–0.20 / 1000' : 'Партнерство'}</b></div></header>
      <div className="manual-layout">
        <ManualNavigation kind={kind} />
        <main className="manual-content">
          <section className="manual-hero" id="start">
            <span className="manual-eyebrow">PLUS AI · CREATOR GUIDE</span>
            <h1>{fixed ? 'Мануал для работы по фиксированной оплате' : 'Мануал для партнерской работы'}</h1>
            <p>{fixed ? 'Как создавать и публиковать Reels с интеграцией Plus AI, чтобы контент соответствовал требованиям и просмотры могли быть приняты к расчету.' : 'Как работать с персональной ссылкой от менеджера, использовать материалы Plus AI и вести трафик по индивидуальным условиям.'}</p>
            <div className="manual-hero__status"><span>Версия 2.0</span><span>Обновлено 01.08.2026</span><ManagerLink>Контакт: @plus_maks ↗</ManagerLink></div>
          </section>

          <ManualSection id="terms" eyebrow="01 / УСЛОВИЯ" title={fixed ? 'Как считается работа' : 'Как устроено партнерство'}>{fixed ? <FixedTerms /> : <PartnerTerms />}</ManualSection>

          {fixed ? (
            <ManualSection id="workflow" eyebrow="02 / ПРОЦЕСС" title="От первого ролика до выплаты"><FixedWorkflow /></ManualSection>
          ) : (
            <ManualSection id="attribution" eyebrow="02 / АТРИБУЦИЯ" title="Как учитывается результат"><PartnerAttribution /></ManualSection>
          )}

          <ManualSection id="content" eyebrow="03 / КОНТЕНТ" title={fixed ? 'Что можно публиковать' : 'Какие форматы можно использовать'}>
            <p className="manual-lead">{fixed ? 'Задача — создавать вирусные вертикальные видео для Instagram Reels, добавляя заметную нативную интеграцию Plus AI.' : 'Формат продвижения выбираете вы: короткие ролики, объясняющий контент, тематические публикации или другая согласованная интеграция.'}</p>
            <div className="manual-content-grid">{contentFormats.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div>
            <div className="manual-callout"><strong>Не уверены в теме?</strong><p>Не публикуйте ролик наугад. Отправьте идею или черновик <ManagerLink>менеджеру</ManagerLink> и дождитесь подтверждения.</p></div>
          </ManualSection>

          {fixed ? <>
            <ManualSection id="integration" eyebrow="04 / ИНТЕГРАЦИЯ" title="Что обязательно должно быть в ролике">
              <div className="manual-requirements">
                <article><span>01</span><h3>Заметный баннер</h3><p>Баннер Plus AI должен быть достаточно крупным и читаемым на телефоне. Маленькая формальная плашка не подходит.</p></article>
                <article><span>02</span><h3>Без перекрытий</h3><p>Размещайте баннер сверху или снизу, но не под кнопками, описанием и интерфейсом Reels.</p></article>
                <article><span>03</span><h3>Ссылка в профиле</h3><p>В описании аккаунта должна быть кликабельная ссылка на сайт Plus AI или официальный бот.</p></article>
              </div>
            </ManualSection>

            <ManualSection id="banners" eyebrow="05 / МАТЕРИАЛЫ" title="Баннеры Plus AI">
              <p className="manual-lead">Выберите вариант, запустите предпросмотр и скачайте исходный MP4 с Google Drive. Не пересылайте файл через мессенджер перед монтажом, чтобы не потерять качество.</p>
              <BannerLibrary strict />
            </ManualSection>

            <ManualSection id="voice" eyebrow="06 / АУДИО" title="Готовые варианты озвучки">
              <p className="manual-lead">Для баннеров 02, 03 и 04 озвучка обязательна. Для остальных вариантов её можно не использовать.</p>
              <div className="manual-callout manual-callout--important"><strong>Ограничение по скорости</strong><p>Озвучку разрешено ускорять не более чем на 50%. Максимальная допустимая скорость — <code>1.5×</code> от исходной.</p></div>
              <VoiceoverLibrary />
            </ManualSection>

            <ManualSection id="placement" eyebrow="07 / SAFE ZONE" title="Куда ставить баннер">
              <p className="manual-lead">Основная позиция — нижняя треть, но выше описания ролика. Верхнюю позицию используйте только когда она не закрывает лицо или главный объект.</p>
              <figure className="manual-safe-zone"><img src="/creator-assets/guides/reels-safe-zones.png" alt="Схема безопасных зон для размещения баннера в Instagram Reels" /><figcaption>Схема safe zones: не размещайте важный текст в правой колонке и в самом низу экрана.</figcaption></figure>
            </ManualSection>

            <ManualSection id="chroma" eyebrow="08 / МОНТАЖ" title="Как убрать зеленый или красный фон"><ChromaGuide /></ManualSection>
          </> : (
            <ManualSection id="materials" eyebrow="04 / ПО ЖЕЛАНИЮ" title="Материалы для быстрого старта"><PartnerMaterials /></ManualSection>
          )}

          <ManualSection id="publishing" eyebrow={fixed ? '09 / ПУБЛИКАЦИЯ' : '05 / РЕЗУЛЬТАТ'} title="Как передать результат">
            <ol className="manual-steps">
              <li><span>01</span><div><strong>Проверьте материал перед публикацией</strong><p>{fixed ? 'Формат 1080×1920, соотношение 9:16, MP4 H.264/H.265. Проверьте звук, читаемость баннера и безопасные зоны.' : 'Убедитесь, что материал соответствует согласованной площадке, корректно представляет Plus AI и содержит понятный переход по персональной ссылке.'}</p></div></li>
              <li><span>02</span><div><strong>Проверьте ссылку</strong><p>{fixed ? 'Откройте профиль и убедитесь, что ссылка plus-ai.site или t.me/plus_ai_robot кликабельна.' : 'Откройте ссылку из профиля и убедитесь, что используется именно персональный адрес, полученный у менеджера.'}</p></div></li>
              <li><span>03</span><div><strong>Опубликуйте ролик</strong><p>После публикации откройте его как обычный пользователь и убедитесь, что элементы интерфейса ничего не перекрывают.</p></div></li>
              <li><span>04</span><div><strong>Отправьте ссылку <ManagerLink>менеджеру</ManagerLink></strong><p>{fixed ? 'Передайте URL публикации и читаемые скриншоты статистики. Количество просмотров фиксируется в момент получения сообщения менеджером.' : 'Передайте URL публикации и отчёт, если это предусмотрено вашими индивидуальными условиями.'}</p></div></li>
            </ol>
            {fixed && <div className="manual-callout"><strong>Что может потребоваться дополнительно</strong><p>При аномальной динамике, несоответствии охвата и вовлечённости, подозрительных источниках трафика или иных признаках злоупотребления менеджер может запросить непрерывную запись экрана и расширенную статистику Instagram. До получения подтверждений ролик не принимается к выплате.</p></div>}
          </ManualSection>

          <ManualSection id="rules" eyebrow={fixed ? '10 / ОГРАНИЧЕНИЯ' : '06 / ОГРАНИЧЕНИЯ'} title={fixed ? 'Что запрещено' : 'Минимальные правила'}>
            {!fixed && <p className="manual-lead">Мы не оцениваем ролики по шаблону и не платим за просмотры. Ограничения нужны только для честной атрибуции результата и корректного представления продукта.</p>}
            <div className="manual-rules">{(fixed ? prohibitedRules : partnerRules).map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{managerLinkedText(text)}</p></div></article>)}</div>
            <div className="manual-terms-accept">
              <strong>Основания для приостановки или отказа</strong>
              <p>Plus AI вправе приостановить проверку, запросить дополнительные подтверждения или отказать в выплате при признаках накрутки, подмены статистики, повторной подачи одного результата, использования несогласованного трафика, нарушения правил интеграции, недоступности публикации либо другой недобросовестной схемы. Отказ предоставить запрошенные подтверждения считается достаточным основанием не принимать результат к расчёту.</p>
              <p>Креатор самостоятельно отвечает за законность контента, права на материалы и соблюдение правил Instagram. Ограничение или удаление публикации площадкой само по себе не создаёт обязательства Plus AI по выплате.</p>
            </div>
          </ManualSection>

          <ManualSection id="checklist" eyebrow={fixed ? '11 / ПЕРЕД ПУБЛИКАЦИЕЙ' : '07 / ПЕРЕД ЗАПУСКОМ'} title="Финальный чек-лист">
            <div className="manual-checklist">
              {[
                'Тема ролика подходит под согласованный формат',
                fixed ? 'Баннер Plus AI крупный и читаемый' : 'Формат интеграции соответствует вашим договоренностям',
                fixed ? 'Баннер не закрыт интерфейсом Reels' : 'Персональная ссылка открывается и ведет в Plus AI',
                fixed ? 'Озвучка добавлена, если она обязательна для выбранного баннера' : 'В интеграции нет общей или чужой партнерской ссылки',
                fixed ? 'В профиле стоит кликабельная ссылка на сайт или бот Plus AI' : 'В профиле и интеграции стоит персональная ссылка от менеджера',
                'Нет обещаний гарантированного результата или дохода',
                'Ролик проверен на телефоне со звуком',
                fixed ? 'Для просмотров не используется накрутка или несогласованный трафик' : 'Целевые действия не создаются искусственно',
                fixed ? 'Профиль открыт, публикация доступна и останется доступной минимум 30 дней' : 'Условия оплаты и целевое действие подтверждены менеджером в переписке',
              ].map((item) => <label key={item}><input type="checkbox" /> <span>{item}</span></label>)}
            </div>
            <p className="manual-version-note">Версия 2.0 от 01.08.2026. Отправляя материал на согласование, проверку или выплату, креатор подтверждает, что ознакомился с этой редакцией правил и принимает её. Новые редакции применяются к будущим публикациям после уведомления менеджером или в закрытом канале креаторов.</p>
            <div className="manual-support-card"><div><span>Остался вопрос?</span><h3>Сначала уточните — потом публикуйте</h3><p>Отправьте <ManagerLink>менеджеру</ManagerLink> идею, черновик или скрин спорного момента.</p></div><ManagerLink className="manual-support-card__button">Написать @plus_maks ↗</ManagerLink></div>
          </ManualSection>
        </main>
      </div>
      <footer className="manual-footer"><ManualLogo /><span>{fixed ? 'Мануал: фикс за просмотры' : 'Мануал: партнерство'} · Plus AI</span></footer>
    </div>
  )
}

export type { CreatorManualKind }

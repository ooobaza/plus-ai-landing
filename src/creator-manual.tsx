type CreatorManualKind = 'fixed' | 'partner'

const MANAGER_URL = 'https://t.me/plus_maks'
const SITE_URL = 'https://plus-ai.site'
const BOT_URL = 'https://t.me/plus_ai_robot'

const baseManualNavigation = [
  ['start', 'Перед началом'],
  ['terms', 'Условия работы'],
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
  ['Ложные обещания', 'Нельзя обещать гарантированный результат, доход, точный исход события или выдавать Plus AI за букмекерскую контору.'],
  ['Скрытая интеграция', 'Нельзя уменьшать баннер до нечитаемого размера, обрезать ссылку или прятать интеграцию за интерфейсом приложения.'],
  ['Один шаблон на всю ленту', 'Не используйте один и тот же фрагмент во всех роликах. Чередуйте записи, игры, реакции, подачу и монтаж.'],
  ['Чужой контент без права использования', 'Креатор самостоятельно проверяет, что может публиковать выбранные фрагменты и не нарушает правила площадки и права третьих лиц.'],
  ['Самовольное изменение бренда', 'Не перекрашивайте логотип, не растягивайте баннер и не меняйте ссылку внутри готового материала.'],
  ['Несогласованное продвижение', 'Платное продвижение, закупку трафика и нестандартные источники просмотров сначала согласуйте с менеджером.'],
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
  const navigation = baseManualNavigation.map(([id, label]) => [id, kind === 'partner' && ['banners', 'placement', 'chroma', 'voice'].includes(id) ? `${label} · по желанию` : label] as const)
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
              <summary><span>Предпросмотр варианта {banner.id}</span><b><i>Открыть видео</i><em>Закрыть видео</em> <span aria-hidden="true">↓</span></b></summary>
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
      <div className="manual-rate-card"><span>Ставка</span><strong>$0.10</strong><p>за каждые 1000 подтвержденных органических просмотров</p></div>
      <div className="manual-callout manual-callout--important"><strong>До первой публикации</strong><p>Согласуйте с <ManagerLink>менеджером</ManagerLink> аккаунт, площадку, отчетный период, момент фиксации просмотров и порядок выплаты. Не начинайте публикации, пока условия не подтверждены.</p></div>
      <ul className="manual-list">
        <li>В описании аккаунта должна постоянно находиться кликабельная ссылка на <a href={SITE_URL} target="_blank" rel="noreferrer">plus-ai.site</a> или на <a href={BOT_URL} target="_blank" rel="noreferrer">Telegram-бот Plus AI</a>.</li>
        <li>Каждый ролик публикуется с заметной нативной интеграцией Plus AI.</li>
        <li>В зачет принимаются только органические просмотры без накрутки и платного трафика, если иное заранее не согласовано.</li>
        <li>Оплата рассчитывается по статистике площадки на согласованную с <ManagerLink>менеджером</ManagerLink> дату.</li>
      </ul>
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
      <header className="manual-header"><ManualLogo /><div><span>Внутренний мануал</span><b>{fixed ? 'Фикс · $0.10 / 1000' : 'Партнерство'}</b></div></header>
      <div className="manual-layout">
        <ManualNavigation kind={kind} />
        <main className="manual-content">
          <section className="manual-hero" id="start">
            <span className="manual-eyebrow">PLUS AI · CREATOR GUIDE</span>
            <h1>{fixed ? 'Мануал для работы по фиксированной оплате' : 'Мануал для партнерской работы'}</h1>
            <p>{fixed ? 'Как создавать и публиковать Reels с интеграцией Plus AI, чтобы контент соответствовал требованиям и просмотры могли быть приняты к расчету.' : 'Как работать с персональной ссылкой от менеджера, использовать материалы Plus AI и вести трафик по индивидуальным условиям.'}</p>
            <div className="manual-hero__status"><span>Версия 1.0</span><span>Черновик для согласования</span><ManagerLink>Контакт: @plus_maks ↗</ManagerLink></div>
          </section>

          <ManualSection id="terms" eyebrow="01 / УСЛОВИЯ" title={fixed ? 'Как считается работа' : 'Как устроено партнерство'}>{fixed ? <FixedTerms /> : <PartnerTerms />}</ManualSection>

          <ManualSection id="content" eyebrow="02 / КОНТЕНТ" title="Что можно публиковать">
            <p className="manual-lead">Задача — создавать вирусные вертикальные видео для Instagram Reels и других коротких форматов, добавляя нативную интеграцию Plus AI.</p>
            <div className="manual-content-grid">{contentFormats.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div>
            <div className="manual-callout"><strong>Не уверены в теме?</strong><p>Не публикуйте ролик наугад. Отправьте идею или черновик <ManagerLink>менеджеру</ManagerLink> и дождитесь подтверждения.</p></div>
          </ManualSection>

          <ManualSection id="integration" eyebrow="03 / ИНТЕГРАЦИЯ" title={fixed ? 'Что обязательно должно быть в ролике' : 'Как можно встроить Plus AI'}>
            <div className="manual-requirements">
              <article><span>01</span><h3>{fixed ? 'Заметный баннер' : 'Ваш формат'}</h3><p>{fixed ? 'Баннер Plus AI должен быть достаточно крупным и читаемым на телефоне. Маленькая формальная плашка не подходит.' : 'Вы сами выбираете подачу, монтаж, площадку и способ интеграции. Баннер Plus AI использовать необязательно.'}</p></article>
              <article><span>02</span><h3>{fixed ? 'Без перекрытий' : 'Готовые материалы'}</h3><p>{fixed ? 'Размещайте баннер сверху или снизу, но не под кнопками, описанием и интерфейсом Reels.' : 'Если не хочется собирать интеграцию с нуля, ниже есть баннеры, safe-zone схема и подсказки по монтажу.'}</p></article>
              <article><span>03</span><h3>{fixed ? 'Ссылка в профиле' : 'Единственное обязательное'}</h3><p>{fixed ? 'В описании аккаунта должна быть кликабельная ссылка на сайт Plus AI или официальный бот.' : 'В каждом источнике трафика должна использоваться персональная ссылка, полученная у личного менеджера.'}</p></article>
            </div>
          </ManualSection>

          <ManualSection id="banners" eyebrow={fixed ? '04 / МАТЕРИАЛЫ' : '04 / ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ'} title={fixed ? 'Баннеры Plus AI' : 'Готовые баннеры — если пригодятся'}>
            <p className="manual-lead">{fixed ? 'Выберите вариант, запустите предпросмотр и скачайте исходный MP4 с Google Drive. Не пересылайте файл через мессенджер перед монтажом, чтобы не потерять качество.' : 'Это не обязательный шаблон и не ограничение для вашего контента. Можно посмотреть готовый баннер, скачать его с Google Drive, изменить подачу или собрать собственную интеграцию.'}</p>
            <BannerLibrary strict={fixed} />
          </ManualSection>

          <ManualSection id="voice" eyebrow={fixed ? '05 / АУДИО' : '05 / ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ'} title="Готовые варианты озвучки">
            <p className="manual-lead">{fixed ? 'Для баннеров 02, 03 и 04 озвучка обязательна. Для остальных вариантов ее можно не использовать.' : 'Озвучки можно использовать как заготовки. В партнерской модели они необязательны.'}</p>
            <div className="manual-callout manual-callout--important"><strong>Ограничение по скорости</strong><p>Озвучку разрешено ускорять не более чем на 50%. Максимальная допустимая скорость — <code>1.5×</code> от исходной.</p></div>
            <VoiceoverLibrary />
          </ManualSection>

          <ManualSection id="placement" eyebrow={fixed ? '06 / SAFE ZONE' : '06 / ПОДСКАЗКА'} title={fixed ? 'Куда ставить баннер' : 'Если используете готовый баннер'}>
            <p className="manual-lead">{fixed ? 'Основная позиция — нижняя треть, но выше описания ролика. Верхнюю позицию используйте только когда она не закрывает лицо или главный объект.' : 'Схема помогает быстро разместить баннер так, чтобы его не перекрыл интерфейс Reels. Для партнерской модели следовать ей необязательно.'}</p>
            <figure className="manual-safe-zone"><img src="/creator-assets/guides/reels-safe-zones.png" alt="Схема безопасных зон для размещения баннера в Instagram Reels" /><figcaption>Схема safe zones: не размещайте важный текст в правой колонке и в самом низу экрана.</figcaption></figure>
          </ManualSection>

          <ManualSection id="chroma" eyebrow={fixed ? '07 / МОНТАЖ' : '07 / ПО ЖЕЛАНИЮ'} title="Как убрать зеленый или красный фон"><ChromaGuide /></ManualSection>

          <ManualSection id="publishing" eyebrow="08 / ПУБЛИКАЦИЯ" title="Как передать результат">
            <ol className="manual-steps">
              <li><span>01</span><div><strong>Проверьте ролик на телефоне</strong><p>Формат 1080×1920, соотношение 9:16, MP4 H.264/H.265. Проверьте звук, читаемость баннера и безопасные зоны.</p></div></li>
              <li><span>02</span><div><strong>Проверьте ссылку</strong><p>{fixed ? 'Откройте профиль и убедитесь, что ссылка plus-ai.site или t.me/plus_ai_robot кликабельна.' : 'Откройте ссылку из профиля и убедитесь, что используется именно персональный адрес, полученный у менеджера.'}</p></div></li>
              <li><span>03</span><div><strong>Опубликуйте ролик</strong><p>После публикации откройте его как обычный пользователь и убедитесь, что элементы интерфейса ничего не перекрывают.</p></div></li>
              <li><span>04</span><div><strong>Отправьте ссылку <ManagerLink>менеджеру</ManagerLink></strong><p>{fixed ? 'Передайте URL публикации. Статистику просмотров фиксируем в согласованный момент.' : 'Передайте URL публикации, если это предусмотрено вашими индивидуальными условиями.'}</p></div></li>
            </ol>
          </ManualSection>

          <ManualSection id="rules" eyebrow="09 / ОГРАНИЧЕНИЯ" title={fixed ? 'Что запрещено' : 'Минимальные правила'}>
            {!fixed && <p className="manual-lead">Мы не оцениваем ролики по шаблону и не платим за просмотры. Ограничения нужны только для честной атрибуции результата и корректного представления продукта.</p>}
            <div className="manual-rules">{(fixed ? prohibitedRules : partnerRules).map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{managerLinkedText(text)}</p></div></article>)}</div>
          </ManualSection>

          <ManualSection id="checklist" eyebrow="10 / ПЕРЕД ПУБЛИКАЦИЕЙ" title="Финальный чек-лист">
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
              ].map((item) => <label key={item}><input type="checkbox" /> <span>{item}</span></label>)}
            </div>
            <div className="manual-support-card"><div><span>Остался вопрос?</span><h3>Сначала уточните — потом публикуйте</h3><p>Отправьте <ManagerLink>менеджеру</ManagerLink> идею, черновик или скрин спорного момента.</p></div><ManagerLink className="manual-support-card__button">Написать @plus_maks ↗</ManagerLink></div>
          </ManualSection>
        </main>
      </div>
      <footer className="manual-footer"><ManualLogo /><span>{fixed ? 'Мануал: фикс за просмотры' : 'Мануал: партнерство'} · Plus AI</span></footer>
    </div>
  )
}

export type { CreatorManualKind }

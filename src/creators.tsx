const CREATOR_CONTACT_URL = 'https://t.me/plus_maks'

const creatorFormats = [
  ['01', 'Нарезки и реакции', 'Динамичная подача события, момента или инфоповода без перегруженного монтажа.'],
  ['02', 'Объясняющие ролики', 'Коротко показать, как работает AI-анализ матча или «Пульс рынка».'],
  ['03', 'Матч-аналитика', 'Контекст события, ключевой фактор, движение линии и понятный вывод.'],
  ['04', 'Промо-контент', 'Вертикальные видео под Reels, Shorts, TikTok и другие короткие форматы.'],
]

const creatorSupport = [
  'Индивидуальная реферальная ссылка',
  'Материалы и фактура для контента',
  'Баннеры и готовые визуалы',
  'Идеи и сценарные заходы',
  'Обсуждение интеграций с менеджером',
  'Понятные условия и логика выплат',
]

const creatorFit = [
  ['Уже снимаешь короткие видео', 'Есть опыт с Reels, Shorts, TikTok или похожими форматами.'],
  ['Есть своя аудитория', 'Ведёшь Instagram, TikTok, YouTube Shorts или тематические площадки.'],
  ['Тестируешь новые офферы', 'Ищешь понятный продукт и готов проверять разные креативные заходы.'],
  ['Умеешь удерживать внимание', 'Чувствуешь темп, хук и умеешь объяснять сложное коротко.'],
]

function CreatorLogo() {
  return <a className="creator-logo" href="/" aria-label="Plus AI — на главную"><img src="/logo-plus-ai.png" alt="Plus AI" /></a>
}

function ContactLink({ className, children }: { className: string; children: React.ReactNode }) {
  return <a className={className} href={CREATOR_CONTACT_URL} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>
}

export function CreatorsPage() {
  return (
    <div className="creator-page">
      <header className="creator-header">
        <div className="container creator-header__inner">
          <div className="creator-header__brand"><CreatorLogo /><span>CREATORS</span></div>
          <ContactLink className="creator-header__contact">Написать менеджеру</ContactLink>
        </div>
      </header>

      <main>
        <section className="creator-hero">
          <div className="creator-hero__glow" aria-hidden="true" />
          <div className="container creator-hero__grid">
            <div className="creator-hero__copy">
              <span className="creator-kicker"><i /> PLUS AI · CREATOR PROGRAM</span>
              <h1>Зарабатывай на<br /><em>коротких роликах</em><br />с Plus AI</h1>
              <p>Ищем креаторов, которые умеют делать вертикальные видео и хотят монетизировать трафик через проект в нише AI-аналитики спорта и киберспорта.</p>
              <div className="creator-hero__actions">
                <ContactLink className="creator-primary">Хочу сотрудничать</ContactLink>
                <a className="creator-secondary" href="#models">Посмотреть условия <span aria-hidden="true">↓</span></a>
              </div>
              <div className="creator-hero__meta"><span>REELS</span><span>SHORTS</span><span>TIKTOK</span><span>9:16</span></div>
            </div>

            <div className="creator-preview" aria-label="Пример структуры вертикального ролика">
              <div className="creator-preview__bar"><span><i /> CONTENT BRIEF</span><b>9:16</b></div>
              <div className="creator-reel">
                <div className="creator-reel__scan" aria-hidden="true" />
                <div className="creator-reel__top"><span>PLUS AI</span><span>00:24</span></div>
                <div className="creator-reel__message">
                  <small>ХУК · ПЕРВЫЕ 3 СЕКУНДЫ</small>
                  <strong>Событие замечено.<br />Что изменилось?</strong>
                </div>
                <div className="creator-reel__line"><span /><span /><span /><span /></div>
                <div className="creator-reel__steps">
                  <div><b>01</b><span>Контекст</span></div>
                  <div><b>02</b><span>Динамика</span></div>
                  <div><b>03</b><span>Вывод</span></div>
                </div>
                <div className="creator-reel__cta">PLUS AI · ССЫЛКА В ПРОФИЛЕ</div>
              </div>
              <div className="creator-preview__specs"><div><span>ФОРМАТ</span><strong>Vertical</strong></div><div><span>ДЛИТЕЛЬНОСТЬ</span><strong>15–60 сек</strong></div><div><span>ЗАДАЧА</span><strong>Внимание → переход</strong></div></div>
            </div>
          </div>
        </section>

        <section className="creator-section creator-formats">
          <div className="container">
            <header className="creator-section__head"><span>01 / КОГО ИЩЕМ</span><div><h2>Креаторов с чувством темпа<br />и подачи</h2><p>Не нужен сложный продакшен. Важнее понятный хук, аккуратный визуал и умение удержать внимание в коротком формате.</p></div></header>
            <div className="creator-format-grid">{creatorFormats.map(([index, title, text]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="creator-section creator-models" id="models">
          <div className="container">
            <header className="creator-section__head"><span>02 / ВАРИАНТЫ СОТРУДНИЧЕСТВА</span><div><h2>Выбери модель, которая<br />подходит тебе</h2><p>Можно получать фиксированную оплату за просмотры или работать по результату через персональную ссылку.</p></div></header>
            <div className="creator-model-grid">
              <article className="creator-model creator-model--fixed">
                <div className="creator-model__top"><span>ВАРИАНТ 01</span><b>ФИКС ЗА ПРОСМОТРЫ</b></div>
                <h3>Понятная оплата<br />за охват</h3>
                <div className="creator-rate"><strong>$0.10</strong><span>за 1000<br />просмотров</span></div>
                <ul><li>Ссылка на Plus AI размещается в описании профиля</li><li>В ролике или баннере присутствует упоминание или ссылка Plus AI</li><li>Без партнёрской механики: ролик → просмотры → оплата</li></ul>
                <p className="creator-model__note">Способ подтверждения просмотров и порядок выплат согласуем до запуска.</p>
              </article>

              <article className="creator-model creator-model--partner">
                <div className="creator-model__top"><span>ВАРИАНТ 02</span><b>ПАРТНЁРСКАЯ МОДЕЛЬ</b></div>
                <h3>Свободный формат.<br />Оплата за результат.</h3>
                <div className="creator-rate"><strong>$5</strong><span>пример выплаты<br />за оплату пользователя</span></div>
                <ul><li>Индивидуальная реферальная ссылка</li><li>Ты сам выбираешь формат и площадку продвижения</li><li>Мы даём материалы, баннеры, идеи и варианты интеграций</li><li>Можно отдельно обсудить постоянную процентную модель</li></ul>
                <p className="creator-model__note">Фиксированной оплаты за просмотры нет. Конкретную схему фиксируем с менеджером до старта.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="creator-section creator-support">
          <div className="container">
            <header className="creator-section__head"><span>03 / ЧТО ДАЁМ</span><div><h2>Не оставляем тебя<br />с пустым экраном</h2><p>Поможем быстрее перейти от идеи к ролику и подобрать механику под твою площадку.</p></div></header>
            <div className="creator-support__grid">{creatorSupport.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div>
          </div>
        </section>

        <section className="creator-section creator-fit">
          <div className="container">
            <header className="creator-section__head"><span>04 / КОМУ ПОДОЙДЁТ</span><div><h2>Тем, кто умеет привлекать<br />внимание</h2><p>Размер площадки не единственный критерий. Нам важнее качество контента, регулярность и готовность тестировать.</p></div></header>
            <div className="creator-fit__grid">{creatorFit.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="creator-final" id="contact">
          <div className="container creator-final__card">
            <div className="creator-final__signal" aria-hidden="true"><i /><i /><i /></div>
            <span>PLUS AI · CREATOR PROGRAM</span>
            <h2>Если тебе интересно —<br /><em>давай обсудим формат</em></h2>
            <p>Напиши нам, расскажи про свою площадку и какой вариант сотрудничества тебе ближе: фикс за просмотры или партнёрская модель.</p>
            <ContactLink className="creator-primary">Связаться с нами</ContactLink>
            <small>Менеджер: @plus_maks</small>
          </div>
        </section>
      </main>

      <footer className="creator-footer"><div className="container"><CreatorLogo /><span>Creator Program · Plus AI</span><a href="/">На основной сайт</a></div></footer>
    </div>
  )
}

export { CREATOR_CONTACT_URL }

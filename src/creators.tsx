const CREATOR_CONTACT_URL = 'https://t.me/plus_maks'

const creatorFormats = [
  ['01', 'Нарезки и реакции', 'Динамичная подача события, момента или инфоповода без перегруженного монтажа.'],
  ['02', 'Объясняющие ролики', 'Коротко показать, как работает AI-анализ матча или «Пульс рынка».'],
  ['03', 'Матч-аналитика', 'Контекст события, ключевой фактор, движение линии и понятный вывод.'],
  ['04', 'Промо-контент', 'Вертикальные видео под Reels, Shorts, TikTok и другие короткие форматы.'],
]

const creatorSupport = [
  'Персональная ссылка от менеджера',
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

function ManagerInline({ children }: { children: React.ReactNode }) {
  return <a className="creator-manager-link" href={CREATOR_CONTACT_URL} target="_blank" rel="noreferrer">{children}</a>
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

            <div className="creator-phone-stage" aria-label="Пример короткого вертикального ролика на телефоне">
              <div className="creator-phone-glow" aria-hidden="true" />
              <div className="creator-phone">
                <div className="creator-phone__side creator-phone__side--top" aria-hidden="true" />
                <div className="creator-phone__side creator-phone__side--bottom" aria-hidden="true" />
                <div className="creator-phone__screen">
                  <div className="creator-phone__status"><b>9:41</b><span className="creator-phone__island" aria-hidden="true" /><span>5G&nbsp;&nbsp;▰</span></div>
                  <div className="creator-phone__appbar"><span><i /> PLUS AI · REEL PREVIEW</span><b>9:16</b></div>
                  <div className="creator-phone__video">
                    <div className="creator-phone__scan" aria-hidden="true" />
                    <span className="creator-phone__tag">ХУК · 0:00–0:03</span>
                    <h3>Коэффициент изменился.<br />Что заметил Plus AI?</h3>
                    <div className="creator-phone__movement">
                      <div><span>ДВИЖЕНИЕ ЛИНИИ</span><strong>1.91 <i>→</i> 1.78</strong></div>
                      <div className="creator-phone__spark" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                    </div>
                    <div className="creator-phone__script">
                      <div><b>01</b><span>Показать изменение</span></div>
                      <div><b>02</b><span>Коротко объяснить</span></div>
                      <div><b>03</b><span>Дать ссылку Plus AI</span></div>
                    </div>
                    <p><b>Подпись:</b> полный разбор матча — в Telegram-боте Plus AI</p>
                  </div>
                  <div className="creator-phone__timeline"><span /><i /></div>
                  <div className="creator-phone__footer"><span>00:18</span><b>ПРИМЕР РОЛИКА</b><span>00:24</span></div>
                </div>
              </div>
              <div className="creator-phone-flow"><span>Хук</span><i>→</i><span>Объяснение</span><i>→</i><span>Переход</span></div>
            </div>
          </div>
        </section>

        <section className="creator-section creator-formats">
          <div className="container">
            <header className="creator-section__head"><span>01 / КОГО ИЩЕМ</span><div><h2>Креаторов, которые умеют удерживать внимание</h2><p>Сложный продакшен не обязателен. Нам важнее понятный хук, аккуратный визуал и уверенная подача в коротком формате.</p></div></header>
            <div className="creator-format-grid">{creatorFormats.map(([index, title, text]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="creator-section creator-models" id="models">
          <div className="container">
            <header className="creator-section__head"><span>02 / ВАРИАНТЫ СОТРУДНИЧЕСТВА</span><div><h2>Выбери подходящую модель сотрудничества</h2><p>Можно получать фиксированную оплату за просмотры или работать по результату через персональную ссылку.</p></div></header>
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
                <ul><li>Персональная ссылка от менеджера</li><li>Ты сам выбираешь формат и площадку продвижения</li><li>Мы даём материалы, баннеры, идеи и варианты интеграций</li><li>Можно отдельно обсудить постоянную процентную модель</li></ul>
                <p className="creator-model__note">Фиксированной оплаты за просмотры нет. Конкретную схему фиксируем с <ManagerInline>менеджером</ManagerInline> до старта.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="creator-section creator-support">
          <div className="container">
            <header className="creator-section__head"><span>03 / ЧТО ДАЁМ</span><div><h2>Всё необходимое для быстрого старта</h2><p>Поможем перейти от идеи к ролику и подобрать механику под твою площадку.</p></div></header>
            <div className="creator-support__grid">{creatorSupport.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item === 'Обсуждение интеграций с менеджером' ? <>Обсуждение интеграций с <ManagerInline>менеджером</ManagerInline></> : item}</strong></div>)}</div>
          </div>
        </section>

        <section className="creator-section creator-fit">
          <div className="container">
            <header className="creator-section__head"><span>04 / КОМУ ПОДОЙДЁТ</span><div><h2>Тем, кто умеет привлекать внимание</h2><p>Размер площадки — не единственный критерий. Нам важнее качество контента, регулярность и готовность тестировать.</p></div></header>
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
            <small><ManagerInline>Менеджер: @plus_maks ↗</ManagerInline></small>
          </div>
        </section>
      </main>

      <footer className="creator-footer"><div className="container"><CreatorLogo /><span>Creator Program · Plus AI</span><a href="/">На основной сайт</a></div></footer>
    </div>
  )
}

export { CREATOR_CONTACT_URL }

import React, { useEffect, useState } from 'react'
import Title from '@components/Title/Title'
import AboutSlider from '@components/AboutSlider/AboutSlider'
import Services from '@components/Services/Services'
import NewsSlider from '@components/NewsSlider/NewsSlider'
import Feedback from '@components/Feedback/Feedback'
import Modal from '@components/Modal/Modal'
import ModalFeedback from '@components/Modal/ModalFeedback'
import logo from '@assets/img/logo.svg'
import parallax from '@assets/img/1.jpg'
import icon1 from '@assets/img/icons/1.svg'
import icon2 from '@assets/img/icons/2.svg'
import icon3 from '@assets/img/icons/3.svg'
import partnerLogo1 from '@assets/img/2.png'
import partnerLogo2 from '@assets/img/3.png'
import footerLogo from '@assets/img/footer-logo.svg'
import vk from '@assets/img/icons/vk.svg'
import inst from '@assets/img/icons/inst.svg'
import youtube from '@assets/img/icons/youtube.svg'
import whatsapp from '@assets/img/icons/whatsapp.svg'

function App() {
  const [phone, setPhone] = useState(null)
  const [clientMail, setClientMail] = useState(null)
  const [careerMail, setCareerMail] = useState(null)

  useEffect(async () => {
    const contacts = await fetch('/api/contacts').then(data => data.json())
    setPhone(contacts[0].phone)
    setClientMail(contacts[0].clientMail)
    setCareerMail(contacts[0].careerMail)
  }, [])

  return (
    <div className="App">
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="Логотип IT-парк" />
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#1">О нас</a>
            </li>
            <li>
              <a href="#2">Услуги</a>
            </li>
            <li>
              <a href="#3">Партнеры</a>
            </li>
          </ul>
        </nav>
        <div>
          <Modal btnText="Обратный звонок" btnOutlined>
            <ModalFeedback
              title="IT-парк на связи"
              text="Оставьте свои контактные данные
              и мы обязательно свяжемся с вами"
            />
          </Modal>
        </div>
      </header>
      <main>
        <h1 className="visually-hidden">IT-парк</h1>
        <section className="promo">
          <div className="promo__container">
            <div className="wrapper">
              <Title>
                <span>
                  <b>ИТ-парк Сахалин</b> - место,
                </span>
                <span>где цифровые технологии</span>
                <span>делают жизнь лучше</span>
              </Title>
              <div className="promo__bottom">
                <Modal btnText="Стать участником">
                  <ModalFeedback
                    title="IT-парк на связи"
                    text="Оставьте свои контактные данные
                    и мы обязательно свяжемся с вами"
                  />
                </Modal>
                <p>
                  Это первое на острове пространство
                  <br />
                  в&nbsp;сфере высоких технологий
                </p>
              </div>
            </div>
            <div className="promo__bg" />
          </div>
        </section>
        <section className="parallax">
          <img src={parallax} alt="Make IT great again" />
        </section>
        <section className="about" id="1">
          <div className="wrapper">
            <Title aura>
              <span>Всё, что вам нужно </span>
              <span>
                знать об <b>ИТ-парке</b>
              </span>
              <span>в одном месте</span>
            </Title>
            <AboutSlider />
          </div>
        </section>
        <section className="services" id="2">
          <div className="wrapper">
            <Title aura>
              <span>Услуги, которые </span>
              <span>
                предоставляет <b>ИТ-парк</b>
              </span>
              <span>всем желающим</span>
            </Title>
            <Services />
            <div className="how-to">
              <div className="how-to__container">
                <h3 className="subtitle">Как забронировать рабочее место</h3>
                <ul className="how-to__steps">
                  <li>
                    <img src={icon1} alt="Иконка ярлыка с надписью free" />
                    <p>
                      узнать о наличии свободных мест (по телефону, почте,
                      лично, Instagram)
                    </p>
                  </li>
                  <li>
                    <img
                      src={icon2}
                      alt="Иконка с человеком, отвечающим на вопросы"
                    />
                    <p>заполнить анкету, ответив на все необходимые вопросы</p>
                  </li>
                  <li>
                    <img src={icon3} alt="Иконка кошелька" />
                    <p>заключить договор аренды и оплатить первый месяц</p>
                  </li>
                </ul>
                <Modal btnText="Узнать о наличии мест">
                  <ModalFeedback
                    title="IT-парк на связи"
                    text="Оставьте свои контактные данные
                    и мы обязательно свяжемся с вами"
                  />
                </Modal>
              </div>
            </div>
          </div>
        </section>
        <section className="partners" id="3">
          <div className="wrapper">
            <Title aura>
              <span>
                Партнеры <b>ИТ-парка</b>,
              </span>
              <span>которые способствуют</span>
              <span>нашему развитию</span>
            </Title>
            <ul className="partners__list">
              <li>
                <a
                  href="https://sakhalin.gov.ru/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src={partnerLogo1}
                    alt="Правительство Сахалинской области"
                  />
                </a>
              </li>
              <li>
                <a href="https://korpso.ru/" target="_blank" rel="noreferrer">
                  <img
                    src={partnerLogo2}
                    alt="Корпорация развития Сахалинской области"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="news">
          <div className="wrapper">
            <Title aura>
              <span>
                Новости <b>ИТ-парка</b>
              </span>
            </Title>
            <NewsSlider />
          </div>
        </section>
        <Feedback />
      </main>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__container">
            <div>
              <nav className="footer__nav">
                <ul>
                  <li>
                    <a href="#1">Об ИТ-парке</a>
                  </li>
                  <li>
                    <a href="#2">Наши услуги</a>
                  </li>
                  <li>
                    <a href="#3">Партнеры</a>
                  </li>
                </ul>
              </nav>
              <img
                className="footer__logo"
                src={footerLogo}
                alt="Логотип IT-парк"
              />
            </div>
            <div>
              <span className="footer__address">
                г. Южно-Сахалинск
                <br />
                ул. Алексея Горького 25
                {phone && (
                  <>
                    <br />
                    <a href={`tel:${phone}`}>тел: {phone}</a>
                  </>
                )}
                пн-пт с 9:00 до 19:00
                <br />
              </span>
              <p className="footer__policy">
                <span>Все права защищены.</span>
                <a
                  // eslint-disable-next-line max-len
                  href="/Politika_v_otnoshenii_obrabotki_personalnykh_dannykh_IT-park.pdf"
                  target="_blank">
                  Политика конфиденциальности
                </a>
              </p>
            </div>
            <div>
              {clientMail && (
                <p className="footer__client">
                  <span>Клиентский отдел</span>
                  <a href={`mailto:${clientMail}`}>{clientMail}</a>
                </p>
              )}
              {careerMail && (
                <p className="footer__career">
                  <span>Карьера в компании</span>
                  <a href={`mailto:${careerMail}`}>{careerMail}</a>
                </p>
              )}
              <ul className="footer__socials">
                <li>
                  <a href="/" target="_blank">
                    <img src={vk} alt="ВКонтакте" />
                  </a>
                </li>
                <li>
                  <a
                    // eslint-disable-next-line max-len
                    href="https://www.instagram.com/it_park_sakhalin/"
                    target="_blank"
                    rel="noreferrer">
                    <img src={inst} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img src={youtube} alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img src={whatsapp} alt="WhatsApp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

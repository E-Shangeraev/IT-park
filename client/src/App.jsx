import React from 'react'
import Button from '@components/Button/Button'
import Title from '@components/Title/Title'
import AboutSlider from '@components/AboutSlider/AboutSlider'
import Services from '@components/Services/Services'
import NewsSlider from '@components/NewsSlider/NewsSlider'
import Feedback from '@components/Feedback/Feedback'
import Modal from '@components/Modal/Modal'
import ModalFeedback from '@components/ModalFeedback'
import logo from '@assets/img/logo.svg'
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
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип IT-парк" />
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

        <Modal btnText="Обратный звонок">
          <ModalFeedback
            title="Это модальное окно"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sint eius minima consequuntur suscipit quaerat incidunt."
          />
        </Modal>
      </header>
      <main>
        <h1 className="visually-hidden">IT-парк</h1>
        <section className="promo">
          <div className="wrapper">
            <div className="promo__container">
              <Title>
                <span>
                  <b>ИТ-парк Сахалин</b> - место,
                </span>
                <span>где цифровые технологии</span>
                <span>делают Вашу жизнь лучше</span>
              </Title>
            </div>
          </div>
        </section>
        <section className="parallax" />
        <section className="about" id="1">
          <div className="wrapper">
            <Title>
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
            <Title>
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
                <Button>Узнать о наличии мест</Button>
              </div>
              <ul className="how-to__steps">
                <li>
                  <img src={icon1} alt="Иконка ярлыка с надписью free" />
                  <p>
                    узнать о наличии свободных мест (по телефону, почте, лично,
                    Instagram)
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
            </div>
          </div>
        </section>
        <section className="partners" id="3">
          <div className="wrapper">
            <Title>
              <span>
                Партнеры <b>ИТ-парка</b>,
              </span>
              <span>которые способствуют</span>
              <span>нашему развитию</span>
            </Title>
            <ul className="partners__list">
              <li>
                <a href="/">
                  <img
                    src={partnerLogo1}
                    alt="Правительство Сахалинской области"
                  />
                  <p>
                    Небольшой текст о партнере небольшой текст о партнере
                    небольшой текст о партнере небольшой текст о партнере{' '}
                  </p>
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src={partnerLogo2}
                    alt="Корпорация развития Сахалинской области"
                  />
                  <p>
                    Небольшой текст о партнере небольшой текст о партнере
                    небольшой текст о партнере небольшой текст о партнере{' '}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="news">
          <div className="wrapper">
            <Title>
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
              <span className="footer__inn">
                ООО “ИТ-парк” ИНН 000000000000
              </span>
              <span className="footer__address">
                Офис в г. Сахалин ул. Пушкина 31а, оф. 501 тел: +7 (391)
                000-00-00 пн-пт с 9:00 до 18:00
              </span>
              <p className="footer__policy">
                <span>Все права защищены.</span>
                <a href="/" target="_blank">
                  Политика конфиденциальности
                </a>
              </p>
            </div>
            <div>
              <p className="footer__client">
                <span>Клиентский отдел</span>
                <a href="/" target="_blank">
                  info@it-park.com
                </a>
              </p>
              <p className="footer__career">
                <span>Карьера в компании</span>
                <a href="/" target="_blank">
                  hr@it-park.com
                </a>
              </p>
              <ul className="footer__socials">
                <li>
                  <a href="/" target="_blank">
                    <img src={vk} alt="ВКонтакте" />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
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
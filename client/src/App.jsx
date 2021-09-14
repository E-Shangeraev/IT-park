import React from 'react'
import Header from '@components/Header/Header'
import Title from '@components/Title/Title'
import AboutSlider from '@components/AboutSlider/AboutSlider'
import Services from '@components/Services/Services'
import NewsSlider from '@components/NewsSlider/NewsSlider'
import Feedback from '@components/Feedback/Feedback'
import Modal from '@components/Modal/Modal'
import ModalFeedback from '@components/Modal/ModalFeedback'
import PartnersList from '@components/PartnersList'
import Footer from '@components/Footer/Footer'
import parallax from '@assets/img/1.jpg'
import icon1 from '@assets/img/icons/1.svg'
import icon2 from '@assets/img/icons/2.svg'
import icon3 from '@assets/img/icons/3.svg'

function App() {
  return (
    <div className="App">
      <Header />
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
            <PartnersList />
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
      <Footer />
    </div>
  )
}

export default App

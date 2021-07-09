import React from 'react'
import Button from '@components/Button/Button'
import Title from '@components/Title/Title'
import Slider from '@components/Slider/Slider'
import logo from '@assets/img/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Логотип IT-парк" />
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
        <Button>Обратный звонок</Button>
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
        <section className="about">
          <div className="wrapper">
            <Title>
              <span>Всё, что вам нужно </span>
              <span>
                знать об <b>ИТ-парке</b>
              </span>
              <span>в одном месте</span>
            </Title>
            <Slider />
          </div>
        </section>
      </main>
      <footer />
    </div>
  )
}

export default App

import React from 'react'
import Button from '@components/Button/Button'
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
        <Button outlined>Обратный звонок</Button>
      </header>
      <main>
        <div className="wrapper">
          <h1 className="visually-hidden">IT-парк</h1>
          <section className="promo">
            <h2>Промо-блок</h2>
          </section>
        </div>
      </main>
      <footer />
    </div>
  )
}

export default App

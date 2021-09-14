import React from 'react'
import Modal from '@components/Modal/Modal'
import ModalFeedback from '@components/Modal/ModalFeedback'
import logo from '@assets/img/logo.svg'

import './Header.scss'

const Header = () => (
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
)

export default Header

import React, { useEffect, useState } from 'react'
import footerLogo from '@assets/img/footer-logo.svg'
import vk from '@assets/img/icons/vk.svg'
import inst from '@assets/img/icons/inst.svg'
import youtube from '@assets/img/icons/youtube.svg'
import whatsapp from '@assets/img/icons/whatsapp.svg'

import './Footer.scss'

const Footer = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    fetch('/api/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  return (
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
          {contacts && (
            <>
              <div>
                <p className="footer__address">
                  {contacts.address && <span>{contacts.address}</span>}
                  {contacts.phone && (
                    <>
                      <br />
                      <a href={`tel:${contacts.phone}`}>
                        тел: {contacts.phone}
                      </a>
                    </>
                  )}
                  пн-пт с 9:00 до 19:00
                  <br />
                </p>
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
                {contacts.clientMail && (
                  <p className="footer__client">
                    <span>Клиентский отдел</span>
                    <a href={`mailto:${contacts.clientMail}`}>
                      {contacts.clientMail}
                    </a>
                  </p>
                )}
                {contacts.careerMail ? (
                  <p className="footer__career">
                    <span>Карьера в компании</span>
                    <a href={`mailto:${contacts.careerMail}`}>
                      {contacts.careerMail}
                    </a>
                  </p>
                ) : (
                  <p className="footer__career">
                    <span>Карьера в компании</span>
                    <br />
                    <span>—</span>
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
            </>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer

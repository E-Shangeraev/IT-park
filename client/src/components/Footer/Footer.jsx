import React, { useContext } from 'react'
import footerLogo from '@assets/img/footer-logo.svg'
import vk from '@assets/img/icons/vk.svg'
import inst from '@assets/img/icons/inst.svg'
import youtube from '@assets/img/icons/youtube.svg'
import whatsapp from '@assets/img/icons/whatsapp.svg'
import telegram from '@assets/img/icons/telegram.svg'
import { ContactsContext } from '../../App'

import './Footer.scss'

const Footer = () => {
  const contacts = useContext(ContactsContext)

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
                    <span>По вопросам сотрудничества:</span>
                    <a href={`mailto:${contacts.clientMail}`}>
                      {contacts.clientMail}
                    </a>
                  </p>
                )}
                <ul className="footer__socials">
                  {contacts.socials.vk && (
                    <li>
                      <a
                        href={contacts.socials.vk}
                        target="_blank"
                        rel="noreferrer">
                        <img src={vk} alt="ВКонтакте" />
                      </a>
                    </li>
                  )}
                  {contacts.socials.instagram && (
                    <li>
                      <a
                        href={contacts.socials.instagram}
                        target="_blank"
                        rel="noreferrer">
                        <img src={inst} alt="Instagram" />
                      </a>
                    </li>
                  )}
                  {contacts.socials.youTube && (
                    <li>
                      <a
                        href={contacts.socials.youTube}
                        target="_blank"
                        rel="noreferrer">
                        <img src={youtube} alt="YouTube" />
                      </a>
                    </li>
                  )}
                  {contacts.socials.whatsApp && (
                    <li>
                      <a
                        href={contacts.socials.whatsApp}
                        target="_blank"
                        rel="noreferrer">
                        <img src={whatsapp} alt="WhatsApp" />
                      </a>
                    </li>
                  )}
                  {contacts.socials.telegram && (
                    <li>
                      <a
                        href={contacts.socials.telegram}
                        target="_blank"
                        rel="noreferrer">
                        <img src={telegram} alt="Telegram" />
                      </a>
                    </li>
                  )}
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

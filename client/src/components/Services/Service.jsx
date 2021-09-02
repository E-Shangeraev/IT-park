import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Modal from '../Modal/Modal'
import ModalFeedback from '../Modal/ModalFeedback'
import './Service.scss'

const Service = ({ name, description }) => {
  const [toggleService, setToggleService] = useState(false)
  const serviceRef = useRef()

  const onToggleService = () => {
    setToggleService(!toggleService)
  }

  useEffect(() => {
    if (toggleService) {
      serviceRef.current.style.maxHeight = `
      ${serviceRef.current.scrollHeight}px`
    } else {
      serviceRef.current.style.maxHeight = ''
    }
  }, [toggleService])

  return (
    <li className="service">
      <button type="button" className="service__name" onClick={onToggleService}>
        <span className={classNames({ active: toggleService })}>{name}</span>
        <div
          className={classNames('service__arrow', {
            'service__arrow--rotated': toggleService,
          })}>
          <span>Подробнее</span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M2.49996 0.416664L7.99996 5.91666L13.5 0.416664L15.3333 2.25L7.99996 9.58333L0.666626 2.25L2.49996 0.416664Z"
              fill="#F48120"
            />
          </svg>
        </div>
      </button>
      <div className="service__description" ref={serviceRef}>
        <p>
          <span>{description}</span>
        </p>
        <Modal btnText="Обратный звонок">
          <ModalFeedback
            title="Это модальное окно"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sint eius minima consequuntur suscipit quaerat incidunt."
          />
        </Modal>
      </div>
    </li>
  )
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Service

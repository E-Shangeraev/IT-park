/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react'
import Slick from 'react-slick'
import classNames from 'classnames'
import './Slider.scss'
import image1 from '../../assets/img/Slider/1.jpg'

export const switchers = [
  'Комфортные рабочие места',
  'Зона отдыха',
  'Конференц-зал',
  '2 комнаты для проведения переговоров',
  'Кухня',
]

const Slider = () => {
  const firstSliderRef = useRef()
  const secondSliderRef = useRef()
  const [active, setActive] = useState(0)

  const next = () => {
    firstSliderRef.current.slickNext()
    secondSliderRef.current.slickNext()
  }
  const prev = () => {
    firstSliderRef.current.slickPrev()
    secondSliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    swipe: false,
    beforeChange: (currentSlide, nextSlide) => setActive(nextSlide),
  }

  const handleActive = value => {
    firstSliderRef.current.slickGoTo(value)
    secondSliderRef.current.slickGoTo(value)
  }

  return (
    <div className="slider">
      <Slick className="first" ref={firstSliderRef} {...settings}>
        <img src={image1} alt="Комфортные рабочие места" />
        <img src={image1} alt="Комфортные рабочие места" />
        <img src={image1} alt="Комфортные рабочие места" />
        <img src={image1} alt="Комфортные рабочие места" />
        <img src={image1} alt="Комфортные рабочие места" />
      </Slick>
      <div className="slider__bottom">
        <Slick className="second" ref={secondSliderRef} {...settings} fade>
          <p className="second__slide">
            <b>ИТ-парк Сахалин </b>– это первая на острове деловая
            бизнес-инфраструктура, которая создает все необходимые условия для
            развития и поддержки стартап-проектов и ИТ-компаний на всех этапах
            развития: от идеи до внедрения конечного высокотехнологичного
            продукта на рынок.
          </p>
          <p className="second__slide">
            <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit.
            Tempora accusamus placeat magnam dolores hic? Laborum ad
            exercitationem nemo error voluptates. Totam porro nobis labore illo?
            Facere beatae quam omnis eligendi?
          </p>
          <p className="second__slide">
            <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa! Natus, rerum illo aut eum, eveniet itaque
            autem quos explicabo enim dolore aliquid assumenda error voluptatem
            iste qui sunt?
          </p>
          <p className="second__slide">
            <b>Lorem</b> ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa! Natus, rerum?
          </p>
          <p className="second__slide">
            <b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit.
            Ipsum nihil asperiores cumque, ex optio nisi suscipit illo culpa
            consequatur beatae ipsa!
          </p>
        </Slick>
        <div className="slider__buttons">
          <button type="button" className="slider__prev" onClick={prev}>
            Следующий слайд
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M11.5555 2.33331L4.88888 8.99997L11.5555 15.6666L9.33332 17.8889L0.444431 8.99997L9.33332 0.111084L11.5555 2.33331Z"
                fill="white"
              />
            </svg>
          </button>
          <button type="button" className="slider__next" onClick={next}>
            Предыдущий слайд
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M0.555664 15.6667L7.22233 9.00003L0.555663 2.33336L2.77789 0.111139L11.6668 9.00003L2.77789 17.8889L0.555664 15.6667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className="slider__switchers">
        {switchers.map((name, index) => (
          <li key={name}>
            <button
              className={classNames({ active: active === index })}
              type="button"
              onClick={() => handleActive(index)}>
              {name}
            </button>
          </li>
        ))}
        <li />
      </ul>
    </div>
  )
}

export default Slider

/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react'
import Slick from 'react-slick'
import classNames from 'classnames'
import SliderButton from '@components/SliderButton/SliderButton'
import './AboutSlider.scss'
import image1 from '@assets/img/Slider/1.jpg'
import image2 from '@assets/img/Slider/2.jpg'
import image3 from '@assets/img/Slider/3.jpg'
import image4 from '@assets/img/Slider/4.jpg'
import image5 from '@assets/img/Slider/5.jpg'

export const switchers = [
  'Комфортные рабочие места',
  'Зона отдыха',
  'Конференц-зал',
  '2 комнаты для проведения переговоров',
  'Кухня',
]

const AboutSlider = () => {
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
    <div className="about-slider">
      <Slick className="first" ref={firstSliderRef} {...settings}>
        <img src={image1} alt="Комфортные рабочие места" />
        <img src={image2} alt="Зона отдыха" />
        <img src={image3} alt="Конференц-зал" />
        <img src={image4} alt="2 комнаты для проведения переговоров" />
        <img src={image5} alt="Кухня" />
      </Slick>
      <div className="about-slider__bottom">
        <Slick className="second" ref={secondSliderRef} {...settings} fade>
          <p className="second__slide">
            <b>Комфортные рабочие мета</b> в ИТ-парке — это не просто удобное
            кресло, но и наличие необходимого оборудования, чтобы ничего не
            отвлекало вас от рабочего процесса.
          </p>
          <p className="second__slide">
            Для высокой продуктивности и новых свершений важно не только усердно
            работать, но и правильно отдыхать. В ИТ-парке создана{' '}
            <b>зона отдыха</b>, где вы сможете отвлечься от работы и попить
            кофе.
          </p>
          <p className="second__slide">
            Просторный <b>конференц зал</b> позволяет проводить мероприятия для
            большого количества людей. Подходит для проведения как деловых, так
            и неформальных мероприятий.
          </p>
          <p className="second__slide">
            Если вам нужно пространство, чтобы перевести переговоры со своими
            клиентами, ИТ-парк с радостью предоставит его.{' '}
            <b>Две комнаты разного формата для переговоров</b> к вашим услугам.
          </p>
          <p className="second__slide">
            Чтобы вас ничего не отвлекало от работы, в ИТ-парке есть{' '}
            <b>собственная кухня</b>, где вы можете спокойно пообедать.
          </p>
        </Slick>
        <div className="about-slider__buttons">
          <SliderButton previous onClick={prev} />
          <SliderButton next onClick={next} />
        </div>
      </div>
      <ul className="about-slider__switchers">
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

export default AboutSlider

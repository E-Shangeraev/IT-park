/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react'
import Slick from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import SliderButton from '@components/SliderButton/SliderButton'
import './NewsSlider.scss'
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

const images = [image1, image2, image3, image4]

const NewsSlider = () => {
  const sliderRef = useRef()
  const [items, setItems] = useState([])

  const next = () => sliderRef.current.slickNext()
  const prev = () => sliderRef.current.slickPrev()

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  useEffect(async () => {
    try {
      const data = await fetch('/api/news').then(response => response.json())
      setItems(prevState => [...prevState, ...data])
    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }
  }, [])

  return (
    <div className="news-slider">
      <Slick className="first" ref={sliderRef} {...settings}>
        {items.length &&
          items.map((slide, index) => (
            <div className="news-slider__slide" key={uuidv4()}>
              <img
                className="news-slider__image"
                src={images[index]}
                alt={slide.title}
              />
              <h4 className="news-slider__title">{slide.title}</h4>
              <p className="news-slider__text">{slide.text}</p>
              <time className="news-slider__date" dateTime={slide.date}>
                {new Date(slide.date).toLocaleDateString('ru-RU')}
              </time>
            </div>
          ))}
      </Slick>
      <div className="news-slider__buttons">
        <SliderButton previous onClick={prev} />
        <SliderButton next onClick={next} />
      </div>
    </div>
  )
}

export default NewsSlider

/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Slider, { switchers } from './Slider'

jest.mock('react-slick')

const setUp = () => render(<Slider />)

describe('Slider component', () => {
  let component
  let instance

  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  // it('should render Slider component', () => {
  //   expect(component).toMatchSnapshot()
  // })

  describe('Slider handlers', () => {
    it('should change active slide to next', () => {
      const next = component.find('.slider__next')
      next.simulate('click')
      expect(component.state().active).toBe(1)
    })

    it('should change active slide to previous', () => {
      const prev = component.find('.slider__prev')
      const lastIndex = switchers.length - 1
      prev.simulate('click')
      expect(component.state().active).toBe(lastIndex)
    })
  })
})

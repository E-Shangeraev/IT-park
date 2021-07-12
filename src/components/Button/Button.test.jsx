/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button component', () => {
  it('should render without props', () => {
    const component = shallow(<Button>Button</Button>)
    expect(component).toMatchSnapshot()
  })
  it('should render with props', () => {
    const component = shallow(<Button outlined>Button</Button>)
    expect(component).toMatchSnapshot()
  })
  it('should call onClick method', () => {
    const mockCallback = jest.fn()
    const component = shallow(<Button onClick={mockCallback}>Button</Button>)
    expect(mockCallback.mock.calls.length).toBe(0)
    component.find('.button').simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })
  it('should use default onClick', () => {
    const result = Button.defaultProps.onClick()
    expect(result).toBe(undefined)
  })
})

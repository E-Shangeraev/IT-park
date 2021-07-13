/* eslint-disable no-undef */
import React from 'react'
import Title from './Title'

describe('Title component', () => {
  it('should render Title component with props', () => {
    const component = shallow(<Title>Test</Title>)
    expect(component).toMatchSnapshot()
  })
})

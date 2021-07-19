/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Service from './Service'

describe('Services', () => {
  it('should render component with props', () => {
    const props = {
      name: 'Name',
      subtitle: 'Subtitle',
      description: 'Description',
    }
    render(<Service {...props} />)
    expect(screen.getByText(/Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Description/i)).toBeInTheDocument()
    expect(screen.getByText(/Subtitle:/i)).toBeInTheDocument()
  })

  it('should handle toggle list item', () => {
    const props = {
      name: 'Name',
      subtitle: 'Subtitle',
      description: 'Description',
    }
    const component = shallow(<Service {...props} />)
    const btn = component.find('.service__name')
    expect(component.find('.active')).toHaveLength(0)
    btn.simulate('click')
    expect(component.find('.active')).toHaveLength(1)
  })
})

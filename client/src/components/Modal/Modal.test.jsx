/* eslint-disable no-undef */
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalFeedback from './ModalFeedback'

describe('ModalFeedback', () => {
  it('should render component with props', () => {
    const props = {
      title: 'Title',
      text: 'Text',
    }
    render(<ModalFeedback {...props} />)
    expect(screen.getByText(/Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
  })
  it('should render component without props', () => {
    render(<ModalFeedback title="Title" />)
    expect(screen.queryByText(/Title/i)).toBeInTheDocument()
    expect(screen.queryByText(/Text/i)).toBeNull()
  })
  // it('should render success message after submit', async () => {
  //   const handleSubmit = jest.fn()
  //   render(<ModalFeedback title="Title" />)

  //   userEvent.type(screen.getByLabelText(/Имя/i), 'John')
  //   userEvent.type(screen.getByLabelText(/Телефон/i), '888888888888')
  //   userEvent.type(
  //     screen.getByLabelText(/Ваше e-mail/i),
  //     'john.dee@someemail.com'
  //   )

  //   userEvent.click(screen.getByRole('button'))

  //   await waitFor(() =>
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       name: 'John',
  //       phone: '888888888888',
  //       email: 'john.dee@someemail.com',
  //     })
  //   )
  // })
})

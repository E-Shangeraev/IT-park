/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({ type, outlined, color, children, onClick }) => (
  <button
    type={type}
    className={classNames('button', {
      'button--outlined': outlined,
      'button--secondary': color === 'secondary',
    })}
    onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  color: null,
  outlined: false,
  onClick: () => {},
}

export default Button

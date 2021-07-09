/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({ type, outlined, children }) => (
  <button
    type={type}
    className={classNames('button', { 'button--outlined': outlined })}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  outlined: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  outlined: false,
}

export default Button

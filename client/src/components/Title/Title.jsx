import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Title.scss'

const Title = ({ children, aura }) => (
  <h2 className={classNames('title', { 'title--aura': aura })}>{children}</h2>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  aura: PropTypes.bool,
}

Title.defaultProps = {
  aura: false,
}

export default Title

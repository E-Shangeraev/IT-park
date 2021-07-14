import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal = ({ children, id, el }) => {
  const [container] = useState(document.createElement(el))

  container.id = id

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  el: PropTypes.string,
}

Portal.defaultProps = {
  id: 'portal',
  el: 'div',
}

export default Portal

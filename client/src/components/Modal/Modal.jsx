import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Button from '../Button/Button'
import './Modal.scss'

const Modal = React.memo(
  ({
    btnText,
    btnColor,
    btnOutlined,
    children,
    containerClass,
    withButton,
    active,
    callback,
  }) => {
    const modalRef = useRef()
    const [open, setOpen] = useState(active)

    const handleClose = () => {
      setOpen(false)
      callback()
    }
    const handleOpen = () => setOpen(true)

    const handleOutsideClick = useCallback(
      e => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (path[0] === modalRef.current) {
          handleClose()
        }
      },
      [open]
    )

    useEffect(() => {
      if (open) {
        document.addEventListener('click', handleOutsideClick)
      } else {
        document.removeEventListener('click', handleOutsideClick)
      }
    }, [open])

    useEffect(() => {
      setOpen(active)
    }, [active])

    return (
      <>
        {withButton && (
          <Button color={btnColor} onClick={handleOpen} outlined={btnOutlined}>
            {btnText}
          </Button>
        )}
        <Portal>
          <Transition
            nodeRef={modalRef}
            in={open}
            timeout={500}
            mountOnEnter
            unmountOnExit>
            {state => (
              <div className="modal" ref={modalRef}>
                <div
                  className={`modal__container ${
                    containerClass || 'modal__container--default'
                  } ${state}`}>
                  <button
                    type="button"
                    className="modal__close"
                    onClick={handleClose}>
                    X
                  </button>
                  {children}
                </div>
              </div>
            )}
          </Transition>
        </Portal>
      </>
    )
  }
)

Modal.propTypes = {
  active: PropTypes.bool,
  withButton: PropTypes.bool,
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnOutlined: PropTypes.bool,
  children: PropTypes.node,
  containerClass: PropTypes.string,
  callback: PropTypes.func,
}

Modal.defaultProps = {
  active: false,
  withButton: true,
  btnText: 'Открыть',
  btnColor: null,
  btnOutlined: false,
  children: null,
  containerClass: null,
  callback: () => {},
}

export default Modal

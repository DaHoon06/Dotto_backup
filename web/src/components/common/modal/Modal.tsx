import React, { ComponentProps, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'
import cn from 'classnames'

interface IModal extends ComponentProps<'div'> {
  isOpen: boolean
  onRequestClose?: () => void
  layerStyle?: React.CSSProperties
  cardStyle?: React.CSSProperties
}

export default function Modal(props: IModal) {
  const { isOpen, onRequestClose, layerStyle, cardStyle, className } = props

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) {
      isOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = '')
    }
  }, [isOpen])

  const el = document.getElementById('modal') as HTMLElement

  const ele = useRef<any>(null)

  const onClickOutside = (e: React.MouseEvent) => {
    const { target } = e

    if (ele && !ele.current.contains(target)) {
      if (onRequestClose) onRequestClose()
    }
  }

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className="modal__layer"
          onClick={onClickOutside}
          style={layerStyle}
        >
          <div
            className={cn(className, 'modal__card')}
            ref={ele}
            style={cardStyle}
          >
            {props.children}
          </div>
        </div>,
        el
      )
    : null
}

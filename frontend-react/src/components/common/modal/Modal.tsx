import { ComponentProps } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

interface IModal extends ComponentProps<'div'> {
  isOpen: boolean
  onRequestClose?: () => void
  layerStyle?: React.CSSProperties
  cardStyle?: React.CSSProperties
}

export default function Modal(props: IModal) {
  const { isOpen, onRequestClose, layerStyle, cardStyle } = props
  const el = document.getElementById('modal') as HTMLElement

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal__layer" style={layerStyle}>
          <div className="modal__card" style={cardStyle}>
            {props.children}
          </div>
        </div>,
        el
      )
    : null
}

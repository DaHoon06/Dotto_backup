import { ComponentProps } from 'react'
import styles from './StickyHeader.module.scss'

interface IStickyHeader extends ComponentProps<'header'> {
  top?: number
}

export default function StickyHeader({ children, top = 144 }: IStickyHeader) {
  return (
    <header className={styles.stickyHeader} style={{ top: top }}>
      {children}
    </header>
  )
}

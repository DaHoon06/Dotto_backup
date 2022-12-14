import { ComponentProps } from 'react'
import styles from './StickyHeader.module.scss'

interface IStickyHeader extends ComponentProps<'header'> {}

export default function StickyHeader({ children }: IStickyHeader) {
  return <header className={styles.stickyHeader}>{children}</header>
}

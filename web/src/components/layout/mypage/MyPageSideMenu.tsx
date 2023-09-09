import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

import styles from './MyPageSideMenu.module.scss'
const cx = classNames.bind(styles)

export interface MenuItem {
  key: string
  label: string
  path: string
}
export interface SideMenuProps {
  items?: MenuItem[]
  onClick?: (key: string) => void
}

function MyPageSideMenu({ items, onClick }: SideMenuProps) {
  const handleSubMenuItem = (key: string) => () => {
    onClick?.(key)
  }

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles['side-menu']}>
          {items?.map((item) => (
            <li
              key={item.label}
              className={cx(styles['main-menu-list'])}
              onClick={handleSubMenuItem(item.key)}
            >
              <NavLink
                className={({ isActive }) =>
                  cx(styles['main-menu-item'], { isActive })
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default MyPageSideMenu

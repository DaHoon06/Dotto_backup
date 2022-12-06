import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Bottom = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const [dropListCommunity, setDropListCommunity] = useState(false)
  const [dropListService, setDropListService] = useState(false)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const showDropdwonCommunity = () => {
    setDropListCommunity(!dropListCommunity)
  }
  const showDropdwonService = () => {
    setDropListService(!dropListService)
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link
            to={'/'}
            className={'nav-title' + (currentPath === '/' ? 'active' : '')}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to={'/'}
            className={'nav-title' + (currentPath === '/try' ? 'active' : '')}
          >
            try DOTTO
          </Link>
        </li>
        <li onMouseEnter={showDropdwonCommunity}>
          <span
            className={
              'nav-title' +
              (currentPath === '/dotto' || currentPath === '/dotto-board'
                ? 'active'
                : '')
            }
          >
            COMMUNITY
          </span>
          {dropListCommunity ? (
            <section
              onMouseLeave={showDropdwonCommunity}
              className={'drop-down-container'}
            >
              <Link
                to={'/dotto/board'}
                className={
                  'nav-title' + (currentPath === '/dotto' ? 'active' : '')
                }
              >
                닷투 게시판
              </Link>
              <Link
                to={'/'}
                className={
                  'nav-title' + (currentPath === '/dotto-board' ? 'active' : '')
                }
              >
                닷찾사 게시판
              </Link>
            </section>
          ) : (
            ''
          )}
        </li>
        <li>
          <Link
            to={'/'}
            className={'nav-title' + (currentPath === '/feed' ? 'active' : '')}
          >
            Feed
          </Link>
        </li>
        <li onMouseEnter={showDropdwonService}>
          <Link
            to={'/'}
            className={'nav-title' + (currentPath === '/faq' ? 'active' : '')}
          >
            고객지원
          </Link>
          {dropListService ? (
            <section
              onMouseLeave={showDropdwonService}
              className={'drop-down-container'}
            >
              <Link
                to={'/'}
                className={
                  'nav-title' + (currentPath === '/faq' ? 'active' : '')
                }
              >
                FAQ
              </Link>
              <Link
                to={'/'}
                className={
                  'nav-title' + (currentPath === '/notice' ? 'active' : '')
                }
              >
                공지사항
              </Link>
            </section>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  )
}

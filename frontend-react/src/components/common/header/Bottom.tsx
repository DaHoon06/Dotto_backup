import { useEffect, useState } from 'react'

export const Bottom = () => {
  //TODO ROUTER 따라 currentPath 바꾸기
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [dropListCommunity, setDropListCommunity] = useState(false)
  const [dropListService, setDropListService] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    setCurrentPath(path)
  }, [currentPath])

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
          <a
            href={'/'}
            className={'nav-title' + (currentPath === '/' ? 'active' : '')}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href={'/'}
            className={'nav-title' + (currentPath === '/try' ? 'active' : '')}
          >
            try DOTTO
          </a>
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
              <a
                href={'/dotto/board'}
                className={
                  'nav-title' + (currentPath === '/dotto' ? 'active' : '')
                }
              >
                닷투 게시판
              </a>
              <a
                href={'/'}
                className={
                  'nav-title' + (currentPath === '/dotto-board' ? 'active' : '')
                }
              >
                닷찾사 게시판
              </a>
            </section>
          ) : (
            ''
          )}
        </li>
        <li>
          <a
            href={'/'}
            className={'nav-title' + (currentPath === '/feed' ? 'active' : '')}
          >
            Feed
          </a>
        </li>
        <li onMouseEnter={showDropdwonService}>
          <a
            href={'/'}
            className={'nav-title' + (currentPath === '/faq' ? 'active' : '')}
          >
            고객지원
          </a>
          {dropListService ? (
            <section
              onMouseLeave={showDropdwonService}
              className={'drop-down-container'}
            >
              <a
                href={'/'}
                className={
                  'nav-title' + (currentPath === '/faq' ? 'active' : '')
                }
              >
                FAQ
              </a>
              <a
                href={'/'}
                className={
                  'nav-title' + (currentPath === '/notice' ? 'active' : '')
                }
              >
                공지사항
              </a>
            </section>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  )
}

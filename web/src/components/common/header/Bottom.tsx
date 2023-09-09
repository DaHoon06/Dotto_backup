import { ComponentProps, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Typography from '@/components/common/typography/Typography'
import cn from 'classnames'
import { REDIRECT_URL } from '@/constants/url'

interface Props extends ComponentProps<'nav'> {}

export const Bottom = (props: Props) => {
  const { className } = props
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return (
    <nav className={cn(className, 'navigation')}>
      <ul>
        <li className={'mr-20'}>
          <Link to={REDIRECT_URL.HOME}>
            <Typography
              as="span"
              variant={'sub2'}
              className={
                'nav-title' +
                (currentPath === REDIRECT_URL.HOME ? 'active' : '')
              }
            >
              HOME
            </Typography>
          </Link>
        </li>
        <li className={'mr-20'}>
          <Link to={REDIRECT_URL.TRY}>
            <Typography
              as="span"
              variant={'sub2'}
              className={
                'nav-title' + (currentPath === REDIRECT_URL.TRY ? 'active' : '')
              }
            >
              try DOTTO
            </Typography>
          </Link>
        </li>
        <li className={'mr-20'}>
          <Typography
            as="span"
            variant={'sub2'}
            className={
              'nav-title' +
              (currentPath === REDIRECT_URL.COMMUNITY_DOTTO ||
              currentPath === REDIRECT_URL.COMMUNITY_BOARD
                ? 'active'
                : '')
            }
          >
            COMMUNITY
            <ul className={'dropdown--container'}>
              <li>
                <Link to={REDIRECT_URL.COMMUNITY_DOTTO}>
                  <Typography
                    as="span"
                    variant={'sub2'}
                    className={
                      'nav-title' +
                      (currentPath === REDIRECT_URL.HOME ? 'active' : '')
                    }
                  >
                    닷투 게시판
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to={REDIRECT_URL.COMMUNITY_BOARD}>
                  <Typography
                    as="span"
                    variant={'sub2'}
                    className={
                      'nav-title' +
                      (currentPath === REDIRECT_URL.COMMUNITY_BOARD
                        ? 'active'
                        : '')
                    }
                  >
                    닷찾사 게시판
                  </Typography>
                </Link>
              </li>
            </ul>
          </Typography>
        </li>
        {/*<li className={'mr-20'}>*/}
        {/*  <Link to={REDIRECT_URL.FEED}>*/}
        {/*    <Typography*/}
        {/*      as="span"*/}
        {/*      variant={'sub2'}*/}
        {/*      className={*/}
        {/*        'nav-title' +*/}
        {/*        (currentPath === REDIRECT_URL.FEED ? 'active' : '')*/}
        {/*      }*/}
        {/*    >*/}
        {/*      Feed*/}
        {/*    </Typography>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li className={'mr-20'}>*/}
        {/*  <Typography*/}
        {/*    as="span"*/}
        {/*    variant={'sub2'}*/}
        {/*    className={*/}
        {/*      'nav-title' + (currentPath === REDIRECT_URL.FAQ ? 'active' : '')*/}
        {/*    }*/}
        {/*  >*/}
        {/*    고객지원*/}
        {/*    <ul className={'dropdown--container'}>*/}
        {/*      <li>*/}
        {/*        <Link to={REDIRECT_URL.FAQ}>*/}
        {/*          <Typography*/}
        {/*            as="span"*/}
        {/*            variant={'sub2'}*/}
        {/*            className={*/}
        {/*              'nav-title' +*/}
        {/*              (currentPath === REDIRECT_URL.FAQ ? 'active' : '')*/}
        {/*            }*/}
        {/*          >*/}
        {/*            FAQ*/}
        {/*          </Typography>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <Link to={REDIRECT_URL.NOTICE}>*/}
        {/*          <Typography*/}
        {/*            as="span"*/}
        {/*            variant={'sub2'}*/}
        {/*            className={*/}
        {/*              'nav-title' +*/}
        {/*              (currentPath === REDIRECT_URL.NOTICE ? 'active' : '')*/}
        {/*            }*/}
        {/*          >*/}
        {/*            공지사항*/}
        {/*          </Typography>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </Typography>*/}
        {/*</li>*/}
      </ul>
    </nav>
  )
}

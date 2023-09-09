import './SideMenu.scss'
import cn from 'classnames'
import Typography from '@/components/common/typography/Typography'
import { Link } from 'react-router-dom'
import { REDIRECT_URL } from '@/constants/url'
import CLOSE from '@/assets/icons/main/menu-close.svg'
import DEFAULT from '@/assets/icons/default.svg'

import Image from '@/components/common/image/Image'

interface Props {
  open: boolean
  showModal: (payload: boolean) => void
  showMenu: (payload: boolean) => void
}

export const SideMenu = (props: Props) => {
  const { open, showModal, showMenu } = props

  const onClickHandlerLoginButton = () => {
    showModal(open)
  }

  return (
    <aside className={cn(open ? 'show' : 'hide', 'side-menu--container')}>
      <nav className={'side-menu__body'}>
        <button
          type={'button'}
          onClick={() => showMenu(!open)}
          className={'close__button'}
        >
          <Image alt={'close'} src={CLOSE} />
        </button>
        <section className={'side-menu--user-box'}>
          <Image alt={'profile'} src={DEFAULT} className={'mb-16'} />
          <div className={'flex items-center'}>
            <Typography variant={'body2'} fontColor={'gray5'} as={'span'}>
              로그인이 필요합니다.
            </Typography>
            <button type={'button'} onClick={onClickHandlerLoginButton}>
              <Typography
                variant={'caption'}
                as={'span'}
                fontColor={'gray5'}
                className={'ml-10'}
              >
                Login
              </Typography>
            </button>
          </div>
        </section>
        <ul className={'side-menu--items'}>
          <li>
            <Link to={REDIRECT_URL.HOME}>
              <Typography variant={'body2'} fontColor={'white'} as={'span'}>
                HOME
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={REDIRECT_URL.TRY}>
              <Typography variant={'body2'} fontColor={'white'} as={'span'}>
                try DOTTO
              </Typography>
            </Link>
          </li>
          <li className={'community-group--container'}>
            <p className={'community-group'}>
              <Typography variant={'body2'} fontColor={'white'} as={'span'}>
                COMMUNITY
              </Typography>
            </p>
            <ul className={'community-sub-menu'}>
              <li>
                <Link to={REDIRECT_URL.COMMUNITY_DOTTO}>
                  <Typography variant={'body2'} fontColor={'white'} as={'span'}>
                    닷투 게시판
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to={REDIRECT_URL.COMMUNITY_BOARD}>
                  <Typography variant={'body2'} fontColor={'white'} as={'span'}>
                    닷찾사 게시판
                  </Typography>
                </Link>
              </li>
            </ul>
          </li>
          {/*<li>*/}
          {/*  <Link to={REDIRECT_URL.FEED}>*/}
          {/*    <Typography variant={'body2'} fontColor={'white'} as={'span'}>*/}
          {/*      Feed*/}
          {/*    </Typography>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={REDIRECT_URL.FAQ}>*/}
          {/*    <Typography variant={'body2'} fontColor={'white'} as={'span'}>*/}
          {/*      고객지원*/}
          {/*    </Typography>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </aside>
  )
}

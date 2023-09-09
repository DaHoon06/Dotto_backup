import '@/components/search/SideMenu.scss'
import Typography from '@/components/common/typography/Typography'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'

export const SideMenu = () => {
  const location = useLocation()
  const [category, setCategory] = useState('all')
  const navigate = useNavigate()
  useEffect(() => {}, [location])

  const onClickNavigate = (type: string) => {
    setCategory(type)
    if (type === 'all') navigate(`/search/result?keyword=`)
    else navigate(`/search/menu?category=${type}`)
  }

  return (
    <aside className={'side-menu'}>
      <ul className={'side-menu--items'}>
        <li className={'side-menu--item'}>
          <span onClick={() => onClickNavigate('all')}>
            <Typography
              className={'flex side-menu--category'}
              fontColor={category === 'all' ? 'gray1' : 'gray3'}
              fontWeight={category === 'all' ? 'medium' : 'regular'}
            >
              통합
              {category === 'all' && <span className={'circle ml-2'} />}
            </Typography>
          </span>
        </li>
        <li className={'side-menu--item'}>
          <span onClick={() => onClickNavigate('home')}>
            <Typography
              fontColor={category === 'home' ? 'gray1' : 'gray3'}
              fontWeight={category === 'home' ? 'medium' : 'regular'}
              className={'flex side-menu--category'}
            >
              닷투
              {category === 'home' && <span className={'circle ml-2'} />}
            </Typography>
          </span>
        </li>
        {/*<li className={'side-menu--item'}>*/}
        {/*  <span onClick={() => onClickNavigate('boards')}>*/}
        {/*    <Typography*/}
        {/*      className={'flex side-menu--category'}*/}
        {/*      fontColor={category === 'boards' ? 'gray1' : 'gray3'}*/}
        {/*      fontWeight={category === 'boards' ? 'medium' : 'regular'}*/}
        {/*    >*/}
        {/*      닷찾사*/}
        {/*      {category === 'boards' && <span className={'circle ml-2'} />}*/}
        {/*    </Typography>*/}
        {/*  </span>*/}
        {/*</li>*/}
        <li className={'side-menu--item'}>
          <span onClick={() => onClickNavigate('artists')}>
            <Typography
              className={'flex side-menu--category'}
              fontColor={category === 'artists' ? 'gray1' : 'gray3'}
              fontWeight={category === 'artists' ? 'medium' : 'regular'}
            >
              아티스트
              {category === 'artists' && <span className={'circle ml-2'} />}
            </Typography>
          </span>
        </li>
        <li className={'side-menu--item'}>
          <span onClick={() => onClickNavigate('users')}>
            <Typography
              className={'flex side-menu--category'}
              fontColor={category === 'users' ? 'gray1' : 'gray3'}
              fontWeight={category === 'users' ? 'medium' : 'regular'}
            >
              회원
              {category === 'users' && <span className={'circle ml-2'} />}
            </Typography>
          </span>
        </li>
      </ul>
    </aside>
  )
}

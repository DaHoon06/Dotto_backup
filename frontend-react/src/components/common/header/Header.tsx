import { Top } from '@/components/common/header/Top'
import { Bottom } from '@/components/common/header/Bottom'
import { Status } from '@/components/common/header/Status'
import './Header.scss'
export const Header = () => {
  return (
    <header className="header">
      <Top />
      <Status />
      <Bottom />
    </header>
  )
}

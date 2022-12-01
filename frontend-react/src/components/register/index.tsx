import { useState } from 'react'
import { Policy } from '@/components/register/Policy'
import { Tabs } from '@/components/register/Tabs'
import './index.scss'
import { IRegister } from '@/interfaces/register'

export const Register = (props: IRegister.PROPS) => {
  const [componentType, setComponentType] = useState(1)

  const { changeComponent } = props

  const redirectLogin = (payload: string) => {
    if (payload === 'login') changeComponent('login')
  }
  return (
    <article className={'register'}>
      <Tabs currentTab={componentType} />
      {componentType === 1 ? <Policy changeComponent={redirectLogin} /> : null}
    </article>
  )
}

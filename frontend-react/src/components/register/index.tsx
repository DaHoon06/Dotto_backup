import { useState } from 'react'
import { Policy } from '@/components/register/Policy'
import { Tabs } from '@/components/register/Tabs'
import './index.scss'
import { IRegister } from '@/interfaces/register'
import { RegisterForm } from '@/components/register/RegisterForm'

export const Register = (props: IRegister.PROPS) => {
  const [componentType, setComponentType] = useState(1)

  const { changeComponent } = props

  const redirectLogin = (payload: string) => {
    switch (payload) {
      case 'login': {
        changeComponent('login')
        break
      }
      case 'register': {
        setComponentType(2)
        break
      }
      case 'policy': {
        setComponentType(1)
        break
      }
    }
  }
  return (
    <article className={'register'}>
      <Tabs currentTab={componentType} />
      {componentType === 1 ? (
        <Policy changeComponent={redirectLogin} />
      ) : componentType === 2 ? (
        <RegisterForm />
      ) : null}
    </article>
  )
}

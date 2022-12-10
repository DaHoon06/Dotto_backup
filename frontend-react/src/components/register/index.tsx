import { useState } from 'react'
import { Policy } from '@/components/register/Policy'
import { Tabs } from '@/components/register/Tabs'
import './index.scss'
import { IRegister } from '@/interfaces/register'
import { RegisterForm } from '@/components/register/RegisterForm'
import { RegisterCompleted } from '@/components/register/RegisterCompleted'

export const Register = (props: IRegister.PROPS) => {
  const [componentType, setComponentType] = useState(1)
  const { changeComponent } = props

  const redirectController = (payload: string) => {
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
      case 'completed': {
        setComponentType(3)
        break
      }
      case 'close': {
        break
      }
    }
  }
  return (
    <article className={'register'}>
      <Tabs currentTab={componentType} />
      {componentType === 1 ? (
        <Policy changeComponent={redirectController} />
      ) : componentType === 2 ? (
        <RegisterForm changeComponent={redirectController} />
      ) : componentType === 3 ? (
        <RegisterCompleted changeComponent={redirectController} />
      ) : null}
    </article>
  )
}

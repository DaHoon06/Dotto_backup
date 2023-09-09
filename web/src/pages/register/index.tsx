import { useState } from 'react'
import { Policy } from '@/components/register/Policy'
import { Tabs } from '@/components/register/Tabs'
import './index.scss'
import { IRegister } from '@/interfaces/register'
import { RegisterForm } from '@/components/register/RegisterForm'
import { RegisterCompleted } from '@/components/register/RegisterCompleted'
import { RegisterType } from '@/components/register/RegisterType'

export const Register = (props: IRegister.PROPS) => {
  const [userType, setType] = useState(true)
  const [componentType, setComponentType] = useState(1)

  const { changeComponent, closeModal } = props

  const redirectController = (payload: string) => {
    switch (payload) {
      case 'login': {
        changeComponent('login')
        break
      }
      case 'policy': {
        setComponentType(1)
        break
      }
      case 'registerType': {
        setComponentType(2)
        break
      }
      case 'register': {
        setComponentType(3)
        break
      }
      case 'completed': {
        setComponentType(4)
        break
      }
      case 'close': {
        if (closeModal) closeModal(false)
        break
      }
    }
  }

  const setUserType = (payload: boolean) => {
    setType(payload)
  }

  return (
    <article className={'register'}>
      <Tabs currentTab={componentType} />
      {componentType === 1 && <Policy changeComponent={redirectController} />}
      {componentType === 2 && (
        <RegisterType
          setUserType={setUserType}
          changeComponent={redirectController}
        />
      )}
      {componentType === 3 && (
        <RegisterForm
          userType={userType}
          changeComponent={redirectController}
        />
      )}
      {componentType === 4 && (
        <RegisterCompleted changeComponent={redirectController} />
      )}
    </article>
  )
}

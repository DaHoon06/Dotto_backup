import { useState } from 'react'
import { Policy } from '@/components/register/Policy'
import { Tabs } from '@/components/register/Tabs'
import './index.scss'

export const Register = () => {
  const [componentType, setComponentType] = useState(1)

  return (
    <article className={'register'}>
      <Tabs currentTab={componentType} />
      <hr />
      {componentType === 1 ? <Policy /> : null}
    </article>
  )
}

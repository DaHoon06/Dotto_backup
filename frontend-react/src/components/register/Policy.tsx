import { CheckBox } from '@/components/register/icon/CheckBox'
import React, { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'
import { DropIcon } from '@/components/register/icon/DropIcon'
import { IRegister } from '@/interfaces/register'
import { Button } from '@/components/register/button/Button'
import { useQuery } from 'react-query'

export const Policy = (props: IRegister.PROPS) => {
  const [showPolicyContent1, setShowPolicyContent1] = useState(false)
  const [showPolicyContent2, setShowPolicyContent2] = useState(false)
  const [policyContent, setPolicyContent] = useState({
    dottoPolicyContent: '',
    privatePolicyContent: '',
  })
  const [checkItems, setCheckItems] = useState<string[]>([])
  const { changeComponent } = props

  const getPolicyContent = async (): Promise<any> => {
    try {
      const { data: policyData } = await axios.get('/policy')
      const { result } = policyData
      const { data } = result as { data: IRegister.Policy }
      return { ...data }
    } catch (e) {
      console.log(e)
    }
  }
  const query = useQuery('policy', getPolicyContent)

  useEffect(() => {
    const { data } = query
    setPolicyContent({
      ...policyContent,
      ...data,
    })
  }, [])

  const onClickHandleShowContent = () => {
    setShowPolicyContent1(!showPolicyContent1)
  }
  const onClickHandleShowPrivate = () => {
    setShowPolicyContent2(!showPolicyContent2)
  }

  const onClickHandler = (type: string) => {
    changeComponent(type)
  }

  const onClickCheckBox = (type: string) => {
    switch (type) {
      case 'all':
        if (checkItems.length === 2) {
          setCheckItems([])
        } else {
          const initialData = ['policy', 'private']
          setCheckItems([...initialData])
        }
        break
      case 'policy':
      case 'private':
        if (checkItems.includes(type)) {
          setCheckItems(checkItems.filter((el) => el !== type))
        } else {
          setCheckItems((item) => [...item, type])
        }
        break
    }
  }

  const onChangeHandlerAllCheck = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = target
    if (checked) {
      const initialData = ['policy', 'private']
      setCheckItems([...initialData])
    } else {
      setCheckItems([])
    }
  }

  const onChangeHandlerSingleCheck = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = target
    if (checked) {
      setCheckItems((item) => [...item, id])
    } else {
      setCheckItems(checkItems.filter((el) => el !== id))
    }
  }

  return (
    <article className={'policy'}>
      <section className={'pt-10 policy__check-box--all'}>
        <button
          type={'button'}
          onClick={() => onClickCheckBox('all')}
          className={'mr-14'}
        >
          <CheckBox checkActive={checkItems.length === 2} />
        </button>
        <input
          readOnly
          checked={checkItems.length === 2}
          onChange={onChangeHandlerAllCheck}
          type="checkbox"
          value={'all'}
          id={'all'}
          name={'all'}
        />
        <label htmlFor={'all'}>전체 동의 합니다.</label>
      </section>
      <section className={'policy-content--container'}>
        <section className={'policy-contents'}>
          <section className={'policy__check-box'}>
            <button
              type={'button'}
              onClick={() => onClickCheckBox('policy')}
              className={'mr-14'}
            >
              <CheckBox checkActive={checkItems.includes('policy')} />
            </button>
            <input
              checked={checkItems.includes('policy')}
              readOnly
              id="policy"
              type="checkbox"
              onChange={onChangeHandlerSingleCheck}
              value={'policy'}
              name={'policy'}
            />
            <label htmlFor={'policy'}>
              이용약관 동의<span className={'essential ml-4'}>(필수)</span>
            </label>
          </section>
          <button onClick={onClickHandleShowContent} type={'button'}>
            <DropIcon />
          </button>
        </section>

        {showPolicyContent1 ? (
          <section className={'policy-contents--wrapper'}>
            {policyContent.dottoPolicyContent}
          </section>
        ) : (
          ''
        )}
        <section className={'policy-contents'}>
          <section className={'policy__check-box'}>
            <button
              type={'button'}
              onClick={() => onClickCheckBox('private')}
              className={'mr-14'}
            >
              <CheckBox checkActive={checkItems.includes('private')} />
            </button>
            <input
              checked={checkItems.includes('private')}
              readOnly
              id="private"
              type="checkbox"
              onChange={onChangeHandlerSingleCheck}
              value={'private'}
              name={'private'}
            />
            <label htmlFor={'private'} className={'pl-4'}>
              개인 정보 수집. 이용동의
              <span className={'essential ml-4'}>(필수)</span>
            </label>
          </section>
          <button onClick={onClickHandleShowPrivate} type={'button'}>
            <DropIcon />
          </button>
        </section>

        {showPolicyContent2 ? (
          <section className={'policy-contents--wrapper'}>
            {policyContent.privatePolicyContent}
          </section>
        ) : (
          ''
        )}
      </section>

      <section className={'register__button--container pb-40'}>
        <Button
          onClickEvent={() => onClickHandler('login')}
          className={'secondary__button button mr-16'}
          label={'이전'}
        />
        <Button
          disabled={checkItems.length !== 2}
          onClickEvent={() => onClickHandler('register')}
          className={
            checkItems.length !== 2
              ? 'secondary__button button'
              : 'primary__button button'
          }
          label={'다음'}
        />
      </section>
    </article>
  )
}

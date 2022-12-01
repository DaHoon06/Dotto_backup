import { CheckBox } from '@/components/register/icon/CheckBox'
import React, { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'
import { DropIcon } from '@/components/register/icon/DropIcon'

interface IPolicy {
  dottoPolicyContent: string
  privatePolicyContent: string
}

export const Policy = (props: any) => {
  const [showPolicyContent1, setShowPolicyContent1] = useState(false)
  const [showPolicyContent2, setShowPolicyContent2] = useState(false)
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [policyContent, setPolicyContent] = useState({
    dottoPolicyContent: '',
    privatePolicyContent: '',
  })
  const [checkedItems, setCheckedItems] = useState(new Set())
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const data = async (): Promise<void> => {
      const getData = await getPolicyContent()
      setPolicyContent({
        ...policyContent,
        ...getData,
      })
    }
    data()
  }, [])

  const getPolicyContent = async (): Promise<any> => {
    try {
      const { data: policyData } = await axios.get('/policy')
      const { result } = policyData
      const { data } = result as { data: IPolicy }
      return { ...data }
    } catch (e) {
      console.log(e)
    }
  }

  const checkedItemHandler = (id: string, checked: boolean) => {
    if (checked) {
      checkedItems.add(id)
      setCheckedItems(checkedItems)
      if (checkedItems.size === 2) setIsCheckAll(true)
    } else if (!checked && checkedItems.has(id)) {
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
      setIsCheckAll(false)
    }
  }

  const checkedHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    checkedItemHandler(target.id, target.checked)
  }

  const checkAll = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = target
    if (checked) {
      setIsCheckAll(true)
      checkedItems.add('policy')
      checkedItems.add('private')
      setCheckedItems(checkedItems)
    } else {
      setIsCheckAll(false)
      checkedItems.delete('policy')
      checkedItems.delete('private')
      setCheckedItems(checkedItems)
    }
  }

  const changeView = (type: string) => {
    return props.modalType(type)
  }

  const onClickHandleShowContent = () => {
    setShowPolicyContent1(!showPolicyContent1)
  }
  const onClickHandleShowPrivate = () => {
    setShowPolicyContent2(!showPolicyContent2)
  }

  const onClickHandlerNext = () => {
    changeView('register')
  }

  const onClickHandlerPrev = () => {
    changeView('login')
  }

  const onClickCheckBox = (type: string) => {
    switch (type) {
      case 'all':
        setIsCheckAll(!isCheckAll)
        checkedItems.delete('policy')
        checkedItems.delete('private')
        break
      case 'policy':
      case 'private':
        if (checkedItems.has(type)) checkedItems.delete(type)
        else checkedItems.add(type)
        break
    }
    setCheckedItems(checkedItems)
  }

  return (
    <article className={'policy'}>
      <section className={'policy--check-box'}>
        <button type={'button'} onClick={() => onClickCheckBox('all')}>
          <CheckBox checkActive={isCheckAll} />
        </button>
        <input
          readOnly
          checked={isCheckAll}
          onChange={(e) => checkAll(e)}
          type="checkbox"
          value={'all'}
          id={'all'}
          name={'all'}
        />
        <label htmlFor={'all'} className={'pl-4'}>
          전체 동의 합니다.
        </label>
      </section>
      <hr />
      <section className={'policy-content--container'}>
        <section className={'policy-contents'}>
          <section className={'policy--check-box'}>
            <button type={'button'} onClick={() => onClickCheckBox('policy')}>
              <CheckBox
                checkActive={isCheckAll || checkedItems.has('policy')}
              />
            </button>
            <input
              checked={checkedItems.has('policy')}
              readOnly
              id="policy"
              type="checkbox"
              onChange={(e) => checkedHandler(e)}
              value={'policy'}
              name={'policy'}
            />
            <label htmlFor={'policy'} className={'pl-4'}>
              이용약관 동의<span className={'essential'}>(필수)</span>
            </label>
          </section>
          <button onClick={onClickHandleShowContent} type={'button'}>
            <DropIcon />
          </button>
        </section>
        <hr />
        {showPolicyContent1 ? (
          <section className={'policy-contents--wrapper'}>
            {policyContent.dottoPolicyContent}
          </section>
        ) : (
          ''
        )}
        <section className={'policy-contents'}>
          <section className={'policy--check-box'}>
            <button type={'button'} onClick={() => onClickCheckBox('private')}>
              <CheckBox
                checkActive={isCheckAll || checkedItems.has('private')}
              />
            </button>
            <input
              checked={checkedItems.has('private')}
              readOnly
              id="private"
              type="checkbox"
              onChange={(e) => checkedHandler(e)}
              value={'private'}
              name={'private'}
            />
            <label htmlFor={'private'} className={'pl-4'}>
              개인 정보 수집. 이용동의
              <span className={'essential'}>(필수)</span>
            </label>
          </section>
          <button onClick={onClickHandleShowPrivate} type={'button'}>
            <DropIcon />
          </button>
        </section>
        <hr />
        {showPolicyContent2 ? (
          <section className={'policy-contents--wrapper'}>
            {policyContent.privatePolicyContent}
          </section>
        ) : (
          ''
        )}
      </section>

      <section className={'policy-button-container mt-20'}>
        <button
          onClick={onClickHandlerPrev}
          className={'secondary__button mr-16'}
          type={'button'}
        >
          이전
        </button>
        <button
          disabled={!isCheckAll}
          onClick={onClickHandlerNext}
          className={!isCheckAll ? 'secondary__button' : 'primary__button'}
          type={'button'}
        >
          다음
        </button>
      </section>
    </article>
  )
}

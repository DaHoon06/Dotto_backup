import { CheckBox } from '@/components/register/icon/CheckBox'
import React, { useEffect, useState } from 'react'
import { ins as axios } from '@/lib/axios'
import { DropIcon } from '@/components/register/icon/DropIcon'
import { IRegister } from '@/interfaces/register'
import { Button } from '@/components/register/button/Button'
import { useQuery } from 'react-query'
import style from '@/assets/styles/common/button.module.scss'
import cn from 'classnames'
import Typography from '@/components/common/typography/Typography'

interface IPolicy {
  dottoPolicyContent: string
  privatePolicyContent: string
}

export const Policy = (props: IRegister.PROPS) => {
  const [showPolicyContent1, setShowPolicyContent1] = useState(false)
  const [showPolicyContent2, setShowPolicyContent2] = useState(false)
  const [policyContent, setPolicyContent] = useState<IPolicy>({
    dottoPolicyContent: '',
    privatePolicyContent: '',
  })

  const [checkItems, setCheckItems] = useState<string[]>([])
  const { changeComponent } = props

  const getPolicyContent = async () => {
    try {
      const { data: policyData } = await axios.get('/policy')
      const { result } = policyData
      const { data } = result
      const { dottoPolicyContent, privatePolicyContent } = data

      setPolicyContent({
        ...policyContent,
        dottoPolicyContent,
        privatePolicyContent,
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const query = useQuery<IPolicy>('policy', getPolicyContent)

  useEffect(() => {
    const { data } = query
    if (data) {
      const { dottoPolicyContent, privatePolicyContent } = data
      setPolicyContent({
        ...policyContent,
        dottoPolicyContent,
        privatePolicyContent,
      })
    }
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
      <section className={'policy-body--container'}>
        <section className={'policy__check-box--all'}>
          <button
            type={'button'}
            onClick={() => onClickCheckBox('all')}
            className={'mr-16 flex'}
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
          <label htmlFor={'all'}>
            <Typography
              variant={'sub1'}
              fontColor={'gray1'}
              fontWeight={'regular'}
            >
              전체 동의 합니다.
            </Typography>
          </label>
        </section>
        <section className={'policy-content--container'}>
          <section className={'policy-contents'}>
            <section className={'policy__check-box'}>
              <button
                type={'button'}
                onClick={() => onClickCheckBox('policy')}
                className={'mr-16 flex'}
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
              <label htmlFor={'policy'} className={'flex'}>
                <Typography
                  variant={'body1'}
                  fontWeight={'medium'}
                  fontColor={'gray1'}
                >
                  이용약관 동의
                  <Typography
                    variant={'body2'}
                    fontWeight={'medium'}
                    fontColor={'gray3'}
                    as={'span'}
                    className={'pl-4'}
                  >
                    (필수)
                  </Typography>
                </Typography>
              </label>
            </section>
            <button onClick={onClickHandleShowContent} type={'button'}>
              <DropIcon width={15} height={9} />
            </button>
          </section>
          {showPolicyContent1 && (
            <section
              className={'policy-contents--wrapper scroll'}
              dangerouslySetInnerHTML={{
                __html: policyContent.dottoPolicyContent,
              }}
            />
          )}

          <section className={'policy-contents'}>
            <section className={'policy__check-box'}>
              <button
                type={'button'}
                onClick={() => onClickCheckBox('private')}
                className={'mr-16 flex'}
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
                <Typography
                  variant={'body1'}
                  fontWeight={'medium'}
                  fontColor={'gray1'}
                >
                  개인 정보 수집. 이용동의
                  <Typography
                    variant={'body2'}
                    fontWeight={'medium'}
                    fontColor={'gray3'}
                    as={'span'}
                    className={'pl-4'}
                  >
                    (필수)
                  </Typography>
                </Typography>
              </label>
            </section>
            <button onClick={onClickHandleShowPrivate} type={'button'}>
              <DropIcon width={15} height={9} />
            </button>
          </section>
          {showPolicyContent2 && (
            <section
              className={'policy-contents--wrapper scroll'}
              dangerouslySetInnerHTML={{
                __html: policyContent.privatePolicyContent,
              }}
            />
          )}
        </section>
      </section>
      <section className={cn('register__button--container')}>
        <Button
          onClickEvent={() => onClickHandler('login')}
          className={cn(style.secondary__button, 'button mr-16')}
          label={'이전'}
        />
        <Button
          disabled={checkItems.length !== 2}
          onClickEvent={() => onClickHandler('registerType')}
          className={cn(
            checkItems.length !== 2
              ? style.secondary__button
              : style.primary__button,
            'button'
          )}
          label={'다음'}
        />
      </section>
    </article>
  )
}

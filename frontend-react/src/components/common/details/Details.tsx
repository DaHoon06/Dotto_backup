import './Details.scss'
import { ReactComponent as DropDownIcon } from '@/assets/icons/common/btn-dropdown-24.svg'
import React, { ComponentProps } from 'react'
import classNames from 'classnames'

type DetailsCotextProps = {}

type DetailsProps = DetailsCotextProps & React.PropsWithChildren<{}>
const DetailsContext = React.createContext<DetailsProps>({})

function Details({ children }: DetailsProps) {
  return (
    <DetailsContext.Provider value={{}}>
      <details>{children}</details>
    </DetailsContext.Provider>
  )
}

interface IContents extends ComponentProps<'div'> {}
function Contents({ children, className, ...rest }: IContents) {
  return (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  )
}

interface ISummary extends ComponentProps<'summary'> {}
function Summary({ children, className, ...rest }: ISummary) {
  return (
    <summary className={classNames(className)} {...rest}>
      {children}
      <DropDownIcon />
    </summary>
  )
}

Details.Summary = Summary
Details.Contents = Contents

export default Details

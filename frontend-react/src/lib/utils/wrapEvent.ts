import { EventHandler, ReactEventHandler, SyntheticEvent } from 'react'

type WrapEventFunction<T> = (
  userEvent?: EventHandler<SyntheticEvent<T>>,
  proxyEvent?: EventHandler<SyntheticEvent<T>>
) => ReactEventHandler<T>

export const wrapEvent: WrapEventFunction<unknown> = (
  userEvent,
  proxyEvent
) => {
  return (event) => {
    try {
      proxyEvent && proxyEvent(event)
    } finally {
      userEvent && userEvent(event)
    }
  }
}

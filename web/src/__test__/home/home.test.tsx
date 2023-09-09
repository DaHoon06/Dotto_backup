import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '@/components/common/header/Header'

describe('메인 홈 화면 테스트 코드', () => {
  /**
   * @description 필요한 API 불러오기
   * 1. 닷투 게시판
   * 2. 닷찾사 게시판
   */
  beforeAll(async () => {})

  const headerRender = () => {
    render(<Header />)
  }

  test('login 버튼을 누르면 modal 창이 열려야 한다.', () => {
    const handleClick = jest.fn()
    headerRender()
    const loginButton = screen.getByText('Login')
    fireEvent.click(loginButton)
    expect(loginButton).toBeCalled()
  })

  test('닷투 게시판 불러오기', async () => {
    console.log('?')
  })

  test('닷찾사 게시판 불러오기', async () => {
    console.log('TEST2')
  })
})

export {}

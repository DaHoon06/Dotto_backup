import { Banner } from '../banner'
import { BoardLabel } from '@/components/board/BoardLabel'
import { LABEL } from '@/constants/placeholders'
import PostList from '@/components/board/PostList'
import './index.scss'
import dummy from '@/assets/dummy/board'
import { ins } from '@/lib/axios'

export const Main = () => {
  const getDottoBoard = async () => {
    try {
      const { data } = await ins.get('/api')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Banner />
      <main className={'main__container'}>
        <section className={'main__body'}>
          <BoardLabel
            title={LABEL.DOTTO_TITLE}
            subTitle={LABEL.DOTTO_SUB_TITLE}
            type={'home'}
          />
          <PostList list={dummy} />
        </section>

        <section className={'main__body'}>
          <BoardLabel
            title={LABEL.BOARD_TITLE}
            subTitle={LABEL.BOARD_SUB_TITLE}
            type={'home'}
          />
          <PostList list={dummy} />
        </section>
      </main>
    </>
  )
}

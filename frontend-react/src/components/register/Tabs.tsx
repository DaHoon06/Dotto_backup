import Typography from '@/components/common/typography/Typography'

interface IRegister {
  currentTab: number
}

export const Tabs = (props: IRegister) => {
  const { currentTab } = props
  return (
    <section className={'tab'}>
      <Typography>회원가입</Typography>

      <div className={'tab--progress'}>
        <Typography className={currentTab === 1 ? 'active' : 'tab-title'}>
          약관동의
        </Typography>
        <span className={'progress-dot'} />
        <Typography className={currentTab === 2 ? 'active' : 'tab-title'}>
          본인인증
        </Typography>
        <span className={'progress-dot'} />
        <Typography className={currentTab === 3 ? 'active' : 'tab-title'}>
          가입완료
        </Typography>
      </div>
    </section>
  )
}

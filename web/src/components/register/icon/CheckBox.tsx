import './CheckBox.scss'

interface ICheckBoxIcon {
  checkActive: boolean
}

export const CheckBox = (props: ICheckBoxIcon) => {
  const { checkActive } = props
  return (
    <svg
      className={'checkbox-icons'}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={'url(#clip0_1501_6032)'}>
        <circle
          cx="12"
          cy="12"
          r="11.3"
          fill="white"
          stroke="#E2E2E2"
          strokeWidth={'1.4'}
          className={checkActive ? 'check-circle' : ''}
        />
        <path
          d="M17.3909 7.28464C17.4777 7.19452 17.5814 7.12293 17.6958 7.07405C17.8102 7.02517 17.9331 7 18.0572 7C18.1813 7 18.3041 7.02517 18.4185 7.07405C18.5329 7.12293 18.6366 7.19452 18.7235 7.28464C19.0875 7.65867 19.0926 8.26306 18.7362 8.64356L11.2104 17.6901C11.1249 17.7855 11.0213 17.8622 10.9057 17.9154C10.7901 17.9687 10.665 17.9974 10.5381 17.9998C10.4112 18.0023 10.2852 17.9783 10.1677 17.9295C10.0503 17.8807 9.94381 17.808 9.85491 17.716L5.27554 12.9973C5.09893 12.8141 5 12.5679 5 12.3113C5 12.0548 5.09893 11.8086 5.27554 11.6254C5.3624 11.5353 5.46607 11.4637 5.58048 11.4148C5.69489 11.3659 5.81773 11.3408 5.94183 11.3408C6.06592 11.3408 6.18877 11.3659 6.30318 11.4148C6.41758 11.4637 6.52125 11.5353 6.60811 11.6254L10.4926 15.6284L17.3654 7.31311C17.3733 7.30311 17.3818 7.2936 17.3909 7.28464Z"
          fill="#E2E2E2"
          className={checkActive ? 'chek-icon' : ''}
        />
      </g>
      <defs>
        <clipPath id="clip0_1501_6032">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

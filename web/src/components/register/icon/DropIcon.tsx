interface IDropIcon {
  width: number
  height: number
}

export const DropIcon = (props: IDropIcon) => {
  const { width, height } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.40625 0L7.5 6.15789L13.5938 0L15 1.42105L7.5 9L0 1.42105L1.40625 0Z"
        fill="#222222"
      />
    </svg>
  )
}

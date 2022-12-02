import { ReactComponent as FilterIcon } from '@/assets/icons/main/filter.svg'
import Typography from '@/components/common/typography/Typography'

export default function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="select flex gap-8 px-8 py-4" onClick={onClick}>
      <Typography variant="body1" fontWeight="bold" fontColor="gray1" as="span">
        FILTER
      </Typography>
      <FilterIcon />
    </div>
  )
}

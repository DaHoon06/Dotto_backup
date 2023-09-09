import { SORT_FIELD } from '@/lib/hooks/useSortField'
import { Listbox } from '@headlessui/react'
import Typography from '@/components/common/typography/Typography'
import { ReactComponent as DropDownIcon } from '@/assets/icons/common/btn-dropdown-24.svg'

export default function SortSelector({
  selected,
  setSelected,
}: {
  selected: { name: string }
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string
      value: string
    }>
  >
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="list-box">
        <Listbox.Button className="select flex gap-8 px-8 py-4">
          <Typography
            variant="body1"
            fontWeight="medium"
            fontColor="gray1"
            as="span"
          >
            {selected.name}
          </Typography>
          <DropDownIcon className="select-dropdown" />
        </Listbox.Button>
        <Listbox.Options className="select__options">
          {SORT_FIELD.map((sort, personIdx) => (
            <Listbox.Option
              key={personIdx}
              className={({ active }) => ''}
              value={sort}
              onClick={() => setSelected(sort)}
            >
              {({ selected }) => <span key={sort.name}>{sort.name}</span>}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

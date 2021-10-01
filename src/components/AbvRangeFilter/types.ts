export interface IRangeFilterProps {
  min: number
  max: number
  value: number[]
  onChange: (value: number[]) => void
}

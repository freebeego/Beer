import React, { FC } from 'react'
import { createSliderWithTooltip, Range } from 'rc-slider'

import { IRangeFilterProps } from './types'

import s from './styles.module.styl'
import './styles.styl'

const RangeSlider = createSliderWithTooltip(Range)

const AbvRangeFilter: FC<IRangeFilterProps> = ({ min, max, value, onChange }) => {
  return (
    <div className={s.filter}>
      <p>ABV filter</p>
      <RangeSlider min={min} max={max} value={value} onChange={onChange} tipFormatter={(value) => `${value}%`} />
    </div>
  )
}

export default AbvRangeFilter

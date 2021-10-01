import React, { FC } from 'react'
import s from './styles.module.styl'

const Error: FC = () => (
  <div className={s.container}>
    <p className={s.text}>Service is not available now = (</p>
  </div>
)

export default Error

import React, { FC } from 'react'

import { ReactComponent as PreloaderIcon } from '@icons/spinning.svg'

import s from './styles.module.styl'

const Preloader: FC = () => (
  <div className={s.container}>
    <PreloaderIcon className={s.preloader} />
  </div>
)

export default Preloader

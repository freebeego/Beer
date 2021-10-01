import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import ImageHolder from '@images/image-holder.png'

import { TCardProps } from './types'

import s from './styles.module.styl'

const Card: FC<TCardProps> = ({ id, name, imageUrl, tagline, contributedBy, abv, volume }) => {
  const history = useHistory()

  const selectCard = useCallback(() => history.push(`/${id}`), [id])

  return (
    <li className={s.card}>
      <img className={s.cardImage} src={imageUrl || ImageHolder} alt={name} />
      <div className={s.cardInfo}>
        <h2 className={s.cardName}>{name}</h2>
        <p className={s.cardTagline}>{tagline}</p>
        <p className={s.cardContributedByTitle}>Contributed by</p>
        <p className={s.cardContributedByText}>{contributedBy}</p>
        <p className={s.cardAbv}>
          Abv: <span className={s.cardAbvValue}>{abv}</span>
        </p>
        <p className={s.cardVolume}>
          volume: <span className={s.cardVolumeValue}>{volume.value}</span> {volume.unit}
        </p>
        <button className={s.cardButton} type="button" onClick={selectCard}>
          Details
        </button>
      </div>
    </li>
  )
}

export default Card

import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import ImageHolder from '@images/image-holder.png'

import Preloader from '@components/Preloader'
import Error from '@components/Error'

import { status, TAppDispatch, TAppState } from '@/store'
import { getBeerById, selectGetBeerByIdStatus, selectSelectedBeer } from '@store/beer'

import { routes } from '@constants/routes'
import { IDetailsProps, IUrlParams } from './types'

import s from './styles.module.styl'

const Details: FC<IDetailsProps> = ({ selectedBeer, getBeerById, requestStatus }) => {
  const { id } = useParams<IUrlParams>()

  useEffect(() => getBeerById(id), [id])

  switch (requestStatus) {
    case status.loading:
      return <Preloader />
    case status.idle:
      return <Preloader />
    case status.failed:
      return <Error />
    case status.succeeded:
      return (
        <>
          <Link className={s.link} to={routes.root}>
            &lt;&lt; Return to catalog
          </Link>
          <div className={s.container}>
            <img className={s.image} src={selectedBeer?.imageUrl || ImageHolder} alt={selectedBeer?.name || ''} />
            <div className={s.info}>
              <p>{selectedBeer?.name || ''}</p>
              <p>{selectedBeer?.tagline || ''}</p>
              <p>{selectedBeer?.description || ''}</p>

              <p>firstBrewed: {selectedBeer?.firstBrewed || ''}</p>

              <p>abv: {selectedBeer?.abv || ''}</p>
              <p>ibu: {selectedBeer?.ibu || ''}</p>

              <p>targetFg: {selectedBeer?.targetFg || ''}</p>
              <p>targetOg: {selectedBeer?.targetOg || ''}</p>

              <p>ebc: {selectedBeer?.ebc || ''}</p>
              <p>srm: {selectedBeer?.srm || ''}</p>
              <p>ph: {selectedBeer?.ph || ''}</p>
              <p>attenuationLevel: {selectedBeer?.attenuationLevel || ''}</p>
            </div>
          </div>
        </>
      )
  }
}

const mapStateToProps = (state: TAppState) => ({
  selectedBeer: selectSelectedBeer(state),
  requestStatus: selectGetBeerByIdStatus(state),
})

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
  getBeerById: (id: string) => dispatch(getBeerById(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)

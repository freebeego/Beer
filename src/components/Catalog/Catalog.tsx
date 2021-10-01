import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useDebounce } from 'use-debounce'

import { IBeerAdaptedParams } from '@services/Api/Beer'

import Card from '@components/Card'
import Pagination from '@components/Catalog/Pagination'
import AbvRangeFilter from '@components/AbvRangeFilter'
import Preloader from '@components/Preloader'
import Error from '@components/Error'

import { status, TAppDispatch, TAppState } from '@/store'
import { checkNextPage, getBeer, selectBeer, selectGetBeerStatus, selectPage, setPage } from '@store/beer'

import { itemsPerPage } from '@constants/api'

import { ICatalogProps } from './types'

import s from './styles.module.styl'

const Catalog: FC<ICatalogProps> = ({ beer, requestStatus, getBeer, page, setPage }) => {
  const [abvRange, setAbvRange] = useState<number[]>(localStorage.abvRange ? JSON.parse(localStorage.abvRange) : [0, 6])
  const [abvRangeValue] = useDebounce(abvRange, 500)
  const [search, setSearch] = useState<string>(localStorage.search || '')
  const [searchValue] = useDebounce(search, 500)

  useEffect(() => {
    setPage(1)
  }, [abvRangeValue, searchValue])

  useEffect(() => {
    const [abvGt, abvLt] = abvRangeValue
    const beerName = searchValue
    getBeer({ page, abvGt, abvLt, beerName, perPage: itemsPerPage + 1 })
  }, [page, abvRangeValue, searchValue])

  const onAbvRangeFilterChange = (value: number[]) => {
    localStorage.abvRange = JSON.stringify(value)
    setAbvRange(value)
  }

  const onSearchChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    localStorage.search = value.trim()
    setSearch(value.trim())
  }

  switch (requestStatus) {
    case status.idle:
      return <></>
    case status.failed:
      return <Error />
    default:
      return (
        <>
          <div className={s.header}>
            <AbvRangeFilter min={0} max={40} value={abvRange} onChange={onAbvRangeFilterChange} />
            <input
              className={s.headerSearch}
              type="search"
              placeholder="Search"
              value={search}
              onChange={onSearchChange}
            />
          </div>
          {requestStatus === status.loading ? (
            <Preloader />
          ) : (
            <>
              <ul className={s.catalog}>
                {beer.length &&
                  beer.map(({ id, imageUrl, name, tagline, contributedBy, abv, volume }) => (
                    <Card
                      key={id}
                      id={id}
                      name={name}
                      imageUrl={imageUrl}
                      tagline={tagline}
                      contributedBy={contributedBy}
                      abv={abv}
                      volume={volume}
                    />
                  ))}
              </ul>
            </>
          )}
          <Pagination />
        </>
      )
  }
}

const mapStateToProps = (state: TAppState) => ({
  beer: selectBeer(state),
  requestStatus: selectGetBeerStatus(state),
  page: selectPage(state),
})

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
  getBeer: (params: IBeerAdaptedParams) => {
    dispatch(getBeer(params))
    dispatch(checkNextPage(params))
  },
  setPage: (page: number) => dispatch(setPage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

import React, { FC } from 'react'
import { connect } from 'react-redux'

import { TAppDispatch, TAppState } from '@/store'
import { selectIsNextPageExist, selectPage, setPage } from '@store/beer'

import { IPaginationProps } from './types'

import s from './styles.module.styl'

const Pagination: FC<IPaginationProps> = ({ page, setPage, isNextPageExist }) => {
  //TODO Need total items number for the response array
  /*const totalPage = Math.floor(totalItems / itemsPerPage) + 1

    const getPagesNumbers = (): number[] => {
    const pagesNumbers = new Array(5)

    for (let i = 0; i < pagesNumbers.length; ++i) {
      if (i === 0) {
        if (page > 2 && page < totalPage - 2) {
          pagesNumbers[i] = page - 2
        } else if (page <= 2) {
          pagesNumbers[i] = 1
        } else {
          pagesNumbers[i] = totalPage - 4
        }
      } else {
        pagesNumbers[i] = pagesNumbers[i - 1] + 1
      }
    }

    return pagesNumbers
  }*/

  return (
    <div className={s.pagination}>
      {page > 1 ? (
        <button className={s.button} type="button" onClick={() => setPage(page - 1)}>
          &lt;
        </button>
      ) : (
        <div className={s.fakeBlock} />
      )}
      {isNextPageExist ? (
        <button className={s.button} type="button" onClick={() => setPage(page + 1)}>
          &gt;
        </button>
      ) : (
        <div className={s.fakeBlock} />
      )}

      {/*{page > 1 ? (
        <>
          <button className={s.button} type="button" onClick={() => setPage(1)}>
            &lt;&lt;
          </button>
          <button className={s.button} type="button" onClick={() => setPage(page - 1)}>
            &lt;
          </button>
        </>
      ) : (
        <>
          <div className={s.fakeBlock} />
          <div className={s.fakeBlock} />
        </>
      )}
      {getPagesNumbers().map((pageNumber) => (
        <button
          className={`${s.button} ${page === pageNumber ? s.buttonActive : ''}`}
          key={pageNumber}
          type="button"
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {page < totalPage ? (
        <>
          <button className={s.button} type="button" onClick={() => setPage(page + 1)}>
            &gt;
          </button>
          <button className={s.button} type="button" onClick={() => setPage(totalPage)}>
            &gt;&gt;
          </button>
        </>
      ) : (
        <>
          <div className={s.fakeBlock} />
          <div className={s.fakeBlock} />
        </>
      )}*/}
    </div>
  )
}

const mapStateToProps = (state: TAppState) => ({
  page: selectPage(state),
  isNextPageExist: selectIsNextPageExist(state),
})

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
  setPage: (page: number) => dispatch(setPage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

import { createAsyncThunk } from '@reduxjs/toolkit'

import { IThunkAPI } from '@store/types'

import beerApi, { IBeer, IBeerAdaptedParams } from '@services/Api/Beer'

import { itemsPerPage } from '@constants/api'

const getBeer = createAsyncThunk<IBeer[], IBeerAdaptedParams, IThunkAPI>('beer/getBeer', (params) =>
  beerApi.getBeer({ ...params, ...(params.perPage ? {} : { perPage: itemsPerPage }) }),
)

const getBeerById = createAsyncThunk<IBeer, string, IThunkAPI>('beer/getBeerById', (id) => beerApi.getBeerById(id))

const checkNextPage = createAsyncThunk<boolean, IBeerAdaptedParams, IThunkAPI>('beer/checkNextPage', async (params) => {
  if (params && params.page) {
    const res = await beerApi.getBeer({
      ...params,
      page: params.page + 1,
      ...(params.perPage ? {} : { perPage: itemsPerPage }),
    })

    return !!res.length
  }

  return false
})

export { getBeer, getBeerById, checkNextPage }

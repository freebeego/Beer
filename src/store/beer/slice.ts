import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IBeer } from '@services/Api/Beer'

import getActionName from '@utils/string/getActionName'

import { status } from '@store/types'

import { checkNextPage, getBeer, getBeerById } from './thunks'
import { IBeerStore, TThunkNamesType } from './types'

const initialState: IBeerStore = {
  beer: [],
  selectedBeer: null,
  page: 1,
  isNextPageExist: false,
  statuses: {
    getBeer: status.idle,
    getBeerById: status.idle,
    checkNextPage: status.idle,
  },
}

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    setPage(store, { payload: page }: PayloadAction<number>) {
      store.page = page
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBeer.fulfilled, (state, { payload: beer }: PayloadAction<IBeer[]>) => {
        state.beer = beer
        state.statuses.getBeer = status.succeeded
      })
      .addCase(checkNextPage.fulfilled, (state, { payload: isNextPageExist }: PayloadAction<boolean>) => {
        state.isNextPageExist = isNextPageExist
        state.statuses.checkNextPage = status.succeeded
      })
      .addCase(getBeerById.fulfilled, (state, { payload: selectedBeer }: PayloadAction<IBeer>) => {
        state.selectedBeer = selectedBeer
        state.statuses.getBeerById = status.succeeded
      })
      .addMatcher(
        (action) => action.type.endsWith('pending'),
        (state, { type: actionType }) => {
          state.statuses[getActionName(actionType) as TThunkNamesType] = status.loading
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('rejected'),
        (state, { error, type: actionType }: AnyAction) => {
          const actionName = getActionName(actionType) as TThunkNamesType
          state.statuses[actionName] = status.failed
          throw error
        },
      )
  },
})

export const { setPage } = beerSlice.actions

export default beerSlice.reducer

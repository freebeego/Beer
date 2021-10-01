import { IBeer } from '@services/Api/Beer'

import { status, TAppState } from '@/store'

const selectBeer = (state: TAppState): IBeer[] => state.beer.beer
const selectIsNextPageExist = (state: TAppState): boolean => state.beer.isNextPageExist
const selectPage = (state: TAppState): number => state.beer.page
const selectSelectedBeer = (state: TAppState): IBeer | null => state.beer.selectedBeer
const selectGetBeerStatus = (state: TAppState): status => state.beer.statuses.getBeer
const selectGetBeerByIdStatus = (state: TAppState): status => state.beer.statuses.getBeerById

export {
  selectBeer,
  selectSelectedBeer,
  selectGetBeerStatus,
  selectGetBeerByIdStatus,
  selectPage,
  selectIsNextPageExist,
}

import { IBeer } from '@services/Api/Beer'

import * as beerThunks from '@store/beer/thunks'
import { status } from '@/store'

export type TThunkNamesType = keyof typeof beerThunks

export type TBeerStatuses = Record<TThunkNamesType, status>

export interface IBeerStore {
  beer: IBeer[]
  selectedBeer: IBeer | null
  page: number
  statuses: TBeerStatuses
  isNextPageExist: boolean
}

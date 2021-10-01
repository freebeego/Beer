import { IBeer, IBeerAdaptedParams } from '@services/Api/Beer'
import { status } from '@/store'

export interface ICatalogProps {
  beer: IBeer[]
  requestStatus: status
  getBeer: (params: IBeerAdaptedParams) => void
  setPage: (page: number) => void
  page: number
}

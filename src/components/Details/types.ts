import { IBeer } from '@services/Api/Beer'
import { status } from '@/store'

export interface IDetailsProps {
  selectedBeer: IBeer | null
  getBeerById: (id: string) => void
  requestStatus: status
}

export interface IUrlParams {
  id: string
}

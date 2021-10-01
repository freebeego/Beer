import ApiBase from '@services/Api/ApiBase'
import httpClient from '@services/Api/HTTPClient'
import { IBeer, IBeerAdaptedParams } from '@services/Api/Beer'

import { TObject } from '@/types/object'

import { adaptParams, adaptResData } from './adapter'

class Beer extends ApiBase {
  getBeer = (params?: IBeerAdaptedParams): Promise<IBeer[]> =>
    this.read<TObject[]>('', params ? { params: adaptParams(params) } : {}).then(({ data }) =>
      data.map((bear) => adaptResData(bear)),
    )

  getBeerById(id: string): Promise<IBeer> {
    return this.read<TObject[]>(id).then(({ data }) => adaptResData(data[0]))
  }
}

const beer = new Beer(process.env.REACT_APP_API_BEERS || '', httpClient.getInstance())

export default beer

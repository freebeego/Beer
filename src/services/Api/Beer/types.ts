export interface IVolume {
  value: number
  unit: 'liters'
}

export interface ITemp {
  value: number
  unit: 'celsius'
}

export interface IMashTemp {
  temp: ITemp
  duration: number
}

export interface IFermentation {
  temp: ITemp
}

export interface IMethod {
  mashTemp: IMashTemp[]
  fermentation: IFermentation
  twist: string
}

export type TWeight = 'kilograms' | 'grams'

export interface IAmount {
  value: number
  unit: TWeight
}

export interface IMalt {
  name: string
  amount: IAmount
}

export type TStage = 'start' | 'middle' | 'end'

export type TAttribute = 'bitter' | 'flavour' | 'aroma'

export interface IHop {
  name: string
  amount: IAmount
  add: TStage
  attribute: TAttribute
}

export interface IIngredients {
  malt: IMalt[]
  hops: IHop[]
  yeast: string
}

export interface IBeer {
  id: number
  name: string
  tagline: string
  firstBrewed?: string
  description: string
  imageUrl?: string
  abv: number
  ibu: number
  targetFg: number
  targetOg: number
  ebc: number
  srm: number
  ph: number
  attenuationLevel: number
  volume: IVolume
  boilVolume: IVolume
  method: IMethod
  ingredients: IIngredients
  foodPairing: string[]
  brewersTips: string
  contributedBy: string
}

export interface IBeerParams {
  page?: number
  per_page?: number
  abv_gt?: number
  abv_lt?: number
  ibu_gt?: number
  ibu_lt?: number
  ebc_gt?: number
  ebc_lt?: number
  beer_name?: string
  yeast?: string
  brewed_before?: string
  brewed_after?: string
  hops?: string
  malt?: string
  food?: string
  ids?: string
}

export interface IBeerAdaptedParams {
  perPage?: number
  page?: number
  abvGt?: number
  abvLt?: number
  ibuGt?: number
  ibuLt?: number
  ebcGt?: number
  ebcLt?: number
  beerName?: string
  yeast?: string
  brewedBefore?: Date
  brewedAfter?: Date
  hops?: string
  malt?: string
  food?: string
  ids?: string
}

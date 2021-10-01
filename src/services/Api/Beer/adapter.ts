import { IBeer, IBeerAdaptedParams, IBeerParams, IHop, IMalt, IMashTemp } from '@services/Api/Beer'
import replaceSpaceWithUnderscore from '@utils/string/replaceSpaceWithUnderscore'

const adaptResData = (rawData: Record<string, any>) =>
  ({
    id: rawData.id,
    name: rawData.name,
    tagline: rawData.tagline,
    ...(rawData.first_brewed ? { firstBrewed: rawData.first_brewed } : {}),
    description: rawData.description,
    ...(rawData.image_url ? { imageUrl: rawData.image_url } : {}),
    abv: rawData.abv,
    ibu: rawData.ibu,
    targetFg: rawData.target_fg,
    targetOg: rawData.target_og,
    ebc: rawData.ebc,
    srm: rawData.srm,
    ph: rawData.ph,
    attenuationLevel: rawData.attenuation_level,
    volume: {
      value: rawData.volume.value,
      unit: rawData.volume.unit,
    },
    boilVolume: {
      value: rawData.boil_volume.value,
      unit: rawData.boil_volume.unit,
    },
    method: {
      mashTemp: rawData.method.mash_temp.map((item: IMashTemp) => ({
        temp: {
          value: item.temp.value,
          unit: item.temp.unit,
        },
        duration: item.duration,
      })),
      fermentation: {
        temp: {
          value: rawData.method.fermentation.temp.value,
          unit: rawData.method.fermentation.temp.unit,
        },
      },
      twist: rawData.method.twist,
    },
    ingredients: {
      malt: rawData.ingredients.malt.map((item: IMalt) => ({
        name: item.name,
        amount: {
          value: item.amount.value,
          unit: item.amount.unit,
        },
      })),
      hops: rawData.ingredients.hops.map((item: IHop) => ({
        name: item.name,
        amount: {
          value: item.amount.value,
          unit: item.amount.unit,
        },
        add: item.add,
        attribute: item.attribute,
      })),
      yeast: rawData.ingredients.yeast,
    },
    foodPairing: rawData.food_pairing.map((item: string) => item),
    brewersTips: rawData.brewers_tips,
    contributedBy: rawData.contributed_by,
  } as IBeer)

const adaptParams = ({
  page,
  perPage,
  abvGt,
  abvLt,
  ibuGt,
  ibuLt,
  ebcGt,
  ebcLt,
  beerName,
  yeast,
  brewedBefore,
  brewedAfter,
  hops,
  malt,
  food,
  ids,
}: IBeerAdaptedParams): IBeerParams => ({
  ...(page && { page }),
  ...(perPage && { per_page: perPage }),
  ...(abvGt && { abv_gt: abvGt }),
  ...(abvLt && { abv_lt: abvLt }),
  ...(ibuGt && { ibu_gt: ibuGt }),
  ...(ibuLt && { ibu_lt: ibuLt }),
  ...(ebcGt && { ebc_gt: ebcGt }),
  ...(ebcLt && { ebc_lt: ebcLt }),
  ...(beerName && { beer_name: replaceSpaceWithUnderscore(beerName) }),
  ...(yeast && { yeast: replaceSpaceWithUnderscore(yeast) }),
  ...(brewedBefore && {
    brewed_before: `${`0${brewedBefore.getMonth() + 1}`.slice(-2)}-${brewedBefore.getFullYear()}`,
  }),
  ...(brewedAfter && { brewed_after: `${`0${brewedAfter.getMonth() + 1}`.slice(-2)}-${brewedAfter.getFullYear()}` }),
  ...(hops && { hops: replaceSpaceWithUnderscore(hops) }),
  ...(malt && { malt: replaceSpaceWithUnderscore(malt) }),
  ...(food && { food: replaceSpaceWithUnderscore(food) }),
  ...(ids && { ids }),
})

export { adaptResData, adaptParams }

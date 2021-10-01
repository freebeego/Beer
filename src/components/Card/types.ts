import { IBeer } from '@services/Api/Beer'

export type TCardProps = Pick<IBeer, 'id' | 'imageUrl' | 'name' | 'tagline' | 'contributedBy' | 'abv' | 'volume'>

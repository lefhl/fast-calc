export type Good = {
  title: string
  image: string
  link?: string
  description?: GoodDetails
  weigth: number
  price: number
  count: number
}

export type GoodDetails = {
  text: string
  protain: number
  fat: number
  carbs: number
  kcal: number
}

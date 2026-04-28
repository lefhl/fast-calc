export type Good = {
  title: string
  image: string
  link?: string
  description?: GoodDetails
  weigth: number
  price: number
  count: number
  comission?: number
}

export type GoodDetails = {
  text: string
  protein: number
  fat: number
  carbs: number
  kcal: number
}

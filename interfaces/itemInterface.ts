export interface Iitem {
  id?: number
  itemName: string,
  price: number,
  photo: string,
  tags: Tags[]
}

interface Tags {
  id: number,
  tag: string
}
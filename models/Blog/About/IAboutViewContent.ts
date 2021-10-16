import { friendlyList } from './friendlyList'

type aboutViewBody = {
  text?: string
  type?: number
  content?: friendlyList[]
  title?: string
}

export interface IAboutViewContent {
  id: string
  title?: string
  body: aboutViewBody[]
}

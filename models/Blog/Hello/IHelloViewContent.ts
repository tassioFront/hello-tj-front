import { findMoreInfoList } from './findMoreInfoList'

type helloViewBody = {
  text?: string
  type?: number
  content?: findMoreInfoList[]
  title?: string
}

export interface IHelloViewContent {
  id: string
  title: string
  body: helloViewBody[]
}

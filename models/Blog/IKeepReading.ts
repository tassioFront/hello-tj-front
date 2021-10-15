type keepReadingActions = {
  tittle: string
  link?: string
}
export interface IKeepReading {
  id: string
  title: string
  body: string
  action: keepReadingActions
}

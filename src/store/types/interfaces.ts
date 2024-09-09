export interface ICaseItem {
  percent: number
  percentName: string
}

export interface ICaseInfo {
  id: string
  title: string
  subtitle: string
  items: ICaseItem[]
}

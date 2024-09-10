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

export interface IFeaturesContent {
  title: string
  text: string
}

export interface IFeatures {
  key: string
  name: string,
  status: 'banking' | 'tools' | 'support'
  content: IFeaturesContent[]
}

export interface IQuestions {
  key: string
  question: string
  answer: string
}

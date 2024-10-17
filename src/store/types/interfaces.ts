export interface ITransaction {
  id: string
  name: string
  amount: number
  type: 'income' | 'expense'
}

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

export interface IReviews {
  key: string
  text: string
  author: string
  category: 'individuals' | 'businesses'
}

export interface IValues {
  key: string
  title: string
  text: string
}

export interface IValuesProps {
  title: string
  text: string
}

export interface IBenefitsProps {
  title: string
  text: string
}

export interface IResumes {
  key: string
  location: string
  department: string
  title: string
  about: string
  requirement: IRequirement[]
}

interface IRequirement {
  key: string
  name: string
}

export interface IResumesProps {
  location: string
  department: string
  title: string
  about: string
  requirement: IRequirement[]
}

export interface IRelease {
  key: string
  imagePath: string
  title: string
  location: string
  date: string
  text: string
}

export interface IReleaseProps {
  imagePath: string
  title: string
  location: string
  date: string
  text: string
}

import {defineStore} from "pinia"
import {onMounted, ref} from "vue"
import {FeaturesData as data} from '@/store/data/featuresData'

export const useFeatures = defineStore('features', () => {

  const status = ref<'banking' | 'tools' | 'support'>('banking')



  const loadStatus = () => {
    const savedStatus = localStorage.getItem("features-status")
    if (savedStatus !== null) {
      status.value = JSON.parse(savedStatus)
    }
  }

  onMounted(() => loadStatus())

  const toggleStatus = (activeStatus: 'banking' | 'tools' | 'support') => {
    status.value = activeStatus
    localStorage.setItem("features-status", JSON.stringify(status.value))
  }

  return {
    status,
    data,
    toggleStatus
  }
})

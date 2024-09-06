import {defineStore} from "pinia";
import {onMounted, ref} from "vue";

export const useProducts = defineStore('products', () => {
  const status = ref(true)

  const loadStatus = () => {
    const savedStatus = localStorage.getItem("status")
    if (savedStatus !== null) {
      status.value = JSON.parse(savedStatus)
    }
  }

  onMounted(() => loadStatus())

  const toggleStatus = () => {
    status.value = !status.value
    localStorage.setItem("status", JSON.stringify(status.value))
  }

  return {
    status,
    toggleStatus,
  }
})

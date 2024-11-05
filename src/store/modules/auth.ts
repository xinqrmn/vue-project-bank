import {defineStore} from "pinia";

export const useAuth = defineStore('auth', () => {
  const type = 'login'

  return {
    type
  }
})

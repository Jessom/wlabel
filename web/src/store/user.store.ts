import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const token = ref<string | null>(null)

  function setToken(value: string | null = null) {
    token.value = value
  }

  return {
    token,
    setToken
  }
})

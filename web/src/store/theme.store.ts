import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const colorPrimary = ref('#FC3D49')

  async function setColorPrimary(value: string = '#FC3D49') {
    console.log(value);
    
    colorPrimary.value = value
  }

  return {
    colorPrimary,
    setColorPrimary
  }
})
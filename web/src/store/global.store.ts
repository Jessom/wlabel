import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  // 是否显示顶部导航栏、侧边菜单栏
  const hasNavBar = ref<boolean>(true)
  const hasMenu = ref<boolean>(true)

  function setHasNavBar(value: boolean) {
    hasNavBar.value = value
  }

  function setHasMenu(value: boolean) {
    hasMenu.value = value
  }

  return {
    hasMenu,
    hasNavBar,
    setHasNavBar,
    setHasMenu
  }
})
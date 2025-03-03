import { defineStore } from 'pinia'
import type { ProjectItem } from '@/pages/projects/index'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  // 是否显示顶部导航栏、侧边菜单栏
  const hasNavBar = ref<boolean>(true)
  const hasMenu = ref<boolean>(true)
  const activateMenuKey = ref<string[]>([])

  // 项目id
  const projectItem = ref<ProjectItem | null>(null)

  function setHasNavBar(value: boolean) {
    hasNavBar.value = value
  }

  function setHasMenu(value: boolean) {
    hasMenu.value = value
  }

  function setProjectItem(value: ProjectItem | null) {
    projectItem.value = value
  }

  return {
    hasMenu,
    hasNavBar,
    projectItem,
    activateMenuKey,
    setHasNavBar,
    setHasMenu,
    setProjectItem
  }
})
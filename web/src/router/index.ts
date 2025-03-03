import { createRouter, createWebHashHistory } from "vue-router"
import { useGlobalStore } from '@/store/global.store'
import routes from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// 需要projectId的路由
const handRoutes: string[] = [
  '/dashboard', '/annotation', '/annotation/labels', '/annotation/tasks',
  '/user', '/user/index'
]
router.beforeEach((to, from, next) => {
  let title = to.name && typeof to.name === 'string' ? `${to.name}_WATASI` : 'WATASI'
  document.title = title
  const globalStore = useGlobalStore()
  if(to.meta.hasOwnProperty('hasNavBar')) {
    globalStore.setHasNavBar(Boolean(to.meta.hasNavBar))
  } else {
    globalStore.setHasNavBar(true)
  }

  if(to.meta.hasOwnProperty('hasMenu')) {
    globalStore.setHasMenu(Boolean(to.meta.hasMenu))
  } else {
    globalStore.setHasMenu(true)
  }

  globalStore.activateMenuKey = [to.path]

  next()
})

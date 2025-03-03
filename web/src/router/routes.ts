export default [{
  path: "/",
  component: () => import('@/layout/BasicLayout.vue'),
  redirect: "/projects",
  children: [{
    path: "/projects",
    name: "项目列表",
    component: () => import("@/pages/projects/Index.vue"),
    meta: {
      hasMenu: false, // 不展示侧边菜单栏
      // hasNavBar: false, // 不展示顶部导航栏
    }
  }, {
    path: "/dashboard",
    name: "仪表盘",
    component: () => import("@/pages/dashboard/Index.vue"),
    meta: {}
  },

  /*********************
        标注任务
  *********************/
  {
    path: "/annotation/labels",
    name: "标签管理",
    component: () => import("@/pages/annotation/Labels.vue"),
    meta: {}
  }, {
    path: "/annotation/tasks",
    name: "任务管理",
    component: () => import("@/pages/annotation/Tasks.vue"),
    meta: {}
  },
  
  /*********************
        用户管理
  *********************/
  {
    path: "/user/index",
    name: "用户管理",
    component: () => import("@/pages/user/Index.vue"),
    meta: {}
  },
  
  /*********************
        个人中心
  *********************/
  {
    path: "/mine/setting",
    name: "个人中心",
    component: () => import("@/pages/mine/Setting.vue"),
    meta: {}
  },
]
}, {
  path: "/login",
  name: "登录",
  component: () => import("@/pages/mine/Login.vue"),
  meta: {}
}, {
  path: '/:catchAll(.*)*',
  component: () => import("@/pages/error/404.vue")
}]
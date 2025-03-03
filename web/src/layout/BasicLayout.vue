<template>
  <div class="container">
    <!-- 非登录页 -->
    <div v-if="router.currentRoute.value.path !== '/login'" class="max-height">
      <a-layout class="max-height">
        <a-layout-header class="navigator-bar" v-if="globalStore.hasNavBar">
          <a-row>
            <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="5" :xxl="4">
              <div class="logo">WATASI</div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="19" :xxl="20" style="display: flex;">
              <div class="search-box"></div>
              <a-space wrap>
                <!-- 消息通知 -->
                <a-button type="text" size="large">
                  <template #icon>
                    <a-badge count="5" size="small">
                      <BellOutlined style="font-size: 18px" />
                    </a-badge>
                  </template>
                </a-button>
    
                <!-- 用户头像 -->
                <a-dropdown placement="bottomRight" arrow>
                  <a-button
                    type="text"
                    style="height: 44px; position: relative; top: -2px; margin-right: 6px;"
                  >
                    <a-avatar :style="{backgroundColor: themeStore.colorPrimary}">W</a-avatar>
                    <span class="username">管理员</span>
                  </a-button>
                  <template #overlay>
                    <a-menu @click="handleClick">
                      <a-menu-item key="/mine/setting">
                        <template #icon><UserOutlined /></template>
                        <a href="javascript:;">个人中心</a>
                      </a-menu-item>
                      <a-menu-divider />
                      <a-menu-item key="logout">
                        <template #icon><LogoutOutlined /></template>
                        <a href="javascript:;">退出登录</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </a-space>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout>
          <a-row style="width: 100%; height: 100%;">
            <a-col
              :xs="24"
              :sm="24"
              :md="6"
              :lg="6"
              :xl="5"
              :xxl="4"
              v-if="globalStore.hasMenu"
            >
              <a-layout-sider class="sider-menu" width="100%">
                <a-menu
                  v-model:selectedKeys="globalStore.activateMenuKey"
                  mode="inline"
                  class="items"
                  :items="menuItems"
                  @click="handleClick"
                ></a-menu>
              </a-layout-sider>
            </a-col>
            <a-col
              :xs="24"
              :sm="24"
              :md="globalStore.hasMenu ? 18 : 24"
              :lg="globalStore.hasMenu ? 18 : 24"
              :xl="globalStore.hasMenu ? 19 : 24"
              :xxl="globalStore.hasMenu ? 20 : 24"
            >
              <a-layout style="min-height: 100%;">
                <a-layout-content style="padding: 24px;">
                  <RouterView />
                </a-layout-content>
                <a-layout-footer class="footer">
                  <p class="cp">本站由 WATASI 提供技术支持</p>
                </a-layout-footer>
              </a-layout>
            </a-col>
          </a-row>
        </a-layout>
      </a-layout>
    </div>

    <!-- 登录页 -->
     <div v-else class="max-height">
       <RouterView />
     </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import { reactive, ref } from 'vue'
import { useThemeStore } from '@/store/theme.store'
import { useGlobalStore } from '@/store/global.store'
import { items } from '@/utils/menu.conf.ts'
import { Modal, type MenuProps } from 'ant-design-vue';
import { UserOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons-vue'
const router = useRouter()
const themeStore = useThemeStore()
const globalStore = useGlobalStore()

const menuItems = reactive(items)

const handleClick: MenuProps['onClick'] = e => {
  if(e.key === 'logout') {
    Modal.confirm({
      content: '确定退出登录吗？',
      onOk() {
        router.replace({
          path: `/login`,
          query: {
            redirect: encodeURIComponent(router.currentRoute.value.path)
          }
        })
      },
      onCancel() {
        Modal.destroyAll()
      }
    })
  } else if(typeof e.key === 'string' && e.key.indexOf('/mine') >= 0) {
    router.push(`${e.key}`)
  } else {
    router.replace(`${e.key}?pid=${globalStore.projectItem?.id}`)
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}
.max-height {
  height: 100%;
}
.sider-menu {
  background-color: var(--sider-menu-background-color);
  :deep(.items) {
    height: 100%;
    overflow-y: auto;
  }
}
.navigator-bar {
  background-color: var(--navigator-background-color);
  .username {
    font-size: 16px;
    color: var(--text-color-3);
    margin-inline-start: 6px;
    position: relative;
    top: 2px;
  }
  .search-box {
    display: flex;
    flex: auto !important;
  }
  :deep(.logo) {
    height: 64px;
    line-height: 64px;
    font-size: 32px;
    color: var(--text-color-1);
    margin-left: 24px;
    font-weight: 500;
    text-shadow: 0px 0px 2px 5px var(--shadow-color-1);
  }
}
.ant-layout .ant-layout-header {
  padding-inline: 0;
}
.sider-menu {
  height: 100%;
}
.footer {
  .cp {
    text-align: center;
  }
}
</style>

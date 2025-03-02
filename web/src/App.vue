<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: themeStore.colorPrimary
      }
    }"
    :locale="zhCN"
  >
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { RouterView } from "vue-router"
import { useThemeStore } from "@/store/theme.store.ts"
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const themeStore = useThemeStore()

</script>

<style scoped>

</style>

<template>
  <a-button @click="changeTheme">切换主题色</a-button>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/theme.store'
const themeStore = useThemeStore()

const changeTheme = () => {
  themeStore.setColorPrimary('#f60')
}
</script>

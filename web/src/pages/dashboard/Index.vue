<template>
  <a-button type="primary" @click="changeTheme">Primary Button</a-button>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/theme.store.ts'
const themeStore = useThemeStore()

const changeTheme = () => {
  themeStore.setColorPrimary("#f60")
}
</script>

<style lang="less">
</style>

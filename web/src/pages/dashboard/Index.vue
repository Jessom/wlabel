<template>
  <a-button type="primary" @click="changeTheme">Primary Button</a-button>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
 
const route = useRoute();

const changeTheme = () => {
  console.log(route.query);
}
</script>

<style lang="less">
</style>

<template>
  <div class="container">
    <a-avatar
      :size="48"
      :style="{
        backgroundColor: themeStore.colorPrimary
      }"
    >W</a-avatar>
    <p class="title">登 录</p>

    <div class="login-form">
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="账号"
          name="username"
          :rules="[{ required: true, message: '请输入账号' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          block
          style="margin-top: 14px;"
        >登录</a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/store/theme.store'
const router = useRouter()
const themeStore = useThemeStore()
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
  const { redirect } = router.currentRoute.value.query
  
  let path = redirect ? decodeURIComponent(`${redirect}`) : '/'
  router.replace({
    path: path
  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  padding-top: 50px;
  background-color: var(--background-color);
  height: 100%;
  .title {
    color: var(--text-color-2);
    font-size: 22px;
    margin-top: 14px;
  }
  .login-form {
    width: 288px;
    // height: 220px;
    border: 1px solid var(--border-color-1);
    box-shadow: 0px 0px 0px 2px var(--shadow-color-1);
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 16px;
    background-color: var(--background-color-main);
  }
  :deep(.ant-form-item) {
    margin-bottom: 12px;
  }
}
</style>

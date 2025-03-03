<template>
  <a-row>
    <a-col :span="12">
      <a-input
        v-model:value="searchKey"
        placeholder="搜索项目"
        style="width: 240px;"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
    </a-col>
    <a-col :span="12" style="text-align: right;">
      <a-button type="primary">
        <template #icon><PlusOutlined /></template>
        新增项目
      </a-button>
    </a-col>
  </a-row>
  <a-row :gutter="16">
    <a-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="8"
      :xxl="6"
      v-for="(item, index) in projects"
      :key="item.id"
      style="margin-top: 16px;"
    >
      <a-card hoverable :title="item.name" @click="onCardClick(item)">
        <template #extra>
          <a-dropdown placement="bottomRight" arrow>
            <a-button type="text">
              <template #icon><ellipsis-outlined key="ellipsis" /></template>
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="() => onRename(item)">
                  <template #icon><EditOutlined /></template>
                  <a href="javascript:;">重命名</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item style="color: #ff4d4f;" @click="() => onDelete(item)">
                  <template #icon><DeleteOutlined /></template>
                  <a href="javascript:;" danger>删除项目</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
        <a-card-meta>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" :size="90" shape="square" />
          </template>
          <template #description>
            <div><a-tag>{{ item.className }}</a-tag></div>
            <div>编辑时间：{{ item.updated_at }}</div>
            <div>创建时间：{{ item.created_at }}</div>
            <div>{{ item.image }}张图像&nbsp;&nbsp;•&nbsp;&nbsp;{{ item.classify }}个类别</div>
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>

  <!-- 重命名 -->
  <a-modal
    v-model:open="open"
    title="重命名项目"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
  >
    <a-form
      :model="currentEditProject"
      name="edit_project"
      style="margin-top: 20px; margin-bottom: 28px;"
      class="rename-form"
      @finishFailed="onFinishFailed"
      @finish="onFinish"
    >
      <a-form-item label="项目ID">
        <span class="ant-form-text">{{ currentEditProject?.id }}</span>
      </a-form-item>
      <div style="margin-bottom: 4px;">输入新的项目名称</div>
      <a-form-item
        name="name"
        :rules="[{ required: true, message: '输入新的项目名称' }]"
      >
        <a-input v-model:value="currentEditProject.name" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import{ ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { SearchOutlined, PlusOutlined, EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import type { ProjectItem } from './index'
import { Modal } from 'ant-design-vue'
import { useGlobalStore } from '@/store/global.store'
const globalStore = useGlobalStore()
const router = useRouter()
const searchKey = ref('')
const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);
let currentEditProject = reactive<ProjectItem>({
  id: '',
  name: '',
  class: '',
  className: '',
  updated_at: 0,
  created_at: 0,
  classify: 0,
  image: 0,
});
const projects = ref<ProjectItem[]>([
  { id: '123', name: '生活垃圾', class: 'segmentation', className: '实例分割', updated_at: 1740534205000, created_at: 1740450246000, classify: 7, image: 360 },
  { id: '234', name: '塑料瓶', class: 'detection', className: '目标检测', updated_at: 1740534205000, created_at: 1740450246000, classify: 9, image: 530 },
])

const onRename = (item: ProjectItem) => {
  open.value = true
  currentEditProject = item
}
const onDelete = (item: ProjectItem) => {
  Modal.confirm({
    title: '删除项目',
    content: '确定删除该项目吗？',
    onOk() {
      console.log('删除', item)
    },
  })
}
const handleOk = () => {
  confirmLoading.value = true
  setTimeout(() => {
    open.value = false
    confirmLoading.value = false
  }, 2000)
}
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const onCardClick = (item: ProjectItem) => {
  globalStore.setProjectItem(item)
  router.push(`/dashboard?pid=${item.id}`)
}
</script>

<style lang="less" scoped>
.rename-form {
  :deep(.ant-form-item) {
    margin-bottom: 10px;
  }
}
</style>

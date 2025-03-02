<template>
  <a-row>
    <a-col :span="12" style="margin-bottom: 16px;">
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
  <a-row :gutter="20">
    <a-col
      :span="8"
      v-for="(item, index) in projects"
      :key="item.id"
    >
      <a-card hoverable :title="item.name">
        <template #extra>
          <a-dropdown placement="bottomRight" arrow>
            <a-button type="text">
              <template #icon><ellipsis-outlined key="ellipsis" /></template>
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <template #icon><EditOutlined /></template>
                  <a href="javascript:;">重命名</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item style="color: #ff4d4f;">
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
            <div>编辑时间：{{ item.edit_time }}</div>
            <div>创建时间：{{ item.create_time }}</div>
            <div>{{ item.image }}张图像&nbsp;&nbsp;•&nbsp;&nbsp;{{ item.classify }}个类别</div>
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import{ ref } from 'vue'
import { SearchOutlined, PlusOutlined, EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
const searchKey = ref('')
const projects = ref([
  { id: '123', name: '生活垃圾', class: 'segmentation', className: '实例分割', edit_time: 1740534205000, create_time: 1740450246000, classify: 7, image: 360 },
  { id: '234', name: '塑料瓶', class: 'detection', className: '目标检测', edit_time: 1740534205000, create_time: 1740450246000, classify: 9, image: 530 },
])
</script>

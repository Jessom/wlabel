import type { ItemType } from "ant-design-vue";
import { getItem } from "./menu.utils";
import { h } from "vue";
import { DashboardOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";

export const items: ItemType[] = [
  getItem('仪表盘', '/dashboard', () => h(DashboardOutlined)),

  getItem('标注任务', '/annotation', null, [
    getItem('标签管理', '/annotation/labels'),
    getItem('任务管理', '/annotation/tasks'),
  ], 'group'),

  // { type: 'divider' },

  getItem('用户管理', '/user', null, [
    getItem('用户管理', '/user/index'),
  ], 'group')
];
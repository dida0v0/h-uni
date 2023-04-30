<<<<<<< HEAD
<<<<<<< HEAD
import path from "path";
import { defineConfig } from "vitepress";
import { fileURLToPath } from "url";
import components from "./sidebar/components";
import utils from "./sidebar/utils";

const CurrentPath = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  lang: "zh-CN",
  outDir: path.resolve(CurrentPath, "../dist/doc"),
  srcExclude: ["dist/npm/**/*"],
  title: "h-uni",
  lastUpdated: true,
    // Vite config options
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(CurrentPath),
=======
=======
/* eslint-disable import/extensions */
>>>>>>> development
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';
<<<<<<< HEAD
// eslint-disable-next-line import/no-unresolved, import/extensions, node/no-missing-import
import components from './sidebar/components';
// eslint-disable-next-line import/no-unresolved, import/extensions, node/no-missing-import
=======
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import components from './sidebar/components';
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
>>>>>>> development
import utils from './sidebar/utils';

const CurrentPath = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  lang: 'zh-CN',
  outDir: path.resolve(CurrentPath, '../dist/doc'),
  srcExclude: ['dist/npm/**/*'],
  title: 'h-uni',
  lastUpdated: true,
  // Vite config options
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(CurrentPath),
<<<<<<< HEAD
>>>>>>> development
=======
>>>>>>> development
      },
    },
  },
  // 路径重写
  rewrites: {
    ":for/src/packages/:type/:dd/:dd.md": ":for/:type/:dd.md",
  },
  themeConfig: {
    search: {
<<<<<<< HEAD
<<<<<<< HEAD
      provider: 'local'
    },
    //顶部导航栏
    nav: [
      { text: "主页", link: "/" },
      { text: "开始", link: "/README" },
      { text: "组件", link: "/for-vue2/components/HButton",activeMatch:'/components' },
      { text: "工具", link: "/for-vue2/utils/Hhttp",activeMatch:'/utils' },
      { text: "更新记录", link: "/CHANGELOG" },
      {
        text: "网站导航",
        items: [
          { text: "uniapp 官网", link: "https://uniapp.dcloud.net.cn/" },
          { text: "hewxing.cn", link: "http://hewxing.cn" },
          { text: "3D 示例", link: "http://3d.hewxing.cn" },
=======
      provider: 'local',
    },
    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/README' },
      { text: '组件', link: '/for-vue2/components/HButton', activeMatch: '/components' },
      { text: '工具', link: '/for-vue2/utils/Hhttp', activeMatch: '/utils' },
      { text: '更新记录', link: '/CHANGELOG' },
      {
=======
      provider: 'local',
    },
    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/README' },
      { text: '组件', link: '/for-vue2/components/HButton', activeMatch: '/components' },
      { text: '工具', link: '/for-vue2/utils/Hhttp', activeMatch: '/utils' },
      { text: '更新记录', link: '/CHANGELOG' },
      {
>>>>>>> development
        text: '网站导航',
        items: [
          { text: 'uniapp 官网', link: 'https://uniapp.dcloud.net.cn/' },
          { text: 'hewxing.cn', link: 'http://hewxing.cn' },
          { text: '3D 示例', link: 'http://3d.hewxing.cn' },
<<<<<<< HEAD
>>>>>>> development
=======
>>>>>>> development
        ],
      },
    ],
    // 侧边栏
    sidebar: {
<<<<<<< HEAD
<<<<<<< HEAD
      "/for-vue2/components/": [
        {
          text: "组件库",
          items: components,
        },
      ],
      "/for-vue3/components/": [
        {
          text: "组件库",
          items: components,
        },
      ],
      "/for-vue2/utils/": [
        {
          text: "工具库",
          items: utils,
        },
      ],
      "/for-vue3/utils/": [
        {
          text: "工具库",
=======
      '/for-vue2/components/': [
        {
          text: '组件库',
          items: components,
        },
      ],
      '/for-vue3/components/': [
        {
          text: '组件库',
          items: components,
        },
      ],
=======
      '/for-vue2/components/': [
        {
          text: '组件库',
          items: components,
        },
      ],
      '/for-vue3/components/': [
        {
          text: '组件库',
          items: components,
        },
      ],
>>>>>>> development
      '/for-vue2/utils/': [
        {
          text: '工具库',
          items: utils,
        },
      ],
      '/for-vue3/utils/': [
        {
          text: '工具库',
<<<<<<< HEAD
>>>>>>> development
=======
>>>>>>> development
          items: utils,
        },
      ],
    },
    // 链接图标
<<<<<<< HEAD
<<<<<<< HEAD
    socialLinks: [{ icon: "github", link: "https://github.com/hewx815/h-uni" }],
=======
    socialLinks: [{ icon: 'github', link: 'https://github.com/hewx815/h-uni' }],
>>>>>>> development
=======
    socialLinks: [{ icon: 'github', link: 'https://github.com/hewx815/h-uni' }],
>>>>>>> development
  },
});

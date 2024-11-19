import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/string',
    name: 'string',
    component: () => import(/* webpackChunkName: "string" */ '../views/DataBinding/DataBindingStringView.vue')
  },
  {
    path: '/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "htmlbinding" */ '../views/DataBinding/HtmlView.vue')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import(/* webpackChunkName: "attributebinding" */ '../views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import(/* webpackChunkName: "classbinding" */ '../views/DataBinding/ClassView.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "inputbinding" */ '../views/DataBinding/InputView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "listbinding" */ '../views/DataBinding/ListView.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import(/* webpackChunkName: "totalbinding" */ '../views/DataBinding/CheckboxSelectRadioView.vue')
  },
  {
    path: '/click',
    name: 'click',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event/ClickView.vue')
  },
  {
    path: '/Change',
    name: 'Change',
    component: () => import(/* webpackChunkName: "Change" */ '../views/Event/ChangeView.vue')
    },
  {
    path: '/key',
    name: 'key',
    component: () => import(/* webpackChunkName: "key" */ '../views/Event/ChangeView.vue')
  },
  {
    path: '/Render',
    name: 'Render',
    component: () => import(/* webpackChunkName: "Render" */ '../views/Extra/RenderView.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "show" */ '../views/Extra/RenderShowView.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Extra/ComputedView.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Extra/WatchView.vue')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import(/* webpackChunkName: "life" */ '../views/Extra/LifecycleHookView.vue')
  },
  {
    path: '/page',
    name: 'page',
    component: () => import(/* webpackChunkName: "page" */ '../views/reuse/PageView.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import(/* webpackChunkName: "parent" */ '../views/reuse/ParentView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../views/reuse/tableView.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/reuse/GridView.vue'),
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import(/* webpackChunkName: "slot" */ '../views/reuse/slotView.vue'),
  },
  {
  path: '/root',
  name: 'root',
  component: () => import(/* webpackChunkName: "slot" */ '../views/reuse/RootView.vue'),
  },
  {
    path: '/cust',
    name: 'cust',
    component: () => import(/* webpackChunkName: "slot" */ '../views/advenced/CustomDerectiveView.vue'),
  },
  {
    path: '/mixi',
    name: 'mixi',
    component: () => import(/* webpackChunkName: "mixi" */ '../views/advenced/MixinView.vue'),
  },
  {
    path: '/plug',
    name: 'plug',
    component: () => import(/* webpackChunkName: "plug" */ '../views/advenced/PluginView.vue'),
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


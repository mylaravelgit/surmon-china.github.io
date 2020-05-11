import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { GITHUB_REPOSITORIEL_IDS } from './constants'
import NotFound from './pages/not-found.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: async () => import('./pages/index.vue')
  },
  {
    path: `/${GITHUB_REPOSITORIEL_IDS.Vuniversal}`,
    name: GITHUB_REPOSITORIEL_IDS.Vuniversal,
    component: async () => import('./pages/vuniversal.vue')
  },
  {
    path: `/${GITHUB_REPOSITORIEL_IDS.Naivebayes}`,
    name: GITHUB_REPOSITORIEL_IDS.Naivebayes,
    component: async () => import('./pages/naivebayes.vue')
  },
  {
    path: `/${GITHUB_REPOSITORIEL_IDS.VueTouchRipple}`,
    name: GITHUB_REPOSITORIEL_IDS.VueTouchRipple,
    component: async () => import('./pages/vue-touch-ripple.vue')
  },
  {
    name: NotFound.name,
    path: '/:data(.*)',
    component: NotFound
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})


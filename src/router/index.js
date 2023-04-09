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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/asignacion',
    name:'asignacion',
    component: () => import(/* webpackChunkName: "libro" */ '../views/AsignacionView.vue')
  },
  {
    path:'/dispositivos',
    name:'dispositivos',
    component: () => import(/* webpackChunkName: "dispositivos" */ '../views/DispositivosView.vue')
  },
  {
    path:'/usuario',
    name:'usuario',
    component: () => import(/* webpackChunkName: "dispositivos" */ '../views/UsuarioView.vue')
  },
  {
    path:'/tipodispositivo',
    name:'tipodispositivo',
    component: () => import(/* webpackChunkName: "dispositivos" */ '../views/TipodispositivoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

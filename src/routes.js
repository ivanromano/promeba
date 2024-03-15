import contactos from "./pages/Contactos.vue"
import home from "./pages/Home.vue"
import NuestroEquipo from "./pages/NuestroEquipo.vue"
import Localizacion from "./pages/Localizacion.vue"
import { createRouter, createWebHistory } from 'vue-router'

  const router = new createRouter({
    history: createWebHistory(),
    routes: [
    {path: '/', component: home},
    {path: '/contactos', component: contactos},
    {path: '/nuestroequipo', component: NuestroEquipo},
    {path: '/localizacion', component: Localizacion},
    ]
  })
  export default router
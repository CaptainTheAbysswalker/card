import Vue from 'vue'
import VueRouter from 'vue-router'
import TitleCard from '../views/TitleCard.vue'
import SkillsCard from '../views/SkillsCard.vue'
import ContactCard from '../views/ContactCard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TitleCard',
    component: TitleCard
  },
  {
    path: '/skills',
    name: 'SkillsCard',
    component: SkillsCard
  },
  {
    path: '/contact',
    name: 'ContactCard',
    component: ContactCard
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

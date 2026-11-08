import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import GalleryView from './views/GalleryView.vue'
import EventsView from './views/EventsView.vue'
import ContactView from './views/ContactView.vue'
import AdminView from './views/AdminView.vue'
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Startseite' } },
    { path: '/galerie', component: GalleryView, meta: { title: 'Galerie' } },
    { path: '/veranstaltungen', component: EventsView, meta: { title: 'Veranstaltungen' } },
    { path: '/kontakt', component: ContactView, meta: { title: 'Kontakt' } },
    { path: '/admin', component: AdminView, meta: { title: 'Administration' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
router.afterEach((to) => { document.title = `${to.meta.title || 'Kirche'} · Koptisch-Orthodoxe Kirche Baden-Württemberg` })
export default router

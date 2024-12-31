// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout.vue';
import AllTemplates from '@/views/AllTemplates.vue';
import AllTestimonials from '@/views/AllTestimonials.vue';

const routes = [
  {
    path: '/',
    component: Layout, // Always Show everything
    name: "Home"
  },
  {
    path: '/all-templates',
    component: AllTemplates,
    name: "AllTemplates"
  },
  {
    path: '/all-testimonials',
    component: AllTestimonials,
    name: "AllTestimonials"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Smooth scroll!
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

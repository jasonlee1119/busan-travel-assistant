import { lazy } from 'react'


// Lazy load components
const Home = lazy(() => import('../pages/Home').then((module) => ({ default: module.Home })));

export const routes = {
  home: {
    path: '/',
    component: Home
  }
} 
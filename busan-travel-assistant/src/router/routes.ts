import { lazy } from 'react'

// Lazy load components
const Home = lazy(() => import('../pages/Home').then((module) => ({ default: module.Home })));

export const routes = {
  home: {
    path: '/',
    component: Home,
    showInNavigation: true,
    icon: 'home',
    name: 'Home',
  }
} 

export const getNavigationItems =() => {
  return Object.values(routes).filter(route => (
    route.showInNavigation
  ));
}
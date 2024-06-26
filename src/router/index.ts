import { lazy } from 'react'
import { RouteObject, createHashRouter } from 'react-router-dom'
import type { FanRouteObject } from '@/types/router'

const AllLayout = lazy(() => import('@/layout/AllLayout'))
const HomeLayout = lazy(() => import('@/layout/HomeLayout'))
const OutletPage = lazy(() => import('@/pages/OutletPage'))

const ErrorPage = lazy(() => import('@/error-page'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const ApiDialog = lazy(() => import('@/pages/api/ApiDialog'))

export const routers: FanRouteObject = {
  path: '/',
  redirect: '/home/home',
  Component: HomeLayout,
  children: [
    {
      path: '/home',
      redirect: '/home/home',
      name: '首页',
      locale: 'menu.Home',
      Component: OutletPage,
      children: [
        {
          path: '/home/home',
          name: '首页',
          locale: 'menu.Home',
          Component: HomePage,
        }
      ],
    },
    {
      path: '/api',
      redirect: '/api/dialog',
      name: 'API',
      locale: false,
      Component: OutletPage,
      children: [
        {
          path: '/api/dialog',
          name: 'dialog',
          locale: 'menu.dialog',
          Component: ApiDialog,
        }
      ],
    }
    // {
    //   path: '/setting',
    //   name: '设置',
    //   locale: 'menu.setting',
    //   Component: SettingPage,
    //   hideInMenu: true,
    // }
  ]
}

export const routerList: FanRouteObject[] = [
  {
    path: '/',
    // 使用 redirect 时，并且含有 element 时，element 中必须包含 <Outlet />，且 redirect 必须指向其后代 route 的 path
    redirect: '/home',
    ErrorBoundary: ErrorPage,
    Component: AllLayout,
    children: [
      routers
    ]
  }
];

const router = createHashRouter(routerList as RouteObject[]);

export default router;

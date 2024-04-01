import { lazy } from 'react'
import { RouteObject, createHashRouter } from 'react-router-dom'
import type { FanRouteObject } from '@/types/router'

const ErrorPage = lazy(() => import('@/error-page'))
const HomePage = lazy(() => import('@/pages/Home'))

export const routerList: FanRouteObject[] = [
  {
    path: "/",
    // 使用 redirect 时，并且含有 element 时，element 中必须包含 <Outlet />，且 redirect 必须指向其后代 route 的 path
    // redirect: "/home/analysis",
    ErrorBoundary: ErrorPage,
    Component: HomePage,
  }
];

const router = createHashRouter(routerList as RouteObject[]);

export default router;

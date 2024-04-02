import React from 'react';
import type { RouteObject } from 'react-router-dom'
import { WatermarkFun, WatermarkObject } from './config'
import { MenuDataItem } from '@ant-design/pro-components'

export type MyRouteObject = Omit<RouteObject, 'children'> & {
  access?: string;
  redirect?: string;
  watermark?: boolean | string[] | WatermarkObject | WatermarkFun;
  requiresAuth?: boolean;
  meta?: {
    // 标题
    title?: string;
    icon?: React.ReactNode;
    [propName: string]: unknown;
  };
}

export interface FanRouteObject extends MenuDataItem, MyRouteObject {
  children?: FanRouteObject[];
}

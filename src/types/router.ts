import React from 'react';
import type { RouteObject } from 'react-router-dom'
import { WatermarkFun, WatermarkObject } from './config';

export type FanRouteObject = Omit<RouteObject, 'children'> & {
  children?: FanRouteObject[];
  hideInMenu?: boolean;
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

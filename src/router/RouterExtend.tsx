import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/storeHooks';
import { getType, getFinalValue } from '@/utils/index';
import { searchRoute } from '@/utils/router';
import { routerList } from './index';
import { useTitle } from 'ahooks';
import { useTranslation } from 'react-i18next';
import { Watermark } from 'antd';
import config from '@/config/index';
import { WatermarkFun, WatermarkObject } from '@/types/config';

const RouterExtend: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { t } = useTranslation();
	const location = useLocation();
  const route = searchRoute(location.pathname, routerList[0].children);
	
	const userInfoStore = useAppSelector(state => state.userInfoStore.value);

  let curRoute = route
  if (route.children && route.children[0]?.index) {
    curRoute = route.children[0]
  }
  
	// 此处利用多语言 t('aaa') 是否等于 'aaa' 来判断是否使用多语言
  useTitle(getFinalValue(t, curRoute.meta?.title || ''))

	if (route.redirect) return <Navigate to={route.redirect} replace />;

	// 获取config设置的水印
	const getConfigWatermark = () => {
		let result: string[] = []
		if (getType(config.watermark) === 'array') {
			result = config.watermark as string[]
		} else if (getType(config.watermark) === 'object') {
			result = (config.watermark as WatermarkObject).user.map(key => userInfoStore[key])
		} else if (getType(config.watermark) === 'function') {
			result = (config.watermark as WatermarkFun)(userInfoStore)
		}
		return result
	}

	let watermarkContent = [''];
	if (route.watermark) {
		if (getType(route.watermark) === 'array') {
			watermarkContent = route.watermark as string[]
		} else if (getType(route.watermark) === 'object') {
			watermarkContent = (route.watermark as WatermarkObject).user.map(key => userInfoStore[key]);
		} else if (getType(route.watermark) === 'boolean') {
			watermarkContent = getConfigWatermark()
		} else if (getType(route.watermark) === 'function') {
			watermarkContent = (route.watermark as WatermarkFun)(userInfoStore);
		}
	}

	const watermarkChildren = <Watermark content={watermarkContent}>{ children }</Watermark>;

	// 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.requiresAuth && !route.access) return watermarkChildren;

	// 判断是否有Token
  const accessToken = localStorage.get('accessToken');
	if (!accessToken) return <Navigate to="/login" replace />;

	if (route.access) {
		const noAccessPath = config.noAccessPath || '/403';
		if (!userInfoStore.access.includes(route.access)) return <Navigate to={noAccessPath} />;
	}

	// 当前账号有权限返回 Router，正常访问页面
	return watermarkChildren;
};

export default RouterExtend;

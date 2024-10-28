/**
 * 路由
 * 
 */

import { createRouter, createWebHistory } from 'vue-router'
import { default as routes, existsRoute } from './routes';
import { BASE_URL, LOGIN_ROUTE_NAME } from '@/common/constants';

const router = createRouter({
	history: createWebHistory(BASE_URL),
	routes
});

// 白名单
const whiteList = [LOGIN_ROUTE_NAME,"Register"];

// 全局前置导航守卫
router.beforeEach(async (to, from) => {
	// 大屏看板在新的
	if (to.path == "/statistics/board") {
		let routeUrl = router.resolve({
			path: '/board'
		});
		window.open(routeUrl.href, "_blank");
		return false;
	}
	  
	if(!existsRoute(to.path)){
		return {name:'NotFound',query:{toPath:to.path}}
	}
	return true;
})

export default router;
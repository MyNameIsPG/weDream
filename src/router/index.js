import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/components/home';
import tabbar1 from '@/components/index/tabbar1';
import tabbar2 from '@/components/index/tabbar2';
import tabbar3 from '@/components/index/tabbar3';


const router = new Router({
	routes: [
		{ path: '/', name: 'index', component: index },
    { path: '/index', name: 'index', component: index, children: [
      { path: 'tabbar1', name: '首页', component: tabbar1 },
      { path: 'tabbar2', name: '积分实惠', component: tabbar2 },
      { path: 'tabbar3', name: '我的', component: tabbar3 },
      { path: '/', redirect: 'tabbar1' },
    ]},
	]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router

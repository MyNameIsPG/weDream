import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/components/home';
import tabbar1 from '@/components/index/tabbar1';
import tabbar2 from '@/components/index/tabbar2';
import tabbar3 from '@/components/index/tabbar3';
import noticeIndexList from '@/components/noticeList/noticeIndexList';
import noticeIndexDetails from '@/components/noticeList/noticeIndexDetails';
import businessIndex from '@/components/business/businessIndex';
import businessIndexList from '@/components/business/businessIndexList';
import businessIndexDetails from '@/components/business/businessIndexDetails';

import circleIndex from '@/components/circle/circleIndex';
import circleIndexAdd from '@/components/circle/circleIndexAdd';
import circleIndexDetails from '@/components/circle/circleIndexDetails';
import circlePostIndex from '@/components/circle/circlePostIndex';

const router = new Router({
	routes: [
		{ path: '/', name: '首页', component: index },
    { path: '/index', name: '首页', component: index, children: [
      { path: 'tabbar1', name: '首页', component: tabbar1 },
      { path: 'tabbar2', name: '积分实惠', component: tabbar2 },
      { path: 'tabbar3', name: '我的', component: tabbar3 },
      { path: '/', redirect: 'tabbar1' },
    ]},
    { path: '/noticeIndexList', name: '公告', component: noticeIndexList },
    { path: '/noticeIndexDetails', name: '公告详情', component: noticeIndexDetails },
    { path: '/businessIndex', name: '政务咨询', component: businessIndex },
    { path: '/businessIndexList', name: '政务分类', component: businessIndexList },
    { path: '/businessIndexDetails', name: '政务分类详情', component: businessIndexDetails },
    { path: '/circleIndex', name: '邻里圈子', component: circleIndex },
    { path: '/circleIndexAdd', name: '发布帖子', component: circleIndexAdd },
    { path: '/circleIndexDetails', name: '帖子详情', component: circleIndexDetails },
    { path: '/circlePostIndex', name: '圈子管理', component: circlePostIndex },
	]
})

router.beforeEach((to, from, next) => {
    if (to.name) {
        document.title = to.name
    }
    next()
})

export default router

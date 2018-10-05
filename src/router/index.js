import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '@/components/login';
import signIn from '@/components/login/signIn';
import register from '@/components/login/register';

import index from '@/components/home';
import tabbar1 from '@/components/index/tabbar1';
import tabbar2 from '@/components/index/tabbar2';
import tabbar3 from '@/components/index/tabbar3';
import noticeIndexList from '@/components/noticeList/noticeIndexList';
import noticeIndexDetails from '@/components/noticeList/noticeIndexDetails';
import businessIndex from '@/components/business/businessIndex';
import businessIndexList from '@/components/business/businessIndexList';
import businessIndexDetails from '@/components/business/businessIndexDetails';

import activityIndex from '@/components/activity/activityIndex';
import activityIndexDetails from '@/components/activity/activityIndexDetails';

import circleIndex from '@/components/circle/circleIndex';
import circleIndexAdd from '@/components/circle/circleIndexAdd';
import circleIndexAddType from '@/components/circle/circleIndexAddType';
import circleIndexDetails from '@/components/circle/circleIndexDetails';
import circlePostIndex from '@/components/circle/circlePostIndex';

import gridIndex from '@/components/grid/gridIndex';
import gridIndexItem from '@/components/grid/gridIndexItem';

const router = new Router({
	routes: [
    { path: '/login', name: '登陆', component: login, children: [
      { path: 'signIn', component: signIn, meta: { title: '登录' } },
      { path: 'register', component: register, meta: { title: '注册' } },
      { path: '/login', redirect: 'signIn', meta: { title: '登录' } }
    ]},
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
    { path: '/activityIndex', name: '活动中心', component: activityIndex },
    { path: '/activityIndexDetails', name: '活动详情', component: activityIndexDetails },
    { path: '/circleIndex', name: '邻里圈子', component: circleIndex },
    { path: '/circleIndexAdd', name: '发布帖子', component: circleIndexAdd },
    { path: '/circleIndexAddType', name: '选择圈子', component: circleIndexAddType },
    { path: '/circleIndexDetails', name: '帖子详情', component: circleIndexDetails },
    { path: '/circlePostIndex', name: '圈子管理', component: circlePostIndex },
    { path: '/gridIndex', name: '社区网格', component: gridIndex },
    { path: '/gridIndexItem', name: '网格详情', component: gridIndexItem },
	]
})

router.beforeEach((to, from, next) => {
    if (to.name) {
        document.title = to.name
    }
    next()
})

export default router

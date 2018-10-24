import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from 'src/components/login';
import signIn from 'src/components/login/signIn';
import register from 'src/components/login/register';

import index from 'src/components/home';
import tabbar1 from 'src/components/index/tabbar1';
import tabbar2 from 'src/components/index/tabbar2';
import tabbar3 from 'src/components/index/tabbar3';
import noticeIndexList from 'src/components/noticeList/noticeIndexList';
import noticeIndexDetails from 'src/components/noticeList/noticeIndexDetails';
import businessIndex from 'src/components/business/businessIndex';
import businessIndexList from 'src/components/business/businessIndexList';
import businessIndexDetails from 'src/components/business/businessIndexDetails';

import activityIndex from 'src/components/activity/activityIndex';
import activityIndexDetails from 'src/components/activity/activityIndexDetails';

import circleIndex from 'src/components/circle/circleIndex';
import circleIndexAdd from 'src/components/circle/circleIndexAdd';
import circleIndexAddType from 'src/components/circle/circleIndexAddType';
import circleIndexDetails from 'src/components/circle/circleIndexDetails';
import circlePostIndex from 'src/components/circle/circlePostIndex';

import complaintIndex from 'src/components/complaint/complaintIndex';
import complaintMyIndex from 'src/components/complaint/complaintMyIndex';
import complaintDetails from 'src/components/complaint/complaintDetails';
import complaintAdd from 'src/components/complaint/complaintAdd';

import gridIndex from 'src/components/grid/gridIndex';
import gridIndexItem from 'src/components/grid/gridIndexItem';

import postAll from 'src/components/post/postAll';
import postDetails from 'src/components/post/postDetails';

import merchantIndex from 'src/components/merchant/merchantIndex';
import merchantIndexDetails from 'src/components/merchant/merchantIndexDetails';

import partyIndex from 'src/components/party/partyIndex';
import partyIndexCore from 'src/components/party/partyIndexCore';

const router = new Router({
	routes: [
    { path: '/login', name: '登陆', component: login, children: [
      { path: 'signIn', component: signIn, meta: { title: '登录' } },
      { path: 'register', component: register, meta: { title: '注册' } },
      { path: '/login', redirect: 'signIn', meta: { title: '登录' } }
    ]},
		{ path: '/', name: '首页', component: index, children: [
        { path: '', redirect: '/index/tabbar1' },
      ]},
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
    { path: '/postAll', name: '文章列表', component: postAll },
    { path: '/postDetails', name: '文章详情', component: postDetails },
    { path: '/complaintIndex', name: '社区信箱', component: complaintIndex },
    { path: '/complaintMyIndex', name: '我的建议投诉', component: complaintMyIndex },
    { path: '/complaintDetails', name: '投诉详情', component: complaintDetails },
    { path: '/complaintAdd', name: '建议投诉', component: complaintAdd },
    { path: '/merchantIndex', name: '社区直达', component: merchantIndex },
    { path: '/merchantIndexDetails', name: '社区直达', component: merchantIndexDetails },
    { path: '/partyIndex', name: '社区党建', component: partyIndex },
    { path: '/partyIndexCore', name: '党员之家', component: partyIndexCore },




	]
})

router.beforeEach((to, from, next) => {
    if (to.name) {
        document.title = to.name
    }
    next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/components/home'

const router = new Router({
	routes: [
		{ path: '/', name: 'index', component: index }
	]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
const test = r => require.ensure([], () => r(require('./test')))

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
router.afterEach((to, from) => {
   document.title = to.name
})

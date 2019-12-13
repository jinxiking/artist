import Vue from 'vue';
import Router from 'vue-router'
import homeRouter from './home'
Vue.use(Router)
let routers = homeRouter

let myRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
})

//router钩子函数
myRouter.beforeEach((to, from, next) => {
    next();
});


export default myRouter

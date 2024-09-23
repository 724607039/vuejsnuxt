export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全局路由执行了');
  
  // if (to.path !== '/') {
  //   return navigateTo(to.path)
  // }
  // if (to.path === '/__inspect/') {
  //     return navigateTo(to.path)
  // }
  //     console.log('===========================================>')
  //     console.log(to, from)
  //     console.log('<===========================================')
})

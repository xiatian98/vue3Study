import { createApp } from 'vue' //vue3新增
import App from './App.vue'

// 创建应用实例对象-app，类似于vue2中的vm，但app比vm更轻量级
const app = createApp(App)
    // 挂载
app.mount('#app')
    // 1秒钟后卸载app
    // setTimeout(() => {
    //     app.unmount('#app')
    // }, 1000)

/**
 * 不兼容vue2
 * const vm = new Vue({
 *  render:h => h(App)
 * })
 * vm.$mount('#app')
 */
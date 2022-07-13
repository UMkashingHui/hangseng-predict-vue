// import Vue, { createApp } from 'vue'
// import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import axios from 'axios'
import VueAxios from 'vue-axios'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入ElementPlus，当然也可以使用局部引入
import ElementPlus from "element-plus";
import 'element-plus/theme-chalk/index.css'
import locale from "element-plus/lib/locale/lang/zh-cn"; //中文

// 后端URL
// axios.defaults.baseURL = 'http://localhost:8082/';

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {
    size: "small", zIndex: 3000, locale })
    .use(VueAxios, axios)
    .mount('#app')
// const app = createApp(App)
// createApp(App).mount('#app')
//
// // Element-Plus
// Vue.use(ElementPlus)
// Vue.mount('#app')
//
// new Vue({
//     render: h => h(App),
//     router,
// }).$mount('#app')
//
// // 异步通信
// Vue.use(VueAxios, axios)


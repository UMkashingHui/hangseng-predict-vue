import { createWebHistory, createRouter } from "vue-router"
//导入组件
import HangSengPredict from '../components/HangSengPredict'
import HelloWorld from '../components/HelloWorld'
import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'

const routes = [
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/predict',
        name: 'HangSengPredict',
        component: HangSengPredict
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



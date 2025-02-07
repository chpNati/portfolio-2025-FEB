import {createRouter, createWebHistory} from 'vue-router'
import About from './components/About.vue'
import MesaPizza from "./components/MesaPizza.vue";
import slp from "./components/slp.vue";
import ManaalsMeals from "./components/ManaalsMeals.vue";
import archive from "./components/archive.vue";
import DeLu from "./components/DeLu.vue";
import SAS from "./components/SAS.vue";
import golden from "./components/golden.vue";
import BioDes from "./components/BioDes.vue";
import Home from "./components/home.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, left: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/mesapizza',
            name: 'Mesapizza',
            component: MesaPizza
        },
        {
            path: '/slp',
            name: 'SLP',
            component: slp
        },
        {
            path: '/manaalmeals',
            name: 'manaalmeals',
            component: ManaalsMeals
        },
        {
            path: '/archive',
            name: 'archive',
            component: archive
        },
        {
            path: '/deLu',
            name: 'deLu',
            component: DeLu
        },
        {
            path: '/sas',
            name: 'SAS',
            component: SAS
        },
        {
            path: '/golden',
            name: 'golden',
            component: golden
        },
        {
            path: '/bioDes',
            name: 'bioDes',
            component: BioDes
        }
    ]
})

export default router
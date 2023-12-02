import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home.vue"
import SignUp from "@/views/SignUp.vue"
import SignIn from "@/views/SignIn.vue"
import Test  from "@/views/Test.vue"
import Adventures from '@/views/Adventures.vue'
import LostMines_0_Intro from "@/views/adventures/lost-mines/0-Intro.vue"
import LOM1 from "@/views/adventures/lost-mines/1-goblin-arrows.vue"
import LOM2 from "@/views/adventures/lost-mines/2-phandalin.vue"



const LOM = [
    { path: "/lmop-1", name: "Lomp1", component: LOM1 },
    { path: "/lmop-2", name: "Lomp2", component: LOM2 },
    // { path: "/lmop-3", name: "Lomp3", component: Home },
    // { path: "/lmop-4", name: "Lomp4", component: Home },
]

const routes = [
    {
        path: "/", 
        name: "Home", 
        component: Home
    },
    {
        path: "/adventures", 
        name: "Adventures", 
        component: Adventures
    },
    {
        path: "/sign-up", 
        name: "SignUp", 
        component: SignUp
    }, 
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn, // component: () => import(/* webpackChunkName: "about" */  '../views/Login.vue')
    },
    {
        path: "/test", 
        name: "Test", 
        component: Test
    },
    {
        path: "/pandalin-0", 
        name: "pandalin-0", 
        component: LostMines_0_Intro
    },
    ...LOM,
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes    
})

export default router
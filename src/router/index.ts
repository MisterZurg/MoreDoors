import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home.vue"
import SignUp from "@/views/SignUp.vue"
import SignIn from "@/views/SignIn.vue"
import Test  from "@/views/Test.vue"
import Adventures from '@/views/Adventures.vue'
// import LostMines_0_Intro from "@/views/adventures/lost-mines/0-Intro.vue"

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
    // {
    //     path: "", 
    //     name: "pandalin-0", 
    //     component: LostMines_0_Intro
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes    
})

export default router
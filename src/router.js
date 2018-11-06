
import VueRouter from 'vue-router'

import home from './components/home.vue'
import detail from './components/detail.vue'
var router =new VueRouter({
    routes:[
        { path:'/' , component: home },
        { path:'/detail/:id' ,component:detail}
    ]
})

export default router
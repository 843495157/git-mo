
import VueRouter from 'vue-router'

import home from './components/home.vue'
import detail from './components/detail.vue'
import more from './components/more.vue'
var router =new VueRouter({
    routes:[
        { path:'/' , component: home },
        { path:'/detail/:id' ,component:detail},
        { path:'/more' , component:more}
    ]
})

export default router
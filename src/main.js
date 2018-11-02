import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'

import { Button, Table ,Carousel ,CarouselItem,Input,Menu,MenuItem,Affix,Poptip,Icon} from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter)
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('CarouselItem',CarouselItem);
Vue.component('Carousel',Carousel);
Vue.component('Input',Input);
Vue.component('Menu',Menu);
Vue.component('MenuItem',MenuItem);
Vue.component('Affix',Affix);
Vue.component('Poptip',Poptip);
Vue.component('Icon',Icon);

new Vue({
    el: "#root",
    router,
    render:h=>h(App)
    
})
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import swiper from './components/swiper.vue'

import { Button, Table ,Carousel ,CarouselItem,Input,Menu,MenuItem,Affix,Poptip,Icon} from 'iview';
import 'iview/dist/styles/iview.css';
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
Vue.use(router)
new Vue({
    el: "#root",
    render:h=>h(App),
    router
})
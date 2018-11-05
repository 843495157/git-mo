<template>
    <div class="container">
           
    
        <div class="head-container ivu-affix">
               
                   
                        <!-- <img src="/src/images/logo1-2.png"> -->
                       <img :src=logo />
                <menu1></menu1>
                <search></search>
            </div>
            <!-- <menu1></menu1> -->
        <div class="content">
                <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
    import search from './components/search.vue'
    import menu1 from "./components/menu.vue" 
    import logo from "./images/logo1-2.png"
    export default {
        data() {
            return {
               logo
            }
        },
        components: {
            // swiper,
            search,
            menu1,
            // card,
            
        }
    }
</script>
<style>
    .container {
        min-width: 960px;
        margin: 0 auto;
    }

    .head-container {
        display: flex;
        display: -webkit-flex;
        height: 64px;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to bottom,rgba(238,238,238,.7) 0%,rgba(255,255,255,0) 100%);
        padding-left: 15px;
        padding-right: 15px;
        box-shadow: 0 1px 8px rgba(0,0,0,.3);
        -webkit-box-shadow: 0 1px 8px rgba(0,0,0,.3);
        min-width: 960px;
    }

    .head-container img {
        height: 100%;

    }
    .ivu-affix{
        z-index: 12 !important;
        width: 100% !important;
        top: 0;
        left: 0;
    }
 
    .content{
        padding-top: 64px;
    }
</style>
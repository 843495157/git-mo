<template>
    <div class="container">
        <Affix>
            <div class="head-container">
                <img src="/src/images/logo-2.png">
                <search></search>
            </div>
            <menu1></menu1>
        </Affix>
        <swiper></swiper>
        <div>
            <card-head ></card-head>
            
        </div>
       
    </div>
</template>
<script>
    import swiper from './components/swiper.vue'
    import search from './components/search.vue'
    import menu1 from "./components/menu.vue"
    import cardHead from "./components/card-head.vue"
    
    export default {
        data() {
            return {
               
            }
        },
        components: {
            swiper,
            search,
            menu1,
            cardHead,
            
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
        height: 100px;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
    }

    .head-container img {
        height: 100%;

    }
    .ivu-affix{
        z-index: 12 !important;
        width: 100% !important;
    }
</style>
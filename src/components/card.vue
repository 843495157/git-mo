<template>
    <div>
        <div class="card_head" @mouseenter="show(item)" @mouseleave="show(item)" v-for="item in msg" :key="item.title">
            {{item.title}}
            <Icon type="ios-arrow-forward" />
            <router-link v-show="item.flag" tag="a" to="/more">更多</router-link>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide,index) in item.swiperSlides" :key="index" @click="gotoDetail(item.id)"><img :src="slide.src" /><a>123</a></swiper-slide>

                <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
     import $ from 'jquery'
     import text1 from "../images/text1.jpg"
     import text2 from "../images/text2.jpg"
     import text3 from "../images/text3.jpg"
     import text4 from "../images/text4.jpg"
     import text5 from "../images/text5.jpg"
     import text6 from "../images/text6.jpg"
     import text7 from "../images/text7.jpg"
     import text8 from "../images/text8.jpg"
     import text9 from "../images/text9.jpg"
     import text10 from "../images/text10.jpg"
     
     

    export default {
        data() {
            return {

                msg: [
                    {
                        title: "今日推荐", 
                        flag: false, 
                        // swiperSlides: [
                        //     "../src/images/text1.jpg", "../src/images/text2.jpg", "../src/images/text3.jpg", "../src/images/text4.jpg", "../src/images/text5.jpg", "../src/images/text6.jpg", "../src/images/text7.jpg", "../src/images/text8.jpg"
                        // ]
                        swiperSlides: [
                            {id:1,src:text1},
                            {id:2,src:text2},
                            {id:3,src:text3},
                            {id:4,src:text4},
                            {id:5,src:text5},
                            {id:6,src:text6},
                            {id:7,src:text7},
                            {id:8,src:text8}

                        ]
                    },
                    {
                        title: "本周最热",
                        flag: false, 
                        // swiperSlides: [
                        //     "../src/images/text10.jpg", "../src/images/text9.jpg", "../src/images/text8.jpg", "../src/images/text7.jpg", "../src/images/text6.jpg", "../src/images/text5.jpg", "../src/images/text4.jpg", "../src/images/text3.jpg", "../src/images/text2.jpg", "../src/images/text1.jpg", "../src/images/1.jpg"
                        // ]
                        swiperSlides: [
                            {id:10,src:text10},
                            {id:11,src:text9},
                            {id:12,src:text8},
                            {id:13,src:text7},
                            {id:14,src:text6},
                            {id:15,src:text5},
                            {id:16,src:text4},
                            {id:17,src:text3},
                            {id:18,src:text2},
                            {id:19,src:text1}

                        ]
                    }
                ],
                swiperOption: {
                    slidesPerView: 7,
                    spaceBetween: 30,

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
            }
        },
        methods: {
            show(item) {
                item.flag = !item.flag;
            },
            gotoDetail(id){
                this.$router.push('/detail/' + id);
            }

        },
        mounted() {
            //定义hover图片自动滚动
            var int;//定义计时器
            $(".swiper-button").hover(function () {
                var that = this;
                int = setInterval(function () {
                    $(that).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
                }, 1000)

            }, function () {
                clearInterval(int);
            })
        },
        components: {
            swiper,
            swiperSlide
        }


    }
</script>
<style>
    .card_head {
        margin-top: 15px;
        margin-left: 15px;
        font-size: 28px;
    }

    .ivu-icon {
        line-height: 1.5;
    }


    .swiper-container {
        margin: 15px;
    }

    .swiper-slide {
        height: 250px;
    }

    .swiper-slide img {
        width: 100%;
        height: 240px;
        cursor: pointer;
    }

   .swiper-container .swiper-wrapper {
        height: 240px !important;
    }

    .swiper-button-prev {
        background-image: url("../images/left-circle.png");

    }

    .swiper-button-next {
        background-image: url("../images/right-circle.png");


    }

    .swiper-button-prev,
    .swiper-button-next {
        height: 40px;
        width: 40px;
        background-size: 100% 100%;
    }
</style>
<template>
    <div>
        <div class="card_head" @mouseenter="show(item)" @mouseleave="show(item)" v-for="item in msg" :key="item.title">
            {{item.title}}
            <Icon type="ios-arrow-forward" />
            <a v-show="item.flag">更多</a>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide,index) in item.swiperSlides" :key="index"><img :src="slide" /></swiper-slide>

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
                            text1,text2,text3,text4,text5,text6,text7,text8
                        ]
                    },
                    {
                        title: "本周最热",
                        flag: false, 
                        // swiperSlides: [
                        //     "../src/images/text10.jpg", "../src/images/text9.jpg", "../src/images/text8.jpg", "../src/images/text7.jpg", "../src/images/text6.jpg", "../src/images/text5.jpg", "../src/images/text4.jpg", "../src/images/text3.jpg", "../src/images/text2.jpg", "../src/images/text1.jpg", "../src/images/1.jpg"
                        // ]
                        swiperSlides: [
                            text10,text9,text8,text7,text6,text5,text4,text3,text2,text1
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
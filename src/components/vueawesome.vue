<template>
     
        <!-- <swiper :options="swiperOption">
          <swiper-slide><img src="../images/text1.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text2.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text3.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text4.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text5.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text6.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text7.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text8.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text9.jpg"/></swiper-slide>
          <swiper-slide><img src="../images/text10.jpg"/></swiper-slide>
          <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button" slot="button-next"></div>
        </swiper> -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide,index) in swiperSlides" :key="index"><img :src="slide"/></swiper-slide>
           
            <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button" slot="button-next"></div>
          </swiper>
  </template>
  <!-- https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/29-dynamic-slides.vue  动态加载轮播图-->
<script>
import 'swiper/dist/css/swiper.css'
 
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import $ from 'jquery'

 export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 30,
         
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides:[
           //  {src:"../src/images/text1.jpg"},{src:"../src/images/text2.jpg"},{src:"../src/images/text3.jpg"},{src:"../src/images/text4.jpg"},{src:"../src/images/text5.jpg"},{src:"../src/images/text6.jpg"},{src:"../src/images/text7.jpg"}
           "../src/images/text1.jpg","../src/images/text2.jpg","../src/images/text3.jpg","../src/images/text4.jpg"
         ]
      }
    },
    mounted() {
        //定义hover图片自动滚动
        var int;//定义计时器
        $(".swiper-button").hover(function() {
            var that =this;
          int=setInterval(function(){
                 $(that).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
            },1000)
               
            },function(){
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
    .swiper-container{
        margin: 15px;
    }
.swiper-slide{
    height: 250px;
}
.swiper-slide img{
    width: 100%;
    height: 240px;
}
.swiper-wrapper{
    height: 240px;
}
.swiper-button-prev{
    background-image: url("../images/left-circle.png");
    
}
.swiper-button-next{
    background-image: url("../images/right-circle.png");
    

}
.swiper-button-prev, .swiper-button-next{
    height: 40px;
    width: 40px;
    background-size: 100% 100%;
}
</style>
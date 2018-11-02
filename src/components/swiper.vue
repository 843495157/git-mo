<template>
    <Carousel v-model="value1" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
        :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" loop>
        <CarouselItem v-for="item in imgList" :key="item">
            <div class="demo-carousel"><img :src=item /></div>
        </CarouselItem>
       
    </Carousel>
</template>
<script>
    export default {
        data() {
            return {
                value1: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover',

                },
                imgList:["../src/images/1.jpg","../src/images/2.jpg","../src/images/3.jpg","../src/images/4.jpg","../src/images/5.jpg","../src/images/6.jpg","../src/images/7.jpg","../src/images/8.jpg","../src/images/9.jpg",]
            }
        }
    }
</script>
<style scoped>
    .demo-carousel img {
        width: 100%;
        height: 792px;
        cursor: pointer;
    }
</style>
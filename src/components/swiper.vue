<template>
    <Carousel v-model="value1" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
        :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/1.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/2.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/3.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/4.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/5.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/6.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/7.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/8.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/9.jpg" /></div>
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

                }
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
<template>
    <Carousel v-model="value1" :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :radius-dot="setting.radiusDot"
    :trigger="setting.trigger"
    :arrow="setting.arrow" 
    loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/lunbo-1.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/lunbo-2.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../images/lunbo-3.jpg" /></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
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
    .demo-carousel img{
        width: 100%;
        height: 600px;
        cursor: pointer;
    }
</style>
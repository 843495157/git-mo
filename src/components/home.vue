<template>
        <div>
            <swiper></swiper>
            <div>
                <card ></card>   
            </div>
        </div>
    </template>
    <script>
        import swiper from './swiper.vue'
        import card from "./card.vue"
        
        export default {
            data() {
                return {
                   
                }
            },
            components: {
                swiper,
                card,
                
            }
        }
    </script>
    <style>
  
    </style>
<template>
       <div class="card_head" @mouseenter="show" @mouseleave="show">
            最新电影
            <Icon type="ios-arrow-forward" />
            <a v-show="flag">更多</a>
       </div>
    </template>
    <script>
        export default {
            data(){
                return{
                    flag:false,
                }
            },
            methods:{
                show(){
                    this.flag=!this.flag;
                },
          
            }
            
        }
    </script>
    <style scoped>
       .card_head{
           margin-left: 15px;
           font-size: 28px;
       }

       .ivu-icon{
           line-height: 1.5;
       }
    </style>
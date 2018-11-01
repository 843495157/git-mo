<template>
    <div>
       <div class="card_head" @mouseenter="show(item)" @mouseleave="show(item)" v-for="item in msg" :key="item.title">
           {{item.title}}
            <Icon type="ios-arrow-forward" />
            <a v-show="item.flag">更多</a>
            <awesome></awesome>
       </div>
    </div>
    </template>
    <script>
        import awesome from './vueawesome.vue'
        export default {
            data(){
                return{
                    
                    msg:[{title:"今日推荐",flag:false},{title:"本周最热",flag:false}]
                }
            },
            methods:{
                show(item){
                    item.flag=!item.flag;
                }
          
            },
            components:{
                awesome
            }
            
            
        }
    </script>
    <style scoped>
       .card_head{
           margin-top: 15px;
           margin-left: 15px;
           font-size: 28px;
       }

       .ivu-icon{
           line-height: 1.5;
       }
    </style>
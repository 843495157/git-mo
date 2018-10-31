<template>
    <div>
        <Input search placeholder="Enter something..." @on-search="search"/>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            search(){
                console.log(1);
            }
        }
    }
</script>
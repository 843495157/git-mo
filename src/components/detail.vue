<template>
    <div class="detail" :style="{'height':height}">
        <div class="head-back"></div>
        <div class="mark">
            <div class="detail-container">
                <div class="detail-img"><img src="../images/1.jpg"></div>
                <div class="detail-text">
                    <h1>title</h1>
                    <p>When down-on-her-luck actress Emily comes into an unlikely inheritance, she moves to Sonoma to
                        re-invent herself as a tomato farmer. Her new tomato farm soon yields new friends, new
                        business, and a new shot at love.</p>
                </div>
                <p>下载地址：<a>www.baidu.com</a></p>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                height: ''
            }
        },
        created() {
            this.height = window.innerHeight + 'px'
        },
    }
</script>
<style>
    .detail,
    .mark {
        position: absolute;
        top: 0;
        z-index: 1;
        background-attachment: fixed;
    }
    .head-back{
        position: absolute;
        top: 0;
        height: 64px;
        background-color: rgba(238, 238, 238, .7);
        left: 0;
        width: 100%;
    }

    .detail {
        background: url("../images/1.jpg") no-repeat;
        background-size: 100% 100%;
        width: 100%;
    }

    .mark {
        background-color: rgba(238, 238, 238, .7);
        top: 64px;
        left: 0;
        bottom: 0;
        right: 0;
        overflow-y: scroll;
    }

    .detail-container {
        width: 960px;
        margin: 64px auto 0;
        z-index: 12;
        padding: 50px 20px 0;
        position: relative;
    }

    .detail-container .detail-img {
        width: 100%;
        margin: 0 auto;
    }
    .detail-img img {
        width: 100%;
    }
    .detail-text h1{
        text-align: center;
    }

/*滚动条样式*/
    ::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
 
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  border: 5px solid transparent;
}
 
::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;
}
 
::-webkit-scrollbar-thumb {
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;
}
 
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>
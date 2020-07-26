<template>
    <div class="mytoast">
        <div class="slot"><slot><slot></div>
        <div class="btnsure" v-if="closeButton" @click="btnCallback">{{getButtonText()}}</div>
    </div>
</template>
<script>
export default {
    props: {
        autoClose:{
            type:Boolean,
            default:true
        },
        timeDelay:{
            type:String|Number,
            default:2
        },
        closeButton:{
            type:Object|Boolean,
            // default:function(){
            //     return {
            //         text:'确定',
            //         callback:null
            //     }
            // }
        }
    },
    mounted () {
        if(this.autoClose){
            // 是否自动关闭
            setTimeout(() => {
                this.close()
            }, this.timeDelay*1000);
        }
    },
    methods: {
        close(){
            this.$el.remove()
            this.$destroy()
        },
        getButtonText(){
            if(this.closeButton&&this.closeButton.text){
                return this.closeButton.text
            }
            return '确定'
        },
        btnCallback(){
            this.close()
            console.log(typeof this.closeButton)
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback()
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.mytoast{
    position: fixed;
    left: 50%;
    top:5px;
    transform: translateX(-50%);
    padding: 0 20px;
    background-color: rgba(0,0,0,.6);
    font-size: 14px;
    color: #fff;
    width: auto;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    // .slot{
    //     padding-right: 10px;
    // }
    .btnsure{
        padding-left: 10px;
        border-left: 1px solid #fff;
        margin-left: 10px;
    }
}
</style>

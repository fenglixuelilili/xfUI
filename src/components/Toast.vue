<template>
    <div class="mytoast" :class="'position-' + position">
        <div class="animate" >
            <div class="slot"><slot></slot></div>
            <div class="btnsure" ref='btnsure' v-if="closeButton" @click="btnCallback">{{getButtonText()}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        autoClose:{
            type:Boolean|Number,
            default:true,
            validator(value){
                return typeof value === "boolean" || typeof value === "number"
            }
        },
        closeButton:{
            type:Object|Boolean,
            // default:function(){
            //     return {
            //         text:'确定',
            //         callback:null
            //     }
            // }
        },
        position:{
            type:String,
            default:'middle',
            validator(value){
                return ['top','bottom','middle'].indexOf(value) != -1
            }
        }
    },
    mounted () {
        this.setAutoClose()
    },
    methods: {
        setAutoClose(){
            if(this.autoClose){
                // 是否自动关闭
                let delay = 0
                if(typeof this.autoClose === "number"){
                    delay = this.autoClose
                }else{
                    // 默认2s
                    delay = 2
                }
                setTimeout(() => {
                    this.close()
                }, delay*1000);
            }
        },
        close(){
            this.$emit('destroy')
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
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback()
            }
        }
    }
}
</script>
<style lang='scss' scoped>
@keyframes fade-in {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes fade-up {
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(-0%);
    }
}
@keyframes fade-down {
    0%{
        opacity: 0;
        transform: translateY(100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%)
    }
}
.mytoast{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: 50%;
    .animate{
        background-color: rgba(0,0,0,.6);
        padding: 0 20px;
        font-size: 14px;
        color: #fff;
        // width: auto;
        // max-width: 50%;
        width: 100%;
        min-height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    &.position-top{
        top:5px;
        >.animate{
            animation: fade-up 0.3s;
        }
    }
    &.position-bottom{
        bottom:5px;
        >.animate{
            animation: fade-down 0.3s;
        }
    }
    &.position-middle{
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        >.animate{
            animation: fade-in 0.3s;
        }
    }
    .btnsure{
        padding-left: 10px;
        border-left: 1px solid #fff;
        margin-left: 10px;
        flex-shrink: 0;
    }
}
</style>

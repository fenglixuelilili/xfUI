<template>
    <div class="xf-popover">
        <div class="temcont-wapper" ref='temcont-wapper' >
            <div class="temcont" v-if="visiable" :style="{width:width+'px'}">
                <slot name='temcont'></slot> 
            </div>
        </div>
        <div class="actived" @click="checkvisiable" ref='actived'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        width:{
            type:Number,
            default:150
        }
    },
    data(){
        return {
            visiable:false
        }
    },
    methods: {
        checkvisiable(e){
            if(this.visiable){
                this.closePopover()
            }else{
                this.openPopover(e)
            }
        },
        moveEle(){
            this.$nextTick(()=>{
                document.body.appendChild(this.$refs['temcont-wapper'])
                const {top,left,width,height} = this.$refs['actived'].getBoundingClientRect()
                let distance = (this.$refs['temcont-wapper'].scrollWidth - this.$refs['actived'].scrollWidth)/2
                //  绝对定位是相对于整个页面（包括滚动的距离的相对位置）
                this.$refs['temcont-wapper'].style.top = window.scrollY + top - 5 + 'px'
                this.$refs['temcont-wapper'].style.left = window.scrollX + left - distance + 'px'
            })
        },
        openPopover(e){
            this.visiable = true
            this.moveEle()
            document.addEventListener('click',this.bindPopover)
        },
        removeEvent(){
            document.removeEventListener('click',this.bindPopover)
        },
        closePopover(){
            this.visiable = false
            this.removeEvent()
        },
        bindPopover(e){
            if(this.$refs.actived.contains(e.target) ||　this.$refs['temcont-wapper'].contains(e.target)){
               
            }else{
                // 如果不是点击的当前元素 那么我就关闭弹框 并且移除事件
                this.closePopover()
            }
        }
    },
    created () {
        // 不能再初始化的时候直接监听  因为有多个实例组件的话 就要监听多次
        // document.addEventListener('click',()=>{
        //     this.visiable = false
        // })
    }
}
</script>
<style lang='scss' scoped>
    .xf-popover{
        display: inline-block;
        
        .actived{
            
        }
    }
    .temcont-wapper{
        position: absolute;
        top:0;
        left: 0;
        transform: translateY(-100%);
        .temcont{
           box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
           padding: 10px;
           border-radius: 5px;
        //    width: 150px;
        }
        // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        // padding: 10px;
    }
</style>



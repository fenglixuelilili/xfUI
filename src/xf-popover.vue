<template>
    <div class="xf-popover">
        <div class="temcont-wapper" ref='temcont-wapper' v-if="visiable">
            <div class="temcont"  :style="{width:width+'px'}">
                <slot name='temcont'></slot> 
            </div>
        </div>
        <div class="actived"  ref='actived'>
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
        },
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','left','right'].indexOf(value) >= 0
            }
        },
        event:{
            type:String,
            default:'click',
            validator(value){
                return ['click','hover'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return {
            visiable:false,
            timer:null
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
                if(!this.$refs['temcont-wapper']){return}
                document.body.appendChild(this.$refs['temcont-wapper'])
                const {top,left,width,height} = this.$refs['actived'].getBoundingClientRect()
                let distance = (this.$refs['temcont-wapper'].scrollWidth - this.$refs['actived'].scrollWidth)/2
                //  绝对定位是相对于整个页面（包括滚动的距离的相对位置）
                this.$refs['temcont-wapper'].style.top = window.scrollY + top - 5 + 'px'
                this.$refs['temcont-wapper'].style.left = window.scrollX + left - distance + 'px'
                this.$refs['temcont-wapper'].style.opacity = 1
            })
            
        },
        openPopover(e){
            
            clearInterval(this.timer)
            this.timer = setTimeout(() => {
                this.visiable = true
                this.moveEle()
                document.addEventListener('click',this.bindPopover)
            }, 100);
            
        },
        removeEvent(){
            if(this.$refs['temcont-wapper']){
                this.$refs['temcont-wapper'].style.opacity = 0
            }
            document.removeEventListener('click',this.bindPopover)
        },
        closePopover(){
            clearInterval(this.timer)
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
    mounted () {
        if(this.event === 'click'){
            this.$refs['actived'].addEventListener('click',this.checkvisiable)
        }else{
            this.$refs['actived'].addEventListener('mouseover',this.openPopover)
            this.$refs['actived'].addEventListener('mouseleave',this.closePopover)
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
    $width:7px;
    $height:7px;
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
        background-color: #fff;
        opacity: 0;
        transition: opacity 0.3s;
        .temcont{
           box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
           border: 1px solid #ebeef5;
           padding: 10px;
           border-radius: 5px;
           position: relative;
            word-wrap:break-word;
            &::after{
              width: $width;
              height: $height;
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              margin: 0 auto;
              top: calc(100% - 3.5px);
              transform: rotateZ(45deg);
              filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
              border-bottom: 1px solid   #ebeef5;
              border-right: 1px solid   #ebeef5;
              background-color: #fff;
              border-radius: 1px;
           }
        }
    }
</style>



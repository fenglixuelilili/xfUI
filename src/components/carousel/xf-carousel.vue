<template>
    <div class="carousel" 
    @mouseover="pause" 
    @mouseout="play"
    @touchstart='startTouch'
    @touchmove='moveTouch'
    @touchend='endTouch'>
        <slot></slot>
        <div class="dots">
            <div class="dot" :class="{active:current == item}" v-for="(item,i) in selectes" :key='i' @click="changeCar(i)">{{i+1}}</div>
        </div>
        <!-- 左右按钮 -->
        <div class="pre" @click="preClick">
            <i class="iconfont icon-fanhui1"></i>
        </div>
        <div class="next" @click="nextClick">
            <i class="iconfont icon-fanhui1"></i>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        current:{},
        autoplay:{
            type:Boolean,
            default:true
        },
        positiondefault:{
            type:String,
            default:'next'
        }
    },
    provide(){
        return {
            carousel:this,
            timer:null
        }
    },
    data(){
        return {
            selectes:[],
            first:'',
            n:0,
            clientXstart:0,
            clientXend:0,
            _time:2000,
            isClick:true
        }
    },
    methods: {
        //收集各个组件name值
        updateCom(obj){
            this.$children.forEach(vm=>{
                for(let k in obj){
                    vm.$data[k] = obj[k]
                }
            })
        },
        getnames(){
            this.$children.forEach(vm=>{
                this.selectes.push(vm.name)
                vm.$data.current = this.current
            })
            this.getCurrent()
        },
        updataName(current){
            this.updateCom({
                current
            })
        },
        getCurrent(){
            if(!this.current){
                // 默认第一张
                this.first = this.$children[0].name
                this.updataName(this.first)
            }
            if(this.autoplay){
                this.startLunbo()    
            }
        },
        next(){
            this.updateCom({
                position:'next'
            })
            this.n++
            if(this.n>=this.selectes.length){
                this.n = 0
            }
            this.$emit('update:current',this.selectes[this.n])
        },
        pre(){
            this.updateCom({
                position:'pre'
            })
            this.n--
            if(this.n<0){
                this.n = this.selectes.length-1
            }
            this.$emit('update:current',this.selectes[this.n])
        },
        preClick(){
            if(this.isClick){
                this.isClick = false
                this.pre()
                setTimeout(()=>{
                    this.isClick = true
                },700)
            }
        },
        nextClick(){
            if(this.isClick){
                this.isClick = false
                this.next()
                 setTimeout(()=>{
                    this.isClick = true
                },700)
            }
        },
        startPosition(){
            this[this.positiondefault]&&this[this.positiondefault]()
        },
        startLunbo(){
            let fn = function(){
                this.startPosition()
                if(this.timer) this.timer=null
                this.timer = setTimeout(fn,2000)
            }.bind(this)

            if(this.timer) this.timer=null
            this.timer =  setTimeout(() => {
                fn()
            }, 2000);
        },
        pause(){
            // 暂停播放
            clearTimeout(this.timer)
            this.timer = null
        },
        play(){
            // 开始播放
            this.startLunbo()
        },
        changeCar(index){
            // 切换幻灯片
            if(index>this.n){
                this.updateCom({
                    position:'next'
                })
            }else if(index<this.n){
                 this.updateCom({
                    position:'pre'
                })
            }
            this.n = index
            this.$emit('update:current',this.selectes[this.n])
        },
        startTouch(e){
            this.clientXstart = e.touches[0].clientX
            this.pause()
        },
        moveTouch(e){
        },
        endTouch(e){
            this.clientXend = e.changedTouches[0].clientX
            if(this.clientXend - this.clientXstart > 0 && Math.abs(this.clientXend - this.clientXstart)>150){
                // 反向
                
                this.pre()
            }else if(this.clientXend - this.clientXstart < 0 && Math.abs(this.clientXend - this.clientXstart)>150){
                // 正向
                this.next()
            }
            this.startLunbo()
        },
    },
    mounted () {
        this.getnames()
    },
    watch: {
        current(value){
           this.updataName(value)
        }
    }
}
</script>

<style lang='scss' scoped>
    .carousel{
       position: relative;
       overflow: hidden;
       background-color: transparent;
       .dots{
           position: absolute;
           left: 0;
           right:0;
           margin: 0 auto;
           bottom: 10px;
           z-index: 101;
           display: flex;
           width: 0;
           .dot{
               width: 20px;
               height: 20px;
               border-radius: 50%;
            //    background-color: green;
               background-color:rgba(0,0,0,.2); 
               flex-shrink: 0;
               text-align: center;
               line-height: 20px;
               margin-left: 10px;
               font-size: 12px;
               cursor: pointer;
               display: flex;
               align-items: center;
               justify-content: center;
               color: #fff;
           }
           .active{
               background-color: gray;
           }
       }
       .pre,.next{
           width: 50px;
           height: 50px;
           position: absolute;
           top:0;
           bottom: 0;
           margin: auto 0;
           background-color: rgba(0,0,0,.4);
           color: #fff;
           text-align: center;
           line-height: 50px;
           z-index: 101;
           cursor: pointer;
           border-radius: 50%;
           transition: all .5s;
           i{
               color: #fff;
               font-size: 16px;
           }
       }
       .pre{
            left: -50px;
       }
       .next{
           transform: rotateZ(180deg);
           right: -50px;
           i{
               transform: rotateZ(180deg);
           }
       }
       
    }
    .carousel:hover{
        .pre{
           left: 30px!important;
       }
       .next{
           right: 30px!important;
       }
    }
</style>

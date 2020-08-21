<template>
    <div class="carouselitems">
        <transition :name='"carouse-"+position'>
            <div class="carouselitem" 
                :class="{noPosition:name == current}" 
                v-show="name == current">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props:{
        name:{}
    },
    inject:['carousel'],
    data(){
        return {
            current:'',
            position:''
        }
    },
    methods: {
        initposition(){
            this.position = this.carousel.positiondefault
        },
        isbindUpdate(){
            if(!this.carousel.current){
                this.carousel.$on('update:current',(value)=>{
                    this.current = value
                })
            }
        }
    },
    created () {
        this.initposition()
        this.isbindUpdate()
    },
    mounted () {
        this.$nextTick(()=>{
            let carouselitem = document.querySelector('.carouselitem')
            carouselitem.addEventListener('animationend',function(){
                console.log('结束')
            })
        })
    }
}
</script>
<style lang='scss' scoped>
    .carouselitem{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
    }
    .noPosition{
        position: relative;
        z-index: 100;
    }
    .carouse-next-enter{
        transform: translateX(100%);
    }
    .carouse-next-leave-to{
        transform: translateX(-100%);
    }
    .carouse-next-enter-active,.carouse-next-leave-active{
        transition: all 0.7s;
    }

    .carouse-pre-enter{
        transform: translateX(-100%);
    }
    .carouse-pre-leave-to{
        transform: translateX(100%);
    }
    .carouse-pre-enter-active,.carouse-pre-leave-active{
        transition: all 0.7s;
    }
</style>

<template>
    <transition  name='slider'>
        <div class="xf-silder" ref='xf-silder' v-show="show">
            <slot></slot>
            <button @click="show = !show">点击收起</button>
        </div>
    </transition>
</template>
<script>
export default {
    name:'xfSlider',
    data () {
        return {
            show:true      
        }
    },
    mounted () {
        this.$nextTick(()=>{
            let slider = this.$refs['xf-silder']
            // console.log(slider.offsetWidth)
        })
    }
}
</script>
<style lang='scss' scoped>
.xf-silder{
    // width: 200px;
    position: relative;
    button{
        position: absolute;
        right: 0;
        top:0;
    }
}
.slider-enter,.slider-leave-to{
    margin-left: -150px;
}
.slider-enter-active,.slider-leave-active{
    transition: all 0.5s;
}
</style>
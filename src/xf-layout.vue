<template>
    <div class="xf-layout" :class="styleObj">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data () {
        return {
            styleObj:{
                sliderFlex:false
            }
        }
    },
    mounted () {
        if(this.$children.find(vm=>vm.$options.name == 'xfSlider')){
            this.styleObj.sliderFlex = true
        }
    }
}
</script>
<style lang='scss' scoped>
.xf-layout{
    flex: 1;
    &.sliderFlex{
        display: flex;
    }
}
</style>


<template>
    <div class="xf-tab-head">
        <slot></slot>
        <div class="slide-waper">
            <slot name='slide'></slot>
        </div>
        <div class="line" ref='line' :style="{borderColor:activedcolor?activedcolor:null}"></div>
    </div>
</template>
<script>
export default {
    inject:['eventBus'],
    data(){
        return {
            activedcolor:null
        }
    },
    created () {
        this.eventBus &&　this.eventBus.$on('updata:activeline',(that)=>{
            const {width,left} = that.$el.getBoundingClientRect()
            this.$refs.line.style.width = width + 'px'
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
        this.eventBus &&　this.eventBus.$on('updata:activecolor',(activecolor)=>{
            this.activedcolor = activecolor
        })
    }
}
</script>
<style lang='scss' scoped>
    .xf-tab-head{
        border-bottom: 1px solid #ddd;
        display: flex;
        position: relative;
        .slide-waper{
            margin-left: auto;
            display: flex;
            align-items: center;
        }
        .line{
            position: absolute;
            left: 0;
            bottom: 0;
            border-bottom: 1px solid #409eff;;
            transition: all 0.3s;
        }
    }
</style>


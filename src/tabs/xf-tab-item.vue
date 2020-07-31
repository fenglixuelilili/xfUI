<template>
    <div class="xf-tab-item" :class="{active:actived}" @click="notify">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        name:{
            type:String|Number
        }
    },
    data(){
        return {
            actived:false
        }
    },
    inject:['eventBus'],
    created () {
        this.eventBus.$on('updata:selected',(name)=>{
            this.actived = name === this.name
        })
    },
    methods: {
        notify(){
            this.eventBus.$emit('updata:selected',this.name)
        }
    }
}
</script>
<style lang='scss' scoped>
    .xf-tab-item{
        padding: 0 1em;
        height: 40px;
        line-height: 40px;
        &.active{
            color: #409eff;
            border-bottom: 1px solid #409eff;
            
            i{
                color: #409eff;
            }
        }
        
    }
</style>

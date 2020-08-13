<template>
    <div class="xf-tab-item" :class="{active:actived,disabled:disabled}" :style="{color:actived&&activedcolor?activedcolor:null}" @click="notify">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        name:{
            type:String|Number
        },
        disabled:{
            type:Boolean
        }
    },
    data(){
        return {
            actived:false,
            activedcolor:null
        }
    },
    inject:['eventBus'],
    created () {
        this.eventBus &&　this.eventBus.$on('updata:selected',(name)=>{
            this.actived = name === this.name
            this.actived　&& this.eventBus.$emit('updata:activeline',this)
        })
        this.eventBus &&　this.eventBus.$on('updata:activecolor',(activecolor)=>{
            this.activedcolor = activecolor
        })
    },
    methods: {
        notify(){
            if(this.disabled){
                return
            }
            this.eventBus.$emit('updata:selected',this.name)
        }
    }
}
</script>
<style lang='scss' scoped>
    .xf-tab-item{
        padding: 0 0.5em;
        height: 40px;
        line-height: 40px;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        cursor: pointer;
        user-select: none;
        &.active{
            color: #409eff;
        }
        &.disabled{
            color: #ccc!important;
            cursor:not-allowed;
        }
    }
</style>

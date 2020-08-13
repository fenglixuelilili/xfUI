<template>
    <div class="xf-tab-pane" v-if="actived">
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
}
</script>
<style lang='scss' scoped>
    .xf-tab-pane{
        // padding: 0.5em;
        // background-color: 
    }
</style>


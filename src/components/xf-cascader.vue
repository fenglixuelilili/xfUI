<template>
    <div class="xf-cascader">
        <div class="trigger" @click="visable = !visable">
            点击触发
             <div class="cascader" v-if="visable" @click.stop>
                <xfCascaderItem :options='options'></xfCascaderItem>
            </div>
        </div>
       
    </div>
</template>
<script>
import xfCascaderItem from "./xf-cascader-item"
export default {
    components: {
        xfCascaderItem
    },
    props: {
        options:{
            type:Array,
            require:true
        }
    },
    data () {
        return {
            visable:false
        }
    }
}
</script>
<style lang='scss' scoped>
.xf-cascader{
    
    .trigger{
        position: relative;
        border: 1px solid #ccc;
        display: inline-flex;
        font-size: 14px;
        padding: 5px;
        cursor: pointer;
    }
    .cascader{
        
        box-shadow: 0 0  18px 0 rgba(0,0,0,.2);
        padding: 10px 0;
        position: absolute;
        top:110%;
        left: 0;
        background-color: #fff;
        border-radius: 8px;

    }
}
</style>


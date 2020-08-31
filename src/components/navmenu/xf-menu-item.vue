<template>
    <div class="xf-menu-item" :class="{active:root.active == index}" @click="notify">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'xf-menu-item',
    props: {
        index:{
            type: String | Number,
            default: null
        },
    },
    inject:['root'],
    data(){
        return {
            _$parent:null
        }
    },
    methods: {
        notify(){
            if(this.$parent.$options.name == 'xf-submenu'){
                this._$parent = this.$parent
                this.$parent.show()
                this.$parent.hideabsolute()
            }else{
                this.root.$children.forEach(vm=>{
                    if(vm.$options.name == 'xf-submenu'){
                        vm.hide()
                    }
                })
            }
            this.root.changeActive(this.index)
            
        }
    }
}
</script>
<style lang='scss' scoped>
.xf-menu-item{
    user-select: none;
    cursor: pointer;
    position: relative;
    white-space:nowrap;
    &::before{
        transition: all 0.5s;
        content: '';
        position: absolute;
        border-bottom:2px solid #409eff;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 0;
    }
    &.active::before{
        opacity: 1;
    }
}

</style>

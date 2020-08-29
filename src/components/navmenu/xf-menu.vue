<template>
    <div class="xf-menu">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'xf-menu',
    props: {
        defaultActive:{
            type:String | Number
        },
    },
    provide(){
        return {
            root:this
        }
    },
    data(){
        return {
            active:''
        }
    },
    methods: {
      changeActive(active){
          this.active = active
      }  
    },
    created () {
        if(this.defaultActive){
            this.active = this.defaultActive
        }
    }
}
</script>
<style lang='scss' scoped>
.xf-menu{
    user-select: none;
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    .xf-menu-item{
        padding: 0 20px;
    }
}
</style>

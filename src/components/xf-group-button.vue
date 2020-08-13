<template>
    <div class="xf-group-button">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted () {
        // this.$children 是vue的全部子组件
        // this.$el.children 是当前元素的children
        let nodearr = Array.from(this.$el.children)
        nodearr.forEach(node =>{
            if(node.nodeName.toUpperCase()!='BUTTON'){
                console.error(`xf-group-button组件中应该全部是xf-button组件，检测到有${node.nodeName}的存在`)
            }
        })
    }
}
</script>
<style lang='scss' scoped>
    .xf-group-button{
        display: inline-flex;
        .xf-button {
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-index: 10;
            }
        }
    }
</style>



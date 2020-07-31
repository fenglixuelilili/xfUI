<template>
    <div class="xf-tab-head">
        <slot></slot>
        <div class="slide-waper">
            <slot name='slide'></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
    .xf-tab-head{
        display: flex;
        // border: 1px solid #ccc;
        .slide-waper{
            margin-left: auto;
        }
    }
</style>


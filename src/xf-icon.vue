<template>
    <i :class="'iconfont ' + icon" class="icon">
    </i>
</template>
<script>
import "./comment/icon.css"
export default {
    props: ['icon']
}
</script>
<style lang='scss' scoped>
    .icon{
        font-size: 1em;
        color: var(--color);
    }
</style>


<template>
    <colgroup>
        <col v-if="checkbox" width='80px'>
        <col  :width="item.width?item.width+'px':null" v-for="(item,index) in colums" :key='index'>
    </colgroup>
</template>
<script>
export default {
    props: ['checkbox','colums']
}
</script>


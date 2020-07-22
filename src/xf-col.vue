<template>
    <div class="col" :class="varNum" :style="Padding">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        span:{
            type: String | Number
        },
        offset:{
            type: String | Number
        },
        // gutter:{
        //      type: String | Number
        // }
    },
    data () {
        return {
            gutter:0
        }
    },
    // inject:['gutter'],
    computed: {
        varNum(){
            return ['col-' + this.span,'marginLeft-' + this.offset]
        },
        Padding(){
            return {
                paddingLeft:this.gutter/2 + 'px',
                paddingRight:this.gutter/2 + 'px',
            }
        }
    },
    
}
</script>

<style lang='scss' scoped>
    .col{
        // 默认宽度50%
        width: 50%;
        $classProfix:col-;
        @for $n from 1 through 24{
            &.#{$classProfix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $classProfix:marginLeft-;
        @for $n from 1 through 24{
            &.#{$classProfix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
</style>

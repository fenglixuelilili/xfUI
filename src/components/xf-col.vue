<template>
    <div class="col" :class="varNum" :style="Padding">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        offset:{
            type: String | Number
        },
        span:{
            type: String | Number
        },
        sm:{
            type:String|Number
        },
        md:{
            type:String|Number
        },
        lg:{
            type:String|Number
        },
        xl:{
            type:String|Number
        }
    },
    data () {
        return {
            gutter:0
        }
    },
    // inject:['gutter'],
    computed: {
        varNum(){
            return [this.span && 'col-' + this.span,
                this.offset&&'marginLeft-' + this.offset,
                
                this.sm&&'col-sm-' + this.sm,
                this.md&&'col-md-' + this.md,
                this.lg&&'col-lg-' + this.lg,
                this.xl&&'col-xl-' + this.xl
            ]
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
        @media screen and (min-width:576px)  {
            $classProfix:col-sm-;
            @for $n from 1 through 24{
                &.#{$classProfix}#{$n}{
                    width: ($n/24) * 100%;
                }
            }
        }
        @media screen and (min-width:768px)  {
            $classProfix:col-md-;
            @for $n from 1 through 24{
                &.#{$classProfix}#{$n}{
                    width: ($n/24) * 100%;
                }
            }
        }
        @media screen and (min-width:992px)  {
            $classProfix:col-lg-;
            @for $n from 1 through 24{
                &.#{$classProfix}#{$n}{
                    width: ($n/24) * 100%;
                }
            }
        }
        @media screen and (min-width:1200px)  {
            $classProfix:col-xl-;
            @for $n from 1 through 24{
                &.#{$classProfix}#{$n}{
                    width: ($n/24) * 100%;
                }
            }
        }

       
    }
</style>

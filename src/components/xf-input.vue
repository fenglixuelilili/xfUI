<template>
    <div class="xf-input">
        <input type="text" 
        :value="value" 
        class="xfinput" 
        :disabled='disabled' 
        :readonly='readonly'
        @input="(e)=>{$emit('input',e.target.value)}"
        @change="$emit('change')"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        >
        <template v-if="error">
            <xf-icon icon='icon-cuowu' class="iconError"></xf-icon>
            <span class="tip">{{error}}</span>
        </template>
    </div>
</template>
<script>
export default {
    name:'xfInput',
    props: {
        value:{
            type:String|Number,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang='scss' scoped>
$button-height:32px;
$input-height:28px;
$font-size:14px;
$tip-font-size:12px;
$button-bg:white;
$button-active-bg:#eee;
$border-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;
.xf-input{
    display: inline-block;
    align-items: center;
    font-size: $font-size;
    justify-content: flex-start;
    .xfinput{
        outline: none;
        border: 1px solid $border-color;
        color: $color;
        height: $input-height;
        padding-left: 10px;
        font-size: inherit;
        border-radius: $border-radius;
        &:hover{
            border: 1px solid $border-color-hover;
        }
        &:focus{
            // box-shadow: 0 0 1px #c2c2c2;
            box-shadow: inset 1px 0px 3px #999;
        }
        &[disabled]{
            background-color: $button-active-bg;
            cursor:not-allowed;
            user-select: none;
        }
        &[readonly]{
            background-color: $button-bg;
            cursor:not-allowed;
        }
        &[readonly]:focus{
            box-shadow: inset 0px 0px 0px #fff;
            border: 1px solid $border-color-hover;
        }
    }
    .iconError{
        color: red;
        font-size: $tip-font-size;
    }
    .tip{
        color: red;
        font-size: $tip-font-size;
    }
}
</style>


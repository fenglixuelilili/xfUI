<template>
    <button class="xf-button" @click="$emit('click')">
        <xf-icon :icon='icon' v-if="icon&&!loading" class="iconFont" :class="{[position]:true}"></xf-icon>
        <xf-icon icon='icon-jiazaizhong' v-if="loading" class="iconFont loading" :class="{[position]:true}"></xf-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props: {
        icon:{
            type:String
        },
        loading:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'left',
            validator(value){
                return value==='left' || value==='right'
            }
        }
    }
}
</script>
<style lang='scss' scoped>
@keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
$--font-size:12px;
$--button-height:30px;
$color:#3eaf7c;
.xf-button{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: $--font-size;
    height: --button-height;
    background-color: $color;
    line-height: $--button-height;
    color: #fff;
    padding: 0 1em;
    border-radius: 5px;
    // color: #0e0e0e;
    border: 0 none;
    &:hover{
        border-color: $color;
        background-color: red;
        // color: #fff;
        color: red;
    }
    &:active{
        // background-color: $color;
        border-color: $color;
        color: #fff;
        color: red;
    }
    &:focus{
        outline: none;
        
    }
    .left{
        margin-right: 0.5em;
        order: 1;
    }
    .right{
        margin-left: 0.5em;
        order: 2;
    }
    .content{
        order: 1;
        color: #fff;
    }
    >.loading{
        animation: spin 1s infinite linear;
    }
}
</style>

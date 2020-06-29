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
.xf-button{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: var(--font-size);
    height: var(--button-height);
    background-color: var(--button-bg);
    line-height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    color: var(--color);
    border: 1px solid var(--border-color);
    &:hover{
        border-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
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
    }
    >.loading{
        animation: spin 1s infinite linear;
    }
}
</style>

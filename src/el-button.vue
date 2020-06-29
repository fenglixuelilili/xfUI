<template>
    <button class="el-button">
        <el-icon :icon='icon' v-if="icon" class="iconFont" :class="{[position]:true}"></el-icon>
        <el-icon icon='icon-jiazaizhong' v-if="icon" class="iconFont loading" :class="{[position]:true}"></el-icon>
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
.el-button{
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
    color: --color;
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

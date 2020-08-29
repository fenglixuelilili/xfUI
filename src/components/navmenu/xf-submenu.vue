<template>
    <div class="xf-submenu">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="menu_contetnt_warper">
            <div class="menu_contetnt">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'xf-submenu',
    props: {
        index:{
            type:String | Number,
            default:null
        },
        
    },

}
</script>
<style lang='scss' scoped>
.xf-submenu{
    cursor: pointer;
    user-select: none;
    position: relative;
    .title{
        padding: 0 20px;
    }
    .menu_contetnt_warper{
        position: absolute;
        left: 0;
        top:calc(100% + 2px);
        z-index: 100;
        // min-width: 200px;
        background-color: #fff;
        padding: 0;
        box-shadow: 0 0 18px fade-out( #000000,0.9);
        border-radius: 5px;
        .xf-menu-item{
            text-align: center;
            height: 30px;
            line-height: 30px;
            font-size: 13px;
            width: 100%;
            &::before{
                transition: all 0.5s;
                content: '';
                position: absolute;
                border-bottom:0 none;
                bottom: 0;
                left: 0;
                width: 100%;
                opacity: 0;
            }
            &.active::before{
                opacity: 0;
            }
        }
        .xf-menu-item:hover{
            background-color: rgba(0,0,0,.1);
        }
    }
}
</style>

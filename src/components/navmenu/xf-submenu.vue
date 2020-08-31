<template>
    <div class="xf-submenu" @mouseover="visable = true" @mouseleave="visable = false">
        <div class="title" :class="{active:isActive}" >
            <slot name="title"></slot>
        </div>
        <transition
            name="submenu"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:after-enter='afterEnter'
            v-on:before-leave="beforeLeave"
            >
            <div class="menu_contetnt_warper" v-show='visable'>
                <div class="menu_contetnt">
                    <slot></slot>
                </div>
            </div>
        </transition>
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
    data () {
        return {
            visable:false,
            isActive:false,
            height:0,
            end:false
        }
    },
    methods: {
        isSelf(){
            return this.$parent &&　this.$parent.$options.name == 'xf-submenu'
        },
        _hide(){
            if(this.isSelf()){
                this.visable = false
            }
            
        },
        show(){
            this.isActive = true
            if(this.isSelf()){
                this.$parent.show()
            }
        },
        show2(){
            if(this.visable){
                this.visable = false
            }else{
                this.visable = true
            }
        },
        hide(){
            this.isActive = false
            this.visable = false
            if(this.isSelf()){
                this.$parent.hide()
            }
        },
        hideabsolute(){
            this.visable = false
            if(this.isSelf()){
                this.$parent.hideabsolute()
            }
        },
        beforeEnter(el){
            el.style.height = 0
        },
        enter(el,done){
                el.style.height = 'auto'
                const {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = height + 'px'
                function fnenter(){
                    el.removeEventListener('transitionend',fnenter.bind(this))
                    done()
                }
                 el.addEventListener('transitionend',fnenter.bind(this))
        },
        afterEnter(el){
            el.style.overflow = 'visible'
        },
        beforeLeave(el){
            el.style.overflow = 'hidden'
        },
        leave(el,done){
            el.style.height = 0
            function fnleave(){
                done()
            }
            el.addEventListener('transitionend',fnleave.bind(this))
        }
    }

}
</script>
<style lang='scss' scoped>
.xf-submenu{
    cursor: pointer;
    user-select: none;
    position: relative;
    .title{
        padding: 0 20px;
        white-space:nowrap;
    }
    .title::before{
        transition: all 0.5s;
        content: '';
        position: absolute;
        border-bottom:2px solid #409eff;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 0;
    }
    .title.active::before{
        opacity: 1;
    }
    .menu_contetnt_warper{
        overflow: hidden;
        transition: all 0.4s;
        position: absolute;
        left: 0;
        top:calc(100% + 2px);
        z-index: 100;
        background-color: #fff;
        padding: 0;
        box-shadow: 0 0 18px fade-out( #000000,0.9);
        border-radius: 5px;
        /deep/ .xf-menu-item{
            text-align: center;
            text-align: left;
            height: 30px;
            line-height: 30px;
            font-size: 13px;
            width: 100%;
            white-space:nowrap;
            padding: 0 10px;
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
        /deep/ .xf-menu-item:hover{
            background-color: rgba(0,0,0,.1);
        }
    }
}
.xf-submenu .xf-submenu{
     height: 30px;
     line-height: 30px;
     text-align: center;
     font-size: 12px;
     text-align: left;
     .title{
         text-align: left;
         padding: 0 10px;
     }
     .title::before{
        opacity: 0;

    }
    .xf-menu-item{
        text-align: left;
    }
    .title.active::before{
        opacity: 0;
    }

     .menu_contetnt_warper{
            overflow: hidden;
            transition: all 0.3s;
            position: absolute;
            left: calc(100% + 6px);
            top:0;
            z-index: 100;
            background-color: #fff;
            padding: 0;
            box-shadow: 0 0 18px fade-out( #000000,0.9);
            border-radius: 5px;
     }
}
.xf-submenu .xf-submenu:hover{
    background-color: rgba(0,0,0,.05);

}
</style>

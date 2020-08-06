<template>
    <div class="CollapseItem">
        <div class="collapse-waper">
            <div class="title" @click="triggerShow">
                <span>{{title}}</span>
                <span class="icon">
                    <xf-icon icon='icon-youjiantou2'></xf-icon>
                </span>
            </div>
            <!-- 内容 -->
            <div class="content" v-if="visable">
                <slot><slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CollapseItem',
    props: {
        title:{
            type:String,
            require:true
        },
        name:{
            type:String|String,
        }
    },
    data(){
        return {
            visable:false
        }
    },
    inject:['gobalbus'],
    methods: {
        triggerShow(){
            if(this.visable){
                this.gobalbus.$emit('updata:triggerHide',this)
            }else{
                this.gobalbus.$emit('updata:triggerShow',this)
            }
        },
        hide(){
            this.visable = false
        },
        show(){
            this.visable = true
        }
    },
}
</script>
<style lang='scss' scoped>
$titleHeight:40px;
$collcolor:#ebebeb;
$fontSize:14px;
$cont_fontSize:13px;
.CollapseItem{
    font-size: $fontSize;
    .collapse-waper{
        border-top: 1px solid $collcolor;
        .title{
            height: $titleHeight;
            line-height: $titleHeight;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .icon{
                font-size: 14px;
                color: #ccc;
            }
        }
        .content{
            padding: 20px 0; 
            padding-top:10px;
            font-size: $cont_fontSize;
            line-height: 25px;

        }
    }
}
.CollapseItem:last-child{
    .content{
        padding-bottom:0px;
    }
}
</style>


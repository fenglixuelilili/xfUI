<template>
    <div class="xf-cascader">
        <div class="left" :style="{minWidth:cwidth}" :class="{borderLeft:leval!=0}">
            <div class="item" v-for="(item,i) in options" :key='i' @click="selected = item" >
                <span>{{item.label}}</span>
                <i class="iconfont icon-youjiantou2" v-if="item.children"></i>
            </div>
        </div>
        <div class="right">
            <xfCascaderItem :options='selectedRender' :leval='leval+1' v-if="selectedRender&&selectedRender.length"></xfCascaderItem>
        </div>
    </div>
</template>
<script>
export default {
    name:'xfCascaderItem',
    props: {
        options:{
            type:Array,
            require:true
        },
        leval:{
             type:Number,
             default:0
        }
    },
    data () {
        return {
            selected:null
        }
    },
    computed: {
        selectedRender(){
            if(this.selected &&　this.selected.children){
                return this.selected.children
            }
        },
        cwidth(){
            let text = 0
            let reg = /([a-zA-Z]+)/g
            this.options.forEach(item=>{
                let arr = reg.exec(item.label)
                let len = 0
                if(arr){
                    arr.forEach(item=>{
                        len += item.length * 0.5
                    })
                }
                let result = item.label
                result = result.replace(reg,'')
                if((result.length*20*2 + len*10)>text){
                   text =  result.length*20*2 + len*10*1.5
                }
            })
           return text + 'px'
        }
    }
}
</script>
<style lang='scss' scoped>

.borderLeft{
    border-left: 1px solid #e4e7ed;
}
.xf-cascader{
    display: inline-flex;
    align-items: flex-start;
    height: 300px;
    .left{
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        text-align: center;
        .item{
            margin-top: -1px;
            min-height: 30px;
            line-height: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            span{
                margin-right: 10px;
            }
            i{
                font-size: 12px;
            }
        }
        .item:last-child{
            margin-top: -1px;
        }
        .item:hover{
            background-color: rgba($color: #000000, $alpha: 0.1);
        }
    }
    .right{
        height: 100%;
    }
}
</style>


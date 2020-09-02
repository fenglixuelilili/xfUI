<template>
    <div class="pager">
        <div class="pre page" :class="{disable:current==1}" @click="change(current - 1)">
            <i class="iconfont icon-youjiantou2"></i>
        </div>
        <div class="page" 
            :class="{active:current == item,noborder:item === '...'}"  
            v-for="(item,index) in totalHtml" 
            @click="change(item)"
            :key='index'>
            <template v-if="item === '...'">....</template>
            <template v-else>{{item}}</template>
        </div>
        <div class="next page" :class="{disable:current==total}" @click="change(current + 1)">
            <i class="iconfont icon-youjiantou2"></i>
        </div>
        <div class="text">
            go
        </div>
        <div class="total">
            <input type="text" v-model="pageTp" @keydown="goPage($event)">
            <span>{{pageTp}}</span>
        </div>
        <div class="text">
            页
        </div>
        <div class="text">
            共{{total}}页
        </div>
    </div>
</template>
<script>
export default {
    props: {
        page:{
            type:Number,
            require:true
        },
        current:{
            type:Number,
            require:true
        },
        total:{
            type:Number,
            require:true
        }
    },
    data () {
        return {
            pageTp:''
        }
    },
    methods: {
        goPage(e){
            if(e.keyCode == 13){
                this.change(Number(e.target.value))
            }
        },
        change(item){
            if(!item || typeof item != 'number' || item>this.total || item < 1){
                throw new Error('页码不合法')
            }
            this.$emit('currentchange', item)
        },
        _filter(item,index){
            return item > 0 && item <= this.total
        },
        _reduce(pre,current,index){
            pre.push(current)
            if(this._reduce.arr[index+1] &&　this._reduce.arr[index+1]>this._reduce.arr[index] + 1){
                pre.push('...')
            }
            return pre
        },
        duplicate(arr){
            // 1.使用set去重
            // return  [...new Set(arr)]
            // 使用对象去重
            let obj = {}
            arr.forEach(item=>{
                obj[item] = true
            })
            return Object.keys(obj).map(str=>parseInt(str))
        }
    },
    computed: {
        totalHtml(){
            if(this.current > this.total || this.current < 1){
                throw new Error('当前页不合法')
            }
            let arr = [1,this.total,this.current,this.current+1,this.current+2,this.current-1,this.current-2]
            this._reduce.arr = this.duplicate(arr.sort((a,b)=>a-b).filter(this._filter))
            arr = this._reduce.arr.reduce(this._reduce,[])
            return arr
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../assets/const.scss';
.pager{
    display: flex;
    user-select: none;
    .page{
        min-width: 20px;
        padding: 0 6px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0,0,0,.2);
        font-size: 13px;
        border-radius: 4px;
        margin: 0 4px;
        cursor: pointer;
        color: #666;
    }
    .page:hover{
        color: $activecolor;
        border:1px solid $activecolor;
    }
    .active{
        color: $activecolor;
        border:1px solid $activecolor;
    }
    .noborder{
        color: #666;
        border:0 none;
    }
    .noborder:hover{
         color: #666;
        border:0 none;
    }
    .pre i,.next i{
        font-size: 10px;
        color: #666;
    }
    .pre:hover,.next:hover{
        color: #666;
        border: 1px solid rgba(0,0,0,.2);
    }
    .pre i{
        transform: rotateZ(180deg);
    }
    .disable{
        background-color: rgba(0,0,0,.05);
        color: #fff;
        cursor:not-allowed;
        i{
            color: #ccc;
        }
    }
    .total{
        min-width: 30px;
        margin-left: 10px;
        font-size: 14px;
        position: relative;
        text-align: right;
        span{
            opacity: 0;
        }
        input{
            position: absolute;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0,0,0,.2);
            padding: 0 6px;
            height: 20px;
            border-radius: 4px;
            outline: none;
            font-size: 13px;
            text-align: center;
            z-index: 1000;
        }
    }
    .text{
        margin-left: 8px;
        font-size: 14px;
    }
}
</style>

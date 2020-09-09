<template>
    <div class="table">
        <div class="tHead" :class="{border}" ref="tHead">
             <table class="mytable" >
                 <table-colgroup :checkbox='checkbox' :colums='mycolums' :isScopedSlot='isScopedSlot'></table-colgroup>
                 <thead>
                     <tr class="thead">
                        <th v-if="checkbox" class="checkbox">
                            <input type="checkbox" @click="selectAll($event)" :checked='selected.length == dataSource.length' ref='checkboxAll'>
                        </th>
                        <th v-for="(item,index) in mycolums" :key='index' >
                            <!-- :style="{width:item.width?item.width+'px':null}" -->
                            <span class="title">
                                {{item.title}}
                                <template v-if="item.sort">
                                    <span class="up" @click="sort('up')"></span>
                                    <span class="down" @click="sort('down')"></span>
                                </template>
                            </span>
                        </th>
                        <th v-if="isScopedSlot">操作</th>
                    </tr>
                 </thead>
            </table>
        </div>
       <div class="tbody" :class="{border}" :style="table_height?`height:${table_height}px;overflow-y:scroll`:null" >
           <table class="mytable">
                <table-colgroup :checkbox='checkbox' :colums='mycolums' :isScopedSlot='isScopedSlot'></table-colgroup>
                <tbody>
                    <tr class="tcontent"  v-for="(item,index) in dataSource" :key='index'>
                        <td class="checkbox" v-if="checkbox"><input type="checkbox" @click="select($event,item)" :checked='selected.indexOf(item)>=0'></td>
                        <td v-for="(col,index) in mycolums" :key='index' >{{item[col.dataIndex]}}</td>
                        <td v-if="isScopedSlot">
                            <slot ></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>
    </div>
</template>
<script>
import tableColgroup from "./tableColgroup"
export default {
    components: {
        tableColgroup  
    },
    props: {
        dataSource:{
            type:Array,
            require:true
        },
        colums:{
            type:Array,
            require:true
        },
        border:{
            type:Boolean,
            default:true
        },
        checkbox:{
            type:Boolean,
            default:false
        },
        height:{
            type:Boolean|String,
            default:false
        }
    },
    data(){
        return {
            selected:[],
            table_height:0,
            mycolums:[]
        }
    },
    methods: {
        getHeaght(){
            if(!this.height) return false
            this.$nextTick(()=>{
                const {offsetHeight} = this.$refs['tHead']
                this.table_height = Number(this.height) - offsetHeight
            })
        },
        sort(type){
            this.$emit('sort',type)
        },
        selectAll(e){
            if(e.target.checked){
                this.selected = []
                this.dataSource.forEach(item=>{
                    this.selected.push(item)
                })
            }else{
                this.selected = []
            }
            this.$emit('changebox',this.selected)
        },
        select(e,item){
            if(e.target.checked){
                this.selected.push(item)
            }else{
                this.selected.indexOf(item)>=0 && this.selected.splice(this.selected.indexOf(item),1)
            }
            this.$emit('changebox',this.selected)
        }
    },
    computed: {
        isScopedSlot(){
            return this.$scopedSlots.default
        }
    },
    mounted () {
        this.getHeaght()
        if(!this.colums.find(item=>!item.width) ){
            // 宽度都写了
            this.mycolums = this.colums.map((item,index)=>{
                if(index == this.colums.length-1 && !this.isScopedSlot){
                    delete item.width
                }
                return item
            })
        }else{
            // 有宽度没写
            this.mycolums = this.colums

        }
    },
    watch: {
        selected(val){
            if(val.length == this.dataSource.length){
                this.$refs.checkboxAll.indeterminate = false
            }else if(val.length == 0){
                this.$refs.checkboxAll.indeterminate = false
            }else{
                this.$refs.checkboxAll.indeterminate = true
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.mytable{
    user-select: none;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    tr{
        td,th{
            padding: 10px;
            font-size: 14px;
            border-bottom: 1px solid fade-out(#eee,0.1);
        }
        td.checkbox,th.checkbox{
            text-align: center;
            // width: 80px;
            input{
                width: 15px;
                height: 15px;
                background-color: #fff;
                border: 1px solid #ccc;
            }
        }
    }
    .thead{
        // background-color: rgba(0, 0, 0, 0.04);
        color:#909399;
        td,th{
            // height: 80px;
            // line-height: 80px;
            font-size: 17px;
            font-weight: 800;
            border-right: 1px solid fade-out(#eee,0.1);
            // border-left: 1px solid fade-out(#eee,0.1);
            .title{
                position: relative;
                .up,.down{
                    position: absolute;
                    right: -18px;
                    top:-18px;
                    bottom: 0;
                    margin: auto 0;
                    border: 8px solid #ccc;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid transparent;
                    width: 0;
                    height: 0;
                    cursor: pointer;
                }
                .up:active{
                    border: 8px solid #666;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid transparent;
                }
                .down:active{
                     border: 8px solid #666;
                    border-bottom: 8px solid transparent;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                }
                .down{
                    border: 8px solid #ccc;
                    border-bottom: 8px solid transparent;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    top:18px;
                }
            }  
        }
        th:last-child{
            // border-right:  0 none;
        }
    }
    .tcontent:nth-child(2n){
        background-color: rgba(0,0,0,.03);
    }
    .tcontent:hover{
        background-color: rgba(0,0,0,.06);
    }
}
.border{
    //  border: 1px solid darken(#eee,10%);
     table{
        tr{
            td,th{
                border: 1px solid #eee;
            }
        }
     }
}
// .border:first-child{
//     border-bottom: 0 none;
// }
.border:nth-child(2){
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    border-top: 0 none;
    table{
        tr:first-child{
            td{
                border-top: 0 none;
            }
        }
    }
}

</style>


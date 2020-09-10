<template>
    <div class="table">
        <div class="tHead" :class="{border}" ref="tHead">
             <table class="mytable" >
                 <table-colgroup :checkbox='checkbox' :colums='mycolums'></table-colgroup>
                 <thead>
                     <tr class="thead">
                        <th v-if="checkbox" class="checkbox">
                            <input type="checkbox" @click="selectAll($event)" :checked='selected.length == dataSource.length' ref='checkboxAll'>
                        </th>
                        <th v-for="(item,index) in mycolums" :key='index'>
                            <span class="title">
                                {{item.title}}
                                <template v-if="item.sort">
                                    <span class="up" @click="sort('up')"></span>
                                    <span class="down" @click="sort('down')"></span>
                                </template>
                            </span>
                        </th>
                    </tr>
                 </thead>
            </table>
        </div>
       <div class="tbody" :class="{border}" :style="table_height?`height:${table_height}px;overflow-y:scroll`:null" >
           <table class="mytable">
                <table-colgroup :checkbox='checkbox' :colums='mycolums'></table-colgroup>
                <tbody>
                    <tr class="tcontent"  v-for="(item,index) in dataSource" :key='index'>
                        <td class="checkbox" v-if="checkbox"><input type="checkbox" @click="select($event,item)" :checked='selected.indexOf(item)>=0'></td>
                        <td v-for="(col,index) in mycolums" :key='index' >
                            <template v-if="!col.render">
                                {{item[col.dataIndex]}}
                            </template>
                            <template v-else>
                                <Vnodes :vnodes='col.render({row:item})'></Vnodes>
                            </template>
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
        tableColgroup,
        Vnodes:{
            functional:true,
            render:(h,ctx) => ctx.props.vnodes
        }
    },
    props: {
        dataSource:{
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
        initmyColunm(){
            Array.from(this.$slots.default).forEach(vnode=>{
                const {label,prop,width,sort} = vnode.data.attrs
                const render = vnode.data.scopedSlots?vnode.data.scopedSlots.default:null
                let obj = {
                    title: label,
                    dataIndex: prop,
                    key: prop,
                    sort,
                    width,
                    render
                }
                this.mycolums.push(obj)
            })
            this.getHeaght()
            if(!this.mycolums.find(item=>!item.width) ){
                // 宽度都写了
                this.mycolums = this.mycolums.map((item,index)=>{
                    if(index == this.mycolums.length-1){
                        delete item.width
                    }
                    return item
                })
            }
            console.log(this.mycolums)
        },
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
    mounted () {
        this.initmyColunm()
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
        color:#909399;
        td,th{
            font-size: 17px;
            font-weight: 800;
            border-right: 1px solid fade-out(#eee,0.1);
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
    }
    .tcontent:nth-child(2n){
        background-color: rgba(0,0,0,.03);
    }
    .tcontent:hover{
        background-color: rgba(0,0,0,.06);
    }
}
.border{
     table{
        tr{
            td,th{
                border: 1px solid #eee;
            }
        }
     }
}
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


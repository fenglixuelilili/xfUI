<template>
    <div class="xf-cascader">
        <div class="trigger" @click="visable = !visable">
            {{text?text:'点击选择'}}
             <div class="cascader" v-if="visable" @click.stop>
                <xfCascaderItem 
                :props='props'
                :selected='selected'
                :options='options'
                @updata:leval='updatalevaldata'
                ></xfCascaderItem>
            </div>
        </div>
    </div>
</template>
<script>
import xfCascaderItem from "./xf-cascader-item"
export default {
    components: {
        xfCascaderItem
    },
    props: {
        options:{
            type:Array,
            require:true
        },
        selected:{
            type:Array,
            require:true
        },
        props:{
            type:Object,
            default:function(){
                return {
                     label:'label',
                    value:'value',
                    children:'children'
                }
            }
        }

    },
    computed: {
      text(){
          console.log(this.props.label)
          return this.selected.map(item=>item[this.props.label]).join('/')
      }  
    },
    data () {
        return {
            visable:false
        }
    },
    methods: {
        updatalevaldata({leval,value,last}){
            this.$emit('update:selected',[])
            let selected = this.selected
            selected[leval] = value
            if(leval === 0){
                 selected.splice(1)
            }
            this.$emit('update:selected',JSON.parse(JSON.stringify(selected)))
            this.$emit('change',selected)
            // last 是不是最后一层 最后一层则关闭弹框
            this.visable = !last
        }
    }
}
</script>
<style lang='scss' scoped>
.xf-cascader{
    
    .trigger{
        border-radius: 5px;
        min-width:50px; 
        line-height: 20px;
        text-align: center;
        position: relative;
        border: 1px solid #ccc;
        display: inline-flex;
        font-size: 14px;
        padding: 5px;
        cursor: pointer;
    }
    .cascader{
        
        box-shadow: 0 0  18px 0 rgba(0,0,0,.2);
        padding: 10px 0;
        position: absolute;
        top:110%;
        left: 0;
        background-color: #fff;
        border-radius: 8px;

    }
}
</style>


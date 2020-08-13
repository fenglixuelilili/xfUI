<template>
    <div class="xf-tab">
        <slot></slot>
    </div>
</template>
<script>
import Vue from "vue"
let eventBus = new Vue()
export default {
    props: {
        selected:{
            type:String|Number
        },
        // 方向
        direction:{
            type:String,
            default:'horizontal',
            valitore(value){
                return ['horizontal','vertical'].indexOf(value)>=0
            }
        },
        activedcolor:{
            type:String
        }
    },
    data () {
        return {
            eventBus_:eventBus,
        }
    },
    provide(){
        return {
            eventBus:eventBus
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.eventBus_.$emit('updata:selected',this.selected)
            this.eventBus_.$emit('updata:activecolor',this.activedcolor)
        })
    }
}
</script>

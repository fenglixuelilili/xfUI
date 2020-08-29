<template>
    <div class="Collapse">
        <slot ></slot>
    </div>
</template>
<script>
import Vue from "vue"
const gobalbus = new Vue()
export default {
    props: {
        accordion:{
            type:Boolean
        },
        value:{
            type:Array
        }
    },
    provide(){
        return {
            gobalbus:gobalbus
        }
    },
    data(){
        return{
            gobalbus:gobalbus
        }
    },
    methods: {
        selfEmit(arr){
            this.$emit('input',arr)
            this.$emit('change',arr)
        },
        $on_triggerShow(){
            gobalbus.$on('updata:triggerShow',(thisvm)=>{
                let arr = this.value
                this.$children.forEach(vm=>{
                    if(this.accordion){
                        arr = []
                    }
                    if(this.accordion &&　vm.$options.name === 'CollapseItem'){
                        vm.hide()
                    }
                })
                thisvm.show()
                
                arr.push(thisvm.name)
                this.selfEmit(arr)
            })
        },
        $on_triggerHide(){
            gobalbus.$on('updata:triggerHide',(thisvm)=>{
                thisvm.hide()
                let arr = this.value.filter(item=>item!=thisvm.name)
                this.selfEmit(arr)
            })
        },
        initShow(){
            this.$children.forEach(vm=>{
                if(this.value.includes(vm.name)){
                    vm.show()
                }
            })
        }
    },
    mounted ()  {
        this.$nextTick(()=>{
            this.$on_triggerShow()
            this.$on_triggerHide()
            this.initShow()
        })
    }
}
</script>
<style lang='scss' scoped>
$padding:20px;
$collcolor:#ebebeb;
.Collapse{
    border: 1px solid $collcolor;
    padding:$padding;
    border-radius: 3px;
    background-color: #fff;
}
</style>


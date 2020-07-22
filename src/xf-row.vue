<template>
    <div class="row" :style="Margin">
         <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['gutter'],
    // project:[]
    // provide:{
    //     gutter:this.gutter
    // },
    mounted () {
      this.$children.forEach(vm=>{
          vm.gutter = this.gutter
      })  
    },
    computed: {
        Margin(){
            return {
                marginLeft:-this.gutter/2 + 'px',
                marginRight:-this.gutter/2 + 'px'
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.row{
    display: flex;
}
</style>

<template>
    <div class="row" :style="Margin" >
         <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        gutter:{

        },
        align:{
            type:String,
            validator(value){
                return ['start','center','end'].includes(value)
            }
        },
        

    },
    // project:[]
    // provide:{
    //     gutter:this.gutter
    // },
    mounted () {
      this.$children.forEach(vm=>{
          vm.gutter = this.gutter
      })  
    },
    methods: {
      sin(value){
          if(!value){
              return ''
          }
          let treuarr =  ['start','center','end']
          let arr = ['flex-start','center','flex-end']
          let val = ''
          switch (value){
                case treuarr[0]:
                   val = arr[0]
                break;
                case treuarr[1]:
                   val = arr[1]
                break;
                case treuarr[2]:
                   val = arr[2]
                break;
          }
          return val
      }
    },
    computed: {
        Margin(){
            return {
                marginLeft:-this.gutter/2 + 'px',
                marginRight:-this.gutter/2 + 'px',
                justifyContent:this.sin(this.align)
            }
        }
    }
}
</script>
<style lang='scss' scoped>
.row{
    display: flex;
    flex-wrap: wrap;

}
</style>

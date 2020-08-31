import Vue from "vue";
let callback = []
// / 注册一个全局自定义指令 `v-focus`
document.addEventListener('click',function(e){
    callback.forEach(item=>{
        if(item.el == e.target ||　item.el.contains(e.target)){
            
        }else{
            // 调用close
            item.callback()
        }
    })
})

Vue.directive('cascader', {
  bind: function (el,binding,vnode) {
    // 聚焦元素
    callback.push({
        el,
        callback:()=>{
            binding.value()
        }
    })
  }
})
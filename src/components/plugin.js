import Toast from "./Toast.vue"
let singToast = null
export default {
    install(Vue,options){
        Vue.prototype.$Toast = function(msesage,props){
            if(singToast){
                singToast.close()
            }
            singToast = createdToast(Vue,msesage,props,()=>{
                singToast = null
            })
        }
    }
}
function createdToast(Vue,msesage,props,callback){
    let MyTost = Vue.extend(Toast)
    let tost = new MyTost({
        propsData:props
    })
    tost.$slots.default = [msesage]
    tost.$on('destroy',callback)
    tost.$mount()
    document.body.appendChild(tost.$el)
    return tost
}
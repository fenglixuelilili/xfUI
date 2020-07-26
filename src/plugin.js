import Toast from "./Toast.vue"
export default {
    install(vue,options){
        vue.prototype.$Toast = function(msesage,props){
            let MyTost = vue.extend(Toast)
            let tost = new MyTost({
                propsData:props
            })
            tost.$slots.default = [msesage]
            tost.$mount()
            document.body.appendChild(tost.$el)
        }
    }
}
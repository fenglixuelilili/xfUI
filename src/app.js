import Vue from "vue"
import xfButton from "./xf-button"
import xfIcon from "./xf-icon"
Vue.component('xf-button',xfButton)
Vue.component('xf-icon',xfIcon)
new Vue({
    el:'#app',
    data(){
        return {
            loading:false,
            loading2:false,
            loading3:false,
        }
    }
})
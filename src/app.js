import Vue from "vue"
import xfButton from "./xf-button"
import xfGroupButton from "./xf-group-button"
import xfIcon from "./xf-icon"
import xfInput from "./xf-input"
Vue.component('xf-button',xfButton)
Vue.component('xf-group-button',xfGroupButton)
Vue.component('xf-icon',xfIcon)
Vue.component('xf-input',xfInput)
new Vue({
    el:'#app',
    data(){
        return {
            loading:false,
            loading2:false,
            loading3:false,
            value:'我是value卡卡卡西'
        }
    },
    created(){
        setTimeout(() => {
            this.value = '卡卡西'
        }, 500);
    }
})
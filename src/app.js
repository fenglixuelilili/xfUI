import Vue from "vue"
import xfButton from "./xf-button"
import xfGroupButton from "./xf-group-button"
import xfIcon from "./xf-icon"
import xfInput from "./xf-input"
import xfCol from "./xf-col"
import xfRow from "./xf-row"
Vue.component('xf-button',xfButton)
Vue.component('xf-group-button',xfGroupButton)
Vue.component('xf-icon',xfIcon)
Vue.component('xf-input',xfInput)
Vue.component('xf-col',xfCol)
Vue.component('xf-row',xfRow)
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
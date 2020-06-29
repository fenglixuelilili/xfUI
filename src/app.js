import Vue from "vue"
import elButton from "./el-button"
import elIcon from "./el-icon"
Vue.component('el-button',elButton)
Vue.component('el-icon',elIcon)
new Vue({
    el:'#app'
})
import Vue from "vue"
import xfButton from "./xf-button"
import xfGroupButton from "./xf-group-button"
import xfIcon from "./xf-icon"
import xfInput from "./xf-input"
import xfCol from "./xf-col"
import xfRow from "./xf-row"

import xfContent from "./xf-content"
import xfFooter from "./xf-footer"
import xfHeader from "./xf-header"
import xfLayout from "./xf-layout"
import xfSlider from "./xf-slider"

import xfTab from "./tabs/xf-tab"
import xfTabBody from "./tabs/xf-tab-body"
import xfTabHead from "./tabs/xf-tab-head"
import xfTabItem from "./tabs/xf-tab-item"
import xfTabPane from "./tabs/xf-tab-pane"
import xfPopover from "./xf-popover"
import xfCollapse from "./xf-collapse"
import xfCollapseItem from "./xf-collapse-item"
import Toast from "./plugin.js"
Vue.use(Toast)

Vue.component('xf-button',xfButton)
Vue.component('xf-popover',xfPopover)
Vue.component('xf-group-button',xfGroupButton)
Vue.component('xf-icon',xfIcon)
Vue.component('xf-input',xfInput)
Vue.component('xf-col',xfCol)
Vue.component('xf-row',xfRow)

Vue.component('xf-content',xfContent)
Vue.component('xf-footer',xfFooter)
Vue.component('xf-header',xfHeader)
Vue.component('xf-layout',xfLayout)
Vue.component('xf-slider',xfSlider)

Vue.component('xf-tab',xfTab)
Vue.component('xf-tab-body',xfTabBody)
Vue.component('xf-tab-head',xfTabHead)
Vue.component('xf-tab-item',xfTabItem)
Vue.component('xf-tab-pane',xfTabPane)

Vue.component('xf-collapse',xfCollapse)
Vue.component('xf-collapse-item',xfCollapseItem)

new Vue({
    el:'#app2',
    data(){
        return {
            loading:false,
            loading2:false,
            loading3:false,
            value:'我是value卡卡卡西',
            title:'title2',
            activeNames:['1','4']
        }
    },
    methods:{
        handleChange(val) {
          console.log(val);
        },
        toast(index){
            if(index == 1){
                this.$Toast('我是我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒我是提醒提醒',{
                    autoClose:100
                })
            }
            if(index == 2){
                this.$Toast('测试通过！',{
                    position:'top',
                    closeButton:{
                        text:'确定'
                    }
                })
            }
            if(index == 3){
                this.$Toast('测试已经通过！',{
                    position:'bottom'
                })
            }
        }
    },
    created(){
        setTimeout(() => {
            this.value = '卡卡西'
        }, 500);
    }
})
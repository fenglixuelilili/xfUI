import Vue from 'vue'
import App from './App.vue'
import "./components/directives"
Vue.config.productionTip = false

import xfButton from "@/components/xf-button"
import xfGroupButton from "@/components/xf-group-button"
import xfIcon from "@/components/xf-icon"
import xfInput from "@/components/xf-input"
import xfCol from "@/components/xf-col"
import xfRow from "@/components/xf-row"

import xfContent from "@/components/xf-content"
import xfFooter from "@/components/xf-footer"
import xfHeader from "@/components/xf-header"
import xfLayout from "@/components/xf-layout"
import xfSlider from "@/components/xf-slider"

import xfTab from "@/components/tabs/xf-tab"
import xfTabBody from "@/components/tabs/xf-tab-body"
import xfTabHead from "@/components/tabs/xf-tab-head"
import xfTabItem from "@/components/tabs/xf-tab-item"
import xfTabPane from "@/components/tabs/xf-tab-pane"
import xfPopover from "@/components/xf-popover"
import xfCollapse from "@/components/xf-collapse"
import xfCollapseItem from "@/components/xf-collapse-item"

import xfCascader from "@/components/xf-cascader"
import xfCascaderItem from "@/components/xf-cascader-item"

import xfCarousel from "@/components/carousel/xf-carousel"
import xfCarouselItem from "@/components/carousel/xf-carouselItem.vue"

import Toast from "@/components/plugin.js"
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
Vue.component('xf-cascader',xfCascader)
Vue.component('xf-cascader-item',xfCascaderItem)

Vue.component('xf-carousel',xfCarousel)
Vue.component('xf-carousel-item',xfCarouselItem)

new Vue({
  render: h => h(App),
}).$mount('#app')

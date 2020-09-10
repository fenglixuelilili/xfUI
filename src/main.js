import Vue from 'vue'
import App from './App.vue'
import "@/Dirs/directives"
Vue.config.productionTip = false

import xfButton from "@/components/button/xf-button"
import xfGroupButton from "@/components/button/xf-group-button"
import xfIcon from "@/components/xf-icon"
import xfInput from "@/components/xf-input"
import xfCol from "@/components/layout/xf-col"
import xfRow from "@/components/layout/xf-row"

import xfContent from "@/components/layout/xf-content"
import xfFooter from "@/components/layout/xf-footer"
import xfHeader from "@/components/layout/xf-header"
import xfLayout from "@/components/layout/xf-layout"
import xfSlider from "@/components/layout/xf-slider"

import xfTab from "@/components/tabs/xf-tab"
import xfTabBody from "@/components/tabs/xf-tab-body"
import xfTabHead from "@/components/tabs/xf-tab-head"
import xfTabItem from "@/components/tabs/xf-tab-item"
import xfTabPane from "@/components/tabs/xf-tab-pane"
import xfPopover from "@/components/xf-popover"
import xfCollapse from "@/components/collapse/xf-collapse"
import xfCollapseItem from "@/components/collapse/xf-collapse-item"

import xfCascader from "@/components/cascader/xf-cascader"
import xfCascaderItem from "@/components/cascader/xf-cascader-item"

import xfMenu from "@/components/navmenu/xf-menu.vue"
import xfMenuItem from "@/components/navmenu/xf-menu-item.vue"
import xfSubMenuItem from "@/components/navmenu/xf-submenu.vue"

import xfCarousel from "@/components/carousel/xf-carousel"
import xfCarouselItem from "@/components/carousel/xf-carouselItem.vue"

import pager from "@/components/pager.vue"
import xfTable from "@/components/table/table.vue"
import xfTableColumn from "@/components/table/table-colnm"

import Toast from "@/plugins/plugin.js"
Vue.use(Toast)

Vue.component('xf-button',xfButton)
Vue.component('xf-popover',xfPopover)
Vue.component('xf-group-button',xfGroupButton)
Vue.component('xf-icon',xfIcon)
Vue.component('xf-input',xfInput)
Vue.component('xf-col',xfCol)
Vue.component('xf-row',xfRow)

Vue.component('xf-menu',xfMenu)
Vue.component('xf-menu-item',xfMenuItem)
Vue.component('xf-sub-menu',xfSubMenuItem)

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

Vue.component('xf-pager',pager)
Vue.component('xf-table',xfTable)
Vue.component('xf-table-column',xfTableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')

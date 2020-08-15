<template>
  <div id="app">
   <div id="app2">
        <div class="lianjei">
            line及选择容器
        </div>
        <div style="margin: 20px 0;">
          <!-- {{selected}} -->
            <xf-cascader 
            :options='options' 
            :selected.sync='selected' 
            @change="ccc"></xf-cascader>
        </div>
        <div>
            手风琴组件
            {{activeNames}}
        </div>
        <div>
            @input 
            <xf-collapse v-model="activeNames" @change="handleChange">
                <xf-collapse-item title="一致性 Consistency" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </xf-collapse-item>
                <xf-collapse-item title="反馈 Feedback" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </xf-collapse-item>
                <xf-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </xf-collapse-item>
                <xf-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </xf-collapse-item>
                
              </xf-collapse>
        </div>
        <div style="margin-top:20px;">
            popover组件
        </div>
        <!-- popover组件 -->
        <xf-popover event='click' position='right'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>点击激活</xf-button>
        </xf-popover>
        <xf-popover event='click' position='left'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>点击激活</xf-button>
        </xf-popover>
        <xf-popover event='click' position='bottom'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>点击激活</xf-button>
        </xf-popover>
        <xf-popover event='click' position='top'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>点击激活</xf-button>
        </xf-popover>
    </div>
    <div>
        <xf-tab :selected.sync='title'  activedcolor='red' >
            <xf-tab-head>
                <xf-tab-item name='title1'>
                    <xf-icon icon='icon-jishuwendang'></xf-icon>
                    标题1
                </xf-tab-item>
                <xf-tab-item name='title2'>标题2</xf-tab-item>
                <xf-tab-item name='title3'>标题3</xf-tab-item>
                <template slot='slide'>
                    <button>slider</button>
                </template>
            </xf-tab-head>
            <xf-tab-body>
                <xf-tab-pane name='title1'>
                    内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1
                </xf-tab-pane>
                <xf-tab-pane name='title2'>
                    内容2 内容2 内容2 内容2 内容2 内容2 内容2 内容2 内容2 内容2 内容2 内容2
                </xf-tab-pane>
                <xf-tab-pane name='title3'>
                    内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
                </xf-tab-pane>
            </xf-tab-body>
        </xf-tab>
    </div>
    <!-- <div id="app2">
        <button @click='toast(1)'>点击</button>
        <button @click='toast(2)'>点击1</button>
        <button @click='toast(3)'>点击2</button>
    </div> -->
    <div style="display: none;">
        <xf-button icon='icon-shezhi'>按钮</xf-button>
        <xf-button :loading='loading' @click='loading=!loading'>按钮</xf-button>
        <xf-button position='left'  :loading='loading2' @click='loading2=!loading2' icon='icon-shezhi'>按钮</xf-button>
        <xf-button position='right' :loading='loading3' @click='loading3=!loading3' icon='icon-shezhi'>按钮</xf-button>
        <xf-group-button>
            <xf-button icon='icon-zuojiantou'>按钮1</xf-button>
            <xf-button position='right' icon='icon-youjiantou2'>按钮3</xf-button>
        </xf-group-button>
        <div>
            input组件......:
        </div>
        <div>
            <xf-input v-model='value'></xf-input>
        </div>
        <div>
            <xf-input value='我是value' disabled></xf-input>
        </div>
        <div>
            <xf-input value='我是value' readonly></xf-input>
        </div>
        <div>
            <xf-input value='我是value' error='名字必须是两位'></xf-input>
        </div>
        {{value}}
        ---------------------------------------------------------------------------------------------------------------------------
        <div>
            栅格布局
        </div>
        普通款：
        <div class="p">
            <xf-row>
                <xf-col span='4'>4</xf-col>
                <xf-col span='20'>20</xf-col>
            </xf-row>
            <xf-row>
                <xf-col span='10'>4</xf-col>
                <xf-col span='10'>20</xf-col>
                <xf-col span='4'>20</xf-col>
            </xf-row>
        </div>
        偏移款：
        <div class="p">
            <xf-row>
                <xf-col span='4'>4</xf-col>
                <xf-col span='18' offset='1'>20</xf-col>
            </xf-row>
        </div>
        缝隙款：
        <div class="p" >
            <!-- gutter 代表是有10像素的间隙 -->
            <xf-row gutter='100'>
                <xf-col span='4'>4</xf-col>
                <xf-col span='18' offset='2'>20</xf-col>
            </xf-row>
        </div>
        
        <div class="p" >
            <!-- gutter 代表是有10像素的间隙 -->
            <xf-row gutter='0'>
                <xf-col span='4'>4</xf-col>
                <xf-col span='18' offset='2'>20</xf-col>
            </xf-row>
        </div>
        靠右居中：
        <div class="p" >
            <!-- gutter 代表是有10像素的间隙  align="end"-->
            <!-- gutter='100' -->
            <xf-row gutter='100'>
                <xf-col span='24' sm='4' md='5' lg='6' xl='5' >
                    <div class="color" style="background-color: greenyellow;height:50px;">
                        1111
                    </div>
                </xf-col>
                <xf-col span='24' sm='4' md='5' lg='6' xl='7' offset='6'>
                    <div class="color" style="background-color: greenyellow;height:50px;">
                        1111
                    </div>
                </xf-col>
                <xf-col span='24' sm='4' md='5' lg='6' xl='7' offset='1'>
                    <div class="color" style="background-color: greenyellow;height:50px;">
                        1111
                    </div>
                </xf-col>
            </xf-row>
        </div>
    </div>
    <div id='app3'>
        <!-- 布局组件 -->
        <!-- <xf-layout>
            <xf-header>
                <div class="header">
                    header
                </div>
            </xf-header>
            <xf-content>
                <div class="content">
                    content
                </div>
            </xf-content>
            <xf-footer>
                <div class="footer">
                    footer+
                </div>
            </xf-footer>
        </xf-layout> -->
        <!-- <xf-layout>
            <xf-header>
                <div class="header">
                    header
                </div>
            </xf-header>
            <xf-layout>
                <xf-slider>
                    <div class="slider">
                        slider
                    </div>
                </xf-slider>
                <xf-content>
                    <div class="content">
                        content
                    </div>
                </xf-content>
            </xf-layout>
            <xf-footer>
                <div class="footer">
                    footer
                </div>
            </xf-footer>
        </xf-layout> -->
        <xf-layout>
            <xf-slider>
                <div class="slider">
                    slider
                </div>
            </xf-slider>
            <xf-layout>
                <xf-header>
                    <div class="header">
                        header
                    </div>
                </xf-header>
                <xf-content>
                    <div class="content">
                        content
                    </div>
                </xf-content>
                <xf-footer>
                    <div class="footer">
                        footer
                    </div>
                </xf-footer>
            </xf-layout>
        </xf-layout>
    </div>
  </div>
</template>

<script>
export default {
   data(){
        return {
            loading:false,
            loading2:false,
            loading3:false,
            value:'我是value卡卡卡西',
            title:'title2',
            activeNames:['1','4'],
            options: [{
                value: 'zhinan',
                label: 'tex指南tex指南text',
                children: [{
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [{
                    value: 'yizhi',
                    label: '一致',
                    children:[
                        {
                            value: '55',
                            label: '哈哈哈',
                        }
                    ]
                  }, {
                    value: 'fankui',
                    label: '反馈'
                  }, {
                    value: 'xiaolv',
                    label: '效率'
                  }, {
                    value: 'kekong',
                    label: '可控'
                  }]
                }, {
                  value: 'daohang',
                  label: '导航',
                  children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }]
                }]
              }, {
                value: 'zujian',
                label: '组件',
                children: [{
                  value: 'basic',
                  label: 'Basic',
                  children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                  }, {
                    value: 'color',
                    label: 'Color 色彩'
                  }, {
                    value: 'typography',
                    label: 'Typography 字体'
                  }, {
                    value: 'icon',
                    label: 'Icon 图标'
                  }, {
                    value: 'button',
                    label: 'Button 按钮'
                  }]
                }, {
                  value: 'form',
                  label: 'Form',
                  children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                  }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  }, {
                    value: 'input',
                    label: 'Input 输入框'
                  }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  }, {
                    value: 'select',
                    label: 'Select 选择器'
                  }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  }, {
                    value: 'switch',
                    label: 'Switch 开关'
                  }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                  }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  }, {
                    value: 'upload',
                    label: 'Upload 上传'
                  }, {
                    value: 'rate',
                    label: 'Rate 评分'
                  }, {
                    value: 'form',
                    label: 'Form 表单'
                  }]
                }, {
                  value: 'data',
                  label: 'Data',
                  children: [{
                    value: 'table',
                    label: 'Table 表格'
                  }, {
                    value: 'tag',
                    label: 'Tag 标签'
                  }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                  }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  }, {
                    value: 'badge',
                    label: 'Badge 标记'
                  }]
                }, {
                  value: 'notice',
                  label: 'Notice',
                  children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                  }, {
                    value: 'loading',
                    label: 'Loading 加载'
                  }, {
                    value: 'message',
                    label: 'Message 消息提示'
                  }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  }, {
                    value: 'notification',
                    label: 'Notification 通知'
                  }]
                }, {
                  value: 'navigation',
                  label: 'Navigation',
                  children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }]
                }, {
                  value: 'others',
                  label: 'Others',
                  children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  }, {
                    value: 'card',
                    label: 'Card 卡片'
                  }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }]
                }]
              }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                  value: 'axure',
                  label: 'Axure Components'
                }, {
                  value: 'sketch',
                  label: 'Sketch Templates'
                }, {
                  value: 'jiaohu',
                  label: '组件交互文档'
                }]
            }],
            selected:[]
        }
   },
    methods:{
      ccc(value){
        console.log(value,'哈哈哈')
      },
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
}
</script>

<style lang="scss">
    /* 公用样式 */
    body{
        overflow-x: hidden;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }   
    :root{
        --button-height:32px;
        --font-size:14px;
        --button-bg:white;
        --button-active-bg:#eee;
        --border-radius:4px;
        --color:#333;
        --border-color:#999;
        --border-color-hover:#666;
    }
    #app{
        padding: 10px;
    }
    .p{
        border: 1px solid red;
    }
    .header,.footer{
        height: 70px;
        background-color: firebrick;
    }
    .content{
        /* height: calc(100vh - 140px);
        box-sizing: border-box;
        padding: 10px;
        background-color: #eee; */
    }
    .slider{
        background-color: saddlebrown;
        /* height: 100%; */
        height: 100vh;
        width: 150px;
    }
    #app2{
        padding: 200px;
    }
    ::-webkit-scrollbar-track-piece {
        background-color: #fff;
        -webkit-border-radius: 0
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px
    }
    ::-webkit-scrollbar-thumb {
        height: 50px;
        background-color: #b8b8b8;
        -webkit-border-radius: 6px;
        outline: 2px solid #fff;
        outline-offset: -2px;
        border: 2px solid #fff;
        filter: alpha(opacity = 50);
        -moz-opacity: 0.5;
        -khtml-opacity: 0.5;
        opacity: 0.5
    }
    ::-webkit-scrollbar-thumb:hover {
        height: 50px;
        background-color: #878987;
        -webkit-border-radius: 6px
    }
</style>

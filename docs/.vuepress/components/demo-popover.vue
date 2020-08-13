<template>
    <div>
        <!-- 111 -->
         <!-- popover组件 -->
        <xf-popover event='click' position='right'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>激活在右侧</xf-button>
        </xf-popover>
        <xf-popover event='hover' position='left'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>激活在咗侧</xf-button>
        </xf-popover>
        <xf-popover event='click' position='bottom'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>激活在底部</xf-button>
        </xf-popover>
        <xf-popover event='click' position='top'>
            <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <xf-button>激活在顶部部</xf-button>
        </xf-popover>
        <div>
            <pre><code>{{code}}</code></pre>
        </div>
    </div>
</template>

<script>
import xfPopover from "../../../src/xf-popover.vue"
import xfButton from "../../../src/xf-button.vue"
export default {
    components: {
        xfPopover,
        xfButton
    },
    data(){
        return {
            code: `
                    <xf-popover event='click' position='right'>
                        <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <xf-button>激活在右侧</xf-button>
                    </xf-popover>
                    <xf-popover event='hover' position='left'>
                        <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <xf-button>激活在咗侧</xf-button>
                    </xf-popover>
                    <xf-popover event='click' position='bottom'>
                        <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <xf-button>激活在底部</xf-button>
                    </xf-popover>
                    <xf-popover event='click' position='top'>
                        <div slot="temcont">dsfasfdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <xf-button>激活在顶部部</xf-button>
                    </xf-popover>
                `
        }
    }
}
</script>

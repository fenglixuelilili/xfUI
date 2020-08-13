<template>
    <div>
        <!-- 111 -->
        <xf-button icon="icon-jiazaizhong" :loading='true'>按钮</xf-button>
        <div>
            <pre><code>{{code}}</code>
            </pre>
        </div>
    </div>
</template>

<script>
import xfButton from "../../../src/xf-button.vue"
import xfIcon from "../../../src/xf-icon.vue"
export default {
    components: {
        xfButton,
        xfIcon
    },
    data(){
        return {
            code: '<xf-button>按钮</xf-button>'
        }
    }
}
</script>

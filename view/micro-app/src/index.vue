<template>
    <micro-app
      name='appname-react17'
      :url='url'
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
      class="react17-micro-app"
    ></micro-app>
</template>

<script lang="ts">
import getConfig from '../../config'
const config = getConfig()
export default {
  name: 'react17',
  props:['cacheLocation'],
  data () {
    location = this.cacheLocation
    return {
      url: `${config.react17}/child/react17/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate (): void {
      console.log('child-react17 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-react17 即将被渲染')
    },

    handleMount (): void {
      console.log('child-react17 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-react17 卸载了')
    },

    handleError (): void {
      console.log('child-react17 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-react17 的数据:', e.detail.data)
    },
  }
}
</script>

<style lang="less">
.react17-micro-app{
  height: 800px;
}
div#react17-root aside{
    display:block !important;
}
</style>

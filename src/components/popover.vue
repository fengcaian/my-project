<template>
  <div>
    <div v-popover:popover1>
      <el-popover
        ref="popover1"
        placement="top-end"
        width="120"
        trigger="manual"
        popover-class="popper-class-product"
        v-hover-header
        :value="isShowtitleListLocal">
        <tab-column-config></tab-column-config>
      </el-popover>
    </div>
    <el-table
    border
    stripe
    size="mini"
    v-hover-header
    :data="list">
      <el-table-column prop="id" align="center" label="ID"></el-table-column>
      <el-table-column prop="province" align="center" label="省份"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import tabColumnConfig from './table'

export default {
  components: {
    tabColumnConfig
  },
  data () {
    return {
      list: [
        {
          id: 1,
          province: '广东'
        },
        {
          id: 2,
          province: '北京'
        },
        {
          id: 3,
          province: '上海'
        },
        {
          id: 4,
          province: '苏州'
        }
      ],
      isShowtitleListLocal: false
    }
  },
  methods: {},
  directives: {
    hoverHeader: {
      // 配置
      bind () {
        console.log(1234)
      },
      inserted () {
        console.log(56)
      },
      componentUpdated (el, binding, vnode) {
        const hd = el.getElementsByTagName('thead')[0]
        if (!hd || hd.mouseenterListener) {
          return
        }
        hd.mouseenterListener = () => {
          vnode.context.isShowtitleListLocal = true
          if (hd.mouseleaveTimer) clearTimeout(hd.mouseleaveTimer)
        }
        hd.addEventListener('mouseenter', hd.mouseenterListener, true)
        hd.mouseleaveListener = () => {
          if (hd.mouseleaveTimer) clearTimeout(hd.mouseleaveTimer)
          hd.mouseleaveTimer = setTimeout(() => {
            vnode.context.isShowtitleListLocal = false
            hd.mouseleaveTimer = null
          }, 1000)
        }
        hd.addEventListener('mouseleave', hd.mouseleaveListener, true)
      }
    }
  }
}
</script>

<style scoped>

</style>

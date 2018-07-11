<template>
  <flex-grow-row>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(tab, index) in tabData" :label="tab.label" :key="index" @click="tabChange"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </flex-grow-row>
</template>

<script>
import flexGrowRow from '../components/flex-grow-row'
export default {
  components: {
    flexGrowRow
  },
  data () {
    return {
      tabData: [
        {
          label: '我的行程',
          route: ''
        },
        {
          label: '消息中心'
        },
        {
          label: '角色管理'
        },
        {
          label: '定时任务补偿'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('getConst')
    console.log(this.$store.state)
  },
  methods: {
    tabChange () {}
  }
}
</script>

<style scoped>

</style>

<template>
  <flex-grow-row>
    <div class="tabs-wrap">
      <div>
        <el-tabs type="border-card" @tab-click="tabChange">
          <el-tab-pane v-for="(tab, index) in tabData" :label="tab.label" :name="tab.route" :key="index">
            <router-view></router-view>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!--<div class="content-wrap">
        &lt;!&ndash;<router-view></router-view>&ndash;&gt;
      </div>-->
    </div>

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
          route: '/element-search' // my-journey
        },
        {
          label: '消息中心',
          route: '/table' // message-center
        },
        {
          label: '角色管理',
          route: 'svg-charts'
        },
        {
          label: '定时任务',
          route: 'timer-task'
        },
        {
          label: '弹出框popover',
          route: 'popover'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('getConst')
    console.log(this.$store.state)
    this.$router.push('/element-search')
  },
  methods: {
    tabChange (tab) {
      console.log(tab)
      this.$router.push(tab.name)
    }
  }
}
</script>

<style scoped>
.tabs-wrap {
  flex: 1;
  padding: 10px 20px;
  overflow: auto
}
.content-wrap {
  height: 90%;
  border: 1px solid #d1dbe5;
  border-top: none;
  padding: 0 20px;
}
</style>

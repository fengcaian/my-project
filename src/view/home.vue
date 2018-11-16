<template>
  <div>
    <div class="tabs-wrap">
      <div class="onLeft">
        <side-bar></side-bar>
      </div>
      <div class="onRight">
        <el-tabs type="card" @tab-click="tabChange" editable @tab-remove="removeTab">
          <el-tab-pane v-for="(tab, index) in tabData" :label="tab.label" :name="tab.route" :key="index">
            <router-view></router-view>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!--<div class="content-wrap">
        &lt;!&ndash;<router-view></router-view>&ndash;&gt;
      </div>-->
    </div>

  </div>
</template>

<script>
import flexGrowRow from '../components/flex-grow-row'
import sideBar from '@/components/side-bar'
export default {
  components: {
    flexGrowRow,
    sideBar
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
          label: 'vue-echarts',
          route: 'vue-echarts-test'
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
    },
    removeTab () {}
  }
}
</script>

<style scoped>
.tabs-wrap {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 0;
  overflow: auto
}
.content-wrap {
  height: 90%;
  border: 1px solid #d1dbe5;
  border-top: none;
  padding: 0 20px;
}
.onLeft {
  display: inline-block;
  text-align: left;
  margin: 0 5px;
}
.onRight {
  display: inline-block;
  width: 86%;
}
</style>

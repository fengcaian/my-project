<template>
  <div>
    <div class="tabs-wrap">
      <div class="onLeft">
        <side-bar @leftMenuRouteChange="leftMenuRouteChange"></side-bar>
      </div>
      <div class="onRight">
        <el-tabs type="card" v-model="activeTab" @tab-click="tabChange" closable @tab-remove="removeTab" style="height: 100%">
          <el-tab-pane v-for="(tab, index) in tabData" :label="tab.label" :name="tab.name" :key="index" style="height: 600px;">
            <div style="height: 100%">
              <router-view></router-view>
            </div>
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
import flexGrowRow from '../components/flex-grow-row';
import sideBar from '@/components/side-bar';
export default {
  components: {
    flexGrowRow,
    sideBar
  },
  data () {
    return {
      activeTab: '',
      tabData: [
        {
          label: '我的行程',
          name: 'element-search'
        },
        {
          label: '消息中心',
          name: 'table' // message-center
        },
        {
          label: '角色管理',
          name: 'svg-charts'
        },
        {
          label: '弹出框popover',
          name: 'popover'
        }
      ]
    };
  },
  created () {
    this.$store.dispatch('getConst');
    console.log(this.$store.state);
    this.activeTab = 'element-search';
    // this.$router.push('/element-search');
  },
  methods: {
    tabChange (tab) {
      console.log(tab);
      this.$router.push(tab.name);
    },
    removeTab (tagName) {
      console.log(`remove ${tagName}`);
    },
    leftMenuRouteChange (route) {
      if (this.tabData.findIndex(item => item.name === route) === -1) {
        this.tabData.push({
          label: 'vue-echarts-bar',
          name: route});
      }
      this.activeTab = route;
      console.log(this.activeTab);
      this.$router.replace(route);
    }
  }
};
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
  height: calc(90% - 10);
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
  .el-tabs__content {
    height: 100%;
  }
</style>

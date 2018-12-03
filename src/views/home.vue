<template>
  <div>
    <div class="tabs-wrap">
      <div class="onLeft">
        <side-bar ref="sideBar" @leftMenuRouteChange="leftMenuRouteChange"></side-bar>
      </div>
      <div class="onRight">
        <el-tabs  v-if="tabData.length" type="card" v-model="activeTab" @tab-click="tabChange" closable @tab-remove="removeTab">
          <el-tab-pane v-for="(tab, index) in tabData" :label="tab.label" :name="tab.name" :key="index">
            <div style="height: 100%">
              <router-view></router-view>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div v-if="!tabData.length">
          <h3>欢迎来到我的vue空间</h3>
        </div>
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
      tabData: []
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
      this.$router.push(tab.name);
      this.$refs.sideBar.locateLeftMenu();
    },
    removeTab (tagName) {
      const currentTabIndex = this.tabData.findIndex(item => item.name === tagName);
      this.tabData.splice(currentTabIndex, 1);
      const tab = this.tabData[currentTabIndex] || this.tabData[currentTabIndex - 1];
      const tabName = (tab && tab.name) || '';
      this.activeTab = tabName;
      this.$router.replace(tabName);
    },
    leftMenuRouteChange (menu) {
      if (this.tabData.findIndex(item => item.name === menu.route) === -1) {
        this.tabData.push({
          label: menu.label,
          name: menu.route});
      }
      this.activeTab = menu.route;
      this.$router.replace(menu.route);
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

<template>
  <div style="height: 100%">
    <el-menu
      class="el-menu-vertical-demo side_bar_tree"
      :default-active="activeMenuIndex"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item, index) in menuData" :index="`${index}`" :key="index">
        <template slot="title">
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(menu, ind1) in item.children" :key="`${index}-${ind1}`" :index="`${index}-${ind1}`" @click="clickMenu(menu)">
            {{menu.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <div class="bottom">
        <el-switch
          v-model="useDefaultMenu"
          active-text="默认"
          inactive-text="配置">
        </el-switch>
      </div>
    </el-menu>
  </div>
</template>

<script>
import ElSubmenu from '../../node_modules/element-ui/packages/menu/src/submenu.vue';
import ElMenuItemGroup from '../../node_modules/element-ui/packages/menu/src/menu-item-group.vue';

export default {
  components: {
    ElMenuItemGroup,
    ElSubmenu
  },
  props: [],
  data () {
    return {
      useDefaultMenu: false,
      menuData: [],
      activeMenuIndex: '',
      menuDataDefault: [
        {
          iconClass: 'el-icon-location',
          label: '权限管理',
          disabled: false,
          children: [
            {
              label: '功能列表',
              route: 'func-list'
            }
          ]
        },
        {
          iconClass: 'el-icon-location',
          label: 'vue-echarts',
          disabled: false,
          children: [
            {
              label: '柱状图',
              route: 'vue-echart-bar'
            },
            {
              label: '线型图',
              route: 'vue-echart-line'
            },
            {
              label: '选项3'
            }
          ]
        },
        {
          iconClass: 'el-icon-menu',
          label: 'SVG',
          disabled: false,
          children: [
            {
              label: 'svg图标',
              route: 'svg-charts'
            }
          ]
        },
        {
          iconClass: 'el-icon-document',
          label: 'element',
          disabled: false,
          children: [
            {
              label: '表格',
              route: 'table'
            },
            {
              label: 'popover',
              route: 'popover'
            },
            {
              label: 'dialog',
              route: 'dialog'
            },
            {
              label: 'tree',
              route: 'tree'
            },
            {
              label: 'button',
              route: 'button'
            }
          ]
        },
        {
          iconClass: 'other-knowledage',
          label: 'other',
          disabled: false,
          children: [
            {
              label: '大数精确计算',
              route: 'big-number'
            }
          ]
        }
      ]
    };
  },
  computed: {
    menuDataConfig () {
      const funcList = this.$store.state.authList;
      function arrayToTree (parentId) {
        const temp = [];
        funcList.forEach((item) => {
          item.label = item.funcName;
          item.route = item.funcKey;
          item.iconClass = item.funcKey;
          item.disabled = false;
          if (item.parentId === parentId) {
            item.children = arrayToTree(item.id);
            temp.push(item);
          }
        });
        return temp;
      }
      const result = arrayToTree(0);
      console.log(result);
      return result;
    }
  },
  watch: {
    useDefaultMenu (val) {
      if (val) {
        this.menuData = this.menuDataDefault;
      } else {
        this.menuData = this.menuDataConfig;
      }
    }
  },
  created () {
    this.useDefaultMenu = true;
    this.activeMenuIndex = '';
    this.locateLeftMenu();
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu (menu) {
      this.$emit('leftMenuRouteChange', menu);
    },
    locateLeftMenu () {
      this.menuData.forEach((item1, index1) => {
        const index2 = item1.children.findIndex(item2 => item2.route === this.$route.name);
        if (index2 !== -1) {
          this.activeMenuIndex = `${index1}-${index2}`;
        }
      });
    }
  }
};
</script>

<style scoped>
  .side_bar_tree {
    width: 200px;
    height: 100%
  }
  .bottom {
    width: 200px;
    text-align: center;
    position: fixed;
    bottom: 5px;
  }
</style>

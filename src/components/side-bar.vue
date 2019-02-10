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
        <el-menu-item-group v-for="(group, ind1) in item.menuGroup" :key="`${index}-${ind1}`">
          <el-menu-item v-for="(menu, ind2) in group.children" :key="`${index}-${ind1}-${ind2}`" :index="`${index}-${ind1}-${ind2}`" @click="clickMenu(menu)">
            {{menu.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--<el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
import ElSubmenu from '../../node_modules/element-ui/packages/menu/src/submenu.vue';
import ElMenuItemGroup from '../../node_modules/element-ui/packages/menu/src/menu-item-group.vue';

export default {
  components: {
    ElMenuItemGroup,
    ElSubmenu},
  props: [],
  data () {
    return {
      activeMenuIndex: '',
      menuData: [
        {
          iconClass: 'el-icon-location',
          label: 'vue-echarts',
          disabled: false,
          menuGroup: [
            {
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
            }
          ]
        },
        {
          iconClass: 'el-icon-menu',
          label: 'SVG',
          disabled: false,
          menuGroup: [
            {
              children: [
                {
                  label: 'svg图标',
                  route: 'svg-charts'
                }
              ]
            }
          ]
        },
        {
          iconClass: 'el-icon-document',
          label: 'element',
          disabled: false,
          menuGroup: [
            {
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
            }
          ]
        }
      ]
    };
  },
  created () {
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
        item1.menuGroup.forEach((item2, index2) => {
          const index3 = item2.children.findIndex(item3 => item3.route === this.$route.name);
          if (index3 !== -1) {
            this.activeMenuIndex = `${index1}-${index2}-${index3}`;
          }
        });
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
</style>

<template>
  <flex-grow-row class="w100">
    <el-row class="w100" type="flex" justify="space-between">
      <el-col :span="6" :xl="5">
        <span>关键字</span>
        <el-input class="inputWidth150" placeholder="输入关键字进行过滤" size="mini" v-model="treeFilterKeyword"></el-input>
        <el-tree
          ref="tree"
          class="filter-tree"
          :data="funcTree"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          @node-click="treeNodeClick">
        </el-tree>
      </el-col>
      <el-col :span="18" :xl="19" class="textAlignL">
        <el-form ref="form" :inline="true" :model="form" label-width="80px">
          <el-form-item label="标签">
            <el-input class="inputWidth200" size="mini" v-model="form.keyWord"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="search">查找</el-button>
          </el-form-item>
        </el-form>
        <el-row class="button_list">
          <el-col :span="24">
            <el-button type="success" size="mini" @click="addFunc">新增</el-button>
          </el-col>
        </el-row>
        <el-table
          border
          ref="multipleTable"
          :data="tableDataList"
          header-row-class-name="table-header"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column label="功能名称" align="center">
            <template slot-scope="scope">{{ scope.row.funcName }}</template>
          </el-table-column>
          <el-table-column label="功能key" align="center">
            <template slot-scope="scope">{{ scope.row.funcKey }}</template>
          </el-table-column>
          <el-table-column label="功能描述" align="center">
            <template slot-scope="scope">{{ scope.row.funcDesc }}</template>
          </el-table-column>
        </el-table>
        <div class="page-center">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="form.currentPage"
            :page-size="form.pageSize"
            layout="prev, pager, next, jumper"
            :total="totalRow">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <dialog-add-func
      v-if="showAddFuncDialog"
      :dialogShow="showAddFuncDialog"
      :parentNodeList="treeNodeSelectedParentList"
      :treeNodeSelected="treeNodeSelected"
      @dialogAddFuncCb="dialogAddFuncCb">
    </dialog-add-func>
  </flex-grow-row>
</template>

<script>
import * as API from '@/api';
import flexGrowRow from '@/components/flex-grow-row.vue';
import dialogAddFunc from './components/dialig-add-func';

export default {
  components: {
    flexGrowRow,
    dialogAddFunc
  },
  data () {
    return {
      treeFilterKeyword: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeNodeSelected: {},
      showAddFuncDialog: false,
      form: {
        keyWord: '',
        funcId: '',
        currentPage: 1,
        pageSize: 30
      },
      totalRow: 0,
      funcList: [{funcId: 1}],
      tableDataList: [],
      treeDataList: [],
      multipleSelection: [],
      treeNodeSelectedParentList: []
    };
  },
  computed: {
    funcTree () {
      const temp = [];
      function arrayToTree (parentId) {
        this.treeDataList.forEach((item) => {
          if (item.parentId === parentId) {
            item.children = arrayToTree(item.id);
            temp.push(item);
          }
        });
        return temp;
      }
      return arrayToTree(1);
    }
  },
  watch: {
    treeFilterKeyword (val) {
      this.$refs.tree.filter(val);
    }
  },
  created () {
    this.getList();
  },
  methods: {
    search () {
      this.form.currentPage = 1;
      this.getList();
    },
    getList () {
      const params = {};
      Object.keys(this.form).forEach((key) => {
        if (this.form[key] !== '') {
          params[key] = this.form[key];
        }
      });
      Promise.all([
        this.axios.get(API.getFuncList, {
          params: params
        }),
        this.axios.get(API.getFuncTreeList)
      ])
        .then((res) => {
          this.tableDataList = res[0];
          this.treeDataList = res[1];
        });
    },
    addFunc () {
      if (!this.treeNodeSelected.funcId) {
        this.treeNodeSelected = this.funcList[0];
      }
      let node = this.treeNodeSelected;
      this.treeNodeSelectedParentList = [];
      while (node.funcId) {
        this.treeNodeSelectedParentList.push(node.funcName);
        node = this.funcList.find(func => func.funcId === node.parentId) || {};
      }
      this.showAddFuncDialog = true;
    },
    dialogAddFuncCb (isRefresh) {
      if (isRefresh) {
        this.search();
      }
      this.showAddFuncDialog = false;
    },
    filterNode (value, data) {
      if (!value) return true;
      return data.funcName.indexOf(value) !== -1;
    },
    treeNodeClick (treeNode) {
      this.treeNodeSelected = treeNode;
      this.form.funcId = treeNode.funcId;
      this.search();
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    handleCurrentChange (val) {
      this.form.currentPage = val;
    }
  }
};
</script>

<style scoped>
  .w100 {
    width: 100%;
  }
  .inputWidth150 {
    width: 150px;
  }
  .inputWidth200 {
    width: 200px;
  }
  .textAlignL {
    text-align: left;
  }
  .button_list {
    margin-bottom: 10px;
  }
  .page-center {
    text-align: center;
    margin-top: 20px;
  }
  .table-header {
    background-color: #e6ebf5;
  }
</style>

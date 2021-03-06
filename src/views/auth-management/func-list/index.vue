<template>
  <flex-grow-row class="w100">
    <el-row class="w100" type="flex" justify="space-between">
      <el-col :span="6" :xl="5">
        <span>关键字</span>
        <el-input class="inputWidth150" placeholder="输入关键字进行过滤" size="mini" v-model="treeFilterKeyword"></el-input>
        <el-tree
          ref="tree"
          :data="funcTree"
          node-key="id"
          :props="defaultProps"
          :default-expand-all="true"
          @node-click="treeNodeClick">
        </el-tree>
      </el-col>
      <el-col :span="18" :xl="19" class="textAlignL">
        <el-form ref="form" :inline="true" :model="form" label-width="80px">
          <el-form-item label="标签">
            <el-input class="inputWidth200" size="mini" v-model="form.keyWord"></el-input>
          </el-form-item>
          <el-form-item label="功能名称">
            <el-input class="inputWidth200" size="mini" v-model.trim="form.funcName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="search">查找</el-button>
          </el-form-item>
        </el-form>
        <el-row class="button_list">
          <el-col :span="24">
            <el-button type="success" size="mini" @click="addFunc">新增</el-button>
            <el-button type="primary" size="mini" @click="modifyFunc">修改</el-button>
            <el-button type="danger" size="mini" :loading="deleteBtnLoading" @click="deleteFunc">删除</el-button>
          </el-col>
        </el-row>
        <el-table
          border
          stripe
          ref="multipleTable"
          :data="tableDataList"
          header-row-class-name="table-header"
          tooltip-effect="dark"
          style="width: 100%"
          :max-height="450"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="funcName" label="功能名称" align="center"></el-table-column>
          <el-table-column prop="funcKey" label="功能key" align="center"></el-table-column>
          <el-table-column prop="funcDesc" label="功能描述" align="center"></el-table-column>
        </el-table>
        <div class="page-center">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="form.currentPage"
            :page-size="form.pageSize"
            layout="total, prev, pager, next, jumper"
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
    <dialog-modify-func
      v-if="showModifyFuncDialog"
      :dialogShow="showModifyFuncDialog"
      :id="id"
      @dialogModifyFuncCb="dialogModifyFuncCb">
    </dialog-modify-func>
  </flex-grow-row>
</template>

<script>
import _ from 'lodash';
import { stringify } from 'qs';
import * as API from '@/api';
import flexGrowRow from '@/components/flex-grow-row.vue';
import dialogAddFunc from './components/dialog-add-func';
import dialogModifyFunc from './components/dialog-modify-func';

export default {
  components: {
    flexGrowRow,
    dialogAddFunc,
    dialogModifyFunc
  },
  data () {
    return {
      checkedNodes: [],
      defaultCheckedKeys: [1],
      treeFilterKeyword: '',
      defaultProps: {
        children: 'children',
        label: 'funcName'
      },
      deleteBtnLoading: false,
      treeNodeSelected: {},
      showAddFuncDialog: false,
      showModifyFuncDialog: false,
      id: '',
      form: {
        keyWord: '',
        funcId: '',
        currentPage: 1,
        pageSize: 30
      },
      totalRow: 0,
      funcList: [{id: 0}],
      tableDataList: [],
      treeDataList: [],
      multipleSelection: [],
      treeNodeSelectedParentList: []
    };
  },
  computed: {
    funcTree () {
      const funcList = _.cloneDeep(this.treeDataList);
      function arrayToTree (parentId) {
        const temp = [];
        funcList.forEach((item) => {
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
          this.tableDataList = res[0].data.result.dataList || [];
          this.totalRow = res[0].data.result.totalRow;
          this.treeDataList = res[1].data.result || [];
        });
    },
    addFunc () {
      if (!this.treeNodeSelected.id) {
        this.treeNodeSelected = this.funcList[0];
      }
      let node = this.treeNodeSelected;
      this.treeNodeSelectedParentList = [];
      while (node.id) {
        this.treeNodeSelectedParentList.push(node.funcName);
        node = this.funcList.find(func => func.id === node.parentId) || {};
      }
      this.showAddFuncDialog = true;
    },
    dialogAddFuncCb (isRefresh) {
      if (isRefresh) {
        this.search();
      }
      this.treeNodeSelected = {};
      this.showAddFuncDialog = false;
    },
    modifyFunc () {
      if (this.multipleSelection.length !== 1) {
        this.$message({
          message: '请选择一个！',
          showClose: true,
          type: 'warning'
        });
        return;
      }
      this.id = this.multipleSelection[0].id;
      this.showModifyFuncDialog = true;
    },
    dialogModifyFuncCb (isRefresh) {
      if (isRefresh) {
        this.search();
      }
      this.showModifyFuncDialog = false;
    },
    deleteFunc () {
      if (this.multipleSelection.length !== 1) {
        this.$message({
          message: '请选择一个！',
          showClose: true,
          type: 'warning'
        });
        return;
      }
      this.deleteBtnLoading = true;
      this.axios
        .post(API.deleteFunc, stringify({
          id: this.multipleSelection[0].id
        }))
        .then(() => {
          this.$message({
            message: '删除成功！',
            showClose: true,
            type: 'success'
          });
          this.getList();
        })
        .finally(() => {
          this.deleteBtnLoading = false;
        });
    },
    filterNode (value, data) {
      if (!value) return true;
      return data.funcName.indexOf(value) !== -1;
    },
    treeNodeClick (treeNode) {
      this.treeNodeSelected = treeNode;
      this.form.id = treeNode.id;
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

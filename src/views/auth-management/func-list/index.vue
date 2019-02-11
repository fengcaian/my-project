<template>
  <flex-grow-row class="w100">
    <el-row class="w100">
      <el-col :span="6"><div class="grid-content bg-purple">12313313</div></el-col>
      <el-col :span="18">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="功能名称">
            <el-input class="inputWidth200" v-model="form.funcName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="search">查找</el-button>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <el-button type="success" size="mini" @click="addFunc">新增</el-button>
          </el-col>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableDataList"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="功能名称">
            <template slot-scope="scope">{{ scope.row.funcName }}</template>
          </el-table-column>
          <el-table-column label="功能key">
            <template slot-scope="scope">{{ scope.row.funcKey }}</template>
          </el-table-column>
          <el-table-column label="功能描述">
            <template slot-scope="scope">{{ scope.row.funcDesc }}</template>
          </el-table-column>
        </el-table>
        <div class="block">
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
  </flex-grow-row>
</template>

<script>
import flexGrowRow from '@/components/flex-grow-row.vue';
export default {
  components: {
    flexGrowRow
  },
  data () {
    return {
      form: {
        funcName: '',
        currentPage: 1,
        pageSize: 30
      },
      totalRow: 0,
      tableDataList: [],
      multipleSelection: []
    };
  },
  created () {
    console.log(22222);
  },
  methods: {
    search () {},
    addFunc () {},
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
  .inputWidth200 {
    width: 200px;
  }
</style>

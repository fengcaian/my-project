<template>
  <div style="max-width: 1435px; overflow: auto">
    <el-button type="primary" icon="el-icon-setting" size="mini" @click="showConfig">表格列</el-button>
    <el-table :data="tableData6" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column style="width: auto" sortable label="数值 1" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="text-overflow">{{scope.row.amount1}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="text-overflow">{{scope.row.amount2}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="text-overflow">{{scope.row.amount3}}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="tableData6" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px;table-layout: fixed">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）">
      </el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）">
      </el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）">
      </el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="formValid">form表单校验</el-button>
    <el-row :gutter="20">
      <el-form ref="form" :model="form">
        <el-table :data="form.tableData6">
          <el-table-column prop="id" label="ID" width="180">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData6.'+scope.$index+'.id'" :rules="[
                { required: true, message: '请输入id', trigger: 'blur' }
              ]">
                <el-input v-model="scope.row.id"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData6.'+scope.$index+'.name'" :rules="[
                { required: true, message: '请输入姓名', trigger: 'blur' }
              ]">
                <el-input v-model="scope.row.name"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="amount1" label="数值 1（元）">
          </el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）">
          </el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）">
          </el-table-column>
        </el-table>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData6: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '1298712412987124129871241298712412987124',
        name: '王小虎王小虎王小虎王小虎王小虎',
        amount1: '324324324324324324324324324324324324324324324按时地方哈市的发生地方324324324324324',
        amount2: '1.91.91.91.91.91.91.91.91.91.91.91.91.9',
        amount3: '90980978097809709707809046464646464646456664646464655555654444444444444444444444446'
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      form: {
        tableData6: []
      }
    }
  },
  created () {
    setTimeout(() => {
      console.log(this)
    }, 1000)
    this.form.tableData6 = this.tableData6
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },

    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    showConfig () {},
    formValid () {
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>

<style scoped>
  .text-overflow{
    display:block;                     /*内联对象需加*/
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
  }
</style>

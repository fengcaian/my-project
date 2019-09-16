<template>
  <div style="max-width: 1435px; overflow: auto">
    <el-button type="primary" size="small" @click="formValid">form表单校验</el-button>
    <el-row :gutter="20">
      <el-form ref="form" :model="form">
        <!--<el-table :data="form.tableData6">
          <el-table-column prop="id" label="ID" width="180">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData6.'+scope.$index+'.id'" :rules="[
                { required: true, message: '请输入id', trigger: 'blur' }
              ]">
                <el-input v-model="scope.row.id"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="破损数量">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData6.'+scope.$index+'.amount1'" :rules="[
                { required: scope.row.value, message: '请输入破损数量', trigger: 'blur' },
                { pattern: /^\d+(.\d+)?$/, message: '只能输入整数或小数', trigger: 'blur' },
                { validator: validateNumber, message: '只能输入整数或小数', trigger: 'blur' }
              ]">
                <el-input v-model="scope.row.amount1"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="amount1" label="破损入库仓">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData6.'+scope.$index+'.value'" :rules="[
                { required: true, message: '请选择破损入库仓', trigger: 'blur' }
              ]">
                <el-select v-model="scope.row.value" placeholder="请选择">
                  <el-option value="" label="请选择"></el-option>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
        </el-table>-->
        <el-form-item prop="address" label="地址" label-width="80px" :rules="[
                { required: true, message: '请输入破损数量', trigger: 'blur' },
                { pattern: /^\d+(.\d+)?$/, message: '只能输入整数或小数', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' }
              ]">
          <el-input style="width: 200px" v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table :data="tableData6">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="amount1" label="仓库"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
export default {
  data () {
    const validateNumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== '') {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      validateNumber,
      tableData6: [
        {
          id: '129871223',
          name: '王小虎1',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
          value: ''
        }, {
          id: '129871231',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
          value: ''
        }, {
          id: '1298712412987124129871241298712412987124',
          name: '王小虎王小虎王小虎王小虎王小虎',
          amount1: '3',
          amount2: '1.91.91.91.91.91.91',
          amount3: '23',
          value: ''
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 155,
          value: ''
        }
      ],
      form: {
        tableData6: [],
        address: ''
      },
      options: [{
        value: 1,
        label: '仓库A'
      }, {
        value: 2,
        label: '仓库B'
      }, {
        value: 3,
        label: '仓库C'
      }, {
        value: 4,
        label: '仓库D'
      }, {
        value: 5,
        label: '仓库E'
      }]
    };
  },
  created () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
    this.form.tableData6 = this.tableData6;
  },
  mounted () {
    const table = document.querySelector('.el-table__body-wrapper tbody');
    const self = this;
    Sortable.create(table, {
      onEnd ({ newIndex, oldIndex }) {
        const targetRow = self.tableData.splice(oldIndex, 1)[0];
        self.tableData.splice(newIndex, 0, targetRow);
      }
    });
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    showConfig () {},
    formValid () {
      this.$refs.form.validate((valid) => {
        console.log(valid);
      });
    }
  }
};
</script>

<style scoped>
  .text-overflow{
    display:block;                     /*内联对象需加*/
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
  }
</style>

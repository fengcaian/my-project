<template>
  <div>
    <el-select
      v-model="value.arr"
      multiple
      filterable
      remote
      reserve-keyword
      v-if="isShow"
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span>{{value.arr}}</span>
    <el-select v-model="value5" multiple placeholder="请选择" style="background-color: green" popper-class="bgClass">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" size="mini" @click="clickToConfirm">确认</el-button>
    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <span>右上</span>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <el-button>右边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <el-button>右下</el-button>
    </el-tooltip>
    <a href="tel:13163792392">call</a>
    <el-button type="primary" size="mini" @click="openDialog">打开弹出框</el-button>
    <el-dialog title="弹出框" :visible.sync="helloWorldDialog">
      <hello-world @callback="DialogCallback"></hello-world>
    </el-dialog>
    <table style="border: 1px solid grey">
      <tr>
        <td style="background-color: red">
          <el-select v-model="value5" multiple placeholder="请选择" style="background-color: green" popper-class="bgClass">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="value5" multiple placeholder="请选择" style="background-color: green" popper-class="bgClass">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td></td><el-select v-model="value5" multiple placeholder="请选择" style="background-color: green" popper-class="bgClass">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </tr>
      <tr>
        <td style="background-color: red">1235</td>
        <td>12341234</td>
        <td>12341234</td>
      </tr>
    </table>
    <el-button type="primary" size="mini" @click="routerTest">路由测试</el-button>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      options4: [],
      value: {
        arr: ''
      },
      list: [],
      loading: false,
      isShow: true,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value5: [],
      helloWorldDialog: false
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    },
    clickToConfirm () {
      console.log(this.value5)
    },
    phone (telNumber) {
      window.location.href = `tel://${telNumber}`
    },
    openDialog () {
      this.helloWorldDialog = true
    },
    DialogCallback () {
      this.helloWorldDialog = false
    },
    routerTest () {
      this.$router.replace('/test-url?name=1R1%PPM')
    }
  }
}
</script>

<style scoped>
  .box {
    width: 400px;
  }

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
  .bgClass {
    background-color: aquamarine;
  }
</style>

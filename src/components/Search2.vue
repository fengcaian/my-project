<template>
  <div>
    <el-select
      v-model="value.arr"
      multiple
      filterable
      remote
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
    <div class="div2">
      <div>32</div>
      <div>
        <div>2342</div>
      </div>
      <div>
        <div><div>2342</div></div>
      </div>
    </div>
    <div id="main">
      <div class="div1">
        <p class="d1p1">千呼万唤始出来</p>
        <div class="d1p2">犹抱琵半遮面</div>
      </div>
      <div class="div2">
        <p class="d1p1">银瓶乍破水浆迸</p>
        <div class="d1p2">铁骑突出刀枪鸣</div>
      </div>
    </div>
    <div class="qinxie"></div>
    <div class="div3"></div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
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
        'Wyoming']
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
    console.log(this.$route.matched)
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    console.log(moment().format('ll'))
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
    }
  }
}
</script>

<style scoped>
  .div4>div {color:green;}
  #main div{
    border: 1px solid blue;
  }
  .qinxie {
    height: 1px;
    width: 200px;
    margin-top: 200px;
    border-bottom: 1px solid grey;
    transform: rotate(30deg);
  }
  .div3 {
    width: 200px;
    height: 20px;
    background-color: antiquewhite;
  }
</style>

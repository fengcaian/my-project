<template>
  <div>
    <el-row>
      <el-input class="input-class" size="mini" v-model="form.param1"></el-input>
      +
      <el-input class="input-class" size="mini" v-model="form.param2"></el-input>
      <el-button type="primary" size="mini" @click="calculate('+')">计算</el-button>
      <el-input class="input-class" size="mini" disabled v-model="form.sum"></el-input>
    </el-row>
    <el-row>
      <el-input class="input-class" size="mini" v-model="form.param3"></el-input>
      -
      <el-input class="input-class" size="mini" v-model="form.param4"></el-input>
      <el-button type="primary" size="mini" @click="calculate('-')">计算</el-button>
      <el-input class="input-class" size="mini" disabled v-model="form.minus"></el-input>
    </el-row>
    <el-row>
      <el-input class="input-class" size="mini" v-model="form.param5"></el-input>
      *
      <el-input class="input-class" size="mini" v-model="form.param6"></el-input>
      <el-button type="primary" size="mini" @click="calculate('*')">计算</el-button>
      <el-input class="input-class" size="mini" disabled v-model="form.product"></el-input>
    </el-row>
    <el-row>
      <el-input class="input-class" size="mini" v-model="form.param7"></el-input>
      /
      <el-input class="input-class" size="mini" v-model="form.param8"></el-input>
      <el-button type="primary" size="mini" @click="calculate('/')">计算</el-button>
      <el-input class="input-class" size="mini" disabled v-model="form.quotient"></el-input>
    </el-row>
    <div>
      更多用法查看：
      <a class="link" target="_blank" href="https://juejin.im/post/5be00d15e51d451bc70bfa26">bignumber.js用法-掘金</a>
    </div>
	<div style="margin-top: 50px" v-html="result"></div>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js';
import hljs from 'highlight.js';
export default {
  data () {
    return {
      form: {
        param1: null,
        param2: null,
        sum: null,
        param3: null,
        param4: null,
        minus: null,
        param5: null,
        param6: null,
        product: null,
        param7: null,
        param8: null,
        quotient: null
      },
      json: 'select aa from table where a = 1',
	  result: ''
	};
  },
  created () {
	console.log(hljs);
	const lang = hljs.highlightAuto(this.json);
	this.result = hljs.highlight(lang.language, this.json).value;
  },
  methods: {
    calculate (type) {
      switch (type) {
        case '+':
          this.form.sum = Number(BigNumber(this.form.param1).plus(this.form.param2));
          break;
        case '-':
          this.form.minus = Number(BigNumber(this.form.param3).minus(this.form.param4));
          break;
        case '*':
          this.form.product = Number(BigNumber(this.form.param5).multipliedBy(this.form.param6));
          break;
        case '/':
          this.form.quotient = Number(BigNumber(this.form.param7).dividedBy(this.form.param8));
          break;
      }
    }
  }
};
</script>

<style scoped>
  .input-class {
    width: 200px;
    margin: 10px;
  }
  .link {
    text-decoration: none;
  }
</style>

<template>
  <div style="max-width: 1435px; overflow: auto">
    <el-button type="primary" size="mini" @click="sendRequest">发送请求</el-button>
  </div>
</template>

<script>
// import sendAjax from '@/api'
export default {
  data () {
    return {
      responseData: ''
    };
  },
  created () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
  methods: {
    sendRequest () {
      this.axios.get('')
        .then((res) => {
          console.log(res);
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

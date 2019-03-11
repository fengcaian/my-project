<template>
  <el-dialog
    width="600px"
    title="修改功能"
    :visible="dialogShow"
    :before-close="cancel">
    <el-row type="flex" justify="space-between">
      <el-col :span="20">
        <el-form ref="form" size="mini" label-width="120px" :model="form" :rules="rules">
          <el-form-item label="功能名称" prop="funcName">
            <el-input class="inputWidth350" size="mini" v-model.trim="form.funcName"></el-input>
          </el-form-item>
          <el-form-item label="功能描述" prop="funcDesc">
            <el-input class="inputWidth350" type="textarea" v-model.trim="form.funcDesc"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="info" size="mini" @click="cancel">取消</el-button>
      <el-button type="primary" size="mini" :loading="loading" @click="save">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { stringify } from 'qs';
import * as API from '@/api';

export default {
  props: ['dialogShow', '_id'],
  data () {
    return {
      form: {
        _id: '',
        funcName: '',
        funcDesc: '',
        parentId: ''
      },
      rules: {
        funcName: [
          { required: true, message: '请输入名称！', trigger: 'blur' }
        ]
      },
      loading: false
    };
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      this.axios
        .get(API.modifyFuncInit, {
          params: {
            _id: this._id
          }
        })
        .then((res) => {
          this.form = res.result;
        });
    },
    cancel () {
      this.$emit('dialogModifyFuncCb', false);
    },
    save () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.axios
            .post(API.modifyFunc, stringify(this.form))
            .then(() => {
              this.$message({
                message: '保存成功！',
                showClose: true,
                type: 'success'
              });
              this.$emit('dialogModifyFuncCb', true);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
  .inputWidth350 {
    width: 350px;
  }
</style>

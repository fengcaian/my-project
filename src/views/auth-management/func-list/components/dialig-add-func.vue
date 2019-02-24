<template>
  <el-dialog
    width="600px"
    title="添加功能"
    :visible="dialogShow"
    :before-close="cancel">
    <el-row type="flex" justify="space-between">
      <el-col :span="20">
        <el-form ref="form" size="mini" label-width="120px" :model="form" :rules="rules">
          <el-form-item label="功能名称" prop="funcName">
            <el-input class="inputWidth350" size="mini" v-model.trim="form.funcName"></el-input>
          </el-form-item>
          <el-form-item label="功能key" prop="funcKey">
            <el-input class="inputWidth350" size="mini" v-model.trim="form.funcKey"></el-input>
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
  props: ['dialogShow', 'treeNodeSelectedParentList', 'treeNodeSelected'],
  data () {
    return {
      form: {
        funcName: '',
        funcKey: '',
        funcDesc: '',
        parentId: ''
      },
      rules: {
        funcName: [
          { required: true, message: '请输入名称！', trigger: 'blur' }
        ],
        funcKey: [
          { required: true, message: '请输入key！', trigger: 'blur' }
        ]
      },
      loading: false
    };
  },
  created () {
    if (this.treeNodeSelected) {
      this.form.parentId = this.treeNodeSelected.id;
    } else {
      this.form.parentId = 1;
    }
  },
  methods: {
    cancel () {
      this.$emit('dialogAddFuncCb', false);
    },
    save () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.axios.post(API.saveFunc, stringify(this.form))
            .then(() => {
              this.$message({
                message: '保存成功！',
                showClose: true,
                type: 'success'
              });
              this.$emit('dialogAddFuncCb', true);
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

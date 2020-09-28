<template>
  <div class="new">
    <p>新建预约</p>
    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="预约人姓名" prop="name">
          <el-input :disabled="true" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" >
          <el-date-picker
            v-model="date_start"
            type="date"
            placeholder="选择开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" >
          <el-date-picker
            v-model="date_end"
            type="date"
            placeholder="选择结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="添加随性人" prop="accompany">
          <el-switch v-model="ruleForm.accompany"></el-switch>
        </el-form-item>
        <el-form-item label="随行人姓名" prop="accompanyName" v-if="ruleForm.accompany">
          <el-input v-model="ruleForm.accompanyName"></el-input>
        </el-form-item>
        <el-form-item label="预约地点" prop="needs">
          <el-checkbox-group v-model="ruleForm.needs">
            <el-checkbox label="签字笔" name="needs"></el-checkbox>
            <el-checkbox label="会议室" name="needs"></el-checkbox>
            <el-checkbox label="投影仪" name="needs"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="接待人选择" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="张磊"></el-radio>
            <el-radio label="陈老师"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注信息" prop="desc">
          <el-input type="textarea" size="large" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-plus" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data: function(){
    var checkPhone = (rule, value, callback) => {
      if(!(/^1[3456789]\d{9}$/.test(value))){ 
        callback(new Error('请输入密码'));
      } 
      callback();
    };
    return{
      ruleForm: {
        name: '大头鹅',
        phone: '',
        accompany: false,
        accompanyName:"",
        needs: [],
        resource: '',
        desc: '',
        date_start: "",
        date_end: ""
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        phone: [{  validator: checkPhone, required: true, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        accompanyName: [{  required: true, message: '请输入随行人姓名', trigger: 'blur' }
        ],
        date: [
          { type: 'dates', required: true, message: '请选择日期', trigger: 'change' }
        ],
        time: [
          { type: 'datetime', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },
    }
  },
  props: {

  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          
          // this.axios.post("",item,function(){

          // })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // addAccompany: function(){
    //   if(this.ruleForm.accompany){

    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .el-input--small{
    width: 100px;
  }
  p{
    margin: 0;
    text-align: center;
  }
  .content{
    padding-top: 20px;
  }
</style>

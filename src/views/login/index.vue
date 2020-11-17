<template>
  <div class="login-container">

    <div class="login-head"></div>

      <!-- 配置form表单验证
      1、必须给el-form组件绑定model 
      2、给需要验证的表单项el-form-item绑定prop属性
      3、给el-form组件的rules属性配置验证规则：下面data部分的formRules

      手动触发表单验证：
      1、给el-form设置ref
      2、通过ref的el-form组件，调用组件的validata进行验证
      -->


    <el-form class="login-form" ref="login-form" :model="user" :rules="formRules">
      
      <el-form-item prop="mobile">
      <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>


      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已经阅读并同意用户协议和政策隐私</el-checkbox>       
      </el-form-item>    

      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="loginLoading" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
          mobile:'',//手机号
          code:'',//验证码
          agree:false,//是否同意协议
      },

      loginLoading:false,//登录的loading状态
      formRules:{//表单验证规则配置
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change'  },
            //用正则表达式规定手机号格式：第一位是1，第二位是3或5或7或8或9，剩下9位随意
            { pattern:/^1[3|5|7|8|9]\d{9}$/,message:'请输入正确的号码格式',trigger: 'change'}
        ],  
        code:[
          { required: true, message: '验证码不能为空', trigger: 'change'  }
        ], 
        agree:[
          {//自定义校验规则
           validator:(rule,value,callback)=>{
             if(value){
               callback()
             }else{
               callback(new Error('请勾选同意用户协议'))
             }
           },
           trigger: 'change'
          }
        ],     
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onLogin() {
      //1获取表单数据
      //const user=this.user
      //2表单验证
      this.$refs['login-form'].validate(valid=>{
        //如果表单验证失败，停止
        if(!valid){
          return
        }
        //验证通过，请求登录
        this.login()
      })
    },


    login(){
      
          //开启登录中....
      this.loginLoading=true
      request({
        methods:'POST',
        //url:'/mp/v1_0/authorizations',
        data:this.user
      }).then(res=>{
        console.log(res)

        //成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        //关闭loading
        this.loginLoading=false

      }).catch(err=>{
        console.log('失败',err)
        //失败
        this.$message.error('登录失败')
        //关闭loading
        this.loginLoading=false
      })
    }
  },
};
</script>


<style scoped lang="less">
.login-container{
    position:fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:url("./login_bg.jpg") no-repeat;
    //背景填充模式
    background-size: cover;

    .login-head{
        width:300px;
        height: 57px;
        margin-bottom: 30px;
        // background: url("./logo_index.png") no-repeat;
    }
    .login-form{
        background-color: #fff;
        padding:50px;
        min-width: 300px;
        .login-btn{
            width: 100%;
        }
    }
}
</style>
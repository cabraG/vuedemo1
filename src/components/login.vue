<template>

  <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">登录界面</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="click()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return  {
        logining: false,
        account: {
          username: '',
          pwd: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods:{
      clicktest(){
        this.axios({

          /*headers: {'Authorization': 'bearer '+this.$store.state.users.currentUser.UserToken},*/
          method: 'post',
          url: '/test',
          data: {
            "test": "123456"
          }
        }).then(function(response){
          console.log(response.data.content);
          /*this.value = response.data;*/
          this.author = response.data.content;
        }.bind(this)).catch(function(error){
          console.log(error);
        });

      },
      click(){
        var loginParms={ username: this.account.username, password: this.account.pwd };
        this.axios({

          /*headers: {'Authorization': 'bearer '+this.$store.state.users.currentUser.UserToken},*/
          method: 'post',
          url: '/user/login',
          params: {
            "username": this.account.username,
            "password":this.account.pwd
          }
        }).then(function(response){
          let { msg, code, token } = response.data;
          if(code == '200'){
            //登录成功，把用户信息保存在sessionStorage中
            sessionStorage.setItem('access-token', token);
            //跳转到后台主界面
            this.$router.push({ path: '/first' });
          }else{
            this.$message({
              message: msg,
              type: 'error'
            });
          }

        }.bind(this)).catch(function(error){
          console.log(error);
        });

      }
    }
  }
</script>


<style>
  body{
    background: #DFE9FB;
  }
  .login-container{
    width:350px;
    margin-left:35%;
  }
</style>

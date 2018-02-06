<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
        placeholder="请输入用户名" v-model="userNameModel">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input" >
          <input type="password" 
            placeholder="请输入密码"  v-model="passwordModel" >
        </div>
        <span class="g-form-error">{{passwordError.passwordErrorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
 export default {
     data(){
       return{
            userNameModel:'',
            passwordModel:''
       }
    },
    computed:{
        userErrors(){
            let errorText,status;
          if(!/@/g.test(this.userNameModel)){
             errorText = '用户名必须是邮箱';
             status = false
          }else{
            errorText = '';
            status = true
          }
          if(!this.userFlag){
            errorText = ''; 
            this.userFlag = true
          }
          return {
              status,
              errorText
          }
        },
        passwordError(){
            let staus,passwordErrorText
            if(!/^\w{1,6}$/g.test(this.passwordModel)) {
              passwordErrorText = '密码必须1-6位',
              status = false 
            }else{
              passwordErrorText = '',
              status = true   
            }
            if(!this.passworldFlag){
                passwordErrorText = ''; 
                this.passworldFlag = true
             }
             return {
                 passwordErrorText,
                 status
            }
        }
       
    },
    methods:{
        onLogin(){
            console.log(this.passwordError.status , this.userErrors.status)
            if(!this.passwordError.status || !this.userErrors.status){
                alert("用户名或密码正确")
             }else{
                  this.$http.get('api/login',)
                  .then((res)=>{
                      console.log(res.data)
                      this.$emit('has-log',res.data)
                  })
                  .catch((error)=>{
                      console.log(error)
                  })
            }
        }
    }
    
 }
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

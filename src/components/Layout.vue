<template>
<div class="mian">
   <div class="app-head">
     <div class="app-head-inner">
       <router-link :to="{path:'/'}" >
         <img src="../assets/logo.png" alt="">
       </router-link>
          <div class="head-nav">
            <ul class="nav-list">
              <li>{{ username }}</li>
              <li v-if="username!==''" class="nav-pile"> | </li>
               <li v-if="username !==''" @click="outloginClick">退出</li>
              <li v-if="username ===''" @click="loginClick">登录</li>
              <li v-if="username ===''" class="nav-pile"  @click="regClick">注册</li>
              <li @click="aboutClick" class="nav-pile">关于</li>
            </ul>
         </div>
     </div>
   </div>
   <div class="app-content">
     <keep-alive>
        <router-view>
         
       </router-view>
     </keep-alive>
   </div>
     <div class="app-foot">
      <p>© 2016 随便写写，玩玩</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog"  @on-close="closeDialog('isShowAboutDialog')">
       <p> 京东于2004年正式涉足电商领域。2016年，京东集团市场交易额达到9392亿元*，净收入达到2601亿元，同比增长43%。京东是中国收入规模最大的互联网企业。2016年7月，京东入榜2016《财富》全球500强，成为中国首家、唯一入选的互联网企业。
2014年5月，京东集团在美国纳斯达克证券交易所正式挂牌上市，是中国第一个成功赴美上市的大型综合型电商平台，并成功跻身全球前十大互联网公司排行榜，2015年7月，京东凭借高成长性入选纳斯达克100指数和纳斯达克100平均加权指数。</p>
    </my-dialog>
    <my-dialog :is-show="isShowLoginDialog"  @on-close="closeDialog('isShowLoginDialog')">
       <login-form @has-log="onSucessLog"></login-form> 
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog"  @on-close="closeDialog('isShowRegDialog')">
       <reg-form></reg-form>
    </my-dialog>
</div>
 
</template>
 
<script>
import Dialog from './base/dialog'
import loginForm from './loginForm'
import regForm from './regForm'
export default {
   components:{
     MyDialog:Dialog,
     loginForm,
     regForm
   },
  data () {
    return {
      isShowAboutDialog:false,
      isShowRegDialog:false,
      isShowLoginDialog:false,
      username:''
    }
  },
  methods:{
    aboutClick(){ 
     this.isShowAboutDialog=true
    },
    loginClick(){
      this.isShowLoginDialog=true
    },
    regClick(){
      this.isShowRegDialog = true
    },
    closeDialog(attr){
      this[attr] = false
    },
    onSucessLog(data,attr){
       this.username = data.username
       this.closeDialog('isShowLoginDialog')
    },
    outloginClick(){
        this.username = ''
    }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
  padding-left: 10px;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>


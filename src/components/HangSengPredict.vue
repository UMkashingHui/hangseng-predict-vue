
<template>

  <div>
    <el-main>
      <el-form ref="loginForm"  label-width="80px" class="login-box">
        <h3 class="login-title">欢迎竞猜</h3>
        <el-row align="middle">
          <div>
            <el-form-item>
              <el-button size="large" type="success" v-on:click="predict" >涨</el-button>
              <el-button size="large" type="danger" v-on:click="predict" style="margin-left:70px;">跌</el-button>
            </el-form-item>
          </div>
        </el-row>

      </el-form>
    </el-main>
  </div>
</template>


<script>
export default {
  name: 'HangSengPredict',
  data () {
    return {
      responseResult: []
    }
  },
  methods: {
    predict () {
      this.$axios
          .post('/predict', {
            // TODO 微信公众号后端
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/'})
            }
          })
          // .catch(failResponse => {
          // })
    }
  }
}

</script>

<style scoped>
.login-box{
  border: 1px solid #DCDFE6;
  width: 350px;
  margin:180px auto;
  padding:35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow:0 0 25px #909399;
}

.login-title{
  text-align:center;
  margin:0 auto 40px auto;
  color:#303133;
}
</style>


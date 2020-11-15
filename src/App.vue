<template>
  <div id="app">
    <router-view/>

    <el-button type="success">成功按钮</el-button>

    <el-input-number 
    v-model="num" 
    :min="1" 
    :max="10" 
    label="描述文字">
    </el-input-number>

  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      num:6
    }
  }
}
</script>

<style lang="less">
</style>

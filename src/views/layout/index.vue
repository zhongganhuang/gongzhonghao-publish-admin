<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="166px">
      <app-aside class="aside-menu" />
    </el-aside>
    <el-container>
      <el-header class="header">
        <!-- 收起展开的图标，element自带 -->
        <div>
          <i class="el-icon-s-fold"></i>
          <span>旧铁皮往南开L</span>
        </div>

        <!-- 头导航栏右边的头像以及下拉菜单 -->
        <el-dropdown>
          <div class="avatar-wrap">
            <img class="avatar" :src="user.photo" alt="">
            <span>{{user.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <!-- <span>
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span> -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <!-- 默认子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from "./components/aside";
import {getUserProfile} from '@/api/user'

export default {
  name: "LayoutIndex",
  components: {
    AppAside,
  },
  props: {},
  data() {
    return {
      user:{}//当前登录用户信息
    };
  },
  computed: {},
  watch: {},
  created() {
    // 组件初始化好，请求获取用户资料
    this.loadUserProfile()
  },
  mounted() {},
  methods: {
    // 除了登录接口，其他所有接口都需要授权才能使用
    loadUserProfile(){
      getUserProfile().then(res=>{
        this.user=res.data.data
      })
    }
  },
};
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  background-color: aquamarine;
  .aside-menu {
    height: 100%;
  }
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.main {
  background-color:#e9eef3;
}
.avatar-wrap{
  display: flex;
  align-items: center;
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
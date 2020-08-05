<template>
  <div class="menu">
    <el-row class="tac">
  <el-col :span="150">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">
        <router-link to="/list">
          <i class="el-icon-setting"></i>
          <span slot="title">预约列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/new">
          <i class="el-icon-setting"></i>
          <span slot="title">新建预约</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: function(){
    return{
      activeName: 'second'
    }
  },
  props: {

  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
[class*=el-col-] {
  float: none;
}
</style>

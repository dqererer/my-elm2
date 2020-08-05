<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">
          <Menu/>
        </el-aside>
        <el-main>
          <List/>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  components: {
    Menu,
    List
  }
}
</script>

<style>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>

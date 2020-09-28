<template>
  <el-container class="list">
    <el-header>
      <div class="content">
        <el-input v-model="input" clearable></el-input>
        <el-button type="warning">搜索</el-button>
      </div>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :header-cell-style="{ background:'#FAFAFA' }"
        :row-style="{ height: '48px' }"
        style="width: 100%">
        <el-table-column
          align='center'
          prop="assetName"
          label="资产名称"
          width="180">
        </el-table-column>
        <el-table-column
          align='center'
          prop="cilabel"
          label="参数项"
          width="180">
        </el-table-column>
        <el-table-column
          align='center'
          prop="startTimeStr"
          label="开始时间">
        </el-table-column>
        <el-table-column label="操作" align='center'>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :pager-count = 5
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, prev, pager, next, sizes "
          :total="total">
        </el-pagination>
      </div>
      

    </el-main> 
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="资产名称" :label-width="formLabelWidth">
            <el-select v-model="form.name" placeholder="请选择" @change="changeCilabelName">
              <el-option
                v-for="item in cilabels"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="参数项" :label-width="formLabelWidth">
            <el-select v-model="form.item" placeholder="请选择" @change="changeItem">
              <el-option
                v-for="item in items"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "List",
  data: function() {
    return {
      tableData: [],
      input: "",
      total: 0,
      page: 1,
      size: 10,
      dialogFormVisible: false,
      form: {
        name: '',
        item: '',
      },
      formLabelWidth: '120px',
      cilabels:[1,2,3,4,5,6,7],
      items: [],
    };
  },
  props: {},
  created: function() {
    this.getData(this.page);
  },
  methods: {
    handleEdit: function(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
      this.form.name = row.assetName;
      this.form.item = row.cilabel;
    },
    handleDelete: function(index, row) {
      console.log(index, row);
    },
    handleSizeChange: function(val) {
      this.size = val;
      this.getData(this.page);
    },
    handleCurrentChange: function(val) {
      this.getData(val);
    },
    getData: function(page){
      let timestamp = (new Date()).getTime();
      this.axios.get(`http://140.210.90.86/energy-background/manual/uploadHistoryList?isPage=true&page=${page}&pageSize=${this.size}&timestamp=${timestamp}`).then(res => {
        this.tableData = res.data.body.list;
        this.total = res.data.body.total;
        this.page = res.data.body.pageNum;
      });
    },
    changeCilabelName: function(){
      if(this.form.name == 1){
        this.items = [1.1,1.2,1.3,1.4];
        this.form.item = "";
      }else{
        this.items = [2.1,2.2,2.3,2.4];
        this.form.item = "";
      }
    },
    changeItem :function(){
      console.log(this.form.item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// .header{
//   background: gray;
// }
.el-header {
  background: #E9EEF3;
  height: 28px!important;
  line-height: 28px;
  display: flex;
  justify-content: flex-end;
  .content{
    width: 270px;
    display: flex;
    justify-content: space-between;
    .el-input{
      width: 200px;
    }
  }
}
.el-main{
  .page{
    // display: flex;
    // justify-content: flex-end;
    text-align: right;
  }
}
</style>
// header-row-class-name = "header"

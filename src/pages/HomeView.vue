<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in kdata" :key="item.id">
        <div class="clsaaData" v-if="kid==item.kind_id||kid==item.all_id">
          <div class="grid-content bg-purple">
            <img src="../assets/ewm.png" alt="">
            <div class="text">
              <div class="text_title">{{ item.kind_title }}</div>
              <div class="text_body">{{item.kind_text}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
  export default{
    data(){
      return{
        classData:[]
      }
    },
    props:{
      kid:{
        type:String,
        required:true
      }
    },
    computed:{
      ...mapState(['kdata']),
      ...mapGetters(['kdata'])

    },
    created(){
      this.fetchKdata()
    },
    methods:{
      ...mapActions(['fetchKdata'])
      
    }
  }

</script>
<style>

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    height: 100px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #D2D2D2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .bg-purple img{
    width: 80px;
    height: 80px;
    line-height: 100px; 
    margin-right: 20px;
  }

  .text_title{
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  .text_body{
    font-size: 15px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-breadcrumb{
    padding-top: 20px;
    padding-bottom: 10px;
  }
</style>
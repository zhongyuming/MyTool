<template>
    <div class="main_body">
        <div class="main_text">
            <div class="main_text_logo">轻量且实用的工具站</div>
            <div class="main_text_img">
                <img src="../assets/数码手机.png" alt="">
            </div>
        </div>
        <el-tabs stretch @tab-click="handelClick">
            <el-tab-pane v-for="item in classify"
            :label="item.title"
            :name="item.index"
            :key="item.id"
            :data-kid="item.id"
            >
                <HomeView :kid="kid"></HomeView>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import HomeView from '../pages/HomeView.vue';
    export default{
        data(){
            return{
                kid:''
            }
        },
        components:{ HomeView },
        computed:{
            ...mapGetters(["classify"]),
        },
        methods:{
            handelClick(e){
                this.kid=e.index
            }
        }
    }
</script>
<style>
    .main_body {
        width: 100%;
        margin: 0 auto;
        background: url(../assets/bg.svg) no-repeat;
        color: #333;
    }

    .main_text{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .main_text_logo{
        font-size: 22px;
        flex: 9;
    }
    .main_text_img{
        flex: 1;
    }
    .main_text_img img{
        width: 60px;
        padding: 10px 0;
    }
    .main_body_tile{
        width: 80%;
        margin: 0 auto;
    }
    .main_body_router{
        width: 80%;
        margin: 0 auto;
    }
    .el-tabs{
        width: 80%;
        margin: 0 auto;
    }
</style>
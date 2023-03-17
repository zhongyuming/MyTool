<template>
    <div class="header">
        <h1>工具站</h1>
        <a href="#">首页</a>
    </div>
</template>
<script>
    export default{
        name:'ToolHeader',
    }
</script>
<style scoped>
    .header{
        width: 80%;
        margin: 0 auto;
        color: #333;
        height: 60px;
    }

    .header a{
        line-height: 60px;
    }

    .header h1{
        float: left;
        padding-right: 40px;
        line-height: 60px;
    }

    .footer{
        margin: 0 auto;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
</style>
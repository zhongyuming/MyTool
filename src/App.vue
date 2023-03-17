<template>
  <div>
    <ToolHeader></ToolHeader>
    <MainBody></MainBody>
    <ToolFooter></ToolFooter>
  </div>

</template>
<script>
  import ToolHeader from './components/ToolHeader';
  import MainBody from './components/MainBody.vue';
  import ToolFooter from './components/ToolFooter.vue';
  export default{
    name:'App',
    components:{ ToolHeader,MainBody,ToolFooter}
  }
</script>
<style>
  * {
    font-family: Arial, sans-serif;
    margin: 0;
  }


</style>

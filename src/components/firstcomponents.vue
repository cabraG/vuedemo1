<template>
  <div id="firstcomponent">
    <h1>标题</h1>
    <a> 作者：{{ author }} </a>
  </div>
</template>

<script>
  import axios from 'axios'
  var datatest = 'cabra'

  export default {
    mounted: function() {
      var _this = this;
    axios.post('/greeting')
    .then(function (response) {
      console.log(1)
      datatest = response.data.content;
      console.log(datatest);
      _this.author=response.data.content;

    })
    .catch(function (error) {
      console.log(error);
    })
    },
    data() {


      return {
        author: datatest
      }
    }
  }
</script>

<style scoped>

</style>

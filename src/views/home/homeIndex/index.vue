<template>
    <div class='wrapper'>
      {{$t("home.title")}}
      <div class="test">
          <p class="hello">Hello</p>
      </div>

    </div>
</template>
 
<script>
  import homeApi from '@api/home'
  export default {
    name: 'homeIndex',
     data() {
      return {
        
      } 
    },
    computed: {

    },
    created() {
      homeApi.curingServiceGoods().then((res)=>{
        
      })
    },
    mounted() {
 
    },
    methods: {
   
    }
  }
</script>

<style scoped lang="scss">
    * {
      margin: 0;
      padding: 0;
    }
    .test{
        width:1920px;
        height:160px;
        background-color: bisque;
    }
    .hello{
        color:red;
    }
</style>

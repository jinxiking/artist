<template>
      <div>
        <span>
          asda
        </span>
        <HelloWorld></HelloWorld>
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
        console.log(res)
      })
    },
    mounted() {
 
    },
    methods: {
   
    }
  }
</script>

<style scoped lang="scss">
    div{
      background: red;
      span{
        font-size: 100px;
      }
    }
</style>

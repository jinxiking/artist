<template>
    <div>
      {{$t("home.title")}}
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
    
      span{
        font-size: 100px;
      }
    }
</style>

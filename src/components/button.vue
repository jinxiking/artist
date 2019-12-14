<template>
  <div class="button">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'artButton',
  props: {
    title: {
      type : String,
      default : '确定'
    }
  }
}
</script>

<style scoped lang="scss">
    .button{
        width: 163px;
        height:52px;
        border: 2px solid #000;
        cursor: pointer;
        font-family:'Futura Std';
        font-size:17px;
        line-height: 52px;
        text-align: center;
        transition: all ease 0.2s;
    }

    .button:hover{
        color:#fff;
        background: #DEDEDE!important;
    }
</style>

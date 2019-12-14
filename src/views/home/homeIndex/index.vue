<template>
    <div>
      <div class='top_div'>
        <div class='login_content'>
          <span>登录</span>

        </div>
        <div class='logo'>
          <img src='../../../../static/home/logo.png'>

        </div>
      </div>

      <div class='banner'>
          <div class='nav'>
            <div>
              关于
              <div class='line'></div>
            </div>
            <div>
              艺术家
              <div class='line'></div>
            </div>
            <div>
              资讯
              <div class='line'></div>
            </div>
            <div>
              商店
              <div class='line'></div>
            </div>
            <div>
              我的
              <div class='line'></div>
            </div>
          </div>
      </div>
      
      <div class='banner_content'>
        <div class='banner_dero'>
            <div class='title'>
              New In The Shop:
              Wendi You
              Edition Print Bundle

            </div>
            <div class='name'>
              《豫阅》：游雯迪水墨个展
            </div>
            <div class='btn_content'>
              <artButton :title='"Read More"' class='button'></artButton>
            </div>
        </div>
      </div>

      <div class='works'>
        <div class='works_title'>
          works<span>作品</span>
        </div>
        <div class='work_content'>
          <div class='first_line'>
            <div>
              <img src-        > 
            </div>

          </div>
        </div>

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
    .top_div{
      margin-left: 25px;
      margin-right: 25px;
      // height: 200px;
      border-bottom:2px solid  rgb(222,222,222);
      .login_content{

        font-size:15px;
        display: flex;
        justify-content: flex-end;
        color:#000;
        font-weight:400;
        margin-top: 67px;
        margin-right:168px; 
      }
    }
    .logo{
      display: flex;
      justify-content: flex-start;
      margin-top: 26px;
      margin-bottom:13px;
      img{
        width: 453px;
        height: 76px;
        margin-left: 179px;
      } 
    }
    .banner{
      display: flex;
      justify-content:flex-end;
    }
    .nav{
      margin-left: 25px;
      margin-right: 25px;
      font-size: 18px;
      display: flex;
      justify-content: flex-start;
      padding-right: 122px;
      margin-top: 23px;
     

      .line{
        height: 1px;
        color:#000;
        opacity: 1;
        margin-top: 8px;
        background-color:#000; 
        transition: all ease 0.1s;
      }
      &>div{
        margin: 0px 46px;
        cursor: pointer;
        &:hover{
          .line{
            opacity:0;
          }
        }
      }
    }
    .banner_content{
      margin-top: 203px;
      display: flex;
      justify-content: center;
      .banner_dero{

        .title{
          width: 449px;
          font-size:47px;
          font-family:'Futura Std';
          font-weight:800;
          line-height:52px;
          text-align: center;
        }
      }
      .name{
        font-size:26px;
        font-weight:300;
        line-height:46px;
        margin-top:29px;
        text-align: center;
    
      }
      .btn_content{
        display: flex;
        justify-content: center;
      }
      .button{
        margin-top: 48px;
      }
    }


    .works{
      margin-left: 471px;
      margin-right: 219px;
      margin-top: 249px;
      .works_title{
        font-size:39px;
        font-weight:800;
        border-bottom: 2px solid #DEDEDE; 
        padding-bottom:11px; 
        span{
          font-size:24px;
          margin-left: 12px;
          font-weight: normal;
        }
      }
      .work_content{
        padding-top:135px;
        padding-bottom:84px;
      }
    }
</style>

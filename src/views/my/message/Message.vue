<template>
  <div class="Message">
    <header>
      <div class="t"></div>
      <p>154548787</p>
    </header>
    <div class="concent">
      <p class="l-p">我的订单</p>
      <p class="r-p">全部订单></p>
    </div>
    <div class="concent1">
      <div class="text">
        <span class="iconfont icon-gouwuchekong"></span>
        <p>待付款</p>
      </div>
      <div class="text">
        <span class="iconfont icon-youhuiquan"></span>
        <p>优惠券</p>
      </div>
      <div class="text">
        <span class="iconfont icon-shoucang"></span>
        <p>收藏</p>
      </div>
    </div>
    <div class="concent2">
      <div class="txt">
        <div class="t-l">
          <span class="iconfont icon-shoucang"></span>
        </div>
        <div class="t-r">
          <p class="p1">会员中心</p>
          <p class="p2">></p>
        </div>
      </div>
      <div class="txt1" @click="fn">
        <div class="t-l">
          <span class="iconfont icon-dizhi"></span>
        </div>
        <div class="t-r">
          <p class="p1">收货地址</p>
          <p class="p2">></p>
        </div>
      </div>
    </div>
    <div class="concent2">
      <div class="txt">
        <div class="t-l">
          <span class="iconfont icon-youhuifangshi"></span>
        </div>
        <div class="t-r">
          <p class="p1">我的优惠</p>
          <p class="p2">></p>
        </div>
      </div>
      <div class="txt1">
        <div class="t-l">
          <span class="iconfont icon-yijian"></span>
        </div>
        <div class="t-r">
          <p class="p1">我的意见</p>
          <p class="p2">></p>
        </div>
      </div>
    </div>
    <div class="concent3">
      <div class="txt">
        <div class="t-l">
          <span class="iconfont icon-youhuifangshi"></span>
        </div>
        <div class="t-r">
          <p class="p1">浏览记录</p>
          <p class="p2">></p>
        </div>
      </div>
    </div>
    <div class="concent3">
      <div class="txt">
        <div class="t-l">
          <span class="iconfont icon-youhuifangshi"></span>
        </div>
        <div class="t-r">
          <p class="p1">我的名片</p>
          <p class="p2">></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods:{
      fn(){
        this.$router.push({path:'/site'})
      }
  }
};
</script>

<style scoped lang="less">
.iconfont {
  font-size: 0.4rem;
}
.Message {
  height: 13rem;
  background: #f5f5f5;
}
header {
  width: 100%;
  height: 1.4rem;
  background: #f37d0f;
  overflow: hidden;
  .t {
    width: 0.88rem;
    height: 0.88rem;
    border-radius: 50%;
    border: 0.05rem solid #dcdcdc;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    float: left;
  }
  p {
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.2rem;
    float: left;
    margin-left: 0.4rem;
    color: #ffffff;
  }
}
.concent {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #dcdcdc;
  background: #ffffff;
  .l-p {
    height: 0.8rem;
    line-height: 0.8rem;
    float: left;
    margin-left: 0.4rem;
    font-size: 0.3rem;
  }
  .r-p {
    font-size: 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    float: right;
    margin-right: 0.3rem;
  }
}
.concent1 {
  width: 100%;
  height: 1.7rem;
  background: #ffffff;
  .text {
    width: 33%;
    height: 1.2rem;
    margin-top: 0.4rem;
    float: left;
    font-size: 0.3rem;
    span {
      font-size: 0.5rem;
    }
  }
}
.concent2 {
  width: 100%;
  height: 1.8rem;
  background: #ffffff;
  margin-top: 0.2rem;
  .txt {
    width: 100%;
    height: 0.9rem;
    .t-l {
      width: 15%;
      height: 0.9rem;
      line-height: 0.8rem;
      float: left;
      font-size: 0.4rem;
      color: #ffa339;
    }
    .t-r {
      width: 85%;
      border-bottom: 1px solid #dcdcdc;
      height: 0.9rem;
      float: right;
      .p1 {
        float: left;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.8rem;
      }
      .p2 {
        float: right;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.8rem;
        margin-right: 0.2rem;
      }
    }
  }
  .txt1 {
    width: 100%;
    height: 0.9rem;
    .t-l {
      width: 15%;
      height: 0.9rem;
      line-height: 0.9rem;
      float: left;
      font-size: 0.4rem;
      color: #ffa339;
    }
    .t-r {
      width: 85%;
      float: right;
      height: 0.9rem;
      .p1 {
        float: left;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.9rem;
      }
      .p2 {
        float: right;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.9rem;
        margin-right: 0.2rem;
      }
    }
  }
}
.concent3 {
  width: 100%;
  height: 0.9rem;
  background: #ffffff;
  margin-top: 0.2rem;
  .txt {
    width: 100%;
    height: 0.9rem;
    .t-l {
      width: 15%;
      height: 0.9rem;
      line-height: 0.8rem;
      float: left;
      font-size: 0.4rem;
      color: #ffa339;
    }
    .t-r {
      width: 85%;
      float: right;
      .p1 {
        float: left;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.9rem;
      }
      .p2 {
        float: right;
        font-size: 0.4rem;
        height: 0.9rem;
        line-height: 0.9rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>

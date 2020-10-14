<template>
  <div>
    <header>
      <span class="iconfont icon-fanhui" @click="exit"></span>
      <p>收货地址</p>
      <span class="iconfont icon-search" id="span"></span>
    </header>
    <div
      ref="div"
      class="concent"
      v-for="(item, index) in siteData"
      :msg="item"
      :key="index"
    >
      <div class="c-t">
        <p>
          <span>{{ item.name }}</span>
        </p>
        <p>{{ item.phone }}</p>
        <p @click="deleteFn">删除</p>
      </div>
      <div class="c-b">
        <div class="c-bl">
          <p>{{ item.address_info }}</p>
          <p>{{ item.address_region }}</p>
        </div>
        <div class="c-br">
          >
        </div>
      </div>
    </div>
    <footer @click="go">新建地址</footer>
  </div>
</template>

<script>
import { siteData } from "../../../api/index.js";
export default {
  name: "Site",
  data() {
    return {
      siteData: [],
      newdata: {}
    };
  },
  methods: {
    exit() {
      this.$router.push({ path: "/my" });
    },
    fn() {
      siteData().then(res => {
        this.siteData = res;
        if (JSON.parse(sessionStorage.getItem("arr")) == null) {
          console.log()
        } else {
          this.siteData.push(JSON.parse(sessionStorage.getItem("arr"))[0]);
          console.log(this.siteData)
        }
      });
    },
    go() {
      this.$router.push({ path: "/siteData" });
    },
    deleteFn() {
      this.fn()
      sessionStorage.removeItem("arr");
    }
  },
  created() {
    this.fn();
  }
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 0.8rem;
  background: #f0f0f0;
  span {
    font-size: 0.6rem;
    float: left;
    margin-top: 0.1rem;
  }
  p {
    width: 3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    /*margin: auto;*/
    float: left;
    font-size: 0.4rem;
    margin-left: 1.7rem;
  }
  #span {
    width: 0.6rem;
    font-size: 0.6rem;
    float: right;
  }
}
.concent {
  width: 96%;
  height: 1.9rem;
  border: 1px solid #000000;
  margin-left: 2%;
  margin-top: 0.2rem;
  .c-t {
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #000000;
    p {
      font-size: 0.4rem;
      color: #222222;
      width: 33%;
      height: 0.9rem;
      line-height: 0.9rem;
      float: left;
      span {
        color: #ff6804;
      }
    }
  }
  .c-b {
    width: 100%;
    height: 0.9rem;
    .c-bl {
      float: left;
      p {
        margin-top: 0.1rem;
        width: 100%;
        height: 0.45rem;
        linr-height: 0.45rem;
        text-align: left;
      }
    }
    .c-br {
      float: right;
      height: 0.45rem;
      font-size: 0.6rem;
      line-height: 0.45rem;
      margin-top: 0.3rem;
      margin-right: 0.3rem;
      color: #dcdcdc;
    }
  }
}
footer {
  width: 100%;
  height: 1.3rem;
  background: #ff6700;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  line-height: 1.3rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>

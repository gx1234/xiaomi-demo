<template>
  <div class="shopping">
    <header>
      <span class="iconfont icon-fanhui" @click="exit"></span>
      <p>购物车</p>
      <span class="iconfont icon-search" id="span"></span>
    </header>
    <div class="content">
      <div class="ts">
        <h2>登录后享受更多优惠</h2>
        <p>去登录></p>
      </div>
      <div class="null" v-if="msgs.length == 0">
        购物车还是空的 <button @click="gohome">去逛逛</button>
      </div>
      <div class="commodity" v-else>
        <ul>
          <li v-for="(item, index) in msgs" :key="index" style="margin-top:0.2rem">
            <div class="left">
              <img :src="item.img" alt="" />
            </div>
            <div class="right">
              <h2>{{ item.name }}</h2>
              <p>{{ item.price }}</p>
              <div class="wrap">
                <div class="box">
                  <button @click="changes('-', index)">-</button>
                  <input type="text" :value="item.len" disabled />
                  <button @click="changes('+', index)">+</button>
                </div>

                <div class="ljt" @click="removes(index)">
                  <span class="iconfont icon-shanchu"></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <list></list>

    <div class="bottom" v-if="msgs.length !== 0">
      <div class="left">
        <p>共件金额：{{ totil }}</p>
        <div>
          <span></span>
          元
        </div>
      </div>
      <div class="center">
        继续购物
      </div>
      <div class="right">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import List from "../../components/list/list";

export default {
  name: "Shopping",
  data() {
    return {
      msgs: [],
      totil: 0
    };
  },
  components: { List },
  created() {
    // this.$store.commit('onrefresh','start');
  },
  mounted() {
    this.gethome();

    this.gettotil();
  },
  beforeCreate() {},
  methods: {
    gethome() {
      this.msgs = this.$store.state.spct;
    },
    exit() {
      this.$router.go(-1);
    },
    gohome() {
      this.$router.push({ path: "/" });
    },
    gettotil() {
      this.totil = 0;
      for (let i = 0; i < this.msgs.length; i++) {
        this.totil += this.msgs[i].price * this.msgs[i].len;
      }
    },
    changes(val, index) {
      if (val === "+") {
        this.$store.commit("variation", { id: this.msgs[index].id, jj: "+" });
      } else {
        this.$store.commit("variation", { id: this.msgs[index].id, jj: "-" });
      }
      this.gethome();
      this.gettotil();
    },
    removes(index) {
      this.$store.commit("removex", index);
      this.gethome();
      this.gettotil();
    }
  },
  beforeunloadHandler() {}
};
</script>

<style scoped>
.iconfont {
  font-size: 0.6rem;
}
header {
  width: 100%;
  height: 0.8rem;
  background: #f0f0f0;
}

header #span {
  width: 0.6rem;
  font-size: 0.6rem;
  float: right;
}
header span {
  font-size: 0.6rem;
  float: left;
  margin-top: 0.1rem;
}
header p {
  width: 3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  /*margin: auto;*/
  float: left;
  font-size: 0.4rem;
  margin-left: 1.7rem;
}
.list {
  padding-bottom: 1rem;
}
.ts {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  height: 0.8rem;
}
.ts h2 {
  font-size: 0.3rem;
  color: #212121;
}
.ts p {
  font-size: 0.24rem;
  color: #757575;
}
.null {
  width: 100%;
  height: 1.2rem;
  background: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background: #fff;
  height: 0.88rem;
  border-top: 0.01rem solid #666;
}
.bottom .left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
}
.bottom .center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #f4f4f4;
}
.bottom .right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #ff6700;
  color: #fff;
}
.commodity {
  width: 100%;
}
.commodity ul li {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.commodity ul li .left {
  width: 1.8rem;
  height: 1.8rem;
  border: 0.01rem solid #666;
  float: left;
}
.commodity ul li .left img {
  height: 100%;
}
.commodity ul li .right {
  float: right;
}
.commodity ul li .right h2 {
  font-size: 0.24rem;
  line-height: 0.46rem;
  color: #666666;
}
.commodity ul li .right p {
  font-size: 0.24rem;
  line-height: 0.46rem;
  color: #666666;
}
.commodity ul li .right .box {
  width: 2.34rem;
  height: 0.66rem;
  border-radius: 0.05rem;
  border: 0.02rem solid #bbbbbb;
  float: left;
}
.commodity ul li .right .box button,
input {
  float: left;
  height: 0.66rem;
}
.commodity ul li .right .box button {
  width: 0.8rem;
}
.commodity ul li .right .box input {
  width: 0.66rem;
  height: 0.6rem;
}
.commodity ul li .right .ljt {
  float: right;
}
</style>

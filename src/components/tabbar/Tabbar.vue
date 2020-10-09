<template>
  <div class="tabbar">
    <footer>
      <ul>
        <li v-for="(item, index) in tabbarArr" :key="index" @click="fn(index)">
          <router-link :to="item.path">
            <span :class="item.iconfont" :style="make==index?{color:'cornflowerblue'}:{color:'#000'}"></span>
            <p :class="make === index ? 'active' : ''" >{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      make: 0,
      tabbarArr: [
        {
          path: "/home",
          title: "首页",
          iconfont: "iconfont icon-shouye"
        },
        {
          path: "/classify",
          title: "分类",
          iconfont: "iconfont icon-icon"
        },
        {
          path: "/shopping",
          title: "购物车",
          iconfont: "iconfont icon-gouwuchekong"
        },
        {
          path: "/my",
          title: "个人",
          iconfont: "iconfont icon-tubiaozhizuomoban"
        }
      ]
    };
  },
  methods: {
    fn(i) {
      this.make = i;
    }
  }
};
</script>

<style scoped lang="less">
.iconfont {
  font-size: 0.4rem;
  color: #000000;
}
.tabbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.88rem;
  footer {
    width: 100%;
    height: 0.88rem;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    ul {
      display: flex;
      height: 0.88rem;
      li {
        display: flex;
        height: 0.88rem;
        justify-content: center;
        align-items: center;
        width: 25%;
        p {
        }
        .active {
          color: cornflowerblue;
        }
      }
    }
  }
}
</style>

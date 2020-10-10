<template>
  <div class="classify">
    <div class="header">
      <span class="iconfont icon-fanhui"></span>
      分类
      <span class="iconfont icon-search"></span>
    </div>
    <div class="content">
      <div class="c-left" ref="Menu">
        <ul>
          <li
            @click="clickItem(index)"
            :class="index === currentIndex ? 'current' : ''"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ item.left }}
          </li>
        </ul>
      </div>
      <div class="c-right" ref="rightli">
        <div v-for="(item, index) in arr" :key="index">
          <div class="img">
            <img :src="item.info[0].title_img" alt="" />
          </div>
          <div class="box">
            <div class="niu">
              <p class="ones"></p>
              <span class="head">{{ item.info[0].title }}</span>
              <p class="ones"></p>
            </div>
            <ul class="c-r-button">
              <li v-for="(item, index) in arr" :key="index">
                <img :src="item.info[0].list[0].img" />
                <p>{{ item.info[0].list[0].name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "Classify",
  data() {
    return {
      arr: [],
      scrollY: 0,
      rightTops: [],
      leftBSroll: null
    };
  },
  methods: {
    leftArr() {
      this.$axios.get("js/data.json").then(res => {
        console.log(res);
        this.arr = res.data;
      });
    },
    _initBscroll() {
      this.leftBSroll = new BetterScroll(".c-left", {
        click: true
      });
      this.rightBcroll = new BetterScroll(".c-right", {
        probeType: 3
      });
      this.rightBcroll.on("scroll", pos => {
        this.scrollY = Math.floor(Math.abs(pos.y));
      });
    },
    _initRightLiTops() {
      let lis = this.$refs.rightli.querySelectorAll(".right-item");
      let tempArr = [];
      let top = 0;
      tempArr.push(top);
      lis.forEach((item, index) => {
        if (index === lis.length - 1) {
          item.style.paddingBottom = `${window.innerHeight -
            item.clientHeight -
            100}px`;
          this.rightBcroll.refresh();
        }
        top += lis[index].clientHeight;
        tempArr.push(top);
      });
      tempArr.push(Number.MAX_SAFE_INTEGER);
      this.rightTops = tempArr;
      // console.log(tempArr);
    },
    //左侧滑动
    _leftMove(i) {
      let leftlis = this.$refs.Menu.getElementsByTagName("li");
      let el = leftlis[i];
      this.leftBSroll.scrollToElement(el, 300);
    },
    clickItem(i) {
      this.scrollY = this.rightTops[i];
      this.rightBcroll.scrollTo(0, -this.scrollY, 300);
    }
  },
  created() {
    this.leftArr();
  },
  watch: {
    arr() {
      this.$nextTick(() => {
        this._initBscroll();
        this._initRightLiTops();
      });
    }
  },
  computed: {
    currentIndex() {
      return this.rightTops.findIndex((item, index) => {
        this._leftMove(index);
        return this.scrollY >= item && this.scrollY < this.rightTops[index + 1];
      });
    }
  }
};
</script>

<style scoped lang="less">
.classify {
  width: 100%;
}
.header {
  width: 100%;
  height: 0.85rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.85rem;
  background: #cccccc;
  position: fixed;
  top: 0;
  left: 0;
}
.header span {
  font-size: 0.28rem;
  padding: 0rem 0.2rem;
}
.content {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.85rem;
  bottom: 0.4rem;
  display: flex;
  overflow: hidden;
}
.c-left {
  width: 1.55rem;
  background-color: #fafafa;
  ul {
    margin-top: 0.05rem;
    li {
      font-size: 0.14rem;
      height: 0.85rem;
      text-align: center;
      color: #666666;
      line-height: 0.85rem;
      position: relative;
      &.current {
        color: red;
      }
      &.current:before {
        content: "";
        display: block;
        width: 0.03rem;
        height: 100%;
        background: red;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
.c-right {
  flex: 1;
  .img {
    width: 90%;
    margin: auto;
    margin-top: 1.5em;
    img {
      width: 100%;
      height: 1.4rem;
    }
  }
  .box {
    width: 100%;
    margin-top: 0.4rem;
    .niu {
      display: flex;
      .ones {
        width: 0.3rem;
        height: 0.04rem;
        background: #cccccc;
        margin-top: 0.2rem;
        padding: 0 0.5rem;
        margin: auto;
      }
    }
  }
  .head {
    font-weight: bold;
    color: #333333;
    font-size: 0.26rem;
  }
  .guo {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    .guoarr {
      width: 0.8rem;
      height: 1.2rem;
    }
    .guoarr img {
      width: 0.8rem;
      height: 0.75rem;
    }
  }
  .c-r-button {
    display: flex;
    flex-wrap: wrap;
    li {
      text-align: center;
      width: 33.333333%;
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.12rem;
      }
      p {
        font-size: 0.14rem;
        color: #333;
        margin-top: 0.03rem;
        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>

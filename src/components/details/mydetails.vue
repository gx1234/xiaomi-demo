<template>
  <div class="details" v-if="msg.edition">
    <div class="back" @click="fanhui">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      v-if="msg"
    >
      <van-swipe-item v-for="(item, index) in msg.imgList" :key="index"
        ><img :src="item.img" alt="" v-if="item"
      /></van-swipe-item>
    </van-swipe>
    <div class="box">
      <h2>{{ msg.name }}</h2>
      <p>{{ msg.info }}</p>
      <div class="price"></div>
      <div class="wrap">
        <ul>
          <li>
            <h3>已选</h3>
            <p @click="showxh">{{ msg.content + msg.edition[sub1].Memory }}</p>
            <span class="iconfont icon-fanhui"></span>
          </li>
          <li>
            <h3>已选</h3>
            <p @click="showdz">{{ dz }}</p>
            <span class="iconfont icon-fanhui"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="imgs">
      <img
        :src="item.img"
        alt=""
        v-for="(item, index) in msg.info_img"
        :key="index"
      />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="首页" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="加入购物车"
        @click="onClickButton(msg)"
      />
    </van-goods-action>
    <van-popup v-model="showxhs" position="bottom" :style="{ height: '70%' }">
      <div class="xq">
        <div class="top">
          <img :src="msg.edition[sub1].color[sub2].img" alt="" />
        </div>
        <div class="bb">
          <div class="title">版本</div>
          <ul>
            <li
              v-for="(item, index) in msg.edition"
              :key="index"
              @click="onbb(index)"
              :class="sub1 === index ? 'xz' : ''"
            >
              <span>{{ item.Memory }}</span>
              <span>{{ item.edition_price }}</span>
            </li>
          </ul>
        </div>
        <div class="color">
          <div class="title">
            颜色
          </div>
          <ul>
            <li
              v-for="(item, index) in msg.edition[sub1].color"
              :key="index"
              @click="oncolor(index)"
              :class="sub2 === index ? 'xz' : ''"
            >
              <p>{{ item.color_list }}</p>
            </li>
          </ul>
        </div>
        <div class="len">
          <span>购买数量</span>
          <div class="right">
            <button>-</button>
            <input type="text" />
            <button>+</button>
          </div>
        </div>
        <div class="add" @click="onClickButton(msg)">
          加入购物车
        </div>
      </div>
    </van-popup>
    <van-popup v-model="showdzs" position="bottom" :style="{ height: '50%' }"
      ><van-area title="标题" :area-list="areaList" @confirm="dzok"
    /></van-popup>
  </div>
</template>

<script>
import { homedata } from "../../api";
import { Toast } from "vant";
export default {
  name: "mydetails",
  data() {
    return {
      msg: {},
      id: "",
      dz: "地址",
      sub1: 0,
      sub2: 0,
      showxhs: false,
      showdzs: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区"
        }
      }
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getdata();
  },

  methods: {
    getdata() {
      homedata().then(res => {
        for (let i = 0; i < res.length; i++) {
          if (this.id === res[i].id) {
            this.msg = res[i];
          }
        }
      });
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton(val) {
      val.len = 1;
      this.$store.commit("addspct", val);
      this.$router.push({ path: "/shopping" });
    },
    showxh() {
      this.showxhs = true;
    },
    showdz() {
      this.showdzs = true;
    },
    dzok(val) {
      this.showdzs = false;
      this.dz = "";
      for (let i = 0; i < val.length; i++) {
        if (i !== val.length - 1) {
          this.dz += val[i].name + "-";
        } else {
          this.dz += val[i].name;
        }
      }
    },
    fanhui() {
      // console.log(this.$router.go('-1'))
      // if(this.$router.go("-1")==='shopping'|| this.$router.go('-1')==='mydetails'){
      //   this.$router.push({path:'/home'})
      // }else{
      //   this.$router.go("-1")
      // }
      this.$router.push({ path: "/" });
    },
    onbb(index) {
      this.sub1 = index;
      this.sub2 = 0;
    },
    oncolor(index) {
      this.sub2 = index;
    }
  }
};
</script>

<style scoped>
.details {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.iconfont {
  font-size: 0.4rem;
  color: #000000;
}
.maximg {
  width: 100%;
}
.imgs {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.imgs img {
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item img {
  width: 100%;
}
.box {
  width: 90%;
  margin: 0 auto;
}
.wrap li {
  width: 100%;
  height: 0.85rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid #cccccc;
}
/deep/.van-goods-action {
  width: 90%;
  margin: 0 auto;
  bottom: 0.1rem;
  border-radius: 0.2rem;
  overflow: hidden;
}
.van-goods-action-button--danger {
  background: #f56600;
}
.back {
  position: fixed;
  left: 0.2rem;
  top: 0.2rem;
  z-index: 200;
  border-radius: 50%;
  background: #999;
}
.xq img {
  width: 1.68rem;
  border: 0.01rem solid #666666;
}
.xq .add {
  width: 90%;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  background: #ff6700;
  border-radius: 1rem;
  margin: 0 auto;
  color: #fff;
  font-size: 0.24rem;
  margin-top: 0.22rem;
}
.bb li {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.24rem;
  color: #8f8f94;
  display: flex;
  justify-content: space-around;
  border: 0.01rem solid #cccccc;
  line-height: 0.4rem;
  margin-top: 0.2rem;
  color: #cccccc;
}
.color {
  overflow: hidden;
}
.color .title,
.bb .title {
  text-align: left;
  text-indent: 0.4rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.color li {
  float: left;
  padding: 0 0.1rem;
  border: 0.01rem solid #cccccc;
  color: #cccccc;
  margin-left: 0.2rem;
  line-height: 0.4rem;
}
.color ul {
  float: left;
  margin-left: 0.4rem;
}
.len {
  overflow: hidden;
}
.len span {
  float: left;
  margin-left: 0.4rem;
}
.len .right {
  float: right;
  margin-right: 0.4rem;
}
.color .xz {
  border-color: #f56600;
  color: #f56600;
}
.bb .xz {
  border-color: #f56600;
  color: #f56600;
}
</style>

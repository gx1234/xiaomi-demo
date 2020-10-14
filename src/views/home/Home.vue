<template>
  <div class="Home">
    <div class="head">
      <div class="portrait"><img src="" alt=""></div>
      <div class="search"><input type="text"><span class="iconfont icon-search"></span></div>
    </div>
    <div class="swiper">
      <div class="swiper-container myswipertow">
        <div class="swiper-wrapper box">
          <a href="" class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            <img :src="item.img" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <span :class="item.icon"></span>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <list></list>
  </div>
</template>

<script>
  import Swiper from "swiper/swiper-bundle.js";
  import "swiper/swiper-bundle.css";
  import { homeimg} from "../../api";
  import List from "../../components/list/list";

  export default {
  name: "Home",
    components: {List},
    data(){
      return{
        imgs:[],
        nav:[{icon:'iconfont icon-search',text:'icon1'},
          {icon:'iconfont icon-search',text:'icon1'},
          {icon:'iconfont icon-search',text:'icon1'},
          {icon:'iconfont icon-search',text:'icon1'},
          {icon:'iconfont icon-search',text:'icon1'}
          ],
        msg:[]
      }
    },
    
  mounted() {
    this.gethomimg();
  },
  methods: {
    gethomimg(){
      homeimg().then(res=>{
        console.log(res)
        this.imgs=res
      })
    },
    xr() {
      new Swiper(".myswipertow", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
  },
  watch: {
    imgs(newval) {
      if (newval) {
        this.$nextTick(() => {
          this.xr();
        });
      }
    }
  }
};
</script>

<style scoped>
  .Home {
    padding-bottom: 1rem;
  }
  .iconfont {
    font-size: 0.4rem;
    color: #000000;
  }
  .head{
    background: #F2F2F2;
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .head .portrait{
    width: 0.7rem;
    height: 0.7rem;
    background: #87CEEB;
    border-radius: 50%;
  }
  .head .search{
    width: 60%;
    border-radius: 0.35rem;
    height: 0.7rem;
    overflow: hidden;
    border: 0.01rem solid #000;
    background: #fff;
    position: relative;
  }
  .head .search input{
    width: 100%;
    height: 100%;
    border: 0;
  }
  .head .search span{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-left: 0.2rem;
  }
  .swiper{
    width: 100%;
  }
  .swiper-wrappe {
    width: 100%;
  }
  .swiper-slide {
    width: 100%;
  }
  img {
    width: 100%;
  }
  .nav{
    width: 100%;
    height: 1.25rem;
  }
  .nav ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>

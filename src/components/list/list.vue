<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in msg" :key="index" @click="routers(item.id)">
        <img :src="item.img" alt="">
        <h2>{{item.name}}</h2>
        <p>{{item.content}}</p>
        <div class="price">￥{{item.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {homedata} from "../../api";

  export default {
    name: "list",
    data(){
      return{
        msg:[]
      }
    },
    mounted() {
      this.gethomedata();
    },
    methods:{
      gethomedata(){
        homedata().then(res=>{
          this.msg=res
        })
      },
      routers(val){
        this.$router.push({path:"/mydetails",query:{id:val}})
      }
    }
  }
</script>

<style scoped>
  .list{
    width: 100%;
    margin-top: 0.2rem;
  }
  .list ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  img{
    width: 100%;
  }
  .list ul li{
    width: 48%;
    margin-top: 0.2rem;
  }
  .list ul li h2{
    text-align: left;
    text-indent: 0.1rem;
    font-size: 0.3rem;
    color: #212121;
    line-height: 100%;
    margin-top: 0.22rem;
  }
  .list ul li p{
    text-align: left;
    text-indent: 0.1rem;
    font-size: 0.2rem;
    line-height: 100%;
    margin-top: 0.13rem;
    color: #757575;
  }
  .list ul li div{
    text-align: left;
    text-indent: 0.1rem;
    font-size: 0.2rem;
    line-height: 100%;
    margin-top: 0.13rem;
    font-weight: bold;
    color: #EA625B;
  }
</style>
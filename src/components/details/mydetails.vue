<template>
  <div class="details">
  
  </div>
</template>

<script>
  import {homedata} from "../../api";

  export default {
    name: "details",
    data(){
      return{
        msg:[],
        id:''
      }
    },
    mounted() {
      this.id=this.$router.query.id
      this.getdata()
    },
    methods:{
      getdata(){
        homedata().then(res=>{
          console.log(res)
          this.msg=res
        })
      }
    }
  }
</script>

<style scoped>

</style>
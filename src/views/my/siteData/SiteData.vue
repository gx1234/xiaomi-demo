<template>
  <div>
    <header>
      <span class="iconfont icon-fanhui" @click="exit"></span>
      <p>新增收货地址</p>
      <span class="iconfont icon-search" id="span"></span>
    </header>
    <van-address-edit
      :area-list="areaList"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import dizhi from "../../../assets/js/dizhi";
export default {
  data() {
    return {
      areaList: dizhi,
      searchResult: [],
      newsite: {
        name: "",
        phone: "",
        address_info: "",
        address_region: ""
      }
    };
  },
  methods: {
    onSave(val) {
      Toast("save");
      this.newsite.name = val.name;
      this.newsite.phone = val.tel;
      this.newsite.address_info = val.addressDetail;
      this.newsite.address_region = val.city + val.county;
      this.$router.push({ path: "/site", query: { search: this.newsite } });
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    exit(){
      this.$router.push({ path: "/site" });
    }
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
</style>

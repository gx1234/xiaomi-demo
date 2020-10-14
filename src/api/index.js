
import $http from "./request";

export const homeimg = () =>{
  return $http("/data/rotationChart.json")
}

export const  homedata =() =>{
  return $http("/data/homeGoods.json")

export const siteData=()=>{
    return $http('/data/address.json')

}
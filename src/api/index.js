import $http from './request'
export const siteData=()=>{
    return $http('/data/address.json')
}
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spct:[]
  },
  mutations: {
    addspct(state,val){
      if(state.spct!=null){
        if(state.spct.length!==0){

          let exist=false;
          for(let i=0; i<state.spct.length;i++){
            if(state.spct[i].id=== val.id ){
              state.spct[i].len++
              exist=true
            }
          }
          if(exist===false){
            state.spct.push(val)
          }
        }else{

          state.spct.push(val)
        }
      }else{
        state.spct=[]

        state.spct.push(val)

      }
      // state.spct.some(function (item) {
      //     if(item.id==val){
      //       state.spct.push({id:val,len:1})
      //       console.log(1)
      //     }
      // })
    },
    variation(state,val){
      for(let i=0;i<state.spct.length;i++){
        if(val.id===state.spct[i].id){
          if(val.jj==="+"){
            state.spct[i].len++
          }else if(state.spct[i].len>1){
            state.spct[i].len--
          }
        }
      }
    },
    removex(state,val){
      state.spct.splice(val,1)
    },
    onrefresh(state,val){
      if(val==='end'){
        sessionStorage.setItem('msg',JSON.stringify(state.spct))
      }else if(val==='start'){
        if(sessionStorage.getItem('msg')!="null"){
          state.spct=JSON.parse(sessionStorage.getItem('msg'));
        }else{
          state.spct=[]
        }

      }
    }
  },
  actions: {},
  modules: {}
});

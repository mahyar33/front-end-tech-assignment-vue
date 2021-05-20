import { createStore } from "vuex";
import actions from './actions'
import mutations from './mutations'


export const defaultStore = {
  state: {
    currentAsset:'',
    assets:[],
    measurements:[],
    isAggregated:false
  },
  mutations,
  getters: {
    getCurrentAsset(state){
      return state.currentAsset
    },
    getAssets(state){
      return state.assets
    },
    getMeasurements(state){
      return state.measurements
    },
    getIsAggregated(state){
      return state.isAggregated
    }
  },
  actions,
}

export default createStore(defaultStore);

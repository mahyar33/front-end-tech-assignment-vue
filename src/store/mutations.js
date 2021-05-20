export default {
    setCurrentAsset(state,payload){
        state.currentAsset=payload
    },
    setAssets(state,payload){
        state.assets=payload
    },
    setMeasurements(state,payload){
        state.measurements=payload
    },
    setIsAggregated(state,payload){
        state.isAggregated=payload
    }
}
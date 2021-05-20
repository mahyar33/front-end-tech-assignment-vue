import measurements from '@/assets/measurements.json'
import data from '@/assets/assets.json'
import {getMeasurements} from "@/utils/general";

export default {
    setCurrentAsset({commit}, payload) {
        commit('setCurrentAsset', payload)
    },
    setIsAggregated({commit},payload){
        commit('setIsAggregated', payload)
    },
    fetchMeasurements({getters,commit}, payload) {
        const result= getMeasurements(getters.getAssets, payload,measurements)
       commit('setMeasurements', result)
    },
    fetchAssets({commit}) {

        const idMapping = data.reduce((acc, el, i) => {
            acc[el.id] = i;
            return acc;
        }, {});
        let roots = [];
        data.forEach(el => {
            if (el.parentId === null) {
                delete el.parentId
                roots.push(el);
                return;
            }
            const parentEl = data[idMapping[el.parentId]];
            delete el.parentId
            parentEl.children = [...(parentEl.children || []), el];

        });

        commit('setAssets', roots)
    }
}
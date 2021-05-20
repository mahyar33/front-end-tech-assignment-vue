<template>
  <div class="chart">
    <h4>{{ name }}</h4>
    <vue-highcharts
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"
    />
  </div>
  <p :style= "[showMessage ? {'visibility':'visible'} : {'visibility':'hidden'} ]" class="chart-description">
    This assets has no data. Instead the sum of its children is used.
  </p>
</template>

<script>
import VueHighcharts from "vue3-highcharts";


export default {
  name: "chart",

  components: {
    VueHighcharts,
  },
  computed: {
    showMessage(){
      return this.$store.getters.getIsAggregated
    },
    chartOptions() {
      return {
        chart: {
          type: "line",
        },
        title: {
          text: "Number of project stars",
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: "Number of stars",
          },
        },
        series: [
          {
            name: "New project stars",
            data: this.data,
          },
        ],
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    name: String,
  },

};
</script>

<style lang="scss">
@import "styles";
</style>

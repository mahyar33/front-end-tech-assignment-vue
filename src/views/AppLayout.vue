<template>
  <div class="app-layout">
    <app-navbar/>
    <div class="app-layout__container">
      <app-sidebar :items="calculateItems"/>
      <div class="app-layout__main">
        <main class="app-layout__main-layout" role="main">
          <chart :name="'Asset '+currentAssets" v-if="measurements.length>0" :data="measurements"/>
          <empty v-else />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/app-sidebar/AppSidebar";
import AppNavbar from "@/components/app-navbar/AppNavbar";
import Empty from "@/components/empty/Empty";
import Chart from "@/components/chart/Chart";
import { mapGetters ,mapActions} from 'vuex'

export default {
  name: "app-layout",
  components: {
    Empty,
    AppSidebar,
    AppNavbar,
    Chart
  },
  methods:{
  ...mapActions([
      'fetchAssets'
    ]),
  },
  created(){
    this.fetchAssets()
  },
  computed: {
    ...mapGetters({
      currentAssets: 'getCurrentAsset',
      calculateItems:'getAssets',
      measurements:"getMeasurements"
    })
  }
};
</script>

<style lang="scss">
@import "styles";
</style>

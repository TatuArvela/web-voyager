<template>
  <Browser
    v-bind:title="title"
    v-bind:address="address"
    v-bind:status="status"
    v-on:page-loaded="updateBrowser"
  >
    <CorporationSite v-if="site === 'A'" />
    <PortalSite v-else-if="site === 'B'" />
    <RoomSite v-else-if="site === 'C'" />
    <VaporwaveSite v-else-if="site === 'D'" />
    <PageNotFound v-else />
  </Browser>
</template>

<script>
import Browser from "./components/Browser.vue";
import CorporationSite from "./components/sites/CorporationSite.vue";
import PortalSite from "./components/sites/PortalSite.vue";
import RoomSite from "./components/sites/RoomSite.vue";
import VaporwaveSite from "./components/sites/VaporwaveSite.vue";
import PageNotFound from "./components/PageNotFound.vue";

export default {
  components: {
    Browser,
    CorporationSite,
    PortalSite,
    RoomSite,
    VaporwaveSite,
    PageNotFound
  },
  data: () => {
    return {
      title: "Web Voyager",
      address: "",
      status: "Loading...",
      site: "A"
    };
  },
  methods: {
    updateBrowser(data) {
      document.title = data.title;
      this.title = data.title;
      this.address = data.address;
      this.status = data.status;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 768px;
  background: black;
}
</style>

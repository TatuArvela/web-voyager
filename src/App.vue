<template>
  <Browser v-bind:title="title" v-bind:address="address" v-bind:status="status">
    <CorporateSite
      v-if="site === 'A'"
      v-on:page-loaded="updateBrowser"
      v-bind:title="title"
      v-bind:address="address"
      v-bind:status="status"
    />
    <PageNotFound
      v-else
      v-bind:title="title"
      v-bind:address="address"
      v-bind:status="status"
    />
  </Browser>
</template>

<script>
import Browser from "./components/Browser.vue";
import CorporateSite from "./components/sites/CorporateSite.vue";
import PageNotFound from "./components/PageNotFound.vue";

export default {
  components: {
    Browser,
    CorporateSite,
    PageNotFound
  },
  data: () => {
    return {
      title: "Web Voyager",
      address: "",
      status: "Loading...",
      site: "B"
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

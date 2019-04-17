<template>
  <Browser v-bind:title="title" v-bind:address="address" v-bind:status="status">
    <CorporateSite
      v-on:page-loaded="updateBrowser"
      v-bind:title="title"
      v-bind:address="address"
      v-bind:status="status"
    />
  </Browser>
</template>

<script>
import Browser from "./components/Browser.vue";
import CorporateSite from "./components/CorporateSite.vue";

export default {
  components: {
    Browser,
    CorporateSite
  },
  data: () => {
    return {
      title: "Web Voyager",
      address: "",
      status: "Loading..."
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
  background: black;
  min-width: 1024px;
  min-height: 768px;
}
</style>

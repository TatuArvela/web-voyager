<template>
  <div id="page">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    this.$emit("page-loaded", {
      title: "Hello World - Web Voyager",
      address: "90s://internet.website.com",
      status: "Ready."
    });
  }
};
</script>

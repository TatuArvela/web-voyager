<template>
  <div>
    <p>Portal</p>
    <p>
      Please click
      <a href="#" @click.prevent="openRandomPage()">here</a> to go somewhere
      else.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    this.$emit("loadPage", {
      title: "Corporation Enterprise - Web Voyager",
      address: "http://corporation.com/enterprise"
    });
  },
  methods: {
    openRandomPage() {
      this.$emit("openRandomPage");
    }
  }
};
</script>

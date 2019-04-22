<template>
  <div id="body">
    <img src="../assets/info-page.png" />
    <h1>The page cannot be found</h1>
    <p>
      The page you are looking for might have been removed, had its name
      changed, or is temporarily unavailable.
    </p>
    <hr />
    <p>
      Please try the following:
    </p>
    <ul>
      <li>
        If you typed the page address in the Address bar, make sure that it is
        spelled correctly.
      </li>
      <li>Click the Back button to try another link.</li>
    </ul>
    <p>
      HTTP 404 - File not found<br />
      Web Voyager
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
    this.$parent.$emit("page-loaded", {
      title: "Server not found - Web Voyager",
      status: "Ready"
    });
  }
};
</script>
<style scoped>
#body {
  margin: 16px;
  width: 384px;
}
img {
  margin-top: 5px;
}
h1 {
  position: relative;
  font-size: 18px;
  font-weight: normal;
  display: inline;
  margin-left: 10px;
  top: -15px;
}
hr {
  margin-top: 18px;
  margin-bottom: 26px;
  color: lightgray;
}
ul {
  padding-left: 36px;
  margin-top: 22px;
}
p,
li {
  font-size: 12px;
  line-height: 15px;
}
li {
  margin-top: 6px;
}
</style>

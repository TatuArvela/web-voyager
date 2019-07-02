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
      Please click
      <a href="#" @click.prevent="openRandomPage()">here</a> to go somewhere
      else.
    </p>
    <p>
      HTTP 404 - File not found
      <br />Web Voyager
    </p>
  </div>
</template>
<script>
import { randomString } from "../utils";
const addressStrings = [
  "???",
  "404",
  "aiee",
  "annoyed",
  "beep",
  "blue",
  "boom",
  "boop",
  "bounced",
  "broken",
  "cold",
  "confused",
  "crash",
  "darkness",
  "dead",
  "death",
  "denied",
  "disconnected",
  "disgruntled",
  "disoriented",
  "disposed",
  "down",
  "dropped",
  "emptiness",
  "empty",
  "error",
  "evil",
  "explosion",
  "found",
  "garbage",
  "glitch",
  "gone",
  "happened",
  "hidden",
  "hmm",
  "hollow",
  "hurts",
  "impolite",
  "it",
  "loose",
  "lost",
  "mad",
  "no",
  "none",
  "not",
  "nothing",
  "occurred",
  "of",
  "offline",
  "oof",
  "ouch",
  "ow",
  "owie",
  "page",
  "pain",
  "painful",
  "redirected",
  "rejected",
  "response",
  "sad",
  "scattered",
  "screen",
  "shattered",
  "shutdown",
  "sobbing",
  "unknown",
  "untidy",
  "zap"
];

export default {
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    const address = `${randomString(addressStrings)}://${randomString(
      addressStrings
    )}.${randomString(addressStrings)}.${randomString(addressStrings)}`;
    this.$emit("loadPage", {
      title: "Server not found - Web Voyager",
      address: address,
      skipLoad: true
    });
  },
  methods: {
    openRandomPage() {
      this.$emit("openRandomPage");
    }
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
  animation: none !important;
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

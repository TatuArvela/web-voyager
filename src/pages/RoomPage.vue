<template>
  <div class="body">
    <div class="bordered">
      <img src="../assets/room/room-logo.png" border="0" />
    </div>
    <div class="room-container">
      <img class="img-broken" border="0" />
    </div>
    <p class="bordered">
      <font face="Comic Sans MS, Comic Sans">
        Copyright &copy; 1999
        <a href="#" @click.prevent="openRandomPage()">Sakura Corporation</a>
      </font>
    </p>
  </div>
</template>

<script>
import { randomString } from "../utils";
const addressStrings = [
  "attic",
  "bath",
  "bathrobe",
  "bathroom",
  "bed",
  "blessed",
  "bob",
  "candles",
  "car",
  "cat",
  "com",
  "computer",
  "cooking",
  "counter",
  "curtains",
  "decor",
  "dinner",
  "dog",
  "door",
  "dotcom",
  "engaged",
  "entertainment",
  "family",
  "fun",
  "games",
  "garage",
  "happy",
  "hello",
  "home",
  "house",
  "hugs",
  "husband",
  "in",
  "interior",
  "kids",
  "kindness",
  "kisses",
  "kitchen",
  "laugh",
  "leisure",
  "lights",
  "live",
  "living",
  "love",
  "married",
  "meal",
  "neighborhood",
  "net",
  "ottoman",
  "patio",
  "pet",
  "physical",
  "pillow",
  "playtime",
  "radio",
  "romantic",
  "room",
  "rug",
  "sheets",
  "shower",
  "sim",
  "simulation",
  "soap",
  "sofa",
  "table",
  "television",
  "terrace",
  "the",
  "toaster",
  "toilet",
  "towel",
  "town",
  "up",
  "virtual",
  "warm",
  "wife",
  "window",
  "www"
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
      title: "Virtual Room - Web Voyager",
      address: address
    });
  },
  methods: {
    openRandomPage() {
      this.$emit("openRandomPage");
    }
  }
};
</script>
<style lang="sass" scoped>
div.body
  position: absolute
  display: block
  min-height: 100%
  height: auto
  width: 100%
  background-image: url('../assets/room/pattern.png')
  margin: -2px
  text-align: center
.bordered
  border-radius: 16px
  display: inline-block
  background: white
  border: 2px solid maroon
  border-left-width: 5px
  border-right-width: 5px
  padding: 5px
  margin: 5px
.room-container
  display: block
  width: 640px
  height: 480px
  background: black
  margin: auto
  padding: 2px
  text-align: left
</style>

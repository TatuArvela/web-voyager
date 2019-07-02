<template>
  <div class="body">
    <a href="#" @click.prevent="openRandomPage()">
      <font face="Comic Sans MS, Comic Sans">where am i?</font>
    </a>
  </div>
</template>

<script>
import { randomString } from "../utils";
const addressStrings = [
  "3d",
  "80s",
  "82",
  "99",
  "aesthetic",
  "away",
  "banshee",
  "beautiful",
  "blank",
  "bubbles",
  "cd",
  "chill",
  "city",
  "cloud",
  "club",
  "cool",
  "cyan",
  "cyber",
  "dollar",
  "dolphin",
  "dress",
  "event",
  "floating",
  "floral",
  "flowing",
  "fly",
  "foil",
  "fuji",
  "funky",
  "glitch",
  "glow",
  "grid",
  "heart",
  "horizon",
  "internet",
  "japan",
  "jazz",
  "lady",
  "leaves",
  "light",
  "lightly",
  "lines",
  "macintosh",
  "magic",
  "marble",
  "mercury",
  "mind",
  "neon",
  "night",
  "nintendo",
  "palmtree",
  "pepsi",
  "pink",
  "play",
  "plus",
  "reflection",
  "retro",
  "skirt",
  "smooth",
  "sony",
  "stars",
  "stereo",
  "sunset",
  "surf",
  "surfing",
  "system",
  "triangle",
  "undressed",
  "vapor",
  "vaporwave",
  "vapour",
  "vector",
  "vibes",
  "virtual",
  "wave",
  "wavy",
  "windows",
  "wow",
  "www",
  "ありがとうございます",
  "いらっしゃいませ",
  "おはようございます",
  "お願いします",
  "ごめんなさい",
  "こんにちは",
  "すみません",
  "はい",
  "わかりません",
  "久しぶり",
  "行ってらっしゃい"
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
      title: `${randomString(addressStrings)} - Web Voyager`,
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
  display: flex
  justify-content: center
  align-items: center
  min-height: 100%
  height: auto
  width: 100%
  background-image: url('../assets/vaporwave/scene.png')
  margin: -2px
  text-align: center
</style>

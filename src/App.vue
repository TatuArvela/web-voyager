<template>
  <div id="browser">
    <p class="ui-text has-icon" id="browser-title">{{ title }}</p>
    <div class="has-icon" id="browser-addressbar">
      <input class="ui-text" id="browser-address" v-model="address" disabled />
    </div>
    <p class="ui-text has-icon" id="browser-status">{{ status }}</p>
    <div id="page">
      <CorporationSite
        v-if="site === 'A'"
        :title="title"
        :address="address"
        :status="status"
        @updateBrowser="updateBrowser"
      />
      <PortalSite v-else-if="site === 'B'" />
      <RoomSite v-else-if="site === 'C'" />
      <VaporwaveSite v-else-if="site === 'D'" />
      <PageNotFound v-else />
    </div>
  </div>
</template>

<script>
import CorporationSite from "./components/CorporationSite.vue";
import PortalSite from "./components/PortalSite.vue";
import RoomSite from "./components/RoomSite.vue";
import VaporwaveSite from "./components/VaporwaveSite.vue";
import PageNotFound from "./components/PageNotFound.vue";

export default {
  components: {
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
      console.log("But can you do this?");
      document.title = data.title;
      this.title = data.title;
      this.address = data.address;
      this.status = data.status;
    }
  }
};
</script>

<style lang="sass">
body
  margin: 0
  width: 100vw
  min-width: 1024px
  height: 100vh
  min-height: 768px
  background: black
  display: flex
  justify-content: center
  align-items: center
  overflow: auto
  > *
    cursor: url("./assets/cursor.png"), auto
    animation-name: browser-loading-cursor
    animation-duration: 5s

#browser
  display: block
  position: relative
  width: 1024px
  height: 768px
  background: url("./assets/browser-border.png")
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  animation-name: browser-loading-1, browser-loading-cursor
  animation-duration: 2s, 5s

@keyframes browser-loading-1
  from, to
    background-color: teal
    background-image: none

#browser-title,
#browser-addressbar,
#browser-status,
#page
  animation-name: browser-loading-2

#browser-title
  animation-duration: 2.5s

#browser-addressbar,
#browser-status
  animation-duration: 3.5s

#page
  animation-duration: 5s

@keyframes browser-loading-2
  from, to
    opacity: 0

a
  cursor: url("./assets/cursor-pointer.png"), auto
  animation-name: browser-loading-cursor
  animation-duration: 5s

input,
p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
#browser-address
  cursor: url("./assets/cursor-text.png"), auto
  animation-name: browser-loading-cursor
  animation-duration: 5s

@keyframes browser-loading-cursor
  from, to
    cursor: url("./assets/cursor-loading.png"), auto

::selection
  color: white
  background: #000080

::-moz-selection
  color: white
  background: #000080

.ui-text
  position: absolute
  font-family: "Microsoft Sans Serif", sans-serif
  font-size: 11px
  margin: 0px
  cursor: url("./assets/cursor.png"), auto
  user-select: none

.has-icon:before
  position: absolute
  display: block
  height: 16px
  width: 16px
  content: ""

#browser-title
  font-weight: bold
  color: white
  top: 2px
  left: 21px
  &:before
    top: -2px
    left: -19px
    background: url("./assets/icon.png")

#browser-addressbar
  &:after
    position: absolute
    display: block
    height: 16px
    width: 16px
    content: ""
    top: 24px
    left: 4px
    background: url("./assets/icon.png")
  &:before
    top: 24px
    right: 13px
    background: url("./assets/icon-animated.gif")
  > #browser-address
    top: 23px
    left: 4px
    width: 956px
    height: 13px
    user-select: initial
    padding: 3px
    padding-left: 18px
    border: 0px
    background: #c0c0c0
    &:focus
      outline: none

#browser-status
  height: 1em
  bottom: 6px
  left: 22px
  &:before
    top: -1px
    left: -20px
    background: url("./assets/icon.png")

#page
  position: absolute
  display: block
  background: white
  font-family: "Microsoft Sans Serif", sans-serif
  padding: 2px
  top: 50px
  left: 2px
  right: 2px
  bottom: 23px
  height: 691px
  overflow: auto
</style>

<template>
  <div id="browser" v-bind:class="'loadingPhase-' + [loadingPhase]">
    <p class="ui-text has-icon" id="browser-title">{{ title }}</p>
    <div class="has-icon" id="browser-addressbar">
      <input class="ui-text" id="browser-address" v-model="address" disabled />
    </div>
    <p class="ui-text has-icon" id="browser-status">{{ status }}</p>
    <div id="page">
      <fragment v-if="loadingPhase < 2">
        <CorporationPage
          v-if="page === 'A'"
          :title="title"
          :address="address"
          :status="status"
          @loadPage="loadPage"
          @openRandomPage="openRandomPage"
        />
        <PortalPage
          v-else-if="page === 'B'"
          @loadPage="loadPage"
          @openRandomPage="openRandomPage"
        />
        <RoomPage
          v-else-if="page === 'C'"
          @loadPage="loadPage"
          @openRandomPage="openRandomPage"
        />
        <VaporwavePage
          v-else-if="page === 'D'"
          @loadPage="loadPage"
          @openRandomPage="openRandomPage"
        />
        <PageNotFound
          v-else
          @loadPage="loadPage"
          @openRandomPage="openRandomPage"
        />
      </fragment>
    </div>
  </div>
</template>

<script>
import CorporationPage from "./pages/CorporationPage.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PortalPage from "./pages/PortalPage.vue";
import RoomPage from "./pages/RoomPage.vue";
import VaporwavePage from "./pages/VaporwavePage.vue";

/*
Loading phases
  5: Operating system
  4: Browser window, @2000ms
  3: Browser window title @2500ms
  2: Browser window features @3500ms
  1: Page content @5000ms
  0: Ready @7000ms
*/

const pages = ["A", "B", "C", "D"];

export default {
  components: {
    CorporationPage,
    PageNotFound,
    PortalPage,
    RoomPage,
    VaporwavePage
  },
  data: () => {
    return {
      title: "Web Voyager",
      address: "",
      status: "Loading...",
      page: null,
      loadingPhase: null,
      timeout: null
    };
  },
  mounted() {
    this.loadBrowser();
    this.openRandomPage();
  },
  methods: {
    loadBrowser() {
      let self = this;
      self.loadingPhase = 5;
      self.timeout = setTimeout(() => {
        self.loadingPhase = 4;
        self.timeout = setTimeout(() => {
          self.loadingPhase = 3;
          self.timeout = setTimeout(() => {
            self.loadingPhase = 2;
            self.timeout = setTimeout(() => {
              self.loadingPhase = 1;
              self.timeout = null;
            }, 1500);
          }, 1000);
        }, 500);
      }, 2000);
    },
    loadPage(data) {
      document.title = data.title;
      this.title = data.title;
      this.address = data.address;
      this.status = "Loading...";
      this.loadingPhase = 1;
      if (data.skipLoad === true) {
        this.finishLoading();
      } else {
        this.timeout = setTimeout(() => this.finishLoading(), 2000);
      }
    },
    finishLoading() {
      this.status = "Ready";
      this.loadingPhase = 0;
    },
    openRandomPage() {
      let randomPage = this.page;
      while (randomPage === this.page) {
        randomPage =
          pages[
            Math.floor(
              Math.random() * (pages.length + 1) // for random "PageNotFound"
            )
          ];
      }
      this.page = randomPage;
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

::selection
  color: white
  background: #000080

::-moz-selection
  color: white
  background: #000080

#browser
  display: block
  position: relative
  width: 1024px
  height: 768px
  background: url("./assets/browser-border.png")
  background-repeat: no-repeat
  background-position: center
  cursor: url("./assets/cursor.png"), auto
  &.loadingPhase-5
    background-color: teal
    background-image: none
  &.loadingPhase-5,
  &.loadingPhase-4,
  &.loadingPhase-3
    cursor: url("./assets/cursor-loading.png"), auto

input,
p,
h1,
h2,
h3,
h4,
h5,
h6,
li
  cursor: url("./assets/cursor-text.png"), auto

a
  cursor: url("./assets/cursor-pointer.png"), auto

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
  .loadingPhase-5 &
    opacity: 0

  &:before
    top: -2px
    left: -19px
    background: url("./assets/icon.png")

#browser-addressbar
  .loadingPhase-5 &,
  .loadingPhase-4 &
    opacity: 0
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
    cursor: url("./assets/cursor.png"), auto
    .loadingPhase-5 &,
    .loadingPhase-4 &,
    .loadingPhase-3 &
      cursor: url("./assets/cursor-loading.png"), auto
    &:focus
      outline: none

#browser-status
  height: 1em
  bottom: 6px
  left: 22px
  .loadingPhase-5 &,
  .loadingPhase-4 &
    opacity: 0
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
  overflow: auto
  .loadingPhase-5 &,
  .loadingPhase-4 &,
  .loadingPhase-3 &,
  .loadingPhase-2 &
    opacity: 0
  & img
    animation-name: image-loading
    animation-timing-function: steps(24)
    animation-duration: 2000ms

.img-broken
  animation: none !important
  content: url('./assets/broken-image.png')
  padding: 5px
  border: 1px inset lightgray

@keyframes image-loading
  0%
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)
  100%
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
</style>

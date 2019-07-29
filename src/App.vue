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
    <PopUp
      v-for="popUp in popUps"
      v-bind:key="popUp.id"
      :id="popUp.id"
      :isActive="popUp.isActive"
      :titleString="popUp.titleString"
      :contentString="popUp.contentString"
      :buttonString="popUp.buttonString"
      @activatePopUp="activatePopUp"
      @closePopUp="closePopUp"
    />
  </div>
</template>

<script>
import { randomString } from "./utils";
import CorporationPage from "./pages/CorporationPage.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PortalPage from "./pages/PortalPage.vue";
import RoomPage from "./pages/RoomPage.vue";
import VaporwavePage from "./pages/VaporwavePage.vue";
import PopUp from "./PopUp.vue";
import {
  contents as popUpContentStrings,
  buttons as popUpButtonStrings,
  titles as popUpTitleStrings
} from "./popUpStrings";

/*
Loading phases
  5: Operating system
  4: Browser window, @2000ms
  3: Browser window title @2500ms
  2: Browser window features @3500ms
  1: Page content @5000ms
  0: Ready @7000ms
*/

const pages = ["A", "B", "C", "D", "NotFound"];

export default {
  components: {
    CorporationPage,
    PageNotFound,
    PortalPage,
    RoomPage,
    VaporwavePage,
    PopUp
  },
  data: () => {
    return {
      title: "Web Voyager",
      address: "",
      status: "Loading...",
      page: null,
      loadingPhase: null,
      timeout: null,
      popUps: [],
      idIterator: 0
    };
  },
  mounted() {
    this.loadBrowser();
    this.openRandomPage();
    this.popUpTimer();
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
        randomPage = randomString(pages);
      }
      this.page = randomPage;
    },
    deactivatePopups() {
      this.popUps.forEach(popUp => {
        popUp.isActive = false;
      });
    },
    createPopUp() {
      this.deactivatePopups();
      this.popUps.push({
        id: this.idIterator++,
        isActive: true,
        titleString: randomString(popUpTitleStrings),
        contentString: randomString(popUpContentStrings),
        buttonString: randomString(popUpButtonStrings)
      });
    },
    activatePopUp(id) {
      this.deactivatePopups();
      const array = this.popUps;
      array.push(
        array.splice(array.indexOf(array.find(popUp => popUp.id === id)), 1)[0]
      );
      this.popUps[this.popUps.length - 1].isActive = true;
    },
    closePopUp(id) {
      this.popUps = this.popUps.filter(function(element) {
        return element.id !== id;
      });
      this.popUps[this.popUps.length - 1].isActive = true;
    },
    popUpTimer() {
      setTimeout(() => {
        this.createPopUp();
        this.popUpTimer();
      }, (Math.floor(Math.random() * 10) + 1) * 500);
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
  overflow: hidden
  &.loadingPhase-5
    background-color: teal
    background-image: none
  &.loadingPhase-5,
  &.loadingPhase-4,
  &.loadingPhase-3
    cursor: url("./assets/cursor-loading.png"), auto

input[type="text"],
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
  color: blue

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
    background: url("./assets/file-icon.png")

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
    background: url("./assets/file-icon.png")
  &:before
    top: 24px
    right: 13px
    background: url("./assets/icon.gif")
    .loadingPhase-5 &,
    .loadingPhase-4 &,
    .loadingPhase-3 &,
    .loadingPhase-2 &,
    .loadingPhase-1 &
      background: url("./assets/icon-animated.gif")
  > #browser-address
    top: 23px
    left: 4px
    width: 954px
    height: 13px
    user-select: initial
    padding: 3px
    padding-left: 20px
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
    background: url("./assets/file-icon.png")

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
input
  border: 1px solid gray
  border-radius: 0
  font-family: Arial
  outline: none
  font-size: 13px
  margin-right: 2px
  box-shadow: 0.5px 0.5px 0 0.5px #fff, 0 0 0 1px #87888f
  border-top: 1px solid #000
  border-left: 1px solid #000
  border-bottom: 1px solid #c0c7c8
  border-right: 1px solid #c0c7c8
input[type="button"], button
  margin: 2px
  padding: 2px 4px
  outline: none
  box-shadow: -1px -1px 0 0 #fff, 0 -1px 0 0 #fff, -1px 0 0 0 #fff, 0 0 0 1px #000
  border-top: 1px solid #c0c0c0
  border-left: 1px solid #c0c0c0
  border-bottom: 1px solid #87888f
  border-right: 1px solid #87888f
  background: #c0c0c0
  font-family: "Microsoft Sans Serif", sans-serif
  user-select: none
  &:focus, &:active
    box-shadow: -1px -1px 0 0 #000, 0 -1px 0 0 #000, -1px 0 0 0 #000, 0 0 0 1px #000
  &:focus
    border-top: 1px solid #fff
    border-left: 1px solid #fff
    border-bottom: 1px solid #000
    border-right: 1px solid #000
  &:active
    padding-top: 3px
    padding-left: 5px
    padding-right: 3px
    padding-bottom: 1px
    border-top: 1px solid #000
    border-left: 1px solid #000
    border-bottom: 1px solid #fff
    border-right: 1px solid #fff
    background: #c0c0c0

.img-broken
  animation: none !important
  content: url('./assets/broken-image.png')
  padding: 5px
  border: 1px inset #c0c0c0

@keyframes image-loading
  0%
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)
  100%
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
</style>

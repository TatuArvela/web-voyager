<template>
  <div
    class="popup"
    v-bind:class="{ active: this.isActive }"
    v-bind:style="{ top: yPos + 'px', left: xPos + 'px' }"
    v-on:click="activatePopUp"
  >
    <div class="title" draggable="true" v-on:mousedown="dragMouseDown">
      {{ titleString }}
    </div>
    <div class="content">{{ contentString }}</div>
    <button class="button" v-on:click="closePopUp" ref="button">
      {{ buttonString }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    isActive: Boolean,
    titleString: String,
    contentString: String,
    buttonString: String
  },
  data: () => {
    return {
      xPos: Math.floor(Math.random() * 640),
      yPos: Math.floor(Math.random() * 480),
      xOffset: 0,
      yOffset: 0,
      prevClientX: 0,
      prevClientY: 0
    };
  },
  mounted() {
    this.$refs.button.focus();
  },
  updated() {
    if (this.isActive) {
      this.$refs.button.focus();
    }
  },
  methods: {
    test() {
      console.log("test");
    },
    dragMouseDown(e) {
      this.activatePopUp();
      e = e || window.event;
      e.preventDefault();
      this.prevClientX = e.clientX;
      this.prevClientY = e.clientY;
      document.onmouseup = this.closeDragElement;
      document.onmousemove = this.elementDrag;
    },
    elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      if (event.button === 0) {
        this.xOffset = this.prevClientX - e.clientX;
        this.yOffset = this.prevClientY - e.clientY;
        this.prevClientX = e.clientX;
        this.prevClientY = e.clientY;

        this.xPos = this.xPos - this.xOffset;
        if (this.xPos < 0) this.xPos = 0;
        if (this.xPos > 1020) this.xPos = 1020;
        this.yPos = this.yPos - this.yOffset;
        if (this.yPos < 0) this.yPos = 0;
        if (this.yPos > 764) this.yPos = 764;
      }
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    activatePopUp() {
      this.$emit("activatePopUp", this.id);
    },
    closePopUp() {
      this.$emit("closePopUp", this.id);
    }
  }
};
</script>

<style lang="sass" scoped>
.popup
  display: block
  position: absolute
  min-height: 115px
  min-width: 190px
  max-width: 635px
  z-index: 3
  text-align: center
  border-top: 1px solid #fff
  border-left: 1px solid #fff
  border-right: 1px solid #808080
  border-bottom: 1px solid #808080
  background: #c0c0c0

  &:before
    content: ""
    position: absolute
    z-index: 2
    top: -2px
    border-top: 1px solid #c0c0c0
    left: -2px
    border-left: 1px solid #c0c0c0
    right: -2px
    border-right: 1px solid #000
    bottom: -2px
    border-bottom: 1px solid #000
    pointer-events: none

.title
  display: block
  padding: 4px 3px
  background: #808080
  color: #c0c0c0
  font-family: "Microsoft Sans Serif", sans-serif
  font-size: 12px
  font-weight: bold
  text-align: left
  user-select: none
  .active &
    background: #000080
    color: #fff

.content
  display: block
  word-wrap: break-word
  font-family: "Microsoft Sans Serif", sans-serif
  font-size: 12px
  margin-top: 18px
  margin-bottom: 26px
  margin-right: 11px
  margin-left: 61px
  text-align: left
  user-select: none
  white-space: pre-wrap
  &:before
    content: ""
    display: block
    width: 32px
    height: 32px
    position: absolute
    top: 34px
    left: 12px
    z-index: 2
    background-image: url('./assets/alert.png')

.button
  margin-top: 3px
  margin-bottom: 12px
  font-size: 12px
  min-width: 75px
</style>

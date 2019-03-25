<template>
  <div id="browser">
    <p class="ui-text has-icon" id="browser-title">{{ title }}</p>
    <div class="has-icon" id="browser-addressbar">
      <input class="ui-text" id="browser-address" v-model="address" />
    </div>
    <p class="ui-text has-icon" id="browser-status">{{ status }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    address: String,
    status: String
  }
};
</script>

<style lang="scss">
#browser {
  display: block;
  width: 1024px;
  height: 768px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  background: url("../assets/browser-border.png");
}

::selection {
  color: white;
  background: #000080;
}
::-moz-selection {
  color: white;
  background: #000080;
}

.ui-text {
  position: absolute;
  font-family: "Microsoft Sans Serif";
  font-size: 11px;
  margin: 0px;
  cursor: default;
  user-select: none;
}

.has-icon:before {
  position: absolute;
  display: block;
  height: 16px;
  width: 16px;
  content: "";
  background: url("../assets/icon.png");
}

#browser-title {
  font-weight: bold;
  color: white;
  top: 3px;
  left: 21px;
  &:before {
    top: -2px;
    left: -19px;
  }
}

#browser-addressbar {
  &:before {
    top: 24px;
    left: 59px;
  }
  > #browser-address {
    top: 23px;
    left: 75px;
    width: 899px;
    user-select: initial;
    padding: 3px;
    border: 0px;
    cursor: text;
    //&:focus {
    //  color: white;
    //  background: #000080;
    //}
  }
}

#browser-status {
  height: 1em;
  bottom: 4px;
  left: 22px;
  &:before {
    top: -2px;
    left: -20px;
  }
}

#page {
  position: absolute;
  display: block;
  background: white;
  padding: 2px;
  top: 50px;
  left: 2px;
  right: 2px;
  bottom: 23px;
}
</style>

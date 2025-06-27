<template>
  <div :class="`half-moon-div-${this.moonPosi}`">
    <div :class="`radius-container-div-${this.moonPosi}`">
      <div :class="`right-radius-div-${this.moonPosi}`"></div>
      <div :class="`left-radius-div-${this.moonPosi}`"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["moonPosi"],
  components: {},
  data() {
    return {
      //propreties
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* ------------TOP------------------- */
.half-moon-div-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 30%;
  width: 100%;
  /* z-index: 0; */
}
.radius-container-div-top {
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: relative;
}
.left-radius-div-top {
  position: absolute;
  height: 100%;
  width: 30%;
  top: 0;
  left: 0;
  border-radius: 0 0 120% 0;
  background-image: linear-gradient(to bottom, #ffffff, #f8f8f8);
}
.right-radius-div-top {
  position: absolute;
  height: 100%;
  width: 80%;
  top: 0;
  left: 0;
  border-radius: 0 0 120% 0;
  background-image: linear-gradient(to bottom, #bc3d8c, #e5624e);
}
/* ------------right------------------- */
.half-moon-div-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  height: 100%;
  width: 30%;
  max-width: 400px;
  /* background-color: red; */
}
.radius-container-div-right {
  max-height: 500px;
  width: 100%;
  height: 80%;
  position: relative;
}
.left-radius-div-right {
  position: absolute;
  height: 30%;
  width: 100%;
  top: 0;
  right: 0;
  border-radius: 0 0 0 120%;
  background-image: linear-gradient(to bottom, #f8f8f8, #f5f5f5);
}
.right-radius-div-right {
  position: absolute;
  height: 80%;
  width: 100%;
  top: 0;
  right: 0;
  border-radius: 0 0 0 120%;
  background-image: linear-gradient(to left, #bc3d8c, #e5624e);
}
/* ------------BOTTOM------------------- */
.half-moon-div-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  /* z-index: 0; */
}
.radius-container-div-bottom {
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: relative;
}
.left-radius-div-bottom {
  position: absolute;
  height: 100%;
  width: 30%;
  bottom: 0;
  right: 0;
  border-radius: 120% 0 0 0;
  background-image: linear-gradient(to bottom, #ececec, #e5e5e5);
}
.right-radius-div-bottom {
  position: absolute;
  height: 100%;
  width: 80%;
  bottom: 0;
  right: 0;
  border-radius: 120% 0 0 0;
  background-image: linear-gradient(to top, #bc3d8c, #e5624e);
}
/* ------------left------------------- */
.half-moon-div-left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  height: 100%;
  width: 30%;
  max-width: 400px;
}
.radius-container-div-left {
  max-height: 500px;
  width: 100%;
  height: 80%;
  position: relative;
}
.left-radius-div-left {
  position: absolute;
  height: 30%;
  width: 100%;
  bottom: 0;
  left: 0;
  border-radius: 0 120% 0 0;
  background-image: linear-gradient(to bottom, #efefef, #ebebeb);
}
.right-radius-div-left {
  position: absolute;
  height: 80%;
  width: 100%;
  left: 0;
  bottom: 0;
  border-radius: 0 120% 0 0;
  background-image: linear-gradient(to right, #bc3d8c, #e5624e);
}
</style>
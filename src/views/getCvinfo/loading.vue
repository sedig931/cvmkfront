<template>
  <div class="loading-container-div flex-row" dir="ltr">
    <div class="left-point-div point-div"></div>
    <div class="center-point-div point-div"></div>
    <div class="right-point-div point-div"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localInter: {},
    };
  },
  methods: {
    playLoading() {
      const points = document.querySelectorAll(".point-div");
      let i = 0;
      while (i < 3) {
        let activeNow = i;
        setTimeout(() => {
          points.forEach((point, i) => {
            point.classList.remove("active-point");
          });
          points[activeNow].classList.add("active-point");
        }, i * 250);
        i++;
      }
    },
  },
  mounted() {
    this.localInter = setInterval(this.playLoading, 750);
  },
  unmounted() {
    clearInterval(this.localInter);
  },
};
</script>

<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.point-div {
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  border: none;
}
.center-point-div {
  margin: 0 4px 0 4px;
}
.active-point {
  height: 10px;
  width: 10px;
  border-radius: 5px;
}
</style>
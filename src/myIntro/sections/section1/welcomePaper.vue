<template>
  <div
    class="welcome-div protfolio-section1-card flex-row"
    @mouseenter="this.$emit('pusePlayProgress', 'mouseenter')"
    @mouseleave="this.$emit('pusePlayProgress', 'mouseleave')"
  >
    <div class="top-down-border-div flex-row">
      <div class="top-sqr-transition right-border-div"></div>
      <div class="top-sqr-transition top-border-div flex-row"></div>
      <div class="dowon-sqr-transition down-border-div flex-row">
        <span class="span-welcome">Welcome To My Protfolio 💻</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      //propreties
    };
  },
  methods: {
    maninpulateBorders() {
      document
        .querySelector(".top-border-div")
        .classList.toggle("top-sqr-transition");
      document
        .querySelector(".right-border-div")
        .classList.toggle("top-sqr-transition");
      document
        .querySelector(".down-border-div")
        .classList.toggle("dowon-sqr-transition");
      document.querySelector(".top-border-div").classList.toggle("opacity-me");
      document
        .querySelector(".right-border-div")
        .classList.toggle("opacity-me");
      document.querySelector(".welcome-div").classList.toggle("opacity-me");
    },
  },
  mounted() {
    this.maninpulateBorders();
    setTimeout(() => {
      this.maninpulateBorders();
    }, 50);
  },
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
.opacity-me {
  opacity: 0;
}
.top-sqr-transition {
  opacity: 1;
  transform: translateY(-20px) translateX(-20px);
}
.dowon-sqr-transition {
  transform: translateY(10px) translateX(5px);
}
/* .welcome-div { */
/* height: 100%; */
/* width: 100%; */
/* box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2),
    0px 0px 5px 1px rgba(0, 0, 0, 0.2); */
/* backdrop-filter: blur(2px); */
/* padding: 15px 0 15px 0; */
/* margin: 0 0 20px 0; */
/* background-color: rgba(255, 255, 255, 0.6); */
/* transition: transform 1s, opacity 1s; */
/* } */
.top-down-border-div {
  position: relative;
  width: 100%;
  height: 100%;
}
.top-border-div {
  position: absolute;
  transition: transform 1s, opacity 1s;
  width: 70%;
  height: 70%;
  /* border-top: 2px solid rgb(232, 219, 34); */
  border-top: 2px solid var(--col-pro-btns);
  border-left: 2px solid var(--col-pro-btns);
  border-bottom: 2px solid var(--col-pro-btns);
  border-right: 2px solid none;
  border-radius: 5px;
  z-index: 0;
}
.right-border-div {
  transition: transform 1s, opacity 1s;
  position: absolute;
  height: 70%;
  width: 70%;
  /* width: 100%; */
  border-right: 2px solid var(--col-pro-btns);
  border-radius: 5px;
  z-index: 2;
}
.down-border-div {
  position: absolute;
  /* align-items: flex-start; */
  transition: transform 1.5s;
  width: 70%;
  height: 70%;
  border: 2px solid #e5624e;
  /* border: 2px solid var(--col-pro-prim); */
  border-radius: 5px;
  z-index: 1;
}
.span-welcome {
  font-size: 25px;
  font-weight: bold;
  /* padding: 3px 0 0 8px; */
  font-family: "Tilt Warp";
  color: rgb(187, 187, 187);
}
@media (min-width: 565px) and (max-width: 700px) {
  .span-welcome {
    font-size: 21px;
  }
}
@media (max-width: 565px) {
  .span-welcome {
    font-size: 17px;
  }
  /* .down-border-div {
    justify-content: start;
  } */
}
</style>

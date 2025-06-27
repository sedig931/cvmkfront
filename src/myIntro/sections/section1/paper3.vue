<template>
  <div
    class="paper3-div paper-transition"
    @mouseenter="this.$emit('pusePlayProgress', 'mouseenter')"
    @mouseleave="this.$emit('pusePlayProgress', 'mouseleave')"
  >
    <div class="img-div flex-row">
      <i class="bi bi-motherboard-fill flex-row"></i>
    </div>
    <div class="texts-div flex-column">
      <div class="orgnize-div flex-row">
        <span class="all-texts-span ornize-span orgnize-trans">Organize</span>
        <span class="all-texts-span your-time-span your-time-trans"
          >Your Time</span
        >
      </div>
      <div class="all-texts-span reduce-efficient-div flex-column">
        <div class="reduce-div flex-row">
          <span class="reduce-span flex-row reduce-trans"
            >Reduce Your Effort
          </span>
        </div>
        <div class="efficient-div flex-row">
          <span class="efficient-span effi-trans"> And Work Efficiently </span>
        </div>
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
    slowMotion() {
      setTimeout(() => {
        document
          .querySelector(".paper3-div")
          .classList.remove("paper-transition");
      }, 10);
    },
    manpulateTexts() {
      document.querySelector(".ornize-span").classList.add("orgnize-trans");
      document
        .querySelector(".your-time-span")
        .classList.add("your-time-trans");
      document.querySelector(".reduce-span").classList.add("reduce-trans");
      document.querySelector(".efficient-span").classList.add("effi-trans");
    },
    slowTexts() {
      setTimeout(() => {
        document
          .querySelector(".ornize-span")
          .classList.remove("orgnize-trans");
      }, 500);
      setTimeout(() => {
        document
          .querySelector(".your-time-span")
          .classList.remove("your-time-trans");
      }, 600);
      setTimeout(() => {
        document.querySelector(".reduce-span").classList.remove("reduce-trans");
        document
          .querySelector(".efficient-span")
          .classList.remove("effi-trans");
      }, 800);
    },
  },
  mounted() {
    this.slowMotion();
    this.manpulateTexts();
    setTimeout(() => {
      this.slowTexts();
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
.paper3-div {
  height: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 0 20px 0;
  transition: opacity 1s;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2),
    0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.6);
}
.paper-transition {
  opacity: 0;
}
.img-div,
.texts-div {
  flex: 1;
  height: 100%;
  align-items: flex-start;
}
.texts-div {
  padding: 20px;
}
.img-div {
  font-size: 210px;
  align-items: center;
  /* background-color: rebeccapurple; */
}
.orgnize-div {
  flex-wrap: wrap;
  align-items: flex-end;
  font-family: "Archivo Black", sans-serif;
}
.ornize-span {
  font-size: 35px;
  padding: 0 15px 0 0;
  transition: transform 0.5s, opacity 1s;
  opacity: 1;
}
.orgnize-trans {
  opacity: 0;
  transform: translateY(-10px);
}
.your-time-span {
  transform: translateY(-8px);
  font-size: 15px;
  transition: transform 0.5s, opacity 1s;
  opacity: 1;
}
.your-time-trans {
  opacity: 0;
  transform: translateX(-20px);
}
.reduce-efficient-div {
  width: 100%;
  padding-top: 20px;
}
.reduce-div,
.efficient-div {
  width: 100%;
  justify-content: start;
  padding: 5px;
  color: white;
  transform: scale(1.07, 1.05) skewX(-15deg);
  position: relative;
}
.reduce-span,
.efficient-span {
  font-size: 20px;
  padding: 10px;
  background-image: linear-gradient(to left, #bc3d8c, #e5624e);
  transition: transform 0.5s, opacity 1s;
  opacity: 1;
  font-family: "Tauri";
}
.reduce-trans {
  opacity: 0;
  transform: translateX(-10px);
}
.effi-trans {
  opacity: 0;
  transform: translateX(10px);
}
.efficient-div {
  width: 100%;
  justify-content: end;
}
@media (min-width: 550px) and (max-width: 650px) {
  .img-div {
    font-size: 150px;
  }
  .ornize-span {
    font-size: 25px;
  }
  .your-time-span {
    transform: translateY(-5px);
    font-size: 13px;
  }
  .reduce-span,
  .efficient-span {
    font-size: 16px;
  }
}
@media (max-width: 550px) {
  .paper3-div {
    flex-direction: column;
  }
  .img-div {
    font-size: 130px;
  }
  .ornize-span {
    font-size: 25px;
  }
  .your-time-span {
    transform: translateY(-5px);
    font-size: 13px;
  }
  .reduce-span,
  .efficient-span {
    font-size: 16px;
  }
}
</style>
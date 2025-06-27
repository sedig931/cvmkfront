<template>
  <div
    class="paper2-div paper-transition"
    @mouseenter="this.$emit('pusePlayProgress', 'mouseenter')"
    @mouseleave="this.$emit('pusePlayProgress', 'mouseleave')"
  >
    <div class="img-div img-div-transition flex-column">
      <div class="inner-img-div flex-row">
        <img class="img" :src="`${this.URL}/workScreenshot.PNG`" alt="" />
        <div class="key-bord-div flex-row">
          <div class="hori-beem-div"></div>
        </div>
      </div>
    </div>
    <div class="numbers-text-div">
      <span
        v-for="(text, i) in this.texts"
        :key="i"
        class="txt-transition single-text-span"
        :class="`single-text-${i}`"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // URL: "http://localhost:300/uploads/introduceImgs",
      URL: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs",
      texts: [
        "Make your Modern Website 📟",
        "Hunt Pugs 🔧🔨",
        "Appgrade Mobile App 📱",
        "Take Templates 📦",
        "Add Secure 🔒🔑",
      ],
      //propreties
    };
  },
  methods: {
    slowMotionText() {
      setTimeout(() => {
        document
          .querySelector(".paper2-div")
          .classList.remove("paper-transition");
      }, 10);
      setTimeout(() => {
        document
          .querySelector(".img-div")
          .classList.remove("img-div-transition");
        document.querySelectorAll(".single-text-span").forEach((txt, i) => {
          setTimeout(() => {
            txt.classList.remove("txt-transition");
          }, 1200 * i);
        });
      }, 500);
    },
  },
  mounted() {
    this.slowMotionText();
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
.paper2-div {
  height: 100%;
  width: 100%;
  padding: 0 15px 0 15px;
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
.numbers-text-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.img-div {
  height: 100%;
  transition: transform 0.5s, opacity 1s;
  opacity: 1;
}
.img-div-transition {
  opacity: 0;
  transform: translateY(15px);
}
.inner-img-div {
  position: relative;
  width: 100%;
}
.img {
  height: 100%;
  max-height: 200px;
  border: 3px solid rgb(255, 255, 255);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2),
    0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.key-bord-div,
.hori-beem-div {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 10px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  border: none;
}
.hori-beem-div {
  height: 10px;
  width: 70px;
  bottom: -6px;
  border-radius: 7px;
}
.single-text-span {
  font-size: 18px;
  padding: 2px 10px 2px 10px;
  margin: 5px;
  transition: transform 0.5s, opacity 1s;
  opacity: 1;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2),
    0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-image: linear-gradient(to left, #bc3d8c, #e5624e);
  color: white;
  font-family: "Comfortaa";
}
.txt-transition {
  opacity: 0;
  transform: translateY(-15px);
}
@media (max-width: 750px) {
  .img {
    max-height: 150px;
  }
  .hori-beem-div {
    height: 8px;
    width: 60px;
  }
  .key-bord-div {
    height: 15px;
    width: 10px;
    bottom: -15px;
  }
}
@media (max-width: 630px) {
  .paper2-div {
    flex-direction: column;
  }
  .numbers-text-div {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .single-text-span {
    font-size: 16px;
  }
}
</style>
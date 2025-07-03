<template>
  <div class="main-shapes-div flex-column">
    <div class="sec2-shape-div top-shape-div">
      <div class="beams-div flex-column">
        <div class="single-beam-div top-beam" style="width: 80%"></div>
        <div class="single-beam-div center-beam" style="width: 40%"></div>
        <div class="single-beam-div bottom-beam" style="width: 55%"></div>
      </div>
    </div>
    <div class="sec2-shape-div center-shape-div"></div>
    <div class="sec2-shape-div bottom-shape-div">
      <div class="left-top-border-div"></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headerObserver: new IntersectionObserver(this.smoothView, {
        root: null,
        threshold: 0,
        rootMargin: "-500px",
      }),
      //propreties
    };
  },
  methods: {
    smoothView(entries) {
      const [entry] = entries;
      //console.log(entry);
      if (!entry.isIntersecting)
        document
          .querySelectorAll(".single-beam-div")
          .forEach((beam) => beam.classList.add("hide-beams-shape"));
      else
        document
          .querySelectorAll(".single-beam-div")
          .forEach((beam) => beam.classList.remove("hide-beams-shape"));
    },
  },
  mounted() {
    this.headerObserver.observe(document.querySelector(".section--2"));
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
.hide-beams-shape {
  opacity: 0;
  transform: translateX(5rem);
}
.main-shapes-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background-color: red; */
}
.sec2-shape-div {
  flex: 1;
  width: 100%;
}
.top-shape-div {
  position: relative;
  /* background-color: red; */
}
.beams-div {
  position: absolute;
  top: 0;
  right: 0;
  height: 50%;
  width: 40%;
  /* background-color: aqua; */
  align-items: flex-end;
  rotate: -40deg;
}
.single-beam-div {
  height: 25px;
  margin: 10px 0 10px 0;
  border-radius: 15px;
  background-color: rgb(45, 62, 80);
  /* opacity: 1; */
  transition: opacity 0.8s, transform 0.5s;
}
/* .center-shape-div {
  background-color: rgb(192, 101, 101);
} */
/* .bottom-shape-div {
  background-color: rgb(199, 126, 126);
} */
.left-top-border-div {
  height: 100%;
  width: 50%;
  border-top: 3px solid rgb(187, 187, 187);
  border-right: 3px solid rgb(187, 187, 187);
  border-radius: 0 15px 0 0;
  /* background-image: linear-gradient(to bottom, rgb(45, 62, 80), white); */
}
</style>
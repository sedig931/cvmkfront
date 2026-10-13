<template>
  <div class="section--2">
    <Shapes />
    <div class="main-setion2-div flex-column">
      <div class="texts-div flex-column">
        <div class="inner-texts-div flex-column">
          <span class="mobile-appa-span">Mobile App 📱</span>
          <span class="devolopment-span">Responsive Designs</span>
        </div>
        <div class="dots flex-row mt-3 mb-3">
          <div
            class="single-dot"
            v-for="(dot, i) in this.dotsArray"
            :key="i"
            :class="this.activeDotIndex === i ? 'active-dot' : ''"
            @click="this.activeDotIndex = i"
          ></div>
        </div>
      </div>
      <div class="imgs-div">
        <SingleImg
          :imgName="`rajhiApp-${i}.jpg`"
          v-for="(img, i) in new Array(5)"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SingleImg from "./singleImg.vue";
import Shapes from "./shapes.vue";
export default {
  components: {
    SingleImg,
    Shapes,
  },
  data() {
    return {
      dotsArray: new Array(5),
      activeDotIndex: 0,
      //propreties
    };
  },
  methods: {
    imgsContainerMove() {
      const slider = document.querySelector(".imgs-div");
      let isDown = false;
      let hasDragged = false;
      let startX;
      let scrollLeft;
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        hasDragged = false;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => (isDown = false));
      slider.addEventListener("mouseup", () => (isDown = false));
      slider.addEventListener(
        "click",
        (e) => {
          if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
            hasDragged = false;
          }
        },
        true,
      );
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; // scroll speed
        if (Math.abs(x - startX) > 5) {
          hasDragged = true;
        }
        slider.scrollLeft = scrollLeft - walk;
      });
    },
  },
  mounted() {
    this.imgsContainerMove();
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
.section--2 {
  position: relative;
  height: 100vh;
  width: 100%;
  /* background-image: linear-gradient(to bottom, rgb(229, 229, 229), white); */
  background-color: var(--col-pro-prim);
}
.main-setion2-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.texts-div {
  flex: 0.3;
  width: 100%;
  color: rgb(187, 187, 187);
}
.mobile-appa-span {
  font-size: 50px;
  font-family: "Tilt Warp";
}
.devolopment-span {
  font-size: 27px;
  font-family: "Comfortaa";
}
.inner-texts-div {
  height: 100%;
  width: 70%;
  align-items: flex-start;
}
.imgs-div {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.imgs-div::-webkit-scrollbar {
  display: none;
}
.imgs-div * {
  user-select: none;
  -webkit-user-drag: none;
}

.single-dot {
  height: 15px;
  width: 15px;
  background-color: rgb(187, 187, 187);
  border-radius: 4px;
  margin: 0 3px 0 3px;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgb(0, 0, 0);
}
.active-dot {
  background-color: #e5624e;
}
@media (max-width: 1200px) {
  .imgs-div {
    /* flex: 1; */
    width: 100%;
    justify-content: start;
    padding-left: 20px;
  }
}
@media (max-width: 630px) {
  .mobile-appa-span {
    font-size: 30px;
  }
  .devolopment-span {
    font-size: 16px;
  }
  .single-dot {
    height: 12px;
    width: 12px;
  }
}
</style>

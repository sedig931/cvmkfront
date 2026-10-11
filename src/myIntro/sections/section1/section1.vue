<template>
  <!-- <HalfMoon :moonPosi="'top'" />
    <HalfMoon :moonPosi="'right'" />
    <HalfMoon :moonPosi="'bottom'" />
    <HalfMoon :moonPosi="'left'" /> -->
  <div class="section--1one flex-row">
    <div class="papers-div flex-column">
      <WellPaper
        v-if="this.activePaper === 0"
        @pusePlayProgress="this.pusePlayProgress"
      />
      <Paper2
        v-if="this.activePaper === 1"
        @pusePlayProgress="this.pusePlayProgress"
      />
      <Paper3
        v-if="this.activePaper === 2"
        @pusePlayProgress="this.pusePlayProgress"
      />
      <!-- </div> -->
      <div class="shift-buttons-div flex-row">
        <div
          v-for="(none, i) in new Array(3)"
          :key="i"
          class="single-shift-btn"
          :class="this.activePaper === i ? 'active-single-shift-btn' : ''"
          @click="this.togglePapers(i)"
        >
          <div
            class="progress-div"
            :class="`single-progrres-div-${i}`"
            style="width: 0%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HalfMoon from "../../component/singleHalfMoon.vue";
import WellPaper from "./welcomePaper.vue";
import Paper2 from "./paper2.vue";
import Paper3 from "./paper3.vue";
export default {
  components: {
    HalfMoon,
    WellPaper,
    Paper2,
    Paper3,
  },
  data() {
    return {
      activePaper: 0,
      proressingInerv: null,
      headerObserver: new IntersectionObserver(this.stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: "-100%",
      }),
      //propreties
    };
  },
  methods: {
    proressingPar() {
      let activeProgressParDiv = Number(
        document
          .querySelector(`.single-progrres-div-${this.activePaper}`)
          .style.width.split("%")[0],
      );
      // if (activeProgressParDiv > 97) {
      //   document.querySelector(
      //     `.single-progrres-div-${this.activePaper}`,
      //   ).style.borderRadius = "10px 10px 10px 10px";
      // } else {
      //   document.querySelector(
      //     `.single-progrres-div-${this.activePaper}`,
      //   ).style.borderRadius = "10px 0 0 10px";
      // }
      if (activeProgressParDiv < 100) {
        if (activeProgressParDiv === 0) {
          activeProgressParDiv += 8;
        }
        activeProgressParDiv += 1;
        document.querySelector(
          `.single-progrres-div-${this.activePaper}`,
        ).style.width = activeProgressParDiv + "%";
      } else {
        document.querySelector(
          `.single-progrres-div-${this.activePaper}`,
        ).style.width = "0%";
        if (this.activePaper < 2) {
          this.activePaper++;
        } else {
          this.activePaper = 0;
        }
      }
    },
    togglePapers(shiftBtnIndex) {
      document.querySelector(
        `.single-progrres-div-${this.activePaper}`,
      ).style.width = "0%";
      this.activePaper = shiftBtnIndex;
    },
    pusePlayProgress(mouseEventType) {
      if (mouseEventType === "mouseleave") {
        this.proressingInerv = setInterval(this.proressingPar, 80);
        document
          .querySelector(`.single-progrres-div-${this.activePaper}`)
          .classList.remove("progress-div-pused");
      } else {
        clearInterval(this.proressingInerv);
        document
          .querySelector(`.single-progrres-div-${this.activePaper}`)
          .classList.add("progress-div-pused");
      }
    },
    stickyNav(entries) {
      const [entry] = entries;
      //console.log(entry);
      if (!entry.isIntersecting)
        document
          .querySelector(".half-moon-div-bottom")
          .classList.add("hide-bottom-shape");
      else
        document
          .querySelector(".half-moon-div-bottom")
          .classList.remove("hide-bottom-shape");
    },
    hideBottomShape() {
      this.headerObserver.observe(document.querySelector(".section--1one"));
    },
  },
  mounted() {
    // this.proressingInerv = setInterval(this.proressingPar, 80);
    // this.hideBottomShape();
  },
  unmounted() {
    console.log("unmounte");
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
.section--1one {
  width: 100%;
  height: 80vh;
  padding: 0px 15px 0 15px;
  background-color: var(--col-pro-prim);
  /* background-color: #4d494c; */
}
.papers-div {
  height: 80%;
  /* max-height: 460px; */
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
}
.shift-buttons-div {
  width: 100%;
  /* overflow: hidden; */
}
.single-shift-btn {
  overflow: hidden;
  height: 12px;
  width: 25px;
  margin: 0 8px 0 8px;
  background-color: rgba(187, 187, 187);
  /* box-shadow: 0px 0px 3px 1px rgba(81, 81, 81, 0.6); */
  box-shadow: 0px 1px 3px rgb(0, 0, 0);
  border: 1px solid rgba(187, 187, 187);
  border-radius: 6px;
  cursor: pointer;
}
.active-single-shift-btn {
  width: 65px;
}
.progress-div {
  height: 100%;
  border: none;
  /* border-radius: none; */
  /* background-image: linear-gradient(to left, #c55f9e, #e5624e); */
  background-color: var(--col-pro-btns);
}
.progress-div-pused {
  background-color: var(--col-pro-sec);
}
.hide-bottom-shape {
  opacity: 0;
}
@media (max-width: 850px) {
  /* .papers-div {
    height: 500px;
  } */
}
@media (max-height: 700px) {
  /* .section--1 {
    align-items: flex-end;
    padding-bottom: 50px;
  } */
}
</style>

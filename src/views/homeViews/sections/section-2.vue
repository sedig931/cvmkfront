<template>
  <div class="home-sections home-section-2 flex-column">
    <MYSEO />
    <div class="cv-review-container-div">
      <div
        class="cv-review-div left-cv-review-div flex-column"
        :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
      >
        <div
          class="single-cv-review-div"
          @click="this.selectFrame"
          id="frame-3"
        >
          <CvThree :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
        <div
          class="single-cv-review-div"
          @click="this.selectFrame"
          id="frame-1"
          v-if="this.fixSizingProblemTickFrame1"
        >
          <CvOne
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
      </div>
      <div
        class="cv-review-div right-cv-review-div flex-column"
        :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
      >
        <div
          class="single-cv-review-div"
          @click="this.selectFrame"
          id="frame-5"
          v-if="this.fixSizingProblemTick"
        >
          <CvFive
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>

        <div
          class="single-cv-review-div"
          @click="this.selectFrame"
          id="frame-4"
          v-if="this.fixSizingProblemTick"
        >
          <CvFour
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
      </div>
    </div>
    <div class="view-more-div flex-column">
      <button
        class="view-more-btn"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'view-more-btn-font'
        "
        @click="this.showMoreFrames"
      >
        {{ this.lng.lang.section2.showMoreBtn }}
      </button>
      <div class="all-frames-ats-div flex-row text-center pe-1 ps-1">
        <span
          class="all-frames-ats-span"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'all-frames-ats-div-font'
          "
          :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
        >
          {{ this.lng.lang.section2.allDesATSchecked }}
          <i class="bi bi-check-circle-fill flex-row checked-icon"></i>
        </span>
      </div>
    </div>
    <div
      class="all-cv-review-container-div flex-row"
      :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
      v-if="this.showHideFramesContainer"
      @click="this.selfHide"
    >
      <div class="close-btn">
        <i class="bi bi-x-circle-fill"></i>
      </div>
      <div class="columns-grid-div add-scroll">
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-6"
        >
          <CvSix
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-7"
        >
          <CvSeven
            v-if="this.lng.name !== '中文' || this.frame7imgloading"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <img
            :onload="this.frame7Loaded"
            class="const-img fram7img"
            v-show="this.lng.name === '中文' && !this.frame7imgloading"
            :src="`${this.SERVER_URL}/consFrames/frame7.jpg`"
            alt=""
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-16"
        >
          <Frame16
            v-if="this.lng.name !== '中文' || this.frame16imgloading"
            :lng="this.lng"
            :resumeValues="this.resumeValues"
          /><img
            :onload="this.frame16Loaded"
            class="const-img"
            v-show="this.lng.name === '中文' && !this.frame16imgloading"
            :src="`${this.SERVER_URL}/consFrames/frame16.jpg`"
            alt=""
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-8"
        >
          <CvEight :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-21"
        >
          <Frame21 :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-9"
        >
          <CvNine :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-2"
        >
          <CvTow :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-14"
        >
          <Frame14
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :corner="true"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-10"
        >
          <CvTen
            v-if="this.lng.name !== '中文' || this.frame10imgloading"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <img
            :onload="this.frame10Loaded"
            class="const-img"
            v-show="this.lng.name === '中文' && !this.frame10imgloading"
            :src="`${this.SERVER_URL}/consFrames/frame10.jpg`"
            alt=""
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-11"
        >
          <CvEleven
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-12"
        >
          <CvTwelv
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-17"
        >
          <Frame17
            v-if="this.frame17imgloading"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <img
            :onload="this.frame17Loaded"
            class="const-img"
            v-show="!this.frame17imgloading"
            :src="`${this.SERVER_URL}/consFrames/frame17.jpg`"
            alt=""
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-18"
        >
          <Frame18
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            v-if="this.frame18imgloading"
          />
          <img
            :onload="this.frame18Loaded"
            v-show="!this.frame18imgloading"
            class="const-img"
            :src="`${this.SERVER_URL}/consFrames/frame18.jpg`"
            alt=""
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-13"
        >
          <CvTherteen
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-19"
        >
          <Frame19
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-22"
        >
          <Frame22
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-20"
        >
          <Frame20
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
        <div
          class="single-cv-review-div-2"
          @click="this.selectFrame"
          id="frame-15"
        >
          <Frame15 :resumeValues="this.resumeValues" :lng="this.lng" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CvOne from "../../cvsViews/cvView-1/cvView-1.vue";
import CvTow from "../../cvsViews/cvView-2/cvView-2.vue";
import CvThree from "../../cvsViews/cvView-3/cvView-3.vue";
import CvFour from "../../cvsViews/cvView-4/cvView-4.vue";
import CvFive from "../../cvsViews/cvView-5/cvView-5.vue";

import CvSix from "../../cvsViews/cvView-6/cvView-6.vue";
import CvSeven from "../../cvsViews/cvView-7/cvView-7.vue";
import CvEight from "../../cvsViews/cvView-8/cvView-8.vue";
import CvNine from "../../cvsViews/cvView-9/cvView-9.vue";
import CvTen from "../../cvsViews/cvView-10/cvView-10.vue";
import CvEleven from "../../cvsViews/cvView-11/cvView-11.vue";
import CvTwelv from "../../cvsViews/cvView-12/cvView-12.vue";
import CvTherteen from "../../cvsViews/cvView-13/cvView-13.vue";
import Frame14 from "../../cvsViews/cvView-14/cvView-14.vue";
import Frame15 from "../../cvsViews/cvView-15/cvView-15.vue";
import Frame16 from "../../cvsViews/cvView-16/cvView-16.vue";
import Frame17 from "../../cvsViews/cvView-17/cvView-17.vue";
import Frame18 from "../../cvsViews/cvView-18/cvView-18.vue";
import Frame19 from "../../cvsViews/cvView-19/cvView-19.vue";
import Frame20 from "../../cvsViews/cvView-20/cvView-20.vue";
import Frame21 from "../../cvsViews/cvView-21/cvView-21.vue";
import Frame22 from "../../cvsViews/cvView-22/cvView-22.vue";

import MYSEO from "../../seoView.vue";

export default {
  props: ["lng", "resumeValues"],
  components: {
    MYSEO,
    CvOne,
    CvTow,
    CvThree,
    CvFour,
    CvFive,
    CvSix,
    CvSeven,
    CvEight,
    CvNine,
    CvTen,
    CvEleven,
    CvTwelv,
    CvTherteen,
    Frame14,
    Frame15,
    Frame16,
    Frame17,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
    Frame22,
  },
  data() {
    return {
      // SERVER_URL: "http://localhost:300/uploads",
      SERVER_URL: "https://serve.samdtc931.com/uploads/cvmk",
      showHideFramesContainer: false,
      fixSizingProblemTick: true,
      fixSizingProblemTickFrame1: true,
      frame7imgloading: true,
      frame16imgloading: true,
      frame10imgloading: true,
      frame17imgloading: true,
      frame18imgloading: true,
    };
  },
  methods: {
    showMoreFrames() {
      this.showHideFramesContainer = !this.showHideFramesContainer;
    },
    selfHide() {
      this.showHideFramesContainer = !this.showHideFramesContainer;
    },
    selectFrame(e) {
      // cvinfo
      if (
        Number(
          e.currentTarget.id[e.currentTarget.id.length - 2] +
            e.currentTarget.id[e.currentTarget.id.length - 1]
        ) > 0
      ) {
        this.$router.push({
          name: "cvinfo",
          params: {
            cvNum:
              e.currentTarget.id[e.currentTarget.id.length - 2] +
              e.currentTarget.id[e.currentTarget.id.length - 1],
            lngname: this.lng.name,
          },
        });
      } else {
        this.$router.push({
          name: "cvinfo",
          params: {
            cvNum: e.currentTarget.id[e.currentTarget.id.length - 1],
            lngname: this.lng.name,
          },
        });
      }
    },
    frame7Loaded() {
      this.frame7imgloading = false;
    },
    frame16Loaded() {
      this.frame16imgloading = false;
    },
    frame10Loaded() {
      this.frame10imgloading = false;
    },
    frame17Loaded() {
      this.frame17imgloading = false;
    },
    frame18Loaded() {
      this.frame18imgloading = false;
    },
  },
  mounted() {
    this.fixSizingProblemTick = false;
    this.fixSizingProblemTickFrame1 = false;
    setTimeout(() => {
      this.fixSizingProblemTick = true;
    }, 200);
    if (localStorage.getItem("cvMaker-lngName") === "arabic") {
      setTimeout(() => {
        this.fixSizingProblemTickFrame1 = true;
      }, 3100);
    } else {
      setTimeout(() => {
        this.fixSizingProblemTickFrame1 = true;
      }, 200);
    }
  },
};
</script>

<style scoped>
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-section-2 {
  position: relative;
  /* height: 100%; */
  min-height: 100vh;
  width: 100%;

  transition: transform 1s, opacity 1s;
}
.cv-review-container-div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.cv-review-div {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}
.left-cv-review-div {
  transform: translateY(5%);
}
.single-cv-review-div {
  position: relative;
  height: 500px;
  width: 380px;
  /* border: 0.5px solid rgb(210, 210, 210); */
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 2.5px 2.5px rgba(39, 39, 39, 0.4);
  cursor: pointer;
}
.view-more-div {
  width: 100%;
  margin-top: 50px;
}
.view-more-btn {
  font-size: 18px;
  padding: 3px 33px 3px 33px;
  background-color: rgb(39, 39, 39);
  color: white;
  border: 2px solid rgb(39, 39, 39);
  border-radius: 12px;
  transform: translateY(5%);
}
.view-more-btn-font {
  font-family: "Comfortaa";
}
.view-more-btn:hover {
  border: 2px solid white;
  box-shadow: 0px 0px 2.5px 2.5px rgb(39, 39, 39);
}
.all-frames-ats-div {
  width: 60%;
  margin-top: 25px;
  /* font-family: "Archivo Black", sans-serif; */
  font-size: 14px;
  color: rgb(39, 39, 39);
}
.all-frames-ats-div-font {
  font-family: "AR One Sans";
}
.checked-icon {
  display: inline-block;
  color: var(--color-primary-darker);
}
.all-cv-review-container-div {
  height: 100vh;
  width: 100%;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  background-color: rgba(182, 182, 182, 0.2);
  backdrop-filter: blur(5px);
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 60px;
  cursor: pointer;
  font-size: 19px;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 30px;
  height: 100%;
  width: 100%;
  padding: 10px;
}
.single-cv-review-div-2 {
  height: 450px;
  width: 360px;
  /* margin: 10px; */
  border-radius: 15px;
  box-shadow: 0px 0px 2.5px 2.5px rgba(63, 63, 63, 0.4);
  background-color: white;
  cursor: pointer;
}
.single-cv-review-div-2:hover {
  box-shadow: 0px 0px 2.5px 2.5px rgba(63, 63, 63);
}
.single-cv-review-div:hover {
  box-shadow: 0px 0px 2.5px 2.5px rgba(63, 63, 63);
}
.add-scroll {
  overflow: scroll;
  scrollbar-color: #567272 #e0e0e0;
  scrollbar-width: thin;
  overflow-x: hidden;
  overflow-y: auto;
}
.const-img {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}
/* ---------------------------------------MEDIA QUERY SECTION2--------------------------------------------------- */

/* ---------------------------------------VIEW MORE--------------------------------------------------- */
@media (min-width: 880px) and (max-width: 1210px) {
  .columns-grid-div {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 800px) and (max-width: 880px) {
  .single-cv-review-div-2 {
    height: 430px;
    width: 340px;
  }
  .columns-grid-div {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 500px) and (max-width: 800px) {
  .single-cv-review-div-2 {
    height: 430px;
    width: 340px;
    margin: 0px 5px 0px 5px;
  }
  .columns-grid-div {
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 3px;
    width: auto;
  }
}
@media (max-width: 500px) {
  .single-cv-review-div-2 {
    height: 400px;
    width: 300px;
  }
  .columns-grid-div {
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 3px;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 30px;
  }
}

/* ---------------------------------------HOME CV--------------------------------------------------- */
@media (min-width: 650px) and (max-width: 845px) {
  .single-cv-review-div {
    height: 400px;
    width: 280px;
  }
  .view-more-btn {
    font-size: 15px;
    padding: 3px 25px 3px 25px;
  }
}
@media (max-width: 650px) {
  .cv-review-container-div {
    flex-direction: column;
  }
  .single-cv-review-div {
    height: 350px;
    width: 260px;
  }
  .left-cv-review-div {
    transform: translateY(0%);
  }
  .view-more-btn {
    font-size: 14px;
    padding: 3px 20px 3px 20px;
  }
  .view-more-div {
    margin-top: 10px;
  }
}
@media (max-width: 600px) {
  .all-frames-ats-div {
    font-size: 13px;
  }
}
</style>

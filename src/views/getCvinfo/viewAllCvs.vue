<template>
  <div class="window-container-div-shows flex-column">
    <div class="allcv-container-div flex-row">
      <div class="single-cv-container" id="0" @click="this.setInFullView">
        <CvTow v-if="!this.cvNumbers[0]" />
        <CvTow v-if="this.cvNumbers[0]" />
      </div>
      <div class="single-cv-container" id="1" @click="this.setInFullView">
        <!-- <CvThree v-if="!this.cvNumbers[1]" /> -->
        <!-- <CvThree v-if="this.cvNumbers[1]" /> -->
      </div>
    </div>
    <div class="allcv-container-div flex-row">
      <div class="single-cv-container" id="2" @click="this.setInFullView">
        <CvFour v-if="!this.cvNumbers[2]" />
        <CvFour v-if="this.cvNumbers[2]" />
      </div>
      <div class="single-cv-container" id="3" @click="this.setInFullView">
        <CvFive v-if="!this.cvNumbers[3]" />
        <CvFive v-if="this.cvNumbers[3]" />
      </div>
    </div>
    <div class="allcv-container-div flex-row">
      <div class="single-cv-container" id="4" @click="this.setInFullView">
        <CvSix v-if="!this.cvNumbers[4]" />
        <CvSix v-if="this.cvNumbers[4]" />
      </div>
      <div class="single-cv-container" id="5" @click="this.setInFullView">
        <CvSeven v-if="!this.cvNumbers[5]" />
        <CvSeven v-if="this.cvNumbers[5]" />
      </div>
    </div>
    <div class="allcv-container-div flex-row">
      <div class="single-cv-container" id="6" @click="this.setInFullView">
        <CvEight v-if="!this.cvNumbers[6]" />
        <CvEight v-if="this.cvNumbers[6]" />
      </div>
      <div class="single-cv-container" id="7" @click="this.setInFullView">
        <CvNine v-if="!this.cvNumbers[7]" />
        <CvNine v-if="this.cvNumbers[7]" />
      </div>
    </div>
    <div
      class="allcv-container-div flex-row"
      id="8"
      @click="this.setInFullView"
    >
      <div class="single-cv-container" id="8" @click="this.setInFullView">
        <CvTen v-if="!this.cvNumbers[8]" />
        <CvTen v-if="this.cvNumbers[8]" />
      </div>
      <div class="single-cv-container" id="9" @click="this.setInFullView">
        <CvEleven v-if="!this.cvNumbers[9]" />
        <CvEleven v-if="this.cvNumbers[9]" />
      </div>
    </div>
    <div
      class="allcv-container-div flex-row"
      id="10"
      @click="this.setInFullView"
    >
      <div class="single-cv-container" id="10" @click="this.setInFullView">
        <CvTwelv v-if="!this.cvNumbers[10]" />
        <CvTwelv v-if="this.cvNumbers[10]" />
      </div>
      <div class="single-cv-container" id="11" @click="this.setInFullView">
        <CvTherteen v-if="!this.cvNumbers[11]" />
        <CvTherteen v-if="this.cvNumbers[11]" />
      </div>
    </div>
    <div
      class="allcv-container-div flex-row"
      id="10"
      @click="this.setInFullView"
    >
      <div class="single-cv-container" id="12" @click="this.setInFullView">
        <CvFourteen v-if="!this.cvNumbers[12]" />
        <CvFourteen v-if="this.cvNumbers[12]" />
      </div>
      <div class="single-cv-container" id="13" @click="this.setInFullView">
        <CvFifteen v-if="!this.cvNumbers[13]" />
        <CvFifteen v-if="this.cvNumbers[13]" />
      </div>
    </div>
  </div>
</template>

<script>
import CvTow from "../cvsViews/cvView-2/cvView-2.vue";
import CvThree from "../cvsViews/cvView-3/cvView-3.vue";
import CvFour from "../cvsViews/cvView-4/cvView-4.vue";
import CvFive from "../cvsViews/cvView-5/cvView-5.vue";
import CvSix from "../cvsViews/cvView-6/cvView-6.vue";
import CvSeven from "../cvsViews/cvView-7/cvView-7.vue";
import CvEight from "../cvsViews/cvView-8/cvView-8.vue";
import CvNine from "../cvsViews/cvView-9/cvView-9.vue";
import CvTen from "../cvsViews/cvView-10/cvView-10.vue";
import CvEleven from "../cvsViews/cvView-11/cvView-11.vue";
import CvTwelv from "../cvsViews/cvView-12/cvView-12.vue";
import CvTherteen from "../cvsViews/cvView-13/cvView-13.vue";
import CvFourteen from "../cvsViews/cvView-14/cvView-14.vue";
import CvFifteen from "../cvsViews/cvView-15/cvView-15.vue";
export default {
  components: {
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
    CvFourteen,
    CvFifteen,
  },
  data() {
    return {
      cvNumbers: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    setInFullView(e) {
      this.cvNumbers[Number(e.currentTarget.id)] =
        !this.cvNumbers[Number(e.currentTarget.id)];
      e.currentTarget.classList.toggle("fullCvView");
      document.querySelector(".bolor").classList.toggle("bolored");
    },
  },
};
</script>

<style scoped>
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

.window-container-div-shows {
  width: 100%;
  height: 100%;
}
.allcv-container-div {
  width: 100%;
  justify-content: space-evenly;
}
.single-cv-container {
  height: 500px;
  width: 400px;
  border: 0.5px solid rgba(215, 215, 215, 0.5);
  margin: 5px;
  cursor: pointer;
  /* height: 300px; */
}

.fullCvView {
  position: absolute;
  top: 0;
  height: 1180px;
  width: 800px;
  z-index: 2;
}
</style>

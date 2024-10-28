<template>
  <div class="flex-column">
    <div class="inner-review-user-frames flex-row">
      <div v-for="(frame, i) in this.frames" :key="i">
        <div
          class="single-user-frame-div"
          :class="
            this.setActiveClass('frame_1') ? 'active-frame' : 'not-active-frame'
          "
          v-if="
            frame.frameName === 'frame_1' && this.hideOtherFrames('frame_1')
          "
          :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
        >
          <Frame1
            :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
            :corner="true"
            :resumeValues="frame.frameInfo"
          />
          <div
            class="print-edit-div flex-row"
            v-if="this.setActiveClass('frame_1')"
          >
            <i
              class="bi bi-printer-fill print-icon m-2"
              @click="this.printFrame(1)"
            ></i>
            <i
              class="bi bi-pencil-square edit-icon m-2"
              @click="this.editFrameInfo(1)"
            ></i>
            <i
              class="bi bi-trash3-fill delete-icon m-2"
              @click="this.deleteFrame(1)"
            ></i>
          </div>
        </div>
        <div
          class="single-user-frame-div"
          :class="
            this.setActiveClass('frame_3') ? 'active-frame' : 'not-active-frame'
          "
          v-if="
            frame.frameName === 'frame_3' && this.hideOtherFrames('frame_3')
          "
          :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
        >
          <Frame3
            :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
            :resumeValues="frame.frameInfo"
          />
          <div
            class="print-edit-div flex-row"
            v-if="this.setActiveClass('frame_3')"
          >
            <i
              class="bi bi-printer-fill print-icon m-2"
              @click="this.printFrame(3)"
            ></i>
            <i
              class="bi bi-pencil-square edit-icon m-2"
              @click="this.editFrameInfo(3)"
            ></i>
            <i
              class="bi bi-trash3-fill delete-icon m-2"
              @click="this.deleteFrame(3)"
            ></i>
          </div>
        </div>
        <div
          class="single-user-frame-div"
          :class="
            this.setActiveClass('frame_21')
              ? 'active-frame'
              : 'not-active-frame'
          "
          v-if="
            frame.frameName === 'frame_21' && this.hideOtherFrames('frame_21')
          "
          :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
        >
          <Frame21
            :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
            :resumeValues="frame.frameInfo"
            :photoName="this.setPhotoFrame(21)"
          />
          <div
            class="print-edit-div flex-row"
            v-if="this.setActiveClass('frame_21')"
          >
            <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(21)"
                ></i> -->
            <i
              class="bi bi-pencil-square edit-icon m-2"
              @click="this.editFrameInfo(21)"
            ></i>
            <i
              class="bi bi-trash3-fill delete-icon m-2"
              @click="this.deleteFrame(21)"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <!-- /////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////////////////////////////////////////////////////// -->
    <!-- /////////////////////////////////////////////////////////////////////// -->
    <div class="goLR-div flex-row">
      <div class="LR-icon-div flex-row" @click="this.$emit('goLeft')">
        <!-- <i class="bi LR-icon bi-caret-left flex-row"></i> -->
        <i
          class="bi bi-caret-left-fill flex-row"
          v-if="this.lng.name !== 'arabic'"
        ></i>
        <i
          class="bi bi-caret-right-fill flex-row"
          v-if="this.lng.name === 'arabic'"
        ></i>
      </div>
      <div class="LR-icon-div flex-row" @click="this.$emit('goRight')">
        <!-- <i class="bi LR-icon bi-caret-right flex-row"></i> -->
        <i
          class="bi bi-caret-right-fill flex-row"
          v-if="this.lng.name !== 'arabic'"
        ></i>
        <i
          class="bi bi-caret-left-fill flex-row"
          v-if="this.lng.name === 'arabic'"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import Frame1 from "./cvsViews/cvView-1/cvView-1.vue";
import Frame2 from "./cvsViews/cvView-2/cvView-2.vue";
import Frame3 from "./cvsViews/cvView-3/cvView-3.vue";
import Frame4 from "./cvsViews/cvView-4/cvView-4.vue";
import Frame5 from "./cvsViews/cvView-5/cvView-5.vue";
import Frame6 from "./cvsViews/cvView-6/cvView-6.vue";
import Frame7 from "./cvsViews/cvView-7/cvView-7.vue";
import Frame8 from "./cvsViews/cvView-8/cvView-8.vue";
import Frame9 from "./cvsViews/cvView-9/cvView-9.vue";
import Frame10 from "./cvsViews/cvView-10/cvView-10.vue";
import Frame11 from "./cvsViews/cvView-11/cvView-11.vue";
import Frame12 from "./cvsViews/cvView-12/cvView-12.vue";
import Frame13 from "./cvsViews/cvView-13/cvView-13.vue";
import Frame14 from "./cvsViews/cvView-14/cvView-14.vue";
import Frame15 from "./cvsViews/cvView-15/cvView-15.vue";
import Frame16 from "./cvsViews/cvView-16/cvView-16.vue";
import Frame17 from "./cvsViews/cvView-17/cvView-17.vue";
import Frame18 from "./cvsViews/cvView-18/cvView-18.vue";
import Frame19 from "./cvsViews/cvView-19/cvView-19.vue";
import Frame20 from "./cvsViews/cvView-20/cvView-20.vue";
import Frame21 from "./cvsViews/cvView-21/cvView-21.vue";
import { languages } from "../components/languages.js";
export default {
  components: {
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Frame6,
    Frame7,
    Frame8,
    Frame9,
    Frame10,
    Frame11,
    Frame12,
    Frame13,
    Frame14,
    Frame15,
    Frame16,
    Frame17,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
  },
  props: ["showHideCustomerDetails", "frames", "framePhotoNames", "lng"],
  methods: {
    setPhotoFrame(frameNum) {
      return this.framePhotoNames.find(
        (photo) => Number(photo.frameNum) === frameNum
      ).photoName;
    },
    setActiveClass(frameName) {
      // if (this.customer.frames.includes(frameName)) {
      if (this.frames[0].frameName === frameName) {
        return true;
      } else {
        return false;
      }
      // }
    },
    hideOtherFrames(frameName) {
      if (this.frames.findIndex((frame) => frame.frameName === frameName) > 2) {
        return false;
      } else {
        return true;
      }
    },
    setSingleFrameLang(lngName) {
      return languages.find((lng) => lng.name === lngName);
    },
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
.inner-review-user-frames {
  align-items: end;
}
.single-user-frame-div {
  position: relative;
  height: 350px;
  width: 240px;
  border: 1px solid rgb(180, 180, 180);
  margin: 5px;
  border-radius: 15px;
}
.print-edit-div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(202, 202, 202, 0.4);
  border-radius: 0 0 15px 15px;
  backdrop-filter: blur(1px);
}
.goLR-div {
  height: 40px;
  width: 100%;

  /* background-color: red; */
}
.LR-icon-div {
  height: 25px;
  width: 25px;
  margin: 0 10px 0 10px;
  border: 1px solid;
  border-radius: 12.5px;
  font-size: 14px;
  cursor: pointer;
}
.active-frame {
  height: 420px;
  width: 300px;
}
.not-active-frame {
  display: none;
}
.edit-icon,
.delete-icon,
.print-icon {
  font-size: 20px;
  cursor: pointer;
}
.add-frame-div {
  height: 420px;
  width: 300px;
  border: 1px solid rgb(180, 180, 180);
  margin: 5px;
  border-radius: 15px;
}
.file-icon {
  font-size: 70px;
}
.nocv-span {
  font-size: 15px;
}
</style>
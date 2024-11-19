<template>
  <div class="window-print" :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'">
    <Frame1
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '1'"
      :justPrint="true"
    />
    <Frame2
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '2'"
      :justPrint="true"
    />
    <Frame3
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '3'"
      :justPrint="true"
    />
    <Frame4
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '4'"
      :justPrint="true"
    />
    <Frame5
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '5'"
      :justPrint="true"
    />
    <Frame6
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '6'"
      :justPrint="true"
    />
    <Frame7
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '7'"
      :justPrint="true"
    />
    <Frame8
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '8'"
      :justPrint="true"
    />
    <Frame9
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '9'"
      :justPrint="true"
    />
    <Frame10
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '10'"
      :justPrint="true"
    />
    <Frame11
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '11'"
      :justPrint="true"
    />
    <Frame12
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '12'"
      :justPrint="true"
    />
    <Frame13
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '13'"
      :justPrint="true"
    />
    <Frame14
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '14'"
      :justPrint="true"
    />
    <Frame15
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '15'"
      :justPrint="true"
    />
    <Frame16
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '16'"
      :justPrint="true"
    />
    <Frame17
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '17'"
      :justPrint="true"
    />
    <Frame18
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '18'"
      :justPrint="true"
    />
    <Frame19
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '19'"
      :justPrint="true"
    />
    <Frame20
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '20'"
      :justPrint="true"
    />
    <Frame21
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '21'"
      :justPrint="true"
    />
    <Frame22
      :resumeValues="this.resumeValues"
      :lng="this.lng"
      v-if="this.cvNum === '22'"
      :justPrint="true"
    />
  </div>
</template>

<script>
import Frame1 from "../cvsViews/cvView-1/cvView-1.vue";
import Frame3 from "../cvsViews/cvView-3/cvView-3.vue";
import Frame2 from "../cvsViews/cvView-2/cvView-2.vue";

import Frame4 from "../cvsViews/cvView-4/cvView-4.vue";
import Frame5 from "../cvsViews/cvView-5/cvView-5.vue";

import Frame6 from "../cvsViews/cvView-6/cvView-6.vue";
import Frame7 from "../cvsViews/cvView-7/cvView-7.vue";
import Frame8 from "../cvsViews/cvView-8/cvView-8.vue";
import Frame9 from "../cvsViews/cvView-9/cvView-9.vue";
import Frame10 from "../cvsViews/cvView-10/cvView-10.vue";
import Frame11 from "../cvsViews/cvView-11/cvView-11.vue";
import Frame12 from "../cvsViews/cvView-12/cvView-12.vue";
import Frame13 from "../cvsViews/cvView-13/cvView-13.vue";
import Frame14 from "../cvsViews/cvView-14/cvView-14.vue";
import Frame15 from "../cvsViews/cvView-15/cvView-15.vue";
import Frame16 from "../cvsViews/cvView-16/cvView-16.vue";
import Frame17 from "../cvsViews/cvView-17/cvView-17.vue";
import Frame18 from "../cvsViews/cvView-18/cvView-18.vue";
import Frame19 from "../cvsViews/cvView-19/cvView-19.vue";
import Frame20 from "../cvsViews/cvView-20/cvView-20.vue";
import Frame21 from "../cvsViews/cvView-21/cvView-21.vue";
import Frame22 from "../cvsViews/cvView-22/cvView-22.vue";
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
    Frame22,
  },
  props: ["lng", "cvNum", "resumeValues"],
  mounted() {},
};
</script>

<style scoped>
.window-print {
  height: 1055.95px;
  width: 100%;
}
</style>

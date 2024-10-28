<template>
  <div class="flex-column">
    <div
      :class="
        this.lng.name === 'arabic'
          ? 'arabic-font flex-column'
          : 'form-child flex-column'
      "
      v-for="(course, i) in this.formInfo"
      :key="i"
      v-show="this.currentCourseForm === i"
    >
      <div class="row mb-2">
        <div class="col flex-row">
          <label class="lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.forms.addCourseForm
                    .courseTitleLbl
                }}
              </span>
              <span class="double-dot-span">:</span>
            </div>
          </label>
        </div>
        <div class="col flex-row">
          <input
            type="text"
            class="input-contr form-control text-muted course-element"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_6'
            )}_element`"
            id="course-title"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addCourseForm
                .courseTitleHolder
            "
            v-model="course.courseTitle"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col flex-row">
          <label class="lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span>
                {{
                  this.lng.lang.section2.getCvInfo.forms.addCourseForm
                    .courseInstLbl
                }}
              </span>
              <span class="double-dot-span">:</span>
            </div>
          </label>
        </div>
        <div class="col flex-row">
          <input
            type="text"
            class="input-contr form-control text-muted course-element"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_6'
            )}_element`"
            id="institution"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addCourseForm
                .courseInstHolder
            "
            v-model="course.institution"
          />
        </div>
      </div>
    </div>
    <div
      class="switch-work-exp-form flex-row mt-3 text-muted"
      v-show="this.formInfo.length > 1"
    >
      <i
        class="bi bi-chevron-left left-right-icon"
        v-if="this.lng.name !== 'arabic'"
        @click="this.goLeft"
      ></i>
      <i
        class="bi bi-chevron-right left-right-icon"
        v-if="this.lng.name === 'arabic'"
        @click="this.goLeft"
      ></i>
      <span>{{ this.currentCourseForm + 1 }}</span>
      <i
        class="bi bi-chevron-right left-right-icon"
        v-if="this.lng.name !== 'arabic'"
        @click="this.goRight"
      ></i>
      <i
        class="bi bi-chevron-left left-right-icon"
        v-if="this.lng.name === 'arabic'"
        @click="this.goRight"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["allForms", "formInfo", "currentCourseForm", "lng"],
  data() {
    return {
      // currentCourseForm: 0,
    };
  },
  methods: {
    goLeft() {
      // if (this.currentCourseForm + 1 > 1) this.currentCourseForm--;
      this.$emit("goLift");
    },
    goRight() {
      this.$emit("goRight");
      // if (this.currentCourseForm < this.formInfo.length - 1)
      //   this.currentCourseForm++;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.form-child {
  font-family: "AR One Sans";
}
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
.justify-double-dot {
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
::-webkit-input-placeholder {
  color: rgb(160, 160, 160);
}
.switch-work-exp-form {
  justify-content: space-evenly;
  width: 50%;
  font-size: 15px;
}
.left-right-icon {
  cursor: pointer;
}
/* ---------------------------------------MEDIA QUERY FORM 2--------------------------------------------------- */

@media (min-width: 470px) and (max-width: 1160px) {
  .input-contr {
    width: 250px;
  }
  .justify-double-dot {
    width: 125px;
    font-size: 14px;
  }
}
@media (max-width: 470px) {
  .justify-double-dot {
    width: 115px;
    font-size: 13px;
  }
  .input-contr {
    width: 230px;
  }

  .switch-work-exp-form {
    font-size: 14px;
  }
}
@media (max-width: 339.9px) {
  .justify-double-dot {
    justify-content: start;
    width: 200px;
  }
  .double-dot-span {
    margin: 0 10px 0 10px;
  }
}
</style>

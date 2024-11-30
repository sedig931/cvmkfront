<template>
  <div
    class="add-info-container-div flex-column"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'add-info-container-div-font'
    "
  >
    <div class="add-info-inner-container-div border flex-column text-muted">
      <div
        class="add-info-btn flex-row"
        v-show="!this.showHideInfoMenue"
        @click="this.showHideInfoMenue = !this.showHideInfoMenue"
      >
        <i class="bi bi-plus-circle m-2"></i>
        <span>
          {{ this.lng.lang.section2.getCvInfo.forms.addInfoForm.addMoreLbl }}
        </span>
      </div>
      <div
        class="info-menue-container flex-column"
        v-show="this.showHideInfoMenue"
      >
        <div
          class="single-info-item-div flex-row pt-1"
          @click="this.addWorkExpForm"
        >
          <i class="bi bi-briefcase-fill me-2 ms-2"></i>
          <span>{{
            this.lng.lang.section2.getCvInfo.forms.addInfoForm.addWork
          }}</span>
        </div>
        <div
          class="single-info-item-div flex-row pt-1"
          @click="this.addWebLink"
        >
          <i class="bi bi-link-45deg me-2 ms-2"></i>
          <span>{{
            this.lng.lang.section2.getCvInfo.forms.addInfoForm.addLink
          }}</span>
        </div>
        <div
          class="single-info-item-div flex-row pt-1"
          @click="this.addThesisTopic"
        >
          <i class="bi bi-mortarboard-fill me-2 ms-2"></i>
          <span>{{
            this.lng.lang.section2.getCvInfo.forms.addInfoForm.addThesis
          }}</span>
        </div>
        <div class="single-info-item-div flex-row pt-1" @click="this.addCourse">
          <i class="bi bi-journal-bookmark-fill me-2 ms-2"></i>
          <span>{{
            this.lng.lang.section2.getCvInfo.forms.addInfoForm.addCourse
          }}</span>
        </div>
      </div>
    </div>
    <span class="span-footer-info mt-2">
      {{ this.lng.lang.section2.getCvInfo.forms.addInfoForm.ifNotSave }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["allForms", "expForms", "coursesForms", "lng"],
  data() {
    return {
      showHideInfoMenue: false,
    };
  },
  methods: {
    addWorkExpForm() {
      if (this.allForms.find((cname) => cname === "form_5")) {
        //push new form object.
        this.showHideInfoMenue = false;
        this.expForms.push({
          jobTitle: "",
          address: "",
          employer: "",
          workDate: {
            from: { month: "", year: "" },
            to: { month: "", year: "" },
          },
        });

        this.$emit(
          "formFound",
          this.allForms.findIndex((cname) => cname === "form_5")
        );
      } else {
        const lastForm = this.allForms.pop();
        this.allForms.push("form_5");
        this.allForms.push(lastForm);
        this.showHideInfoMenue = false;
      }
    },
    addCourse() {
      if (this.allForms.find((cname) => cname === "form_6")) {
        //push new form object.
        this.showHideInfoMenue = false;
        this.coursesForms.push({
          courseTitle: "",
          institution: "",
        });
        this.$emit(
          "formFound",
          this.allForms.findIndex((cname) => cname === "form_6")
        );
      } else {
        const lastForm = this.allForms.pop();
        this.allForms.push("form_6");
        this.allForms.push(lastForm);
        this.showHideInfoMenue = false;
      }
    },
    addThesisTopic() {
      if (this.allForms.find((cname) => cname === "form_7")) {
        this.showHideInfoMenue = false;
        this.$emit(
          "formFound",
          this.allForms.findIndex((cname) => cname === "form_7")
        );
      } else {
        const lastForm = this.allForms.pop();
        this.allForms.push("form_7");
        this.allForms.push(lastForm);
        this.showHideInfoMenue = false;
      }
    },
    addWebLink() {
      if (this.allForms.find((cname) => cname === "form_8")) {
        // console.log("found");
        this.showHideInfoMenue = false;
        this.$emit(
          "formFound",
          this.allForms.findIndex((cname) => cname === "form_8")
        );
      } else {
        const lastForm = this.allForms.pop();
        this.allForms.push("form_8");
        this.allForms.push(lastForm);
        this.showHideInfoMenue = false;
      }
    },
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
.add-info-container-div {
  width: 100%;
  height: inherit;
}
.add-info-container-div-font {
  font-family: "AR One Sans";
}
.add-info-inner-container-div {
  width: 100%;
  height: inherit;
  border-radius: 10px;
}
.add-info-btn {
  width: 300px;
  height: 60px;
  font-size: 14px;
  cursor: pointer;
  margin: 10px 0 10px 0;
}
.span-footer-info {
  font-size: 12px;
  color: rgb(115, 115, 228);
  margin-bottom: 5px;
}
.info-menue-container {
  width: 300px;
  height: inherit;
  margin: 10px 0 10px 0;
  font-size: 14px;
}
.single-info-item-div {
  width: 100%;
  height: inherit;
  /* justify-content: space-evenly; */
  /* border-bottom: 0.5px solid rgb(180, 180, 180); */
  cursor: pointer;
}
.single-info-item-div:hover {
  color: rgb(115, 115, 228);
}
/* ---------------------------------------MEDIA QUERY FORM 2--------------------------------------------------- */

@media (max-width: 470px) {
  .add-info-btn {
    width: 250px;
    height: 40px;
    font-size: 13px;
  }
  .info-menue-container {
    width: 250px;
    font-size: 13px;
  }
  .span-footer-info {
    font-size: 11px;
  }
}
</style>

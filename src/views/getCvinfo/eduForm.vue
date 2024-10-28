<template>
  <div
    :class="
      this.lng.name === 'arabic'
        ? 'child-form arabic-font'
        : 'child-form child-form-font'
    "
  >
    <div class="row mb-2">
      <div class="col flex-row">
        <label class="form-label lbl text-muted p-0 m-0">
          <div class="justify-double-dot">
            <span>{{
              this.lng.lang.section2.getCvInfo.forms.form2.eduDegree.lbl
            }}</span>
            <span class="double-dot-span">:</span>
          </div>
        </label>
      </div>
      <div class="col flex-row">
        <input
          type="text"
          class="input-contr form-control text-muted form_1_element"
          id="education-degree"
          :placeholder="
            this.lng.lang.section2.getCvInfo.forms.form2.eduDegree.holder
          "
          v-model="this.formInfo.eduDegree"
        />
      </div>
    </div>
    <div class="row mb-2">
      <div class="col flex-row">
        <label class="form-label lbl text-muted p-0 m-0">
          <div class="justify-double-dot">
            <span>{{
              this.lng.lang.section2.getCvInfo.forms.form2.schoolName.lbl
            }}</span>
            <span class="double-dot-span"> :</span>
          </div>
        </label>
      </div>
      <div class="col flex-row">
        <input
          type="text"
          class="input-contr form-control text-muted form_1_element"
          id="uni-name"
          :placeholder="
            this.lng.lang.section2.getCvInfo.forms.form2.schoolName.holder
          "
          v-model="this.formInfo.uniName"
        />
      </div>
    </div>
    <div class="row mb-2">
      <div class="col flex-row">
        <label class="form-label lbl text-muted p-0 m-0">
          <div class="justify-double-dot">
            <span>{{
              this.lng.lang.section2.getCvInfo.forms.form2.yearsStudy.lbl
            }}</span>
            <span class="double-dot-span"> :</span>
          </div>
        </label>
      </div>
      <div class="col flex-row">
        <div class="from-div group-input-div flex-row">
          <button
            type="button"
            class="from-to-btn-my from-btn form-control flex-row m-0 p-0"
          >
            <span
              class="from-to-span flex-row"
              id="from-span"
              v-show="this.showFromSpan"
              @click="this.showHideFromToSpan"
              >{{
                this.lng.lang.section2.getCvInfo.forms.form2.yearsStudy.holder
                  .from
              }}</span
            >
            <div
              class="dropdown-selected-div from-to-m flex-row drop-down"
              @click="this.showHideMenue"
              id="gradu-from-month"
              v-show="!this.showFromSpan"
            >
              <span class="drop-down">{{
                this.formInfo.yearsStudy.from.month
                  ? this.formInfo.yearsStudy.from.month
                  : "MM"
              }}</span>
              <i class="bi bi-chevron-down drop-down"></i>

              <div
                class="drop-down-menu-div form-control text-muted p-0 m-0"
                v-show="this.showFromMonth"
                @click="this.updateSelectedValue"
              >
                <span
                  class="menu-item from-month"
                  v-for="month in this.months"
                  :key="month"
                  :data-frommonth="month"
                  >{{ month }}</span
                >
              </div>
            </div>

            <span class="text-muted" v-show="!this.showFromSpan">:</span>

            <div
              class="dropdown-selected-div from-to-y flex-row drop-down"
              @click="this.showHideMenue"
              id="gradu-from-year"
              v-show="!this.showFromSpan"
            >
              <span class="drop-down">{{
                this.formInfo.yearsStudy.from.year
                  ? this.formInfo.yearsStudy.from.year
                  : "YY"
              }}</span>
              <i class="bi bi-chevron-down drop-down text-center"></i>
              <div
                class="drop-down-menu-div form-control text-muted p-0 m-0"
                v-show="this.showFromYear"
                @click="this.updateSelectedValue"
              >
                <span
                  class="menu-item from-year"
                  v-for="year in this.years"
                  :key="year"
                  :data-fromyear="year"
                  >{{ year }}</span
                >
              </div>
            </div>
          </button>

          <button
            type="button"
            class="from-to-btn-my to-btn form-control text-muted flex-row m-0 p-0"
          >
            <span
              class="from-to-span flex-row"
              v-show="this.showToSpan"
              @click="this.showHideFromToSpan"
              >{{
                this.lng.lang.section2.getCvInfo.forms.form2.yearsStudy.holder
                  .to
              }}</span
            >
            <div
              class="dropdown-selected-div from-to-m flex-row drop-down"
              @click="this.showHideMenue"
              id="gradu-to-month"
              v-show="!this.showToSpan"
            >
              <span class="drop-down">{{
                this.formInfo.yearsStudy.to.month
                  ? this.formInfo.yearsStudy.to.month
                  : "MM"
              }}</span>
              <i class="bi bi-chevron-down drop-down"></i>

              <div
                class="drop-down-menu-div form-control text-muted p-0 m-0"
                v-show="this.showToMonth"
                @click="this.updateSelectedValue"
              >
                <span
                  class="menu-item to-month"
                  v-for="month in this.months"
                  :key="month"
                  :data-tomonth="month"
                  >{{ month }}</span
                >
              </div>
            </div>
            <span class="text-muted" v-show="!this.showToSpan">:</span>
            <div
              class="dropdown-selected-div from-to-y flex-row drop-down"
              @click="this.showHideMenue"
              id="gradu-to-year"
              v-show="!this.showToSpan"
            >
              <span class="drop-down">{{
                this.formInfo.yearsStudy.to.year
                  ? this.formInfo.yearsStudy.to.year
                  : "YY"
              }}</span>
              <i class="bi bi-chevron-down drop-down"></i>
              <div
                class="drop-down-menu-div form-control text-muted p-0 m-0"
                v-show="this.showToYear"
                @click="this.updateSelectedValue"
              >
                <span
                  class="menu-item to-year"
                  v-for="year in this.years"
                  :key="year"
                  :data-toyear="year"
                  >{{ year }}</span
                >
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      class="row mb-2"
      v-if="
        Number(this.cvNum) === 16 ||
        Number(this.cvNum) === 2 ||
        Number(this.cvNum) === 14 ||
        Number(this.cvNum) === 17 ||
        Number(this.cvNum) === 20 ||
        Number(this.cvNum) === 21
      "
    >
      <div class="col flex-row">
        <label class="form-label lbl text-muted p-0 m-0">
          <div class="justify-double-dot">
            <span> Personal Photo </span>
            <span class="double-dot-span"> :</span>
          </div>
        </label>
      </div>
      <div class="col flex-row">
        <input
          type="file"
          accept=".png,.jpg,.jpng"
          :onchange="this.preview_image"
          class="input-contr form-control text-muted form_1_element photo-input"
        />
      </div>
    </div>
    <div class="row mb-2">
      <div class="col flex-row textArea-col-div">
        <label class="form-label lbl text-muted p-0 m-0">
          <div class="justify-double-dot">
            <span>{{
              this.lng.lang.section2.getCvInfo.forms.form2.disc.lbl
            }}</span>
            <span class="double-dot-span"> :</span>
          </div>
        </label>
      </div>
      <div class="col flex-row">
        <textarea
          type="text"
          class="input-contr input-textArea form-control text-muted form_1_element"
          :placeholder="
            this.lng.lang.section2.getCvInfo.forms.form2.disc.holder
          "
          v-model="this.formInfo.eduDiscreption"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "formInfo",
    "showGradWith",
    "showFromMonth",
    "showToMonth",
    "showFromYear",
    "showToYear",
    "lng",
    "cvNum",
  ],
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      years: [],
      showFromSpan: true,
      showToSpan: true,
    };
  },
  methods: {
    updateSelectedValue(e) {
      if (e.target.classList.contains("grad-with-item")) {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.formInfo.cerLevel = e.target.dataset.gradwith;
      } else if (e.target.classList.contains("from-month")) {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.formInfo.yearsStudy.from.month = e.target.dataset.frommonth;
      } else if (e.target.classList.contains("from-year")) {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.formInfo.yearsStudy.from.year = e.target.dataset.fromyear;
      } else if (e.target.classList.contains("to-month")) {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.formInfo.yearsStudy.to.month = e.target.dataset.tomonth;
      } else if (e.target.classList.contains("to-year")) {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.formInfo.yearsStudy.to.year = e.target.dataset.toyear;
      }
    },
    showHideMenue(e) {
      this.$emit("showHideMenue", e);
    },
    showHideFromToSpan(e) {
      if (e.target.id === "from-span") {
        this.showFromSpan = false;
      } else {
        this.showToSpan = false;
      }
    },
    preview_image(event) {
      const pPhoto = document.querySelector(".photo-input").files[0];
      if (!pPhoto.type.includes("image")) {
        return;
      } else {
        var reader = new FileReader();
        reader.onload = function () {
          localStorage.setItem("photo", reader.result);
          document
            .querySelector(".personal-photo")
            .setAttribute("src", reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        this.formInfo.photo = pPhoto;
      }
    },
  },
  mounted() {
    if (this.formInfo.yearsStudy.to.month) {
      this.showToSpan = false;
    }
    if (this.formInfo.yearsStudy.from.month) {
      this.showFromSpan = false;
    }
    for (let i = 1900; i <= 2024; i++) {
      this.years.push(i);
    }
  },
};
</script>
<style scoped>
.img-trying {
  height: 50px;
  width: 50px;
  border: 1px solid;
}
.child-form-font {
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
/* .lbl {
  } */
.justify-double-dot {
  width: 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
}
.input-textArea {
  min-height: 100px;
}
.textArea-col-div {
  align-items: start;
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
::-webkit-input-placeholder {
  color: rgb(160, 160, 160);
}
.dropdown-selected-div {
  position: relative;
  color: rgb(160, 160, 160);
  justify-content: space-between;
}
.drop-down-menu-div {
  position: absolute;
  top: 33px;
  right: 0px;

  max-height: 167px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;

  z-index: 1;
}
.grad-with-item {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 12px;
  width: 100%;
  cursor: pointer;
  padding-left: 12.5px;
}
.grad-with-item:hover {
  background-color: rgb(180, 180, 180);
}
.cl-dropdown-selected-div {
  width: 100%;
  height: 100%;
  padding: 0 12.5px 0 12.5px;
}
.group-input-div {
  width: 300px;
  justify-content: space-between;
}
.from-to-btn-my {
  font-size: 13px;
  width: 49%;
  height: 30px;
}
.from-to-m {
  height: 100%;
  width: 50%;
  justify-content: space-evenly;
  /* padding-left: 12.5px; */
}
.from-to-y {
  justify-content: space-evenly;
  height: 100%;
  width: 50%;
}
.menu-item {
  font-size: 12px;
  /* height: inherit; */
  width: 100%;
  cursor: pointer;
}

.menu-item:hover {
  background-color: rgb(180, 180, 180);
}

.from-to-span {
  width: 100%;
  height: 100%;
  justify-content: start;
  padding-left: 12.5px;
  color: rgb(160, 160, 160);
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
  .group-input-div {
    width: 250px;
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

  .group-input-div {
    width: 230px;
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

<template>
  <div
    class="form-child flex-column"
    :class="this.lng.name === 'arabic' ? 'arabic-font' : 'form-child-font'"
  >
    <div
      v-for="(workform, i) in this.formInfo"
      :key="i"
      v-show="this.currentWorkForm === i"
    >
      <div class="delete-div flex-row" :id="i">
        <div class="add-minus-div flex-row" @click="this.dropWorkExp">
          <i class="bi bi-trash3-fill"></i>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col flex-row">
          <label class="form-label lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.forms.addWorkForm.jobTitle
                    .lbl
                }}
              </span>
              <span>:</span>
            </div>
          </label>
        </div>
        <div class="col flex-row">
          <input
            type="text"
            class="input-contr form-control work-exper-input text-muted"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_5'
            )}_element`"
            id="we-job-title"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addWorkForm.jobTitle.holder
            "
            v-model="workform.jobTitle"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col flex-row p-0 m-0">
          <label class="form-label lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span>{{
                this.lng.lang.section2.getCvInfo.forms.addWorkForm.empName.lbl
              }}</span>
              <span>:</span>
            </div>
          </label>
        </div>
        <div class="col flex-row">
          <input
            type="text"
            class="input-contr form-control text-muted work-exper-input"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_5'
            )}_element`"
            id="employer-name"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addWorkForm.empName.holder
            "
            v-model="workform.employer"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col flex-row p-0 m-0">
          <label class="form-label lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span>{{
                this.lng.lang.section2.getCvInfo.forms.addWorkForm.address.lbl
              }}</span>
              <span>:</span>
            </div>
          </label>
        </div>
        <div class="col flex-row">
          <input
            type="text"
            class="input-contr form-control text-muted work-exper-input"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_5'
            )}_element`"
            id="we-address"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addWorkForm.address.holder
            "
            v-model="workform.address"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col flex-row">
          <label class="form-label lbl text-muted p-0 m-0">
            <div class="justify-double-dot">
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.forms.addWorkForm.date.lbl
                }}
              </span>
              <span>:</span>
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
                id="work-from-span"
                v-show="this.showFromSpan"
                @click="this.showHideFromToSpan"
                >{{
                  this.lng.lang.section2.getCvInfo.forms.addWorkForm.date.from
                }}</span
              >
              <div
                class="dropdown-selected-div from-to-m-y flex-row drop-down"
                :class="workform.workDate.from.month ? 'text-muted' : ''"
                @click="this.showHideMenue"
                id="work-from-month"
                v-show="!this.showFromSpan"
              >
                <span class="drop-down">{{
                  workform.workDate.from.month
                    ? workform.workDate.from.month
                    : "MM"
                }}</span>
                <i class="bi bi-chevron-down drop-down"></i>

                <div
                  class="drop-down-menu-div form-control text-muted p-0 m-0"
                  v-show="this.workExshowFromMonth"
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
                class="dropdown-selected-div from-to-m-y flex-row drop-down"
                :class="workform.workDate.from.year ? 'text-muted' : ''"
                @click="this.showHideMenue"
                id="work-from-year"
                v-show="!this.showFromSpan"
              >
                <span class="drop-down">{{
                  workform.workDate.from.year
                    ? workform.workDate.from.year
                    : "YY"
                }}</span>
                <i class="bi bi-chevron-down drop-down text-center"></i>
                <div
                  class="drop-down-menu-div form-control text-muted p-0 m-0"
                  v-show="this.workExshowFromYear"
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
                id="work-to-span"
                >{{
                  this.lng.lang.section2.getCvInfo.forms.addWorkForm.date.to
                }}</span
              >
              <div
                class="dropdown-selected-div from-to-m-y flex-row drop-down"
                :class="workform.workDate.to.month ? 'text-muted' : ''"
                @click="this.showHideMenue"
                id="work-to-month"
                v-show="!this.showToSpan"
              >
                <span class="drop-down">{{
                  workform.workDate.to.month ? workform.workDate.to.month : "MM"
                }}</span>
                <i class="bi bi-chevron-down drop-down"></i>

                <div
                  class="drop-down-menu-div form-control text-muted p-0 m-0"
                  v-show="this.workExshowToMonth"
                  @click="this.updateSelectedValue"
                >
                  <span
                    class="menu-item to-month"
                    v-for="month in this.months"
                    :key="month"
                    :data-toyear="month"
                    :data-tomonth="month"
                    >{{ month }}</span
                  >
                </div>
              </div>
              <span class="text-muted" v-show="!this.showToSpan">:</span>
              <div
                class="dropdown-selected-div from-to-m-y flex-row drop-down"
                :class="workform.workDate.to.year ? 'text-muted' : ''"
                @click="this.showHideMenue"
                id="work-to-year"
                v-show="!this.showToSpan"
              >
                <span class="drop-down">{{
                  workform.workDate.to.year ? workform.workDate.to.year : "YY"
                }}</span>
                <i class="bi bi-chevron-down drop-down"></i>
                <div
                  class="drop-down-menu-div form-control text-muted p-0 m-0"
                  v-show="this.workExshowToYear"
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
      <span>{{ this.currentWorkForm + 1 }}</span>
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
  props: [
    "allForms",
    "formInfo",
    "workExshowFromMonth",
    "workExshowToMonth",
    "workExshowFromYear",
    "workExshowToYear",
    "currentWorkForm",
    "lng",
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
      // currentWorkForm: 0,
    };
  },
  methods: {
    dropWorkExp(e) {
      this.$emit(
        "dropSingleWorkExp",
        Number(e.target.closest(".delete-div").id)
      );
    },
    showHideFromToSpan(e) {
      if (e.target.id === "work-from-span") {
        this.showFromSpan = false;
      } else {
        this.showToSpan = false;
      }
    },
    showHideMenue(e) {
      this.$emit("showWrokDateMenus", e);
    },
    updateSelectedValue(e) {
      if (e.target.classList.contains("from-month")) {
        this.formInfo[this.currentWorkForm].workDate.from.month =
          e.target.dataset.frommonth;
      } else if (e.target.classList.contains("from-year")) {
        this.formInfo[this.currentWorkForm].workDate.from.year =
          e.target.dataset.fromyear;
      } else if (e.target.classList.contains("to-month")) {
        this.formInfo[this.currentWorkForm].workDate.to.month =
          e.target.dataset.tomonth;
      } else if (e.target.classList.contains("to-year")) {
        this.formInfo[this.currentWorkForm].workDate.to.year =
          e.target.dataset.toyear;
      }
    },
    goLeft() {
      this.$emit("goLeft");
    },
    goRight() {
      this.$emit("goRight");
    },
  },
  mounted() {
    if (this.formInfo[this.currentWorkForm].workDate.to.month) {
      this.showToSpan = false;
    }
    if (this.formInfo[this.currentWorkForm].workDate.from.month) {
      this.showFromSpan = false;
    }
    for (let i = 1900; i <= 2024; i++) {
      this.years.push(i);
    }
  },
};
</script>

<style scoped>
.form-child-font {
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
  align-items: center;
  justify-content: space-between;
  width: 150px;
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

.group-input-div {
  width: 300px;
  justify-content: space-between;
}
.from-to-btn-my {
  font-size: 13px;
  width: 49%;
  height: 30px;
}
.from-to-span {
  width: 100%;
  height: 100%;
  justify-content: start;
  padding-left: 12.5px;
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
.from-to-m-y {
  height: 100%;
  width: 50%;
  justify-content: space-evenly;
  /* padding-left: 12.5px; */
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

.switch-work-exp-form {
  justify-content: space-evenly;
  width: 50%;
  font-size: 15px;
}
.left-right-icon {
  cursor: pointer;
}
.delete-div {
  width: 100%;
  position: relative;
  top: -10px;
}
.add-minus-div {
  /* height: 15px;
  width: 15px; */
  /* border-radius: 7.5px; */
  font-size: 17px;
  color: rgba(177, 38, 38, 0.6);
  cursor: pointer;
  /* background-color: rgba(177, 38, 38, 0.6); */
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
    width: 110px;
    font-size: 13px;
  }
  .input-contr {
    width: 230px;
  }

  .group-input-div {
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

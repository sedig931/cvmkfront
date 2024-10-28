<template>
  <div
    class="cv-container-div-18 flex-column"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-18-font'
    "
  >
    <div class="name-photo-section-div-18 flex-row">
      <div class="right-name-title-section-18 flex-row">
        <div class="right-body-section-18 flex-column">
          <div
            class="name-job-div-18 flex-column"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
          >
            <span
              class="element-body-txt-18 text-center"
              style="font-size: 23px"
            >
              {{
                this.resumeValues.fullName
                  ? this.resumeValues.fullName
                  : this.lng.lang.section2.getCvInfo.frame.fullName
              }}
            </span>
            <span
              class="element-body-txt-18 text-center"
              style="font-size: 18px"
            >
              {{
                this.resumeValues.jobTitle
                  ? this.resumeValues.jobTitle
                  : this.lng.lang.section2.getCvInfo.frame.jobTitle
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="sections-container-div-18 flex-row">
      <div class="left-sections-18 flex-column">
        <div class="left-section-18 flex-column">
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.education }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <div>
              <span>{{
                this.lng.lang.section2.getCvInfo.frame.degreeOf + " "
              }}</span>
              <span class="txt-bolder">
                {{
                  this.resumeValues.eduForm.eduDegree
                    ? this.resumeValues.eduForm.eduDegree
                    : this.lng.lang.section2.getCvInfo.frame.educationDegree
                }}
              </span>
              <span>{{
                " " +
                `${
                  this.resumeValues.eduForm.uniName
                    ? this.resumeValues.eduForm.uniName
                    : this.lng.lang.section2.getCvInfo.frame.universityName +
                      "."
                }`
              }}</span>
            </div>
            <div class="txt-bolder">
              <span>{{
                `${
                  this.resumeValues.eduForm.yearsStudy.from.month
                    ? this.resumeValues.eduForm.yearsStudy.from.month
                    : "mm"
                }` +
                " " +
                `${
                  this.resumeValues.eduForm.yearsStudy.from.year
                    ? this.resumeValues.eduForm.yearsStudy.from.year
                    : "yy"
                }` +
                " - " +
                `${
                  this.resumeValues.eduForm.yearsStudy.to.month
                    ? this.resumeValues.eduForm.yearsStudy.to.month
                    : "mm"
                }` +
                " " +
                `${
                  this.resumeValues.eduForm.yearsStudy.to.year
                    ? this.resumeValues.eduForm.yearsStudy.to.year
                    : "yy"
                }`
              }}</span>
            </div>
            <div v-if="this.resumeValues.eduForm.eduDiscreption">
              <p class="m-0 p-0">
                {{ this.resumeValues.eduForm.eduDiscreption }}
              </p>
            </div>
            <div v-if="this.resumeValues.eduForm.thesis">
              <p class="m-0 p-0">
                <span class="txt-bolder">{{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " : "
                }}</span>
                {{ this.resumeValues.eduForm.thesis }}
              </p>
            </div>
            <div v-if="this.resumeValues.coursesForm[0].courseTitle">
              <span class="txt-bolder">
                {{ this.lng.lang.section2.getCvInfo.frame.courses + " : " }}
              </span>
              <span
                v-for="(course, i) in this.resumeValues.coursesForm"
                :key="i"
              >
                {{
                  course.courseTitle +
                  " " +
                  this.lng.lang.section2.getCvInfo.frame.courseFrom +
                  " " +
                  course.institution +
                  `${
                    i + 1 === this.resumeValues.coursesForm.length
                      ? "."
                      : this.lng.lang.section2.getCvInfo.frame.comma + " "
                  }`
                }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="left-section-18 flex-column"
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks
              }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <a
              :href="this.resumeValues.webLinks.princ.webHref"
              class="anchors"
              >{{ this.resumeValues.webLinks.princ.webTitle }}</a
            >
            <a
              v-for="(link, i) in this.resumeValues.webLinks.childs"
              :key="i"
              :href="link.webHref"
              class="anchors"
              >{{ link.webTitle }}</a
            >
          </div>
        </div>
        <div class="left-section-18 flex-column">
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.languages }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <div>
              <span class="element-body-txt-18" style="font-size: 14px">
                {{
                  this.resumeValues.langsForm.princ.name
                    ? this.resumeValues.langsForm.princ.name
                    : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                }}
              </span>
              <span
                class="dots-span element-body-txt-18"
                style="font-size: 11px"
              >
                ---------
              </span>
              <span class="element-body-txt-18" style="font-size: 14px">
                {{
                  this.resumeValues.langsForm.princ.level
                    ? this.resumeValues.langsForm.princ.level
                    : this.lng.lang.section2.getCvInfo.frame.linguisticLevel
                }}
              </span>
            </div>
            <div
              v-for="(lang, i) in this.resumeValues.langsForm.childs"
              :key="i"
            >
              <span class="element-body-txt-18" style="font-size: 14px">
                {{ lang.name }}
              </span>
              <span
                class="dots-span element-body-txt-18"
                style="font-size: 11px"
              >
                ---------
              </span>
              <span class="element-body-txt-18" style="font-size: 14px">
                {{ lang.level }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <div class="right-sections-18 flex-column">
        <div class="right-section-18 flex-column">
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.details }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <p class="m-0 p-0">
              {{
                this.resumeValues.introParagraph
                  ? this.resumeValues.introParagraph
                  : this.lng.lang.section2.getCvInfo.frame.intro
              }}
            </p>
            <div
              class="general-info-div flex-row element-body-txt-18"
              style="font-size: 13px"
            >
              <div class="columns-grid-div">
                <span>{{
                  this.lng.lang.section2.getCvInfo.frame.nationality +
                  " : " +
                  `${
                    this.resumeValues.nationality
                      ? this.resumeValues.nationality
                      : this.lng.lang.section2.getCvInfo.frame.nationality
                  }`
                }}</span>
                <span>{{
                  this.lng.lang.section2.getCvInfo.frame.placeBirth +
                  " : " +
                  `${
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }`
                }}</span>
                <span>{{
                  this.lng.lang.section2.getCvInfo.frame.gender +
                  " : " +
                  `${
                    this.resumeValues.gender
                      ? this.resumeValues.gender
                      : this.lng.lang.section2.getCvInfo.frame.gender
                  }`
                }}</span>
                <span>{{
                  this.lng.lang.section2.getCvInfo.frame.birthDate +
                  " : " +
                  `${
                    this.resumeValues.dateOfBirth.day
                      ? String(this.resumeValues.dateOfBirth.day).padStart(2, 0)
                      : "dd"
                  }` +
                  "/" +
                  `${
                    this.resumeValues.dateOfBirth.month
                      ? String(this.resumeValues.dateOfBirth.month).padStart(
                          2,
                          0
                        )
                      : "mm"
                  }` +
                  "/" +
                  `${
                    this.resumeValues.dateOfBirth.year
                      ? String(this.resumeValues.dateOfBirth.year).padStart(
                          2,
                          0
                        )
                      : "yy"
                  }`
                }}</span>
                <span>{{
                  this.lng.lang.section2.getCvInfo.frame.materialStatus +
                  " : " +
                  `${
                    this.resumeValues.relationship
                      ? this.resumeValues.relationship
                      : this.lng.lang.section2.getCvInfo.frame.materialStatus
                  }`
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-section-18 flex-column">
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <div class="single-contact flex-row">
              <i class="bi bi-geo-alt-fill m-1"></i>
              <span class="phone-address">{{
                `${
                  this.resumeValues.address.country
                    ? this.resumeValues.address.country
                    : this.lng.lang.section2.getCvInfo.frame.country
                }` +
                "," +
                `${
                  this.resumeValues.address.city
                    ? this.resumeValues.address.city
                    : this.lng.lang.section2.getCvInfo.frame.city
                }`
              }}</span>
            </div>
            <div class="single-contact flex-row">
              <i class="bi bi-envelope-at-fill m-1"></i>
              <span class="phone-email">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div class="single-contact flex-row">
              <i class="bi bi-telephone-fill m-1"></i>
              <span class="phone-span">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="right-section-18 flex-column"
          v-if="this.resumeValues.workExpForm[0].jobTitle"
        >
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince
              }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-18"
                  style="font-size: 15px"
                ></i>
                <span
                  class="txt-bolder element-body-txt-18"
                  style="font-size: 15px"
                  >{{ work.jobTitle }} :</span
                >
                <div class="work-body-div ms-2 me-2 element-body-txt-18">
                  <div>
                    <span> {{ work.employer }}</span>
                  </div>
                  <div>
                    <span> {{ work.address }}</span>
                  </div>
                  <div>
                    <span v-if="work.workDate.from.month">{{
                      `
                    ${
                      work.workDate.from.month ? work.workDate.from.month : "mm"
                    }  ${
                        work.workDate.from.year
                          ? work.workDate.from.year
                          : "yyyy"
                      } - ${
                        work.workDate.to.month ? work.workDate.to.month : "mm"
                      } ${work.workDate.to.year ? work.workDate.to.year : "yy"}`
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-section-18 flex-column">
          <div class="section-title-div-18">
            <span
              class="section-title-18 element-body-txt-18"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.skills }}
            </span>
          </div>
          <div
            class="section-body-18 element-body-txt-18 flex-column"
            style="font-size: 14px"
          >
            <div class="skills-outer-div flex-row">
              <div class="skills-columns-grid-div">
                <div>
                  <span>- </span>
                  <span>
                    {{
                      this.resumeValues.skillsForm.princ.name
                        ? this.resumeValues.skillsForm.princ.name
                        : this.lng.lang.section2.getCvInfo.frame.addSkill
                    }}
                  </span>
                </div>
                <div
                  v-for="(skill, i) in this.resumeValues.skillsForm.childs"
                  :key="i"
                >
                  <span>- </span>
                  <span>
                    {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------LAST ONE------------------------------ -->
        <!-- ----------------------LAST ONE------------------------------ -->
        <!-- ----------------------LAST ONE------------------------------ -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resumeValues", "lng", "photoName"],
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-18")
        .getBoundingClientRect().height;

      let sectionsContainerHeights = document
        .querySelector(".sections-container-div-18")
        .getBoundingClientRect().height;
      let nameContainerHeight = document
        .querySelector(".name-photo-section-div-18")
        .getBoundingClientRect().height;

      let fontSizeHere = 15;

      while (
        sectionsContainerHeights + nameContainerHeight >
        cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-18").forEach((el) => {
          if (
            Number(
              el.style.fontSize.split("")[0] + el.style.fontSize.split("")[1]
            )
          ) {
            el.style.fontSize = `${
              Number(
                el.style.fontSize.split("")[0] + el.style.fontSize.split("")[1]
              ) - 1
            }px`;
          } else {
            if (Number(el.style.fontSize.split("")[0]) === 1) {
            } else {
              el.style.fontSize = `${
                Number(el.style.fontSize.split("")[0]) - 1
              }px`;
            }
          }
        });
        sectionsContainerHeights = document
          .querySelector(".sections-container-div-18")
          .getBoundingClientRect().height;
        nameContainerHeight = document
          .querySelector(".name-photo-section-div-18")
          .getBoundingClientRect().height;
      }
    },
  },
  mounted() {
    this.checkContainersSize();
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
.cv-container-div-18 {
  height: 100%;
  width: 100%;
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.cv-container-div-18-font {
  font-family: "Tauri";
}
.name-photo-section-div-18 {
  flex: 0.1;
  width: 100%;
}
.right-name-title-section-18 {
  height: 100%;
  border-bottom: 1.5px solid rgb(118, 118, 118);
}
.sections-container-div-18 {
  flex: 1;
  width: 80%;
  padding-bottom: 3px;
}
.left-sections-18 {
  flex: 1;
  height: 100%;
}
.left-section-18 {
  flex: 1;
  width: 100%;
  padding: 0px 10px 0px 10px;
}
.right-sections-18 {
  flex: 1;
  height: 100%;
}
.right-section-18 {
  flex: 1;
  width: 100%;
  padding: 0px 10px 0px 10px;
}
.section-title-div-18 {
  width: 100%;
  padding: 5px 0 5px 0;
}
.section-title-18 {
  display: block;
  width: 100%;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
}
.section-body-18 {
  width: 100%;
  height: 100%;
  padding: 3px 10px 3px 10px;
  justify-content: space-evenly;
  align-items: start;
  color: rgb(107, 107, 107);
  border-radius: 10px;
}
.general-info-div {
  border: 0.5px solid rgb(163, 163, 163);
  border-radius: 7px;
  padding: 3px;
  margin-top: 3px;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.skills-outer-div,
.links-outer-div {
  width: 100%;
}
.txt-bolder {
  font-weight: bold;
}
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3px;
  width: 100%;
}
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3px;
  width: 100%;
}
</style>

<template>
  <div class="window-container-div-6">
    <div
      class="cv-container-div-6 flex-column"
      style="border-radius: 0"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-6-font'
      "
    >
      <div
        class="section-div-6 name-job-title-section flex-column"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
        "
      >
        <span class="name-span-6 element-body-txt-6" style="font-size: 25px">
          {{
            this.resumeValues.fullName
              ? this.resumeValues.fullName
              : this.lng.lang.section2.getCvInfo.frame.fullName
          }}
        </span>
        <span
          class="job-title-span-6 element-body-txt-6"
          style="font-size: 20px"
        >
          {{
            this.resumeValues.jobTitle
              ? this.resumeValues.jobTitle
              : this.lng.lang.section2.getCvInfo.frame.jobTitle
          }}
        </span>
      </div>
      <div class="section-div-6 details-section flex-column">
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " : " }}
        </span>
        <div
          class="body-element-div flex-column element-body-txt-6"
          style="font-size: 14px"
        >
          <p class="m-0 p-0">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}
          </p>
          <div class="general-info-div flex-row m-1">
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
                    ? String(this.resumeValues.dateOfBirth.month).padStart(2, 0)
                    : "mm"
                }` +
                "/" +
                `${
                  this.resumeValues.dateOfBirth.year
                    ? String(this.resumeValues.dateOfBirth.year).padStart(2, 0)
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
      <div class="section-div-6 education-section flex-column">
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.education + " : "
          }}
        </span>
        <div
          class="body-element-div flex-column element-body-txt-6"
          style="font-size: 14px"
        >
          <div>
            <span
              >{{ this.lng.lang.section2.getCvInfo.frame.degreeOf + " " }}
            </span>
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
                  ? this.resumeValues.eduForm.uniName + "."
                  : this.lng.lang.section2.getCvInfo.frame.universityName + "."
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
              <span class="txt-bolder">
                {{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " : "
                }}</span
              >
              {{ this.resumeValues.eduForm.thesis }}
            </p>
          </div>
          <div v-if="this.resumeValues.coursesForm[0].courseTitle">
            <span class="txt-bolder">
              {{ this.lng.lang.section2.getCvInfo.frame.courses + " : " }}</span
            >
            <span v-for="(course, i) in this.resumeValues.coursesForm" :key="i">
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
      <div class="section-div-6 skills-section flex-column">
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " : " }}
        </span>
        <div
          class="body-element-div flex-column element-body-txt-6"
          style="font-size: 14px"
        >
          <div class="skills-outer-div flex-row">
            <div class="skills-columns-grid-div element-body-txt-6">
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
                <div>
                  <span>- </span>
                  <span>
                    {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section-div-6 exeperince-section flex-column"
        v-if="this.resumeValues.workExpForm[0].jobTitle"
      >
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince +
            " : "
          }}
        </span>
        <div class="body-element-div flex-column">
          <div class="workExp-outer-div flex-row">
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-6"
                  style="font-size: 15px"
                ></i>
                <span
                  class="txt-bolder element-body-txt-6"
                  style="font-size: 15px"
                  >{{ work.jobTitle }} :</span
                >
                <div
                  class="work-body-div ms-2 me-2 element-body-txt-6"
                  style="font-size: 14px"
                >
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
      </div>
      <div
        class="section-div-6 links-section flex-column"
        v-if="this.resumeValues.webLinks.princ.webTitle"
      >
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks }}
        </span>
        <div
          class="body-element-div flex-column element-body-txt-6"
          style="font-size: 14px"
        >
          <div class="links-outer-div flex-row">
            <div class="columns-grid-div">
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
        </div>
      </div>
      <div class="section-div-6 links-section flex-column">
        <span
          class="section-title-txt element-body-txt-6"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " : "
          }}
        </span>
        <div class="body-element-div flex-column">
          <div class="languages-outer-div flex-row">
            <div class="columns-grid-div">
              <div>
                <span class="element-body-txt-6" style="font-size: 14px">
                  {{
                    this.resumeValues.langsForm.princ.name
                      ? this.resumeValues.langsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                  }}
                </span>
                <span
                  class="dots-span element-body-txt-6"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-6" style="font-size: 14px">
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
                <span class="element-body-txt-6" style="font-size: 14px">
                  {{ lang.name }}
                </span>
                <span
                  class="dots-span element-body-txt-6"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-6" style="font-size: 14px">
                  {{ lang.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-6 contacts-section flex-column">
        <div
          class="contacts-body-element flex-row element-body-txt-6"
          style="font-size: 13px"
        >
          <div class="single-contact flex-row">
            <i class="bi bi-geo-alt-fill m-1"></i>
            <span class="phone-address">{{
              `${
                this.resumeValues.address.country
                  ? this.resumeValues.address.country
                  : "country"
              }` +
              "," +
              `${
                this.resumeValues.address.city
                  ? this.resumeValues.address.city
                  : "city"
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["corner", "resumeValues", "lng"],
  data() {
    return {};
  },
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-6")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".section-div-6");

      let sectionsHeightsArray = [];
      sectionsHeights.forEach((element) => {
        sectionsHeightsArray.push(element.getBoundingClientRect().height);
      });

      let sectionsHeightsSum = sectionsHeightsArray.reduce(
        (sum, el) => sum + el + 5,
        0
      );

      let fontSizeHere = 15;

      while (sectionsHeightsSum > cvContainerHeight) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-6").forEach((el) => {
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
              // console.log("enphe");
            } else {
              el.style.fontSize = `${
                Number(el.style.fontSize.split("")[0]) - 1
              }px`;
            }
          }
        });

        sectionsHeights = document.querySelectorAll(".section-div-6");
        sectionsHeightsArray = [];
        sectionsHeights.forEach((element) => {
          sectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        sectionsHeightsSum = sectionsHeightsArray.reduce(
          (sum, el) => sum + el + 5,
          0
        );
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    if (this.corner) {
      document.querySelector(".cv-container-div-6").style.borderRadius = "15px";
    }
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
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.window-container-div-6 {
  /* width: 100%; */
  height: 100%;
  width: 100%;
  /* height: 100vh; */
  /* height: 1122px; */
  /* padding: 5px; */
}
.cv-container-div-6 {
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  background-color: rgb(67, 67, 102);
  color: rgb(67, 67, 102);
}
.cv-container-div-6-font {
  font-family: "Tauri";
}
.section-div-6 {
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 12px;
  background-color: white;
}
.name-job-title-section {
  flex: 0.4;
  align-items: center;
  margin-top: 3px;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.body-element-div {
  width: 100%;
  height: 100%;
  padding: 0px 15px 0px 15px;
  align-items: start;
  justify-content: space-evenly;
}
.general-info-div,
.skills-outer-div,
.workExp-outer-div,
.links-outer-div,
.languages-outer-div {
  width: 100%;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
}
.skills-columns-grid-div,
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  row-gap: 3px;
}
.txt-bolder {
  font-weight: bold;
}
.work-body-div {
  align-items: start;
  padding: 0 20px 0 20px;
}
.links-section {
  flex: 0.5;
}
.contacts-section {
  flex: 0.2;
  background-color: rgb(67, 67, 102);
  padding: 0;
}
.contacts-body-element {
  width: 100%;
  justify-content: space-between;
}
.single-contact {
  width: 30%;
  background-color: white;
  color: rgb(67, 67, 102);
  border-radius: 15px;
}
</style>

<template>
  <div class="window-container-div-8">
    <div
      class="cv-container-div-8 flex-column"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-8-font'
      "
    >
      <div
        class="section-div-8 name-job-title-section flex-column"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
        "
      >
        <span class="name-span-8 element-body-txt-8" style="font-size: 23px">
          {{
            this.resumeValues.fullName
              ? this.resumeValues.fullName
              : this.lng.lang.section2.getCvInfo.frame.fullName
          }}&nbsp;
        </span>
        <span
          class="job-title-span-8 element-body-txt-8"
          style="font-size: 18px"
        >
          {{
            this.resumeValues.jobTitle
              ? this.resumeValues.jobTitle
              : this.lng.lang.section2.getCvInfo.frame.jobTitle
          }}&nbsp;
        </span>
      </div>
      <div class="section-div-8 details-section flex-column">
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.details }}&nbsp;
          </span>
        </div>
        <div
          class="body-element-div flex-column element-body-txt-8"
          style="font-size: 14px"
        >
          <p class="m-0 p-0">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}&nbsp;
          </p>
          <div class="general-info-div flex-row p-1">
            <div class="columns-grid-div">
              <span>
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.nationality + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.nationality
                      ? this.resumeValues.nationality
                      : this.lng.lang.section2.getCvInfo.frame.nationality
                  }`
                }}</span
              >
              <span>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.placeBirth + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }`
                }}&nbsp;</span
              >
              <span>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.gender + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.gender
                      ? this.resumeValues.gender
                      : this.lng.lang.section2.getCvInfo.frame.gender
                  }`
                }}</span
              >
              <span>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.birthDate + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
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
                }}</span
              >
              <span>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.materialStatus + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.relationship
                      ? this.resumeValues.relationship
                      : this.lng.lang.section2.getCvInfo.frame.materialStatus
                  }`
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-8 education-section flex-column">
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.education }}
          </span>
        </div>
        <div
          class="body-element-div flex-column element-body-txt-8"
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
              }}&nbsp;
            </span>
            <span
              >{{
                " " +
                `${
                  this.resumeValues.eduForm.uniName
                    ? this.resumeValues.eduForm.uniName + " "
                    : this.lng.lang.section2.getCvInfo.frame.universityName +
                      " "
                }`
              }}&nbsp;.</span
            >
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
              {{ this.resumeValues.eduForm.eduDiscreption }}&nbsp;
            </p>
          </div>
          <div v-if="this.resumeValues.eduForm.thesis">
            <p class="m-0 p-0">
              <span class="txt-bolder"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " "
                }}&nbsp;:&nbsp;</span
              >
              {{ this.resumeValues.eduForm.thesis }}&nbsp;
            </p>
          </div>
          <div v-if="this.resumeValues.coursesForm[0].courseTitle">
            <span class="txt-bolder">
              {{
                this.lng.lang.section2.getCvInfo.frame.courses + " "
              }}&nbsp;:&nbsp;
            </span>
            <span v-for="(course, i) in this.resumeValues.coursesForm" :key="i">
              {{
                course.courseTitle +
                " " +
                this.lng.lang.section2.getCvInfo.frame.courseFrom +
                " " +
                course.institution +
                " "
              }}&nbsp;.
            </span>
          </div>
        </div>
      </div>
      <div class="section-div-8 skills-section flex-column">
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.skills }}
          </span>
        </div>
        <div
          class="body-element-div flex-column element-body-txt-8"
          style="font-size: 14px"
        >
          <div class="skills-outer-div flex-row">
            <div class="skills-columns-grid-div element-body-txt-8">
              <div>
                <span>- </span>
                <span>
                  {{
                    this.resumeValues.skillsForm.princ.name
                      ? this.resumeValues.skillsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.addSkill
                  }}&nbsp;
                </span>
              </div>
              <div
                v-for="(skill, i) in this.resumeValues.skillsForm.childs"
                :key="i"
              >
                <span>- </span>
                <span> {{ skill.name }}&nbsp; </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section-div-8 exeperince-section flex-column"
        v-if="this.resumeValues.workExpForm[0].jobTitle"
      >
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince +
              " "
            }}&nbsp;
          </span>
        </div>
        <div class="body-element-div flex-column">
          <div class="workExp-outer-div flex-row">
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-8"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-8 txt-bolder element-body-txt-8"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div
                  class="work-body-div ms-2 me-2 element-body-txt-8"
                  style="font-size: 14px"
                >
                  <div>
                    <span> {{ work.employer }}&nbsp;</span>
                  </div>
                  <div>
                    <span> {{ work.address }}&nbsp;</span>
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
        class="section-div-8 links-section flex-column"
        v-if="this.resumeValues.webLinks.princ.webTitle"
      >
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks +
              " "
            }}&nbsp;
          </span>
        </div>
        <div
          class="body-element-div flex-column element-body-txt-8"
          style="font-size: 14px"
        >
          <div class="links-outer-div flex-row">
            <div class="columns-grid-div">
              <a
                :href="this.resumeValues.webLinks.princ.webHref"
                class="anchors"
                >{{ this.resumeValues.webLinks.princ.webTitle }}&nbsp;</a
              >
              <a
                v-for="(link, i) in this.resumeValues.webLinks.childs"
                :key="i"
                :href="link.webHref"
                class="anchors"
                >{{ link.webTitle }}&nbsp;</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-8 links-section flex-column">
        <div class="section-title-div flex-row">
          <span
            class="tranlate-me-8 element-body-txt-8"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.languages }}
          </span>
        </div>
        <div class="body-element-div flex-column">
          <div class="languages-outer-div flex-row">
            <div class="columns-grid-div">
              <div>
                <span class="element-body-txt-8" style="font-size: 14px">
                  {{
                    this.resumeValues.langsForm.princ.name
                      ? this.resumeValues.langsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                  }}&nbsp;
                </span>
                <span
                  class="dots-span element-body-txt-8"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-8" style="font-size: 14px">
                  {{
                    this.resumeValues.langsForm.princ.level
                      ? this.resumeValues.langsForm.princ.level
                      : this.lng.lang.section2.getCvInfo.frame.linguisticLevel
                  }}&nbsp;
                </span>
              </div>
              <div
                v-for="(lang, i) in this.resumeValues.langsForm.childs"
                :key="i"
              >
                <span class="element-body-txt-8" style="font-size: 14px">
                  {{ lang.name }}&nbsp;
                </span>
                <span
                  class="dots-span element-body-txt-8"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-8" style="font-size: 14px">
                  {{ lang.level }}&nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-8 contacts-section flex-column">
        <div
          class="contacts-body-element flex-row element-body-txt-8"
          style="font-size: 16px"
        >
          <div class="single-contact flex-row">
            <i class="bi bi-geo-alt-fill me-1 ms-1"></i>
            <span class="tranlate-me-8">
              <span
                >{{
                  `${
                    this.resumeValues.address.country
                      ? this.resumeValues.address.country
                      : this.lng.lang.section2.getCvInfo.frame.country
                  }` + " - "
                }}&nbsp;
              </span>
              {{
                `${
                  this.resumeValues.address.city
                    ? this.resumeValues.address.city
                    : this.lng.lang.section2.getCvInfo.frame.city
                }`
              }}&nbsp;</span
            >
          </div>
          <div class="single-contact flex-row">
            <i class="bi bi-envelope-at-fill me-1 ms-1"></i>
            <span class="tranlate-me-8">{{
              this.resumeValues.email
                ? this.resumeValues.email
                : "email@mail.com"
            }}</span>
          </div>
          <div class="single-contact flex-row">
            <i class="bi bi-telephone-fill me-1 ms-1"></i>
            <span class="tranlate-me-8">{{
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
  props: ["corner", "resumeValues", "lng", "justPrint"],
  data() {
    return {};
  },
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-8")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".section-div-8");

      let sectionsHeightsArray = [];
      sectionsHeights.forEach((element) => {
        sectionsHeightsArray.push(element.getBoundingClientRect().height);
      });

      let sectionsHeightsSum = sectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );
      let fontSizeHere = 15;
      while (sectionsHeightsSum > cvContainerHeight) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-8").forEach((el) => {
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

        sectionsHeights = document.querySelectorAll(".section-div-8");
        sectionsHeightsArray = [];
        sectionsHeights.forEach((element) => {
          sectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        sectionsHeightsSum = sectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-8");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-8-translate");
      });
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
.window-container-div-8 {
  width: 100%;
  height: 100%;
  /* height: 1122px; */
  /* padding: 5px; */
}
.cv-container-div-8 {
  height: 100%;
  width: 100%;
  padding: 5px 5px 5px 5px;
  color: rgb(67, 67, 102);
}
.cv-container-div-8-font {
  font-family: "Tauri";
}
.section-div-8 {
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  padding: 0px 10px 0px 10px;
  justify-content: space-evenly;
}
.name-job-title-section {
  flex: 0.4;
  align-items: center;
}

.section-title-div {
  width: 100%;
  background-image: var(--gradient-primary-blue);
  color: white;
  border-radius: 10px;
}
.section-title-txt-8-translate {
  transform: translateY(-3px);
}

.name-job-title-font {
  font-family: "Tilt Warp";
}
.body-element-div {
  width: 100%;
  height: 100%;
  padding: 2.5px 5px 0px 5px;
  /* margin: 2.5px 0px 0px 0px; */
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
  padding-left: 10px;
  padding-right: 10px;
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
  flex: 0;
  padding: 0px 10px 0px 10px;
  width: 100%;
}
.contacts-body-element {
  width: 100%;
  justify-content: space-evenly;
  /* margin-bottom: 2.5px; */
  /* padding-bottom: 2.5px; */
  background-image: var(--gradient-primary-blue);
  border-radius: 10px;
  color: white;
}
.markerd {
  background-color: rgb(67, 67, 102);
  color: white;
  opacity: 0.8;
  padding: 0 5px 0 5px;
  transform: scale(1.07, 1.05) skewX(-15deg);
}
</style>

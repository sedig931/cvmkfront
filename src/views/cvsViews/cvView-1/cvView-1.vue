<template>
  <div
    class="cv-container-div-1 flex-column"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-1-font'
    "
  >
    <div class="section-div-1 flex-row">
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'top-left-corner-arabic'
                : 'top-left-corner title-section-name-font'
              : this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span
            >{{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.details
            }}&nbsp;</span
          >
        </div>
        <div class="body-section-div-1 flex-column">
          <div
            class="contacts-div-1 flex-row body-element-txt-1"
            style="font-size: 13px"
          >
            <div class="single-contact-div flex-row">
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-1">
                <span>
                  {{
                    this.resumeValues.address.city
                      ? this.resumeValues.address.city + " - "
                      : this.lng.lang.section2.getCvInfo.frame.city + " - "
                  }}
                </span>
                {{
                  this.resumeValues.address.country
                    ? this.resumeValues.address.country
                    : this.lng.lang.section2.getCvInfo.frame.country
                }}
                &nbsp;
              </span>
            </div>
            <div class="single-contact-div">
              <i class="bi bi-telephone-fill ms-1 me-1"></i>
              <span class="tranlate-me-1">
                {{
                  this.resumeValues.phone
                    ? this.resumeValues.phone
                    : "0123456789"
                }}
              </span>
            </div>
            <div class="single-contact-div">
              <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
              <span class="tranlate-me-1">
                {{
                  this.resumeValues.email
                    ? this.resumeValues.email
                    : "email@email.com"
                }}
              </span>
            </div>
          </div>
          <div
            class="name-jobtitle-div flex-column"
            :class="
              this.lng.name === 'arabic'
                ? 'arabic-font'
                : 'title-section-name-font'
            "
          >
            <span class="body-element-txt-1" style="font-size: 20px"
              >{{
                this.resumeValues.fullName
                  ? this.resumeValues.fullName
                  : this.lng.lang.section2.getCvInfo.frame.fullName
              }}&nbsp;
            </span>
            <span class="body-element-txt-1" style="font-size: 18px"
              >{{
                this.resumeValues.jobTitle
                  ? this.resumeValues.jobTitle
                  : this.lng.lang.section2.getCvInfo.frame.jobTitle
              }}&nbsp;</span
            >
          </div>
          <div class="intro-div body-element-txt-1" style="font-size: 14px">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}&nbsp;
          </div>
          <div class="general-info-div flex-row m-1">
            <div
              class="columns-grid-div body-element-txt-1"
              style="font-size: 14px"
            >
              <span>
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.nationality + " "
                  }}
                  &nbsp;:
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
                  }}&nbsp;:
                </span>
                {{
                  `${
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth + " "
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }`
                }}&nbsp;</span
              >
              <span>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.gender + " "
                  }}&nbsp;:
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
                  }}&nbsp;:
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
                  }}&nbsp;:
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
    </div>
    <div class="section-div-1 flex-row">
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span>{{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.education
          }}</span>
        </div>
        <div
          class="body-section-div-1 flex-column body-element-txt-1"
          style="font-size: 14px"
        >
          <div>
            <span
              >{{ this.lng.lang.section2.getCvInfo.frame.degreeOf + " " }}
            </span>
            <span class="txt-bolder">
              {{
                `${
                  this.resumeValues.eduForm.eduDegree
                    ? this.resumeValues.eduForm.eduDegree
                    : this.lng.lang.section2.getCvInfo.frame.educationDegree
                }`
              }}&nbsp;
            </span>
            <span
              >{{
                " " +
                `${
                  this.resumeValues.eduForm.uniName
                    ? this.resumeValues.eduForm.uniName
                    : this.lng.lang.section2.getCvInfo.frame.universityName
                }`
              }}&nbsp;</span
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
                }}&nbsp;:
              </span>
              <span> {{ this.resumeValues.eduForm.thesis }}&nbsp; </span>
            </p>
          </div>
          <div v-if="this.resumeValues.coursesForm[0].courseTitle">
            <span class="txt-bolder">
              {{ this.lng.lang.section2.getCvInfo.frame.courses + " " }}
              &nbsp;:</span
            >
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
    </div>
    <div class="section-div-1 flex-row">
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span>{{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.skills
          }}</span>
        </div>
        <div
          class="body-section-div-1 flex-column body-element-txt-1"
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
    </div>
    <div
      class="section-div-1 flex-row"
      v-if="this.resumeValues.workExpForm[0].jobTitle"
    >
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span
            >{{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince
            }}&nbsp;</span
          >
        </div>
        <div class="body-section-div-1 flex-column">
          <div class="workExp-outer-div flex-row">
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 body-element-txt-1"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-1 txt-bolder body-element-txt-1"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div
                  class="work-body-div ms-2 me-2 body-element-txt-1"
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
    </div>
    <div
      class="section-div-1 links-section-1 flex-row"
      v-if="this.resumeValues.webLinks.princ.webTitle"
    >
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span
            >{{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks
            }}&nbsp;</span
          >
        </div>
        <div
          class="body-section-div-1 flex-column body-element-txt-1"
          style="font-size: 14px"
        >
          <div class="links-outer-div flex-row">
            <div class="links-grid-div">
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
    </div>
    <div class="section-div-1 languages-section-1 flex-row">
      <div class="inner-section-div-1 flex-row">
        <div
          class="title-section-div-1 flex-column body-element-txt-1"
          :class="
            this.corner === true
              ? this.lng.name === 'arabic'
                ? 'bottom-left-corner-arabic'
                : 'bottom-left-corner title-section-name-font'
              : this.lng.name === 'arabic'
              ? ''
              : 'title-section-name-font'
          "
          style="font-size: 16px"
        >
          <span>{{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.languages
          }}</span>
        </div>
        <div
          class="body-section-div-1 bottom-right-corner languages-body-element-section-div flex-column body-element-txt-1"
          style="font-size: 14px"
        >
          <div class="languages-outer-div flex-row">
            <div class="languages-columns-grid-div">
              <div>
                <span>
                  {{
                    this.resumeValues.langsForm.princ.name
                      ? this.resumeValues.langsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                  }}&nbsp;
                </span>
                <span class="dots-span">_______</span>
                <span>
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
                <span> {{ lang.name }}&nbsp; </span>
                <span class="dots-span">_______</span>
                <span> {{ lang.level }}&nbsp; </span>
              </div>
            </div>
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
        .querySelector(".cv-container-div-1")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".section-div-1");

      let sectionsHeightsArray = [];
      sectionsHeights.forEach((element) => {
        sectionsHeightsArray.push(element.getBoundingClientRect().height);
      });

      let sectionsHeightsSum = sectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );
      sectionsHeightsSum = sectionsHeightsSum;
      let fontSizeHere = 15;
      while (sectionsHeightsSum > cvContainerHeight) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".body-element-txt-1").forEach((el) => {
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

        sectionsHeights = document.querySelectorAll(".section-div-1");
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
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-1");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-1-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-1-translate {
  transform: translateY(-3px);
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arabic-font {
  font-family: "Zain";
}
.cv-container-div-1 {
  height: 100%;
  width: 100%;
}
.cv-container-div-1-font {
  font-family: "Roboto";
  /* font-family: "Tauri"; */
}
.section-div-1 {
  flex: 1;
  width: 100%;
}
.inner-section-div-1 {
  flex: 1;
  height: 100%;
}
.title-section-div-1 {
  flex: 0.3;
  height: 100%;
  /* ----------------------------- */
  /* min-width: 100px; */
  /* ----------------------------- */
  background-color: rgba(182, 17, 17, 0.7);
  justify-content: start;
  align-items: start;
  padding: 5px 15.5px 5px 10px;
  color: white;
  /* font-family: "Tilt Warp"; */
}

.body-section-div-1 {
  flex: 1;
  height: 100%;
  align-items: start;
  justify-content: space-evenly;
  margin: 5px 10px 5px 10px;
  border-bottom: 0.5px solid rgb(210, 210, 210);
}
.contacts-div-1 {
  width: 100%;
  justify-content: start;
}
.single-contact-div {
  padding: 2px 3px 2px 3px;
}
.name-jobtitle-div {
  width: 100%;
  align-items: start;
  /* font-family: "Tilt Warp"; */
}
.title-section-name-font {
  font-family: "Tilt Warp";
}
.general-info-div {
  width: 100%;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
}
.skills-outer-div,
.workExp-outer-div,
.links-outer-div,
.languages-outer-div {
  width: 100%;
}
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  row-gap: 3px;
}
.languages-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.workExep-columns-div,
.links-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.links-section-1 {
  flex: 0.5;
}
.languages-section-1 {
  flex: 0.5;
}
.languages-body-element-section-div {
  border-bottom: none;
}
.dots-span {
  color: rgb(210, 210, 210);
}
.txt-bolder {
  font-weight: bold;
}

.top-left-corner {
  border-radius: 15px 0 0 0;
}
.top-left-corner-arabic {
  border-radius: 0px 15px 0 0;
}
.bottom-left-corner {
  border-radius: 0 0 0 15px;
}
.bottom-left-corner-arabic {
  border-radius: 0 0 15px 0;
}
</style>

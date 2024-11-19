<template>
  <div
    class="cv-container-div-13"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-dic-13-font'
    "
  >
    <div class="cv-container-div-inner-13 flex-row">
      <div class="left-sections-container-div flex-column">
        <div
          class="left-section-13 name-contacts-container-div flex-column"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
        >
          <div
            class="name-div element-body-txt-13 text-center"
            style="font-size: 23px"
          >
            <span
              >{{
                this.resumeValues.fullName
                  ? this.resumeValues.fullName
                  : this.lng.lang.section2.getCvInfo.frame.fullName
              }}&nbsp;</span
            >
          </div>
          <div
            class="job-title-div element-body-txt-13"
            style="font-size: 20px"
          >
            <span
              >{{
                this.resumeValues.jobTitle
                  ? this.resumeValues.jobTitle
                  : this.lng.lang.section2.getCvInfo.frame.jobTitle
              }}&nbsp;</span
            >
          </div>
        </div>
        <div class="left-section-13 details-section flex-column">
          <span
            class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
            }}&nbsp;:&nbsp;</span
          >
          <div
            class="body-element-div-13 flex-column element-body-txt-13"
            style="font-size: 14px"
          >
            <p class="m-0 p-0">
              {{
                this.resumeValues.introParagraph
                  ? this.resumeValues.introParagraph
                  : this.lng.lang.section2.getCvInfo.frame.intro
              }}&nbsp;
            </p>
            <div class="general-info-div flex-row m-1">
              <div class="columns-grid-div">
                <span>
                  <span>
                    {{
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
                        ? String(this.resumeValues.dateOfBirth.day).padStart(
                            2,
                            0
                          )
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
                      this.lng.lang.section2.getCvInfo.frame.materialStatus +
                      " "
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
        <div class="left-section-13 edu-section flex-column">
          <span
            class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.education + " "
            }}&nbsp;:&nbsp;
          </span>
          <div
            class="body-element-div-13 flex-column element-body-txt-13"
            style="font-size: 14px"
          >
            <div class="degree-college-name-div">
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
            <div class="years-study-div txt-bolder">
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
            <div
              class="edu-discription-div"
              v-if="this.resumeValues.eduForm.eduDiscreption"
            >
              <p class="m-0 p-0">
                {{ this.resumeValues.eduForm.eduDiscreption }}&nbsp;
              </p>
            </div>
            <div
              class="thesis-topic-div"
              v-if="this.resumeValues.eduForm.thesis"
            >
              <p class="m-0 p-0">
                <span class="txt-bolder"
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.thesisTopic + " "
                  }}&nbsp;:&nbsp;</span
                >
                {{ this.resumeValues.eduForm.thesis }}&nbsp;
              </p>
            </div>
            <div
              class="courses-div"
              v-if="this.resumeValues.coursesForm[0].courseTitle"
            >
              <span class="txt-bolder">
                {{
                  this.lng.lang.section2.getCvInfo.frame.courses + " "
                }}&nbsp;:&nbsp;
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
                  " "
                }}&nbsp;.
              </span>
            </div>
          </div>
        </div>
        <div class="left-section-13 skills-section flex-column">
          <span
            class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
            }}&nbsp;:&nbsp;
          </span>
          <div class="body-element-div-13 flex-column">
            <div
              class="skills-div flex-row element-body-txt-13"
              style="font-size: 13px"
            >
              <div class="skills-columns-grid-div element-body-txt-9">
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
    </div>

    <div
      class="right-container-div flex-column"
      :class="this.lng.name === 'arabic' ? 'right-container-div-arabic' : ''"
    >
      <div class="right-section-13 contacts-section flex-column">
        <div
          class="body-element-div-13 flex-column element-body-txt-13 body-element-div-13-right"
          style="font-size: 14px"
        >
          <div>
            <div>
              <i class="bi bi-geo-alt-fill m-1"></i>
              <span class="tranlate-me-13">
                <span>
                  {{
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
            <div>
              <i class="bi bi-envelope-at-fill m-1"></i>
              <span class="tranlate-me-13">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div>
              <i class="bi bi-telephone-fill m-1"></i>
              <span class="tranlate-me-13">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right-section-13 exeperince-section flex-column"
        v-if="this.resumeValues.workExpForm[0].jobTitle"
      >
        <span
          class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince +
            " "
          }}&nbsp;:&nbsp;
        </span>
        <div
          class="body-element-div-13 workEpx-div flex-column body-element-div-13-right"
        >
          <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
            <i
              class="bi bi-briefcase-fill me-1 ms-1 element-body-txt-13"
              style="font-size: 15px"
            ></i>
            <span
              class="tranlate-me-13 title-txt element-body-txt-13"
              style="font-size: 15px"
              >{{ work.jobTitle }}&nbsp;</span
            >
            <div
              class="work-body-div flex-column element-body-txt-13"
              style="font-size: 14px"
            >
              <div class="work-name-div">
                <span> {{ work.employer }}&nbsp;</span>
              </div>
              <div>
                <span>{{ work.address }}&nbsp;</span>
              </div>
              <div>
                <span v-if="work.workDate.from.month">{{
                  `
                    ${
                      work.workDate.from.month ? work.workDate.from.month : "mm"
                    }  ${
                    work.workDate.from.year ? work.workDate.from.year : "yyyy"
                  } - ${
                    work.workDate.to.month ? work.workDate.to.month : "mm"
                  } ${work.workDate.to.year ? work.workDate.to.year : "yy"}`
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right-section-13 links-section flex-column"
        v-if="this.resumeValues.webLinks.princ.webTitle"
      >
        <span
          class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks + " "
          }}&nbsp;:&nbsp;
        </span>
        <div
          class="body-element-div-13 links-body-element-13 element-body-txt-13 flex-column body-element-div-13-right"
          style="font-size: 13px"
        >
          <a :href="this.resumeValues.webLinks.princ.webHref" class="anchors"
            >{{ this.resumeValues.webLinks.princ.webTitle }}&nbsp;</a
          >

          <a
            v-for="(link, i) in this.resumeValues.webLinks.childs"
            :key="i"
            :href="link.webHref"
            class="anchors mt-1"
            >{{ link.webTitle }}&nbsp;</a
          >
        </div>
      </div>
      <div class="right-section-13 languages-section flex-column">
        <span
          class="section-title-txt element-body-txt-13 my-padding-10 mb-1"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " "
          }}&nbsp;:&nbsp;
        </span>
        <div
          class="body-element-div-13 element-body-txt-13 flex-column body-element-div-13-right"
          style="font-size: 13px"
        >
          <div>
            <div>
              <span>
                {{
                  this.resumeValues.langsForm.princ.name
                    ? this.resumeValues.langsForm.princ.name
                    : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                }}&nbsp;
              </span>
              <span
                class="dots-span body-element-div-13-right"
                style="font-size: 11px"
              >
                ___
              </span>
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
              <span
                class="dots-span body-element-div-13-right"
                style="font-size: 11px"
              >
                ___
              </span>
              <span> {{ lang.level }}&nbsp; </span>
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
        .querySelector(".cv-container-div-inner-13")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".left-section-13");
      let rightSectionsHeights = document.querySelectorAll(".right-section-13");

      let leftSectionsHeightsArray = [];
      leftSectionsHeights.forEach((element) => {
        leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let rightSectionsHeightsArray = [];
      rightSectionsHeights.forEach((element) => {
        rightSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });

      let leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );
      let rightSectionsHeightsSum = rightSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let fontSizeHere = 15;

      while (
        leftSectionsHeightsSum - 2 > cvContainerHeight ||
        rightSectionsHeightsSum - 2 > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-13").forEach((el) => {
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
        leftSectionsHeights = document.querySelectorAll(".left-section-13");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
        rightSectionsHeights = document.querySelectorAll(".right-section-13");
        rightSectionsHeightsArray = [];
        rightSectionsHeights.forEach((element) => {
          rightSectionsHeightsArray.push(
            element.getBoundingClientRect().height
          );
        });
        rightSectionsHeightsSum = rightSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
      }
    },
    setLastSectionBorderNone() {
      const leftSections = document.querySelectorAll(".left-section-13");
      const rightSections = document.querySelectorAll(".right-section-13");
      leftSections[leftSections.length - 1].classList.add("last-section");
      rightSections[rightSections.length - 1].classList.add("last-section");
    },
  },
  mounted() {
    this.setLastSectionBorderNone();
    this.checkContainersSize();
    if (this.corner) {
      document.querySelector(".cv-container-div-13").style.borderRadius =
        "15px";
    }
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-13");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-13-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-13-translate {
  transform: translateY(-3px);
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
.cv-container-div-13 {
  display: flex;
  /* height: 100vh; */
  /* height: 1122px; */
  height: 100%;
  width: 100%;

  /* padding: 5px; */
  /* background-color: #b18200; */
  background-image: var(--gradient-primary-frame13);
}
.cv-container-div-13-font {
  font-family: "Tauri";
}
.cv-container-div-inner-13 {
  flex: 1;
  height: 100%;
  width: 100%;
}

.name-job-title-font {
  font-family: "Tilt Warp";
}

.right-container-div {
  flex: 0.55;
  height: 100%;
  color: white;

  border-left: 2px solid white;
}
.right-container-div-arabic {
  border-right: 2px solid white;
  border-left: none;
}
.left-sections-container-div {
  flex: 1;
  height: 100%;
  color: white;
}
.left-section-13,
.right-section-13 {
  height: 100%;
  width: 100%;
  align-items: start;
  padding: 5px 0px 5px 0px;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.name-contacts-container-div {
  flex: 0.2;
  width: 100%;
  color: white;
  align-items: center;
}
.my-padding-10 {
  padding: 0 10px 0 10px;
}
.my-padding-20 {
  padding: 0 20px 0 20px;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
}
.body-element-div-13 {
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
  padding: 0 20px 0 20px;
}
.links-body-element-13 {
  justify-content: center;
}
.txt-bolder {
  font-weight: bold;
}
.dots-span {
  color: rgb(204, 204, 204);
}
.last-section {
  border-bottom: none;
}

/* -----------------------------------------DETAILS SECTION------------------------------------------------- */
.details-section {
  border-radius: 0 15px 0 0;
}
.general-info-div {
  width: 100%;
}
/* -----------------------------------------SKILLS SECTION------------------------------------------------- */
.skills-div {
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
}
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  width: 90%;
}
/* -----------------------------------------EEPERINSE SECTION------------------------------------------------- */
.work-body-div {
  align-items: start;
  /* padding: 0 20px 0 20px; */
}
/* -----------------------------------------LINKS SECTION------------------------------------------------- */
.anchors {
  color: white;
}

.white-space-outer-div {
  flex: 0.05;
  display: flex;
  align-items: end;
  height: 100%;
  background-color: rgb(22, 128, 128);
}
.white-space-div {
  height: 94%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 15px 0 0 0;
}
.work-name-div {
  width: 100%;
}
</style>

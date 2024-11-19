<template>
  <div class="window-container-div flex-row">
    <div
      class="cv-container-div-4 flex-column"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-4-font'
      "
    >
      <div
        class="name-job-contacts-div flex-row"
        :class="this.corner ? 'name-job-contacts-div-corner' : ''"
      >
        <div class="name-section-div name-job-contacts-section flex-column">
          <div
            class="name-div element-body-txt-4"
            style="font-size: 20px"
            :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
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
            class="job-title-div element-body-txt-4"
            style="font-size: 19px"
            :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
          >
            <span
              >{{
                this.resumeValues.jobTitle
                  ? this.resumeValues.jobTitle
                  : this.lng.lang.section2.getCvInfo.frame.jobTitle
              }}&nbsp;</span
            >
          </div>
          <div
            class="contacts-div flex-row element-body-txt-4"
            style="font-size: 14px"
          >
            <div>
              <i class="bi bi-telephone-fill ms-1 me-1"></i>
              <span class="tranlate-me-4">{{
                this.resumeValues.phone ? this.resumeValues.phone : "012345679"
              }}</span>
            </div>
            <div>
              <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
              <span class="tranlate-me-4">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div>
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-4">
                <span>
                  {{
                    `${
                      this.resumeValues.address.city
                        ? this.resumeValues.address.city
                        : this.lng.lang.section2.getCvInfo.frame.city
                    }` + " - "
                  }}&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.address.country
                      ? this.resumeValues.address.country
                      : this.lng.lang.section2.getCvInfo.frame.country
                  }`
                }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="left-right-container-div flex-row">
        <div
          class="left-div flex-column"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'arabic-font left-corner-arabic'
                : 'left-corner'
              : this.lng.name === 'arabic'
              ? 'arabic-font'
              : ''
          "
        >
          <div class="left-section-div about-section flex-column">
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
                }}&nbsp;:&nbsp;
              </span>
            </div>
            <div
              class="single-body-element-div skills-txt-div element-body-txt-4"
              style="font-size: 13px"
            >
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
          <div
            class="left-section-div about-section flex-column"
            v-if="this.resumeValues.workExpForm[0].jobTitle"
          >
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span>
                {{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle
                    .workExeperince + " "
                }}&nbsp;:&nbsp;
              </span>
            </div>
            <div class="single-body-element-div flex-column">
              <div
                class="workEpx-div"
                v-for="(work, i) in this.resumeValues.workExpForm"
                :key="i"
              >
                <i
                  class="bi bi-briefcase-fill me-1 ms-1 element-body-txt-4"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-4 title-txt element-body-txt-4"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div
                  class="work-body-div left-padding flex-column element-body-txt-4"
                  style="font-size: 14px"
                >
                  <span> {{ work.employer }}&nbsp;</span>
                  <span> {{ work.address }}&nbsp;</span>
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
          <div
            class="left-section-div about-section flex-column"
            v-if="this.resumeValues.webLinks.princ.webTitle"
          >
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle
                    .websiteLinks + " "
                }}&nbsp;:&nbsp;
              </span>
            </div>
            <div
              class="single-body-element-div web-links-div element-body-txt-4 flex-column"
              style="font-size: 14px"
            >
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
        <div
          class="right-div flex-column"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'arabic-font right-div-me right-corner-arabic'
                : 'right-div-ms right-corner'
              : this.lng.name === 'arabic'
              ? 'arabic-font right-div-me'
              : 'right-div-ms'
          "
        >
          <!-- style="border-radius: 15px 15px 0 0" -->
          <div class="right-section-div about-section flex-column">
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.details +
                  " "
                }}&nbsp;:&nbsp;
              </span>
            </div>
            <div
              class="single-body-element-div about-txt-div element-body-txt-4"
              style="font-size: 14px"
            >
              <p class="p-0 m-0">
                {{
                  `${
                    this.resumeValues.introParagraph
                      ? this.resumeValues.introParagraph
                      : this.lng.lang.section2.getCvInfo.frame.intro
                  }`
                }}&nbsp;
              </p>
            </div>
            <div
              class="single-body-element-div general-info-div columns-grid-div element-body-txt-4"
              style="font-size: 14px"
            >
              <div class="my-padding">
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.nationality + " - "
                  }}&nbsp;</span
                >
                <span
                  >{{
                    this.resumeValues.nationality
                      ? this.resumeValues.nationality
                      : this.lng.lang.section2.getCvInfo.frame.nationality
                  }}&nbsp;</span
                >
              </div>
              <div class="my-padding">
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.placeBirth + " - "
                  }}&nbsp;
                </span>
                <span
                  >{{
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }}&nbsp;</span
                >
              </div>
              <div class="my-padding">
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.gender + " - "
                  }}&nbsp;</span
                >
                <span
                  >{{
                    this.resumeValues.gender
                      ? this.resumeValues.gender
                      : this.lng.lang.section2.getCvInfo.frame.gender
                  }}&nbsp;</span
                >
              </div>
              <div class="my-padding">
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.birthDate + " - "
                  }}&nbsp;</span
                >
                <span
                  >{{
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
                  }}&nbsp;</span
                >
              </div>
              <div class="my-padding">
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.materialStatus +
                    " - "
                  }}&nbsp;</span
                >
                <span
                  >{{
                    this.resumeValues.relationship
                      ? this.resumeValues.relationship
                      : this.lng.lang.section2.getCvInfo.frame.materialStatus
                  }}&nbsp;</span
                >
              </div>
            </div>
          </div>
          <div class="right-section-div flex-column">
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span>
                {{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.education +
                  " "
                }}&nbsp;:&nbsp;</span
              >
            </div>
            <div
              class="single-body-element-div degree-of-div element-body-txt-4"
              style="font-size: 14px"
            >
              <span>{{
                this.lng.lang.section2.getCvInfo.frame.degreeOf + " "
              }}</span>
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
                      ? this.resumeValues.eduForm.uniName + " "
                      : this.lng.lang.section2.getCvInfo.frame.universityName +
                        " "
                  }`
                }}&nbsp;.</span
              >
            </div>
            <div
              class="single-body-element-div yars-study-div element-body-txt-4"
              style="font-size: 14px"
            >
              <span>
                {{
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
                }}
              </span>
            </div>
            <div
              class="single-body-element-div edu-disc-div element-body-txt-4"
              style="font-size: 14px"
              v-if="this.resumeValues.eduForm.eduDiscreption"
            >
              <p class="p-0 m-0">
                {{ this.resumeValues.eduForm.eduDiscreption }}&nbsp;
              </p>
            </div>

            <div
              class="single-body-element-div thesis-topic-div element-body-txt-4"
              style="font-size: 14px"
              v-if="this.resumeValues.eduForm.thesis"
            >
              <span class="txt-bolder"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " "
                }}&nbsp;:&nbsp;</span
              >
              <span>{{ " " + this.resumeValues.eduForm.thesis }}&nbsp;</span>
            </div>
            <div
              class="single-body-element-div courses-div element-body-txt-4"
              style="font-size: 14px"
              v-if="this.resumeValues.coursesForm[0].courseTitle"
            >
              <span class="txt-bolder"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.courses + " "
                }}&nbsp;:&nbsp;</span
              >
              <span
                v-for="(course, i) in this.resumeValues.coursesForm"
                :key="i"
                >{{
                  " " +
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
          <div class="right-section-div languages-section flex-column">
            <div
              class="section-title-div flex-row element-body-txt-4"
              :class="this.lng.name !== 'arabic' ? 'name-section-job-font' : ''"
              style="font-size: 16px"
            >
              <span>
                {{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.languages +
                  " "
                }}&nbsp;:&nbsp;
              </span>
            </div>
            <div
              class="single-body-element-div languades-div columns-grid-div element-body-txt-4"
              style="font-size: 14px"
            >
              <span class="my-padding">
                <span>
                  {{
                    `${
                      this.resumeValues.langsForm.princ.name
                        ? this.resumeValues.langsForm.princ.name
                        : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                    }` + " "
                  }}&nbsp;:&nbsp;
                </span>
                {{
                  `${
                    this.resumeValues.langsForm.princ.level
                      ? this.resumeValues.langsForm.princ.level
                      : this.lng.lang.section2.getCvInfo.frame.linguisticLevel
                  }`
                }}&nbsp;
              </span>
              <span
                class="my-padding"
                v-for="(lang, i) in this.resumeValues.langsForm.childs"
                :key="i"
              >
                <span> {{ lang.name + " " }}&nbsp;:&nbsp; </span>
                {{ lang.level }} &nbsp;
              </span>
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
        .querySelector(".cv-container-div-4")
        .getBoundingClientRect().height;

      let nameSectionHight = document
        .querySelector(".name-section-div")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".left-section-div");
      let rightSectionsHeights =
        document.querySelectorAll(".right-section-div");

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
      let rightSectionsHeightsSum = leftSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let leftHightWanted = leftSectionsHeightsSum + nameSectionHight;
      let rightHightWanted = rightSectionsHeightsSum + nameSectionHight;
      let fontSizeHere = 15;

      while (
        leftHightWanted > cvContainerHeight ||
        rightHightWanted > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-4").forEach((el) => {
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
        leftSectionsHeights = document.querySelectorAll(".left-section-div");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
        rightSectionsHeights = document.querySelectorAll(".right-section-div");
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
        nameSectionHight = document
          .querySelector(".name-section-div")
          .getBoundingClientRect().height;
        leftHightWanted = leftSectionsHeightsSum + nameSectionHight;
        rightHightWanted = rightSectionsHeightsSum + nameSectionHight;
      }
    },
    setLastSectionBorderNone() {
      const leftSectionsHeights =
        document.querySelectorAll(".left-section-div");
      const rightSectionsHeights =
        document.querySelectorAll(".right-section-div");
      leftSectionsHeights[leftSectionsHeights.length - 1].classList.add(
        "last-section"
      );
      rightSectionsHeights[rightSectionsHeights.length - 1].classList.add(
        "last-section"
      );
    },
  },
  mounted() {
    this.checkContainersSize();
    this.setLastSectionBorderNone();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-4");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-4-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-4-translate {
  transform: translateY(-3px);
}
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  align-items: center;
  justify-content: center;
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.window-container-div {
  /* height: 100vh; */
  /* height: 1122px; */
  height: 100%;
  width: 100%;
  /* padding: 10px; */
}
.cv-container-div-4 {
  width: 100%;
  height: 100%;
  /* padding: 8px 8px 0 8px; */
}
.cv-container-div-4-font {
  font-family: "Tauri";
}
.name-job-contacts-div {
  flex: 0.15;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 0px 0px 15px 15px;
  background-color: rgba(14, 8, 44, 0.7);
}
.name-job-contacts-div-corner {
  border-radius: 15px;
}
.left-right-container-div {
  flex: 1;
  width: 100%;
}
.left-div {
  flex: 0.4;
  height: 100%;
  padding: 0px 10px 0 10px;
  background-color: rgba(14, 8, 44, 0.7);
  border-radius: 15px 15px 0 0px;
}
.left-corner {
  border-radius: 15px 15px 0 15px;
}
.left-corner-arabic {
  border-radius: 15px 15px 15px 0;
}
.right-div {
  flex: 1;
  height: 100%;
  border-radius: 15px 15px 0 0;
  padding: 0px 10px 0 10px;
  background-color: rgba(14, 8, 44, 0.7);
}
.right-div-ms {
  margin: 0px 0px 0 10px;
}
.right-div-me {
  margin: 0px 10px 0 0px;
}
.right-corner-arabic {
  border-radius: 15px 15px 0 15px;
}
.right-corner {
  border-radius: 15px 15px 15px 0px;
}

.left-section-div,
.right-section-div {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  color: white;
  border-bottom: 0.5px solid whitesmoke;
}
.name-section-div {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  color: white;
}
.last-section {
  border-bottom: none;
  margin-bottom: 5px;
}
.my-padding {
  padding: 0px 10px 0 10px;
}
.section-title-div {
  width: 100%;
  justify-content: start;
}
.txt-bolder {
  font-weight: bold;
}
.single-body-element-div {
  width: 100%;
  padding: 0px 10px 0 10px;
}
.left-padding {
  padding: 0 0px 0 10px;
}
/* -----------------------------------------------NAME & CONTACTS SECTION------------------------------------------ */
/* .name-div,
.job-title-div,
.section-title-div {
  font-family: "Tilt Warp";
} */
.name-section-job-font {
  font-family: "Tilt Warp";
}
.contacts-div {
  width: 100%;
  justify-content: space-evenly;
}
/* -----------------------------------------------ABOUT GENERAL INFO SECTION------------------------------------------ */
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
/* -----------------------------------------------LANGUAGES SECTION------------------------------------------ */
.languages-section {
  flex: 0.5;
}
/* -----------------------------------------------WORKEXPERINCE SECTION------------------------------------------ */
.work-body-div {
  align-items: start;
}

/* -----------------------------------------------LINKS SECTION------------------------------------------ */
.web-links-div {
  align-items: start;
}
.anchors {
  color: rgb(202, 202, 255);
}
</style>

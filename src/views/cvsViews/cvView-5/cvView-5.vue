<template>
  <div class="window-container-div-5 flex-row">
    <div
      class="cv-container-div-5 flex-column"
      :class="
        this.corner
          ? this.lng.name === 'arabic'
            ? 'arabic-font cv-container-div-5-corner'
            : 'cv-container-div-5-font cv-container-div-5-corner'
          : this.lng.name === 'arabic'
          ? 'arabic-font'
          : 'cv-container-div-5-font'
      "
    >
      <div
        class="name-contacts-container-div flex-column"
        :class="
          this.lng.name === 'arabic'
            ? 'arabic-font'
            : 'section-title-name-job-font'
        "
      >
        <div class="name-div element-body-txt-5" style="font-size: 23px">
          <span
            >{{
              this.resumeValues.fullName
                ? this.resumeValues.fullName
                : this.lng.lang.section2.getCvInfo.frame.fullName
            }}&nbsp;</span
          >
        </div>
        <div class="job-title-div element-body-txt-5" style="font-size: 20px">
          <span
            >{{
              this.resumeValues.jobTitle
                ? this.resumeValues.jobTitle
                : this.lng.lang.section2.getCvInfo.frame.jobTitle
            }}&nbsp;</span
          >
        </div>
      </div>
      <div class="left-right-container-div flex-row">
        <div
          class="left-sections-container-div flex-column"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'arabic-font left-sections-container-div-corner-arabic'
                : 'left-sections-container-div-corner'
              : this.lng.name === 'arabic'
              ? 'arabic-font left-sections-none-corner-arabic'
              : ''
          "
        >
          <!-- style="border-radius: 0 15px 0 0" -->
          <div class="left-section-5 details-section flex-column">
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
              >{{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
              }}&nbsp;:&nbsp;</span
            >
            <div
              class="body-element-div-5 flex-column element-body-txt-5"
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
                        this.lng.lang.section2.getCvInfo.frame.nationality +
                        " "
                      }}&nbsp;:
                    </span>
                    {{
                      `${
                        this.resumeValues.nationality
                          ? this.resumeValues.nationality
                          : this.lng.lang.section2.getCvInfo.frame.nationality
                      }`
                    }}&nbsp;</span
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
                          ? this.resumeValues.placeOfBirth
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
                    }}&nbsp;</span
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
                          ? String(this.resumeValues.dateOfBirth.day).padStart(
                              2,
                              0
                            )
                          : "dd"
                      }` +
                      "/" +
                      `${
                        this.resumeValues.dateOfBirth.month
                          ? String(
                              this.resumeValues.dateOfBirth.month
                            ).padStart(2, 0)
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
                    <span
                      >{{
                        this.lng.lang.section2.getCvInfo.frame.materialStatus +
                        " "
                      }}&nbsp;:
                    </span>
                    {{
                      `${
                        this.resumeValues.relationship
                          ? this.resumeValues.relationship
                          : this.lng.lang.section2.getCvInfo.frame
                              .materialStatus
                      }`
                    }}&nbsp;</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="left-section-5 edu-section flex-column">
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.education +
                " "
              }}&nbsp;:&nbsp;
            </span>
            <div
              class="body-element-div-5 flex-column element-body-txt-5"
              style="font-size: 14px"
            >
              <div class="degree-college-name-div">
                <span
                  >{{ this.lng.lang.section2.getCvInfo.frame.degreeOf + " " }}
                </span>
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
                        : this.lng.lang.section2.getCvInfo.frame
                            .universityName + " "
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
          <div class="left-section-5 skills-section flex-column">
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
              }}&nbsp;:&nbsp;
            </span>
            <div class="body-element-div-5 flex-column">
              <div
                class="skills-div flex-row element-body-txt-5"
                style="font-size: 13px"
              >
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
          class="right-sections-container-div flex-column bottom-right-corner-5"
        >
          <div class="right-section-5 contacts-section flex-column">
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
              }}&nbsp;:&nbsp;
            </span>
            <div
              class="body-element-div-5 flex-column element-body-txt-5"
              style="font-size: 14px"
            >
              <div>
                <div>
                  <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
                  <span class="tranlate-me-5">
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
                          : this.lng.lang.section2.getCvInfo.frame.country
                      }`
                    }}&nbsp;</span
                  >
                </div>
                <div>
                  <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
                  <span class="tranlate-me-5">{{
                    this.resumeValues.email
                      ? this.resumeValues.email
                      : "email@mail.com"
                  }}</span>
                </div>
                <div>
                  <i class="bi bi-telephone-fill ms-1 me-1"></i>
                  <span class="tranlate-me-5">{{
                    this.resumeValues.phone
                      ? this.resumeValues.phone
                      : "0123456789"
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="right-section-5 exeperince-section flex-column"
            v-if="this.resumeValues.workExpForm[0].jobTitle"
          >
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle
                  .workExeperince + " "
              }}&nbsp;:&nbsp;
            </span>
            <div class="body-element-div-5 flex-column">
              <div
                class="workEpx-div"
                v-for="(work, i) in this.resumeValues.workExpForm"
                :key="i"
              >
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-5"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-5 title-txt element-body-txt-5"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div
                  class="work-body-div flex-column element-body-txt-5"
                  style="font-size: 14px"
                >
                  <span> {{ work.employer }}&nbsp; </span>
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
            class="right-section-5 links-section flex-column"
            v-if="this.resumeValues.webLinks.princ.webTitle"
          >
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks +
                " "
              }}&nbsp;:&nbsp;
            </span>
            <div
              class="body-element-div-5 element-body-txt-5 flex-column"
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
          <div class="right-section-5 languages-section flex-column">
            <span
              class="section-title-txt element-body-txt-5 my-padding-10 mb-1"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'section-title-name-job-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.languages +
                " "
              }}&nbsp;:&nbsp;
            </span>
            <div class="body-element-div-5 flex-column">
              <div>
                <div>
                  <span class="element-body-txt-5" style="font-size: 14px">
                    {{
                      this.resumeValues.langsForm.princ.name
                        ? this.resumeValues.langsForm.princ.name
                        : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                    }}&nbsp;
                  </span>
                  <span
                    class="dots-span element-body-txt-5"
                    style="font-size: 11px"
                  >
                    ---------
                  </span>
                  <span class="element-body-txt-5" style="font-size: 14px">
                    {{
                      this.resumeValues.langsForm.princ.level
                        ? this.resumeValues.langsForm.princ.level
                        : this.lng.lang.section2.getCvInfo.frame
                            .linguisticLevel
                    }}&nbsp;
                  </span>
                </div>
                <div
                  v-for="(lang, i) in this.resumeValues.langsForm.childs"
                  :key="i"
                >
                  <span class="element-body-txt-5" style="font-size: 14px">
                    {{ lang.name }}&nbsp;
                  </span>
                  <span
                    class="dots-span element-body-txt-5"
                    style="font-size: 11px"
                  >
                    ---------
                  </span>
                  <span class="element-body-txt-5" style="font-size: 14px">
                    {{ lang.level }}&nbsp;
                  </span>
                </div>
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
        .querySelector(".cv-container-div-5")
        .getBoundingClientRect().height;

      let nameSectionHight = document
        .querySelector(".name-contacts-container-div")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".left-section-5");
      let rightSectionsHeights = document.querySelectorAll(".right-section-5");

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
      let leftHightWanted = leftSectionsHeightsSum + nameSectionHight;
      let rightHightWanted = rightSectionsHeightsSum + nameSectionHight;

      leftHightWanted = leftHightWanted - 5;
      rightHightWanted = rightHightWanted - 5;
      let fontSizeHere = 15;

      while (
        leftHightWanted > cvContainerHeight ||
        rightHightWanted > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-5").forEach((el) => {
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
        leftSectionsHeights = document.querySelectorAll(".left-section-5");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
        rightSectionsHeights = document.querySelectorAll(".right-section-5");
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
          .querySelector(".name-contacts-container-div")
          .getBoundingClientRect().height;
        leftHightWanted = leftSectionsHeightsSum + nameSectionHight;
        rightHightWanted = rightSectionsHeightsSum + nameSectionHight;

        leftHightWanted = leftHightWanted - 5;
        rightHightWanted = rightHightWanted - 5;
      }
    },
    setLastSectionBorderNone() {
      const leftSections = document.querySelectorAll(".left-section-5");
      const rightSections = document.querySelectorAll(".right-section-5");
      leftSections[leftSections.length - 1].classList.add("last-section");
      rightSections[rightSections.length - 1].classList.add("last-section");
    },
  },
  mounted() {
    this.setLastSectionBorderNone();
    this.checkContainersSize();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-5");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-5-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-5-translate {
  transform: translateY(-3px);
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
.arabic-font {
  font-family: "Zain", sans-serif;
}
.window-container-div-5 {
  /* height: 100vh; */
  /* height: 1122px; */
  height: 100%;
  width: 100%;
  /* padding: 5px; */
}
.cv-container-div-5 {
  height: 100%;
  width: 100%;
  background-color: rgb(79, 108, 161);
}
.cv-container-div-5-font {
  font-family: "Roboto";
}
.cv-container-div-5-corner {
  border-radius: 15px;
}
.name-contacts-container-div {
  flex: 0.2;
  width: 100%;
  /* font-family: "Tilt Warp"; */
  color: white;
}
/* .section-title-txt {
  font-family: "Tilt Warp";
} */
.section-title-name-job-font {
  font-family: "Tilt Warp";
}
.left-right-container-div {
  flex: 1;
  width: 100%;
}
.left-sections-container-div {
  flex: 1;
  height: 100%;
  background-color: rgb(240, 240, 240);
  color: rgb(79, 108, 161);
  border-radius: 0 15px 0 0px;
}
.left-sections-none-corner-arabic {
  border-radius: 15px 0 0 0;
}

.left-sections-container-div-corner {
  border-radius: 0 15px 0 15px;
}
.left-sections-container-div-corner-arabic {
  border-radius: 15px 0 15px 0;
}
.right-sections-container-div {
  flex: 0.6;
  height: 100%;
  color: white;
  /* background-color: rgb(79, 108, 161); */
}
.left-section-5,
.right-section-5 {
  /* flex: 1; */
  /* flex: 1; */
  /* flex: 1; */
  /* flex: 1; */
  height: 100%;
  width: 100%;
  align-items: start;
  padding: 5px 0px 5px 0px;
  /* border-bottom: 0.5px solid rgb(179, 179, 179); */
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
.body-element-div-5 {
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
  padding: 0 20px 0 20px;
}
.txt-bolder {
  font-weight: bold;
}
.dots-span {
  color: rgb(207, 207, 207);
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
  justify-content: space-evenly;
}
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  row-gap: 3px;
}
/* -----------------------------------------EEPERINSE SECTION------------------------------------------------- */
.work-body-div {
  align-items: start;
  padding: 0 20px 0 20px;
}
/* -----------------------------------------LINKS SECTION------------------------------------------------- */
.anchors {
  color: white;
}
</style>

<template>
  <div
    class="cv-container-div-11 flex-column"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-11-font'
    "
  >
    <div
      class="name-contacts-container-div-11 flex-column"
      :class="this.corner ? 'name-contacts-container-div-11-top-radius' : ''"
    >
      <!-- style="border-radius: 0 0 15px 15px" -->
      <div
        class="name-div element-body-txt-11"
        style="font-size: 23px"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
        "
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
        class="job-title-div element-body-txt-11"
        style="font-size: 20px"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
        "
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
    <div class="left-right-container-div flex-row">
      <div
        class="left-sections-container-div flex-column"
        :class="
          this.lng.name === 'arabic' ? 'left-sections-container-div-arabic' : ''
        "
      >
        <div
          class="left-section-11 details-section flex-column"
          :class="this.lng.name === 'arabic' ? 'details-section-arabic' : ''"
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 flex-column element-body-txt-11"
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
                  <span
                    >{{
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
        <div
          class="left-section-11 edu-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'left-section-11-radius-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.education +
                " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 flex-column element-body-txt-11"
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
                {{ this.resumeValues.eduForm.thesis }}
              </p>
            </div>
            <div
              class="courses-div"
              v-if="this.resumeValues.coursesForm[0].courseTitle"
            >
              <span class="txt-bolder">
                {{
                  this.lng.lang.section2.getCvInfo.frame.courses + " "
                }}&nbsp;:&nbsp;</span
              >
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
        <div
          class="left-section-11 skills-section last-section flex-column left-bottom-corner-11"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'skills-corner-true-arabic'
                : 'skills-corner-true'
              : this.lng.name === 'arabic'
              ? 'left-section-11-radius-arabic'
              : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
              }}&nbsp;
            </span>
          </span>
          <div class="body-element-div-11 flex-column">
            <div
              class="skills-div flex-row element-body-txt-11"
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
      <div
        class="right-sections-container-div flex-column"
        :class="
          this.lng.name === 'arabic'
            ? 'right-sections-container-div-arabic'
            : ''
        "
      >
        <div
          class="right-section-11 contacts-section flex-column"
          :class="this.lng.name === 'arabic' ? 'contacts-section-arabic' : ''"
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 flex-column element-body-txt-11"
            style="font-size: 14px"
          >
            <div>
              <div>
                <i class="bi bi-geo-alt-fill m-1"></i>
                <span class="tranlate-me-11">
                  <span>
                    {{
                      `${
                        this.resumeValues.address.country
                          ? this.resumeValues.address.country
                          : this.lng.lang.section2.getCvInfo.frame.country
                      }` + " "
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
                <span class="tranlate-me-11">{{
                  this.resumeValues.email
                    ? this.resumeValues.email
                    : "email@mail.com"
                }}</span>
              </div>
              <div>
                <i class="bi bi-telephone-fill m-1"></i>
                <span class="tranlate-me-11">{{
                  this.resumeValues.phone
                    ? this.resumeValues.phone
                    : "0123456789"
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="right-section-11 exeperince-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'right-section-11-radius-arabic' : ''
          "
          v-if="this.resumeValues.workExpForm[0].jobTitle"
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle
                  .workExeperince + " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 flex-column"
            v-if="this.resumeValues.workExpForm.length > 0"
          >
            <div
              class="workEpx-div"
              v-for="(work, i) in this.resumeValues.workExpForm"
              :key="i"
            >
              <i
                class="bi bi-briefcase-fill element-body-txt-11"
                style="font-size: 15px"
              ></i>
              <span
                class="tranlate-me-11 title-txt p-1 element-body-txt-11"
                style="font-size: 15px"
                >{{ work.jobTitle }}&nbsp;</span
              >
              <div
                class="work-body-div flex-column element-body-txt-11"
                style="font-size: 14px"
              >
                <div>
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
          class="right-section-11 links-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'right-section-11-radius-arabic' : ''
          "
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks +
                " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 element-body-txt-11 flex-column"
            style="font-size: 14px"
          >
            <a :href="this.resumeValues.webLinks.princ.webHref" class="anchors"
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
        <div
          class="right-section-11 languages-section last-section flex-column right-bottom-corner-11"
          :class="
            this.corner
              ? this.lng.name === 'arabic'
                ? 'right-section-11-radius-arabic langs-corner-true-arabic'
                : 'langs-corner-true'
              : this.lng.name === 'arabic'
              ? 'right-section-11-radius-arabic'
              : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-11"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-11">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.languages +
                " "
              }}&nbsp;
            </span>
          </span>
          <div
            class="body-element-div-11 flex-column element-body-txt-11"
            style="font-size: 14px"
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
                  class="dots-span element-body-txt-11"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span>
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
                <span> {{ lang.name }}&nbsp; </span>
                <span
                  class="dots-span element-body-txt-11"
                  style="font-size: 11px"
                >
                  ---------
                </span>
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
        .querySelector(".cv-container-div-11")
        .getBoundingClientRect().height;

      let nameSectionHight = document
        .querySelector(".name-contacts-container-div-11")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".left-section-11");
      let rightSectionsHeights = document.querySelectorAll(".right-section-11");

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
        document.querySelectorAll(".element-body-txt-11").forEach((el) => {
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
        leftSectionsHeights = document.querySelectorAll(".left-section-11");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
        rightSectionsHeights = document.querySelectorAll(".right-section-11");
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
          .querySelector(".name-contacts-container-div-11")
          .getBoundingClientRect().height;
        leftHightWanted = leftSectionsHeightsSum + nameSectionHight;
        rightHightWanted = rightSectionsHeightsSum + nameSectionHight;

        leftHightWanted = leftHightWanted - 5;
        rightHightWanted = rightHightWanted - 5;
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-11");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-11-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-11-translate {
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
  font-family: "Noto Kufi Arabic", sans-serif;
}
.cv-container-div-11 {
  /* height: 1122px; */
  /* height: 100vh; */
  /* width: 65%; */
  height: 100%;
  width: 100%;
}
.cv-container-div-11-font {
  font-family: "Tauri";
}
.name-contacts-container-div-11 {
  flex: 0.2;
  width: 100%;
  background-color: rgb(192, 75, 75);
  margin-bottom: 2px;
  padding: 1px 0 1px 0;
  border-radius: 0 0 15px 15px;
  color: white;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.name-contacts-container-div-11-top-radius {
  border-radius: 15px;
}
.left-right-container-div {
  flex: 1;
  width: 100%;
}
.left-sections-container-div {
  flex: 1;
  height: 100%;
  color: white;
  margin-right: 3px;
}
.left-sections-container-div-arabic {
  margin-left: 3px;
  margin-right: 0px;
}
.right-sections-container-div {
  flex: 0.6;
  height: 100%;
  color: white;
  margin-left: 3px;
  justify-content: space-evenly;
}
.right-sections-container-div-arabic {
  margin-right: 3px;
  margin-left: 0px;
}
.left-section-11 {
  height: 100%;
  width: 100%;
  align-items: start;
  padding: 2px;
  background-color: rgb(192, 75, 75);
  margin-bottom: 3px;
  border-radius: 0 15px 15px 0;
  padding: 5px 5px 2px 5px;
}
.left-section-11-radius-arabic {
  border-radius: 15px 0px 0px 15px;
}
.right-section-11 {
  height: 100%;
  width: 100%;
  align-items: start;
  padding: 2px;
  background-color: rgb(192, 75, 75);
  border-radius: 15px 0 0 15px;
  margin-bottom: 3px;
  padding: 5px 5px 2px 5px;
}
.right-section-11-radius-arabic {
  border-radius: 0px 15px 15px 0px;
}
.section-title-txt {
  border: 2px solid rgb(250, 250, 250);
  border-radius: 15px;
  padding: 1px 15px 1px 15px;
  margin-bottom: 2px;
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
  width: 100%;
}
.body-element-div-11 {
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
  padding: 0 20px 0 20px;
}
.details-section {
  border-radius: 15px 15px 15px 0;
}
.details-section-arabic {
  border-radius: 15px 15px 0px 15px;
}
.contacts-section {
  border-radius: 15px 15px 0 15px;
}
.contacts-section-arabic {
  border-radius: 15px 15px 15px 0;
}
.langs-corner-true {
  border-radius: 15px 0px 15px 15px;
}
.langs-corner-true-arabic {
  border-radius: 0 15px 15px 15px;
}
.skills-corner-true {
  border-radius: 0 15px 15px 15px;
}
.skills-corner-true-arabic {
  border-radius: 15px 0px 15px 15px;
}
.txt-bolder {
  font-weight: bold;
}
.dots-span {
  color: rgb(207, 207, 207);
}
.last-section {
  margin-bottom: 0;
}
/* -----------------------------------------DETAILS SECTION------------------------------------------------- */
.general-info-div {
  width: 100%;
}
/* -----------------------------------------SKILLS SECTION------------------------------------------------- */
.skills-div {
  width: 100%;
  justify-content: space-evenly;
  align-items: start;
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
  /* padding: 0 20px 0 20px; */
}
/* -----------------------------------------LINKS SECTION------------------------------------------------- */
.anchors {
  color: white;
}
</style>

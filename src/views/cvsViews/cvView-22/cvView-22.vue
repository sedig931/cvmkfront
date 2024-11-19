<template>
  <div class="window-container-div-22">
    <div
      class="cv-container-div-22 flex-column"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-22-font'
      "
    >
      <div class="section-div-22 name-job-title-section flex-row">
        <div
          class="inner-section-div-22 inner-name-job-title-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
        >
          <span
            class="name-span-22 element-body-txt-22"
            style="font-size: 25px"
          >
            {{
              this.resumeValues.fullName
                ? this.resumeValues.fullName
                : this.lng.lang.section2.getCvInfo.frame.fullName
            }}&nbsp;
          </span>
          <span
            class="job-title-span-22 element-body-txt-22"
            style="font-size: 20px"
          >
            {{
              this.resumeValues.jobTitle
                ? this.resumeValues.jobTitle
                : this.lng.lang.section2.getCvInfo.frame.jobTitle
            }}&nbsp;
          </span>
        </div>
      </div>

      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 details-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-22"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
            }}&nbsp;:&nbsp;
          </span>
          <div
            class="body-element-div flex-column element-body-txt-22"
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
                  }}&nbsp;</span
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
      </div>
      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 education-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-22"
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
            class="body-element-div flex-column element-body-txt-22"
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
      </div>
      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 skills-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-22"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
            }}&nbsp;:&nbsp;
          </span>
          <div
            class="body-element-div flex-column element-body-txt-22"
            style="font-size: 14px"
          >
            <div class="skills-outer-div flex-row">
              <div class="skills-columns-grid-div element-body-txt-22">
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
      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 exeperince-section flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
          v-if="this.resumeValues.workExpForm[0].jobTitle"
        >
          <span
            class="section-title-txt element-body-txt-22"
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
          <div class="body-element-div flex-column">
            <div class="workExp-outer-div flex-row">
              <div class="workExep-columns-div">
                <div
                  v-for="(work, i) in this.resumeValues.workExpForm"
                  :key="i"
                >
                  <i
                    class="bi bi-briefcase-fill m-1 element-body-txt-22"
                    style="font-size: 15px"
                  ></i>
                  <span
                    class="tranlate-me-22 txt-bolder element-body-txt-22"
                    style="font-size: 15px"
                    >{{ work.jobTitle }}&nbsp;</span
                  >
                  <div
                    class="work-body-div ms-2 me-2 element-body-txt-22"
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
                        } ${
                          work.workDate.to.year ? work.workDate.to.year : "yy"
                        }`
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <span
            class="section-title-txt element-body-txt-22"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks +
              " "
            }}&nbsp;:&nbsp;
          </span>
          <div
            class="body-element-div flex-column element-body-txt-22"
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
      </div>
      <div class="section-div-22 flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-22"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " "
            }}&nbsp;:&nbsp;
          </span>
          <div class="body-element-div flex-column">
            <div class="languages-outer-div flex-row">
              <div class="columns-grid-div">
                <div>
                  <span class="element-body-txt-22" style="font-size: 14px">
                    {{
                      this.resumeValues.langsForm.princ.name
                        ? this.resumeValues.langsForm.princ.name
                        : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                    }}&nbsp;
                  </span>
                  <span
                    class="dots-span element-body-txt-22"
                    style="font-size: 11px"
                  >
                    ---------
                  </span>
                  <span class="element-body-txt-22" style="font-size: 14px">
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
                  <span class="element-body-txt-22" style="font-size: 14px">
                    {{ lang.name }}&nbsp;
                  </span>
                  <span
                    class="dots-span element-body-txt-22"
                    style="font-size: 11px"
                  >
                    ---------
                  </span>
                  <span class="element-body-txt-22" style="font-size: 14px">
                    {{ lang.level }}&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-div-22 contacts-section flex-row">
        <div class="left-right-border-div"></div>
        <div
          class="inner-section-div-22 flex-column"
          :class="
            this.lng.name === 'arabic' ? 'inner-section-div-padding-arabic' : ''
          "
        >
          <span
            class="section-title-txt element-body-txt-22"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
            }}&nbsp;:&nbsp;
          </span>
          <div
            class="contacts-body-element flex-row element-body-txt-22"
            style="font-size: 14px"
          >
            <div class="single-contact flex-row">
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-22">
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
            <div class="single-contact flex-row">
              <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
              <span class="tranlate-me-22">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div class="single-contact flex-row">
              <i class="bi bi-telephone-fill ms-1 me-1"></i>
              <span class="tranlate-me-22">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
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
        .querySelector(".cv-container-div-22")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".section-div-22");

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
        document.querySelectorAll(".element-body-txt-22").forEach((el) => {
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

        sectionsHeights = document.querySelectorAll(".section-div-22");
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
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-22");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-22-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-22-translate {
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
.window-container-div-22 {
  width: 100%;
  height: 100%;
  /* height: 100vh; */
  /* height: 1122px; */
  /* padding: 5px; */
}
.cv-container-div-22 {
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  color: rgb(67, 67, 102);
}
.cv-container-div-22-font {
  font-family: "Tauri";
}
.section-div-22 {
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0px 5px 5px 5px;
}
.inner-section-div-22 {
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
  /* background-color: rgba(117, 158, 230, 0.5); */
  padding: 0 0 0 1px;
}
.inner-section-div-padding-arabic {
  padding: 0 1px 0 0;
}
.name-job-title-section {
  flex: 0.4;
}
.inner-name-job-title-section {
  align-items: center;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.body-element-div {
  width: 100%;
  height: 100%;
  padding: 0px 5px 0px 5px;
  /* margin: 2.5px 0 0 10px; */
  align-items: start;
  justify-content: space-evenly;
}
.left-right-border-div {
  height: 100%;
  width: 2px;
  background-color: rgb(165, 165, 183);
  border-radius: 5px;
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
  flex: 0;
  /* padding: 0; */
}
.contacts-body-element {
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
}
.single-contact {
  height: 100%;
  color: rgb(67, 67, 102);
  /* border-radius: 15px; */
  padding: 0px 10px 0px 10px;
  /* border: 1px solid rgb(197, 197, 197); */
}
/* .anchors {
  color: rgb(110, 110, 236);
} */
.markerd {
  background-color: rgb(67, 67, 102);
  color: white;
  opacity: 0.8;
  padding: 0 5px 0 5px;
  transform: scale(1.07, 1.05) skewX(-15deg);
}
/* .markerd {
  position: relative;
  padding: 0 5px 0 5px;
  color: rgb(255, 255, 255);
} */

/* .markerd::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.8;
  transform: scale(1.07, 1.05) skewX(-15deg);
  background-image: var(--gradient-primary);
} */
</style>

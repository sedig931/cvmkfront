<template>
  <div class="window-container-div-3">
    <div
      class="cv-container-div-3 flex-column"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-3-font'
      "
    >
      <div class="section-div-3 name-job-title-section flex-column">
        <div
          class="name-job-title-div flex-column"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
        >
          <span class="name-span-3 element-body-txt-3" style="font-size: 20px">
            {{
              this.resumeValues.fullName
                ? this.resumeValues.fullName
                : this.lng.lang.section2.getCvInfo.frame.fullName
            }}&nbsp;
          </span>
          <span
            class="job-title-span-3 element-body-txt-3"
            style="font-size: 18px"
          >
            {{
              this.resumeValues.jobTitle
                ? this.resumeValues.jobTitle
                : this.lng.lang.section2.getCvInfo.frame.jobTitle
            }}&nbsp;
          </span>
        </div>
        <div
          class="contacts-body-element flex-row element-body-txt-3"
          style="font-size: 14px"
        >
          <div class="single-contact flex-row">
            <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
            <span class="tranlate-me-3">
              <span>
                {{
                  `${
                    this.resumeValues.address.city
                      ? this.resumeValues.address.city + " - "
                      : this.lng.lang.section2.getCvInfo.frame.city + " - "
                  }`
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
          <div class="single-contact flex-row">
            <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
            <span class="tranlate-me-3">{{
              this.resumeValues.email
                ? this.resumeValues.email
                : "email@mail.com"
            }}</span>
          </div>
          <div class="single-contact flex-row">
            <i class="bi bi-telephone-fill ms-1 me-1"></i>
            <span class="tranlate-me-3">{{
              this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
            }}</span>
          </div>
        </div>
      </div>
      <div class="section-div-3 details-section flex-column">
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.details }}
          &nbsp; &nbsp;:
        </span>
        <div
          class="body-element-div flex-column element-body-txt-3"
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
                  }}&nbsp;:
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
                  }}&nbsp;:
                </span>
                {{
                  `${
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }`
                }}
                &nbsp;
              </span>

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
                    this.lng.lang.section2.getCvInfo.frame.birthDate + "  "
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
      <div class="section-div-3 education-section flex-column">
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.education }}
          &nbsp; &nbsp;:
        </span>
        <div
          class="body-element-div flex-column element-body-txt-3"
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
            <div class="m-0 p-0">
              <span class="txt-bolder"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " "
                }}&nbsp;:&nbsp;</span
              >
              <span> {{ this.resumeValues.eduForm.thesis }}&nbsp;</span>
            </div>
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
      <div class="section-div-3 skills-section flex-column">
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " " }}
          &nbsp; &nbsp;:
        </span>
        <div
          class="body-element-div flex-column element-body-txt-3"
          style="font-size: 14px"
        >
          <div class="skills-outer-div flex-row">
            <div class="skills-columns-grid-div element-body-txt-3">
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
        class="section-div-3 exeperince-section flex-column"
        v-if="this.resumeValues.workExpForm[0].jobTitle"
      >
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.workExeperince +
            " "
          }}&nbsp; &nbsp;:
        </span>
        <div class="body-element-div flex-column">
          <div class="workExp-outer-div flex-row">
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-3"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-3 txt-bolder element-body-txt-3"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div
                  class="work-body-div ms-2 me-2 element-body-txt-3"
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
        class="section-div-3 links-section flex-column"
        v-if="this.resumeValues.webLinks.princ.webTitle"
      >
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks + " "
          }}&nbsp; &nbsp;:
        </span>
        <div
          class="body-element-div flex-column element-body-txt-3"
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
      <div class="section-div-3 languages-section flex-column">
        <span
          class="section-title-txt element-body-txt-3"
          :class="this.lng.name !== 'arabic' ? 'name-job-section-font' : ''"
          style="font-size: 16px"
        >
          {{
            this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " "
          }}&nbsp; &nbsp;:
        </span>
        <div class="body-element-div flex-column">
          <div class="languages-outer-div flex-row">
            <div class="columns-grid-div">
              <div>
                <span class="element-body-txt-3" style="font-size: 14px">
                  {{
                    this.resumeValues.langsForm.princ.name
                      ? this.resumeValues.langsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                  }}&nbsp;
                </span>
                <span
                  class="dots-span element-body-txt-3"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-3" style="font-size: 14px">
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
                <span class="element-body-txt-3" style="font-size: 14px">
                  {{ lang.name }}&nbsp;
                </span>
                <span
                  class="dots-span element-body-txt-3"
                  style="font-size: 11px"
                >
                  ---------
                </span>
                <span class="element-body-txt-3" style="font-size: 14px">
                  {{ lang.level }}&nbsp;
                </span>
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
        .querySelector(".cv-container-div-3")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".section-div-3");

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
        document.querySelectorAll(".element-body-txt-3").forEach((el) => {
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

        sectionsHeights = document.querySelectorAll(".section-div-3");
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
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-3");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-3-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-3-translate {
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
  /* font-family: "Noto Naskh Arabic"; */
}
.window-container-div-3 {
  /* width: 100%; */
  height: 100%;
  width: 100%;
  /* height: 100vh; */
  /* height: 1122px; */
  /* padding: 5px; */
}
.cv-container-div-3 {
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
  color: rgb(78, 78, 78);
}
.cv-container-div-3-font {
  font-family: "Tauri";
}
.section-div-3 {
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 5px 10px 5px 10px;
  border-bottom: 0.5px solid rgb(180, 180, 180);
}
.name-job-title-section {
  flex: 0.4;
  align-items: center;
  margin-top: 3px;
  border-bottom: none;
}
.name-job-section-font {
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
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  row-gap: 3px;
}
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
}
.txt-bolder {
  font-weight: bold;
}
.work-body-div {
  align-items: start;
  /* padding: 0 20px 0 20px; */
}
.links-section {
  flex: 0.5;
}
.languages-section {
  flex: 0.3;
  border-bottom: none;
}
.contacts-body-element {
  width: 100%;
  justify-content: space-evenly;
  margin-top: 10px;
}
.single-contact {
  padding: 0 15px 0 15px;
  border-bottom: 0.5px solid rgb(180, 180, 180);
  border-radius: 15px;
}
</style>

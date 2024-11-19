<template>
  <div
    class="cv-container-div-20 flex-column"
    :class="this.corner ? 'cv-container-div-20-corner' : ''"
  >
    <div class="name-photo-job-title-intro-div flex-row">
      <div class="photo-container-div-20 flex-row">
        <div class="personal-photo-div-20" style="width: 150px">
          <img
            class="personal-photo personal-photo-20"
            alt=""
            :src="
              this.photoName
                ? `http://localhost:300/uploads/${this.photoName}`
                : 'http://localhost:300/uploads/const-pic-cv-maker-cv-profile-6.png'
            "
          />
        </div>
      </div>
      <div class="name-job-intro-div-20 flex-column text-center">
        <span
          class="element-body-txt-20 text-center"
          style="font-size: 23px"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
        >
          {{
            this.resumeValues.fullName
              ? this.resumeValues.fullName
              : this.lng.lang.section2.getCvInfo.frame.fullName
          }}&nbsp;
        </span>
        <span
          class="element-body-txt-20 text-center"
          style="font-size: 18px"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
        >
          {{
            this.resumeValues.jobTitle
              ? this.resumeValues.jobTitle
              : this.lng.lang.section2.getCvInfo.frame.jobTitle
          }}&nbsp;
        </span>
        <div
          class="element-body-txt-20 flex-column"
          style="font-size: 14px"
          :class="
            this.lng.name === 'arabic'
              ? 'arabic-font'
              : 'cv-container-div-20-font'
          "
        >
          <p class="m-0 p-0">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}&nbsp;
          </p>
        </div>
      </div>
    </div>
    <div
      class="left-right-sections-20 flex-row"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-20-font'
      "
    >
      <div class="left-sections-20 flex-column">
        <div class="section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
            }}&nbsp;
          </span>
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
          >
            <div class="single-contact flex-row">
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-20">
                <span>
                  {{
                    `${
                      this.resumeValues.address.country
                        ? this.resumeValues.address.country
                        : this.lng.lang.section2.getCvInfo.frame.country
                    }` + " - "
                  }}
                  &nbsp;
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
              <span class="tranlate-me-20">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div class="single-contact flex-row">
              <i class="bi bi-telephone-fill ms-1 me-1"></i>
              <span class="tranlate-me-20">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="section-div-20 flex-column"
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <span
            class="section-title-20 element-body-txt-20"
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
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
          >
            <div class="links-columns-grid-div">
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
        <div class="section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " "
            }}&nbsp;
          </span>
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
          >
            <div>
              <span>
                {{
                  this.resumeValues.langsForm.princ.name
                    ? this.resumeValues.langsForm.princ.name
                    : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                }}&nbsp;
              </span>
              <span
                class="dots-span element-body-txt-20"
                style="font-size: 11px"
              >
                _____
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
                class="dots-span element-body-txt-20"
                style="font-size: 11px"
              >
                _____
              </span>
              <span> {{ lang.level }}&nbsp; </span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-sections-20 flex-column">
        <div class="right-section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.details }}&nbsp;
          </span>
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
          >
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
                }}</span
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
        <div class="right-section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.education + " "
            }}&nbsp;
          </span>
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
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
        <div class="right-section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
            }}&nbsp;
          </span>
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
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
        <div class="right-section-div-20 flex-column">
          <span
            class="section-title-20 element-body-txt-20"
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
          <div
            class="body-section-div-20 flex-column element-body-txt-20"
            :class="this.lng.name === 'arabic' ? 'body-section-20-arabic' : ''"
            style="font-size: 14px"
          >
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-20"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-20 txt-bolder element-body-txt-20"
                  style="font-size: 15px"
                  >{{ work.jobTitle }} &nbsp;</span
                >
                <div class="work-body-div ms-2 me-2">
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
  </div>
</template>

<script>
export default {
  props: ["photoName", "resumeValues", "lng", "corner", "justPrint"],
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-20")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".section-div-20");
      let leftSectionsHeightsArray = [];
      leftSectionsHeights.forEach((element) => {
        leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let rightSectionsHeights = document.querySelectorAll(
        ".right-section-div-20"
      );
      let rightSectionsHeightsArray = [];
      rightSectionsHeights.forEach((element) => {
        rightSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let rightSectionsHeightsSum = rightSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let nameSectionHieghts = document
        .querySelector(".name-photo-job-title-intro-div")
        .getBoundingClientRect().height;

      rightSectionsHeightsSum = rightSectionsHeightsSum + nameSectionHieghts;
      leftSectionsHeightsSum = leftSectionsHeightsSum + nameSectionHieghts;
      let fontSizeHere = 15;

      while (
        rightSectionsHeightsSum > cvContainerHeight ||
        leftSectionsHeightsSum > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-20").forEach((el) => {
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
              //   console.log("enphe");
            } else {
              el.style.fontSize = `${
                Number(el.style.fontSize.split("")[0]) - 1
              }px`;
            }
          }
        });

        leftSectionsHeights = document.querySelectorAll(".section-div-20");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );

        rightSectionsHeights = document.querySelectorAll(
          ".right-section-div-20"
        );
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

        let nameSectionHieghts = document
          .querySelector(".name-photo-job-title-intro-div")
          .getBoundingClientRect().height;

        rightSectionsHeightsSum = rightSectionsHeightsSum + nameSectionHieghts;
        leftSectionsHeightsSum = leftSectionsHeightsSum + nameSectionHieghts;
        let pPwidth = document
          .querySelector(".personal-photo-div-20")
          .style.width.split("");
        pPwidth.pop();
        pPwidth.pop();
        pPwidth = Number(pPwidth.join("")) - 10;

        document.querySelector(
          ".personal-photo-div-20"
        ).style.width = `${pPwidth}px`;
      }
    },
    setPhoto() {
      let photoURL = localStorage.getItem("photo");
      if (photoURL) {
        document
          .querySelector(".personal-photo-20")
          .setAttribute("src", photoURL);
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    this.setPhoto();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-20");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-20-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-20-translate {
  transform: translateY(-3px);
}
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
.cv-container-div-20 {
  height: 100%;
  width: 100%;
  background-color: rgb(47, 47, 51);
  color: rgb(230, 230, 230);
}
.cv-container-div-20-font {
  font-family: "Tauri";
}
.cv-container-div-20-corner {
  border-radius: 15px;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.name-photo-job-title-intro-div {
  flex: 0.3;
  width: 100%;
}
.photo-container-div-20 {
  flex: 0.4;
  height: 100%;
  padding: 3px 3px 3px 3px;
}
.name-job-intro-div-20 {
  flex: 1;
  height: 100%;
  padding: 5px 10px 5px 10px;
}
.left-right-sections-20 {
  flex: 1;
  width: 100%;

  padding: 5px 0px 10px 0px;
}
.left-sections-20 {
  flex: 0.3;
  height: 100%;
  padding: 1px;
}
.right-sections-20 {
  flex: 1;
  height: 100%;
  padding: 1px;
}

.personal-photo-20 {
  border: 2px solid rgb(236, 236, 236);
  border-radius: 10px;
  height: 100%;
  width: 100%;
}
.section-div-20 {
  flex: 1;
  width: 100%;
  padding: 2px 10px 2px 10px;
}
.right-section-div-20 {
  flex: 1;
  width: 100%;
  padding: 2px 10px 2px 10px;
}
.section-title-20 {
  width: 100%;
}
.body-section-div-20 {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: start;
  padding: 0px 10px 0px 10px;
  border-left: 1px solid rgb(166, 84, 199);
  /* background-color: red; */
}
.body-section-20-arabic {
  border-left: none;
  border-right: 1px solid rgb(166, 84, 199);
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.txt-bolder {
  font-weight: bold;
}
.workExep-columns-div,
.skills-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  width: 100%;
}
.links-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2px;
  width: 100%;
}
</style>

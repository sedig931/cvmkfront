<template>
  <div
    class="cv-container-div-16 flex-row"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-16-font'
    "
  >
    <!-- ------------------------------LEFT SECTIONS--------------------------------------------- -->
    <!-- ------------------------------LEFT SECTIONS--------------------------------------------- -->
    <!-- ------------------------------LEFT SECTIONS--------------------------------------------- -->
    <div class="left-sections-div-16 flex-column">
      <div class="section-div-16 left-section-16 flex-column">
        <div
          class="body-div-16 flex-column personal-photo-body element-body-txt-16"
          style="font-size: 14px"
        >
          <div class="personal-photo-div-16" style="width: 150px">
            <img
              class="personal-photo personal-photo-16"
              alt=""
              :src="
                this.photoName
                  ? `${this.SERVER_URL}/${this.photoName}`
                  : `${this.SERVER_URL}/const-pic-cv-maker-cv-profile-4.png`
              "
            />
          </div>
        </div>
      </div>
      <div class="section-div-16 left-section-16 flex-column">
        <div
          class="title-div-16 flex-row element-body-txt-16"
          style="font-size: 16px"
        >
          <span
            class="title-section-span"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
            }}&nbsp;:&nbsp;</span
          >
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16"
          style="font-size: 14px"
        >
          <div class="single-contact flex-row">
            <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
            <span class="tranlate-me-16">
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
            <span class="tranlate-me-16">{{
              this.resumeValues.email
                ? this.resumeValues.email
                : "email@mail.com"
            }}</span>
          </div>
          <div class="single-contact flex-row">
            <i class="bi bi-telephone-fill ms-1 me-1"></i>
            <span class="tranlate-me-16">{{
              this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
            }}</span>
          </div>
        </div>
      </div>
      <div class="section-div-16 left-section-16 flex-column">
        <div class="title-div-16 flex-row">
          <span
            class="title-section-span element-body-txt-16"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.languages + " "
            }}&nbsp;:&nbsp;
          </span>
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16 last-section"
          style="font-size: 14px"
        >
          <div>
            <span class="element-body-txt-16" style="font-size: 14px">
              {{
                this.resumeValues.langsForm.princ.name
                  ? this.resumeValues.langsForm.princ.name
                  : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
              }}&nbsp;
            </span>
            <span class="dots-span element-body-txt-16" style="font-size: 11px">
              ---------
            </span>
            <span class="element-body-txt-16" style="font-size: 14px">
              {{
                this.resumeValues.langsForm.princ.level
                  ? this.resumeValues.langsForm.princ.level
                  : this.lng.lang.section2.getCvInfo.frame.linguisticLevel
              }}&nbsp;
            </span>
          </div>
          <div v-for="(lang, i) in this.resumeValues.langsForm.childs" :key="i">
            <span class="element-body-txt-16" style="font-size: 14px">
              {{ lang.name }}&nbsp;
            </span>
            <span class="dots-span element-body-txt-16" style="font-size: 11px">
              ---------
            </span>
            <span class="element-body-txt-16" style="font-size: 14px">
              {{ lang.level }}&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------RIGHT SECTIONS--------------------------------------------- -->
    <!-- ------------------------------RIGHT SECTIONS--------------------------------------------- -->
    <!-- ------------------------------RIGHT SECTIONS--------------------------------------------- -->
    <div
      class="right-sections-div-16 flex-column"
      :class="this.lng.name === 'arabic' ? 'right-sections-div-16-arabic' : ''"
    >
      <div
        class="section-div-16 right-section-16 name-job-title-div flex-column text-center"
      >
        <span
          class="name-span element-body-txt-16"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 23px"
        >
          {{
            this.resumeValues.fullName
              ? this.resumeValues.fullName
              : this.lng.lang.section2.getCvInfo.frame.fullName
          }}&nbsp;</span
        >
        <span
          class="job-title-span element-body-txt-16"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
          "
          style="font-size: 18px"
        >
          {{
            this.resumeValues.jobTitle
              ? this.resumeValues.jobTitle
              : this.lng.lang.section2.getCvInfo.frame.jobTitle
          }}&nbsp;</span
        >
      </div>
      <div class="section-div-16 right-section-16 flex-column">
        <div class="title-div-16">
          <span
            class="title-section-span element-body-txt-16"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
            }}&nbsp;:&nbsp;
          </span>
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16"
          style="font-size: 14px"
        >
          <p class="m-0 p-0">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}&nbsp;
          </p>
          <div class="general-info-div flex-row">
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
      </div>
      <div class="section-div-16 right-section-16 flex-column">
        <div class="title-div-16">
          <span
            class="title-section-span element-body-txt-16"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.education + " "
            }}&nbsp;
          </span>
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16"
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

      <div
        class="section-div-16 right-section-16 flex-column"
        v-if="this.resumeValues.workExpForm[0].jobTitle"
      >
        <div class="title-div-16">
          <span
            class="title-section-span element-body-txt-16"
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
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16"
          style="font-size: 14px"
        >
          <div class="workExep-columns-div">
            <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
              <i
                class="bi bi-briefcase-fill m-1 element-body-txt-16"
                style="font-size: 15px"
              ></i>
              <span
                class="tranlate-me-16 txt-bolder element-body-txt-16"
                style="font-size: 15px"
                >{{ work.jobTitle }}&nbsp;</span
              >
              <div class="work-body-div ms-2 me-2 element-body-txt-16">
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
      </div>
      <div
        class="section-div-16 right-section-16 flex-column"
        v-if="this.resumeValues.webLinks.princ.webTitle"
      >
        <div class="title-div-16">
          <span
            class="title-section-span element-body-txt-16"
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
        </div>
        <div
          class="body-div-16 flex-column element-body-txt-16"
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
      <div class="section-div-16 right-section-16 flex-column">
        <div class="title-div-16">
          <span
            class="title-section-span element-body-txt-16"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            {{
              this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
            }}&nbsp;:&nbsp;
          </span>
        </div>

        <div
          class="body-div-16 flex-column element-body-txt-16 last-section"
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
  </div>
</template>

<script>
export default {
  props: ["lng", "resumeValues", "photoName", "justPrint"],
  data() {
    return {
      // SERVER_URL: "http://localhost:300/uploads",
      SERVER_URL: "https://serve.samdtc931.com/uploads/cvmk",
    };
  },
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-16")
        .getBoundingClientRect().height;

      let sectionsHeights = document.querySelectorAll(".right-section-16");
      let sectionsHeightsArray = [];
      sectionsHeights.forEach((element) => {
        sectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let sectionsHeightsSum = sectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let leftSectionsHeights = document.querySelectorAll(".left-section-16");
      let leftSectionsHeightsArray = [];
      leftSectionsHeights.forEach((element) => {
        leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );
      let fontSizeHere = 15;

      while (
        sectionsHeightsSum > cvContainerHeight ||
        leftSectionsHeightsSum > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-16").forEach((el) => {
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
        sectionsHeights = document.querySelectorAll(".right-section-16");
        sectionsHeightsArray = [];
        sectionsHeights.forEach((element) => {
          sectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        sectionsHeightsSum = sectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );

        leftSectionsHeights = document.querySelectorAll(".right-section-16");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );

        let pPwidth = document
          .querySelector(".personal-photo-div-16")
          .style.width.split("");
        pPwidth.pop();
        pPwidth.pop();
        pPwidth = Number(pPwidth.join("")) - 10;

        document.querySelector(
          ".personal-photo-div-16"
        ).style.width = `${pPwidth}px`;
      }
    },
    setPhoto() {
      let photoURL = localStorage.getItem("photo");
      if (photoURL) {
        document
          .querySelector(".personal-photo-16")
          .setAttribute("src", photoURL);
      }
      if (this.justPrint && this.lng.name === "arabic") {
        const allSectionsTitle = document.querySelectorAll(".tranlate-me-16");
        allSectionsTitle.forEach((title) => {
          title.classList.add("section-title-txt-16-translate");
        });
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    this.setPhoto();
  },
};
</script>

<style scoped>
.section-title-txt-16-translate {
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
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.cv-container-div-16 {
  height: 100%;
  width: 100%;
}
.cv-container-div-16-font {
  font-family: "Tauri";
}
.left-sections-div-16 {
  flex: 0.4;
  height: 100%;
}
.title-div-16 {
  width: 100%;
  justify-content: start;
}
.right-sections-div-16 {
  flex: 1;
  height: 100%;
  border-left: 0.5px solid rgb(180, 180, 180);
}
.right-sections-div-16-arabic {
  border-left: none;
  border-right: 0.5px solid rgb(180, 180, 180);
}
.section-div-16 {
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  padding: 2px 5px 0px 5px;
}
.body-div-16 {
  width: 100%;
  height: 100%;
  padding: 2px 10px 0px 10px;
  align-items: start;
  justify-content: space-evenly;
  border-bottom: 0.5px solid rgb(180, 180, 180);
}
.last-section {
  border: none;
}
.name-job-title-div {
  flex: 0.3;
  justify-content: center;
}
.name-span {
  padding-bottom: 3px;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.txt-bolder {
  font-weight: bold;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.general-info-div,
.skills-outer-div,
.links-outer-div {
  width: 100%;
}
.skills-columns-grid-div,
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  width: 90%;
}
.work-body-div {
  align-items: start;
  padding: 0 20px 0 20px;
}
.personal-photo-body {
  align-items: center;
}

.personal-photo {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
</style>

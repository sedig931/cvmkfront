<template>
  <div
    class="cv-container-div-17 flex-column"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-17-font'
    "
  >
    <div
      class="name-photo-section-div-17 flex-row"
      :class="this.corner ? 'corner-name-photo-section-div-17' : ''"
    >
      <div class="left-photo-section-17 flex-column">
        <div class="personal-photo-div-17" style="width: 150px">
          <img
            class="personal-photo personal-photo-17"
            alt=""
            :src="
              this.photoName
                ? `http://localhost:300/uploads/${this.photoName}`
                : 'http://localhost:300/uploads/const-pic-cv-maker-cv-profile-1.png'
            "
          />
        </div>
      </div>
      <div class="right-name-title-section-17 flex-row">
        <div class="right-body-section-17 flex-column">
          <div
            class="name-job-div-17 flex-column"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
          >
            <span
              class="element-body-txt-17 text-center"
              style="font-size: 23px"
            >
              {{
                this.resumeValues.fullName
                  ? this.resumeValues.fullName
                  : this.lng.lang.section2.getCvInfo.frame.fullName
              }}&nbsp;
            </span>
            <span
              class="element-body-txt-17 text-center"
              style="font-size: 18px"
            >
              {{
                this.resumeValues.jobTitle
                  ? this.resumeValues.jobTitle
                  : this.lng.lang.section2.getCvInfo.frame.jobTitle
              }}&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="sections-container-div-17 flex-row">
      <div class="left-sections-17 flex-column">
        <div class="left-section-17 flex-column">
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.contacts + " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
            style="font-size: 14px"
          >
            <div class="single-contact flex-row">
              <i class="bi bi-geo-alt-fill m-1"></i>
              <span class="tranlate-me-17">
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
              <i class="bi bi-envelope-at-fill m-1"></i>
              <span class="tranlate-me-17">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div class="single-contact flex-row">
              <i class="bi bi-telephone-fill m-1"></i>
              <span class="tranlate-me-17">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="left-section-17 flex-column"
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
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
            class="section-body-17 element-body-txt-17 flex-column"
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
        <div class="left-section-17 flex-column">
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.languages +
                " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
            style="font-size: 14px"
          >
            <div>
              <span class="element-body-txt-17" style="font-size: 14px">
                {{
                  this.resumeValues.langsForm.princ.name
                    ? this.resumeValues.langsForm.princ.name
                    : this.lng.lang.section2.getCvInfo.frame.nativeLanguage
                }}&nbsp;
              </span>
              <span
                class="dots-span element-body-txt-17"
                style="font-size: 11px"
              >
                ---------
              </span>
              <span class="element-body-txt-17" style="font-size: 14px">
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
              <span class="element-body-txt-17" style="font-size: 14px">
                {{ lang.name }}&nbsp;
              </span>
              <span
                class="dots-span element-body-txt-17"
                style="font-size: 11px"
              >
                ---------
              </span>
              <span class="element-body-txt-17" style="font-size: 14px">
                {{ lang.level }}&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <!-- -------------------------RIGHTS SECTIONS--------------------------------------------- -->
      <div class="right-sections-17 flex-column">
        <div class="right-section-17 flex-column">
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
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
        <div class="right-section-17 flex-column">
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.education +
                " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
            style="font-size: 14px"
          >
            <div>
              <span
                >{{
                  this.lng.lang.section2.getCvInfo.frame.degreeOf + " "
                }}&nbsp;</span
              >
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
        <div
          class="right-section-17 flex-column"
          v-if="this.resumeValues.workExpForm[0].jobTitle"
        >
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle
                  .workExeperince + " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
            style="font-size: 14px"
          >
            <div class="workExep-columns-div">
              <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
                <i
                  class="bi bi-briefcase-fill m-1 element-body-txt-17"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-17 txt-bolder element-body-txt-17"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div class="work-body-div ms-2 me-2 element-body-txt-17">
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
        <div class="right-section-17 flex-column">
          <div class="section-title-div-17">
            <span
              class="section-title-17 element-body-txt-17"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
              }}&nbsp;
            </span>
          </div>
          <div
            class="section-body-17 element-body-txt-17 flex-column"
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
        <!-- ----------------------LAST ONE------------------------------ -->
        <!-- ----------------------LAST ONE------------------------------ -->
        <!-- ----------------------LAST ONE------------------------------ -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resumeValues", "lng", "photoName", "corner", "justPrint"],
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-17")
        .getBoundingClientRect().height;

      let sectionsContainerHeights = document
        .querySelector(".sections-container-div-17")
        .getBoundingClientRect().height;
      let nameContainerHeight = document
        .querySelector(".name-photo-section-div-17")
        .getBoundingClientRect().height;

      let fontSizeHere = 15;

      while (
        sectionsContainerHeights + nameContainerHeight >
        cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-17").forEach((el) => {
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
            } else {
              el.style.fontSize = `${
                Number(el.style.fontSize.split("")[0]) - 1
              }px`;
            }
          }
        });
        sectionsContainerHeights = document
          .querySelector(".sections-container-div-17")
          .getBoundingClientRect().height;
        nameContainerHeight = document
          .querySelector(".name-photo-section-div-17")
          .getBoundingClientRect().height;

        let pPwidth = document
          .querySelector(".personal-photo-div-17")
          .style.width.split("");
        pPwidth.pop();
        pPwidth.pop();
        pPwidth = Number(pPwidth.join("")) - 10;

        document.querySelector(
          ".personal-photo-div-17"
        ).style.width = `${pPwidth}px`;
      }
    },
    setPhoto() {
      let photoURL = localStorage.getItem("photo");
      if (photoURL) {
        document
          .querySelector(".personal-photo-17")
          .setAttribute("src", photoURL);
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    this.setPhoto();
    if (this.justPrint && this.lng.name === "arabic") {
      console.log("17");

      const allSectionsTitle = document.querySelectorAll(".tranlate-me-17");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-17-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-17-translate {
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
.cv-container-div-17 {
  height: 100%;
  width: 100%;
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.cv-container-div-17-font {
  font-family: "Tauri";
}
.name-photo-section-div-17 {
  flex: 0.1;
  width: 100%;
  background-color: rgb(218, 210, 100);
}
.corner-name-photo-section-div-17 {
  border-radius: 15px 15px 0 0;
}
.left-photo-section-17 {
  flex: 0.4;
  /* align-items: end; */
  padding: 5px;
}
.personal-photo-17 {
  border: 2px solid white;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
.right-name-title-section-17 {
  flex: 1;
  height: 100%;
}
.sections-container-div-17 {
  flex: 1;
  width: 100%;
  padding-bottom: 3px;
}
.left-sections-17 {
  flex: 0.4;
  height: 100%;
}
.left-section-17 {
  flex: 1;
  width: 100%;
  /* border: 1px solid; */
  padding: 0px 10px 0px 10px;
}
.right-sections-17 {
  flex: 1;
  height: 100%;
}
.right-section-17 {
  flex: 1;
  width: 100%;
  /* border: 1px solid; */
  padding: 0px 10px 0px 10px;
}
.section-title-div-17 {
  width: 100%;
  padding: 5px 0 5px 0;
}
.section-title-17 {
  display: block;
  background-color: rgb(218, 210, 100);
  width: 100%;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
}
.section-body-17 {
  width: 100%;
  height: 100%;
  padding: 3px 10px 3px 10px;
  justify-content: space-evenly;
  align-items: start;
  /* border: 1px solid white; */
  /* background-color: rgb(218, 210, 100); */
  border-radius: 10px;
  border: 1.555px solid;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.general-info-div {
  width: 100%;
  /* background-color: red; */
  padding-top: 3px;
}
.skills-outer-div,
.links-outer-div {
  width: 100%;
  /* align-items: start; */
}
.txt-bolder {
  font-weight: bold;
}
.skills-columns-grid-div,
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  width: 90%;
}
</style>

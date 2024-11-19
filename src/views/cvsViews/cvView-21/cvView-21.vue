<template>
  <div
    class="cv-container-div-21 flex-row"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-21-font'
    "
  >
    <div
      class="left-sections-21 flex-column"
      :class="this.lng.name === 'arabic' ? 'left-sections-21-arabic' : ''"
    >
      <div class="inner-left-sections-21 flex-column">
        <div class="photo-container-div-21 flex-row">
          <div class="personal-photo-div-21" style="height: 150px">
            <img
              class="personal-photo personal-photo-21"
              alt=""
              :src="
                this.photoName
                  ? `${this.SERVER_URL}/${this.photoName}`
                  : `${this.SERVER_URL}/const-pic-cv-maker-cv-profile-5.png`
              "
            />
          </div>
        </div>
        <div class="left-section-21 flex-column">
          <div class="section-title-div-21">
            <span
              class="left-section-title-21 element-body-txt-21"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 15px"
            >
              <span class="tranlate-me-21">
                {{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle
                    .websiteLinks + " "
                }}&nbsp;
              </span>
            </span>
          </div>
          <div
            class="section-body-div-21 flex-column element-body-txt-21"
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
        <div class="left-section-21 flex-column">
          <div class="section-title-div-21">
            <span
              class="left-section-title-21 element-body-txt-21"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 15px"
            >
              <span class="tranlate-me-21">
                {{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.skills + " "
                }}&nbsp;
              </span>
            </span>
          </div>
          <div
            class="section-body-div-21 flex-column element-body-txt-21"
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
        <div class="left-section-21 flex-column">
          <div class="section-title-div-21">
            <span
              class="left-section-title-21 element-body-txt-21"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 15px"
            >
              <span class="tranlate-me-21">
                {{ this.lng.lang.section2.getCvInfo.frame.mainTitle.languages }}
              </span>
            </span>
          </div>
          <div
            class="section-body-div-21 left-section-body flex-column element-body-txt-21"
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
                class="dots-span element-body-txt-21"
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
                class="dots-span element-body-txt-21"
                style="font-size: 11px"
              >
                _____
              </span>
              <span> {{ lang.level }}&nbsp; </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-sections-21 flex-column">
      <div
        class="right-section-21 name-job-section flex-column text-center"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
        "
      >
        <span class="element-body-txt-21" style="font-size: 23px">
          {{
            this.resumeValues.fullName
              ? this.resumeValues.fullName
              : this.lng.lang.section2.getCvInfo.frame.fullName
          }}&nbsp;
        </span>
        <span class="element-body-txt-21" style="font-size: 18px">
          {{
            this.resumeValues.jobTitle
              ? this.resumeValues.jobTitle
              : this.lng.lang.section2.getCvInfo.frame.jobTitle
          }}&nbsp;
        </span>
      </div>
      <div class="right-section-21 flex-column">
        <div class="section-title-div-21">
          <span
            class="section-title-21 element-body-txt-21"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-21">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.details + " "
              }}&nbsp;
            </span>
          </span>
        </div>
        <div
          class="section-body-div-21 flex-column element-body-txt-21"
          style="font-size: 14px"
        >
          <p class="m-0 p-0">
            {{
              this.resumeValues.introParagraph
                ? this.resumeValues.introParagraph
                : this.lng.lang.section2.getCvInfo.frame.intro
            }}&nbsp;
          </p>
          <div class="personal-info-div columns-grid-div">
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
            <span>{{
              this.lng.lang.section2.getCvInfo.frame.birthDate +
              " : " +
              `${
                this.resumeValues.dateOfBirth.day
                  ? String(this.resumeValues.dateOfBirth.day).padStart(2, 0)
                  : "dd"
              }` +
              "/" +
              `${
                this.resumeValues.dateOfBirth.month
                  ? String(this.resumeValues.dateOfBirth.month).padStart(2, 0)
                  : "mm"
              }` +
              "/" +
              `${
                this.resumeValues.dateOfBirth.year
                  ? String(this.resumeValues.dateOfBirth.year).padStart(2, 0)
                  : "yy"
              }`
            }}</span>
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
      <div class="right-section-21 flex-column">
        <div class="section-title-div-21">
          <span
            class="section-title-21 element-body-txt-21"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-21">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.education +
                " "
              }}&nbsp;
            </span>
          </span>
        </div>
        <div
          class="section-body-div-21 flex-column element-body-txt-21"
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
      <div class="right-section-21 flex-column">
        <div class="section-title-div-21">
          <span
            class="section-title-21 element-body-txt-21"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'name-job-title-font'
            "
            style="font-size: 16px"
          >
            <span class="tranlate-me-21">
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle
                  .workExeperince + " "
              }}&nbsp;
            </span>
          </span>
        </div>
        <div
          class="section-body-div-21 flex-column element-body-txt-21"
          style="font-size: 14px"
        >
          <div class="workExep-columns-div">
            <div v-for="(work, i) in this.resumeValues.workExpForm" :key="i">
              <i
                class="bi bi-briefcase-fill m-1 element-body-txt-21"
                style="font-size: 15px"
              ></i>
              <span
                class="tranlate-me-21 txt-bolder element-body-txt-21"
                style="font-size: 15px"
                >{{ work.jobTitle }}&nbsp;</span
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
      <div class="right-section-21 contacts-section flex-column">
        <div
          class="section-body-div-21 flex-column element-body-txt-21"
          style="font-size: 12px"
        >
          <div class="contacts-div flex-row">
            <div
              class="single-contact flex-row"
              :class="this.lng.name === 'arabic' ? 'single-contact-arabic' : ''"
            >
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-21">
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
            <div
              class="single-contact flex-row"
              :class="this.lng.name === 'arabic' ? 'single-contact-arabic' : ''"
            >
              <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
              <span class="tranlate-me-21">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
            <div
              class="single-contact flex-row"
              :class="this.lng.name === 'arabic' ? 'single-contact-arabic' : ''"
            >
              <i class="bi bi-telephone-fill ms-1 me-1"></i>
              <span class="tranlate-me-21">{{
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
  props: ["lng", "resumeValues", "photoName", "justPrint"],
  data() {
    return {
      // SERVER_URL: "http://localhost:300/uploads",
      SERVER_URL: "https://salesprojectb23.netlify.app/uploads/cvmk",
    };
  },
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-21")
        .getBoundingClientRect().height;

      let leftSectionsHeights = document.querySelectorAll(".left-section-21");
      let leftSectionsHeightsArray = [];
      leftSectionsHeights.forEach((element) => {
        leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );
      let photoSection = document
        .querySelector(".photo-container-div-21")
        .getBoundingClientRect().height;
      leftSectionsHeightsSum = leftSectionsHeightsSum + photoSection;

      let rightSectionsHeights = document.querySelectorAll(".right-section-21");
      let rightSectionsHeightsArray = [];
      rightSectionsHeights.forEach((element) => {
        rightSectionsHeightsArray.push(element.getBoundingClientRect().height);
      });
      let rightSectionsHeightsSum = rightSectionsHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let fontSizeHere = 15;

      while (
        rightSectionsHeightsSum > cvContainerHeight ||
        leftSectionsHeightsSum > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-21").forEach((el) => {
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

        leftSectionsHeights = document.querySelectorAll(".left-section-21");
        leftSectionsHeightsArray = [];
        leftSectionsHeights.forEach((element) => {
          leftSectionsHeightsArray.push(element.getBoundingClientRect().height);
        });
        leftSectionsHeightsSum = leftSectionsHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );
        photoSection = document
          .querySelector(".photo-container-div-21")
          .getBoundingClientRect().height;
        leftSectionsHeightsSum = leftSectionsHeightsSum + photoSection;

        rightSectionsHeights = document.querySelectorAll(".right-section-21");
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
        let pPwidth = document
          .querySelector(".personal-photo-div-21")
          .style.height.split("");
        pPwidth.pop();
        pPwidth.pop();
        pPwidth = Number(pPwidth.join("")) - 10;

        document.querySelector(
          ".personal-photo-div-21"
        ).style.height = `${pPwidth}px`;
      }
    },
    setPhoto() {
      let photoURL = localStorage.getItem("photo");
      if (photoURL) {
        document
          .querySelector(".personal-photo-21")
          .setAttribute("src", photoURL);
      }
    },
  },
  mounted() {
    this.checkContainersSize();
    this.setPhoto();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-21");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-21-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-21-translate {
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
.name-job-title-font {
  font-family: "Tilt Warp";
}
.cv-container-div-21 {
  height: 100%;
  width: 100%;
  padding: 5px 0 0px 0;
}
.cv-container-div-21-font {
  font-family: "Tauri";
}
.left-sections-21 {
  flex: 0.4;
  height: 100%;
  padding: 0px 0px 0px 20px;
}
.left-sections-21-arabic {
  padding: 0px 20px 0px 0px;
}
.inner-left-sections-21 {
  flex: 1;
  width: 100%;
  border-radius: 50px 50px 0px 0px;
  background-color: rgb(54, 93, 100);
}
.right-sections-21 {
  flex: 1;
  height: 100%;
}
.left-section-21,
.right-section-21 {
  flex: 1;
  width: 100%;
  padding: 2px 10px 0px 10px;
}
.name-job-section {
  flex: 0.2;
  justify-content: space-evenly;
}
.section-title-21 {
  padding: 2px 10px 2px 10px;
  background-color: rgb(54, 93, 100);
  border-radius: 7px 0 7px 0;
  color: white;
}
.left-section-title-21 {
  padding: 2px 10px 2px 10px;
  background-color: white;
  border-radius: 7px 0 7px 0;
  color: rgb(54, 93, 100);
}
.section-title-div-21 {
  width: 100%;
}
.section-body-div-21 {
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: space-evenly;
  padding: 2px 10px 2px 10px;
}
.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.personal-info-div {
  padding-top: 10px;
}
.txt-bolder {
  font-weight: bold;
}
.workExep-columns-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  width: 100%;
}
.contacts-section {
  flex: 0.1;
}
.contacts-div {
  width: 100%;
  justify-content: space-evenly;
}
.single-contact {
  padding: 3px 10px 3px 3px;
  background-color: rgb(54, 93, 100);
  border-radius: 7px;
  margin: 2px;
  color: white;
}
.single-contact-arabic {
  padding: 3px 3px 3px 10px;
}
.skills-columns-grid-div,
.links-columns-grid-div {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2px;
  width: 100%;
  color: white;
}

.anchors {
  color: rgb(243, 243, 243);
}
.left-section-body {
  color: white;
}
.photo-container-div-21 {
  width: 100%;
  padding: 5px 0 5px 0;
}
.personal-photo-21 {
  border: 2px solid rgb(236, 236, 236);
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
</style>

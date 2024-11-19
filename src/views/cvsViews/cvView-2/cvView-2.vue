<template>
  <div class="window-page-div flex-row">
    <div
      class="cv-container-div-2 flex-row"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'cv-container-div-2-font'
      "
    >
      <div class="left-column-div flex-column">
        <div class="name-div left-element-div-2 flex-row">
          <div class="body-container-div">
            <div
              class="name-txt-div"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
            >
              <span class="name-span element-body-txt-2" style="font-size: 20px"
                >{{
                  this.resumeValues.fullName
                    ? this.resumeValues.fullName
                    : this.lng.lang.section2.getCvInfo.frame.fullName
                }}&nbsp;
              </span>
            </div>
            <div
              class="row-general-info-div flex-row element-body-txt-2"
              style="font-size: 12px"
            >
              <div>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.nationality + " "
                  }}&nbsp;</span
                >
                <span class="under-line-span">:</span>
                <span>
                  {{
                    this.resumeValues.nationality
                      ? this.resumeValues.nationality
                      : this.lng.lang.section2.getCvInfo.frame.nationality
                  }}
                </span>
              </div>
              <div>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }}&nbsp;</span
                >
                <span class="under-line-span"> : </span>
                <span>
                  {{
                    this.resumeValues.placeOfBirth
                      ? this.resumeValues.placeOfBirth
                      : this.lng.lang.section2.getCvInfo.frame.placeBirth
                  }}&nbsp;
                </span>
              </div>
            </div>
            <div
              class="row-general-info-div flex-row element-body-txt-2"
              style="font-size: 12px"
            >
              <div>
                <span>{{ this.lng.lang.section2.getCvInfo.frame.gender }}</span>
                <span class="under-line-span"> : </span>
                <span>
                  {{
                    this.resumeValues.gender
                      ? this.resumeValues.gender
                      : this.lng.lang.section2.getCvInfo.frame.gender
                  }}
                </span>
              </div>
              <div>
                <span>
                  {{
                    this.lng.lang.section2.getCvInfo.frame.materialStatus
                  }}&nbsp;</span
                >
                <span class="under-line-span"> : </span>
                <span>
                  {{
                    this.resumeValues.relationship
                      ? this.resumeValues.relationship
                      : this.lng.lang.section2.getCvInfo.frame.materialStatus
                  }}
                </span>
              </div>
            </div>
            <div
              class="row-general-info-div flex-row element-body-txt-2"
              style="font-size: 12px"
            >
              <div>
                <span
                  >{{
                    this.lng.lang.section2.getCvInfo.frame.birthDate
                  }}&nbsp;</span
                >
                <span class="under-line-span"> : </span>
                <span>
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
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="details-div left-element-div-2 flex-row">
          <div class="body-container-div">
            <div class="title-txt-xx-div">
              <span
                class="title-txt-xx element-body-txt-2"
                :class="
                  this.lng.name === 'arabic'
                    ? 'arabic-font'
                    : 'name-job-title-font'
                "
                style="font-size: 16px"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.details
                }}&nbsp;</span
              >
            </div>

            <div class="job-title-name-div">
              <span
                class="title-txt-xx job-title-name-txt element-body-txt-2"
                :class="
                  this.lng.name === 'arabic'
                    ? 'arabic-font'
                    : 'name-job-title-font'
                "
                style="font-size: 18px"
                >{{
                  this.resumeValues.jobTitle
                    ? this.resumeValues.jobTitle
                    : this.lng.lang.section2.getCvInfo.frame.jobTitle
                }}&nbsp;</span
              >
            </div>
            <div class="section-body-txt">
              <span class="element-body-txt-2" style="font-size: 14px"
                >{{
                  this.resumeValues.introParagraph
                    ? this.resumeValues.introParagraph
                    : this.lng.lang.section2.getCvInfo.frame.intro
                }}&nbsp;
              </span>
            </div>
          </div>
        </div>
        <div class="education-div left-element-div-2 flex-row">
          <div class="body-container-div">
            <div class="title-txt-xx-div">
              <span
                class="title-txt-xx element-body-txt-2"
                :class="
                  this.lng.name === 'arabic'
                    ? 'arabic-font'
                    : 'name-job-title-font'
                "
                style="font-size: 16px"
                >{{
                  this.lng.lang.section2.getCvInfo.frame.mainTitle.education
                }}</span
              >
            </div>
            <div>
              <span class="element-body-txt-2" style="font-size: 14px">
                {{ this.lng.lang.section2.getCvInfo.frame.degreeOf + " " }}
              </span>
              <span
                class="title-txt element-body-txt-2"
                style="font-size: 14px"
              >
                {{
                  this.resumeValues.eduForm.eduDegree
                    ? this.resumeValues.eduForm.eduDegree
                    : this.lng.lang.section2.getCvInfo.frame.educationDegree
                }}&nbsp;</span
              >
              <span class="element-body-txt-2" style="font-size: 14px">
                {{
                  " " +
                  `${
                    this.resumeValues.eduForm.uniName
                      ? this.resumeValues.eduForm.uniName
                      : this.lng.lang.section2.getCvInfo.frame.universityName +
                        "."
                  }`
                }}&nbsp;
              </span>
            </div>
            <div class="gradu-date-div">
              <span class="element-body-txt-2" style="font-size: 14px">{{
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
              class="edu-discription-div element-body-txt-2"
              style="font-size: 14px"
              v-if="this.resumeValues.eduForm.eduDiscreption"
            >
              <p class="m-0 p-0">
                <span> {{ this.resumeValues.eduForm.eduDiscreption }} </span
                >&nbsp;
              </p>
            </div>
            <div
              class="thesis-topic-div"
              v-if="this.resumeValues.eduForm.thesis"
            >
              <span
                class="title-txt element-body-txt-2"
                style="font-size: 14px"
              >
                {{
                  this.lng.lang.section2.getCvInfo.frame.thesisTopic + " "
                }}&nbsp;:
              </span>
              <span class="element-body-txt-2" style="font-size: 14px">
                {{ this.resumeValues.eduForm.thesis }}&nbsp;
              </span>
            </div>
            <div
              class="courses-div"
              v-if="this.resumeValues.coursesForm[0].courseTitle"
            >
              <span
                class="title-txt element-body-txt-2"
                style="font-size: 14px"
              >
                {{
                  this.lng.lang.section2.getCvInfo.frame.courses + " "
                }}&nbsp;:
              </span>
              <span
                class="element-body-txt-2"
                style="font-size: 14px"
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
        <div class="last-section left-element-div-2 flex-row">
          <div class="body-container-div">
            <span
              class="element-body-txt-2 title-txt-xx"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
              >{{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.languages
              }}</span
            >
            <div class="element-body-txt-2" style="font-size: 14px">
              <ul>
                <li>
                  <span
                    >{{
                      this.resumeValues.langsForm.princ.name
                        ? this.resumeValues.langsForm.princ.name + " "
                        : this.lng.lang.section2.getCvInfo.frame
                            .nativeLanguage + " "
                    }}&nbsp;
                  </span>
                  <span class="under-line-span"> : </span>
                  <span
                    >{{
                      this.resumeValues.langsForm.princ.level
                        ? this.resumeValues.langsForm.princ.level + " "
                        : this.lng.lang.section2.getCvInfo.frame
                            .linguisticLevel + " "
                    }}&nbsp;</span
                  >
                </li>
                <li
                  v-for="(lang, i) in this.resumeValues.langsForm.childs"
                  :key="i"
                >
                  <span>{{ lang.name + " " }}&nbsp; </span>
                  <span class="under-line-span"> : </span>
                  <span>{{ lang.level }}&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="right-column-div flex-column">
        <div class="right-element-div-2 flex-row">
          <div class="body-container-div flex-column">
            <div class="personal-photo-div-2" style="width: 150px">
              <img
                class="personal-photo personal-photo-2"
                alt=""
                :src="
                  this.photoName
                    ? `${this.SERVER_URL}/${this.photoName}`
                    : `${this.SERVER_URL}/const-pic-cv-maker-cv-profile-3.png`
                "
              />
            </div>
          </div>
        </div>
        <div class="contacts-div right-element-div-2 flex-row">
          <div
            class="body-container-div flex-column contacts-body-container element-body-txt-2"
            style="font-size: 13px"
          >
            <div class="single-contacts">
              <i class="bi bi-geo-alt-fill ms-1 me-1"></i>
              <span class="tranlate-me-2">
                <span>
                  {{
                    `${
                      this.resumeValues.address.city
                        ? this.resumeValues.address.city + " - "
                        : this.lng.lang.section2.getCvInfo.frame.city + " - "
                    }`
                  }}&nbsp;
                </span>

                {{
                  `${
                    this.resumeValues.address.country
                      ? this.resumeValues.address.country
                      : this.lng.lang.section2.getCvInfo.frame.country
                  }`
                }}&nbsp;
              </span>
            </div>
            <div class="single-contacts">
              <i class="bi bi-telephone-fill ms-1 me-1"></i>

              <span class="tranlate-me-2">{{
                this.resumeValues.phone ? this.resumeValues.phone : "0123456789"
              }}</span>
            </div>
            <div class="single-contacts">
              <i class="bi bi-envelope-at-fill ms-1 me-1"></i>
              <span class="tranlate-me-2">{{
                this.resumeValues.email
                  ? this.resumeValues.email
                  : "email@mail.com"
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="experience-div right-element-div-2 flex-row"
          v-if="this.resumeValues.workExpForm[0].jobTitle"
        >
          <div class="body-container-div">
            <span
              class="element-body-txt-2 title-txt-xx"
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
              }}&nbsp;</span
            >
            <div class="columns-grid-div">
              <div
                class="worExep-div"
                v-for="(work, i) in this.resumeValues.workExpForm"
                :key="i"
              >
                <i
                  class="element-body-txt-2 bi bi-briefcase-fill m-1"
                  style="font-size: 15px"
                ></i>
                <span
                  class="tranlate-me-2 title-txt element-body-txt-2"
                  style="font-size: 15px"
                  >{{ work.jobTitle }}&nbsp;</span
                >
                <div class="work-body-div ms-3 flex-column">
                  <span class="element-body-txt-2" style="font-size: 14px">
                    {{ work.address }}&nbsp;</span
                  >
                  <span
                    class="element-body-txt-2"
                    style="font-size: 14px"
                    v-if="this.resumeValues.workExpForm[i].workDate.from.month"
                  >
                    {{
                      work.workDate.from.month +
                      " " +
                      work.workDate.from.year +
                      " - " +
                      work.workDate.to.month +
                      " " +
                      work.workDate.to.year
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="languages-div right-element-div-2 flex-row">
          <div class="body-container-div">
            <span
              class="title-txt-xx element-body-txt-2"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
              >{{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.skills
              }}</span
            >
            <div class="element-body-txt-2" style="font-size: 14px">
              <ul>
                <li>
                  {{
                    this.resumeValues.skillsForm.princ.name
                      ? this.resumeValues.skillsForm.princ.name
                      : this.lng.lang.section2.getCvInfo.frame.addSkill
                  }}&nbsp;
                </li>
                <li
                  v-for="(skill, i) in this.resumeValues.skillsForm.childs"
                  :key="i"
                >
                  {{ skill.name }}&nbsp;
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="right-element-div-2 flex-row"
          v-if="this.resumeValues.webLinks.princ.webTitle"
        >
          <div class="body-container-div">
            <span
              class="element-body-txt-2 title-txt-xx"
              :class="
                this.lng.name === 'arabic'
                  ? 'arabic-font'
                  : 'name-job-title-font'
              "
              style="font-size: 16px"
            >
              {{
                this.lng.lang.section2.getCvInfo.frame.mainTitle.websiteLinks
              }}</span
            >
            <div class="element-body-txt-2" style="font-size: 14px">
              <ul>
                <li>
                  <a
                    class="anchors"
                    :href="this.resumeValues.webLinks.princ.webHref"
                    >{{ this.resumeValues.webLinks.princ.webTitle }}&nbsp;</a
                  >
                </li>

                <li
                  v-for="(link, i) in this.resumeValues.webLinks.childs"
                  :key="i"
                >
                  <a class="anchors" :href="link.webHref"
                    >{{ link.webTitle }}&nbsp;</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["corner", "resumeValues", "lng", "photoName", "justPrint"],
  data() {
    return {
      nothing: "nothing yet",
      SERVER_URL: "http://localhost:300/uploads",
      // SERVER_URL: "https://salesprojectb23.netlify.app/uploads/cvmk",
    };
  },
  methods: {
    checkContainersSize() {
      const cvContainerHeight = document
        .querySelector(".cv-container-div-2")
        .getBoundingClientRect().height;

      let rowContainersHeights = document.querySelectorAll(
        ".left-element-div-2"
      );

      let rowContainersHeightsArray = [];
      rowContainersHeights.forEach((element) => {
        rowContainersHeightsArray.push(element.getBoundingClientRect().height);
      });
      let rowContainerHeightsSum = rowContainersHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let rightRowContainersHeights = document.querySelectorAll(
        ".right-element-div-2"
      );
      let rightRowContainersHeightsArray = [];
      rightRowContainersHeights.forEach((element) => {
        rightRowContainersHeightsArray.push(
          element.getBoundingClientRect().height
        );
      });
      let rightRowContainerHeightsSum = rightRowContainersHeightsArray.reduce(
        (sum, el) => sum + el,
        0
      );

      let fontSizeHere = 15;

      while (
        rowContainerHeightsSum > cvContainerHeight ||
        rightRowContainerHeightsSum > cvContainerHeight
      ) {
        fontSizeHere--;
        if (fontSizeHere === 1) {
          break;
        }
        document.querySelectorAll(".element-body-txt-2").forEach((el) => {
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
        rowContainersHeights = document.querySelectorAll(".left-element-div-2");
        rowContainersHeightsArray = [];
        rowContainersHeights.forEach((element) => {
          rowContainersHeightsArray.push(
            element.getBoundingClientRect().height
          );
        });
        rowContainerHeightsSum = rowContainersHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );

        rightRowContainersHeights = document.querySelectorAll(
          ".right-element-div-2"
        );
        rightRowContainersHeightsArray = [];
        rightRowContainersHeights.forEach((element) => {
          rightRowContainersHeightsArray.push(
            element.getBoundingClientRect().height
          );
        });
        rightRowContainerHeightsSum = rightRowContainersHeightsArray.reduce(
          (sum, el) => sum + el,
          0
        );

        let pPwidth = document
          .querySelector(".personal-photo-div-2")
          .style.width.split("");
        pPwidth.pop();
        pPwidth.pop();
        pPwidth = Number(pPwidth.join("")) - 5;

        document.querySelector(
          ".personal-photo-div-2"
        ).style.width = `${pPwidth}px`;
      }
    },
    setLastSectionBorderNone() {
      const rightElements = document.querySelectorAll(".right-element-div-2");
      rightElements[rightElements.length - 1].classList.add("last-section");
    },
    setPhoto() {
      let photoURL = localStorage.getItem("photo");
      if (photoURL) {
        document
          .querySelector(".personal-photo-2")
          .setAttribute("src", photoURL);
      }
    },
  },
  mounted() {
    this.setLastSectionBorderNone();
    this.checkContainersSize();
    this.setPhoto();
    if (this.justPrint && this.lng.name === "arabic") {
      const allSectionsTitle = document.querySelectorAll(".tranlate-me-2");
      allSectionsTitle.forEach((title) => {
        title.classList.add("section-title-txt-2-translate");
      });
    }
  },
};
</script>

<style scoped>
.section-title-txt-2-translate {
  transform: translateY(-3px);
}
.window-page-div {
  /* height: 100vh; */
  /* height: 1122px; */
  height: 100%;
  width: 100%;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.cv-container-div-2 {
  height: 100%;
  width: 100%;
}
.cv-container-div-2-font {
  font-family: "Tauri";
}
.left-column-div,
.right-column-div {
  flex: 1;
  height: 100%;
  padding-top: 10px;
}
.left-column-div {
  margin-left: 15px;
}
.right-column-div {
  margin-right: 15px;
}
.left-element-div-2,
.right-element-div-2 {
  flex: 1;
  width: 85%;
  border-bottom: 1px solid rgb(180, 180, 180);
  align-items: center;
  justify-content: start;
}
.body-container-div {
  width: 100%;
}
.title-txt-xx {
  font-weight: bold;
  color: rgb(212, 72, 72);
}
.name-job-title-font {
  font-family: "Tilt Warp";
}
.title-txt {
  font-weight: bold;
}
.under-line-span {
  color: rgb(180, 180, 180);
}
.columns-grid-div {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/* --------------------------------- NAEME DIV --------------------------------------------------- */
.name-div {
  flex: 0.5;
  align-items: center;
}
.name-span {
  color: rgb(212, 72, 72);
  font-weight: bold;
}
.row-general-info-div {
  width: 100%;
  justify-content: space-between;
}
/* --------------------------------- CONTACTS DIV --------------------------------------------------- */
.contacts-div {
  flex: 0.5;
  align-items: center;
}
.contacts-body-container {
  align-items: end;
}
.last-section {
  border: none;
}
.personal-photo {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
/* --------------------------------- worK EPERIENCE DIV --------------------------------------------------- */
.work-body-div {
  align-items: start;
}
</style>

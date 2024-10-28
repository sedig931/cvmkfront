<template>
  <div
    class="container-div-print"
    :class="this.smallCvView ? 'container-div-small' : ''"
    :dir="this.arabic ? 'rtl' : 'ltr'"
  >
    <div class="row-div flex-row">
      <div class="left-title-div first-left-title-div">
        <p
          class="left-title-txt first-row-element"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "معلومات أساسية" : "Details" }}
        </p>
      </div>
      <div
        class="right-elements-div first-right-div"
        :class="this.smallCvView ? 'right-elements-div-small' : ''"
      >
        <div
          class="address-phone-email-div first-row-element"
          :class="this.smallCvView ? 'address-mail-txt-small' : ''"
        >
          <p class="margin-zero">
            <i class="bi bi-geo-alt-fill img"></i>
            <!-- al madinah, Saudi Arabia -->
            {{
              this.cvInfo.address.city
                ? this.cvInfo.address.city + ", "
                : "city ,"
            }}
            {{
              this.cvInfo.address.country
                ? this.cvInfo.address.country
                : "country"
            }}
            <br />
            <i class="bi bi-telephone-fill img"></i>
            {{ this.cvInfo.phone ? this.cvInfo.phone : "0123456789" }}
            <!-- +966536323259 -->
            <i class="bi bi-envelope-at-fill img"></i>
            {{ this.cvInfo.email ? this.cvInfo.email : "email@mail.com" }}
            <!-- sedig931@gmail.com -->
          </p>
        </div>

        <!-- http://localhost:300/uploads/ -->

        <div class="name-div">
          <span
            class="name-txt margin-zero"
            :class="this.smallCvView ? 'name-txt-smf' : ''"
          >
            {{ this.cvInfo.fullName ? this.cvInfo.fullName : "YOUR NAME" }}
          </span>
          <br />
          <span
            class="spicialist-txt margin-zero"
            :class="this.smallCvView ? 'spicialist-txt-small' : ''"
          >
            <!-- Information Technology Technician -->
            {{ this.cvInfo.jobTitle ? this.cvInfo.jobTitle : "JOB TITLE NAME" }}
          </span>
        </div>

        <div>
          <p
            class="main-body-txt margin-zero"
            :class="this.smallCvView ? 'main-body-txt-small' : ''"
          >
            <!-- Through the years of study, I have acquired the skill of working on
            software projects (group and individual work). I can deal with
            errors and software problems adapt to plan changes or learn a new
            tool quickly if necessary. In recent years I have focused my work on
            developing websites, mobile applications and desktop applications
            (fullstack). I have some work you can check out. -->
            {{
              this.cvInfo.introParagraph
                ? this.cvInfo.introParagraph
                : "Talk about the characteristics of your profession and what you can do and offer to the job holder"
            }}
            <br />
          </p>
        </div>

        <div
          class="columns-grid-div last-row-element"
          :class="this.smallCvView ? 'birthdate-txt-small' : ''"
        >
          <p class="margin-zero">
            {{ this.arabic ? "الجنسية" : "Nationalty" }}
            <span
              class="under-line"
              :class="this.smallCvView ? 'under-line-small' : ''"
              >________</span
            >
            <span class="title-txt">
              {{
                this.cvInfo.nationality ? this.cvInfo.nationality : "nationalty"
              }}</span
            >
          </p>
          <p class="margin-zero">
            {{ this.arabic ? "مكان الميلاد" : "Place of birth" }}
            <span
              class="under-line"
              :class="this.smallCvView ? 'under-line-small' : ''"
              >______</span
            >
            <span class="title-txt">{{
              this.cvInfo.placeOfBirth
                ? this.cvInfo.placeOfBirth
                : "place of birth"
            }}</span>
          </p>
          <p class="margin-zero">
            {{ this.arabic ? "النوع" : "Gender" }}
            <span
              class="under-line"
              :class="this.smallCvView ? 'under-line-small' : ''"
              >______</span
            >
            <span class="title-txt">{{
              this.cvInfo.gender ? this.cvInfo.gender : "Gender"
            }}</span>
          </p>
          <p class="margin-zero">
            {{ this.arabic ? "تاريخ الميلاد" : "Date of birth" }}
            <span
              class="under-line"
              :class="this.smallCvView ? 'under-line-small' : ''"
              >________</span
            >
            <span class="title-txt">{{
              `${
                this.cvInfo.dateOfBirth.day ? this.cvInfo.dateOfBirth.day : "dd"
              }/${
                this.cvInfo.dateOfBirth.month
                  ? this.cvInfo.dateOfBirth.month
                  : "mm"
              }/${
                this.cvInfo.dateOfBirth.year
                  ? this.cvInfo.dateOfBirth.year
                  : "yy"
              }`
            }}</span>
          </p>
          <p class="margin-zero">
            {{ this.arabic ? "الحالة الإجتماعية" : "Marital Status" }}
            <span
              class="under-line"
              :class="this.smallCvView ? 'under-line-small' : ''"
              >______</span
            >
            <span class="title-txt">{{
              this.cvInfo.relationship ? this.cvInfo.relationship : "Status"
            }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="row-div flex-row">
      <div class="left-title-div">
        <p
          class="left-title-txt"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "التعليم" : "Education" }}
        </p>
      </div>

      <div
        class="right-elements-div main-body-txt second-right-div"
        :class="
          this.smallCvView ? 'main-body-txt-small right-elements-div-small' : ''
        "
      >
        <p
          class="margin-zero first-row-element"
          :class="this.smallCvView ? 'main-body-txt-small' : ''"
        >
          {{ this.arabic ? "شهادة" : "Degree of" }}
          <span class="title-txt">
            {{
              this.cvInfo.eduForm.eduDegree
                ? this.cvInfo.eduForm.eduDegree + ","
                : "Title and academic degree,"
            }}
          </span>
          {{
            this.cvInfo.eduForm.uniName
              ? this.cvInfo.eduForm.uniName
              : "university or school name"
          }}
        </p>

        <p class="title-txt">
          {{
            `${
              this.cvInfo.eduForm.yearsStudy.from.month
                ? this.cvInfo.eduForm.yearsStudy.from.month
                : "from"
            } 
            ${
              this.cvInfo.eduForm.yearsStudy.from.year
                ? this.cvInfo.eduForm.yearsStudy.from.year
                : "year"
            } - 
            ${
              this.cvInfo.eduForm.yearsStudy.to.month
                ? this.cvInfo.eduForm.yearsStudy.to.month
                : "to"
            } 
            ${
              this.cvInfo.eduForm.yearsStudy.to.year
                ? this.cvInfo.eduForm.yearsStudy.to.year
                : "year"
            }`
          }}
        </p>

        <span
          class="notice-txt"
          :class="this.smallCvView ? 'notice-txt-small' : ''"
          v-if="this.cvInfo.eduForm.eduDiscreption"
        >
          {{
            this.cvInfo.eduForm.eduDiscreption
              ? this.cvInfo.eduForm.eduDiscreption
              : `write about your professional qualifications`
          }}
        </span>

        <!-- <span class="title-txt">graduated with : (HONOURS)</span> -->

        <div class="margin-zero last-row-element">
          <span class="title-txt" v-if="this.cvInfo.eduForm.thesis">
            {{ this.arabic ? "اطروحة التخرج :" : "thesis topic :" }}
          </span>
          <span v-if="this.cvInfo.eduForm.thesis">
            {{ this.cvInfo.eduForm.thesis ? this.cvInfo.eduForm.thesis : ""
            }}<br />
          </span>

          <div>
            <span
              class="title-txt"
              v-if="this.cvInfo.coursesForm[0].courseTitle"
            >
              {{ this.arabic ? "مناهج تعليمية :" : "Courses :" }}</span
            >
          </div>
          <div
            v-for="(course, i) in this.cvInfo.coursesForm"
            :key="i"
            class="courses-div"
          >
            <!-- <span v-if="course.courseTitle">
              أساسيات الحاسوب ، هيلكة البيانات، هندسة برمجيات، ذكاء اصطناعي،
              شبكات الحاسوب، إدارة المشاريع، تطوير تطبيقات الويب، أساسيات أنظمة
              قواعد البيانات.
            </span> -->
            <span v-if="course.courseTitle">
              {{ course.courseTitle ? course.courseTitle : "course name" }} from
              {{ course.institution ? course.institution : "inistitution name"
              }}{{ i + 1 === this.cvInfo.coursesForm.length ? "." : ", " }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row-div skills-row-div flex-row">
      <div class="left-title-div">
        <p
          class="left-title-txt"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "المهارات" : "Skills" }}
        </p>
      </div>
      <div
        class="right-elements-div right-elements-skills-div third-right-div main-body-txt"
        :class="
          this.smallCvView ? 'main-body-txt-small right-elements-div-small' : ''
        "
      >
        <div class="ul-main-div flex-row me-2" dir="rtl">
          <ul class="ul-list">
            <li>
              <dl class="first-row-element">
                <dt>
                  {{
                    this.cvInfo.skillsForm.princ.name
                      ? this.cvInfo.skillsForm.princ.name
                      : "skill"
                  }}
                </dt>
              </dl>
            </li>
            <div v-for="(skill, i) in this.cvInfo.skillsForm.childs" :key="i">
              <li v-if="i > 0 && i % 2 != 0">
                <dl class="first-row-element">
                  <dt>
                    {{ skill.name }}
                  </dt>
                </dl>
              </li>
            </div>
            <!-- <li>
              <dl class="first-row-element">
                <dt>Programming language</dt>
                <dd :class="this.smallCvView ? 'dd-txt-small' : ''">
                  Java, Javascript, Python, Dart, PHP
                </dd>
              </dl>
            </li> -->
          </ul>
          <ul class="ul-list">
            <div v-for="(skill, i) in this.cvInfo.skillsForm.childs" :key="i">
              <li v-if="i % 2 === 0">
                <dl class="first-row-element">
                  <dt>
                    {{ skill.name }}
                  </dt>
                </dl>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="workExp-row-div flex-row"
      v-if="this.cvInfo.workExpForm[0].jobTitle"
    >
      <div class="left-title-div">
        <p
          class="left-title-txt"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "خبرات العمل" : "Work Experince" }}
        </p>
      </div>
      <div
        class="right-elements-div fifth-right-div main-body-txt"
        :class="
          this.smallCvView ? 'main-body-txt-small right-elements-div-small' : ''
        "
      >
        <div
          class="worExep-div"
          v-for="(work, i) in this.cvInfo.workExpForm"
          :key="i"
        >
          <i class="bi bi-briefcase-fill job-icon"></i>
          <span class="title-txt">{{ work.jobTitle }} :</span>
          <div class="work-body-div flex-column">
            <span> {{ work.employer + ", " }}{{ work.address }}.</span>
            <span v-if="work.workDate.from.month">{{
              `
              ${work.workDate.from.month ? work.workDate.from.month : "mm"}  ${
                work.workDate.from.year ? work.workDate.from.year : "yyyy"
              } - ${work.workDate.to.month ? work.workDate.to.month : "mm"} ${
                work.workDate.to.year ? work.workDate.to.year : "yy"
              }`
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row-div flex-row links-row"
      v-if="this.cvInfo.webLinks.princ.webTitle"
    >
      <div class="left-title-div">
        <p
          class="left-title-txt last-left-title-txt"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "روابط لصفحات  إلكترونية" : "Website Links" }}
        </p>
      </div>
      <div
        class="right-elements-div six-right-div"
        :class="this.smallCvView ? 'right-elements-div-small' : ''"
      >
        <div
          class="columns-grid-div last-row-element"
          :class="this.smallCvView ? 'birthdate-txt-small' : ''"
        >
          <a
            :href="this.cvInfo.webLinks.princ.webHref"
            class="anchors"
            :class="this.smallCvView ? 'anchor-txt-small' : ''"
            >{{ this.cvInfo.webLinks.princ.webTitle }}</a
          >
          <a
            v-for="(link, i) in this.cvInfo.webLinks.childs"
            :key="i"
            :href="link.webHref"
            class="anchors"
            :class="this.smallCvView ? 'anchor-txt-small' : ''"
            >{{ link.webTitle }}</a
          >
        </div>
      </div>
    </div>
    <div class="row-div flex-row last-right-row">
      <div class="left-title-div last-left-title-div">
        <p
          class="left-title-txt last-left-title-txt"
          :class="this.smallCvView ? 'left-title-txt-small' : ''"
        >
          {{ this.arabic ? "اللغات" : "Language" }}
        </p>
      </div>
      <div
        class="right-elements-div"
        :class="this.smallCvView ? 'right-elements-div-small' : ''"
      >
        <div
          class="language-div flex-row main-body-txt"
          :class="this.smallCvView ? 'main-body-txt-small' : ''"
        >
          <div class="left-lang-div flex-column">
            <span>
              <span class="title-txt"
                >{{
                  this.cvInfo.langsForm.princ.name
                    ? this.cvInfo.langsForm.princ.name
                    : "language"
                }}
              </span>
              <span
                class="under-line"
                :class="this.smallCvView ? 'under-line-small' : ''"
                >____</span
              >
              <span>{{
                this.cvInfo.langsForm.princ.level
                  ? this.cvInfo.langsForm.princ.level
                  : "Working knowledge"
              }}</span>
            </span>
            <div v-for="(lang, i) in this.cvInfo.langsForm.childs" :key="i">
              <span v-if="i % 2 !== 0">
                <span class="title-txt">
                  {{ lang.name ? lang.name : "language" }}
                </span>
                <span
                  class="under-line"
                  :class="this.smallCvView ? 'under-line-small' : ''"
                  >____</span
                >
                <span
                  >{{ lang.level ? lang.level : "Working knowledge" }}
                </span>
              </span>
            </div>
          </div>
          <div class="right-lang-div flex-column">
            <div v-for="(lang, i) in this.cvInfo.langsForm.childs" :key="i">
              <span v-if="i % 2 === 0">
                <span class="title-txt">
                  {{ lang.name ? lang.name : "language" }}
                </span>
                <span
                  class="under-line"
                  :class="this.smallCvView ? 'under-line-small' : ''"
                  >____</span
                >
                <span>{{ lang.level ? lang.level : "Working knowledge" }}</span>
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
  props: ["cvInfo", "smallCvView"],
  data() {
    return {
      arabic: false,
      // smallCvView: true,
    };
  },
  mounted() {
    // console.log(this.cvInfo);
    // html2pdf().from(document.querySelector(".container-div")).save();
  },
};
</script>

<style scoped>
/* -------------------------------------------for all------------------------- */
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
.column-direc {
  flex-direction: column;
}

.row-div {
  flex: 1;
  height: 100%;
  width: 100%;
}
.skills-row-div {
  flex: 0.5;
}

.workExp-row-div {
  /* height: 5; */
  flex: 0.3;
  height: 100%;
  width: 100%;
}

.container-div-print {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* height: 100vh; */
  /* width: 100%; */

  height: 1122px;
  width: 100%;

  /* border-radius: 10px; */
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2),
    1px 1px 3px 2px rgba(0, 0, 0, 0.19);

  font-family: "Noto Kufi Arabic", sans-serif;
}
.container-div-for-print {
  height: 1122px;
  width: 100%;
}
.container-div-small {
  height: 500px;
  width: 400px;
}
.left-title-div {
  flex: 1.2;
  background-color: rgba(182, 17, 17, 0.7);
  height: inherit;
}
/* .first-left-title-div {
  border-radius: 10px 0 0 0;
} */
.left-title-txt {
  color: rgb(255, 255, 255);
  /* font-family: "AR One Sans"; */
  font-weight: bold;
  margin: 0px;
  /* padding: 0 0 0 30px; */
  padding: 0 30px 0 0;

  font-size: 23px;
}

.right-elements-div {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px 10px 0px 10px;
  height: 100%;
}

.under-line {
  font-size: 16px;
  color: rgb(180, 180, 180);
}

.margin-zero {
  padding: 0;
  margin: 0;
}

.anchors {
  /* font-family: "Tilt Warp"; */
  color: rgb(110, 110, 236);
  font-size: 18px;
}

.main-body-txt {
  /* font-family: "Tauri"; */
  font-weight: normal;
  font-size: 16px;
}

.first-row-element {
  padding-top: 5px;
}

.last-row-element {
  padding-bottom: 2px;
}

/*--------------------------------------- DIV 1 ----------------------------------------*/

.first-right-div {
  border-bottom: 0.5px solid rgb(180, 180, 180);
}

.first-left-title-txt {
  padding-top: 10px;
}

.img {
  width: 10px;
  height: 10px;
  margin-right: 1px;
}

.img-mail {
  margin-left: 1px;
}

.address-phone-email-div {
  color: rgb(75, 75, 75);
  /* font-family: "Tauri"; */
  font-size: 11px;
}

.name-div {
  margin: 0;
  padding: 2px 0 2px 0;
}

.name-txt {
  /* font-family: "Tilt Warp"; */
  font-size: 25px;
}

.spicialist-txt {
  /* font-family: "Tilt Warp"; */
  font-weight: bold;
  font-size: 21px;
}

.columns-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* font-family: "Tauri"; */
  color: rgb(75, 75, 75);
  font-size: 15px;
}
/*--------------------------------------- DIV 2 ----------------------------------------*/

.second-right-div {
  border-bottom: 0.5px solid rgb(180, 180, 180);
}

.title-txt {
  /* font-family: "Tauri"; */
  font-weight: bold;
  margin: 0;
}

.notice-txt {
  margin: 0;
  padding: 0;
  font-size: 13px;
  /* font-family: "Tauri"; */
}

.courses-div {
  display: inline;
}

/*--------------------------------------- DIV 3 ----------------------------------------*/

.third-right-div {
  border-bottom: 0.5px solid rgb(180, 180, 180);
}

.ul-list {
  /* font-family: "Tauri"; */
  margin: 0;
  padding: 0 15px 0 15px;
  height: 100%;
  width: 100%;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0;
  font-size: 13px;
  padding: 2px 0 0 10px;
  color: rgb(75, 75, 75);
}

/*--------------------------------DIV 4 languages-----------------------------------------------*/
.last-right-row {
  flex: 0.2;
}
.last-left-title-div {
  display: flex;
  align-items: center;
  /* border-radius: 0 0 0 10px; */
}

.language-div {
  justify-content: space-between;
}
.right-lang-div {
  height: 100%;
  justify-content: start;
}
/*--------------------------------DIV 5 work exepriense-----------------------------------------------*/
.fifth-right-div {
  border-bottom: 0.5px solid rgb(180, 180, 180);
}
.workExep-div {
  align-items: start;
}
.work-body-div {
  align-items: start;
  margin-inline-start: 22px;
}
.job-icon {
  margin-inline-end: 5px;
}
/*--------------------------------DIV 6 WebLinks -----------------------------------------------*/
.six-right-div {
  border-bottom: 0.5px solid rgb(180, 180, 180);
}
/* ----------------SMALL DISPLAY----------------------------- */

.img-mail-phone-small {
  height: 5px;
  width: 5px;
}

.address-mail-txt-small {
  font-size: 7px;
  font-weight: normal;
}

.name-txt-smf {
  font-size: 11px;
}

.spicialist-txt-small {
  font-size: 8px;
}

.main-body-txt-small {
  font-size: 8px;
}

.anchor-txt-small {
  font-size: 8px;
}

.birthdate-txt-small {
  font-size: 7px;
}

.right-elements-div-small {
  margin: 0px 3px 0px 3px;
}

.left-title-txt-small {
  font-size: 8px;
  padding: 0 0 0 10px;
}

.notice-txt-small {
  font-size: 6px;
}

.dd-txt-small {
  font-size: 6px;
}
.under-line-small {
  font-size: 10px;
}

.links-row {
  flex: 0.3;
}
</style>

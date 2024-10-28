<template>
  <div class="all-home-container-div">
    <div
      class="home-sections home-section-1 flex-column"
      :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
    >
      <div
        class="nav-div flex-row"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'nav-btns-font-eng'
        "
      >
        <div class="home-about-nav-div flex-row">
          <button class="home-about-btn home-btn" @click="this.goToHomePage">
            {{ this.lng.lang.section1.nav.homeBtn }}
          </button>
          <span> | </span>
          <button
            class="home-about-btn about-btn"
            :class="this.lng.name === 'Français' ? 'about-less-430' : ''"
            @click="this.goToAboutPAge"
          >
            {{ this.lng.lang.section1.nav.aboutBtn }}
          </button>
          <span> | </span>
          <button class="home-about-btn profile-btn" @click="this.goToProfile">
            {{ this.lng.lang.section1.nav.profileBtn }}
          </button>
        </div>
        <div class="log-in-div">
          <button
            class="login-btn"
            :class="
              this.lng.name === 'arabic'
                ? 'sc-less-430'
                : this.lng.name === 'Français'
                ? 'sc-less-430'
                : ''
            "
            @click="this.loginLogout"
          >
            {{
              this.customer._id
                ? `${this.lng.lang.section1.nav.logoutBtn}`
                : `${this.lng.lang.section1.nav.loginBtn}`
            }}
          </button>
        </div>
      </div>
      <div class="section1-body-div">
        <div class="section1-icon-div">
          <WellIcon />
        </div>
        <div
          class="section1-txt-div flex-column"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'section1-txt-div-font'
          "
        >
          <div class="make-your-txt-div">
            <span class="make-your-span">{{
              this.lng.lang.section1.makeYourTxt
            }}</span>
          </div>
          <div class="custome-now-div flex-row">
            <span class="cv-now-span">{{ this.lng.lang.section1.yourCV }}</span>
            <button class="now-button ms-2 me-2" @click="this.useFrame1">
              {{ this.lng.lang.section1.nowBtn }}
            </button>
          </div>
          <div class="more-than-20-div">
            <span>
              {{ this.lng.lang.section1.ready4u }}
            </span>
          </div>
        </div>
        <div class="change-lang-div flex-row" @click="this.chagingLangs = true">
          <i class="bi bi-translate"></i>
          <span class="lang-name-span">
            {{ this.lng.name[0].toUpperCase() + this.lng.name.slice("1") }}
          </span>
        </div>
      </div>
    </div>
    <div class="gap-section"></div>
    <div
      class="change-lang-overlay flex-row"
      v-if="this.chagingLangs"
      @click="this.setChosenLang"
    >
      <div class="langs-name-container-div flex-column text-center text-muted">
        <div class="close-btn">
          <i class="bi bi-x-circle-fill"></i>
        </div>
        <span
          class="change-lngName-span"
          v-for="(lngname, i) in this.langNames"
          :key="i"
          :id="i"
          >{{ lngname[0].toUpperCase() + lngname.slice("1") }}</span
        >
      </div>
    </div>
    <Section2 :lng="this.lng" :resumeValues="this.resumeValues" />
    <Section3 :lng="this.lng" />
    <Section4
      :lng="this.lng"
      @showTermsWindow="this.showAllTermsPolicy = true"
    />
    <AcceptStorage
      :lng="this.lng"
      @setTermsAccepted="this.setTermsAccepted"
      @setTermsNotAccepted="this.setTermsNotAccepted"
      v-if="this.showAttentionWindow"
    />
    <Terms
      :lng="this.lng"
      v-if="this.showAllTermsPolicy"
      @closeTermsWindow="this.showAllTermsPolicy = false"
    />
  </div>
</template>

<script>
import Section2 from "./homeViews/sections/section-2.vue";
import Section3 from "./homeViews/sections/section-3.vue";
import Section4 from "./homeViews/sections/section-4.vue";
import WellIcon from "./welIcon.vue";
import AcceptStorage from "./homeViews/popUpViews/acceptStorage.vue";
import Terms from "./homeViews/popUpViews/termsPolicy.vue";
import { getActiveCustomer, logoutNow } from "../components/modal.js";
import { languages } from "../components/languages.js";

export default {
  components: {
    Section2,
    Section3,
    Section4,
    WellIcon,
    AcceptStorage,
    Terms,
  },
  data() {
    return {
      resumeValues: {
        fullName: "SIDDIG ELHAREITH MOHAMMAD",
        address: {
          country: "Saudi Arabia",
          city: "Madinah",
        },
        phone: "+966536323259",
        email: "sedig931@gmail.com",
        nationality: " Sudanes",
        placeOfBirth: "Sudan",
        dateOfBirth: {
          day: "16",
          month: "3",
          year: "1998",
        },
        gender: "Male",
        relationship: "Single",
        jobTitle: "Information Technology Technician",
        introParagraph: `I have acquired the skill of working on
            software projects (group and individual work). I can deal with errors
            and software problems adapt to plan changes or learn a new tool
            quickly if necessary. In recent years I have focused my work on
            developing websites, mobile applications and desktop applications
            (fullstack). I have some work you can check out.`,
        eduForm: {
          eduDegree: "Bachelor (HONOURS) OF INFORMATION TECHNOLOGY ",
          uniName: "Sudan University of Scince and Technology",
          cerLevel: ".",
          yearsStudy: {
            from: { month: "Nov", year: "2017" },
            to: { month: "Mar", year: "2023" },
          },
          thesis: "sgin language generation using machine learning technology.",
          photo: { name: "" },
          eduDiscreption: `and software problems adapt to plan changes or learn a new tool
          quickly if necessary. In recent years I have focused my work on
          developing websites, mobile applications and desktop applications`,
        },
        skillsForm: {
          princ: { name: "JavaScript" },
          childs: [
            { name: "HTML, CSS" },
            { name: "Bootstrap5" },
            { name: "ExpressJS, MongoDB, MySQL" },
            { name: "Java, JavaFX" },
            { name: "Flutter" },
          ],
        },
        langsForm: {
          princ: { name: "Arabic", level: "Native Speaker" },
          childs: [{ name: "English", level: "Very good command" }],
        },
        workExpForm: [
          {
            jobTitle: "Security Approvals",
            address: "KSA , Madinah",
            employer: "AL-aml Medical Group",
            workDate: {
              from: { month: "jun", year: "2023" },
              to: { month: "jun", year: "2024" },
            },
          },
          {
            jobTitle: "Security Approvals",
            address: "KSA , Madinah",
            employer: "AL-aml Medical Group",
            workDate: {
              from: { month: "jun", year: "2023" },
              to: { month: "jun", year: "2024" },
            },
          },
        ],
        coursesForm: [
          { courseTitle: "java", institution: "youtube" },
          { courseTitle: "javaScript", institution: "youtube2" },
        ],
        webLinks: {
          princ: {
            webTitle: " Buying system project ",
            // webHref:
            //   "https://drive.google.com/file/d/1PGvMBadcOs05hsie1zwEQmZAwBWZfdx1/view",
          },
          childs: [
            {
              webTitle: "Online buying system project",
              // webHref:
              //   "https://drive.google.com/file/d/18LBGD-PXRPzyAe0qbu-niaoXNwGfzoZy/view",
            },
            {
              webTitle: "Educational content system",
              // webHref:
              //   "https://drive.google.com/file/d/1NI1ueB8YwGq4W2opO_zSf4kodAiLP915/view",
            },
            {
              webTitle: "Motorcycle rental project",
              // webHref:
              //   "https://drive.google.com/file/d/1e3UoVB9y9XvO1VSaRdF34pHMwXlhiCt3/view?usp=sharing",
            },
          ],
        },
      },
      customer: {},
      lng: {
        name: "english",
        lang: {
          attentionsTerms: {},
          section1: {
            nav: {},
          },
          section2: {
            getCvInfo: {
              forms: {},
              frame: {
                mainTitle: {},
                resumeValues: {
                  address: {},
                  dateOfBirth: {},
                  eduForm: {
                    yearsStudy: {
                      from: {},
                      to: {},
                    },
                  },
                  skillsForm: {
                    princ: {},
                    childs: [],
                  },
                  langsForm: {
                    princ: {},
                    childs: [],
                  },
                  workExpForm: [{}],
                  coursesForm: [{}],
                  webLinks: {
                    princ: {},
                    childs: [],
                  },
                },
              },
            },
          },
          section3: {
            formLogin: {},
            formRegister: {},
            formRegisterConfirm: {},
            formResetPass: {},
            formConfirmResSetPass: {},
          },
          section4: {
            termsPolicy: {},
            contacts: {},
            services: {},
          },
          termsPolicy: {},
        },
      },
      langNames: [],
      chagingLangs: false,
      showAttentionWindow: true,
      showAllTermsPolicy: false,
      userLoggedin: false,
    };
  },
  methods: {
    useFrame1() {
      this.$router.push({
        name: "cvinfo",
        params: {
          cvNum: "1",
          lngname: this.lng.name,
        },
      });
    },
    setTermsAccepted(secondary) {
      localStorage.setItem("savingApproved", true);
      if (secondary) {
        //saving in localStorage..
        localStorage.setItem("savingLocalyApproved", true);
      }
      this.showAttentionWindow = false;
    },
    setTermsNotAccepted() {
      this.showAttentionWindow = false;
    },
    setChosenLang(e) {
      if (e.target.classList.contains("change-lngName-span")) {
        localStorage.setItem("cvMaker-lngName", this.langNames[e.target.id]);
        this.setLanguage(this.langNames[e.target.id]);
        setTimeout(() => {
          location.reload();
        }, 0.5);
        this.chagingLangs = false;
      } else {
        this.chagingLangs = false;
      }
    },
    getAllLanguagesName() {
      this.langNames = languages.map((language) => language.name);
    },
    setLanguage(lngname) {
      this.lng = languages.find((lang) => lang.name === lngname);
      this.resumeValues = this.lng.lang.section2.getCvInfo.frame.resumeValues;
      if (lngname === "Français") {
        document.querySelector(".custome-now-div").classList.remove("flex-row");
        document
          .querySelector(".custome-now-div")
          .classList.add("flex-column-custome-now");
        console.log("make column");
      }
    },
    async checkActiveCustomer() {
      try {
        this.customer = await getActiveCustomer();
        this.userLoggedin = true;
      } catch (err) {
        this.userLoggedin = false;
        // console.log("no user active..");
      }
    },
    goToHomePage() {
      console.log("here...");
    },
    goToAboutPAge() {
      document
        .querySelector(".home-section-4")
        .scrollIntoView({ behavior: "smooth" });
    },
    async loginLogout() {
      if (this.customer._id) {
        try {
          await logoutNow();
          this.customer = {};
        } catch (err) {}
      } else {
        document
          .querySelector(".home-section-3")
          .scrollIntoView({ behavior: "smooth" });
      }
    },
    goToProfile() {
      if (this.customer._id) {
        this.$router.push({
          name: "profile",
          params: { id: this.customer._id, lngname: this.lng.name },
        });
      } else {
        document
          .querySelector(".home-section-3")
          .scrollIntoView({ behavior: "smooth" });
      }
    },
    async tryPrintOne() {
      let doc = new jsPDF("p", "px", [1890, 1122]);
      await html2canvas(document.querySelector(".home-section-1"), {
        width: 1890,
      }).then((canvas) => {
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
      });
      doc.save("Document.pdf");
    },
  },
  mounted() {
    this.checkActiveCustomer();
    this.getAllLanguagesName();
    localStorage.removeItem("photo");
    // save language
    if (!localStorage.getItem("cvMaker-lngName"))
      localStorage.setItem("cvMaker-lngName", "english");
    this.setLanguage(localStorage.getItem("cvMaker-lngName"));
    // show accepting terms window or not
    if (localStorage.getItem("savingApproved")) {
      this.showAttentionWindow = false;
    } else {
      this.showAttentionWindow = true;
    }
    // this.tryPrintOne();
  },
};
</script>

<style scoped>
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
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
.flex-column-custome-now {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.all-home-container-div {
  height: 100%;
  width: 100%;
}
.home-section-1 {
  height: 100vh;
  width: 100%;
  background-color: rgb(39, 39, 39);
}
.nav-div {
  position: absolute;
  top: 0;
  /* left: 0; */
  height: 50px;
  width: 80%;
  border: 2px solid white;
  border-radius: 15px;
  margin: 10px;
  justify-content: space-between;

  font-size: 19px;
  /* font-weight: bolder; */
}
.nav-btns-font-eng {
  font-family: "Comfortaa";
}
.home-about-nav-div {
  /* flex: 0.1; */
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
}
.home-about-btn {
  border: none;
  background-color: rgb(39, 39, 39);
  color: white;
}
.log-in-div {
  /* flex: 0.06; */
  padding-right: 10px;
  padding-left: 10px;
}
.login-btn {
  background-color: white;
  color: rgb(39, 39, 39);
  border: none;
  border-radius: 10px;
  padding: 2px 10px 2px 10px;
}
.change-lang-div {
  position: absolute;
  left: 50px;
  bottom: 50px;
  font-size: 25px;
  color: white;
  cursor: pointer;
}
.lang-name-span {
  font-size: 15px;
  font-family: "Comfortaa";
  margin: 5px;
}
.section1-body-div {
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.section1-icon-div {
  height: 400px;
  width: 360px;
  margin: 12px;
}
.section1-txt-div {
  width: 100%;
  /* height: 100%; */
  color: white;
  font-size: 45px;
  align-items: start;
}
.section1-txt-div-font {
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.make-your-txt-div {
  width: 100%;
}
.custome-now-div {
  width: 100%;
}

.now-button {
  font-size: 45px;
  border: 2px solid white;
  padding: 1px 10px 1px 10px;
  background-color: rgb(39, 39, 39);
  color: white;
  border-radius: 10px;
}
.now-button:hover {
  box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);
}
.more-than-20-div {
  font-size: 30px;
  margin-top: 35px;
  color: rgb(207, 207, 207);
}
.gap-section {
  height: 0;
  width: 0;
  /* border-left: 98.9vw solid transparent; */
  border-left: 100vw solid transparent;
  border-bottom: 9vw solid rgb(255, 255, 255);
  margin-top: -9vw;
}
.change-lang-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(3px);
  z-index: 3;
}
.langs-name-container-div {
  position: relative;
  width: 300px;
  padding: 10px 0px 10px 0px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 2.5px 2.5px rgb(116, 116, 116);
}
.change-lngName-span {
  font-size: 20px;
  cursor: pointer;
  font-family: "Comfortaa";
}
.change-lngName-span:hover {
  color: rgb(48, 48, 48);
}
.close-btn {
  position: absolute;
  top: 7px;
  right: 10px;
  cursor: pointer;
  font-size: 14px;
}

/* ---------------------------------------MEDIA QUERY SECTION1--------------------------------------------------- */
@media (min-width: 480px) and (max-width: 855px) {
  .nav-div {
    border: 1px solid white;
    border-radius: 12px;
    font-size: 15px;
    height: 40px;
  }
  .login-btn {
    border-radius: 7px;
  }
}
@media (min-width: 300px) and (max-width: 480px) {
  .nav-div {
    border: 1px solid white;
    border-radius: 12px;
    font-size: 13px;
    height: 40px;
  }
  .login-btn {
    border-radius: 7px;
  }
}
@media (min-width: 700px) and (max-width: 1050px) {
  .section1-txt-div {
    font-size: 30px;
  }
  .section1-icon-div {
    height: 360px;
    width: 340px;
  }
  .now-button {
    font-size: 30px;
  }
  .more-than-20-div {
    font-size: 25px;
  }
}
@media (min-width: 550px) and (max-width: 700px) {
  .section1-icon-div {
    height: 330px;
    width: 300px;
  }
  .section1-txt-div {
    font-size: 25px;
  }
  .now-button {
    font-size: 25px;
  }
  .more-than-20-div {
    font-size: 20px;
  }
  .change-lang-div {
    font-size: 20px;
  }
  .lang-name-span {
    font-size: 13px;
  }
}
@media (max-width: 550px) {
  .section1-body-div {
    flex-direction: column;
  }
  .change-lang-div {
    left: 35px;
    bottom: 30px;
  }
}
@media (min-width: 450px) and (max-width: 550px) {
  .section1-icon-div {
    height: 350px;
    width: 280px;
  }
  .section1-txt-div {
    font-size: 20px;
  }
  .now-button {
    font-size: 25px;
  }
  .more-than-20-div {
    font-size: 20px;
  }
  .change-lang-div {
    font-size: 20px;
  }
  .lang-name-span {
    font-size: 13px;
  }
}

@media (min-width: 400px) and (max-width: 450px) {
  /* .section1-body-div {
    flex-direction: column;
  } */
  .section1-icon-div {
    height: 350px;
    width: 280px;
  }
  .section1-txt-div {
    font-size: 20px;
  }
  .now-button {
    font-size: 20px;
  }
  .more-than-20-div {
    font-size: 15px;
  }
  .custome-now-div {
    justify-content: end;
  }
  .change-lang-div {
    font-size: 19px;
  }
  .lang-name-span {
    font-size: 12px;
  }
  .sc-less-430 {
    width: 103px;
    font-size: 12px;
  }
  .about-less-430 {
    width: 90px;
  }
}
@media (min-width: 50px) and (max-width: 400px) {
  /* .section1-body-div {
    flex-direction: column;
  } */
  .section1-icon-div {
    height: 350px;
    width: 280px;
  }
  .section1-txt-div {
    font-size: 20px;
  }
  .now-button {
    font-size: 20px;
  }
  .more-than-20-div {
    font-size: 14px;
  }
  .custome-now-div {
    justify-content: end;
  }
  .change-lang-div {
    font-size: 19px;
  }
  .lang-name-span {
    font-size: 12px;
  }
  .sc-less-430 {
    width: 103px;
    font-size: 12px;
  }
  .about-less-430 {
    width: 74px;
  }
}
</style>

<!-- 
   - country
   - city,
   - 0123456789
   - email@email.com
   - Full Name
   - Job Title
   - nationality
   - place of birth
   - gender
   - material status
   -    `${
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
   - Education Degree
   - University Name
   - mention your goals and what you are looking for, also talk about achievements and ambitions
   -         `${
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
- add one skill at least
- Native language 
- Linguistic level
 -->

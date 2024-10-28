<template>
  <div
    class="payments-div"
    :class="this.lng.name === 'arabic' ? 'arabic-font' : 'payment-div-font'"
  >
    <div class="inner-payment-div">
      <div class="downloading-div text-muted" v-if="showDownloading">
        <i class="downloading-icon bi bi-download"></i>
        <span>{{ this.lng.lang.donePayment.downloading }}</span>
      </div>
      <div class="downloading-div text-muted" v-if="!showDownloading">
        <i class="downloading-icon finish-icon bi bi-check-lg"></i>
        <span class="thank-you-span">{{
          this.lng.lang.donePayment.thank
        }}</span>
      </div>
    </div>
  </div>
  <div class="for-print">
    <print
      v-if="this.printNow"
      :lng="this.lng"
      :resumeValues="this.resumeValues"
      :cvNum="this.cvNum"
    />
    <!-- :photoSrc="this.resumeValues.eduForm.src" -->
  </div>
</template>

<script>
import {
  payPalCaptcuer,
  addFrameToCustomer,
} from "../../../components/modal.js";
import print from "../print.vue";
export default {
  components: {
    print,
  },
  data() {
    return {
      printNow: false,
      showDownloading: true,
      resumeValues: {},
      customerID: "",
      cvNum: "",
      lng: {
        name: "",
        lang: {
          section1: {
            nav: {},
          },
          section2: {
            getCvInfo: {
              forms: {
                form1: {
                  fullName: {},
                  email: {},
                  phone: {},
                  address: {
                    holder: {},
                  },
                  nationality: {},
                  placeBirth: {},
                  birthDate: {
                    holder: {},
                  },
                },
                form11: {
                  gender: { holder: {} },
                  materialStatus: {
                    holder: {},
                  },
                  jobTitle: {},
                  intro: {},
                },
                form2: {
                  eduDegree: {},
                  schoolName: {},
                  yearsStudy: {
                    holder: {},
                  },
                  disc: {},
                },
                skillsLangsForm: {},
                addInfoForm: {},
                addWorkForm: {
                  jobTitle: {},
                  empName: {},
                  address: {},
                  date: {},
                },
                addLinkForm: {},
                addThesisForm: {},
                addCourseForm: {},
              },
              frame: {
                mainTitle: {},
                city: "city",
                country: "country",
                fullName: "Full Name",
                jobTitle: "Job Title",
                intro:
                  "mention your goals and what you are looking for, also talk about achievements and ambitions",
                nationality: "Nationality",
                placeBirth: "Place of birth",
                birthDate: "Birthdate",
                gender: "Gender",
                materialStatus: "Material status",
                degreeOf: "Degree of",
                educationDegree: "Education Degree",
                universityName: "University Name",
                thesisTopic: "Thesis Topic",
                courses: "Courses",
                courseFrom: "from",
                comma: ",",
                addSkill: "add one skill at least",
                nativeLanguage: "Native language",
                linguisticLevel: "Linguistic level",
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
          section4: {},
          donePayment: {
            downloading: "",
            thank: "",
          },
        },
      },
    };
  },
  methods: {
    // 0P#LH$us
    async captuerPayment() {
      try {
        if (JSON.parse(sessionStorage.getItem("customerID"))) {
          this.customerID = JSON.parse(sessionStorage.getItem("customerID"));
        }

        this.resumeValues = JSON.parse(sessionStorage.getItem("resumeValues"));
        this.cvNum = JSON.parse(sessionStorage.getItem("frameNum"));
        this.lng = JSON.parse(sessionStorage.getItem("lng"));

        if (this.$route.query.token) {
          const data23 = await payPalCaptcuer(this.$route.query.token);
          if (this.customerID) {
            await addFrameToCustomer({
              framName: "frame_" + this.cvNum,
              frameInfo: this.resumeValues,
            });
          }
        }
        this.printNow = true;
        const cvContainer = document.querySelector(".for-print");
        // await html2pdf().from(cvContainer).save();
        var opt = {
          margin: 0,
          filename: "CVMK24.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        await html2pdf().set(opt).from(cvContainer).save();

        this.printNow = false;

        this.showDownloading = false;

        localStorage.removeItem("photo");
        setTimeout(() => {
          if (this.customerID) {
            this.$router.push({
              name: "profile",
              params: { id: this.customerID, lngname: this.lng.name },
            });
          } else {
            this.$router.push({
              name: "home",
            });
          }
        }, 3000);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mounted() {
    this.captuerPayment();
  },
};
</script>

<style scoped>
.payments-div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 2;
}
.payment-div-font {
  font-family: "Comfortaa";
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.inner-payment-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  /* background-color: rgb(190, 129, 129); */
}
.for-print {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}
.downloading-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 15px;
}
.downloading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  border: 1px solid rgb(120, 120, 120);
  border-radius: 50%;
  font-size: 75px;
  margin-bottom: 15px;
}
.finish-icon {
  color: green;
  border-color: green;
}
</style>

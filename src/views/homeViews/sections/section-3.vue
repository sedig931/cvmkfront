<template>
  <div
    class="home-sections home-section-3 flex-column"
    :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
  >
    <div class="no-user-login-div forms-profile-div flex-column">
      <div class="flex-column">
        <div class="section-3-header-div flex-row text-center pe-1 ps-1">
          <span
            class="section-3-header-span"
            :class="
              this.lng.name === 'arabic'
                ? 'arabic-font'
                : 'section-3-header-span-font'
            "
            >{{ this.lng.lang.section3.signInToEdit }}</span
          >
        </div>
        <div class="section-3-header-div flex-row m-2">
          <span
            class="section-3-header-span"
            :class="
              this.lng.name === 'arabic'
                ? 'arabic-font'
                : 'section-3-header-span-font'
            "
            >{{ this.lng.lang.section3.or }}</span
          >
          <button
            class="regester-btn"
            :class="
              this.lng.name === 'arabic' ? 'arabic-font' : 'regester-btn-font'
            "
            @click="this.setActiveFrame(1)"
          >
            {{ this.lng.lang.section3.registerBtn }}
          </button>
        </div>
      </div>
      <div
        class="login-container-div flex-column"
        :class="this.lng.name === 'arabic' ? 'arabic-font' : 'input-contr-font'"
      >
        <!-- ------------------------LOGIN FORM--------------------------------------------- -->
        <form
          class="login-form flex-column"
          @submit.prevent="this.goToUserProfile"
          v-if="this.loginOutForms[0]"
        >
          <input
            type="email"
            :class="this.loginEmailRedBorder ? 'red-border' : ''"
            class="input-contr form-control"
            :placeholder="
              this.activeCustomer.email
                ? this.activeCustomer.email
                : this.lng.lang.section3.formLogin.email
            "
            required
            v-model="this.customer.email"
          />
          <input
            type="password"
            class="input-contr form-control"
            :placeholder="this.lng.lang.section3.formLogin.password"
            required
            v-model="this.customer.password"
          />
          <div
            class="password-email-notcorrect-div"
            v-if="this.showForgetPassword"
          >
            <span>
              {{ this.lng.lang.section3.formLogin.passwordOrEmailNotCorrect }}
            </span>
            <span
              class="forget-password-span"
              @click="this.genVerfNumberForNewPass"
              >{{ this.lng.lang.section3.formLogin.forgetPassword }}</span
            >
          </div>
          <button
            type="submit"
            class="login-btn"
            v-if="!this.activeCustomer._id"
          >
            {{ this.lng.lang.section3.formLogin.loginBtn }}
          </button>
          <button
            type="button"
            class="login-btn"
            @click="this.$emit('logoutNow')"
            v-if="this.activeCustomer._id"
          >
            {{ this.lng.lang.section1.nav.logoutBtn }}
          </button>
        </form>
        <!-- ------------------------RRGESTER FORM--------------------------------------------- -->
        <form
          class="register-form flex-column"
          v-if="this.loginOutForms[1]"
          @submit.prevent="this.checkEmail"
        >
          <input
            type="name"
            class="input-contr form-control"
            :placeholder="this.lng.lang.section3.formRegister.name"
            required
            v-model="this.newCustomer.name"
          />
          <input
            type="email"
            class="input-contr form-control"
            :class="this.registerEmailRedBorder ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formRegister.email"
            required
            v-model="this.newCustomer.email"
          />
          <input
            type="password"
            class="input-contr form-control"
            :class="this.showPasswordNotMatch ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formRegister.password"
            required
            v-model="this.newCustomer.password"
          />
          <input
            type="password"
            class="input-contr form-control"
            :class="this.showPasswordNotMatch ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formRegister.reenterPassword"
            v-model="this.retypePassword"
            required
          />
          <div class="password-not-match" v-if="this.showPasswordNotMatch">
            <span>{{
              this.lng.lang.section3.formRegister.passwordsNotMatch
            }}</span>
          </div>
          <div class="password-not-match" v-if="this.showEmailAllreadyExist">
            <span>{{
              this.lng.lang.section3.formRegister.emailAllreadyExist
            }}</span>
          </div>
          <button type="submit" class="login-btn">
            {{ this.lng.lang.section3.formRegister.registerBtn }}
          </button>
          <span class="have-account-span" @click="this.allradyHaveAccount">{{
            this.lng.lang.section3.formRegister.allrradyHaveTxt
          }}</span>
        </form>
        <!-- ------------------------REGESTER CONFIRMATION CODE FORM--------------------------------------------- -->
        <form
          class="confirm-form flex-column"
          v-if="this.loginOutForms[2] && !this.showAccountCreatedLbl"
          @submit.prevent="this.addNewCustomer"
        >
          <input
            class="input-contr form-control"
            :class="this.getWrongConfirmNumber ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formRegisterConfirm.codeInput"
            required
            v-model="this.userVefNumber"
          />
          <button type="submit" class="confirm-btn">
            {{ this.lng.lang.section3.formRegisterConfirm.confirmBtn }}
          </button>
          <span
            class="dont-recive-span"
            @click="this.setEmailRegisterRedBorder"
            >{{
              this.lng.lang.section3.formRegisterConfirm.dontReciveCode
            }}</span
          >
        </form>
        <!-- ------------------------RESET PASSWORD FORM--------------------------------------------- -->
        <form
          class="register-form flex-column"
          v-if="this.loginOutForms[4] && !this.showPasswordChangedLbl"
          @submit.prevent="this.checkNewPassword"
        >
          <input
            type="email"
            class="input-contr form-control"
            placeholder="email"
            required
            :value="this.customer.email"
            readonly
          />
          <input
            type="password"
            class="input-contr form-control"
            :class="this.showNewPasswordNotMatch ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formResetPass.password"
            required
            v-model="this.newPassword"
          />
          <input
            type="password"
            class="input-contr form-control"
            :class="this.showNewPasswordNotMatch ? 'red-border' : ''"
            :placeholder="this.lng.lang.section3.formResetPass.reenterPassword"
            v-model="this.retypeNewPassword"
            required
          />
          <div class="password-not-match" v-if="this.showNewPasswordNotMatch">
            <span>{{
              this.lng.lang.section3.formResetPass.passwordsNotMatch
            }}</span>
          </div>
          <button type="submit" class="login-btn">
            {{ this.lng.lang.section3.formResetPass.saveBtn }}
          </button>
        </form>
        <!-- ------------------------RESET PASSWORD CONFIRAMTION CODE FORM--------------------------------------------- -->
        <form
          class="set-newpassword-form flex-column"
          @submit.prevent="this.setNewPassword"
          v-if="this.loginOutForms[3]"
        >
          <input
            class="input-contr form-control"
            :class="this.getWrongConfirmNumber2 ? 'red-border' : ''"
            :placeholder="
              this.lng.lang.section3.formConfirmResSetPass.codeInput
            "
            required
            v-model="this.userVefNumber"
          />
          <button type="submit" class="confirm-btn">
            {{ this.lng.lang.section3.formConfirmResSetPass.confirmBtn }}
          </button>
          <span class="dont-recive-span" @click="this.setEmailLoginRedBorder">{{
            this.lng.lang.section3.formConfirmResSetPass.dontReciveCode
          }}</span>
        </form>
        <div>
          <span
            class="success-reset-password-span"
            :class="
              this.lng.name === 'arabic'
                ? 'arabic-font'
                : 'success-reset-password-span-font'
            "
            v-if="this.showPasswordChangedLbl"
            >{{ this.lng.lang.section3.passwordChanged }}
          </span>
        </div>
        <div>
          <span
            class="success-reset-password-span"
            :class="
              this.lng.name === 'arabic'
                ? 'arabic-font'
                : 'success-reset-password-span-font'
            "
            v-if="this.showAccountCreatedLbl"
            >{{ this.lng.lang.section3.accountCreated }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addNewCustomer,
  checkLogin,
  sendVerfNum,
  getCustomerByEmail,
  changeCustomerPassword,
  getActiveCustomer,
} from "../../../components/modal.js";
export default {
  props: ["lng", "activeCustomer"],
  data() {
    return {
      userLoggedin: false,
      showForgetPassword: false,
      showPasswordNotMatch: false,
      showNewPasswordNotMatch: false,
      getWrongConfirmNumber: false,
      getWrongConfirmNumber2: false,
      loginEmailRedBorder: false,
      registerEmailRedBorder: false,
      showPasswordChangedLbl: false,
      showAccountCreatedLbl: false,
      showEmailAllreadyExist: false,
      loginOutForms: [true, false, false, false, false],
      customer: {
        email: "",
        password: "",
      },
      newCustomer: {
        name: "",
        email: "",
        password: "",
      },
      retypePassword: "",
      verfNumber: 0,
      userVefNumber: "",
      newPassword: "",
      retypeNewPassword: "",
    };
  },
  methods: {
    setActiveFrame(index) {
      // this.customer = {};
      if (index === 0) {
        this.newCustomer = {};
        this.retypePassword = "";
        this.showPasswordNotMatch = false;
        this.registerEmailRedBorder = false;
        this.getWrongConfirmNumber2 = false;
        this.showEmailAllreadyExist = false;
      }
      if (index === 1) {
        this.customer = {};
      }
      if (index === 2) {
        this.showPasswordNotMatch = false;
        this.getWrongConfirmNumber = false;
        this.registerEmailRedBorder = false;
        this.showEmailAllreadyExist = false;
      }
      if (index === 3) {
        this.customer.password = "";
      }
      this.userVefNumber = "";
      this.loginOutForms.forEach((freamValue, i) => {
        this.loginOutForms[i] = false;
      });
      this.loginOutForms[index] = true;
    },
    async goToUserProfile() {
      try {
        const customerID = await checkLogin(this.customer);
        this.showForgetPassword = false;
        this.$router.push({
          name: "profile",
          params: { id: customerID, lngname: this.lng.name },
        });
        this.customer = {};
        this.newCustomer = {};
        //go to profile page...
      } catch (err) {
        this.showForgetPassword = true;
        console.log(err.message);
      }
    },
    async checkEmail() {
      this.showEmailAllreadyExist = false;
      this.showNewPasswordNotMatch = false;
      try {
        // check if email alrrrady has acount in database..
        const customerExist = await getCustomerByEmail(this.newCustomer.email);
        // console.log("customerExist");
        this.registerEmailRedBorder = true;
        this.showEmailAllreadyExist = true;
      } catch (err) {
        try {
          if (this.newCustomer.password === this.retypePassword) {
            this.verfNumber = Math.floor(
              Math.random() * (9999 - 2000 + 1) + 2000
            );
            this.setActiveFrame(2);
            await sendVerfNum({
              receverMail: this.newCustomer.email,
              verfNumber: String(this.verfNumber),
            });
          } else {
            this.showPasswordNotMatch = true;
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    },
    async addNewCustomer() {
      try {
        // console.log(this.verfNumber);
        if (Number(this.userVefNumber) === this.verfNumber) {
          await addNewCustomer(this.newCustomer);
          this.customer = this.newCustomer;
          this.showAccountCreatedLbl = true;
          setTimeout(() => {
            this.goToUserProfile();
            this.showAccountCreatedLbl = false;
          }, 2500);
        } else {
          this.getWrongConfirmNumber = true;
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    async genVerfNumberForNewPass() {
      try {
        if (this.customer.email) {
          this.customer.id = await getCustomerByEmail(this.customer.email);

          this.verfNumber = Math.floor(
            Math.random() * (9999 - 2000 + 1) + 2000
          );
          // console.log(this.verfNumber);
          await sendVerfNum({
            receverMail: this.customer.email,
            verfNumber: String(this.verfNumber),
          });
          this.setActiveFrame(3);
        } else {
          this.loginEmailRedBorder = true;
        }
      } catch (err) {
        this.loginEmailRedBorder = true;
      }
    },
    setNewPassword() {
      if (this.verfNumber === Number(this.userVefNumber)) {
        this.setActiveFrame(4);
      } else {
        this.getWrongConfirmNumber2 = true;
      }
    },
    async checkNewPassword() {
      try {
        if (this.newPassword === this.retypeNewPassword) {
          await changeCustomerPassword(this.customer.id, this.newPassword);
          this.customer.password = this.newPassword;
          this.showPasswordChangedLbl = true;
          setTimeout(() => {
            this.goToUserProfile();
            this.showPasswordChangedLbl = false;
          }, 2500);
        } else {
          this.showNewPasswordNotMatch = true;
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    setEmailLoginRedBorder() {
      this.loginEmailRedBorder = true;
      this.setActiveFrame(0);
    },
    setEmailRegisterRedBorder() {
      this.registerEmailRedBorder = true;
      this.setActiveFrame(1);
    },
    allradyHaveAccount() {
      this.loginEmailRedBorder = false;
      this.showForgetPassword = false;
      this.setActiveFrame(0);
    },
    async setUpActiveCustomer() {
      try {
        this.activeCustomer = await getActiveCustomer();
        this.userLoggedin = true;
        console.log(this.activeCustomer);
      } catch (err) {
        this.userLoggedin = false;
        // console.log('no user active..');
      }
    },
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
.home-section-3 {
  height: 70vh;
  width: 100%;

  transition: transform 1s, opacity 1s;
}
.section-3-header-div {
  width: 100%;
}
.section-3-header-span {
  font-size: 20px;
  color: rgb(39, 39, 39);
}
.section-3-header-span-font {
  font-family: "Archivo Black", sans-serif;
}
.success-reset-password-span {
  font-size: 20px;
  color: rgb(39, 39, 39);
}
.success-reset-password-span-font {
  font-family: "Archivo Black", sans-serif;
}
.regester-btn {
  background-color: white;
  color: rgb(39, 39, 39);
  border: 2px solid rgb(39, 39, 39);
  border-radius: 12px;
  padding: 1px 10px 1px 10px;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.regester-btn-font {
  font-family: "Comfortaa";
}
.regester-btn:hover {
  background-color: rgb(39, 39, 39);
  color: white;
  border-color: white;
  box-shadow: 0px 0px 2.5px 2.5px rgb(39, 39, 39);
}
.login-container-div {
  width: 100%;
  margin-top: 35px;
}
.login-form,
.register-form,
.confirm-form,
.set-newpassword-form {
  height: 100%;
  /* width: 100%; */
}
.input-contr {
  height: 35px;
  width: 350px;
  font-size: 15px;
  margin-bottom: 8px;
  border: 2px solid;
  border-radius: 12px;
  border-color: rgb(90, 90, 90);
  color: rgb(39, 39, 39);
}
.input-contr-font {
  font-family: "Comfortaa";
}
.red-border {
  border: 2px solid rgba(209, 64, 64, 0.7);
}
.lbl {
  width: 150px;
}
.login-btn,
.confirm-btn {
  width: 100%;
  height: 35px;
  background-color: rgb(39, 39, 39);
  border: 2px solid white;
  border-radius: 12px;
  color: white;
  /* font-family: "Comfortaa"; */
  font-size: 18px;
  margin-top: 15px;
}
.login-btn:hover,
.confirm-btn:hover {
  box-shadow: 0px 0px 2.5px 2.5px rgb(39, 39, 39);
}
.password-email-notcorrect-div {
  color: rgb(230, 36, 36);
  font-size: 12px;
  margin-top: 10px;
}
.forget-password-span {
  cursor: pointer;
}
.password-not-match {
  color: rgb(230, 36, 36);
  font-size: 12px;
  margin-top: 10px;
}
.have-account-span,
.dont-recive-span {
  color: rgb(115, 115, 228);
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
}
.forms-profile-div {
  width: 100%;
  height: 100%;
}
/* ---------------------------------------MEDIA QUERY SECTION3--------------------------------------------------- */
@media (max-width: 600px) {
  .section-3-header-span {
    font-size: 14px;
  }
  .regester-btn {
    font-size: 14px;
  }
  .input-contr {
    width: 250px;
    height: 30px;
    font-size: 13px;
    border-radius: 12px;
  }
  .login-btn {
    font-size: 14px;
    height: 30px;
    border-radius: 12px;
  }
  .success-reset-password-span {
    font-size: 15px;
  }
}
/* @media (max-width: 460px) {
  .section-3-header-span {
    font-size: 14px;
  }
  .regester-btn {
    font-size: 14px;
  }
  .input-contr {
    width: 180px;
    height: 25px;
    font-size: 12px;
  }
  .login-btn {
    height: 25px;
    font-size: 14px;
  }
  .have-account-span {
    font-size: 11px;
  }
} */
</style>

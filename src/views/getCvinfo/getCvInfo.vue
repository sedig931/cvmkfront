<template>
  <div class="windows-container-div">
    <div
      class="container-nav-div flex-row"
      :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
    >
      <div
        class="nav-div flex-row"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'nav-btns-font-eng'
        "
      >
        <div class="home-about-nav-div flex-row">
          <button class="home-about-btn home-btn" @click="this.goToHomeSection">
            {{ this.lng.lang.section1.nav.homeBtn }}
          </button>
          <span> | </span>
          <button
            class="home-about-btn about-btn"
            :class="this.lng.name === 'Français' ? 'about-less-430' : ''"
            @click="this.goToAboutSection"
          >
            {{ this.lng.lang.section1.nav.aboutBtn }}
          </button>
          <span> | </span>
          <button class="home-about-btn about-btn" @click="this.goToProfile">
            {{ this.lng.lang.section1.nav.profileBtn }}
          </button>
        </div>
        <div class="log-in-div" @click="this.loginLogout">
          <button
            class="login-btn"
            :class="
              this.lng.name === 'arabic'
                ? 'sc-less-430'
                : this.lng.name === 'Français'
                ? 'sc-less-430'
                : ''
            "
          >
            {{
              this.customer._id
                ? `${this.lng.lang.section1.nav.logoutBtn}`
                : `${this.lng.lang.section1.nav.loginBtn}`
            }}
          </button>
        </div>
      </div>
    </div>
    <div
      class="generate-cv-main-div"
      :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
    >
      <div
        class="gen-info-main-div"
        @click="this.showHideDropDownMenu"
        @submit.prevent="this.submitFinishCereation"
      >
        <form
          class="form-mother"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'form-mother-font'
          "
          @input="this.checkSizeWhileTyping"
          v-if="!this.showBuyNow"
        >
          <div class="back-div flex-row">
            <span
              class="arrow-back-span text-muted"
              @click="this.goPrevForm"
              v-show="this.activeForm > 0 || this.activeNestedForm > 0"
            >
              <i
                class="bi bi-arrow-left flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-arrow-right flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </span>
          </div>
          <div
            class="form-child form--1"
            id="form_1"
            v-show="this.setActiveForm('form_1')"
          >
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span
                      >{{
                        this.lng.lang.section2.getCvInfo.forms.form1.fullName
                          .lbl
                      }}
                    </span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted form_0_0_element"
                  id="name"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form1.fullName.holder
                  "
                  v-model="this.resumeValues.fullName"
                />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form1.email.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted form_0_0_element"
                  id="email"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form1.email.holder
                  "
                  v-model="this.resumeValues.email"
                />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form1.phone.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted form_0_0_element"
                  id="phone"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form1.phone.holder
                  "
                  v-model="this.resumeValues.phone"
                />
              </div>
            </div>

            <!-- ----------------------------------- ADDRESS ROW ------------------------------------ -->
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span class="">{{
                      this.lng.lang.section2.getCvInfo.forms.form1.address.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <div
                  class="group-input-div flex-row"
                  @click="this.showHideAddressMenue"
                >
                  <div class="dropdown-selected-address-div flex-row">
                    <input
                      type="text"
                      class="form-control input-get-address text-muted drop-down form_0_0_element"
                      :placeholder="
                        this.lng.lang.section2.getCvInfo.forms.form1.address
                          .holder.country
                      "
                      id="address-country"
                      v-model="this.resumeValues.address.country"
                      @input="this.searchForCountry"
                    />
                    <div
                      class="drop-down-menu-div form-control p-0 m-0 text-muted"
                      v-show="
                        this.viewCountrysMenu && this.lng.name === 'english'
                      "
                      @click="this.updateSelectedValue"
                    >
                      <span
                        v-for="(country, i) in this.searchedCountry"
                        :key="i"
                        class="menu-item flex-row text-center"
                        id="country-item"
                        :data-country="country"
                        >{{ country }}</span
                      >
                    </div>
                  </div>

                  <div class="dropdown-selected-address-div flex-row">
                    <input
                      type="text"
                      class="form-control input-get-address text-muted drop-down form_0_0_element"
                      :placeholder="
                        this.lng.lang.section2.getCvInfo.forms.form1.address
                          .holder.city
                      "
                      id="address-city"
                      v-model="this.resumeValues.address.city"
                      @input="this.searchForCities"
                    />
                    <div
                      class="drop-down-menu-div form-control p-0 m-0 text-muted"
                      v-show="this.viewCityMenu && this.lng.name === 'english'"
                      @click="this.updateSelectedValue"
                    >
                      <span
                        v-for="(city, i) in this.searchedCities"
                        :key="i"
                        class="menu-item flex-row text-center"
                        id="city-item"
                        :data-city="city"
                        >{{ city }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ------------------------------- Nationality Row ------------------------------- -->
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span
                      >{{
                        this.lng.lang.section2.getCvInfo.forms.form1.nationality
                          .lbl
                      }}
                    </span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted form_0_0_element"
                  id="nationality"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form1.nationality
                      .holder
                  "
                  v-model="this.resumeValues.nationality"
                />
              </div>
            </div>
            <!-- ---------------------------- Place Of birth Row ------------------------------------- -->
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form1.placeBirth
                        .lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted form_0_0_element"
                  id="placeofbirth"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form1.placeBirth
                      .holder
                  "
                  v-model="this.resumeValues.placeOfBirth"
                />
              </div>
            </div>
            <!-- ----------------------------- Date Of Birth Row -------------------------------------- -->
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form1.birthDate.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <div class="group-input-div flex-row">
                  <button
                    type="button"
                    class="input-birth-date-btn birth-date-btn-year form-control flex-row m-0 p-0 drop-down"
                  >
                    <div
                      class="dropdown-selected-div flex-row drop-down"
                      id="birthdate-year"
                      @click="showHideBirthDayMenue"
                    >
                      <span class="drop-down">
                        {{
                          this.resumeValues.dateOfBirth.year
                            ? this.resumeValues.dateOfBirth.year
                            : this.lng.lang.section2.getCvInfo.forms.form1
                                .birthDate.holder.year
                        }}
                      </span>
                      <i class="bi bi-chevron-down mt-1 drop-down"></i>
                      <div
                        @click="this.updateSelectedValue"
                        class="drop-down-menu-div form-control p-0 m-0 text-muted"
                        v-show="this.viewYearsMenu"
                      >
                        <span
                          class="menu-item"
                          v-for="year in this.years"
                          :key="year"
                          id="year-item"
                          :data-year="year"
                          >{{ year }}</span
                        >
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="input-birth-date-btn birth-date-btn-month form-control text-muted flex-row m-0 p-0 drop-down"
                  >
                    <div
                      class="dropdown-selected-div flex-row drop-down"
                      id="birthdate-month"
                      @click="showHideBirthDayMenue"
                    >
                      <span class="drop-down">
                        {{
                          this.resumeValues.dateOfBirth.month
                            ? this.resumeValues.dateOfBirth.month
                            : this.lng.lang.section2.getCvInfo.forms.form1
                                .birthDate.holder.month
                        }}
                      </span>
                      <i class="bi bi-chevron-down mt-1 drop-down"></i>
                      <div
                        class="drop-down-menu-div form-control p-0 m-0 text-muted"
                        v-show="this.viewMonthsMenu"
                        @click="this.updateSelectedValue"
                      >
                        <span
                          v-for="month in this.months"
                          :key="month"
                          class="menu-item"
                          id="month-item"
                          :data-month="month"
                          >{{ month }}</span
                        >
                      </div>
                    </div>
                  </button>
                  <button
                    class="input-birth-date-btn birth-date-btn-day form-control text-muted flex-row m-0 p-0"
                    type="button"
                  >
                    <div
                      class="dropdown-selected-div flex-row drop-down"
                      id="birthdate-day"
                      @click="showHideBirthDayMenue"
                    >
                      <span class="drop-down">
                        {{
                          this.resumeValues.dateOfBirth.day
                            ? this.resumeValues.dateOfBirth.day
                            : this.lng.lang.section2.getCvInfo.forms.form1
                                .birthDate.holder.day
                        }}
                      </span>
                      <i class="bi bi-chevron-down mt-1 drop-down"></i>
                      <div
                        class="drop-down-menu-div form-control p-0 m-0 text-muted"
                        v-show="this.viewDaysMenu"
                        @click="this.updateSelectedValue"
                      >
                        <span
                          class="menu-item"
                          id="day-item"
                          :data-day="day"
                          v-for="day in this.days"
                          :key="day"
                          >{{ day }}</span
                        >
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- -------------------------------------------------------------Form 1 _ 1 ---------------------------------- -->
          <div
            class="form-child form-1-1"
            v-show="this.setActiveForm('form_1_1')"
          >
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span
                      >{{
                        this.lng.lang.section2.getCvInfo.forms.form11.gender.lbl
                      }}
                    </span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <div class="flex-row p-0 m-0 group-input-gender-div text-muted">
                  <label for="male" name="male" class="radio-lbl gender-lbl">{{
                    this.lng.lang.section2.getCvInfo.forms.form11.gender.holder
                      .male
                  }}</label>
                  <input
                    name="gender"
                    id="male"
                    value="Male"
                    type="radio"
                    class="text-muted radio-btns gender-radio-btn form_0_1_element"
                    @click="this.setGender"
                  />
                  <span>|</span>
                  <label for="female" class="radio-lbl gender-lbl">{{
                    this.lng.lang.section2.getCvInfo.forms.form11.gender.holder
                      .female
                  }}</label>
                  <input
                    name="gender"
                    id="female"
                    value="Female"
                    type="radio"
                    class="text-muted radio-btns gender-radio-btn form_0_1_element"
                    @click="this.setGender"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row text-muted">
                <label class="form-label lbl p-0 m-0">
                  <div class="justify-double-dot">
                    <span
                      >{{
                        this.lng.lang.section2.getCvInfo.forms.form11
                          .materialStatus.lbl
                      }}
                    </span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <div class="flex-row p-0 m-0 group-input-gender-div text-muted">
                  <label for="marred" class="radio-lbl relation-lbl">{{
                    this.lng.lang.section2.getCvInfo.forms.form11.materialStatus
                      .holder.marred
                  }}</label>
                  <input
                    name="relationship"
                    id="marred"
                    value="Marred"
                    type="radio"
                    class="text-muted radio-btns relation-radio-btn form_0_1_element"
                    @click="this.setRelationShip"
                  />
                  <span>|</span>
                  <label for="single" class="radio-lbl relation-lbl">{{
                    this.lng.lang.section2.getCvInfo.forms.form11.materialStatus
                      .holder.single
                  }}</label>
                  <input
                    name="relationship"
                    id="single"
                    value="Single"
                    type="radio"
                    class="text-muted radio-btns relation-radio-btn form_0_1_element"
                    @click="this.setRelationShip"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0" for="jobtitle">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form11.jobTitle.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  name="jobtitle"
                  type="text"
                  class="input-contr form-control text-muted form_0_1_element"
                  id="job-title"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form11.jobTitle
                      .holder
                  "
                  v-model="this.resumeValues.jobTitle"
                />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row textArea-col-div">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.form11.intro.lbl
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <textarea
                  type="text"
                  class="input-contr input-textArea form-control text-muted form_0_1_element"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.form11.intro.holder
                  "
                  v-model="this.resumeValues.introParagraph"
                />
              </div>
            </div>
          </div>
          <!-- 1. Your profile is always placed at the top of your resume. 
          2. Describe yourself in short and strong terms with both the vacancy and job title
          in mind. Do not use one liners, but try to be as concise as possible. 
          3.Create a good profile by mentioning each of the following at the very
          least; achievements, qualities, ambitions, goals, and what you are
          looking for -->

          <!-- -----------------------------Education Form ----- FORM 2 ---------------------------------- -->
          <EduForm
            v-show="this.setActiveForm('form_2')"
            :formInfo="this.resumeValues.eduForm"
            :showGradWith="this.showGradWith"
            :showFromMonth="this.showFromMonth"
            :showFromYear="this.showFromYear"
            :showToMonth="this.showToMonth"
            :showToYear="this.showToYear"
            :lng="this.lng"
            :cvNum="this.cvNum"
            @showHideMenue="this.showHideForm2Menues"
          />
          <!-- -------------------------------SKILLS FORM--------- FORM 3 ------------------------------- -->
          <LangsSkillsForm
            v-show="this.setActiveForm('form_3')"
            :formInfo="this.resumeValues.skillsForm"
            formName="skills"
            :lng="this.lng"
          />
          <!-- -------------------------------LANGUAGE FORM--------- FORM 4 ------------------------------- -->
          <LangsSkillsForm
            v-show="this.setActiveForm('form_4')"
            :formInfo="this.resumeValues.langsForm"
            formName="languages"
            :lng="this.lng"
          />
          <!-- ------------------------------------------ADD MORE INFO---------------------------------- -->
          <addInfo
            v-show="this.setActiveForm('form_last')"
            :allForms="this.allForms"
            :expForms="this.resumeValues.workExpForm"
            :coursesForms="this.resumeValues.coursesForm"
            @formFound="this.goToFormDirect"
            :lng="this.lng"
          />
          <!-- @makeStepsSmaller="this.makeStepsSmaller" -->
          <!-- ------------------------------------------WORK EXPERIENSE FORM---------------------------------- -->
          <workExForm
            v-if="this.setActiveForm('form_5')"
            :allForms="this.allForms"
            :formInfo="this.resumeValues.workExpForm"
            :workExshowFromMonth="this.workExshowFromMonth"
            :workExshowFromYear="this.workExshowFromYear"
            :workExshowToMonth="this.workExshowToMonth"
            :workExshowToYear="this.workExshowToYear"
            @showWrokDateMenus="this.showHideWorkExpMenues"
            @dropSingleWorkExp="this.dropWorkExp"
            :currentWorkForm="this.currentWorkForm"
            @goLeft="if (this.currentWorkForm !== 0) this.currentWorkForm--;"
            @goRight="
              if (
                this.currentWorkForm + 1 !==
                this.resumeValues.workExpForm.length
              ) {
                this.currentWorkForm++;
              }
            "
            :lng="this.lng"
          />
          <!-- ------------------------------------------COURSES FORM---------------------------------- -->
          <coursesForm
            v-if="this.setActiveForm('form_6')"
            :allForms="this.allForms"
            :formInfo="this.resumeValues.coursesForm"
            :currentCourseForm="this.currentCourseForm"
            @dropSingleCourse="this.dropCourse"
            @goLift="
              if (this.currentCourseForm + 1 > 1) this.currentCourseForm--;
            "
            @goRight="
              if (
                this.currentCourseForm <
                this.resumeValues.coursesForm.length - 1
              )
                this.currentCourseForm++;
            "
            :lng="this.lng"
          />
          <!-- ------------------------------------------Thesis FORM---------------------------------- -->
          <div class="child-form" v-if="this.setActiveForm('form_7')">
            <div class="delete-div flex-row">
              <div class="add-minus-div flex-row" @click="this.dropThesis">
                <i class="bi bi-trash3-fill"></i>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col flex-row">
                <label class="form-label lbl text-muted p-0 m-0">
                  <div class="justify-double-dot">
                    <span>{{
                      this.lng.lang.section2.getCvInfo.forms.addThesisForm
                        .thesisTopic
                    }}</span>
                    <span class="double-dot-span">:</span>
                  </div>
                </label>
              </div>
              <div class="col flex-row">
                <input
                  type="text"
                  class="input-contr form-control text-muted"
                  :class="`form_${this.allForms.findIndex(
                    (cname) => cname === 'form_7'
                  )}_element`"
                  id="thesis"
                  :placeholder="
                    this.lng.lang.section2.getCvInfo.forms.addThesisForm
                      .thesisHolder
                  "
                  v-model="this.resumeValues.eduForm.thesis"
                />
              </div>
            </div>
          </div>
          <!-- ------------------------------------------Links FORM---------------------------------- -->
          <linksForm
            v-if="this.setActiveForm('form_8')"
            :links="this.resumeValues.webLinks"
            :allForms="this.allForms"
            :lng="this.lng"
            @dropLinks="this.dropLinks"
          />
          <!-- ------------------------------------------BTNS NEXT BACK---------------------------------- -->
          <div class="next-back-div flex-row">
            <span
              class="span-register-need ms-3 me-3"
              v-if="this.showHideNeedRegister"
            >
              sorry, you need to login first
            </span>
            <button
              class="btn-go-next"
              type="button"
              @click="this.goNextForm"
              v-show="this.activeForm + 1 < this.allForms.length"
            >
              <span class="arrow-span flex-row">
                {{ this.lng.lang.section2.getCvInfo.forms.btnGoNextLbl }}
                <i
                  class="bi bi-arrow-right flex-row"
                  v-if="this.lng.name !== 'arabic'"
                ></i>
                <i
                  class="bi bi-arrow-left flex-row"
                  v-if="this.lng.name === 'arabic'"
                ></i>
              </span>
            </button>
            <button
              class="btn-finish"
              type="submit"
              v-show="this.activeForm + 1 === this.allForms.length"
            >
              <span>
                {{ this.lng.lang.section2.getCvInfo.forms.btnFinish }}</span
              >
            </button>
          </div>
        </form>
        <div
          class="form-mother"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'form-mother-font'
          "
          v-if="this.showBuyNow"
        >
          <div class="back-div flex-row">
            <span
              class="arrow-back-span text-muted"
              @click="this.backFromBuingNow"
              v-show="this.activeForm > 0 || this.activeNestedForm > 0"
            >
              <i
                class="bi bi-arrow-left flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-arrow-right flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </span>
          </div>
          <span class="buying-now-apan">{{
            this.lng.lang.section2.getCvInfo.forms.paymentForm.spanFree
          }}</span>
          <button class="bying-now-btn">
            <a
              class="anchor-bying-now"
              :href="this.ppPaymentLink"
              v-if="this.payLinkDone"
            >
              {{
                this.lng.lang.section2.getCvInfo.forms.paymentForm
                  .continueAnchor
              }}
              <span class="price-span-txt" dir="ltr">
                {{ this.lng.lang.section2.getCvInfo.forms.paymentForm.price }}
              </span>
            </a>
            <!-- <i class="bi bi-arrow-clockwise" v-if="!this.payLinkDone"></i> -->
            <LoadingPoints v-if="!this.payLinkDone" />
          </button>
        </div>
        <div class="steps-div flex-row">
          <div
            class="step-lines-div flex-row"
            v-for="(line, ii) in this.allForms.length"
            :key="ii"
          >
            <div
              class="step-div-out outer-step-div-mobile"
              :class="ii >= 5 ? this.setStepDivSmaller() : 'outer-step-div'"
            >
              <div
                class="step-div flex-row"
                :class="
                  ii === this.activeForm
                    ? 'done-step-div'
                    : ii < this.activeForm
                    ? 'active-step-div'
                    : ''
                "
              >
                <span class="number-step-span">{{ ii + 1 }}</span>
              </div>
            </div>

            <div class="flex-row" v-show="ii + 1 < this.allForms.length">
              <div
                v-for="(line, i) in this.stepsNumbers"
                :key="i"
                class="small-lines-div"
                :class="this.stepsNumbers === 1 ? 'smaller-lines-div' : ''"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="line-div"></div>
      <div class="cv-display-div flex-row">
        <div class="inner-cv-display-div">
          <Frame1
            v-if="this.cvNum === '1' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame2
            v-if="this.cvNum === '2' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(2)"
          />
          <Frame3
            v-if="this.cvNum === '3' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame4
            v-if="this.cvNum === '4' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame5
            v-if="this.cvNum === '5' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame6
            v-if="this.cvNum === '6' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame7
            v-if="this.cvNum === '7' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame8
            v-if="this.cvNum === '8' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame9
            v-if="this.cvNum === '9' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame10
            v-if="this.cvNum === '10' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame11
            v-if="this.cvNum === '11' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame12
            v-if="this.cvNum === '12' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame13
            v-if="this.cvNum === '13' && this.trick4resizeContainers"
            :corner="true"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame14
            v-if="this.cvNum === '14' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :corner="true"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(14)"
          />
          <Frame15
            v-if="this.cvNum === '15' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame16
            v-if="this.cvNum === '16' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(16)"
          />
          <Frame17
            v-if="this.cvNum === '17' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(17)"
            :corner="true"
          />
          <Frame18
            v-if="this.cvNum === '18' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
          <Frame19
            v-if="this.cvNum === '19' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :corner="true"
          />
          <Frame20
            v-if="this.cvNum === '20' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(20)"
            :corner="true"
          />
          <Frame21
            v-if="this.cvNum === '21' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
            :photoName="this.setPhotoFrame(21)"
          />
          <Frame22
            v-if="this.cvNum === '22' && this.trick4resizeContainers"
            :resumeValues="this.resumeValues"
            :lng="this.lng"
          />
        </div>
      </div>
    </div>
    <AcceptStorage
      :lng="this.lng"
      @setTermsAccepted="this.setTermsAccepted"
      @setTermsNotAccepted="this.setTermsNotAccepted"
      v-if="this.showAttentionWindow"
    />
  </div>
</template>

<script>
import Frame1 from "../cvsViews/cvView-1/cvView-1.vue";
import Frame2 from "../cvsViews/cvView-2/cvView-2.vue";
import Frame3 from "../cvsViews/cvView-3/cvView-3.vue";

import Frame4 from "../cvsViews/cvView-4/cvView-4.vue";
import Frame5 from "../cvsViews/cvView-5/cvView-5.vue";

import Frame6 from "../cvsViews/cvView-6/cvView-6.vue";
import Frame7 from "../cvsViews/cvView-7/cvView-7.vue";
import Frame8 from "../cvsViews/cvView-8/cvView-8.vue";
import Frame9 from "../cvsViews/cvView-9/cvView-9.vue";
import Frame10 from "../cvsViews/cvView-10/cvView-10.vue";
import Frame11 from "../cvsViews/cvView-11/cvView-11.vue";
import Frame12 from "../cvsViews/cvView-12/cvView-12.vue";
import Frame13 from "../cvsViews/cvView-13/cvView-13.vue";
import Frame14 from "../cvsViews/cvView-14/cvView-14.vue";
import Frame15 from "../cvsViews/cvView-15/cvView-15.vue";
import Frame16 from "../cvsViews/cvView-16/cvView-16.vue";
import Frame17 from "../cvsViews/cvView-17/cvView-17.vue";
import Frame18 from "../cvsViews/cvView-18/cvView-18.vue";
import Frame19 from "../cvsViews/cvView-19/cvView-19.vue";
import Frame20 from "../cvsViews/cvView-20/cvView-20.vue";
import Frame21 from "../cvsViews/cvView-21/cvView-21.vue";
import Frame22 from "../cvsViews/cvView-22/cvView-22.vue";

import EduForm from "./eduForm.vue";
import SkillsForm from "./skillsForm.vue";
import LangsSkillsForm from "./langsSkillsForm.vue";
import addInfo from "./addInfo.vue";
import workExForm from "./workExForm.vue";
import coursesForm from "./coursesForm.vue";
import linksForm from "./linksView.vue";
import { cities } from "../../components/callCities.js";
import { languages } from "../../components/languages.js";
import AcceptStorage from "../homeViews/popUpViews/acceptStorage.vue";
import LoadingPoints from "./loading.vue";

import {
  getActiveCustomer,
  addFrameToCustomer,
  payPalPayment,
  searchFrame,
  setPhoto,
  logoutNow,
} from "../../components/modal.js";
export default {
  name: "HomeView",
  props: ["cvNum", "lngname"],
  components: {
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Frame6,
    Frame7,
    Frame8,
    Frame9,
    Frame10,
    Frame11,
    Frame12,
    Frame13,
    Frame14,
    Frame15,
    Frame16,
    Frame17,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
    Frame22,
    EduForm,
    SkillsForm,
    LangsSkillsForm,
    addInfo,
    workExForm,
    coursesForm,
    linksForm,
    AcceptStorage,
    LoadingPoints,
  },
  data() {
    return {
      print: false,
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
        },
      },
      trick4resizeContainers: true,
      customer: {
        framePhotoNames: [],
      },
      allForms: [
        ["form_1", "form_1_1"],
        "form_2",
        "form_3",
        "form_4",
        "form_last",
      ],
      // allForms: ["form_4"],
      activeForm: 0,
      activeNestedForm: 0,
      stepsNumbers: 2,
      smallCvView: true,
      ppPaymentLink: "",
      days: [],
      months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "12"],
      years: [],
      countries: [],
      searchedCountry: [],
      currentCities: [],
      searchedCities: [],
      currentCourseForm: 0,
      currentWorkForm: 0,
      resumeValues: {
        address: {},
        dateOfBirth: {},
        eduForm: {
          yearsStudy: {
            from: {},
            to: {},
          },
          photo: {},
        },
        skillsForm: {
          princ: {},
          childs: [],
        },
        langsForm: {
          princ: {},
          childs: [],
        },
        workExpForm: [
          {
            workDate: {
              from: {},
              to: {},
            },
          },
        ],
        coursesForm: [{}],
        webLinks: {
          princ: {
            webTitle: "",
            // webHref:
            // "https://drive.google.com/file/d/1PGvMBadcOs05hsie1zwEQmZAwBWZfdx1/view",
          },
          childs: [],
        },
      },
      viewCountrysMenu: false,
      viewCityMenu: false,
      viewYearsMenu: false,
      viewMonthsMenu: false,
      viewDaysMenu: false,
      showGradWith: false,
      showFromMonth: false,
      showFromYear: false,
      showToMonth: false,
      showToYear: false,
      workExshowFromMonth: false,
      workExshowFromYear: false,
      workExshowToMonth: false,
      workExshowToYear: false,
      showBuyNow: false,
      payLinkDone: false,
      showAttentionWindow: false,
      showHideNeedRegister: false,
    };
  },
  methods: {
    checkSizeWhileTyping() {
      this.trick4resizeContainers = false;
      setTimeout(() => {
        this.trick4resizeContainers = true;
      }, 1);
    },
    setStepDivSmaller() {
      document.querySelectorAll(".step-div-out").forEach((step) => {
        step.classList.add("step-div-smaller");
      });
      this.stepsNumbers = 1;
      return "step-div-smaller";
    },
    goToFormDirect(index) {
      this.activeForm = index;
    },
    setActiveForm(formID) {
      if (typeof this.allForms[this.activeForm] === "object") {
        if (this.activeNestedForm < this.allForms[this.activeForm].length) {
          const formIndex = this.allForms[this.activeForm].findIndex(
            (form) => form === formID
          );
          return this.activeNestedForm === formIndex;
        } else {
          this.activeNestedForm = 0;
          this.activeForm++;
        }
      } else {
        const formIndex = this.allForms.findIndex((form) => form === formID);
        return this.activeForm === formIndex;
      }
    },
    goNextForm() {
      // ------------------------------------ check if its nested form or single form -------------------------
      if (typeof this.allForms[this.activeForm] === "object") {
        // -------- check all input fields get value ----------------
        const elVal = [];
        const currentFormInputElement = document.querySelectorAll(
          `.form_${this.activeForm}_${this.activeNestedForm}_element`
        );

        // const currentFormInputElement = [];
        currentFormInputElement.forEach((el) => {
          if (el.classList.contains("radio-btns")) {
            if (el.classList.contains("gender-radio-btn")) {
              this.resumeValues.gender
                ? elVal.push(this.resumeValues.gender)
                : elVal.push("");
            } else {
              this.resumeValues.relationship
                ? elVal.push(this.resumeValues.relationship)
                : elVal.push("");
            }
          } else elVal.push(el.value);
        });

        const redBorders = function (resumeValues) {
          currentFormInputElement.forEach((el) => {
            el.value === ""
              ? el.classList.add("input-empty-style")
              : el.classList.remove("input-empty-style");
            if (el.classList.contains("radio-btns")) {
              if (!resumeValues.gender) {
                document
                  .querySelectorAll(".gender-lbl")
                  .forEach((el) => el.classList.add("red-empty-radio-lbl"));
              } else
                document
                  .querySelectorAll(".gender-lbl")
                  .forEach((el) => el.classList.remove("red-empty-radio-lbl"));
              if (!resumeValues.relationship) {
                document
                  .querySelectorAll(".relation-lbl")
                  .forEach((el) => el.classList.add("red-empty-radio-lbl"));
              } else
                document
                  .querySelectorAll(".relation-lbl")
                  .forEach((el) => el.classList.remove("red-empty-radio-lbl"));
            }
          });
        };

        const setBirthDateBtnsRed = function (resumeValues) {
          if (resumeValues.dateOfBirth.year === "")
            document
              .querySelector(".birth-date-btn-year")
              .classList.add("input-empty-style");
          else
            document
              .querySelector(".birth-date-btn-year")
              .classList.remove("input-empty-style");
          if (resumeValues.dateOfBirth.month === "")
            document
              .querySelector(".birth-date-btn-month")
              .classList.add("input-empty-style");
          else
            document
              .querySelector(".birth-date-btn-month")
              .classList.remove("input-empty-style");
          if (resumeValues.dateOfBirth.day === "")
            document
              .querySelector(".birth-date-btn-day")
              .classList.add("input-empty-style");
          else
            document
              .querySelector(".birth-date-btn-day")
              .classList.remove("input-empty-style");
        };

        if (elVal.findIndex((el) => el === "") !== -1) {
          redBorders(this.resumeValues);
          setBirthDateBtnsRed(this.resumeValues);
        } else {
          redBorders(this.resumeValues);
          if (this.activeForm === 0 && this.activeNestedForm === 0) {
            if (
              this.resumeValues.dateOfBirth.day === "" ||
              this.resumeValues.dateOfBirth.month === "" ||
              this.resumeValues.dateOfBirth.year === ""
            ) {
              setBirthDateBtnsRed(this.resumeValues);
            } else {
              setBirthDateBtnsRed(this.resumeValues);
              this.activeNestedForm++;
            }
          } else {
            this.activeNestedForm++;
          }
        }
      } else {
        const elVal = [];
        const currentFormInputElement = document.querySelectorAll(
          `.form_${this.activeForm}_element`
        );

        //switch course form that dosen't had value yet...
        if (currentFormInputElement[0].classList.contains("course-element")) {
          const courseFormEmptyIndex = this.resumeValues.coursesForm.findIndex(
            (courseForm) =>
              courseForm.courseTitle === "" || courseForm.institution === ""
          );
          if (courseFormEmptyIndex !== -1) {
            this.currentCourseForm = courseFormEmptyIndex;
          }
        }
        if (currentFormInputElement[0].classList.contains("work-exper-input")) {
          const workExpEmptyIndex = this.resumeValues.workExpForm.findIndex(
            (workForm) =>
              workForm.jobTitle === "" ||
              workForm.address === "" ||
              workForm.employer === ""
          );

          if (workExpEmptyIndex !== -1) {
            this.currentWorkForm = workExpEmptyIndex;
          }
        }
        // const currentFormInputElement = [];
        currentFormInputElement.forEach((el) => elVal.push(el.value));

        const redBorders = function () {
          currentFormInputElement.forEach((el) =>
            el.value === ""
              ? el.classList.add("input-empty-style")
              : el.classList.remove("input-empty-style")
          );
        };

        const setYearsStudyBtnns = function (resumeValues) {
          if (
            resumeValues.eduForm.yearsStudy.from.month === "" ||
            resumeValues.eduForm.yearsStudy.from.year === ""
          ) {
            document
              .querySelector(".from-btn")
              .classList.add("input-empty-style");
          } else
            document
              .querySelector(".from-btn")
              .classList.remove("input-empty-style");
          if (
            resumeValues.eduForm.yearsStudy.to.month === "" ||
            resumeValues.eduForm.yearsStudy.to.year === ""
          ) {
            document
              .querySelector(".to-btn")
              .classList.add("input-empty-style");
          } else
            document
              .querySelector(".to-btn")
              .classList.remove("input-empty-style");
        };

        if (elVal.findIndex((el) => el === "") !== -1) {
          // console.log("fill all feilds please...");
          //----imortant---
          redBorders();
          setYearsStudyBtnns(this.resumeValues);
        } else {
          if (this.activeForm === 1) {
            if (
              Number(this.cvNum) === 16 ||
              Number(this.cvNum) === 14 ||
              Number(this.cvNum) === 2 ||
              Number(this.cvNum) === 17 ||
              Number(this.cvNum) === 20 ||
              Number(this.cvNum) === 21
            ) {
              const pPhoto = document.querySelector(".photo-input").files[0];
              if (!pPhoto.type.includes("image")) {
                document
                  .querySelector(".photo-input")
                  .classList.add("input-empty-style");
                return;
              }
            }

            if (
              this.resumeValues.eduForm.yearsStudy.from.month === "" ||
              this.resumeValues.eduForm.yearsStudy.from.year === "" ||
              this.resumeValues.eduForm.yearsStudy.to.month === "" ||
              this.resumeValues.eduForm.yearsStudy.to.year === ""
            ) {
              redBorders();
              setYearsStudyBtnns(this.resumeValues);
            } else {
              redBorders();
              setYearsStudyBtnns(this.resumeValues);
              this.activeForm + 1 === this.allForms.length
                ? (this.activeForm = this.activeForm)
                : this.activeForm++;
            }
          } else {
            redBorders();
            this.activeForm + 1 === this.allForms.length
              ? (this.activeForm = this.activeForm)
              : this.activeForm++;
          }
        }
      }
    },
    goPrevForm() {
      if (typeof this.allForms[this.activeForm] === "object") {
        this.activeNestedForm--;
      } else {
        if (typeof this.allForms[this.activeForm - 1] === "object") {
          this.activeNestedForm = this.allForms[this.activeForm - 1].length - 1;
          this.activeForm--;
        } else this.activeForm--;
      }
    },
    setDays() {
      for (let i = 1; i < 32; i++) {
        this.days.push(i);
      }
      for (let i = 1900; i <= 2010; i++) {
        this.years.push(i);
      }
    },
    getCountries(lang = "en") {
      const A = 65;
      const Z = 90;
      const countryName = new Intl.DisplayNames([lang], { type: "region" });
      // const countries = {};
      for (let i = A; i <= Z; ++i) {
        for (let j = A; j <= Z; ++j) {
          let code = String.fromCharCode(i) + String.fromCharCode(j);
          let name = countryName.of(code);
          if (code !== name) {
            // this.countries.push([code, name]);
            this.countries.push(name);
          }
        }
      }
      this.searchedCountry = this.countries;
    },
    showHideDropDownMenu(e) {
      if (!e.target.classList.contains("drop-down")) {
        this.hideAllDropDownMenu();
      }
    },
    showHideAddressMenue(e) {
      if (e.target.id === "address-country") {
        if (this.viewCountrysMenu) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.viewCountrysMenu = !this.viewCountrysMenu;
        }
      } else {
        if (e.target.id === "address-city") {
          if (this.resumeValues.address.country) {
            this.currentCities = cities.filter((city) =>
              city.includes(
                this.firstcharUpper(this.resumeValues.address.country)
              )
            );
            this.searchedCities = this.currentCities;
          }
          if (this.viewCityMenu) this.hideAllDropDownMenu();
          else {
            this.hideAllDropDownMenu();
            if (this.searchedCities.length > 0)
              this.viewCityMenu = !this.viewCityMenu;
          }
        }
      }
    },
    showHideBirthDayMenue(e) {
      if (e.currentTarget.id === "birthdate-year") {
        if (this.viewYearsMenu) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.viewYearsMenu = !this.viewYearsMenu;
        }
      } else if (e.currentTarget.id === "birthdate-month") {
        if (this.viewMonthsMenu) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.viewMonthsMenu = !this.viewMonthsMenu;
        }
      } else if (e.currentTarget.id === "birthdate-day") {
        if (this.viewDaysMenu) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.viewDaysMenu = !this.viewDaysMenu;
        }
      }
    },
    showHideForm2Menues(e) {
      if (e.currentTarget.id === "cer-level-div") {
        if (this.showGradWith) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.showGradWith = !this.showGradWith;
        }
      } else if (e.currentTarget.id === "gradu-from-month") {
        if (this.showFromMonth) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.showFromMonth = !this.showFromMonth;
        }
      } else if (e.currentTarget.id === "gradu-from-year") {
        if (this.showFromYear) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.showFromYear = !this.showFromYear;
        }
      } else if (e.currentTarget.id === "gradu-to-month") {
        if (this.showToMonth) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.showToMonth = !this.showToMonth;
        }
      } else if (e.currentTarget.id === "gradu-to-year") {
        if (this.showToYear) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.showToYear = !this.showToYear;
        }
      }
    },
    showHideWorkExpMenues(e) {
      if (e.currentTarget.id === "work-from-month") {
        if (this.workExshowFromMonth) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.workExshowFromMonth = true;
        }
      } else if (e.currentTarget.id === "work-from-year") {
        if (this.workExshowFromYear) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.workExshowFromYear = true;
        }
      } else if (e.currentTarget.id === "work-to-month") {
        if (this.workExshowToMonth) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.workExshowToMonth = true;
        }
      } else if (e.currentTarget.id === "work-to-year") {
        if (this.workExshowToYear) this.hideAllDropDownMenu();
        else {
          this.hideAllDropDownMenu();
          this.workExshowToYear = true;
        }
      }
    },
    dropWorkExp(i) {
      if (this.currentWorkForm !== 0) {
        this.resumeValues.workExpForm = this.resumeValues.workExpForm.filter(
          (worl, ii) => ii !== i
        );
        this.currentWorkForm--;
      } else {
        if (this.resumeValues.workExpForm.length > 1) {
          this.resumeValues.workExpForm = this.resumeValues.workExpForm.filter(
            (worl, ii) => ii !== i
          );
        } else {
          this.resumeValues.workExpForm[0] = {
            jobTitle: "",
            address: "",
            employer: "",
            workDate: {
              from: { month: "", year: "" },
              to: { month: "", year: "" },
            },
          };
          this.allForms = this.allForms.filter((form) => form !== "form_5");
        }
      }
    },
    dropCourse(i) {
      if (this.currentCourseForm !== 0) {
        this.resumeValues.coursesForm = this.resumeValues.coursesForm.filter(
          (course, ii) => ii !== i
        );
        this.currentCourseForm--;
      } else {
        if (this.resumeValues.coursesForm.length > 1) {
          this.resumeValues.coursesForm = this.resumeValues.coursesForm.filter(
            (course, ii) => ii !== i
          );
        } else {
          this.resumeValues.coursesForm[0] = {};
          this.allForms = this.allForms.filter((form) => form !== "form_6");
        }
      }
    },
    dropThesis() {
      this.resumeValues.eduForm.thesis = "";
      this.allForms = this.allForms.filter((form) => form !== "form_7");
    },
    dropLinks() {
      this.resumeValues.webLinks.princ = {};
      this.resumeValues.webLinks.childs = [];
      this.allForms = this.allForms.filter((form) => form !== "form_8");
    },
    hideAllDropDownMenu() {
      this.viewCountrysMenu = false;
      this.viewCityMenu = false;
      this.viewYearsMenu = false;
      this.viewMonthsMenu = false;
      this.viewDaysMenu = false;
      this.showGradWith = false;
      this.showFromMonth = false;
      this.showFromYear = false;
      this.showToMonth = false;
      this.showToYear = false;
      this.workExshowFromMonth = false;
      this.workExshowFromYear = false;
      this.workExshowToMonth = false;
      this.workExshowToYear = false;
    },
    updateSelectedValue(e) {
      if (e.target.id === "day-item") {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.resumeValues.dateOfBirth.day = e.target.dataset.day;
      } else if (e.target.id === "month-item") {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.resumeValues.dateOfBirth.month = e.target.dataset.month;
      } else if (e.target.id === "year-item") {
        e.target.closest(".dropdown-selected-div").classList.add("text-muted");
        this.resumeValues.dateOfBirth.year = e.target.dataset.year;
      } else if (e.target.id === "country-item") {
        this.resumeValues.address.country = e.target.dataset.country;
        if (this.resumeValues.address.country.length > 17) {
          document
            .querySelector("#address-country")
            .classList.add("country-txt");
        } else {
          document
            .querySelector("#address-country")
            .classList.remove("country-txt");
        }
      } else if (e.target.id === "city-item") {
        this.resumeValues.address.city = e.target.dataset.city.split(" (")[0];
        if (this.resumeValues.address.city.length > 17) {
          document.querySelector("#address-city").classList.add("country-txt");
        } else {
          document
            .querySelector("#address-city")
            .classList.remove("country-txt");
        }
      }
      this.hideAllDropDownMenu();
    },
    searchForCountry() {
      let country = this.firstcharUpper(this.resumeValues.address.country);
      this.searchedCountry = this.countries.filter((word) =>
        word.split()[0].includes(country)
      );
      if (this.searchedCountry.length === 0)
        this.searchedCountry = this.countries;
    },
    searchForCities() {
      let city1 = this.firstcharUpper(this.resumeValues.address.city);
      this.searchedCities = this.currentCities.filter((city) =>
        city.includes(city1)
      );
      if (this.searchedCities.length === 0)
        this.searchedCities = this.currentCities;
    },
    firstcharUpper(str) {
      if (str !== "") return str.replace(str[0], str[0].toUpperCase());
    },
    setGender(e) {
      // this.resumeValues.gender = e.target.value;
      e.target.value === "Male"
        ? (this.resumeValues.gender =
            this.lng.lang.section2.getCvInfo.forms.form11.gender.holder.male)
        : (this.resumeValues.gender =
            this.lng.lang.section2.getCvInfo.forms.form11.gender.holder.female);
    },
    setRelationShip(e) {
      // this.resumeValues.relationship = e.target.value;
      e.target.value === "Single"
        ? (this.resumeValues.relationship =
            this.lng.lang.section2.getCvInfo.forms.form11.materialStatus.holder.single)
        : (this.resumeValues.relationship =
            this.lng.lang.section2.getCvInfo.forms.form11.materialStatus.holder.marred);
    },
    backFromBuingNow() {
      this.showBuyNow = false;
    },
    async submitFinishCereation() {
      try {
        // check if customer accepti seesion restore or not...
        if (localStorage.getItem("savingApproved")) {
          if (localStorage.getItem("savingLocalyApproved")) {
            localStorage.setItem(
              "localResumeValues",
              JSON.stringify(this.resumeValues)
            );
          }
          // if there is local aproval => save resumeValues
          if (this.customer.name) {
            // check it edit or new
            if (await searchFrame("frame_" + this.cvNum)) {
              if (
                Number(this.cvNum) === 16 ||
                Number(this.cvNum) === 14 ||
                Number(this.cvNum) === 2 ||
                Number(this.cvNum) === 17 ||
                Number(this.cvNum) === 20 ||
                Number(this.cvNum) === 21
              ) {
                const dataForm = new FormData();
                dataForm.append("cvNum", this.cvNum);
                dataForm.append("photo", this.resumeValues.eduForm.photo);
                await setPhoto(dataForm);
              }

              this.resumeValues.currentLng = this.lng.name;
              await addFrameToCustomer({
                framName: "frame_" + this.cvNum,
                frameInfo: this.resumeValues,
              });

              sessionStorage.setItem(
                "customerID",
                JSON.stringify(this.customer._id)
              );
              sessionStorage.setItem(
                "resumeValues",
                JSON.stringify(this.resumeValues)
              );
              sessionStorage.setItem("frameNum", JSON.stringify(this.cvNum));
              sessionStorage.setItem("lng", JSON.stringify(this.lng));

              this.$router.push({
                name: "caporder",
              });
              //download..
            } else {
              if (
                Number(this.cvNum) === 16 ||
                Number(this.cvNum) === 14 ||
                Number(this.cvNum) === 2 ||
                Number(this.cvNum) === 17 ||
                Number(this.cvNum) === 20 ||
                Number(this.cvNum) === 21
              ) {
                const dataForm = new FormData();
                dataForm.append("cvNum", this.cvNum);
                dataForm.append("photo", this.resumeValues.eduForm.photo);
                await setPhoto(dataForm);
              }
              this.resumeValues.currentLng = this.lng.name;
              sessionStorage.setItem(
                "customerID",
                JSON.stringify(this.customer._id)
              );
              sessionStorage.setItem(
                "resumeValues",
                JSON.stringify(this.resumeValues)
              );
              sessionStorage.setItem("frameNum", JSON.stringify(this.cvNum));
              sessionStorage.setItem("lng", JSON.stringify(this.lng));
              // if user end limits..
              if (this.customer.freelimit < 5) {
                await addFrameToCustomer({
                  framName: "frame_" + this.cvNum,
                  frameInfo: this.resumeValues,
                });
                this.$router.push({
                  name: "caporder",
                });
              } else {
                this.showBuyNow = true;
                await this.setUpPayment();
                this.payLinkDone = true;
              }
            }
          } else {
            this.showHideNeedRegister = true;
            setTimeout(() => {
              this.$router.push({
                name: "home",
              });
              setTimeout(() => {
                if (document.querySelector(".home-section-3")) {
                  document
                    .querySelector(".home-section-3")
                    .scrollIntoView({ behavior: "smooth" });
                }
              }, 500);
            }, 3000);
          }
        } else {
          // shiw accepting terms wndow now
          // console.log("you shoud accepting terms...");
          this.showAttentionWindow = true;
        }
      } catch (err) {
        // console.log(err.message);
      }
    },
    goToHomeSection() {
      this.$router.push({
        name: "home",
      });
    },
    goToAboutSection() {
      this.$router.push({
        name: "home",
      });
      setTimeout(() => {
        if (document.querySelector(".home-section-4")) {
          document
            .querySelector(".home-section-4")
            .scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    },
    goToProfile() {
      if (this.customer._id) {
        this.$router.push({
          name: "profile",
          params: { id: this.customer._id, lngname: this.lng.name },
        });
      } else {
        this.$router.push({
          name: "home",
        });
        setTimeout(() => {
          if (document.querySelector(".home-section-3")) {
            document
              .querySelector(".home-section-3")
              .scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    },
    async loginLogout() {
      if (this.customer._id) {
        try {
          await logoutNow();
          this.goToHomeSection();
        } catch (err) {}
      } else {
        this.$router.push({
          name: "home",
        });
        setTimeout(() => {
          if (document.querySelector(".home-section-3")) {
            document
              .querySelector(".home-section-3")
              .scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    },
    async checkActiveUser() {
      try {
        this.customer = await getActiveCustomer();
        if (
          this.customer.frames.findIndex(
            (frame) => frame.frameName === "frame_" + this.cvNum
          ) > -1
        ) {
          this.resumeValues =
            this.customer.frames[
              this.customer.frames.findIndex(
                (frame) => frame.frameName === "frame_" + this.cvNum
              )
            ].frameInfo;
        }
        if (this.resumeValues) {
          if (this.resumeValues.gender === "Male")
            document.querySelector("#male").checked = true;
          else if (this.resumeValues.gender === "Female")
            document.querySelector("#female").checked = true;

          if (this.resumeValues.relationship === "Single") {
            document.querySelector("#single").checked = true;
          } else {
            if (this.resumeValues.relationship === "Marred") {
              document.querySelector("#marred").checked = true;
            }
          }
        }
        this.checkSizeWhileTyping();
      } catch (err) {
        // console.log("no customer active.");
      }
    },
    setPageLang(lngName) {
      this.lng = languages.find((lng) => lng.name === lngName);
    },
    async setUpPayment() {
      try {
        // add spender in button untill link come..
        const approveLink = await payPalPayment();
        this.ppPaymentLink = approveLink.approveRef;
        //exit spender..
      } catch (err) {
        // console.log(err.message);
      }
    },
    setPhotoFrame(frameNum) {
      let photo = this.customer.framePhotoNames.find(
        (photo) => Number(photo.frameNum) === frameNum
      );
      if (photo) {
        return photo.photoName;
      } else {
        return "";
      }
    },
    setTermsNotAccepted() {
      this.showAttentionWindow = false;
    },
    setTermsAccepted(secondary) {
      localStorage.setItem("savingApproved", true);
      if (secondary) {
        //saving in localStorage..
        localStorage.setItem("savingLocalyApproved", true);
      }
      this.showAttentionWindow = false;
    },
  },
  mounted() {
    this.setDays();
    this.getCountries();
    this.checkActiveUser();
    this.setPageLang(this.lngname);
    if (localStorage.getItem("localResumeValues")) {
      this.resumeValues = JSON.parse(localStorage.getItem("localResumeValues"));
    }
    this.checkSizeWhileTyping();
  },
};
</script>

<style scoped>
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.windows-container-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
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
.column-direc {
  flex-direction: column;
}
.container-nav-div {
  position: relative;
  flex: 0.1;
  width: 100%;
}
.nav-div {
  position: absolute;
  top: 0;
  height: 50px;
  width: 80%;
  border: 2px solid rgb(80, 80, 80);
  border-radius: 15px;
  margin: 10px;
  justify-content: space-between;
  color: rgb(80, 80, 80);
  background-color: white;

  font-size: 19px;
  /* font-family: "Comfortaa"; */
}
.nav-btns-font-eng {
  font-family: "Comfortaa";
}
.home-about-nav-div {
  /* flex: 0.1; */
  padding-left: 10px;
  padding-right: 10px;

  justify-content: space-between;
}
.home-about-btn {
  border: none;
  background-color: white;
  color: rgb(80, 80, 80);
}
.log-in-div {
  /* flex: 0.06; */
  padding-right: 10px;
  padding-left: 10px;
}
.login-btn {
  color: white;
  background-color: rgb(80, 80, 80);
  border: none;
  border-radius: 10px;
  padding: 2px 10px 2px 10px;
}
.generate-cv-main-div {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.gen-info-main-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 10px 0px 10px;
  height: 100%;
  width: 100%;
}
.line-div {
  width: 2px;
  height: 75vh;
  background-color: rgb(180, 180, 180);
  border-radius: 15px;
}
.cv-display-div {
  flex: 0.35;
  height: 100%;
  /* height: 450px; */
  /* min-width: 350px; */
  /* border-radius: 15px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2),
    1px 1px 3px 2px rgba(0, 0, 0, 0.19); */
  margin: 15px;
}
.inner-cv-display-div {
  height: 450px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2),
    1px 1px 3px 2px rgba(0, 0, 0, 0.19);
}

/* ------------------------------------------------------FORM----------------------------------------------------------- */
.form-mother {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-mother-font {
  font-family: "AR One Sans";
}
.radio-lbl {
  font-size: 13px;
  /* font-family: "AR One Sans"; */
}
.radio-btns {
  cursor: pointer;
}
.red-empty-radio-lbl {
  color: rgba(209, 64, 64, 0.7);
}

.justify-double-dot {
  display: flex;
  align-items: start;
  justify-content: space-between;
  /* font-family: "AR One Sans"; */
  font-size: 15px;
  width: 150px;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
  /* font-family: "AR One Sans"; */
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
.input-get-address {
  width: 100%;
  height: 30px;
  font-size: 13px;
  /* font-family: "AR One Sans"; */
}

.input-birth-date-btn {
  width: 90px;
  height: 30px;
  font-size: 13px;
  /* font-family: "AR One Sans"; */
}
.input-textArea {
  min-height: 100px;
}
.textArea-col-div {
  align-items: start;
}
.group-input-div {
  width: 300px;
  justify-content: space-between;
}
.group-input-gender-div {
  width: 300px;
  height: 30px;
  justify-content: space-evenly;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 5px;
}
::-webkit-input-placeholder {
  color: rgb(160, 160, 160);
}
.back-div {
  height: 40px;
  width: 100%;
  font-size: 19px;
  justify-content: start;
  align-items: start;
}
.arrow-back-span {
  cursor: pointer;
}
.span-register-need {
  font-size: 11px;
  color: rgb(152, 152, 152);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 7px;
  padding: 0 10px 0 10px;
}
.next-back-div {
  width: 100%;
  justify-content: end;
  font-size: 14px;
  align-items: center;
}
.btn-go-next {
  width: 150px;
  height: 30px;
  margin-top: 5px;
  border: none;
  border-radius: 10px;
  color: white;
  /* font-family: "AR One Sans"; */
  background-image: var(--gradient-primary-blue);
}
.btn-go-next:hover {
  background-image: var(--gradient-primary-blue-light);
}
.btn-finish {
  width: 150px;
  height: 30px;
  margin-top: 5px;
  border: none;
  border-radius: 10px;
  color: white;
  /* font-family: "AR One Sans"; */
  background-color: var(--color-primary-darker);
}
.btn-finish:hover {
  background-color: var(--color-primary);
}
.arrow-span {
  height: 25px;
  justify-content: space-evenly;
  width: 100%;
}
.bying-now-btn {
  height: 30px;
  width: 250px;
  border-radius: 10px;
  color: white;
  border: none;
  margin-top: 15px;
  background-color: var(--color-primary-darker);
}
.bying-now-btn:hover {
  background-color: var(--color-primary);
}
.anchor-bying-now {
  color: white;
  text-decoration: none;
}
/* --------------------------------------DROPDOWN MENU---------------------------- */

.dropdown-selected-div {
  position: relative;
  width: 100%;
  height: 100%;
  color: rgb(160, 160, 160);
  justify-content: space-around;
}

.dropdown-selected-address-div {
  position: relative;
  width: 49%;
}

.drop-down-menu-div {
  position: absolute;
  top: 33px;
  right: 0px;

  max-height: 167px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  /* font-family: "AR One Sans"; */

  z-index: 1;
}
.menu-item {
  font-size: 12px;
  width: 100%;
  cursor: pointer;
}

.menu-item:hover {
  background-color: rgb(180, 180, 180);
}

.country-txt {
  font-size: 11px;
}
/* --------------------------------------STEPS DIV-------------------------------------- */
.steps-div {
  flex: 0.25;
  height: 100px;
  width: 100%;
}

.outer-step-div {
  height: 50px;
  width: 50px;
  font-size: 25px;
  border-radius: 25px;
}

.step-div {
  height: 100%;
  width: 100%;
  border-radius: inherit;

  background-color: rgb(180, 180, 180);
  color: white;
  font-family: "AR One Sans";
}
.step-div-smaller {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  font-size: 17px;
}
.active-step-div {
  background-color: var(--color-primary);
}
.done-step-div {
  background-image: var(--gradient-primary-blue);
}
.small-lines-div {
  margin: 5px;
  width: 20px;
  height: 3px;
  background-color: rgb(175, 175, 175);
  border-radius: 15px;
}
.smaller-lines-div {
  width: 18px;
  height: 2px;
}
.delete-div {
  width: 100%;
  position: relative;
  top: -10px;
}
.add-minus-div {
  font-size: 17px;
  color: rgba(177, 38, 38, 0.6);
  cursor: pointer;
}
.price-span-txt {
  font-family: "Comfortaa";
}
/* ---------------------------------------MEDIA QUERY FORM 1--------------------------------------------------- */

@media (min-width: 470px) and (max-width: 1160px) {
  .input-contr {
    width: 250px;
  }
  .group-input-gender-div {
    width: 250px;
  }
  .justify-double-dot {
    width: 110px;
    font-size: 14px;
  }
  .group-input-div {
    width: 250px;
  }
  .input-birth-date-btn {
    width: 80px;
  }
  .outer-step-div-mobile {
    height: 36px;
    width: 36px;
    border-radius: 18px;
    font-size: 14px;
    margin: 0 7px 0 7px;
  }
  .small-lines-div {
    display: none;
  }
}
@media (max-width: 920px) {
  .cv-display-div {
    display: none;
  }
  .line-div {
    display: none;
  }
}
@media (min-width: 800px) and (max-width: 1160px) {
  .nav-div {
    border: 1.5px solid rgb(180, 180, 180);
    font-size: 16px;
    height: 45px;
    border-radius: 13px;
  }
}
@media (min-width: 480px) and (max-width: 800px) {
  .nav-div {
    border: 1px solid rgb(180, 180, 180);
    font-size: 15px;
    height: 40px;
    border-radius: 12px;
  }
  .login-btn {
    border-radius: 7px;
  }
}
@media (max-width: 430px) {
  .about-less-430 {
    width: 80px;
  }
}
@media (max-width: 480px) {
  .nav-div {
    border: 1px solid rgb(180, 180, 180);
    border-radius: 10px;
    height: 35px;
    font-size: 13px;
  }
  .login-btn {
    border-radius: 7px;
  }
  .justify-double-dot {
    width: 95px;
    font-size: 13px;
  }
  .input-contr {
    width: 230px;
  }
  .group-input-gender-div {
    width: 230px;
  }
  .group-input-div {
    width: 230px;
  }
  .input-birth-date-btn {
    width: 73px;
  }
  .btn-go-next {
    width: 150px;
    height: 30px;
    font-size: 13px;
  }
  .btn-finish {
    width: 150px;
    height: 30px;
    font-size: 12.5px;
  }
  .generate-cv-main-div {
    flex: 0.7;
  }
  .small-lines-div,
  .number-step-span {
    display: none;
  }
  .outer-step-div-mobile {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin: 3px;
  }
  /* .steps-div {
      display: none;
    } */
}
@media (max-width: 339.9px) {
  .nav-div {
    width: 95%;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 10px;
    height: 30px;
    font-size: 12px;
  }
  .justify-double-dot {
    justify-content: start;
    width: 200px;
  }
  .double-dot-span {
    margin: 0 10px 0 10px;
  }
  .btn-go-next {
    margin-top: 3px;
  }
  .btn-finish {
    margin-top: 3px;
  }
}
</style>
<template>
  <div
    class="profile-window-div flex-column"
    :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
  >
    <div class="container-nav-div flex-row">
      <div
        class="nav-div flex-row"
        :class="this.lng.name === 'arabic' ? 'arabic-font' : 'nav-div-font'"
      >
        <div class="home-about-nav-div flex-row">
          <button class="home-about-btn home-btn" @click="this.goToHomePage">
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
            @click="this.logout"
          >
            {{ this.lng.lang.section1.nav.logoutBtn }}
          </button>
        </div>
      </div>
    </div>
    <div class="profile-body-div flex-column">
      <div
        class="name-welcome-div text-muted flex-row"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'customer-name-font'
        "
      >
        <span>{{
          this.lng.lang.profile.helloCustomer + this.customer.name.split(" ")[0]
        }}</span>
        <i
          class="bi bi-gear-fill settings-icon"
          @click="this.showHideCustomerDetails = true"
          v-show="!this.showHideCustomerDetails"
        ></i>
        <i
          class="bi bi-person-fill settings-icon"
          @click="this.showHideCustomerDetails = false"
          v-show="this.showHideCustomerDetails"
        ></i>
      </div>

      <div
        class="reviw-user-frames-div flex-column"
        v-show="!this.showHideCustomerDetails"
      >
        <!-- ----------------FRAMES--------------------------------- -->
        <!-- ----------------FRAMES--------------------------------- -->
        <!-- ----------------FRAMES--------------------------------- -->
        <div class="outer-review-user-frames flex-column">
          <div class="inner-review-user-frames flex-row">
            <div v-for="(frame, i) in this.customer.frames" :key="i">
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_1')"
                v-if="
                  frame.frameName === 'frame_1' &&
                  this.hideOtherFrames('frame_1')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame1
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :corner="true"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_1')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(1)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(1)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(1)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_2')"
                v-if="
                  frame.frameName === 'frame_2' &&
                  this.hideOtherFrames('frame_2')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame2
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :photoName="this.setPhotoFrame(2)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_2')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(2)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(2)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(2)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_3')"
                v-if="
                  frame.frameName === 'frame_3' &&
                  this.hideOtherFrames('frame_3')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame3
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_3')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(3)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(3)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(3)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_4')"
                v-if="
                  frame.frameName === 'frame_4' &&
                  this.hideOtherFrames('frame_4')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame4
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :corner="true"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_4')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(4)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(4)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(4)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_5')"
                v-if="
                  frame.frameName === 'frame_5' &&
                  this.hideOtherFrames('frame_5')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame5
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :corner="true"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_5')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(5)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(5)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(5)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_6')"
                v-if="
                  frame.frameName === 'frame_6' &&
                  this.hideOtherFrames('frame_6')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame6
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_6')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(6)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(6)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(6)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_7')"
                v-if="
                  frame.frameName === 'frame_7' &&
                  this.hideOtherFrames('frame_7')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame7
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_7')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(7)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(7)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(7)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_8')"
                v-if="
                  frame.frameName === 'frame_8' &&
                  this.hideOtherFrames('frame_8')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame8
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_8')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(8)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(8)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(8)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_9')"
                v-if="
                  frame.frameName === 'frame_9' &&
                  this.hideOtherFrames('frame_9')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame9
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_9')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(9)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(9)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(9)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_10')"
                v-if="
                  frame.frameName === 'frame_10' &&
                  this.hideOtherFrames('frame_10')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame10
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_10')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(10)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(10)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(10)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_11')"
                v-if="
                  frame.frameName === 'frame_11' &&
                  this.hideOtherFrames('frame_11')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame11
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_11')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(11)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(11)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(11)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_12')"
                v-if="
                  frame.frameName === 'frame_12' &&
                  this.hideOtherFrames('frame_12')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame12
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_12')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(12)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(12)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(12)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_13')"
                v-if="
                  frame.frameName === 'frame_13' &&
                  this.hideOtherFrames('frame_13')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame13
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_13')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(13)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(13)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(13)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_14')"
                v-if="
                  frame.frameName === 'frame_14' &&
                  this.hideOtherFrames('frame_14')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame14
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :photoName="this.setPhotoFrame(14)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_14')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(14)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(14)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(14)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_15')"
                v-if="
                  frame.frameName === 'frame_15' &&
                  this.hideOtherFrames('frame_15')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame15
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_15')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(15)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(15)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(15)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_16')"
                v-if="
                  frame.frameName === 'frame_16' &&
                  this.hideOtherFrames('frame_16')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame16
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                  :photoName="this.setPhotoFrame(16)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_16')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(16)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(16)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(16)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_17')"
                v-if="
                  frame.frameName === 'frame_17' &&
                  this.hideOtherFrames('frame_17')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame17
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                  :photoName="this.setPhotoFrame(17)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_17')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(17)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(17)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(17)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_18')"
                v-if="
                  frame.frameName === 'frame_18' &&
                  this.hideOtherFrames('frame_18')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame18
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_18')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(18)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(18)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(18)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_19')"
                v-if="
                  frame.frameName === 'frame_19' &&
                  this.hideOtherFrames('frame_19')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame19
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_19')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(19)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(19)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(19)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_20')"
                v-if="
                  frame.frameName === 'frame_20' &&
                  this.hideOtherFrames('frame_20')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame20
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :corner="true"
                  :photoName="this.setPhotoFrame(20)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_20')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(20)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(20)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(20)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_21')"
                v-if="
                  frame.frameName === 'frame_21' &&
                  this.hideOtherFrames('frame_21')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame21
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :photoName="this.setPhotoFrame(21)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_21')"
                >
                  <!-- <i
                  class="bi bi-printer-fill print-icon m-2"
                  @click="this.printFrame(21)"
                ></i> -->
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(21)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(21)"
                  ></i>
                </div>
              </div>
              <div
                class="single-user-frame-div"
                :class="this.setActiveClass('frame_22')"
                v-if="
                  frame.frameName === 'frame_22' &&
                  this.hideOtherFrames('frame_22')
                "
                :dir="frame.frameInfo.currentLng === 'arabic' ? 'rtl' : 'ltr'"
              >
                <Frame21
                  :lng="this.setSingleFrameLang(frame.frameInfo.currentLng)"
                  :resumeValues="frame.frameInfo"
                  :photoName="this.setPhotoFrame(22)"
                />
                <div
                  class="print-edit-div flex-row"
                  v-if="this.setFotterEditor('frame_22')"
                >
                  <i
                    class="bi bi-printer-fill print-icon m-2"
                    @click="this.printFrame(22)"
                  ></i>
                  <i
                    class="bi bi-pencil-square edit-icon m-2"
                    @click="this.editFrameInfo(22)"
                  ></i>
                  <i
                    class="bi bi-trash3-fill delete-icon m-2"
                    @click="this.deleteFrame(22)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- /////////////////////////////////////////////////////////////////////// -->
          <!-- /////////////////////////////////////////////////////////////////////// -->
          <!-- /////////////////////////////////////////////////////////////////////// -->
          <div class="goLR-div flex-row" v-if="this.customer.frames.length > 2">
            <div class="LR-icon-div flex-row" @click="this.goLeft">
              <!-- <i class="bi LR-icon bi-caret-left flex-row"></i> -->
              <i
                class="bi bi-caret-left-fill flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-caret-right-fill flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </div>
            <div class="LR-icon-div flex-row" @click="this.goLight">
              <!-- <i class="bi LR-icon bi-caret-right flex-row"></i> -->
              <i
                class="bi bi-caret-right-fill flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-caret-left-fill flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </div>
          </div>
          <div class="goLR-second-div flex-row">
            <div class="LR-icon-div flex-row" @click="this.goLeft">
              <!-- <i class="bi LR-icon bi-caret-left flex-row"></i> -->
              <i
                class="bi bi-caret-left-fill flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-caret-right-fill flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </div>
            <div class="LR-icon-div flex-row" @click="this.goLight">
              <!-- <i class="bi LR-icon bi-caret-right flex-row"></i> -->
              <i
                class="bi bi-caret-right-fill flex-row"
                v-if="this.lng.name !== 'arabic'"
              ></i>
              <i
                class="bi bi-caret-left-fill flex-row"
                v-if="this.lng.name === 'arabic'"
              ></i>
            </div>
          </div>
        </div>
        <!-- ----------------FRAMES--------------------------------- -->
        <!-- ----------------FRAMES--------------------------------- -->
        <!-- ----------------FRAMES--------------------------------- -->
        <div
          class="add-frame-div flex-column"
          v-if="this.customer.frames.length < 1"
        >
          <i class="bi bi-file-earmark-break file-icon text-muted flex-row"></i>
          <span class="text-muted nocv-span m-2">No CV file found</span>
        </div>
        <button
          class="add-cv-btn m-3"
          @click="this.addNewFrame"
          :class="
            this.lng.name === 'arabic' ? 'arabic-font' : 'add-cv-btn-font'
          "
        >
          {{ this.lng.lang.profile.addFrameBtn }}
        </button>
      </div>
      <div
        class="customer-details-div flex-row"
        :class="
          this.lng.name === 'arabic' ? 'arabic-font' : 'customer-name-font'
        "
        v-show="this.showHideCustomerDetails"
      >
        <div class="inner-customer-details-div flex-column text-muted">
          <span
            v-show="!this.deleting && !this.confrimingCode"
            class="customer-details-span"
            >{{ this.customer.name }}</span
          >
          <span
            v-show="!this.deleting && !this.confrimingCode"
            class="customer-details-span"
            >{{ this.customer.email }}</span
          >
          <button
            v-show="!this.deleting && !this.confrimingCode"
            class="delete-account-btn"
            @click="this.sendVerfCode"
          >
            {{ this.lng.lang.profile.deleteBtn }}
          </button>
          <span class="customer-details-span" v-show="this.deleting">
            {{ this.lng.lang.profile.deleting }}
          </span>
          <form
            class="set-newpassword-form flex-column"
            v-if="this.confrimingCode && !this.deleting"
            @submit.prevent="this.deleteAccount"
          >
            <input
              class="input-contr form-control"
              :class="this.getWrongConfirmNumber ? 'red-border' : ''"
              :placeholder="
                this.lng.lang.section3.formConfirmResSetPass.codeInput
              "
              required
              v-model="this.userVefNumber"
            />
            <button type="submit" class="confirm-btn">
              {{ this.lng.lang.section3.formConfirmResSetPass.confirmBtn }}
            </button>
            <span
              class="dont-recive-span"
              @click="this.confrimingCode = false"
              >{{
                this.lng.lang.section3.formConfirmResSetPass.dontReciveCode
              }}</span
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCustomer, logoutNow, deleteFrame } from "../components/modal.js";

import Frame1 from "./cvsViews/cvView-1/cvView-1.vue";
import Frame2 from "./cvsViews/cvView-2/cvView-2.vue";
import Frame3 from "./cvsViews/cvView-3/cvView-3.vue";
import Frame4 from "./cvsViews/cvView-4/cvView-4.vue";
import Frame5 from "./cvsViews/cvView-5/cvView-5.vue";
import Frame6 from "./cvsViews/cvView-6/cvView-6.vue";
import Frame7 from "./cvsViews/cvView-7/cvView-7.vue";
import Frame8 from "./cvsViews/cvView-8/cvView-8.vue";
import Frame9 from "./cvsViews/cvView-9/cvView-9.vue";
import Frame10 from "./cvsViews/cvView-10/cvView-10.vue";
import Frame11 from "./cvsViews/cvView-11/cvView-11.vue";
import Frame12 from "./cvsViews/cvView-12/cvView-12.vue";
import Frame13 from "./cvsViews/cvView-13/cvView-13.vue";
import Frame14 from "./cvsViews/cvView-14/cvView-14.vue";
import Frame15 from "./cvsViews/cvView-15/cvView-15.vue";
import Frame16 from "./cvsViews/cvView-16/cvView-16.vue";
import Frame17 from "./cvsViews/cvView-17/cvView-17.vue";
import Frame18 from "./cvsViews/cvView-18/cvView-18.vue";
import Frame19 from "./cvsViews/cvView-19/cvView-19.vue";
import Frame20 from "./cvsViews/cvView-20/cvView-20.vue";
import Frame21 from "./cvsViews/cvView-21/cvView-21.vue";

import { languages } from "../components/languages.js";
import { deleteCustomer, sendVerfNum } from "../components/modal.js";

export default {
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
  },
  props: ["id", "lngname"],
  data() {
    return {
      intervRemoveActive: {},
      customer: {
        name: "",
        frames: [],
      },
      showHideCustomerDetails: false,
      confrimingCode: false,
      deleting: false,
      verfNumber: "",
      userVefNumber: "",
      getWrongConfirmNumber: false,
      customerVerfNumber: "",
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
          profile: {},
        },
      },
    };
  },
  methods: {
    removeFirstActive() {
      if (document.querySelector(".active-frame")) {
        document
          .querySelector(".active-frame")
          .classList.remove("active-frame-hidden");
        clearInterval(this.intervRemoveActive);
      }
    },
    setPhotoFrame(frameNum) {
      return this.customer.framePhotoNames.find(
        (photo) => Number(photo.frameNum) === frameNum
      ).photoName;
    },
    async getCustomerInfo() {
      try {
        this.customer = await getCustomer(this.id);
        // this.customer.frames = ["frame_1", "frame_2", "frame_3"];
      } catch (err) {
        //back to home..
        this.goToHomePage();
        // console.log(err.message);
      }
    },
    goToHomePage() {
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
    setActiveClass(frameName) {
      if (this.customer.frames.length > 2) {
        if (
          this.customer.frames.findIndex(
            (frame) => frame.frameName === frameName
          ) === 1
        ) {
          return "active-frame active-frame-hidden";
        } else {
          return "not-active-frame";
        }
      } else {
        if (
          this.customer.frames.findIndex(
            (frame) => frame.frameName === frameName
          ) === 0
        )
          return "active-frame active-frame-hidden";
        else return "second-active-frame";
      }
    },
    setFotterEditor(frameName) {
      if (this.customer.frames.length > 2) {
        if (
          this.customer.frames.findIndex(
            (frame) => frame.frameName === frameName
          ) === 1
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    hideOtherFrames(frameName) {
      if (
        this.customer.frames.findIndex(
          (frame) => frame.frameName === frameName
        ) > 2
      ) {
        return false;
      } else {
        return true;
      }
    },
    goLight() {
      const firstFrame = this.customer.frames[0];
      this.customer.frames = this.customer.frames.filter((frame, i) => i !== 0);
      this.customer.frames.push(firstFrame);

      setTimeout(() => {
        document
          .querySelector(".active-frame")
          .classList.remove("active-frame-hidden");
      }, 100);
    },
    goLeft() {
      let timerArray = this.customer.frames;
      const lastFrame = timerArray[timerArray.length - 1];
      timerArray = timerArray.filter((frame, i) => i !== timerArray.length - 1);

      this.customer.frames = [];
      this.customer.frames.push(lastFrame);
      for (let i = 0; i < timerArray.length; i++) {
        this.customer.frames.push(timerArray[i]);
      }

      setTimeout(() => {
        document
          .querySelector(".active-frame")
          .classList.remove("active-frame-hidden");
      }, 100);
    },
    editFrameInfo(frameNum) {
      this.$router.push({
        name: "cvinfo",
        params: { cvNum: frameNum },
      });
    },
    addNewFrame() {
      this.$router.push({
        name: "home",
      });
      setTimeout(() => {
        if (document.querySelector(".home-section-2")) {
          document
            .querySelector(".home-section-2")
            .scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    },
    setPageLang(lngName) {
      this.lng = languages.find((lng) => lng.name === lngName);
      // html2pdf().from(document.querySelector(".windows-container-div")).save();
    },
    setSingleFrameLang(lngName) {
      return languages.find((lng) => lng.name === lngName);
    },
    async deleteFrame(frameNum) {
      try {
        // send danger message..
        await deleteFrame(frameNum);
        this.customer.frames = this.customer.frames.filter(
          (frame) => frame.frameName !== `frame_${frameNum}`
        );
        this.goLight();
      } catch (err) {
        // console.log(err.message);
      }
    },
    printFrame(frameNum) {
      sessionStorage.setItem("customerID", JSON.stringify(this.customer._id));
      sessionStorage.setItem(
        "resumeValues",
        JSON.stringify(
          this.customer.frames.find(
            (frame) => frame.frameName === `frame_${frameNum}`
          ).frameInfo
        )
      );
      sessionStorage.setItem(
        "lng",
        JSON.stringify(
          this.setSingleFrameLang(
            this.customer.frames.find(
              (frame) => frame.frameName === `frame_${frameNum}`
            ).frameInfo.currentLng
          )
        )
      );
      sessionStorage.setItem("frameNum", JSON.stringify(String(frameNum)));
      // i don't need this if condition...

      this.$router.push({
        name: "caporder",
      });
    },
    async sendVerfCode() {
      try {
        this.verfNumber = Math.floor(Math.random() * (9999 - 2000 + 1) + 2000);
        this.userVefNumber = "";
        this.getWrongConfirmNumber = false;
        this.confrimingCode = true;
        await sendVerfNum({
          receverMail: this.customer.email,
          verfNumber: String(this.verfNumber),
        });
      } catch (err) {
        // console.log(err.message);
      }
    },
    async deleteAccount() {
      try {
        if (this.verfNumber === Number(this.userVefNumber)) {
          this.deleting = true;
          await deleteCustomer(this.customer._id);
          setTimeout(() => {
            this.goToHomePage();
          }, 1500);
        } else {
          this.getWrongConfirmNumber = true;
        }
      } catch (err) {
        // console.log(err.message);
      }
    },
    async logout() {
      try {
        await logoutNow();
        this.goToHomePage();
      } catch (err) {}
    },
  },
  mounted() {
    this.setPageLang(this.lngname);
    this.getCustomerInfo();
    localStorage.removeItem("photo");
    sessionStorage.removeItem("photoName");
    this.intervRemoveActive = setInterval(this.removeFirstActive, 100);
  },
};
</script>

<style scoped>
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
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.profile-window-div {
  width: 100%;
  height: 100vh;
}
.container-nav-div {
  flex: 0.1;
  width: 100%;
}
.nav-div {
  /* position: absolute; */
  /* top: 0; */
  height: 50px;
  width: 80%;
  border: 2px solid rgb(80, 80, 80);
  border-radius: 15px;
  margin: 10px;
  justify-content: space-between;
  color: rgb(80, 80, 80);
  font-size: 19px;
}
.nav-div-font {
  font-family: "Comfortaa";
}
.customer-name-font {
  font-family: "Comfortaa";
}
.home-about-nav-div {
  flex: 0.1;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  /* background-color: red; */
}
.home-about-btn {
  border: none;
  background-color: white;
}
.about-less-430 {
  width: 120px;
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
.profile-body-div {
  flex: 1;
  width: 100%;
  margin-top: 20px;
}
.name-welcome-div {
  padding: 0 18px 0 18px;
  width: 80%;
  font-size: 20px;
  justify-content: space-between;
}
.reviw-user-frames-div {
  flex: 1;
  width: 80%;
}
.inner-review-user-frames {
  align-items: end;
}
.single-user-frame-div {
  position: relative;
  height: 350px;
  width: 240px;
  border: 1px solid rgb(180, 180, 180);
  margin: 5px;
  border-radius: 15px;
}

.print-edit-div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(202, 202, 202, 0.4);
  border-radius: 0 0 15px 15px;
  backdrop-filter: blur(1px);
}
.goLR-div {
  height: 40px;
  width: 100%;
  /* background-color: red; */
}
.goLR-second-div {
  height: 40px;
  width: 100%;
  display: none;
}
.LR-icon-div {
  height: 25px;
  width: 25px;
  margin: 0 10px 0 10px;
  border: 1px solid;
  border-radius: 12.5px;
  font-size: 14px;
  cursor: pointer;
}
.active-frame {
  height: 420px;
  width: 300px;
  transition: transform 0.5s, opacity 1.5s;
}
.active-frame-hidden {
  opacity: 0;
  transform: translateY(-2rem);
}

.second-active-frame {
  height: 420px;
  width: 300px;
}
.edit-icon,
.delete-icon,
.print-icon {
  font-size: 20px;
  cursor: pointer;
}
.add-frame-div {
  height: 420px;
  width: 300px;
  border: 1px solid rgb(180, 180, 180);
  margin: 5px;
  border-radius: 15px;
}
.file-icon {
  font-size: 70px;
}
.nocv-span {
  font-size: 15px;
}
.add-cv-btn {
  width: 340px;
  padding: 5px;
  border: 2px solid white;
  background-color: rgb(39, 39, 39);
  color: white;
  /* font-weight: bold; */
  border-radius: 15px;
  font-size: 17px;
}
.add-cv-btn:hover {
  box-shadow: 0px 0px 2.5px 2.5px rgb(39, 39, 39);
}
.add-cv-btn-font {
  font-family: "Comfortaa";
}

.settings-icon {
  cursor: pointer;
}
.customer-details-div {
  height: 100%;
  width: 100%;
}
.inner-customer-details-div {
  height: 60%;
  width: 70%;
  max-width: 700px;
  border-radius: 12px;
  background-image: var(--gradient-primary-wellcomright);
  box-shadow: 0px 0px 2.5px 2.5px rgb(197, 197, 197);
  font-size: 20px;
}
.customer-details-span {
  margin-bottom: 5px;
}
.delete-account-btn {
  width: 200px;
  border: none;
  background-color: var(--color-tertiary-darker);
  color: white;
  margin-top: 10px;
  border: 2px solid rgb(197, 197, 197);
  border-radius: 12px;
}
.delete-account-btn:hover {
  border: 2px solid rgb(197, 197, 197);
  box-shadow: 0px 0px 2.5px 2.5px var(--color-tertiary-darker);
}
.set-newpassword-form {
  height: 100%;
}
.input-contr {
  height: 35px;
  width: 350px;
  font-size: 15px;
  margin-bottom: 8px;
  border: 2px solid;
  border-radius: 12px;
  border-color: rgb(197, 197, 197);
  color: rgb(39, 39, 39);
}
.red-border {
  border: 2px solid rgba(209, 64, 64, 0.7);
}
.confirm-btn {
  width: 100%;
  height: 35px;
  background-color: rgb(39, 39, 39);
  border: 2px solid rgb(197, 197, 197);
  border-radius: 12px;
  color: white;
  font-size: 18px;
  margin-top: 5px;
}
.confirm-btn:hover {
  box-shadow: 0px 0px 2.5px 2.5px rgb(39, 39, 39);
}
.dont-recive-span {
  color: rgb(81, 81, 239);
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
}
/* ---------------------------------------PROFILE--------------------------------------------------- */
/* ---------------------------------------PROFILE--------------------------------------------------- */
/* ---------------------------------------PROFILE--------------------------------------------------- */
/* ---------------------------------------PROFILE--------------------------------------------------- */
@media (min-width: 800px) and (max-width: 1160px) {
  .nav-div {
    border: 1.5px solid rgb(180, 180, 180);
    font-size: 16px;
    height: 45px;
  }
  .about-less-430 {
    width: 90px;
  }
}
@media (min-width: 470px) and (max-width: 800px) {
  .nav-div {
    border: 1px solid rgb(180, 180, 180);
    font-size: 15px;
    height: 40px;
    border-radius: 12px;
  }
  .about-less-430 {
    width: 90px;
  }
}
@media (max-width: 470px) {
  .nav-div {
    border: 1px solid rgb(180, 180, 180);
    border-radius: 10px;
    height: 35px;
    font-size: 13px;
  }
  .about-less-430 {
    width: 80px;
  }
}

@media (min-width: 650px) and (max-width: 840px) {
  .single-user-frame-div {
    height: 320px;
    width: 200px;
  }
  .active-frame {
    height: 420px;
    width: 300px;
  }
  .second-active-frame {
    height: 420px;
    width: 300px;
  }
}
@media (max-width: 725px) {
  .not-active-frame {
    display: none;
  }
  .second-active-frame {
    display: none;
  }
  .goLR-second-div {
    display: flex;
  }
  .goLR-div {
    display: none;
  }
}
@media (max-width: 650px) {
  .active-frame {
    height: 420px;
    width: 300px;
  }

  .inner-customer-details-div {
    font-size: 15px;
  }
  .delete-account-btn {
    width: 150px;
  }
  .input-contr {
    width: 200px;
    font-size: 14px;
  }
  .confirm-btn {
    font-size: 15px;
  }
}
</style>

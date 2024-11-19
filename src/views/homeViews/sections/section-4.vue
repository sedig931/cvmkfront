<template>
  <div
    class="home-sections home-section-4 flex-column"
    :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
    :class="
      this.lng.name === 'arabic' ? 'arabic-font' : 'home-section-body-font'
    "
  >
    <div class="top-home-section-body flex-row">
      <div class="inner-top-home-section-body"></div>
    </div>
    <div class="home-section-body text-center">
      <div
        class="left-home-body-div left-midle-right-body flex-column ps-1 pe-1"
      >
        <span class="titles-body-span">
          {{ this.lng.lang.section4.services.title }}</span
        >
        <span class="single-service-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.services.makeAsome }}
        </span>
        <span class="single-service-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.services.allTimeFreeEdit }}
        </span>
        <span class="single-service-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.services.freeCreateAccount }}
        </span>
        <span class="single-service-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.services.freePrint }}
        </span>
      </div>
      <div
        class="middle-home-body-div left-midle-right-body flex-column"
        dir="ltr"
      >
        <span class="titles-body-span">
          {{ this.lng.lang.section4.contacts.title }}</span
        >
        <div class="single-contact-span single-service-contact-terms-span">
          <i class="bi bi-envelope-at-fill ms-2 me-2"></i>
          <a class="anchors" href="https://sedig931@gmail.com"
            >samdtc931@gmail.com</a
          >
        </div>
        <div class="single-contact-span single-service-contact-terms-span">
          <i class="bi bi-whatsapp ms-2 me-2"></i>
          <span>+249 962992439</span>
        </div>
        <!-- <div class="single-contact-span single-service-contact-terms-span">
          <i class="bi bi-facebook m-2"></i>
          <a class="anchors" href="https://www.facebook.com/siddig.alhareith"
            >Facebook</a
          >
        </div> -->
        <div class="single-contact-span single-service-contact-terms-span">
          <i class="bi bi-geo-alt-fill ms-2 me-2"></i>
          <span>SDN</span>
        </div>
        <div
          class="single-contact-span single-service-contact-terms-span flex-row"
        >
          <span>Devoloped By : </span>
          <span class="devoped-by-span ms-1 me-1">Meroe Labs</span>
          <div class="devoloper-icon-div flex-row">
            <div class="left-devolover-icon flex-column">
              <div class="top-left-devoloer-icon"></div>
              <div class="bottom-left-devoloer-icon"></div>
            </div>
            <div class="right-devolover-icon flex-column">
              <div
                class="bottom-left-devoloer-icon bottom-right-devoloer-icon"
              ></div>
              <div class="top-left-devoloer-icon top-right-devoloer-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="right-home-body-div left-midle-right-body flex-column ps-1 pe-1"
      >
        <span class="titles-body-span">
          {{ this.lng.lang.section4.termsPolicy.title }}
        </span>
        <span class="single-terms-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.termsPolicy.userPrivacy }}
        </span>
        <span class="single-terms-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.termsPolicy.conditions }}
        </span>
        <span class="single-terms-span single-service-contact-terms-span">
          {{ this.lng.lang.section4.termsPolicy.termsConditions }}
        </span>
        <span
          class="single-terms-span single-service-contact-terms-span read-more-span"
          @click="this.$emit('showTermsWindow')"
        >
          {{ this.lng.lang.section4.termsPolicy.readMore }}
        </span>
      </div>
    </div>
    <div class="copy-rights-div flex-row">
      <span class="copy-rights-span">&copy; 2023 samdtc</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lng"],
};
</script>

<style scoped>
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
.home-section-4 {
  min-height: 50vh;
  width: 100%;

  transition: transform 1s, opacity 1s;
}
.top-home-section-body {
  height: 60px;
  width: 100%;
  /* border-radius: 0px 0px 60px 0px; */
  background-color: rgb(39, 39, 39);
}
.inner-top-home-section-body {
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 0px 60px;
  background-color: white;
}
.home-section-body {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(39, 39, 39);
  border-radius: 0px 60px 0px 0px;
  color: rgb(209, 209, 209);
  padding: 10px 0px 10px 0px;
}
.home-section-body-font {
  font-family: "Comfortaa";
}
.left-midle-right-body {
  flex: 1;
  height: 100%;
}

.titles-body-span {
  font-size: 22px;
  margin-bottom: 10px;
}
.single-service-contact-terms-span {
  font-size: 13px;
  margin-top: 5px;
}
.devoped-by-span {
  font-size: 10px;
}
.devoloper-icon-div {
  height: 14px;
  width: 14px;
  background-color: rgb(209, 209, 209);
  border-radius: 50%;
}
.top-left-devoloer-icon,
.top-right-devoloer-icon {
  height: 7px;
  width: 2px;
  background-color: rgb(39, 39, 39);
  border-radius: 0px 5px 0px 5px;
}
.top-right-devoloer-icon {
  margin-left: 1px;
}
.bottom-left-devoloer-icon,
.bottom-right-devoloper-icon {
  width: 2px;
  height: 2px;
  margin-top: 1px;
  margin-bottom: 1.5px;
  margin-left: 1px;
  border-radius: 50%;
  background-color: rgb(39, 39, 39);
}
.bottom-right-devoloer-icon {
  margin-bottom: 1px;
  margin-top: 1.5px;
}
.read-more-span {
  cursor: pointer;
}
.read-more-span:hover {
  color: white;
  /* font-size: 13.03px; */
}
.anchors {
  color: rgb(209, 209, 209);
  text-decoration: none;
}
.copy-rights-div {
  background-color: rgb(39, 39, 39);
  color: rgb(209, 209, 209);
  width: 100%;
  font-size: 11px;
}
.copy-rights-span {
  /* font-size: 10px; */
  margin: 0;
  padding: 0;
  margin-left: 2px;
  margin-right: 2px;
}
@media (min-width: 550px) and (max-width: 700px) {
  .titles-body-span {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .single-service-contact-terms-span {
    font-size: 12px;
  }
}
@media (max-width: 550px) {
  .home-section-body {
    flex-direction: column;
    border-radius: 0px 30px 0px 0px;
  }
  .inner-top-home-section-body {
    border-radius: 0px 0px 0px 30px;
  }
  .left-midle-right-body {
    margin-bottom: 3px;
  }
  .titles-body-span {
    font-size: 18px;
    margin-bottom: 1px;
  }
  .single-service-contact-terms-span {
    font-size: 10px;
  }
  .copy-rights-span {
    font-size: 10px;
  }
}
</style>

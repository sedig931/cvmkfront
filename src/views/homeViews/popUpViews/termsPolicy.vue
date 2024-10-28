<template>
  <div
    class="termsPolicy-container-div close-terms-window flex-row"
    :class="
      this.lng.name === 'arabic'
        ? 'arabic-font'
        : 'termsPolicy-container-div-font'
    "
    :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
    @click="this.closeTermsWindow"
  >
    <div class="termPolicy-body-div">
      <div class="close-btn close-terms-window">
        <i class="bi bi-x-circle-fill close-terms-window"></i>
      </div>
      <div class="flex-row">
        <span class="termsPolicy-title-span">{{
          this.lng.lang.termsPolicy.termsTitle
        }}</span>
      </div>
      <div
        class="single-terms-div flex-row"
        v-for="term in this.lng.lang.termsPolicy.terms"
        :key="term"
      >
        <div class="dash-div flex-row"><span>-</span></div>
        <div class="sngle-term-element-div text-muted">
          <p>
            {{ term }}
          </p>
        </div>
      </div>
      <div class="close-btn-bottom-div flex-row">
        <button class="close-btn-bottom close-terms-window">
          {{ this.lng.lang.termsPolicy.close }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lng"],
  data() {
    return {};
  },
  methods: {
    closeTermsWindow(e) {
      if (e.target.classList.contains("close-terms-window")) {
        this.$emit("closeTermsWindow");
      }
    },
  },
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
.termsPolicy-container-div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(3px);
}

.termsPolicy-container-div-font {
  font-family: "AR One Sans";
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.termsPolicy-title-span {
  font-size: 20px;
  font-weight: bold;
}
.termPolicy-body-div {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 80%;
  padding: 15px 20px 15px 20px;
  background-image: var(--gradient-primary-wellcomright);
  border-radius: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.dash-div {
  align-items: start;
  width: 25px;
  height: 100%;
}
.single-terms-div {
  height: 100%;
  width: 100%;
  align-items: start;
  margin-bottom: 10px;
}
.sngle-term-element-div {
  font-size: 14px;
  width: 100%;
}
p {
  padding: 0;
  margin: 0;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
  cursor: pointer;
  font-size: 16px;
}
.close-btn-bottom-div {
  height: 30px;
  width: 100%;
  justify-content: end;
}
.close-btn-bottom {
  padding: 2px 8px 2px 8px;
  border: 2px solid var(--color-primary-darker);
  background-color: var(--color-primary-darker);
  border-radius: 7px;
  color: white;
  font-size: 14px;
}
.close-btn-bottom:hover {
  border: 2px solid white;
  box-shadow: 0px 0px 2.5px 2.5px var(--color-primary-darker);
}

@media (min-width: 550px) and (max-width: 1120px) {
  .sngle-term-element-div {
    font-size: 13px;
  }
}
@media (max-width: 550px) {
  .termsPolicy-title-span {
    font-size: 15px;
  }
  .sngle-term-element-div {
    font-size: 12px;
  }
}
</style>
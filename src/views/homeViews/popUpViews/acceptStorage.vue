<template>
  <div
    class="accept-storage-container-div flex-row"
    :dir="this.lng.name === 'arabic' ? 'rtl' : 'ltr'"
  >
    <div
      class="inner-accept-div flex-column"
      :class="
        this.lng.name === 'arabic' ? 'arabic-font' : 'inner-accept-div-font'
      "
    >
      <div class="body-div flex-column text-muted">
        <i class="bi bi-exclamation-triangle warry-icon flex-row m-2"></i>
        <span class="attention-span ps-2 pe-2">
          {{ this.lng.lang.attentionsTerms.mainHeader }}
        </span>
        <div class="show-more-dv flex-column ps-2 pe-2">
          <div class="span-swith-div flex-row p-2">
            <p>
              <span>
                {{ this.lng.lang.attentionsTerms.firstTerm }}
              </span>
              <span class="necessary-span">
                {{ " " + this.lng.lang.attentionsTerms.firstTermNecessary }}
              </span>
            </p>
            <div class="switch-div">
              <label class="switch">
                <input
                  type="checkbox"
                  @click="this.checkPrimaryBox"
                  class="primary-check-box"
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="span-swith-div flex-row p-2">
            <span>
              {{ this.lng.lang.attentionsTerms.sec2Term }}
            </span>
            <div class="switch-div">
              <label class="switch">
                <input
                  type="checkbox"
                  class="secondary-check-box"
                  @change="this.checkPrimaryBox"
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-btns-div flex-row">
        <button class="accept-not-btn not-accept-btn" @click="this.notAccepted">
          {{ this.lng.lang.attentionsTerms.notAcceptBtn }}
        </button>
        <button
          type="button"
          class="accept-not-btn accept-btn"
          :disabled="!this.primaryCheckedBox"
          :class="this.primaryCheckedBox ? '' : 'gray-btn-style'"
          @click="this.setAccepted"
        >
          {{ this.lng.lang.attentionsTerms.acceptBtn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lng"],
  data() {
    return {
      primaryCheckedBox: false,
      secondaryCheckedBox: false,
    };
  },
  methods: {
    checkPrimaryBox(e) {
      if (e.target.classList.contains("primary-check-box")) {
        e.target.checked
          ? (this.primaryCheckedBox = true)
          : (this.primaryCheckedBox = false);
      } else {
        e.target.checked
          ? (this.secondaryCheckedBox = true)
          : (this.secondaryCheckedBox = false);
      }
    },
    setAccepted() {
      // primary allready true, just need secondary
      this.$emit("setTermsAccepted", this.secondaryCheckedBox);
    },
    notAccepted() {
      this.$emit("setTermsNotAccepted");
    },
  },
  mounted() {},
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
.accept-storage-container-div {
  position: fixed;
  bottom: 15px;
  left: 0px;
  width: 100%;
}
.inner-accept-div {
  /* height: ; */
  width: 70%;
  background-image: var(--gradient-primary-wellcomright);
  border-radius: 12px;
  max-width: 700px;
}
.inner-accept-div-font {
  font-family: "AR One Sans";
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.body-div {
  flex: 1;
  font-size: 13px;
}
.footer-btns-div {
  flex: 0.3;
  padding: 10px;
  width: 100%;
  justify-content: end;
}
.accept-not-btn {
  height: 40px;
  width: 150px;
  font-size: 17px;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
}
.accept-btn {
  margin-left: 10px;
  margin-right: 15px;
  background-color: var(--color-primary-darker);
}
.accept-btn:hover {
  border: 2px solid white;
  box-shadow: 0px 0px 2.5px 2.5px var(--color-primary-darker);
}
.not-accept-btn {
  background-color: var(--color-tertiary-darker);
}
.not-accept-btn:hover {
  border: 2px solid white;
  box-shadow: 0px 0px 2.5px 2.5px var(--color-tertiary-darker);
}
.warry-icon {
  font-size: 25px;
  color: var(--color-tertiary-darker);
}
.attention-span {
  color: var(--color-tertiary-darker);
}
.necessary-span {
  color: var(--color-tertiary-darker);
}
.read-more-span {
  color: rgb(55, 154, 235);
  cursor: pointer;
}
.gray-btn-style {
  background-color: rgb(201, 201, 201);
  cursor: unset;
}
.gray-btn-style:hover {
  box-shadow: none;
  border: none;
}
/* ///////////////////////////////////////// */
.span-swith-div {
  width: 100%;
  align-items: start;
  justify-content: space-between;
}
.switch-div {
  margin-top: 3px;
  height: 100%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 45px;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* ---------------------------------------MEDIA QUERY --------------------------------------------------- */
@media (min-width: 702px) and (max-width: 1060px) {
  .body-div {
    flex: 1;
    font-size: 12px;
  }
  .accept-not-btn {
    height: 30px;
    font-size: 14px;
    border-radius: 8px;
  }
}
@media (max-width: 702px) {
  .body-div {
    flex: 1;
    font-size: 11px;
  }
  .accept-not-btn {
    height: 25px;
    width: 120px;
    font-size: 13px;
    border-radius: 5px;
  }
}
</style>
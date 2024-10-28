<template>
  <div class="outer-load-bar-span mb-2">
    <div class="load-bar-div flex-row">
      <div
        class="first-single-load-bar-div"
        :class="
          this.lng.name === 'arabic' ? 'first-single-load-bar-div-arabic' : ''
        "
        @mouseenter="this.loadbarMainp"
        @mouseleave="this.loadbarMainp"
        @click="this.loadbarMainp"
      ></div>
      <div
        @mouseenter="this.loadbarMainp"
        @mouseleave="this.loadbarMainp"
        @click="this.loadbarMainp"
        class="single-load-bar-div"
        :class="`single-load-bar-div-${this.localChildIndex}`"
        id="-4"
      ></div>
      <div
        class="single-load-bar-div"
        :class="`single-load-bar-div-${this.localChildIndex}`"
        @mouseenter="this.loadbarMainp"
        @mouseleave="this.loadbarMainp"
        @click="this.loadbarMainp"
        id="-3"
      ></div>
      <div
        class="single-load-bar-div"
        :class="`single-load-bar-div-${this.localChildIndex} ${
          this.lng.name === 'arabic'
            ? 'last-single-load-bar-div-arabic'
            : 'last-single-load-bar-div'
        }`"
        @mouseenter="this.loadbarMainp"
        @mouseleave="this.loadbarMainp"
        @click="this.loadbarMainp"
        id="-2"
      ></div>
    </div>
    <span class="lang-level-span text-muted">{{ this.setLevel() }}</span>
  </div>
</template>

<script>
export default {
  props: ["princ", "childs", "childIndex", "lng"],
  data() {
    return {
      clickedOnBar: 0,
      localChildIndex: 0,
    };
  },
  mounted() {
    this.localChildIndex = this.childIndex;
  },
  methods: {
    setLevel() {
      if (this.clickedOnBar === 0) {
        return this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.level1;
      }
      if (this.clickedOnBar === -4) {
        return this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.level2;
      }
      if (this.clickedOnBar === -3) {
        return this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.level3;
      }
      if (this.clickedOnBar === -2) {
        return this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.level4;
      }
    },
    loadbarMainp(e) {
      const allsinglebar = document.querySelectorAll(
        `.single-load-bar-div-${this.localChildIndex}`
      );
      if (e.target.classList.contains("first-single-load-bar-div")) {
        if (e.type === "mouseenter") {
          allsinglebar.forEach((bar) => {
            this.lng.name === "arabic"
              ? bar.classList.remove(`bar-${Number(bar.id) * -1}-color-arabic`)
              : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
          });
        } else if (e.type === "mouseleave") {
          if (this.clickedOnBar === 0) {
            allsinglebar.forEach((bar) => {
              this.lng.name === "arabic"
                ? bar.classList.remove(
                    `bar-${Number(bar.id) * -1}-color-arabic`
                  )
                : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
            });
          } else {
            allsinglebar.forEach((bar) => {
              if (Number(bar.id) <= this.clickedOnBar) {
                this.lng.name === "arabic"
                  ? bar.classList.add(`bar-${Number(bar.id) * -1}-color-arabic`)
                  : bar.classList.add(`bar-${Number(bar.id) * -1}-color`);
              } else {
                this.lng.name === "arabic"
                  ? bar.classList.remove(
                      `bar-${Number(bar.id) * -1}-color-arabic`
                    )
                  : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
              }
            });
          }
        } else if (e.type === "click") {
          this.clickedOnBar = 0;
          if (this.localChildIndex >= 1) {
            this.childs[this.localChildIndex - 1].level = this.setLevel();
          } else this.princ.level = this.setLevel();
        }
      } else {
        if (e.type === "mouseenter") {
          allsinglebar.forEach((bar) => {
            if (Number(bar.id) <= Number(e.target.id)) {
              this.lng.name === "arabic"
                ? bar.classList.add(`bar-${Number(bar.id) * -1}-color-arabic`)
                : bar.classList.add(`bar-${Number(bar.id) * -1}-color`);
            } else {
              this.lng.name === "arabic"
                ? bar.classList.remove(
                    `bar-${Number(bar.id) * -1}-color-arabic`
                  )
                : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
            }
          });
        } else if (e.type === "mouseleave") {
          if (this.clickedOnBar === 0) {
            allsinglebar.forEach((bar) => {
              this.lng.name === "arabic"
                ? bar.classList.remove(
                    `bar-${Number(bar.id) * -1}-color-arabic`
                  )
                : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
            });
          } else {
            allsinglebar.forEach((bar) => {
              if (Number(bar.id) <= this.clickedOnBar) {
                this.lng.name === "arabic"
                  ? bar.classList.add(`bar-${Number(bar.id) * -1}-color-arabic`)
                  : bar.classList.add(`bar-${Number(bar.id) * -1}-color`);
              } else {
                this.lng.name === "arabic"
                  ? bar.classList.remove(
                      `bar-${Number(bar.id) * -1}-color-arabic`
                    )
                  : bar.classList.remove(`bar-${Number(bar.id) * -1}-color`);
              }
            });
          }
        } else if (e.type === "click") {
          this.clickedOnBar = Number(e.target.id);
          if (this.localChildIndex >= 1) {
            this.childs[this.localChildIndex - 1].level = this.setLevel();
          } else this.princ.level = this.setLevel();
        }
      }
    },
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
.outer-load-bar-span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.load-bar-div {
  width: 130px;
  margin: 0px 10px 0 10px;
  height: 15.5px;
  border-radius: 10px;
  border: 0.5px solid rgb(220, 220, 220);
  background-color: rgb(230, 230, 230);
}
.single-load-bar-div {
  height: 100%;
  width: 100%;
  /* background-color: rgb(112, 112, 204); */
}
.first-single-load-bar-div {
  height: 100%;
  width: 100%;
  border-radius: 10px 0 0 10px;
  background-image: var(--gradient-primary-yallow);
}
.first-single-load-bar-div-arabic {
  border-radius: 0px 10px 10px 0px;
  background-image: var(--gradient-primary-yallow-arabic);
}
.last-single-load-bar-div {
  border-radius: 0 10px 10px 0;
}
.last-single-load-bar-div-arabic {
  border-radius: 10px 0px 0px 10px;
}
.bar-4-color {
  background-image: var(--gradient-primary-yallow-light);
}
.bar-4-color-arabic {
  background-image: var(--gradient-primary-yallow-light-arabic);
}
.bar-3-color {
  background-image: var(--gradient-primary-yallow-grren);
}
.bar-3-color-arabic {
  background-image: var(--gradient-primary-yallow-grren-arabic);
}
.bar-2-color {
  background-image: var(--gradient-primary-green);
}
.bar-2-color-arabic {
  background-image: var(--gradient-primary-green-arabic);
}

.lang-level-span {
  font-size: 14px;
}
/* ---------------------------------------MEDIA QUERY FORM 2--------------------------------------------------- */

@media (min-width: 470px) and (max-width: 1160px) {
  .load-bar-div {
    width: 100px;
  }
  .lang-level-span {
    font-size: 13px;
  }
}
@media (max-width: 470px) {
  .load-bar-div {
    width: 110px;
  }
  .lang-level-span {
    font-size: 12px;
  }
}
</style>

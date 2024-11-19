<template>
  <div class="well-icon-container-div flex-row" dir="ltr">
    <div class="left-div flex-column">
      <i class="bi bi-person-circle prifile-icon flex-row"></i>
      <div class="left-sqr-div"></div>
      <div class="left-sqr-div"></div>
      <div class="left-sqr-div"></div>
    </div>
    <div class="right-div flex-column">
      <div class="right-mother-div flex-column">
        <div class="right-child-div" style="width: 70%"></div>
        <div class="right-child-div right-child-div-play"></div>
        <div class="right-child-div" style="width: 100%"></div>
      </div>
      <div class="right-mother-div flex-column">
        <div class="right-child-div right-child-div-play-2"></div>
        <div class="right-child-div" style="width: 60%"></div>
        <div class="right-child-div" style="width: 100%"></div>
      </div>
      <div class="right-mother-div flex-column">
        <div class="right-child-div" style="width: 70%"></div>
        <div class="right-child-div" style="width: 60%"></div>
        <div class="right-child-div right-child-div-play-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linesPlay() {
      const line = document.querySelector(".right-child-div-play");
      line.style.width = "30%";
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          setTimeout(() => {
            let lineWidth = Number(line.style.width.split("%")[0]);
            lineWidth += 1;
            line.style.width = lineWidth + "%";
          }, Number(`${i * 15}`));
        }
      }, 700);
      const line2 = document.querySelector(".right-child-div-play-2");
      line2.style.width = "40%";
      setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          setTimeout(() => {
            let lineWidth = Number(line2.style.width.split("%")[0]);
            lineWidth += 1;
            line2.style.width = lineWidth + "%";
          }, Number(`${i * 15}`));
        }
      }, 700);
      const line3 = document.querySelector(".right-child-div-play-3");
      line3.style.width = "20%";
      setTimeout(() => {
        for (let i = 0; i < 70; i++) {
          setTimeout(() => {
            let lineWidth = Number(line3.style.width.split("%")[0]);
            lineWidth += 1;
            line3.style.width = lineWidth + "%";
          }, Number(`${i * 15}`));
        }
      }, 700);
    },
  },
  mounted() {
    this.linesPlay();
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
.well-icon-container-div {
  height: 100%;
  width: 100%;
}
.left-div {
  flex: 0.4;
  height: 100%;
  background-image: var(--gradient-primary-wellcomleft);
  justify-content: space-evenly;
  border-radius: 12px 0 0 12px;
  padding: 10px;
}
.prifile-icon {
  font-size: 60px;
  color: rgb(88, 88, 88);
  padding: 5px;
}
.left-sqr-div {
  height: 30px;
  width: 70px;
  background-color: rgb(88, 88, 88);
  border-radius: 6px;
}
.right-div {
  flex: 1;
  height: 100%;
  justify-content: space-evenly;
  background-image: var(--gradient-primary-wellcomright);
  border-radius: 0 12px 12px 0;
  padding: 15px;
}
.right-mother-div {
  width: 100%;
  justify-content: space-evenly;
  align-items: start;
  margin: 15px;
}
.right-child-div {
  width: 100%;
  height: 13px;
  border-radius: 5px;
  background-color: rgb(88, 88, 88);
  margin-top: 5px;
}

@media (min-width: 702px) and (max-width: 1060px) {
  .left-sqr-div {
    height: 25px;
    border-radius: 6px;
  }
  .right-child-div {
    height: 10px;
  }
  .right-mother-div {
    width: 120px;
  }
}
@media (min-width: 470px) and (max-width: 702px) {
  .prifile-icon {
    font-size: 50px;
  }
  .left-sqr-div {
    height: 25px;
    border-radius: 5px;
  }
  .right-child-div {
    height: 9px;
  }
  .right-mother-div {
    width: 130px;
  }
}
@media (max-width: 470px) {
  .prifile-icon {
    font-size: 50px;
  }
  .left-sqr-div {
    height: 25px;
    border-radius: 5px;
  }
  .right-child-div {
    height: 10px;
  }
  .right-mother-div {
    width: 130px;
  }
}
</style>
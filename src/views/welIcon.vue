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
        <div class="right-child-div first-child-div"></div>
        <div class="right-child-div middle-child-div"></div>
        <div class="right-child-div"></div>
      </div>
      <div class="right-mother-div flex-column">
        <div class="right-child-div first-child-div"></div>
        <div class="right-child-div middle-child-div"></div>
        <div class="right-child-div"></div>
      </div>
      <div class="right-mother-div flex-column">
        <div class="right-child-div first-child-div"></div>
        <div class="right-child-div middle-child-div"></div>
        <div class="right-child-div"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  /* margin: 20px; */
  height: 100%;
  width: 100%;
  /* border: 2px solid white; */
  /* border-radius: 12px; */
}
.left-div {
  flex: 0.7;
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
  padding: 5px;
}
.right-mother-div {
  width: 100%;
  justify-content: space-evenly;
  align-items: start;
  padding: 15px;
}
.right-child-div {
  width: 160px;
  height: 13px;
  border-radius: 5px;
  background-color: rgb(88, 88, 88);
  margin-top: 5px;
}
.first-child-div {
  width: 70%;
}
.middle-child-div {
  width: 60%;
}
@media (min-width: 702px) and (max-width: 1060px) {
  .left-sqr-div {
    height: 25px;
    border-radius: 6px;
  }
  .right-child-div {
    height: 10px;
    width: 120px;
  }
  .first-child-div {
    width: 70%;
  }
  .middle-child-div {
    width: 60%;
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
    width: 90px;
  }
  .first-child-div {
    width: 70%;
  }
  .middle-child-div {
    width: 60%;
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
    width: 120px;
  }
  .first-child-div {
    width: 70%;
  }
  .middle-child-div {
    width: 60%;
  }
}
</style>
<template>
  <div class="brand flex-row">
    <span class="brand-span ms-1 me-1">Morei Labs</span>
    <div class="devoloper-icon-div flex-row">
      <div class="left-beam me-1 flex-column">
        <div class="beam-div"></div>
        <div class="circle-div"></div>
      </div>
      <div class="right-beam flex-column">
        <div class="circle-div"></div>
        <div class="beam-div right-beam-div"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      //propreties
    };
  },
  methods: {},
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
.devoloper-icon-div {
  height: 30px;
  width: 30px;
  background-color: rgb(187, 187, 187);
  border-radius: 50%;
  cursor: pointer;
}
.beam-div {
  height: 10px;
  width: 3px;
  background-color: var(--col-pro-prim);
  border-radius: 0px 5px 0px 5px;
}
.circle-div {
  width: 3px;
  height: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 50%;
  background-color: var(--col-pro-prim);
}
.brand-span {
  font-size: 14px;
  color: rgb(187, 187, 187);
  padding: 5px 10px 5px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
@media (max-width: 500px) {
  .devoloper-icon-div {
    height: 20px;
    width: 20px;
  }
  .brand-span {
    font-size: 9px;
  }
  .beam-div {
    height: 7px;
    width: 2px;
  }
  .circle-div {
    width: 1.5px;
    height: 1.5px;
  }
}
</style>

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
  background-image: linear-gradient(to top, #bc3d8c, #e5624e);
  border-radius: 50%;
}
.beam-div {
  height: 10px;
  width: 2.5px;
  background-color: white;
  border-radius: 0px 5px 0px 5px;
}
.circle-div {
  width: 2.5px;
  height: 2.5px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 50%;
  background-color: white;
}
.brand-span {
  font-size: 14px;
  color: rgb(94, 94, 94);
  padding: 0px 3px 0px 3px;
  border: none;
  border-radius: 10px;
  /* color: #000000; */
  background-color: white;
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
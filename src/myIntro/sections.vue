<template>
  <div class="sections-div">
    <Nav />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>
<script>
import Section1 from "./sections/section1/section1.vue";
import Section2 from "./sections/section2/section2.vue";
import Section3 from "./sections/section3/section3.vue";
import Nav from "./nav.vue";
// motherPage
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Nav,
  },
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
.sections-div {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>

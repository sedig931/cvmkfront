<template>
  <div>
    <Nav />
    <Section1 />
    <Section2 />
  </div>
</template>
<script>
import Section1 from "./sections/section1/section1.vue";
import Section2 from "./sections/section2/section2.vue";
import Nav from "./nav.vue";
export default {
  components: {
    Section1,
    Section2,
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
</style>
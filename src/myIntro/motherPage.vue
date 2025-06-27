<template>
  <div>
    <Nav />
    <Section1 />
  </div>
</template>
<script>
import Section1 from "./sections/section1/section1.vue";
import Nav from "./nav.vue";
export default {
  components: {
    Section1,
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
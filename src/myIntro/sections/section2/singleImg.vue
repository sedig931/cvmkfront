<template>
  <div class="single-img-div">
    <img
      v-show="this.imgLoaded"
      :onload="this.loaded"
      class="single-img-img"
      :src="`${this.URL}/${this.imgName}`"
      alt=""
    />
    <i
      v-if="!this.imgLoaded"
      class="bi bi-file-image file-image-icon flex-row text-muted"
    ></i>
  </div>
</template>
<script>
export default {
  props: ["imgName"],
  components: {},
  data() {
    return {
      imgLoaded: false,
      URL: "http://localhost:300/uploads/introduceImgs/rajhiAppImgs",
      // URL: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/rajhiAppImgs",
      //propreties
    };
  },
  methods: {
    loaded() {
      this.imgLoaded = true;
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
.imgs-div {
  flex: 1;
  width: 100%;
  justify-content: start;
  align-self: flex-end;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
}
.file-image-icon {
  font-size: 55px;
  margin: 50px 25px 50px 25px;
}
.single-img-img {
  height: 450px;
  border-radius: inherit;
}
.single-img-div {
  margin: 10px;
  border: 3px solid rgb(123, 157, 226);
  border-radius: 8px;
}
/* input[type="text"] {
  width: 90px;
  height: 25px;
  border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type="text"]:focus {
  border: 1px solid #555;
} */
</style>
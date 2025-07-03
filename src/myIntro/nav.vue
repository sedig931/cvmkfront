<template>
  <div class="nav-div flex-column" @mouseleave="this.setAciveMenue(null)">
    <div class="inner-nav-div">
      <div class="buttons-div">
        <div
          class="nav-button contacts-button flex-row"
          @click="
            this.activeMenue === 0
              ? (this.activeMenue = null)
              : this.setAciveMenue(0)
          "
        >
          <span class="button-span">Contacts</span>
          <i
            class="bi bi-chevron-down top-down-icon flex-row ms-3"
            :class="this.activeMenue === 0 ? 'rotate-me' : ''"
          ></i>
        </div>
        <div
          class="nav-button about-button flex-row"
          @click="
            this.activeMenue === 1
              ? (this.activeMenue = null)
              : this.setAciveMenue(1)
          "
        >
          <span class="button-span">Content</span>
          <i
            class="bi bi-chevron-down top-down-icon flex-row ms-3"
            :class="this.activeMenue === 1 ? 'rotate-me' : ''"
          ></i>
        </div>
      </div>
      <div class="brand-div pe-4 flex-row">
        <Brand />
      </div>
    </div>
    <div class="minues-div text-muted">
      <div v-if="this.activeMenue === 0" class="menue flex-row">
        <div class="menue-element flex-row">
          <i class="bi bi-telephone flex-row menue-icon ms-2 me-2"></i>
          <span> +966 536323259</span>
        </div>
        <div class="menue-element flex-row">
          <i class="bi bi-envelope flex-row menue-icon ms-2 me-2"></i>
          <span> samdtc931@gmail.com </span>
        </div>
        <div class="menue-element flex-row">
          <i class="bi bi-geo-alt flex-row menue-icon ms-2 me-2"></i>
          <span> location </span>
        </div>
      </div>
      <div v-if="this.activeMenue === 1" class="menue flex-row">
        <div class="menue-element flex-row">
          <span> Resume Maker </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Brand from "./component/brand.vue";
export default {
  components: {
    Brand,
  },
  data() {
    return {
      activeMenue: null,
      //propreties
    };
  },
  methods: {
    setAciveMenue(value) {
      if (value === null) {
        setTimeout(() => {
          this.activeMenue = null;
        }, 500);
      } else {
        this.activeMenue = value;
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    //   document.querySelector(".top-down-icon").classList.add("rotate-me");
    // }, 50);
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
.rotate-me {
  rotate: 180deg;
}
.top-down-icon {
  transition: rotate 0.5s;
}
.nav-div {
  position: absolute;
  top: 0;
  padding: 0 10px 0 10px;
  width: 100%;
  min-height: 90px;
  backdrop-filter: blur(2px);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  /* border-bottom: 1px solid rgb(192, 192, 192); */
  font-family: "Comfortaa";
  z-index: 1;
}
.inner-nav-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons-div {
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90px;
  font-weight: bold;
  font-size: 18px;
}
.nav-button {
  margin: 0 10px 0 0;
  padding: 2px 5px 2px 5px;
  color: rgb(94, 94, 94);
  cursor: pointer;
  border: none;
  border-radius: 10px;
  /* color: #000000; */
  background-color: white;
}
.nav-button:hover {
  color: rgb(164, 164, 164);
}
.brand-div {
  flex: 1;
  justify-content: end;
}

.minues-div {
  width: 100%;
}
.menue {
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1px 1px 15px 1px;
}
.menue-element {
  background-color: rgb(240, 240, 240);
  padding: 2px 10px 2px 10px;
  margin: 5px;
  border-radius: 10px;
  justify-content: space-evenly;
  font-size: 13px;
  cursor: pointer;
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
@media ((min-width: 500px) and (max-width: 840px)) {
  .buttons-div {
    font-size: 16px;
  }
}
@media (max-width: 500px) {
  .buttons-div {
    font-size: 13px;
  }
}
</style>
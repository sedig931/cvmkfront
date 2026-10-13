<template>
  <div class="section-3-pro section-pro flex-column">
    <span class="sec3pro-title-span">Have Many Projects</span>
    <div class="sec3-pro-projects-container flex-row">
      <div
        v-for="(project, i) in this.projectsData"
        :key="i"
        class="sec3-pro-single-project flex-row"
      >
        <img :src="`${project.backimg}`" alt="" class="sec3pro-img" />
        <div class="sec3pro-body flex-column">
          <img :src="`${project.logo}`" alt="" class="sec3pro-body-img" />
          <span class="sec3pro-body-span">
            {{ project.title }}
          </span>
          <div class="sec3pro-btns-div flex-row">
            <button
              class="sec3pro-btn flex-row"
              @click="this.gotoLink(project.link)"
            >
              visit live <i class="bi bi-arrow-right flex-row ms-1"></i>
            </button>
            <i
              class="bi bi-github sec3-pro-git-icon ms-2 flex-row"
              @click="this.gotoLink(project.gitlink)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      projectsData: [
        {
          backimg:
            "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/moedatiback.png",
          logo: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/cssjsimg.png",
          title: "Moedati Store",
          link: "https://moedati.com/ar",
          gitlink: "https://github.com/sedig931/moedati",
        },
        {
          backimg:
            "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/workScreenshot.PNG",
          logo: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/vLogo.png",
          title: "CV Generator",
          link: "https://samdtc931.com/",
          gitlink: "https://github.com/sedig931/cvmkfront",
        },
        {
          backimg:
            "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/torixback.png",
          logo: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/wordpress.png",
          title: "Torix Website",
          link: "https://torix.freedev.app/",
          gitlink: "https://github.com/sedig931",
        },
        {
          backimg:
            "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/gethubbackimg.png",
          logo: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/githubimg.png",
          title: "Github Repositories",
          link: "https://github.com/sedig931",
          gitlink: "https://github.com/sedig931",
        },
        {
          backimg:
            "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/healtripbackimg.png",
          logo: "https://serve.samdtc931.com/uploads/cvmk/introduceImgs/projectsImgs/nextjsimg.png",
          title: "Healtrip Assistant",
          link: "https://healtrip-ai-assistant.netlify.app",
          gitlink: "https://github.com/sedig931/healtrip-ai-assistant",
        },
      ],
      //propreties
    };
  },
  methods: {
    gotoLink(link) {
      window.open(link);
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
.section-3-pro {
  width: 100%;
  padding: 20px 10px 20px 10px;
  background-color: var(--col-pro-prim);
}
.sec3pro-title-span {
  font-size: 50px;
  font-weight: bold;
  color: rgb(187, 187, 187);
  font-family: "Tilt Warp";
  margin: 15px 0 30px 0;
  @media (max-width: 630px) {
    font-size: 30px;
    margin: 0px 0 20px 0;
    /* .sec3pro-title-span{
      
    } */
  }
}
.sec3-pro-projects-container {
  width: 100%;
  flex-wrap: wrap;
}
.sec3-pro-single-project {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid var(--col-pro-sec);
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgb(0, 0, 0);
  overflow: hidden;
  cursor: pointer;
  margin: 15px;
}
.sec3pro-img {
  height: 100%;
  transition: transform 0.7s;
  /* width: 100%; */
}
.sec3pro-body {
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
  font-family: "Comfortaa";
}
.sec3-pro-single-project:hover .sec3pro-img {
  transform: scale(1.1);
}
.sec3pro-body-span {
  color: var(--col-pro-sec);
  margin: 5px 0 10px 0;
  font-size: 13px;
  font-weight: bold;
  background: rgba(189, 189, 189, 0.6);
  padding: 0 5px 0 5px;
  border-radius: 8px;
}
.sec3pro-body-img {
  height: 80px;
  filter: drop-shadow(1px 2px 5px #222222);
}
.sec3pro-btn {
  border: none;
  border-radius: 7px;
  font-size: 12px;
  padding: 1px 9px 1px 9px;
  border: 1px solid var(--col-pro-btns);
  color: var(--col-pro-sec);
  background: var(--col-pro-btns);
  box-shadow: 0px 1px 3px rgb(0, 0, 0);
  transition: background-color 0.3s, border-color 0.3s;
}
.sec3pro-btn:hover {
  background: var(--col-pro-sec);
  color: var(--col-pro-btns);
}
.sec3-pro-git-icon {
  font-size: 18px;
  color: var(--col-pro-btns);
  border-radius: 100%;
  transition: font-size 0.3s;
  box-shadow: 0px 1px 3px rgb(0, 0, 0);
}
.sec3-pro-git-icon:hover {
  font-size: 22px;
}
input[type="text"] {
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
}
.back-to-me {
  flex-wrap: wrap;
  overflow: hidden;
  transform: translateY(-15px);
  transform: rotate(-40deg) scale(1);
  background-image: linear-gradient(to top, #f38f8f, #fdeead);
  filter: drop-shadow(10px 10px 5px #818181);
  box-shadow: 0 3px 10px rgb(213, 213, 213);
  font-family: "Almarai";
  background-color: #368185;
  backdrop-filter: blur(2px);
}
</style>

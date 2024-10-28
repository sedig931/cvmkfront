<template>
  <div
    class="child-form"
    :class="this.formName === 'skills' ? 'form-3' : 'form-4'"
  >
    <div
      class="langs-lbl-div"
      :class="this.lng.name === 'arabic' ? 'arabic-font' : 'child-form-font'"
    >
      <label class="form-label lbl text-muted p-0 m-0 me-3">
        <div class="justify-double-dot">
          <span
            >{{
              this.formName === "languages"
                ? `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.langsLbl}`
                : `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.skillsLbl}`
            }}
          </span>
          <span>:</span>
        </div>
      </label>
    </div>
    <div
      class="langs-input-div"
      :class="this.lng.name === 'arabic' ? 'arabic-font' : 'child-form-font'"
    >
      <div class="plus-child-outer-div flex-column">
        <div class="plus-child-div mb-2 flex-row">
          <div
            class="add-minus-div add-div flex-row me-2 ms-2"
            @click="this.addChild"
          >
            <i class="bi bi-plus flex-row" id="add-child"></i>
          </div>
          <input
            type="text"
            class="input-contr form-control text-muted"
            :class="
              this.formName === 'skills' ? 'form_2_element' : 'form_3_element'
            "
            :placeholder="
              this.formName === 'languages'
                ? `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.langHolder}`
                : `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.skillHolder}`
            "
            v-model="this.formInfo.princ.name"
          />
        </div>
        <LoadBar
          v-if="this.formName === 'languages'"
          :childIndex="this.formInfo.childs.length"
          :childs="this.formInfo.childs"
          :princ="this.formInfo.princ"
          :lng="this.lng"
        />
      </div>
      <div
        class="plus-child-outer-div flex-column"
        v-for="(child, i) in this.formInfo.childs"
        :key="i"
      >
        <div class="plus-child-div mb-2 flex-row">
          <div class="add-minus-div me-2 ms-2">
            <div
              class="add-minus-div minus-div flex-row"
              v-show="this.currentChildID === i"
              @click="this.addChild"
            >
              <i class="bi bi-dash flex-row" :id="i + 1"></i>
            </div>
          </div>
          <input
            type="text"
            class="input-contr form-control text-muted"
            :placeholder="
              this.formName === 'languages'
                ? `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.langHolder}`
                : `${this.lng.lang.section2.getCvInfo.forms.skillsLangsForm.skillHolder}`
            "
            :id="i"
            @click="this.showCurrentMinus"
            v-model="this.formInfo.childs[i].name"
          />
        </div>
        <LoadBar
          v-if="this.formName === 'languages'"
          :childIndex="this.formInfo.childs.length"
          :childs="this.formInfo.childs"
          :princ="this.formInfo.princ"
          :lng="this.lng"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoadBar from "./loadBar.vue";
export default {
  props: ["formInfo", "formName", "lng"],
  components: {
    LoadBar,
  },
  data() {
    return {
      currentChildID: -1,
    };
  },
  methods: {
    addChild(e) {
      if (e.target.id === "add-child") {
        this.formInfo.childs.push({});
      } else {
        const refactChilds = this.formInfo.childs.filter(
          (child, i) => i + 1 !== Number(e.target.id)
        );
        this.formInfo.childs = refactChilds;
        this.currentChildID = -1;
      }
    },
    showCurrentMinus(e) {
      this.currentChildID = Number(e.target.id);
    },
  },
};
</script>

<style scoped>
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.child-form-font {
  font-family: "AR One Sans";
  /* background-color: red; */
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-4 {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
}
.form-3 {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
}
.langs-input-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
}
.add-minus-div {
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  font-size: 17px;
  color: white;
  cursor: pointer;
}
.add-div {
  background-color: var(--color-primary-darker);
}
.minus-div {
  background-color: rgba(177, 38, 38, 0.6);
}

::-webkit-input-placeholder {
  color: rgb(160, 160, 160);
}

.justify-double-dot {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 7px;
}
/* .plus-child-outer-div {
  justify-content: start;
} */
.plus-child-div {
  justify-content: end;
  width: 90%;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
}
.lang-level-div {
  width: 45%;
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
/* ---------------------------------------MEDIA QUERY FORM 2--------------------------------------------------- */

@media (min-width: 470px) and (max-width: 1160px) {
  .input-contr {
    width: 250px;
  }
  .justify-double-dot {
    width: 125px;
    font-size: 14px;
  }
}

@media (max-width: 470px) {
  .justify-double-dot {
    width: 115px;
    font-size: 13px;
  }
  .input-contr {
    width: 250px;
  }
}
</style>

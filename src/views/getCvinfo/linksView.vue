<template>
  <div
    class="child-form"
    :class="this.lng.name === 'arabic' ? 'arabic-font' : 'child-form-font'"
  >
    <div class="langs-lbl-div">
      <label class="form-label lbl text-muted p-0 m-0 me-3">
        <div class="justify-double-dot">
          <span
            >{{ this.lng.lang.section2.getCvInfo.forms.addLinkForm.linksLbl }}
          </span>
          <span>:</span>
        </div>
      </label>
    </div>
    <div class="links-input-div">
      <div class="plus-child-outer-div">
        <div class="plus-child-div mb-2 flex-row">
          <div
            class="add-minus-div add-div flex-row me-2 ms-2"
            @click="this.addLink"
          >
            <i class="bi bi-plus flex-row" id="add-link"></i>
          </div>
          <input
            type="text"
            class="input-contr form-control text-muted"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_8'
            )}_element`"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addLinkForm.linkHolder
            "
            v-model="this.links.princ.webTitle"
          />
        </div>
        <div class="plus-child-div mb-2 flex-row">
          <div class="add-minus-div flex-row me-2"></div>
          <input
            type="text"
            class="input-contr input-contr-url form-control text-muted"
            :class="`form_${this.allForms.findIndex(
              (cname) => cname === 'form_8'
            )}_element`"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addLinkForm.linkURLHolder
            "
            v-model="this.links.princ.webHref"
          />
        </div>
      </div>
      <div
        class="plus-child-outer-div flex-column"
        v-for="(link, i) in this.links.childs"
        :key="i"
      >
        <div class="plus-child-div mb-2 flex-row">
          <div class="add-minus-div flex-row me-2 ms-2">
            <div
              class="add-minus-div minus-div flex-row"
              v-show="this.currentChildID === i"
              @click="this.addLink"
            >
              <i class="bi bi-dash flex-row" :id="i + 1"></i>
            </div>
          </div>
          <input
            type="text"
            class="input-contr form-control text-muted"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addLinkForm.linkHolder
            "
            :id="i"
            @click="this.showCurrentMinus"
            v-model="link.webTitle"
          />
        </div>
        <div class="plus-child-div mb-2 flex-row">
          <div class="add-minus-div flex-row me-2"></div>
          <input
            type="text"
            class="input-contr input-contr-url form-control text-muted"
            :placeholder="
              this.lng.lang.section2.getCvInfo.forms.addLinkForm.linkURLHolder
            "
            v-model="link.webHref"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["allForms", "links", "lng"],
  data() {
    return {
      currentChildID: -1,
    };
  },
  methods: {
    addLink(e) {
      if (e.target.id === "add-link") {
        this.links.childs.push({});
      } else {
        const refactChilds = this.links.childs.filter(
          (link, i) => i + 1 !== Number(e.target.id)
        );
        this.links.childs = refactChilds;
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
.child-form {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
}
.child-form-font {
  font-family: "AR One Sans";
}
.arabic-font {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.links-input-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  display: flex;
  width: 160px;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 7px;
}
.plus-child-outer-div {
  justify-content: start;
}
.plus-child-div {
  width: 320px;
  justify-content: end;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
}
.input-contr-url {
  height: 30px;
  width: 270px;
  font-size: 13px;
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
/* ---------------------------------------MEDIA QUERY FORM 2--------------------------------------------------- */

@media (min-width: 470px) and (max-width: 1160px) {
  .input-contr {
    width: 250px;
  }
  .input-contr-url {
    width: 220px;
  }
  .plus-child-div {
    width: 270px;
  }
  .justify-double-dot {
    width: 125px;
    font-size: 14px;
  }
}
@media (max-width: 470px) {
  .input-contr {
    width: 230px;
  }
  .input-contr-url {
    width: 200px;
  }
  .plus-child-div {
    width: 260px;
  }
  .justify-double-dot {
    width: 115px;
    font-size: 13px;
  }
}
</style>

<template>
  <div class="child-form form-3">
    <div class="skills-lbl-div">
      <label class="form-label lbl text-muted p-0 m-0 me-3">
        <div class="justify-double-dot">
          <span>Skills </span>
          <span>:</span>
        </div>
      </label>
    </div>
    <div class="skills-input-div">
      <div class="plus-skill-div mb-2 flex-row">
        <div class="add-minus-div add-div flex-row me-2" @click="this.addSkill">
          <i class="bi bi-plus flex-row" id="add-skill"></i>
        </div>
        <input
          type="text"
          class="input-contr form-control text-muted form_2_element"
          placeholder="skill"
          v-model="this.formInfo.princSkill"
        />
      </div>
      <div
        class="plus-skill-div mb-2 flex-row"
        v-for="(skill, i) in this.formInfo.skills"
        :key="i"
      >
        <div
          class="add-minus-div minus-div flex-row me-2"
          v-show="this.currentSkillID === i"
          @click="this.addSkill"
        >
          <i class="bi bi-dash flex-row" :id="i + 1"></i>
        </div>
        <input
          type="text"
          class="input-contr form-control text-muted"
          placeholder="skill"
          :id="i"
          @click="this.showCurrentMinus"
          v-model="this.formInfo.skills[i]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["formInfo"],
  data() {
    return {
      skills: [],
      currentSkillID: -1,
    };
  },
  methods: {
    addSkill(e) {
      if (e.target.id === "add-skill") this.formInfo.skills.push("");
      else {
        const refactSkills = this.formInfo.skills.filter(
          (skill, i) => i + 1 !== Number(e.target.id)
        );
        this.formInfo.skills = refactSkills;
        this.currentSkillID = -1;
      }
    },
    showCurrentMinus(e) {
      this.currentSkillID = Number(e.target.id);
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
.form-3 {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
}
.skills-input-div {
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

.lbl {
  width: 150px;
}
.justify-double-dot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.input-contr {
  height: 30px;
  width: 300px;
  font-size: 13px;
}
.input-empty-style {
  border: 1px solid rgba(209, 64, 64, 0.7);
}
</style>

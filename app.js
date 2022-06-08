const app = Vue.createApp({
  data() {
    return { goals: [], entertedGoalValues: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entertedGoalValues);
      this.entertedGoalValues = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount("#user-goals");

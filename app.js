const app = Vue.createApp({
  data() {
    return { goals: [], entertedGoalValues: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entertedGoalValues)
    },
  },
});

app.mount("#user-goals");

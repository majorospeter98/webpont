<template>
  <form @submit.prevent="formData">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>

    <h1 v-if="error">Hibás a form</h1>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    formData() {
      if (this.email === "" || this.password === "") {
        this.error = "Hibás az email vagy a jelszó";
        return;
      }
      const formUsers = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("users/setUsers", formUsers);
      this.$router.replace("/dashboard");
    },
  },
};
</script>

<style scoped></style>

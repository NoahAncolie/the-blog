<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const onEmail = (event) => {
  email.value = event.target.value;
};

const onPassword = (event) => {
  password.value = event.target.value;
};

const onRegister = (event) => {
  event.preventDefault();

  if (password.value === "" || email.value === "") {
    let error = document.getElementById("error-alert");
    error.innerHTML = "Les champs doivent être remplis.";
    error.style.color = "red";
    return null;
  }
  const data = {
    user: {
      email: email.value,
      password: password.value,
    },
  };
  fetch("http://localhost:3000/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};
</script>
<template>
  <h1 style="margin: 0 50% 20px 50%">Inscription</h1>
  <div class="articles-container">
    <p id="error-alert"></p>
    <form @submit="onRegister" class="form">
      <input type="text" @change="onEmail" id="email" name="email" class="input" />
      <input
        type="password"
        @change="onPassword"
        id="password"
        name="password"
        class="input"
      />
      <input type="submit" value="S'enregistrer" class="btn" />
    </form>
  </div>
</template>

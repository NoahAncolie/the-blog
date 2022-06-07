<script setup>
import { ref } from "vue";
import { useUserStore } from '../store/useUser'
import { storeToRefs, mapActions } from 'pinia'

const userStore = useUserStore()

const {email} = storeToRefs(userStore)
const { saveUser } = userStore

const logEmail = ref("");
const logPassword = ref("");

const onEmail = (event) => {
  logEmail.value = event.target.value;
};

const onPassword = (event) => {
  logPassword.value = event.target.value;
};

const getApiInfos = (event) => {
  event.preventDefault();
  if (logPassword.value === "" || logEmail.value === "") {
    let error = document.getElementById("error-alert");
    error.innerHTML = "Les champs doivent être remplis.";
    error.style.color = "red";
    return null;
  }

  const data = {
    user: {
      email: logEmail.value,
      password: logPassword.value,
    },
  };
  fetch("http://localhost:3000/users/sign_in", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log([...response.headers.get("authorization")].join(''));
      return response.json();
    })
    .then((response) => {
      console.log(response);
      saveUser(response.user.email, response.user.id)
    });
    document.getElementById('menu-link').click()
};
</script>

<template>
  <h1 style="margin: 0 50% 20px 50%">Connexion</h1>
  <div class="articles-container">
  <form @submit="getApiInfos" class="form">
    <input type="text" @change="onEmail" id="email" name="email" class="input" />
    <input type="password" @change="onPassword" id="password" name="password" class="input" />
    <input type="submit" value="Se connecter" class="btn"/>
  </form>
  </div>
</template>

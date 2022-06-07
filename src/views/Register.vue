<script setup>
import { ref } from 'vue';

const email = ref("")
const password = ref("")

const onEmail = (event) =>  {
    email.value = event.target.value
}

const onPassword = (event) => {
    password.value = event.target.value
}

const onLogin = (event) => {
    event.preventDefault();

    if (password.value === "" || email.value === "") {
        let error = document.getElementById("error-alert")
        error.innerHTML = "Les champs doivent être remplis."
        error.style.color = "red"
        return (null)
    }
  const data = {
    user: {
      email: email,
      password: password
      }
    }
  fetch('http://localhost:3000/users/sign_in', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log([...response.headers.get('authorization')].join(''))
      return response.json()
    })
    .then((response) => {
      console.log(response)
    })

}
</script>

<template>
<p id="error-alert"></p>
  <p>{{ email }}</p>
  <form @submit="onLogin">
    <input type="text" @change="onEmail" id="email" name="email"/>
    <input type="text" @change="onPassword" id="password" name="password"/>
    <input type="submit" value="S'enregistrer'" />
  </form>
</template>

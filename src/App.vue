<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./store/useUser";
import { storeToRefs, mapActions } from "pinia";
import "./assets/theme.scss";
const userStore = useUserStore();

const { id } = storeToRefs(userStore);
</script>

<template>
  <header>
    <nav>
      <RouterLink v-if="!id" to="/login">Login</RouterLink>
      <RouterLink v-if="!id" to="/register">Register</RouterLink>
      <RouterLink v-if="id" to="/poster">Poster</RouterLink>
      <RouterLink to="/" id="menu-link">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

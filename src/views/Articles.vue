<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/useUser";
import { storeToRefs, mapActions } from "pinia";

const userStore = useUserStore();

const { articles, id } = storeToRefs(userStore);
const { saveArticles } = userStore;

const setArticles = (data) => {
  saveArticles(data);
};

fetch(`http://localhost:3000/articles`, {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((response) => {
    setArticles(response);
  });
</script>

<template>
  <h1 style="margin: 0 50% 0 50%">ARTICLES</h1>
  <div v-for="(articles, index) in articles" :key="index" class="articles-container">
    <div class="article">
      <h4>{{ articles.title }}</h4>
      <p>{{ articles.content }}</p>
      <button v-if="articles.id === id">Supprimer</button>
    </div>
  </div>
</template>

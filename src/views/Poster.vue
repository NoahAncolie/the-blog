<script setup>
import { ref } from "vue";
import { useUserStore } from '../store/useUser'
import { storeToRefs, mapActions } from 'pinia'

const userStore = useUserStore()

const {id, token} = storeToRefs(userStore)


function CreatePost(e) {
    e.preventDefault();
    const data = {
      "article":{
        "title": document.getElementById('title').value,
        "content": document.getElementById('content').value,
        "user_id": id
      }
    }
    
    fetch(`http://localhost:3001/articles`, {
      method: 'post',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {return response.json()})
    .then((response) => {
      console.log(response);
    });

  }
</script>

<template>
  <h1 style="margin: 0 50% 20px 50%">Soummetre un post</h1>
  <div class="articles-container">
  <form @submit="CreatePost" class="form">
    <input type="text" id="title" name="title" class="input" />
    <textarea id="content" name="content" class="input" />
    <input type="submit" value="Poster" class="btn"/>
  </form>
  </div>
</template>

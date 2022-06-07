<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './store/useCounter.ts'
import { storeToRefs, mapActions } from 'pinia'
import "./assets/theme.scss"

</script>

<template>
 <header>
   <RouterLink to="/login">Login</RouterLink>
    <div class="wrapper">
      <button @click="getApiInfos">Click me</button>
    </div>
  </header>

  <RouterView /> 


</template>
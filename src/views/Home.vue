<script setup>
import { defineProps } from 'vue';
import homeCards from '@/jsonData/homeCards.json'
import { Button } from '@/components/Buttons';

defineProps({
    intro: {
        type: String,
        default: 'Website Intro'
    },
    motto: {
        type: String,
        default: 'Website Motto'
    }
})
</script>

<template>
    <section>
      <div class="container">
        <h1>{{ intro }}</h1>
        <h2>{{ motto }}</h2>
        <div class="cards">
          <div class="card" v-for="homeCard in homeCards" :key="homeCard.id" >
            <div v-html="homeCard.svg" class="svg"></div>
            <div class="content">
              <h2 class="title">{{ homeCard.title }}</h2>
            </div>
          </div>
<!--      <HomeCard v-for="homeCard in homeCards" :key="homeCard.id" :homeCard="homeCard"/>
 -->        </div>
        <div class="btn-wrap">
          <a href="/all-templates"><Button class="primary py-5" btnContent="see all available templates" /> </a>
        </div>
      </div>
    </section>
</template>

<style scoped>
section{
  min-height: 90vh;
  background: url(../assets/site-assets/backgrounds/home.jpg) center/cover fixed;
  @apply rounded-3xl
}
h1{
  background: var(--gradient);
  animation: rotateGradient 10s ease infinite;
  @apply bg-clip-text text-transparent text-5xl py-4 pt-0 font-semibold sm:text-7xl pt-12
}
h2{
  @apply text-2xl font-normal sm:text-4xl text-slate-700 px-3 my-5
}
.card{
  @apply cursor-default flex-row
}
@keyframes rotateGradient {
  0% {
    background: linear-gradient(to right, var(--secondary-color), var(--secondary-color), var(--accent-color), var(--accent-color));
    background-clip: text;
    -webkit-background-clip: text; 
  }
  25% {
    background: linear-gradient(to left, var(--secondary-color), var(--accent-color), var(--accent-color));
    background-clip: text;
    -webkit-background-clip: text; 
  }
  50% {
    background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
    background-clip: text;
    -webkit-background-clip: text; 
  }
  75% {
    background: linear-gradient(to left, var(--secondary-color), var(--secondary-color), var(--accent-color));
    background-clip: text;
    -webkit-background-clip: text; 
  }
  100% {
    background: linear-gradient(to right, var(--secondary-color), var(--secondary-color), var(--accent-color), var(--accent-color));
    background-clip: text;
    -webkit-background-clip: text; 
  }
}
</style>
<script setup>
import Button from '../Buttons/Button.vue';

defineProps({
  teamCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="card">
        <div class="img">
            <img :src="teamCard.teamImage" alt="Team Image">
        </div>
        <div class="text-content">
            <h1 class="name" >{{ teamCard.name }}</h1>
            <h2 class="role" >{{ teamCard.role }}</h2>
            <h3 class="description" >{{ teamCard.description }}</h3>
        </div>
        <a :href="teamCard.portfolio" target="_blank"><Button class="primary" btnContent="portfolio" /></a>
    </div>
</template>

<style scoped>
.card{
    @apply max-w-md
}

.img{
    img{
        @apply rounded-full object-cover h-52 w-52  
    }
    @apply bg-zinc-900 py-6 rounded-xl w-full h-full flex justify-center items-center
}

.text-content{
    .name{
      color: var(--accent-color);
      @apply text-4xl font-medium sm:text-5xl
    }
    .role{
        @apply text-xl text-slate-200 font-medium sm:text-2xl
    }
    .description{
        @apply text-slate-400 text-center
    }
    @apply flex flex-col justify-center items-center gap-2
}

</style>
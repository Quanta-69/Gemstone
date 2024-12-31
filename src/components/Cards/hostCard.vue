<script setup>
defineProps({
  hostCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="card">
    <div v-html="hostCard.svg" class="svg"></div>
    <div class="content">
      <h2 class="title">{{ hostCard.title }}</h2>
    </div>
</div>
</template>

<style scoped>
.card{
  @apply flex-row max-w-sm
}
</style>
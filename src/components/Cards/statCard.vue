<script setup>

defineProps({
  statCard: {
    type: Object,
    required: true
  },
})

</script>

<template>

<div class="card">
    <div v-html="statCard.svg" class="svg"></div>
    <div class="content">
      <h2 class="title count">{{ statCard.count }}</h2>
      <h3 class="text-content">{{ statCard.title }}</h3>
    </div>
</div>

</template>

<style scoped>
.card{
  @apply flex-row
}
.count{
  @apply text-2xl sm:text-4xl
}

</style>
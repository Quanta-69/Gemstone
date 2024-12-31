<script setup>
defineProps({
  homeCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
<div class="card">
    <div v-html="homeCard.svg" class="svg"></div>
    <div class="content">
      <h2 class="title">{{ homeCard.title }}</h2>
    </div>
</div>
</template>

<style scoped>
h2{
  font-size: var(--lg-font) !important;
}

</style>
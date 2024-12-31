<script setup>
defineProps({
  missionCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
<div class="card">
    <div v-html="missionCard.svg" class="svg"></div>
    <h2 class="title" >{{ missionCard.title }}</h2>
    <h3 class="content" >{{ missionCard.description }}</h3>
</div>
</template>

<style scoped>

</style>
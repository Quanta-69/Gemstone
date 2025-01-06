<script setup>
defineProps({
    processCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
<div class="card">
    <div class="svg" v-html="processCard.svg" ></div>
    <div class="content">
        <h2 class="step-name title">{{ processCard.title }}</h2>
        <h3 class="text-content">{{ processCard.description }}</h3>
    </div>
</div>
</template>

<style scoped>
</style>
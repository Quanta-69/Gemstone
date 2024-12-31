<script setup>
defineProps({
  paymentCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="card">
    <div v-html="paymentCard.svg" class="svg"></div>
    <div class="content">
      <h2 class="title">{{ paymentCard.title }}</h2>
    </div>
</div>
</template>

<style scoped>
.card{
  @apply flex-row
}
</style>
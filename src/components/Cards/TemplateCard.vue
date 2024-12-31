<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  template: Object, // Card data from parent
});

const emit = defineEmits(['cardClick']);

// Emit card data to the parent when clicked
const handleClick = () => {
  emit('cardClick', props.template);
};
</script>

<template>

<div class="card" title="Click For Full Details" @click="handleClick">
    <img :src="template.imagePath" alt="Template Image">
    <div class="text-content">
      <h2>{{ template.title }}</h2>
      <h3>{{ template.size }}</h3>
      <h3>{{ template.description }}</h3>
    </div>
</div>

</template>

<style scoped>
.card{
  @apply sm:max-w-md w-full max-w-lg pt-12 py-8
}
.text-content{
  @apply flex-col flex items-start justify-start gap-2 p-3 w-full
}
img{
  @apply h-full w-full rounded-xl
}
h2{
  color: var(--accent-color);
  @apply text-3xl font-medium text-purple-500
}
h3{
  @apply text-start text-slate-200 text-xl font-medium
}
</style>
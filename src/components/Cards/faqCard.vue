<script setup>
  import { ref } from 'vue';
  
const props = defineProps({
  faq: {
    type: Object,
    required: true,
  },
});

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="accordion-item">
      <button class="accordion-header" @click="toggle">
        {{ faq.question }} <span  class="h-12 w-12 inline-flex justify-center items-center" ><svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span>
      </button>
      <transition name="accordion">
        <div v-show="isOpen" class="accordion-content">
          <h3>{{ faq.answer }}</h3>
        </div>
      </transition>
    </div>
</template>
<style scoped>
  .accordion-item {
    @apply w-full rounded-md mb-4 overflow-hidden
  }
  .accordion-header {
    background:var(--gradient);
    @apply inline-flex items-center justify-between text-xl w-full text-left p-4 font-bold cursor-pointer border-none outline-none
  }
  .accordion-content {
    h3{
        @apply text-xl text-start w-full
    }
    @apply p-4 max-h-full overflow-hidden bg-zinc-800
  }
  .accordion-enter-active,
  .accordion-leave-active {
    transition: max-height 0.3s ease, padding 0.3s ease;
  }
  .accordion-enter-from,
  .accordion-leave-to {
    max-height: 0;
    padding: 0 1rem;
  }
  .accordion-enter-to,
  .accordion-leave-from {
    max-height: 200px; /* Adjust based on expected content */
    padding: 1rem;
  }
</style>
  
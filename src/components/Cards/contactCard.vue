<script setup>
defineProps({
  contactCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="card">
        <div class="svg" v-html="contactCard.svg"></div>
        <a rel="noopener noreferrer" class="link title" :href="contactCard.link" target="_blank" >{{ contactCard.linkName }} <div class="h-12 w-12 text-purple-500" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></div> </a>
    </div>
</template>

<style scoped>
.card{
    @apply max-w-xs flex-row items-center
}
.link{
  @apply inline-flex items-center justify-center
}
.link:hover div{
  transform: translateX(5px);
}
.link:hover{
  @apply text-rose-600
}
</style>
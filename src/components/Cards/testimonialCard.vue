<script setup>
defineProps({
  testimonialCard: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="card">
        <div class="svg" v-html="testimonialCard.svg"></div>
        <h3 class="text-content">{{ testimonialCard.content }}</h3>
        <div class="img">
            <img :src="testimonialCard.clientPic" alt="Testimonial Image">
        </div>
        <h2 class="name title">{{ testimonialCard.clientName }}</h2>
        <h2 class="occupation">{{ testimonialCard.clientRole }}</h2>
    </div>
</template>

<style scoped>
.card{
    @apply max-w-sm
}
.img{
    img{
        @apply h-20 w-20 rounded-full object-cover border-purple-100
    }
    @apply py-2 w-full flex items-center justify-center
}
.occupation{
    @apply text-slate-500 font-medium text-xl
}
</style>
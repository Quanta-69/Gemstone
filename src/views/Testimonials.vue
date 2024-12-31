<script setup>
import { testimonialCard } from '@/components/Cards';
import testimonialCards from '../jsonData/testimonials.json';
import { Button } from '@/components/Buttons';

</script>

<template>
<section>
    <div class="container">
        <h1 class="sect-intro">Testimonials</h1>
        <div class="sub-sect">
            <h2 class="sub-sect-title">What Our Clients Say About Us</h2>
            <div class="wrapper">
                <div class="cards">
                    <testimonialCard v-for="testimonialCard in testimonialCards" :key="testimonialCard.id" :testimonialCard="testimonialCard" />
                </div>
                <div class="btn-wrap">
                    <Button @click="$router.push({ name: 'AllTestimonials' })" class="primary end-btn" btnContent="view all testimonials" />
                </div>
            </div>
        </div>
        <div class="sub-sect ending-sub">
            <div class="wrapper">
                <h1>Your Business, Your Brand, Our Design.</h1>
                <h2>Every project is customized to meet your business needs.</h2>
                <a href="/all-templates"><Button class="primary" btnContent="let's find your gem" /></a>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.ending-sub{
  .wrapper{
    h1{
      @apply text-center text-4xl font-medium sm:text-6xl
    }
    h2{
      @apply text-center text-2xl font-medium text-slate-200 sm:text-4xl
    }

    @apply flex-col  rounded-xl
  }
}
</style>
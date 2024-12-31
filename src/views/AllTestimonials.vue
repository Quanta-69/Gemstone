<script setup>
import { testimonialCard } from '@/components/Cards';
import testimonialCards from '@/jsonData/allTestimonials.json';
import { Button } from '@/components/Buttons';

</script>

<template>
<section>
    <div class="container">
        <h1 class="sect-intro">All Testimonials</h1>
        <div class="sub-sect">
            <h2 class="sub-sect-title">What our clients say about us</h2>
            <div class="wrapper">
                <div class="cards">
                    <testimonialCard v-for="testimonialCard in testimonialCards" :key="testimonialCard.id" :testimonialCard="testimonialCard" />
                </div>
                <div class="btn-wrap">
                    <Button @click="$router.push({ name: 'Home' })" class="secondary end-btn" btnContent="go back home" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>
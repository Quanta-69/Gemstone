<script setup>
import { faqCard } from '@/components/Cards';
import faqCards from '../jsonData/faqs.json';

const faqs = faqCards;
</script>

<template>
<section>
    <div class="container">
        <h1 class="sect-intro">Got Questions? We’ve Got Answers</h1>
        <div class="sub-sect">
            <h2 class="sub-sect-title">Your Questions About Our Services, Answered.</h2>
            <div class="wrapper">
                <div class="accordion">
                    <faqCard v-for="faq in faqs" :key="faq.id" :faq="faq" />                </div>
                </div>
            </div>
        </div>
</section>
</template>

<style scoped>
.accordion {
  @apply w-full max-w-3xl flex flex-col items-center justify-center gap-4
}
</style>
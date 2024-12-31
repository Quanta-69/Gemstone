<script setup>
import { contactCard } from '@/components/Cards';
import contactCards from '../jsonData/contactCards.json';
import { Button } from '@/components/Buttons';
</script>

<template>
<section>
    <div class="container">
        <h1 class="sect-intro">Reach Out To Us</h1>
        <sub-sect>
            <h2 class="sub-sect-title">Get In Touch</h2>
            <div class="wrapper">
                <div class="cards">
                    <contactCard v-for="contactCard in contactCards" :key="contactCard.id" :contactCard="contactCard" />
                </div>
                <div class="extra">
                    <h1>Need assistance? Our support team is here to help you with any questions or issues you might have.</h1>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+2349134438269?text=Hello,%20I%20need%20support%20from%20Gemstone%20Sites.">
                        <Button class="primary" btnContent="contact support" />
                    </a>
                </div>
            </div>
        </sub-sect>
    </div>
</section>
</template>

<style scoped>
.wrapper{
    @apply flex-col-reverse
}
.cards{
    @apply max-w-4xl
}
.extra{
    h1{
        @apply text-left text-4xl font-medium
    }
    @apply max-w-xl flex items-center justify-center flex-col w-full gap-4
}
</style>
<script setup>
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
                    <div class="card max-w-xs flex-row items-center" v-for="contactCard in contactCards" :key="contactCard.id">
                        <div class="svg" v-html="contactCard.svg"></div>
                        <a rel="noopener noreferrer" class="link title inline-flex items-center justify-center" :href="contactCard.link" target="_blank" >{{ contactCard.linkName }} <div class="h-12 w-12 text-purple-500" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></div> </a>
                    </div>
<!--                     <contactCard v-for="contactCard in contactCards" :key="contactCard.id" :contactCard="contactCard" />
 -->                </div>
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
.link:hover div{
  transform: translateX(5px);
}
.link:hover{
  @apply text-rose-600
}
</style>
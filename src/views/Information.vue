<script setup>
import { hostCard, processCard, paymentCard } from '@/components/Cards';
import processCards from '@/jsonData/processes.json';
import hostCards from '@/jsonData/hostCards.json'
import paymentCards from '@/jsonData/paymentCards.json'
</script>

<template>
    <section>
        <div class="container">
            <h1 class="sect-intro">Discover the Magic</h1>

            <div class="sub-sect sub-1">
                <h2 class="sub-sect-title">Seamless Simplicity</h2>
                <div class="wrapper">
                    <div class="extra">
                        <h1>At Gemstone Sites, simplicity is our cornerstone. Here’s how we turn your website dreams into reality—step by step.</h1>
                    </div>                    
                    <div class="cards">
                        <processCard v-for="processCard in processCards" :key="processCard.id" :processCard="processCard" />
                    </div>
                </div>
            </div>

            <div class="sub-sect sub-3">
                <h2 class="sub-sect-title">Your Options at a Glance</h2>
                <div class="wrapper">
                    <div class="table-container">
                        <table class="responsive-table">
                            <thead>
                            <tr>
                                <th>Features</th>
                                <th>Amethyst</th>
                                <th>Ruby</th>
                                <th>Diamond</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Text Customization</td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                            </tr>
                            <tr>
                                <td>Color Customization</td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                            </tr>
                            <tr>
                                <td>Image Replacement</td>
                                <td class="red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                            </tr>
                            <tr>
                                <td>Layout Adjustments</td>
                                <td class="red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></td>
                                <td class="red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></td>
                                <td class="green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></td>
                            </tr>
                            <tr>
                                <td>Hosting Support</td>
                                <td>Optional</td>
                                <td>Optional</td>
                                <td>Optional</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="sub-sect sub-1">
                <h2 class="sub-sect-title">Seamless Hosting</h2>
                <div class="wrapper">
                    <div class="extra">
                        <h1>At Gemstone Sites, we simplify the hosting process to ensure a smooth experience for our clients. Here's how it works</h1>
                    </div>    
                    <div class="cards">
                        <hostCard v-for="hostCard in hostCards" :key="hostCard.id" :hostCard="hostCard" />
                    </div>
                </div>
            </div>

            <div class="sub-sect sub-1">
                <h2 class="sub-sect-title">Our Payment Methods</h2>
                <div class="wrapper">
                    <div class="cards">
                        <paymentCard v-for="paymentCard in paymentCards" :key="paymentCard.id" :paymentCard="paymentCard" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.sub-1{
    .cards{
        @apply max-w-4xl
    }
}
.extra{
    h1{
        @apply text-center text-4xl font-medium
    }
    @apply max-w-xl flex items-center justify-center flex-col w-full
}
.green{
    svg{
        @apply text-green-500
    }
}
.red{
    svg{
        @apply text-red-500
    }
}
td{
    @apply text-xl font-normal
}
.table-container {
  svg{
    @apply w-10 h-10
  }

  @apply w-full overflow-x-auto my-5 max-w-4xl
}
.responsive-table {
  @apply w-full border-collapse text-left
}
.responsive-table th, .responsive-table td {
  @apply text-center py-3 px-4
}
.responsive-table th {
  @apply font-bold text-2xl bg-zinc-800
}
.responsive-table tr:nth-child(even) {
  @apply bg-zinc-800
}
.responsive-table td {
  @apply text-center
}
/* Responsive adjustments */
@media screen and (max-width: 1000px) {
  .sub-3{
    @apply hidden 
  }
}
</style>
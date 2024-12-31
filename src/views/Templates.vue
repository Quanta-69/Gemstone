<script setup>
import Templates from '../jsonData/templates.json'; 
import { TemplateCard } from '@/components/Cards'; 
import Button from '@/components/Buttons/Button.vue';
import { ref, onMounted} from 'vue';
import templateModal from '@/components/Modals/templateModal.vue';

const filters = ref([
  "all",
  "landing page",
  "small business"
]);
const cards = ref([]);
const selectedCard = ref(null);
const isModalVisible = ref(false);
// Fetch JSON data
onMounted(async () => {
  const response = await fetch('../jsonData/templates.json');
  cards.value = await response.json();
});
// Open the modal with selected card data
const openModal = (card) => {
  selectedCard.value = card; // Set the selected card data
  isModalVisible.value = true; // Show the modal
};
// Cards data from JSON
const templates = ref(Templates);
// Active filter
const activeFilter = ref('all');
// Method to filter cards based on the active filter
const filteredCards = (filter) => {
  return filter === 'all'
    ? templates.value
    : templates.value.filter((template) => template.type === filter);
};
// Method to change the active filter
const filterCards = (filter) => {
  activeFilter.value = filter;
};
</script>

<template>
  
<section id="templates" >
  <div class="container">
    <h1 class="sect-intro">Available Templates</h1>

    <div class="sub-sect">
      <h2 class="sub-sect-title">Find Your Perfect Match</h2>
      <div class="wrapper">
        <div class="btn-wrap bg-zinc-800 rounded-xl shadow-md">
         <Button class="primary" v-for="filter in filters" :key="filter" :class="{ 'active-button': activeFilter === filter }" @click="filterCards(filter)" :btnContent="filter" />
        </div>
        <div class="cards">
          <TemplateCard v-for="template in filteredCards(activeFilter)" :key="template.id" :template="template" @cardClick="openModal" />
          <!-- Render the modal -->
          <templateModal v-if="isModalVisible" :modalData="selectedCard" @update:visible="isModalVisible = $event"/>
        </div>
        <div class="btn-wrap"><Button @click="$router.push({ name: 'AllTemplates' })" class="primary end-btn" btnContent="view all available templates"/></div>
      </div>
    </div>
    <div class="sub-sect ending-sub">
      <div class="wrapper">
        <h1>Didn't see your desired template?</h1>
        <h2>Describe your idea and we'll do the <span>Magic</span></h2>
        <a href="https://wa.me/+2349134438269?text=Hello%20Gemstone%20Sites,%20I%20didn't%20see%20my%20desired%20template%20on%20your%20site.%20I%20have%20an%20idea%20for%20a%20custom%20template%20and%20would%20like%20to%20discuss%20it%20with%20you.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%20Thank%20you!" target="_blank" rel="noopener noreferrer"><Button class="primary end-btn" btnContent="tell us your idea" /></a>
      </div>
    </div>
  </div> 
</section>

</template>

<style scoped>
section{
}
.card{
  @apply cursor-pointer
}
.active-button{
  color: var(--highlight-color) !important;
  background: var(--dark-text) !important;
}
span{
  background: var(--gradient); 
  @apply text-transparent uppercase bg-clip-text font-medium
}
.ending-sub{
  .wrapper{
    h1{
      @apply text-center text-4xl font-medium sm:text-6xl
    }
    h2{
      @apply text-center text-2xl font-medium text-slate-400 sm:text-4xl
    }

    @apply flex-col rounded-xl
  }
}
</style>
  
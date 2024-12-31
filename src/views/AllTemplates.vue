<script setup>
import Templates from '../jsonData/allTemplates.json'; 
import { TemplateCard } from '@/components/Cards'; 
import Button from '@/components/Buttons/Button.vue';
import { defineProps, ref, onMounted} from 'vue';
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
defineProps({
  limit:Number,
})
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
  
  <section>
    <div class="container">
      <h1 class="sect-intro">All Available Templates</h1>
  
      <div class="sub-sect">
        <h2 class="sub-sect-title">Find Your Perfect Match</h2>
        <div class="wrapper">
          <div class="btn-wrap sm:sticky top-0 z-10 bg-zinc-800 rounded-xl shadow-md ">
           <Button class="primary" v-for="filter in filters" :key="filter" :class="{ 'active-button': activeFilter === filter }" @click="filterCards(filter)" :btnContent="filter" />
          </div>
          <div class="cards">
            <TemplateCard v-for="template in filteredCards(activeFilter)" :key="template.id" :template="template" @cardClick="openModal" />
            <!-- Render the modal -->
            <templateModal v-if="isModalVisible" :modalData="selectedCard" @update:visible="isModalVisible = $event"/>
          </div>
          <div class="btn-wrap"><Button @click="$router.push({ name: 'Home' })" class="primary end-btn" btnContent="go home"/></div>
        </div>
      </div>
    </div> 
  </section>
  
</template>
  
<style scoped>
  .card{
    @apply cursor-pointer
  }
  .active-button{
    color: var(--highlight-color) !important;
    background: var(--dark-text) !important;
  }
</style>    
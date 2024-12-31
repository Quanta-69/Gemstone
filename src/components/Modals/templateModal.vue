<script setup>
import { defineProps, defineEmits, watch } from 'vue';
import Button from '../Buttons/Button.vue';

const props = defineProps({
  modalData: Object, // Data for the selected card
});
const emit = defineEmits(['update:visible']);
const closeModal = () => {
  emit('update:visible', false); // Notify parent to close the modal
};

/* watch(() => modalData, (newVal) => {
  if (newVal) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}); */

</script>

<template>
<div class="modal-overlay" @click="closeModal">
  <div class="modal-background"></div>
  <div class="modal-content" @click.stop>

    <button class="close-btn" @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg></button>

    <div class="top-layer">
      <div class="temp-image">
        <img :src="modalData.imagePath" alt="">
      </div>
      <div class="temp-details">
        <h1 class="name" >{{ modalData.title }}</h1>
        <h3>Type: {{ modalData.type }}</h3>
        <h3>Size: {{ modalData.size }}</h3>
        <h3>{{ modalData.description}}</h3>
      </div>
    </div>

    <div class="bottom-layer">
      <div class="tiers">
        <div class="tier amethyst">
          <h2>Amethyst</h2>
          <h3 class="price">{{ modalData.aPrice }}</h3>
          <a :href="modalData.amethystLink" target="_blank" class="bg-purple-400"  rel="noopener noreferrer" >Get Now</a>
        </div>
        <div class="tier ruby">
          <h2>Ruby</h2>
          <h3 class="price">{{ modalData.rPrice }}</h3>
          <a :href="modalData.rubyLink" target="_blank" class="bg-rose-400" rel="noopener noreferrer">Get Now</a>
        </div>
        <div class="tier diamond">
          <h2>Diamond</h2>
          <h3 class="price">{{ modalData.dPrice }}</h3>
          <a :href="modalData.diamondLink" target="_blank" class="bg-sky-400" rel="noopener noreferrer">Get Now</a>
        </div>
      </div>
        <a :href="modalData.demoLink" target="_blank" rel="noopener noreferrer"  class="live-demo"><Button class="primary" btnContent="preview template" /></a>
    </div>

  </div>
</div>
</template>


<style scoped>
.modal-overlay {
  z-index: 1000 ;
  @apply h-full fixed inset-0 flex justify-center items-center z-10
}
.modal-background {
  z-index: 1001;
  background: rgba(0, 0, 0, 0.4);
  @apply absolute inset-0 backdrop-blur-md
}
.modal-content{
  .close-btn{
    svg{
      @apply w-full h-full
    }
    @apply absolute bg-red-800 hover:bg-red-500 rounded-full p-2 h-10 w-10 right-0 top-0 
  }
  z-index: 1001;
  @apply w-full max-w-5xl relative bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4
}
.top-layer{
  .temp-image{
    img{
      @apply h-full w-full rounded-xl
    }
    @apply h-full w-full max-w-md rounded-xl hidden sm:block
  }
  .temp-details{
    h1, h3{
      @apply text-start font-medium my-1
    }
    h1{
        @apply text-2xl text-purple-500 sm:text-4xl
    }
    h3{
      @apply text-xl sm:text-xl break-words
    } 
  }

  @apply bg-zinc-800 w-full rounded-xl flex items-center justify-start flex-wrap p-4 gap-4
}
.bottom-layer{
  .tiers{
    .tier{
      h2{
        @apply text-xl font-medium text-zinc-400 sm:text-2xl
      }
      h3{
        @apply text-xl font-medium sm:text-2xl
      }
      a{
        @apply  text-black text-xl font-medium px-4 py-1 rounded-md hover:bg-white hover:text-black
      }
      @apply border-l-2 border-r-2 border-indigo-400 px-2 sm:px-6 flex items-center justify-center flex-col gap-2
    }

    @apply w-full p-4  flex justify-evenly items-center flex-wrap gap-8
  }
  @apply  w-full rounded-xl flex items-center justify-center flex-col gap-2 p-2
}
</style>
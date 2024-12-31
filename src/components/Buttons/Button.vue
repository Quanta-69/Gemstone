<script setup>
import { defineProps } from 'vue';
/* import { useRouter } from 'vue-router';
 */
const props = defineProps({
    btnContent: {
        type: Object,
        default: 'button content',
        required: true
    },
    to: {
    type: String,
    required: true,
    },
})

/* const router = useRouter();
const navigate = () => {
  router.push(props.to); 
}; */
</script>

<template>

    <button @click="navigate">{{ btnContent }}</button>

</template>

<style scoped>
/* Primary Button */
button.primary{
    background: var(--highlight-color);
    color: var(--dark-text);
}
button.primary::before{
    background-color: var(--dark-text);
}
button.primary:hover{
    color: var(--light-text);
}
/* Primary Button End */

/* Secondary Button */
button.secondary{
    background: var(--dark-text);
    color: var(--highlight-color);
}
button.secondary::before{
    background: var(--highlight-color);
}
button.secondary:hover{
    color: var(--dark-text);
}
/* Secondary Button End */
</style>
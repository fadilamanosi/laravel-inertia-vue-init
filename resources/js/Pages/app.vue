<template>
    <div class="text-green-700 text-2xl ">
        Complete inertia app
    </div>
</template>

<script  setup>

import { onMounted } from 'vue';

onMounted(() => {
    console.log(route('app'))
});


</script>
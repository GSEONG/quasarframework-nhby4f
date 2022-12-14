<template>
  <div
    :class="`bg-${mainColor}`"
    class="fullscreen text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        :text-color="mainColor"
        unelevated
        to="/index"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mainColor = ref('warning');
</script>

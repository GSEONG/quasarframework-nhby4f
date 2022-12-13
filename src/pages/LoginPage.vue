<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">Login</div>

      <div class="text-h2" style="opacity: 0.4">ID:</div>
      <div class="text-h2" style="opacity: 0.4">PW:</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/index"
        label="Go Home"
        no-caps
        @click="login"
      />
    </div>
  </div>
</template>

<script setup>
const login = () => {
  localStorage.setItem('test', 1234);
};
</script>

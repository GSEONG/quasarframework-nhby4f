<template>
  <q-page :style-fn="myTweak" class="flex row justify-center">
    <q-card
      v-for="i in 9"
      :key="i"
      class="column flex-center q-mx-lg q-my-md col-3"
    >
      <q-img
        src="https://w.namu.la/s/dc42bb0527e08b0d65f370f3a8ad1c471ccbd90a5f01b85343e6471c7f4100486b9be8514d380c33651c70fdc1c7da610cd2effaa9696b1226d29082faa22131e41b8bd7a75491abd0819c4789a517c0db561694b1ce1b4d412b59b5e2b551eb549e8e1b2b09ec004db0e4ab604e935d"
        style="height: 140px; max-width: 150px"
        class="q-my-md"
      />
      <q-card-section class="q-ma-none q-pa-none text-weight-bolder"
        >I love cats</q-card-section
      >
      <q-card-section class="q-ma-xs q-pa-none q-px-sm"
        >Need to check on human, have not seen in an hour might be dead oh look,
        human is alive, hiss at human, feed me chill me on the couch
        table.</q-card-section
      >
      <q-btn class="q-ma-sm">click</q-btn>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const offset = ref(300);

const myTweak = (offset) => {
  return {
    minHeight: offset ? `calc(50vh - ${offset}px)` : '50vh',
  };
};
</script>

<style scoped lang="scss">
.wrapp {
  gap: 1em 3em;
}
</style>

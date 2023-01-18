<template>
  <q-page class="column flex-center">
    <div class="row full-width">
      <q-card class="col-xs-10">
        <q-toolbar>
          <q-input
            class="full-width"
            borderless
            dense
            placeholder="Search"
            :model-value="filter"
          >
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>
        <q-list bordered>
          <q-item>
            <q-item-section side>
              <q-checkbox :model-value="true" />
            </q-item-section>
            <q-item-section> 마우스좌표:{{ x }}, {{ y }}</q-item-section>
            <q-item-section side>
              <q-btn flat round size="sm" icon="delete" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <div class="col-xs-2">
        <q-toolbar class="bg-primary">
          <q-btn
            fab
            color="secondary"
            round
            icon="add"
            style="margin-bottom: -42px"
            class="q-ml-xs"
          />
        </q-toolbar>
      </div>
    </div>
    <q-btn
      color="black"
      text-color="primary"
      label="show"
      @click="isShow = !isShow"
    />
    <q-knob
      v-show="isShow"
      v-model="count"
      :min="min"
      :max="max"
      size="80px"
      show-value
      :thickness="0.13"
      color="primary"
      track-color="dark"
    >
      <q-avatar size="75px">
        <img alt="Quasar logo" src="~assets/quasar-logo-inner.svg" />
      </q-avatar>
    </q-knob>

    <img
      v-show="isShow"
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 140px"
    />

    <div class="q-mt-xl" v-show="isShow">
      <q-btn
        color="primary"
        dense
        round
        label="-"
        :disabled="count === min"
        @click="count--"
      />

      <span class="q-mx-md text-bold" v-show="isShow">{{ count }}</span>
      <span class="q-mx-md text-bold" v-show="isShow"
        >Mosuse position is at: {{ mouse.x }}, {{ mouse.y }}</span
      >

      <q-btn
        v-show="isShow"
        color="primary"
        dense
        round
        label="+"
        :disable="count === max"
        @click="count++"
      />
    </div>

    <div class="q-mt-md" style="width: 200px" v-show="isShow">
      <q-slider v-model="count" :min="min" :max="max" />
    </div>

    <div class="row wrapp flex-center">
      <CardView
        v-for="(item, idx) in testList"
        :key="idx"
        class="col-xs-11 col-sm-5 col-md-3 self-stretch"
      >
        <template #title>
          Title <strong>#{{ idx }}</strong>
        </template>
        <template #default>
          {{ testList[idx] }}
        </template>
      </CardView>
      <CardView class="col-xs-11 col-sm-5 col-md-3 self-stretch" />
      <CardView class="col-xs-11 col-sm-5 col-md-3 self-stretch" />
    </div>
    <RadioView :valList="valListABC" />
    <RadioView :valList="valListNum" />
    <RadioView :valList="valListHan" />
    <RadioView :valList="valListHan" />
    {{ data }}
    {{ error }}
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import RadioView from '../components/RadioView.vue';
import CardView from '../components/CardView.vue';

import { useMouse } from '../composables/useMouse.js';
import { useFetch } from '../composables/useFetch.js';

const router = useRouter();
const { x, y } = useMouse();
const mouse = reactive(useMouse());
const url = ref('https://pokeapi.co/api/v2/pokemon/ditto');
const { data, error } = useFetch(url);

const count = ref(0);
const valListABC = ref(['a', 'b', 'c', 'd']);
const valListNum = ref(['1', '2', '3', '4']);
const valListHan = ref(['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ']);
const min = -5;
const max = 5;
const isShow = ref(true);
const search = ref('');

const testList = ref([
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
  'Nulla eleifend, eros et ornare dictum, arcu urna rhoncus orci, sit amet feugiat nunc risus id massa. Maecenas at dapibus elit. Duis egestas lacus id convallis pellentesque. In hac habitasse platea dictumst. Vestibulum faucibus velit urna, vitae tincidunt nunc eleifend vel. Vestibulum id dui id leo malesuada aliquam vitae quis ipsum.',
  'Ut vel mollis nisl, id molestie ipsum. Pellentesque feugiat faucibus mi, nec faucibus dui sollicitudin rhoncus. Curabitur iaculis sem ligula. Nam porta lectus sed diam porttitor rhoncus. Vestibulum a malesuada nibh. Proin dapibus augue id auctor aliquet. Phasellus convallis est sit amet eros dapibus, nec porttitor tortor dapibus. Proin eu quam vel elit euismod feugiat. Nulla eleifend turpis purus, et tincidunt augue volutpat ac. Aenean vestibulum feugiat lorem.',
  'Nunc tristique pharetra ipsum ac vestibulum. Curabitur eros est, vestibulum et nibh in, viverra fringilla ex. Vestibulum egestas, enim a tincidunt facilisis, dui justo tempus enim, ac ultrices orci mi sed arcu. Mauris ut dui nunc. Mauris varius, odio eu ornare ultrices, elit tellus viverra ante, eu dapibus leo mauris eget orci. Donec vitae ornare tortor. Pellentesque a dui vel ligula fringilla malesuada ut vitae quam.',
  'Proin egestas, enim sit amet placerat mattis, purus orci posuere augue, quis luctus dolor metus id nibh. Morbi tempus iaculis ex, nec feugiat purus hendrerit ut. Donec placerat ante odio, in commodo libero consectetur vel. Duis pretium, nisl at volutpat condimentum, sapien metus bibendum sem, id tristique nisl odio vitae metus. Mauris vehicula, elit id laoreet cursus, purus ante mattis elit, quis tempor purus massa sed neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla congue ultricies dui in vehicula. Sed gravida lorem fringilla nibh volutpat dignissim.',
]);

const goRouter = (name) => {
  router.push(name);
};
</script>

<style scoped lang="scss">
.wrapp {
  gap: 1em 3em;
}
</style>
